"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = __importDefault(require("../lib/event"));
// Import functions
const crc_1 = __importDefault(require("../lib/crc"));
const utils_1 = require("../lib/utils");
// Import data
const config_1 = require("./config");
// Import constants for Main ID
const constant_1 = require("../lib/constant");
// Import constants for Sub ID or other value
const constant_2 = require("../lib/constant");
/**
 * Main class contains all the functions
 */
class HKQR {
    constructor() {
        /** @category Format Indicator */
        this.formatIndicator = "01"; // ID: 00 // Fixed
        /** @category Point of Initiation */
        this.initiationPoint = "11"; // ID: 01
        /** @category Merchant Account */
        this.merchantAccount = "26"; // ID: [02..51] // Default FPS
        /** @category Merchant Account */
        this.merchantAccountInfo = {
            uniqueIdentifier: "hk.com.hkicl"
        };
        /** @category Merchant Information */
        this.merchantCategory = "0000"; // ID: 52 // 0000 is Dummy value
        /** @category Transaction Data */
        this.transactionCurrency = "HKD"; // ID: 53
        /** @category Merchant Information */
        this.countryCode = "HK"; // ID: 58
        /** @category Merchant Information */
        this.merchantName = "NA"; // ID: 59
        /** @category Merchant Information */
        this.merchantCity = "HK"; // ID: 60
    }
    /**
     * Prevent function throwing error and stop the script.
     * You may need to handle the error yourself.
     * @category static
     */
    static Silent() {
        event_1.default.Silent();
    }
    /**
     * Function to help building the resulting string
     */
    payload(id, content = "") {
        return `${id}${utils_1.numberToValidId(content.length)}${content}`;
    }
    /**
     * Function to validate a string as alphanumeric special string (A-z0-9.@_+-)
     * @param x Source string
     * @param length Maximum length available
     */
    setAlphanumericSpecial(x, length) {
        let event = new event_1.default();
        if (typeof x === "undefined") {
            event.setError("Not Specified", true);
        }
        else if (x.length > length) {
            event.setError(`Length Exceeds Limit (>${length})`, true);
        }
        else if (!utils_1.isAlphanumericSpecial(x)) {
            event.setError("Should Contains Certain Characters Only (A-z0-9.@_+-)", true);
        }
        return event;
    }
    /**
     * Function to validate a string or number as a valid numeric string
     * @param x Source string or number
     * @param fraction Force the number to be converted in fixed-point notation (i.e. `x.toFixed(fraction)`)
     * @param limit Maximum length available
     */
    setNumeric(x, fraction = false, limit = 13) {
        let str, event = new event_1.default();
        if (typeof x === "undefined") {
            event.setError("Not Specified", true);
        }
        else if (typeof x === "string")
            str = x;
        else if (typeof fraction === "number")
            str = x.toFixed(fraction);
        else
            str = x.toString();
        if (!event.isError()) {
            if (!/^[0-9.]+$/.test(str)) {
                event.setError("Should Contains Certain Characters Only (0-9.)", true);
            }
            else if (parseFloat(str) <= 0) {
                event.setError("Exceeds Limit (<=0)", true);
            }
            else if (str.length > limit) {
                event.setError(`Length Exceeds Limit (>${limit}) (Including "." Character)`, true);
            }
            else {
                event.data = str;
            }
        }
        return event;
    }
    /**
     * Extract and parse data from plaintext
     * @param x Plaintext decoded from QR code
     */
    parse(x) {
        let event = this.extract(x);
        if (event.isError())
            return event;
        let data = JSON.parse(JSON.stringify(event.data));
        for (let id in data) {
            if (event.isError())
                continue;
            let content = data[id];
            if (id == constant_1.FORMAT_INDICATOR) {
                // Fixed
            }
            else if (id == constant_1.INITIATION_POINT) {
                if (content == constant_2.STATIC_QR_CODE || content == constant_2.DYNAMIC_QR_CODE) {
                    this.initiationPoint = content;
                }
                else {
                    event.setError(`Invalid Initiation Point (id=${id})`);
                }
            }
            else if (id == constant_1.MERCHANT_CATEGORY_CODE) {
                if (content in config_1.ISO_MERCHANT_CATEGORY) {
                    this.merchantCategory = content;
                }
            }
            else if (id == constant_1.TRANSACTION_CURRENCY) {
                let currency = Object.keys(config_1.ISO_CURRENCY).filter(v => config_1.ISO_CURRENCY[v] == content);
                if (currency.length > 0) {
                    this.setTransactionCurrency(currency[0]);
                }
                else {
                    event.setError(`Invalid Transaction Currency (id=${id})`);
                }
            }
            else if (id == constant_1.TRANSACTION_AMOUNT) {
                this.setTransactionAmount(content);
            }
            else if (id == constant_1.CONVENIENCE_FEE_INDICATOR) {
                // Set this value if found id=56 or id=57
            }
            else if (id == constant_1.CONVENIENCE_FEE_FIXED) {
                this.setConvenienceFeeAmount(content);
            }
            else if (id == constant_1.CONVENIENCE_FEE_PERCENT) {
                this.setConvenienceFeePercent(content);
            }
            else if (id == constant_1.COUNTRY_CODE) {
                if (content in config_1.ISO_COUNTRY) {
                    this.countryCode = content;
                }
            }
            else if (id == constant_1.MERCHANT_NAME) {
                this.merchantName = content;
            }
            else if (id == constant_1.MERCHANT_CITY) {
                this.merchantCity = content;
            }
            else if (id == constant_1.POSTAL_CODE) {
                this.postalCode = content;
            }
            else if (id == constant_1.ADDITIONAL_INFORMATION) {
                this.setAdditionalInfo(content);
            }
            else if (id == constant_1.CYCLIC_REDUNDANCY_CHECK) {
                // Already Checked
            }
            else if (config_1.MERCHANT.ACCOUNTS.indexOf(id) != -1) {
                this.setMerchantAccount(content);
            }
        }
        return event;
    }
    /**
     * Extract data from plaintext
     * @param x Plaintext decoded from QR code
     */
    extract(x = "") {
        let event = new event_1.default();
        if (x.length == 0) {
            event = this.generate();
            if (event.isError())
                return event;
            x = event.data;
            delete event.data;
        }
        let e = utils_1.extract(x);
        if (e.length == 1) {
            let data = e[0], crc = data[constant_1.CYCLIC_REDUNDANCY_CHECK], crcStr = constant_1.CYCLIC_REDUNDANCY_CHECK + "04", crcCheck = x.split(`${crcStr}${crc}`)[0] + crcStr;
            if (!crc || crc_1.default(crcCheck) != crc) {
                event.setError("Invalid Input - Invalid CRC");
            }
            else {
                event.data = data;
            }
        }
        else {
            event.setError("Invalid Input");
        }
        return event;
    }
    /**
     * Generate resulting string for QR code
     */
    generate() {
        let code = "", event = new event_1.default();
        code += this.payload(constant_1.FORMAT_INDICATOR, this.formatIndicator);
        code += this.payload(constant_1.INITIATION_POINT, this.initiationPoint);
        // Merchant Data
        let merchantAccount = "";
        if (config_1.MERCHANT.TEMPLATE_ACCOUNTS.indexOf(this.merchantAccount) != -1) {
            if (!this.merchantAccountInfo) {
                event.setError("Missing Merchant Account Information");
                return event;
            }
            if (!this.merchantAccountInfo.uniqueIdentifier) {
                event.setError("Missing Merchant Unique Identifier");
                return event;
            }
            merchantAccount += this.payload(constant_2.MERCHANT_ACCOUNT_UNIQUE, this.merchantAccountInfo.uniqueIdentifier);
            if (this.merchantAccountInfo.paymentNetwork) {
                Object.keys(this.merchantAccountInfo.paymentNetwork).map((id) => {
                    merchantAccount += this.payload(id, this.merchantAccountInfo.paymentNetwork[id]);
                });
            }
        }
        if (merchantAccount.length > 99) {
            event.setError("Merchant Account Information Length Exceeds Limit (>99)");
            return event;
        }
        code += this.payload(this.merchantAccount, merchantAccount);
        code += this.payload(constant_1.MERCHANT_CATEGORY_CODE, this.merchantCategory);
        // Transaction Data
        code += this.payload(constant_1.TRANSACTION_CURRENCY, config_1.ISO_CURRENCY[this.transactionCurrency]);
        if (this.transactionAmount && parseFloat(this.transactionAmount) > 0) {
            code += this.payload(constant_1.TRANSACTION_AMOUNT, this.transactionAmount);
        }
        if (this.convenienceFeeIndicator) {
            code += this.payload(constant_1.CONVENIENCE_FEE_INDICATOR, this.convenienceFeeIndicator);
            if (this.convenienceFeeIndicator == constant_1.CONVENIENCE_FEE_FIXED) {
                code += this.payload(constant_1.CONVENIENCE_FEE_FIXED, this.convenienceFeeAmount);
            }
            else {
                code += this.payload(constant_1.CONVENIENCE_FEE_PERCENT, this.convenienceFeePercent);
            }
        }
        // Additional Merchant Data
        code += this.payload(constant_1.COUNTRY_CODE, this.countryCode);
        code += this.payload(constant_1.MERCHANT_NAME, this.merchantName);
        code += this.payload(constant_1.MERCHANT_CITY, this.merchantCity);
        if (this.postalCode) {
            code += this.payload(constant_1.POSTAL_CODE, this.postalCode);
        }
        // Additional Data
        let additionalInfo = "";
        if (this.additionalInfo) {
            if (this.additionalInfo.billNumber) {
                additionalInfo += this.payload(constant_2.ADDITIONAL_INFO_BILL, this.additionalInfo.billNumber);
            }
            if (this.additionalInfo.mobileNumber) {
                additionalInfo += this.payload(constant_2.ADDITIONAL_INFO_MOBILE, this.additionalInfo.mobileNumber);
            }
            if (this.additionalInfo.storeLabel) {
                additionalInfo += this.payload(constant_2.ADDITIONAL_INFO_STORE, this.additionalInfo.storeLabel);
            }
            if (this.additionalInfo.loyaltyNumber) {
                additionalInfo += this.payload(constant_2.ADDITIONAL_INFO_LOYALTY, this.additionalInfo.loyaltyNumber);
            }
            if (this.additionalInfo.referenceLabel) {
                additionalInfo += this.payload(constant_2.ADDITIONAL_INFO_REFERENCE, this.additionalInfo.referenceLabel);
            }
            if (this.additionalInfo.customerLabel) {
                additionalInfo += this.payload(constant_2.ADDITIONAL_INFO_CUSTOMER, this.additionalInfo.customerLabel);
            }
            if (this.additionalInfo.terminalLabel) {
                additionalInfo += this.payload(constant_2.ADDITIONAL_INFO_TERMINAL, this.additionalInfo.terminalLabel);
            }
            if (this.additionalInfo.transactionPurpose) {
                additionalInfo += this.payload(constant_2.ADDITIONAL_INFO_PURPOSE, this.additionalInfo.transactionPurpose);
            }
            if (this.additionalInfo.customerDataRequest) {
                additionalInfo += this.payload(constant_2.ADDITIONAL_INFO_REQUEST, this.additionalInfo.customerDataRequest);
            }
            if (this.additionalInfo.extra) {
                Object.keys(this.additionalInfo.extra).map((id) => {
                    additionalInfo += this.payload(id, this.additionalInfo.extra[id]);
                });
            }
        }
        if (additionalInfo.length > 99) {
            event.setError("Additional Information Length Exceeds Limit (>99)");
            return event;
        }
        else if (additionalInfo.length > 0) {
            code += this.payload(constant_1.ADDITIONAL_INFORMATION, additionalInfo);
        }
        // CRC check
        this.cyclicRedundancyCheck = crc_1.default(code + constant_1.CYCLIC_REDUNDANCY_CHECK + "04");
        code += this.payload(constant_1.CYCLIC_REDUNDANCY_CHECK, this.cyclicRedundancyCheck);
        // Localized Merchant Data
        let merchantInfo = "";
        if (this.merchantInfo) {
            if (!this.merchantInfo.language) {
                event.setError("Missing Language of Localization");
                return event;
            }
            if (!this.merchantInfo.merchantName) {
                event.setError("Missing Localized Merchant Name");
                return event;
            }
            merchantInfo += this.payload(constant_2.MERCHANT_INFO_LANGUAGE, this.merchantInfo.language);
            merchantInfo += this.payload(constant_2.MERCHANT_INFO_NAME, this.merchantInfo.merchantName);
            if (this.merchantInfo.merchantCity) {
                merchantInfo += this.payload(constant_2.MERCHANT_INFO_CITY, this.merchantInfo.merchantCity);
            }
            if (this.merchantInfo.extra) {
                Object.keys(this.merchantInfo.extra).map((id) => {
                    merchantInfo += this.payload(id, this.merchantInfo.extra[id]);
                });
            }
        }
        if (merchantInfo.length > 99) {
            event.setError("Localized Merchant Information Length Exceeds Limit (>99)");
            return event;
        }
        else if (merchantInfo.length > 0) {
            code += this.payload(constant_1.LOCALIZE_MERCHANT, merchantInfo);
        }
        event.data = code;
        return event;
    }
    /**
     * Check if it is a static QR Code
     * @category Point of Initiation
     */
    isStaticQRCode() {
        return this.initiationPoint == constant_2.STATIC_QR_CODE;
    }
    /**
     * Get setting
     * @category Point of Initiation
     */
    getInitiationPoint() {
        let event = new event_1.default();
        event.data = this.initiationPoint;
        return event;
    }
    /**
     * Update current setting
     * @category Point of Initiation
     */
    setInitiationPoint(x) {
        let event = new event_1.default();
        if (!(x == constant_2.STATIC_QR_CODE && x == constant_2.DYNAMIC_QR_CODE)) {
            event.setError("Invalid Point of Initiation");
        }
        else {
            this.initiationPoint = x;
        }
        return event;
    }
    /**
     * Get merchant ID
     * @category Merchant Account
     */
    getMerchantAccountId() {
        let event = new event_1.default();
        event.data = this.merchantAccount;
        return event;
    }
    /**
     * Set merchant ID
     * @category Merchant Account
     */
    setMerchantAccountId(x) {
        let event = new event_1.default();
        if (config_1.MERCHANT.ACCOUNTS.indexOf(x) == -1) {
            event.setError("Invalid Merchant Account ID");
        }
        else {
            this.merchantAccount = x;
        }
        return event;
    }
    /**
     * Get country/region that the transaction take place
     * @category Merchant Information
     */
    getCountryCode() {
        let event = new event_1.default();
        event.data = this.countryCode;
        return event;
    }
    /**
     * Set country/region that the transaction take place
     * @category Merchant Information
     */
    setCountryCode(x) {
        let event = new event_1.default();
        if (!(x in config_1.ISO_COUNTRY)) {
            event.setError("Invalid Country Code");
        }
        else {
            this.countryCode = x;
        }
        return event;
    }
    /**
     * Get merchant account data
     * @category Merchant Account
     */
    getMerchantAccount() {
        let event = new event_1.default(), info;
        if (this.merchantAccountInfo) {
            info[constant_2.MERCHANT_ACCOUNT_UNIQUE] = this.merchantAccountInfo.uniqueIdentifier;
            if (this.merchantAccountInfo.paymentNetwork) {
                info = Object.assign(Object.assign({}, info), this.merchantAccountInfo.paymentNetwork);
            }
        }
        event.data = info;
        return event;
    }
    /**
     * Set merchant account data
     * @category Merchant Account
     */
    setMerchantAccount(x) {
        let event = new event_1.default(), uniqueIdentifier;
        if (constant_2.MERCHANT_ACCOUNT_UNIQUE in x) {
            event = this.setAlphanumericSpecial(x[constant_2.MERCHANT_ACCOUNT_UNIQUE], 32);
            if (event.isError()) {
                event.setError(`Unique Identifier ${event.message}`);
                return event;
            }
            else {
                uniqueIdentifier = x[constant_2.MERCHANT_ACCOUNT_UNIQUE];
            }
            delete x[constant_2.MERCHANT_ACCOUNT_UNIQUE];
        }
        if (!this.merchantAccountInfo) {
            if (!uniqueIdentifier) {
                event.setError("Missing Merchant Unique Identifier");
                return event;
            }
            else {
                this.merchantAccountInfo = {
                    uniqueIdentifier: uniqueIdentifier
                };
            }
        }
        if (uniqueIdentifier) {
            this.merchantAccountInfo.uniqueIdentifier = uniqueIdentifier;
        }
        for (let id in x) {
            if (event.isError())
                continue;
            event = this.setAlphanumericSpecial(x[id], 99);
            if (event.isError()) {
                event.setError(`Data ${event.message}`);
            }
            else {
                if (!this.merchantAccountInfo.paymentNetwork)
                    this.merchantAccountInfo.paymentNetwork = {};
                if (id == constant_2.MERCHANT_ACCOUNT_PARTICIPANT) {
                    if (!(x[id] in config_1.PARTICIPANT)) {
                        event.setError("Invalid Merchant Code");
                        continue;
                    }
                }
                else if (id == constant_2.MERCHANT_ACCOUNT_IDENTIFIER_FPS) {
                    if (!/^[0-9]+$/.test(x[id])) {
                        event.setError("FPS Identifier Should Contains Numbers Only (0-9)");
                        continue;
                    }
                    else if (x[id].length < 7 || x[id].length > 9) {
                        event.setError("Invalid FPS Identifier Length (7-9)");
                        continue;
                    }
                }
                else if (id == constant_2.MERCHANT_ACCOUNT_IDENTIFIER_MOBILE) {
                    if (!/^[0-9+-]+$/.test(x[id])) {
                        event.setError("Mobile Number Should Contains Certain Characters Only (0-9+-)");
                        continue;
                    }
                    else if (/^[0-9]{8}$/.test(x[id])) {
                        x[id] = `+852-${x[id]}`;
                    }
                    else if (/^852[0-9]{8}$/.test(x[id])) {
                        x[id] = `+${x[id].slice(0, 3)}-${x[id].slice(3)}`;
                    }
                    else if (!/^\+852-[0-9]{8}$/.test(x[id])) {
                        event.setError("Invalid Mobile Number");
                        continue;
                    }
                }
                else if (id == constant_2.MERCHANT_ACCOUNT_IDENTIFIER_EMAIL) {
                    if (!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i.test(x[id])) {
                        event.setError("Invalid Email");
                        continue;
                    }
                }
                this.merchantAccountInfo.paymentNetwork[id] = x[id];
            }
        }
        return event;
    }
    /**
     * Get unique identifier of the payment operator
     * @category Merchant Account
     */
    getUniqueIdentifier() {
        let event = new event_1.default;
        if (this.merchantAccountInfo) {
            event.data = this.merchantAccountInfo.uniqueIdentifier;
        }
        return event;
    }
    /**
     * Set unique identifier of the payment operator
     *
     * 1) Applcation Identifier following `ISO 7816-4` or,
     * 2) UUID without hyphen `/[a-f0-9]{32}/`
     * 3) Reversed domain name `com.domain.my.www`
     *
     * @category Merchant Account
     */
    setUniqueIdentifier(x) {
        let info = {};
        info[constant_2.MERCHANT_ACCOUNT_UNIQUE] = x;
        return this.setMerchantAccount(info);
    }
    /**
     * Get merchant account participant code
     * @param toName Return the name of the participant
     *
     * @category Merchant Account
     */
    getMerchantAccountParticipantCode(toName = false) {
        var _a;
        let event = new event_1.default;
        if (((_a = this === null || this === void 0 ? void 0 : this.merchantAccountInfo) === null || _a === void 0 ? void 0 : _a.paymentNetwork) && constant_2.MERCHANT_ACCOUNT_PARTICIPANT in this.merchantAccountInfo.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork[constant_2.MERCHANT_ACCOUNT_PARTICIPANT];
            if (toName) {
                event.data = config_1.PARTICIPANT[event.data];
            }
        }
        return event;
    }
    /**
     * Set merchant account participant code
     * @category Merchant Account
     */
    setMerchantAccountParticipantCode(x) {
        let info = {};
        info[constant_2.MERCHANT_ACCOUNT_PARTICIPANT] = x;
        return this.setMerchantAccount(info);
    }
    /**
     * Get merchant account identifier - FPS ID
     * @category Merchant Account
     */
    getMerchantAccountFPSId() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.merchantAccountInfo) === null || _a === void 0 ? void 0 : _a.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork[constant_2.MERCHANT_ACCOUNT_IDENTIFIER_FPS];
        }
        return event;
    }
    /**
     * Set merchant account identifier - FPS ID
     *
     * Set either one among these functions [[HKQR.setMerchantAccountFPSId]], [[HKQR.setMerchantAccountMobile]], [[HKQR.setMerchantAccountEmail]]
     * @category Merchant Account
     */
    setMerchantAccountFPSId(x) {
        let info = {}, id;
        if (typeof x === "number")
            id = x.toString();
        else
            id = x;
        info[constant_2.MERCHANT_ACCOUNT_IDENTIFIER_FPS] = id;
        return this.setMerchantAccount(info);
    }
    /**
     * Get merchant account identifier - Mobile Number
     * @category Merchant Account
     */
    getMerchantAccountMobile() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.merchantAccountInfo) === null || _a === void 0 ? void 0 : _a.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork[constant_2.MERCHANT_ACCOUNT_IDENTIFIER_MOBILE];
        }
        return event;
    }
    /**
     * Set merchant account identifier - Mobile Number
     *
     * Set either one among these functions [[HKQR.setMerchantAccountFPSId]], [[HKQR.setMerchantAccountMobile]], [[HKQR.setMerchantAccountEmail]]
     * @category Merchant Account
     */
    setMerchantAccountMobile(x) {
        let info = {}, mobile;
        if (typeof x === "number")
            mobile = x.toString();
        else
            mobile = x;
        info[constant_2.MERCHANT_ACCOUNT_IDENTIFIER_MOBILE] = mobile;
        return this.setMerchantAccount(info);
    }
    /**
     * Get merchant account identifier - Email
     * @category Merchant Account
     */
    getMerchantAccountEmail() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.merchantAccountInfo) === null || _a === void 0 ? void 0 : _a.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork[constant_2.MERCHANT_ACCOUNT_IDENTIFIER_EMAIL];
        }
        return event;
    }
    /**
     * Set merchant account identifier - Email
     *
     * Set either one among these functions [[HKQR.setMerchantAccountFPSId]], [[HKQR.setMerchantAccountMobile]], [[HKQR.setMerchantAccountEmail]]
     * @category Merchant Account
     */
    setMerchantAccountEmail(x) {
        let info = {};
        info[constant_2.MERCHANT_ACCOUNT_IDENTIFIER_EMAIL] = x;
        return this.setMerchantAccount(info);
    }
    /**
     * Get merchant account data
     * @category Merchant Account
     */
    getPaymentNetwork() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.merchantAccountInfo) === null || _a === void 0 ? void 0 : _a.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork;
        }
        return event;
    }
    /**
     * Set merchant account data by ID
     * @category Merchant Account
     */
    setPaymentNetwork(id, x) {
        let info = {};
        info[id] = x;
        return this.setMerchantAccount(info);
    }
    /**
     * Get merchant name
     * @category Merchant Information
     */
    getMerchantName() {
        let event = new event_1.default;
        event.data = this.merchantName;
        return event;
    }
    /**
     * Set merchant name
     * @category Merchant Information
     */
    setMerchantName(x) {
        let event = this.setAlphanumericSpecial(x, 25);
        if (event.isError()) {
            event.setError(`Merchant Name ${event.message}`);
        }
        else {
            this.merchantName = x;
        }
        return event;
    }
    /**
     * Get physical location of the merchant
     * @category Merchant Information
     */
    getMerchantCity() {
        let event = new event_1.default;
        event.data = this.merchantCity;
        return event;
    }
    /**
     * Set physical location of the merchant
     * @category Merchant Information
     */
    setMerchantCity(x) {
        let event = this.setAlphanumericSpecial(x, 15);
        if (event.isError()) {
            event.setError(`Merchant City ${event.message}`);
        }
        else {
            this.merchantCity = x;
        }
        return event;
    }
    /**
     * Get postal code of the merchant
     * @category Merchant Information
     */
    getPostalCode() {
        let event = new event_1.default;
        event.data = this.postalCode;
        return event;
    }
    /**
     * Set postal code of the merchant
     * @category Merchant Information
     */
    setPostalCode(x) {
        let event = this.setAlphanumericSpecial(x, 10);
        if (event.isError()) {
            event.setError(`Postal Code ${event.message}`);
        }
        else {
            this.postalCode = x;
        }
        return event;
    }
    /**
     * Get merchant category code
     * @param toName Return the name of the merchant category
     *
     * @category Merchant Information
     */
    getMerchantCategory(toName = false) {
        let event = new event_1.default;
        event.data = this.merchantCategory;
        if (toName) {
            event.data = config_1.ISO_MERCHANT_CATEGORY[event.data];
        }
        return event;
    }
    /**
     * Set merchant category code. `0000` if not applicable.
     * @category Merchant Information
     */
    setMerchantCategory(x) {
        let event = new event_1.default();
        if (x in config_1.ISO_MERCHANT_CATEGORY) {
            event.setError("Invalid Merchant Category");
        }
        else {
            this.merchantCategory = x;
        }
        return event;
    }
    /**
     * Get transaction currency code
     * @param toCode Get the 3-digit number code instead
     *
     * @category Transaction Data
     */
    getTransactionCurrency(toCode = false) {
        let event = new event_1.default;
        event.data = this.transactionCurrency;
        if (toCode) {
            event.data = config_1.ISO_CURRENCY[event.data];
        }
        return event;
    }
    /**
     * Set transaction currency code
     *
     * Will be converted to number in [[HKQR.generate]]
     * @category Transaction Data
     */
    setTransactionCurrency(x) {
        let event = new event_1.default();
        if (!(x in config_1.ISO_CURRENCY)) {
            event.setError("Invalid Currency Code");
        }
        else {
            this.transactionCurrency = x;
        }
        return new event_1.default();
    }
    /**
     * Get transaction amount
     * @param toNumber Convert number string to number
     *
     * @category Transaction Data
     */
    getTransactionAmount(toNumber = false) {
        let event = new event_1.default;
        event.data = this.transactionAmount;
        if (toNumber) {
            event.data = parseFloat(event.data);
        }
        return event;
    }
    /**
     * Set transaction amount
     * @category Transaction Data
     */
    setTransactionAmount(x, fraction = false) {
        let event = this.setNumeric(x, fraction);
        if (event.isError()) {
            event.setError(`Transaction Amount ${event.message}`);
        }
        else {
            this.transactionAmount = event.data;
        }
        return event;
    }
    /**
     * Get convenience fee amount (transaction cost or tips)
     * @param toNumber Convert number string to number
     *
     * @category Transaction Data
     */
    getConvenienceFeeAmount(toNumber = false) {
        let event = new event_1.default;
        event.data = this.convenienceFeeAmount;
        if (toNumber) {
            event.data = parseFloat(event.data);
        }
        return event;
    }
    /**
     * Set convenience fee amount (fixed amount) (transaction cost or tips)
     *
     * Set either one among these functions [[HKQR.setConvenienceFeeAmount]], [[HKQR.setConvenienceFeePercent]]
     * @category Transaction Data
     */
    setConvenienceFeeAmount(x, fraction = false) {
        let event = this.setNumeric(x, fraction);
        if (event.isError()) {
            event.setError(`Convenience Fee Amount ${event.message}`);
        }
        else {
            this.convenienceFeeAmount = event.data;
            this.convenienceFeeIndicator = constant_1.CONVENIENCE_FEE_FIXED;
        }
        return event;
    }
    /**
     * Get convenience fee percent (transaction cost or tips)
     * @param toNumber Convert number string to number
     *
     * @category Transaction Data
     */
    getConvenienceFeePercent(toNumber = false) {
        let event = new event_1.default;
        event.data = this.convenienceFeePercent;
        if (toNumber) {
            event.data = parseFloat(event.data);
        }
        return event;
    }
    /**
     * Set convenience fee percent (fixed amount) (transaction cost or tips)
     *
     * Set either one among these functions [[HKQR.setConvenienceFeeAmount]], [[HKQR.setConvenienceFeePercent]]
     * @category Transaction Data
     */
    setConvenienceFeePercent(x, fraction = false) {
        let event = this.setNumeric(x, fraction);
        if (event.isError()) {
            event.setError(`Convenience Fee Percent ${event.message}`);
        }
        else {
            this.convenienceFeePercent = event.data;
            this.convenienceFeeIndicator = constant_1.CONVENIENCE_FEE_PERCENT;
        }
        return event;
    }
    /**
     * Get all the billing information
     * @category Billing Data
     */
    getAdditionalInfo() {
        let event = new event_1.default(), info;
        if (this.additionalInfo) {
            if (this.additionalInfo.billNumber) {
                info[constant_2.ADDITIONAL_INFO_BILL] = this.additionalInfo.billNumber;
            }
            if (this.additionalInfo.mobileNumber) {
                info[constant_2.ADDITIONAL_INFO_MOBILE] = this.additionalInfo.mobileNumber;
            }
            if (this.additionalInfo.storeLabel) {
                info[constant_2.ADDITIONAL_INFO_STORE] = this.additionalInfo.storeLabel;
            }
            if (this.additionalInfo.loyaltyNumber) {
                info[constant_2.ADDITIONAL_INFO_LOYALTY] = this.additionalInfo.loyaltyNumber;
            }
            if (this.additionalInfo.referenceLabel) {
                info[constant_2.ADDITIONAL_INFO_REFERENCE] = this.additionalInfo.referenceLabel;
            }
            if (this.additionalInfo.customerLabel) {
                info[constant_2.ADDITIONAL_INFO_CUSTOMER] = this.additionalInfo.customerLabel;
            }
            if (this.additionalInfo.terminalLabel) {
                info[constant_2.ADDITIONAL_INFO_TERMINAL] = this.additionalInfo.terminalLabel;
            }
            if (this.additionalInfo.transactionPurpose) {
                info[constant_2.ADDITIONAL_INFO_PURPOSE] = this.additionalInfo.transactionPurpose;
            }
            if (this.additionalInfo.customerDataRequest) {
                info[constant_2.ADDITIONAL_INFO_REQUEST] = this.additionalInfo.customerDataRequest;
            }
            if (this.additionalInfo.extra) {
                info = Object.assign(Object.assign({}, info), this.additionalInfo.extra);
            }
        }
        event.data = info;
        return event;
    }
    /**
     * Set all the billing information
     * @category Billing Data
     */
    setAdditionalInfo(x) {
        let event = new event_1.default();
        if (!this.additionalInfo)
            this.additionalInfo = {};
        if (constant_2.ADDITIONAL_INFO_BILL in x) {
            event = this.setAlphanumericSpecial(x[constant_2.ADDITIONAL_INFO_BILL], 25);
            if (event.isError()) {
                event.setError(`Bill Number ${event.message}`);
                return event;
            }
            else {
                this.additionalInfo.billNumber = x[constant_2.ADDITIONAL_INFO_BILL];
            }
            delete x[constant_2.MERCHANT_INFO_NAME];
        }
        if (constant_2.ADDITIONAL_INFO_MOBILE in x) {
            event = this.setAlphanumericSpecial(x[constant_2.ADDITIONAL_INFO_MOBILE], 25);
            if (event.isError()) {
                event.setError(`Mobile Number ${event.message}`);
                return event;
            }
            else {
                this.additionalInfo.mobileNumber = x[constant_2.ADDITIONAL_INFO_MOBILE];
            }
            delete x[constant_2.ADDITIONAL_INFO_MOBILE];
        }
        if (constant_2.ADDITIONAL_INFO_STORE in x) {
            event = this.setAlphanumericSpecial(x[constant_2.ADDITIONAL_INFO_STORE], 25);
            if (event.isError()) {
                event.setError(`Store Label ${event.message}`);
                return event;
            }
            else {
                this.additionalInfo.storeLabel = x[constant_2.ADDITIONAL_INFO_STORE];
            }
            delete x[constant_2.ADDITIONAL_INFO_STORE];
        }
        if (constant_2.ADDITIONAL_INFO_LOYALTY in x) {
            event = this.setAlphanumericSpecial(x[constant_2.ADDITIONAL_INFO_LOYALTY], 25);
            if (event.isError()) {
                event.setError(`Loyalty Number ${event.message}`);
                return event;
            }
            else {
                this.additionalInfo.loyaltyNumber = x[constant_2.ADDITIONAL_INFO_LOYALTY];
            }
            delete x[constant_2.ADDITIONAL_INFO_LOYALTY];
        }
        if (constant_2.ADDITIONAL_INFO_REFERENCE in x) {
            event = this.setAlphanumericSpecial(x[constant_2.ADDITIONAL_INFO_REFERENCE], 25);
            if (event.isError()) {
                event.setError(`Reference Label ${event.message}`);
                return event;
            }
            else {
                this.additionalInfo.referenceLabel = x[constant_2.ADDITIONAL_INFO_REFERENCE];
            }
            delete x[constant_2.ADDITIONAL_INFO_REFERENCE];
        }
        if (constant_2.ADDITIONAL_INFO_CUSTOMER in x) {
            event = this.setAlphanumericSpecial(x[constant_2.ADDITIONAL_INFO_CUSTOMER], 25);
            if (event.isError()) {
                event.setError(`Customer Label ${event.message}`);
                return event;
            }
            else {
                this.additionalInfo.customerLabel = x[constant_2.ADDITIONAL_INFO_CUSTOMER];
            }
            delete x[constant_2.ADDITIONAL_INFO_CUSTOMER];
        }
        if (constant_2.ADDITIONAL_INFO_TERMINAL in x) {
            event = this.setAlphanumericSpecial(x[constant_2.ADDITIONAL_INFO_TERMINAL], 25);
            if (event.isError()) {
                event.setError(`Terminal Label ${event.message}`);
                return event;
            }
            else {
                this.additionalInfo.terminalLabel = x[constant_2.ADDITIONAL_INFO_TERMINAL];
            }
            delete x[constant_2.ADDITIONAL_INFO_TERMINAL];
        }
        if (constant_2.ADDITIONAL_INFO_PURPOSE in x) {
            event = this.setAlphanumericSpecial(x[constant_2.ADDITIONAL_INFO_PURPOSE], 25);
            if (event.isError()) {
                event.setError(`Transaction Purpose ${event.message}`);
                return event;
            }
            else {
                this.additionalInfo.transactionPurpose = x[constant_2.ADDITIONAL_INFO_PURPOSE];
            }
            delete x[constant_2.ADDITIONAL_INFO_PURPOSE];
        }
        if (constant_2.ADDITIONAL_INFO_REQUEST in x) {
            event = this.setAlphanumericSpecial(x[constant_2.ADDITIONAL_INFO_REQUEST], 25);
            if (event.isError()) {
                event.setError(`Customer Data Request ${event.message}`);
                return event;
            }
            else {
                this.additionalInfo.customerDataRequest = x[constant_2.ADDITIONAL_INFO_REQUEST];
            }
            delete x[constant_2.ADDITIONAL_INFO_REQUEST];
        }
        for (let id in x) {
            if (!this.additionalInfo.extra)
                this.additionalInfo.extra = {};
            this.additionalInfo.extra[id] = x[id];
        }
        return event;
    }
    /**
     * Get the billing number
     * @category Billing Data
     */
    getBillNumber() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.additionalInfo) === null || _a === void 0 ? void 0 : _a.billNumber) {
            event.data = this.additionalInfo.billNumber;
        }
        return event;
    }
    /**
     * Set the billing number
     * @category Billing Data
     */
    setBillNumber(x) {
        let info = {};
        info[constant_2.ADDITIONAL_INFO_BILL] = x;
        return this.setAdditionalInfo(info);
    }
    /**
     * Get the mobile number of the customer
     * @category Billing Data
     */
    getCustomerMobileNumber() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.additionalInfo) === null || _a === void 0 ? void 0 : _a.mobileNumber) {
            event.data = this.additionalInfo.mobileNumber;
        }
        return event;
    }
    /**
     * Set the mobile number of the customer
     * @category Billing Data
     */
    setCustomerMobileNumber(x) {
        let info = {};
        info[constant_2.ADDITIONAL_INFO_MOBILE] = x;
        return this.setAdditionalInfo(info);
    }
    /**
     * Get the identifier of the store
     * @category Billing Data
     */
    getStoreLabel() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.additionalInfo) === null || _a === void 0 ? void 0 : _a.storeLabel) {
            event.data = this.additionalInfo.storeLabel;
        }
        return event;
    }
    /**
     * Set the identifier of the store
     * @category Billing Data
     */
    setStoreLabel(x) {
        let info = {};
        info[constant_2.ADDITIONAL_INFO_STORE] = x;
        return this.setAdditionalInfo(info);
    }
    /**
     * Get the loyalty number of the customer
     * @category Billing Data
     */
    getLoyaltyNumber() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.additionalInfo) === null || _a === void 0 ? void 0 : _a.loyaltyNumber) {
            event.data = this.additionalInfo.loyaltyNumber;
        }
        return event;
    }
    /**
     * Set the loyalty number of the customer
     * @category Billing Data
     */
    setLoyaltyNumber(x) {
        let info = {};
        info[constant_2.ADDITIONAL_INFO_LOYALTY] = x;
        return this.setAdditionalInfo(info);
    }
    /**
     * Get the reference of the transaction
     * @category Billing Data
     */
    getReferenceLabel() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.additionalInfo) === null || _a === void 0 ? void 0 : _a.referenceLabel) {
            event.data = this.additionalInfo.referenceLabel;
        }
        return event;
    }
    /**
     * Set the reference of the transaction
     * @category Billing Data
     */
    setReferenceLabel(x) {
        let info = {};
        info[constant_2.ADDITIONAL_INFO_REFERENCE] = x;
        return this.setAdditionalInfo(info);
    }
    /**
     * Get the identifier for the customer
     * @category Billing Data
     */
    getCustomerLabel() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.additionalInfo) === null || _a === void 0 ? void 0 : _a.customerLabel) {
            event.data = this.additionalInfo.customerLabel;
        }
        return event;
    }
    /**
     * Set the identifier for the customer
     * @category Billing Data
     */
    setCustomerLabel(x) {
        let info = {};
        info[constant_2.ADDITIONAL_INFO_CUSTOMER] = x;
        return this.setAdditionalInfo(info);
    }
    /**
     * Get the identifier of the payment terminal (e.g. POS/Credit Card terminal)
     * @category Billing Data
     */
    getTerminalLabel() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.additionalInfo) === null || _a === void 0 ? void 0 : _a.terminalLabel) {
            event.data = this.additionalInfo.terminalLabel;
        }
        return event;
    }
    /**
     * Set the identifier of the payment terminal (e.g. POS/Credit Card terminal)
     * @category Billing Data
     */
    setTerminalLabel(x) {
        let info = {};
        info[constant_2.ADDITIONAL_INFO_TERMINAL] = x;
        return this.setAdditionalInfo(info);
    }
    /**
     * Get the purpose of the transaction
     * @category Billing Data
     */
    getTransactionPurpose() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.additionalInfo) === null || _a === void 0 ? void 0 : _a.transactionPurpose) {
            event.data = this.additionalInfo.transactionPurpose;
        }
        return event;
    }
    /**
     * Set the purpose of the transaction
     * @category Billing Data
     */
    setTransactionPurpose(x) {
        let info = {};
        info[constant_2.ADDITIONAL_INFO_PURPOSE] = x;
        return this.setAdditionalInfo(info);
    }
    /**
     * Get any other information for the customer
     * @category Billing Data
     */
    getCustomerDataRequest() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.additionalInfo) === null || _a === void 0 ? void 0 : _a.customerDataRequest) {
            event.data = this.additionalInfo.customerDataRequest;
        }
        return event;
    }
    /**
     * Set any other information for the customer
     * @category Billing Data
     */
    setCustomerDataRequest(x) {
        let info = {};
        info[constant_2.ADDITIONAL_INFO_REQUEST] = x;
        return this.setAdditionalInfo(info);
    }
    /**
     * Get any other information related to this billing
     * @category Billing Data
     */
    getExtraAdditionalData() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.additionalInfo) === null || _a === void 0 ? void 0 : _a.extra) {
            event.data = this.additionalInfo.extra;
        }
        return event;
    }
    /**
     * Set any other information related to this billing
     * @category Billing Data
     */
    setExtraAdditionalData(id, x) {
        let info = {};
        info[id] = x;
        return this.setAdditionalInfo(info);
    }
    /**
     * Get localized merchant information
     * @category Merchant Information
     */
    getMerchantInfo() {
        let event = new event_1.default, info;
        if (this.merchantInfo) {
            info[constant_2.MERCHANT_INFO_LANGUAGE] = this.merchantInfo.language;
            info[constant_2.MERCHANT_INFO_NAME] = this.merchantInfo.merchantName;
            if (this.merchantInfo.merchantCity) {
                info[constant_2.MERCHANT_INFO_CITY] = this.merchantInfo.merchantCity;
            }
            if (this.merchantInfo.extra) {
                info = Object.assign(Object.assign({}, info), this.merchantInfo.extra);
            }
        }
        event.data = info;
        return event;
    }
    /**
     * Set localized merchant information
     * @category Merchant Information
     */
    setMerchantInfo(x) {
        let event = new event_1.default(), language, merchantName;
        if (constant_2.MERCHANT_INFO_LANGUAGE in x) {
            if (x[constant_2.MERCHANT_INFO_LANGUAGE] in config_1.ISO_LANGUAGE) {
                language = x[constant_2.MERCHANT_INFO_LANGUAGE];
            }
            else {
                event.setError("Invalid Language Preference");
                return event;
            }
            delete x[constant_2.MERCHANT_INFO_LANGUAGE];
        }
        if (constant_2.MERCHANT_INFO_NAME in x) {
            event = this.setAlphanumericSpecial(x[constant_2.MERCHANT_INFO_NAME], 25);
            if (event.isError()) {
                event.setError(`Localized Merchant Name ${event.message}`);
                return event;
            }
            else {
                merchantName = x[constant_2.MERCHANT_INFO_NAME];
            }
            delete x[constant_2.MERCHANT_INFO_NAME];
        }
        if (!this.merchantInfo) {
            if (!language) {
                event.setError("Missing Language of Localization");
            }
            else if (!merchantName) {
                event.setError("Missing Localized Merchant Name");
            }
            else {
                this.merchantInfo = {
                    language: language,
                    merchantName: merchantName
                };
            }
            if (event.isError())
                return event;
        }
        if (language) {
            this.merchantInfo.language = language;
        }
        if (merchantName) {
            this.merchantInfo.merchantName = merchantName;
        }
        for (let id in x) {
            if (event.isError())
                continue;
            if (id == constant_2.MERCHANT_INFO_CITY) {
                event = this.setAlphanumericSpecial(x[id], 15);
                if (event.isError()) {
                    event.setError(`Localized Merchant City ${event.message}`);
                }
                else {
                    this.merchantInfo.merchantCity = x[id];
                }
            }
            else {
                event = this.setAlphanumericSpecial(x[id], 99);
                if (event.isError()) {
                    event.setError(`Data ${event.message}`);
                }
                else {
                    if (!this.merchantInfo.extra)
                        this.merchantInfo.extra = {};
                    this.merchantInfo.extra[id] = x[id];
                }
            }
        }
        return event;
    }
    /**
     * Get the language of localized information
     * @category Merchant Information
     */
    getLanguagePreference() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.merchantInfo) === null || _a === void 0 ? void 0 : _a.language) {
            event.data = this.merchantInfo.language;
        }
        return event;
    }
    /**
     * Set the language of localized information
     * @category Merchant Information
     */
    setLanguagePreference(x) {
        let info = {};
        info[constant_2.MERCHANT_INFO_LANGUAGE] = x;
        return this.setMerchantInfo(info);
    }
    /**
     * Get the localized merchant name
     * @category Merchant Information
     */
    getLocalizedMerchantName() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.merchantInfo) === null || _a === void 0 ? void 0 : _a.merchantName) {
            event.data = this.merchantInfo.merchantName;
        }
        return event;
    }
    /**
     * Set the localized merchant name
     * @category Merchant Information
     */
    setLocalizedMerchantName(x) {
        let info = {};
        info[constant_2.MERCHANT_INFO_NAME] = x;
        return this.setMerchantInfo(info);
    }
    /**
     * Get the localized physical location of the merchant
     * @category Merchant Information
     */
    getLocalizedMerchantCity() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.merchantInfo) === null || _a === void 0 ? void 0 : _a.merchantCity) {
            event.data = this.merchantInfo.merchantCity;
        }
        return event;
    }
    /**
     * Set the localized physical location of the merchant
     * @category Merchant Information
     */
    setLocalizedMerchantCity(x) {
        let info = {};
        info[constant_2.MERCHANT_INFO_CITY] = x;
        return this.setMerchantInfo(info);
    }
    /**
     * Get all the localized information
     * @category Merchant Information
     */
    getExtraLocalizedData() {
        var _a;
        let event = new event_1.default;
        if ((_a = this === null || this === void 0 ? void 0 : this.merchantInfo) === null || _a === void 0 ? void 0 : _a.extra) {
            event.data = this.merchantInfo.extra;
        }
        return event;
    }
    /**
     * Set all the localized information by ID
     * @category Merchant Information
     */
    setExtraLocalizedData(id, x) {
        let info = {};
        info[id] = x;
        return this.setMerchantInfo(info);
    }
}
exports.default = HKQR;
// Common Bank Participants
/**
 * Standard Chartered Bank (Hong Kong) Limited
 *
 * Used in [[HKQR.setMerchantAccountParticipantCode]]
 * @category Bank Participant
 */
