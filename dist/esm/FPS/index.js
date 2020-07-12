import Event from "../lib/event";
// Import functions
import crc16 from "../lib/crc";
import { extract, isAlphanumericSpecial, numberToValidId } from "../lib/utils";
// Import data
import { CURRENCY, PARTICIPANT } from "./config";
// Import constants for Main ID
import { FORMAT_INDICATOR, INITIATION_POINT, MERCHANT_CATEGORY_CODE, TRANSACTION_CURRENCY, TRANSACTION_AMOUNT, COUNTRY_CODE, MERCHANT_NAME, MERCHANT_CITY, ADDITIONAL_INFORMATION, CYCLIC_REDUNDANCY_CHECK } from "../lib/constant";
// Import constants for Sub ID or other value
import { STATIC_QR_CODE, DYNAMIC_QR_CODE, MERCHANT_ACCOUNT_UNIQUE, MERCHANT_ACCOUNT_PARTICIPANT, MERCHANT_ACCOUNT_IDENTIFIER_FPS, MERCHANT_ACCOUNT_IDENTIFIER_MOBILE, MERCHANT_ACCOUNT_IDENTIFIER_EMAIL, MERCHANT_INFO_NAME, ADDITIONAL_INFO_BILL, ADDITIONAL_INFO_REFERENCE } from "../lib/constant";
/**
 * Simplified class contains some functions from the main class
 *
 * Already meet the requirements of daily transaction for FPS
 */
export default class FPS {
    constructor() {
        /** @category Format Indicator */
        this.formatIndicator = "01"; // ID: 00 // Fixed
        /** @category Point of Initiation */
        this.initiationPoint = "11"; // ID: 01
        /** @category Merchant Account */
        this.merchantAccount = "26"; // ID: 26 // FPS
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
        Event.Silent();
    }
    /**
     * Function to help building the resulting string
     */
    payload(id, content = "") {
        return `${id}${numberToValidId(content.length)}${content}`;
    }
    /**
     * Function to validate a string as alphanumeric special string (A-z0-9.@_+-)
     * @param x Source string
     * @param length Maximum length available
     */
    setAlphanumericSpecial(x, length) {
        let event = new Event();
        if (typeof x === "undefined") {
            event.setError("Not Specified", true);
        }
        else if (x.length > length) {
            event.setError(`Length Exceeds Limit (>${length})`, true);
        }
        else if (!isAlphanumericSpecial(x)) {
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
        let str, event = new Event();
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
            if (id == FORMAT_INDICATOR) {
                // Fixed
            }
            else if (id == INITIATION_POINT) {
                if (content == STATIC_QR_CODE || content == DYNAMIC_QR_CODE) {
                    this.initiationPoint = content;
                }
                else {
                    event.setError(`Invalid Initiation Point (id=${id})`);
                }
            }
            else if (id == TRANSACTION_CURRENCY) {
                let currency = Object.keys(CURRENCY).filter(v => CURRENCY[v] == content);
                if (currency.length > 0) {
                    this.setCurrency(currency[0]);
                }
                else {
                    event.setError(`Invalid Transaction Currency (id=${id})`);
                }
            }
            else if (id == TRANSACTION_AMOUNT) {
                this.setAmount(content);
            }
            else if (id == MERCHANT_NAME) {
                this.merchantName = content;
            }
            else if (id == MERCHANT_CITY) {
                this.merchantCity = content;
            }
            else if (id == ADDITIONAL_INFORMATION) {
                this.setAdditionalInfo(content);
            }
            else if (id == CYCLIC_REDUNDANCY_CHECK) {
                // Already Checked
            }
            else if (id == this.merchantAccount) {
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
        let event = new Event();
        if (x.length == 0) {
            event = this.generate();
            if (event.isError())
                return event;
            x = event.data;
            delete event.data;
        }
        let e = extract(x);
        if (e.length == 1) {
            let data = e[0], crc = data[CYCLIC_REDUNDANCY_CHECK], crcStr = CYCLIC_REDUNDANCY_CHECK + "04", crcCheck = x.split(`${crcStr}${crc}`)[0] + crcStr;
            if (!crc || crc16(crcCheck) != crc) {
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
        let code = "", event = new Event();
        code += this.payload(FORMAT_INDICATOR, this.formatIndicator);
        code += this.payload(INITIATION_POINT, this.initiationPoint);
        // Merchant Data
        let merchantAccount = "";
        if (!this.merchantAccountInfo) {
            event.setError("Missing Merchant Account Information");
            return event;
        }
        if (!this.merchantAccountInfo.uniqueIdentifier) {
            event.setError("Missing Merchant Unique Identifier");
            return event;
        }
        merchantAccount += this.payload(MERCHANT_ACCOUNT_UNIQUE, this.merchantAccountInfo.uniqueIdentifier);
        if (this.merchantAccountInfo.paymentNetwork) {
            Object.keys(this.merchantAccountInfo.paymentNetwork).map((id) => {
                merchantAccount += this.payload(id, this.merchantAccountInfo.paymentNetwork[id]);
            });
        }
        if (merchantAccount.length > 99) {
            event.setError("Merchant Account Information Length Exceeds Limit (>99)");
            return event;
        }
        code += this.payload(this.merchantAccount, merchantAccount);
        code += this.payload(MERCHANT_CATEGORY_CODE, this.merchantCategory);
        // Transaction Data
        code += this.payload(TRANSACTION_CURRENCY, CURRENCY[this.transactionCurrency]);
        if (this.transactionAmount && parseFloat(this.transactionAmount) > 0) {
            code += this.payload(TRANSACTION_AMOUNT, this.transactionAmount);
        }
        // Additional Merchant Data
        code += this.payload(COUNTRY_CODE, this.countryCode);
        code += this.payload(MERCHANT_NAME, this.merchantName);
        code += this.payload(MERCHANT_CITY, this.merchantCity);
        // Additional Data
        let additionalInfo = "";
        if (this.additionalInfo) {
            if (this.additionalInfo.billNumber) {
                additionalInfo += this.payload(ADDITIONAL_INFO_BILL, this.additionalInfo.billNumber);
            }
            if (this.additionalInfo.referenceLabel) {
                additionalInfo += this.payload(ADDITIONAL_INFO_REFERENCE, this.additionalInfo.referenceLabel);
            }
        }
        if (additionalInfo.length > 99) {
            event.setError("Additional Information Length Exceeds Limit (>99)");
            return event;
        }
        else if (additionalInfo.length > 0) {
            code += this.payload(ADDITIONAL_INFORMATION, additionalInfo);
        }
        // CRC check
        this.cyclicRedundancyCheck = crc16(code + CYCLIC_REDUNDANCY_CHECK + "04");
        code += this.payload(CYCLIC_REDUNDANCY_CHECK, this.cyclicRedundancyCheck);
        event.data = code;
        return event;
    }
    /**
     * Check if it is a static QR Code
     * @category Point of Initiation
     */
    isStatic() {
        return this.initiationPoint == STATIC_QR_CODE;
    }
    /**
     * Set it to a static QR Code
     * @category Point of Initiation
     */
    setStatic() {
        this.initiationPoint = STATIC_QR_CODE;
        return new Event();
    }
    /**
     * Set it to a dynamic QR Code
     * @category Point of Initiation
     */
    setDynamic() {
        this.initiationPoint = DYNAMIC_QR_CODE;
        return new Event();
    }
    /**
     * Set merchant account data
     * @category Merchant Account
     */
    setMerchantAccount(x) {
        let event = new Event();
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
                if (id == MERCHANT_ACCOUNT_UNIQUE)
                    continue;
                if (id == MERCHANT_ACCOUNT_PARTICIPANT) {
                    if (!(x[id] in PARTICIPANT)) {
                        event.setError("Invalid Merchant Code");
                        continue;
                    }
                }
                else if (id == MERCHANT_ACCOUNT_IDENTIFIER_FPS) {
                    if (!/^[0-9]+$/.test(x[id])) {
                        event.setError("FPS Identifier Should Contains Numbers Only (0-9)");
                        continue;
                    }
                    else if (x[id].length < 7 || x[id].length > 9) {
                        event.setError("Invalid FPS Identifier Length (7-9)");
                        continue;
                    }
                }
                else if (id == MERCHANT_ACCOUNT_IDENTIFIER_MOBILE) {
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
                else if (id == MERCHANT_ACCOUNT_IDENTIFIER_EMAIL) {
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
     * Get merchant account participant code
     * @param toName Return the name of the participant
     *
     * @category Merchant Account
     */
    getBank(toName = false) {
        var _a;
        let event = new Event;
        if (((_a = this === null || this === void 0 ? void 0 : this.merchantAccountInfo) === null || _a === void 0 ? void 0 : _a.paymentNetwork) && MERCHANT_ACCOUNT_PARTICIPANT in this.merchantAccountInfo.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork[MERCHANT_ACCOUNT_PARTICIPANT];
            if (toName) {
                event.data = PARTICIPANT[event.data];
            }
        }
        return event;
    }
    /**
     * Set merchant account participant code
     * @category Merchant Account
     */
    setBank(x) {
        let info = {};
        info[MERCHANT_ACCOUNT_PARTICIPANT] = x;
        return this.setMerchantAccount(info);
    }
    /**
     * Get merchant account identifier - FPS ID
     * @category Merchant Account
     */
    getFPSId() {
        var _a;
        let event = new Event;
        if ((_a = this === null || this === void 0 ? void 0 : this.merchantAccountInfo) === null || _a === void 0 ? void 0 : _a.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork[MERCHANT_ACCOUNT_IDENTIFIER_FPS];
        }
        return event;
    }
    /**
     * Set merchant account identifier - FPS ID
     *
     * Set either one among these functions [[FPS.getFPSId]], [[FPS.setMobile]], [[FPS.setEmail]]
     *
     * @category Merchant Account
     */
    setFPSId(x) {
        let info = {}, id;
        if (typeof x === "number")
            id = x.toString();
        else
            id = x;
        info[MERCHANT_ACCOUNT_IDENTIFIER_FPS] = id;
        return this.setMerchantAccount(info);
    }
    /**
     * Get merchant account identifier - Mobile Number
     * @category Merchant Account
     */
    getMobile() {
        var _a;
        let event = new Event;
        if ((_a = this === null || this === void 0 ? void 0 : this.merchantAccountInfo) === null || _a === void 0 ? void 0 : _a.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork[MERCHANT_ACCOUNT_IDENTIFIER_MOBILE];
        }
        return event;
    }
    /**
     * Set merchant account identifier - Mobile Number
     *
     * Set either one among these functions [[FPS.getFPSId]], [[FPS.setMobile]], [[FPS.setEmail]]
     *
     * @category Merchant Account
     */
    setMobile(x) {
        let info = {}, mobile;
        if (typeof x === "number")
            mobile = x.toString();
        else
            mobile = x;
        info[MERCHANT_ACCOUNT_IDENTIFIER_MOBILE] = mobile;
        return this.setMerchantAccount(info);
    }
    /**
     * Get merchant account identifier - Email
     * @category Merchant Account
     */
    getEmail() {
        var _a;
        let event = new Event;
        if ((_a = this === null || this === void 0 ? void 0 : this.merchantAccountInfo) === null || _a === void 0 ? void 0 : _a.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork[MERCHANT_ACCOUNT_IDENTIFIER_EMAIL];
        }
        return event;
    }
    /**
     * Set merchant account identifier - Email
     *
     * Set either one among these functions [[FPS.getFPSId]], [[FPS.setMobile]], [[FPS.setEmail]]
     *
     * @category Merchant Account
     */
    setEmail(x) {
        let info = {};
        info[MERCHANT_ACCOUNT_IDENTIFIER_EMAIL] = x;
        return this.setMerchantAccount(info);
    }
    /**
     * Get transaction amount
     * @param toNumber Convert number string to number
     *
     * @category Transaction Data
     */
    getAmount(toNumber = false) {
        let event = new Event;
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
    setAmount(x) {
        let event = this.setNumeric(x);
        if (event.isError()) {
            event.setError(`Transaction Amount ${event.message}`);
        }
        else {
            this.transactionAmount = event.data;
        }
        return event;
    }
    /**
     * Set all the billing information
     * @category Billing Data
     */
    setAdditionalInfo(x) {
        let event = new Event();
        if (!this.additionalInfo)
            this.additionalInfo = {};
        if (ADDITIONAL_INFO_BILL in x) {
            event = this.setAlphanumericSpecial(x[ADDITIONAL_INFO_BILL], 25);
            if (event.isError()) {
                event.setError(`Bill Number ${event.message}`);
                return event;
            }
            else {
                this.additionalInfo.billNumber = x[ADDITIONAL_INFO_BILL];
            }
            delete x[MERCHANT_INFO_NAME];
        }
        if (ADDITIONAL_INFO_REFERENCE in x) {
            event = this.setAlphanumericSpecial(x[ADDITIONAL_INFO_REFERENCE], 25);
            if (event.isError()) {
                event.setError(`Reference Label ${event.message}`);
                return event;
            }
            else {
                this.additionalInfo.referenceLabel = x[ADDITIONAL_INFO_REFERENCE];
            }
            delete x[ADDITIONAL_INFO_REFERENCE];
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
        let event = new Event;
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
        info[ADDITIONAL_INFO_BILL] = x;
        return this.setAdditionalInfo(info);
    }
    /**
     * Get the reference of the transaction
     * @category Billing Data
     */
    getReference() {
        var _a;
        let event = new Event;
        if ((_a = this === null || this === void 0 ? void 0 : this.additionalInfo) === null || _a === void 0 ? void 0 : _a.referenceLabel) {
            event.data = this.additionalInfo.referenceLabel;
        }
        return event;
    }
    /**
     * Set the reference of the transaction
     * @category Billing Data
     */
    setReference(x) {
        let info = {};
        info[ADDITIONAL_INFO_REFERENCE] = x;
        return this.setAdditionalInfo(info);
    }
    /**
     * Set transaction currency to Hong Kong Dollar (HKD)
     *
     * See [[FPS.setCurrency]]
     * @category Transaction Data
     */
    setHKD() {
        return this.setCurrency(FPS.CURRENCY_HKD);
    }
    /**
     * Set transaction currency to Chinese Yuan Renmenbi (CNY)
     *
     * See [[FPS.setCurrency]]
     * @category Transaction Data
     */
    setCNY() {
        return this.setCurrency(FPS.CURRENCY_CNY);
    }
    /**
     * Get transaction currency code
     * @param toCode Get the 3-digit number code instead
     *
     * @category Transaction Data
     */
    getCurrency(toCode = false) {
        let event = new Event;
        event.data = this.transactionCurrency;
        if (toCode) {
            event.data = CURRENCY[event.data];
        }
        return event;
    }
    /**
     * Set transaction currency code
     *
     * Will be converted to number code in [[FPS.generate]]
     *
     * @category Transaction Data
     */
    setCurrency(x) {
        let event = new Event();
        if (!(x in CURRENCY)) {
            event.setError("Invalid Currency Code");
        }
        else {
            this.transactionCurrency = x;
        }
        return new Event();
    }
}
// Common Bank Participants
/**
 * Standard Chartered Bank (Hong Kong) Limited
 *
 * Used in [[FPS.setBank]]
 * @category Bank Participant
 */
FPS.BANK_STANDARD_CHARTERED = "003";
/**
 * The Hongkong and Shanghai Banking Corporation Limited
 *
 * Used in [[FPS.setBank]]
 * @category Bank Participant
 */
FPS.BANK_HSBC = "004";
/**
 * Bank of China (Hong Kong) Limited
 *
 * Used in [[FPS.setBank]]
 * @category Bank Participant
 */
FPS.BANK_BANK_OF_CHINA = "012";
/**
 * The Bank of East Asia, Limited
 *
 * Used in [[FPS.setBank]]
 * @category Bank Participant
 */
FPS.BANK_EAST_ASIA = "015";
/**
 * DBS Bank (Hong Kong) Ltd.
 *
 * Used in [[FPS.setBank]]
 * @category Bank Participant
 */
FPS.BANK_DBS = "016";
/**
 * Hang Seng Bank Ltd.
 *
 * Used in [[FPS.setBank]]
 * @category Bank Participant
 */
FPS.BANK_HANG_SANG = "024";
/**
 * Citibank (Hong Kong) Limited
 *
 * Used in [[FPS.setBank]]
 * @category Bank Participant
 */
FPS.BANK_CITIBANK = "250";
// Common SVF Participants
/**
 * WeChat Pay Hong Kong Limited
 *
 * Used in [[FPS.setBank]]
 * @category SVF Participant
 */
FPS.BANK_WECHAT = "931";
/**
 * HKT Payment Limited
 *
 * Used in [[FPS.setBank]]
 * @category SVF Participant
 */
FPS.BANK_TAP_N_GO = "935";
/**
 * TNG (Asia) Limited
 *
 * Used in [[FPS.setBank]]
 * @category SVF Participant
 */
FPS.BANK_TNG = "947";
/**
 * Alipay Financial Services (HK) Limited
 *
 * Used in [[FPS.setBank]]
 * @category SVF Participant
 */
FPS.BANK_ALIPAY = "948";
/**
 * Octopus Cards Limited
 *
 * Used in [[FPS.setBank]]
 * @category SVF Participant
 */
FPS.BANK_OCTOPUS = "949";
/**
 * PayMe
 *
 * Used in [[FPS.setBank]]
 * @category SVF Participant
 */
FPS.BANK_PAYME = "954";
// Common Currency Code
/**
 * Hong Kong Dollar
 *
 * Used in [[FPS.setCurrency]]
 * @category Currency
 */
FPS.CURRENCY_HKD = "HKD";
/**
 * Chinese Yuan Renminbi
 *
 * Used in [[FPS.setCurrency]]
 * @category Currency
 */
FPS.CURRENCY_CNY = "CNY";
/**
 * Taiwan New Dollar
 *
 * Used in [[FPS.setCurrency]]
 * @category Currency
 */
FPS.CURRENCY_TWD = "TWD";
/**
 * United States Dollar
 *
 * Used in [[FPS.setCurrency]]
 * @category Currency
 */
FPS.CURRENCY_USD = "USD";
// Common FPS Merchant Unique Identifier
/**
 * Inland Revenue Department - Profits Tax
 *
 * Used in [[FPS.setEmail]]
 * @category FPS Identifier
 */
FPS.FPS_EMAIL_IRD_PROFITS_TAX = "FPS_Identifier_CRC201A@ird.gov.hk";
/**
 * Inland Revenue Department - Salaries Tax
 *
 * Used in [[FPS.setEmail]]
 * @category FPS Identifier
 */
FPS.FPS_EMAIL_IRD_SALARIES_TAX = "FPS_Identifier_CRC201B@ird.gov.hk";
/**
 * Inland Revenue Department - Personal Assessment
 *
 * Used in [[FPS.setEmail]]
 * @category FPS Identifier
 */
FPS.FPS_EMAIL_IRD_PERSONAL_ASSESSMENT = "FPS_Identifier_CRC201D@ird.gov.hk";
/**
 * CLP Power Hong Kong Ltd.
 *
 * Used in [[FPS.setFPSId]]
 * @category FPS Identifier
 */
FPS.FPS_ID_CLP = "4853305";
/**
 * Hongkong Electric Company
 *
 * Used in [[FPS.setFPSId]]
 * @category FPS Identifier
 */
FPS.FPS_ID_HK_ELECTRIC = "4853305";
if (typeof window !== "undefined" && !window.FPS) {
    window.FPS = FPS;
}
//# sourceMappingURL=index.js.map