HKQR.BANK_STANDARD_CHARTERED = "003";
/**
 * The Hongkong and Shanghai Banking Corporation Limited
 *
 * Used in [[HKQR.setMerchantAccountParticipantCode]]
 * @category Bank Participant
 */
HKQR.BANK_HSBC = "004";
/**
 * Bank of China (Hong Kong) Limited
 *
 * Used in [[HKQR.setMerchantAccountParticipantCode]]
 * @category Bank Participant
 */
HKQR.BANK_BANK_OF_CHINA = "012";
/**
 * The Bank of East Asia, Limited
 *
 * Used in [[HKQR.setMerchantAccountParticipantCode]]
 * @category Bank Participant
 */
HKQR.BANK_EAST_ASIA = "015";
/**
 * DBS Bank (Hong Kong) Ltd.
 *
 * Used in [[HKQR.setMerchantAccountParticipantCode]]
 * @category Bank Participant
 */
HKQR.BANK_DBS = "016";
/**
 * Hang Seng Bank Ltd.
 *
 * Used in [[HKQR.setMerchantAccountParticipantCode]]
 * @category Bank Participant
 */
HKQR.BANK_HANG_SANG = "024";
/**
 * Citibank (Hong Kong) Limited
 *
 * Used in [[HKQR.setMerchantAccountParticipantCode]]
 * @category Bank Participant
 */
HKQR.BANK_CITIBANK = "250";
// Common SVF Participants
/**
 * WeChat Pay Hong Kong Limited
 *
 * Used in [[HKQR.setMerchantAccountParticipantCode]]
 * @category SVF Participant
 */
HKQR.BANK_WECHAT = "931";
/**
 * HKT Payment Limited
 *
 * Used in [[HKQR.setMerchantAccountParticipantCode]]
 * @category SVF Participant
 */
HKQR.BANK_TAP_N_GO = "935";
/**
 * TNG (Asia) Limited
 *
 * Used in [[HKQR.setMerchantAccountParticipantCode]]
 * @category SVF Participant
 */
HKQR.BANK_TNG = "947";
/**
 * Alipay Financial Services (HK) Limited
 *
 * Used in [[HKQR.setMerchantAccountParticipantCode]]
 * @category SVF Participant
 */
HKQR.BANK_ALIPAY = "948";
/**
 * Octopus Cards Limited
 *
 * Used in [[HKQR.setMerchantAccountParticipantCode]]
 * @category SVF Participant
 */
HKQR.BANK_OCTOPUS = "949";
/**
 * PayMe
 *
 * Used in [[HKQR.setMerchantAccountParticipantCode]]
 * @category SVF Participant
 */
HKQR.BANK_PAYME = "954";
// Common Currency Code
/**
 * Hong Kong Dollar
 *
 * Used in [[HKQR.setTransactionCurrency]]
 * @category Currency
 */
HKQR.CURRENCY_HKD = "HKD";
/**
 * Chinese Yuan Renminbi
 *
 * Used in [[HKQR.setTransactionCurrency]]
 * @category Currency
 */
HKQR.CURRENCY_CNY = "CNY";
/**
 * Taiwan New Dollar
 *
 * Used in [[HKQR.setTransactionCurrency]]
 * @category Currency
 */
HKQR.CURRENCY_TWD = "TWD";
/**
 * United States Dollar
 *
 * Used in [[HKQR.setTransactionCurrency]]
 * @category Currency
 */
HKQR.CURRENCY_USD = "USD";
// Common Language
/**
 * Chinese
 *
 * Used in [[HKQR.setLanguagePreference]]
 * @category Language
 */
HKQR.LANGUAGE_CHINESE = "ZH";
/**
 * English
 *
 * Used in [[HKQR.setLanguagePreference]]
 * @category Language
 */
HKQR.LANGUAGE_ENGLISH = "EN";
// Common Country / Region
/**
 * Hong Kong
 *
 * Used in [[HKQR.setCountryCode]]
 * @category Country / Region
 */
HKQR.LOCATION_HONG_KONG = "HK";
/**
 * China
 *
 * Used in [[HKQR.setCountryCode]]
 * @category Country / Region
 */
HKQR.LOCATION_CHINA = "CN";
/**
 * Taiwan
 *
 * Used in [[HKQR.setCountryCode]]
 * @category Country / Region
 */
HKQR.LOCATION_TAIWAN = "TW";
/**
 * Macao
 *
 * Used in [[HKQR.setCountryCode]]
 * @category Country / Region
 */
HKQR.LOCATION_MACAO = "MO";
/**
 * United States of America
 *
 * Used in [[HKQR.setCountryCode]]
 * @category Country / Region
 */
HKQR.LOCATION_USA = "US";
/**
 * United Kingdom of Great Britain and Northern Ireland
 *
 * Used in [[HKQR.setCountryCode]]
 * @category Country / Region
 */
HKQR.LOCATION_UK = "GB";
// Common Merchant Account
/**
 * Fast Payment System (FPS)
 *
 * Used in [[HKQR.setMerchantAccountId]]
 * @category Merchant Account ID
 */
HKQR.MERCHANT_ID_FPS = "26";
// Common FPS Merchant Unique Identifier
/**
 * Inland Revenue Department - Profits Tax
 *
 * Used in [[HKQR.setMerchantAccountEmail]]
 * @category FPS Identifier
 */
HKQR.FPS_EMAIL_IRD_PROFITS_TAX = "FPS_Identifier_CRC201A@ird.gov.hk";
/**
 * Inland Revenue Department - Salaries Tax
 *
 * Used in [[HKQR.setMerchantAccountEmail]]
 * @category FPS Identifier
 */
HKQR.FPS_EMAIL_IRD_SALARIES_TAX = "FPS_Identifier_CRC201B@ird.gov.hk";
/**
 * Inland Revenue Department - Personal Assessment
 *
 * Used in [[HKQR.setMerchantAccountEmail]]
 * @category FPS Identifier
 */
HKQR.FPS_EMAIL_IRD_PERSONAL_ASSESSMENT = "FPS_Identifier_CRC201D@ird.gov.hk";
/**
 * CLP Power Hong Kong Ltd.
 *
 * Used in [[HKQR.setMerchantAccountFPSId]]
 * @category FPS Identifier
 */
HKQR.FPS_ID_CLP = "4853305";
/**
 * Hongkong Electric Company
 *
 * Used in [[HKQR.setMerchantAccountFPSId]]
 * @category FPS Identifier
 */
HKQR.FPS_ID_HK_ELECTRIC = "4853305";
if (typeof window !== "undefined" && !window.HKQR) {
    window.HKQR = HKQR;
}
//# sourceMappingURL=index.js.map