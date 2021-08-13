import Response from "../lib/event";

// Import functions
import crc16 from "../lib/crc";
import { extract, isAlphanumericSpecial, numberToValidId } from "../lib/utils";

// Import data
import { FPS_CURRENCY, FPS_PARTICIPANT_LIST, FPS_PARTICIPANTS, FPS_MERCHANT, FPS_CURRENCY_LIST } from "./config";

// Import constants for Main ID
import { FORMAT_INDICATOR, INITIATION_POINT, MERCHANT_CATEGORY_CODE, TRANSACTION_CURRENCY, TRANSACTION_AMOUNT, COUNTRY_CODE, MERCHANT_NAME, MERCHANT_CITY, ADDITIONAL_INFORMATION, CYCLIC_REDUNDANCY_CHECK, USEFUL_CONSTANT } from "../lib/constant";

// Import constants for Sub ID or other value
import { STATIC_QR_CODE, DYNAMIC_QR_CODE, MERCHANT_ACCOUNT_UNIQUE, MERCHANT_ACCOUNT_PARTICIPANT, MERCHANT_ACCOUNT_IDENTIFIER_FPS, MERCHANT_ACCOUNT_IDENTIFIER_MOBILE, MERCHANT_ACCOUNT_IDENTIFIER_EMAIL, MERCHANT_INFO_NAME, ADDITIONAL_INFO_BILL, ADDITIONAL_INFO_REFERENCE } from "../lib/constant";

// Import types
import { VALID_ID, VALID_OBJECT, POINT_OF_INITIATION, MERCHANT_ACCOUNT_INFO, ADDITIONAL_INFO } from "../lib/constant";

import { IFPS_CODE } from "./config";

/**
 * Simplified class contains some functions from the main class
 *
 * Already meet the requirements of daily transaction for FPS
 */
export default class FPS implements IFPS_CODE {
    /** @category Format Indicator */
    private formatIndicator?: string = "01"; // ID: 00 // Fixed
    /** @category Point of Initiation */
    private initiationPoint?: POINT_OF_INITIATION = "11"; // ID: 01
    /** @category Merchant Account */
    private merchantAccount?: FPS_MERCHANT = "26"; // ID: 26 // FPS
    /** @category Merchant Account */
    private merchantAccountInfo?: MERCHANT_ACCOUNT_INFO = {
        uniqueIdentifier: "hk.com.hkicl"
    };
    /** @category Merchant Information */
    private merchantCategory: string = "0000"; // ID: 52 // 0000 is Dummy value
    /** @category Transaction Data */
    private transactionCurrency: FPS_CURRENCY = "HKD"; // ID: 53
    /** @category Transaction Data */
    private transactionAmount?: string; // ID: 54
    /** @category Merchant Information */
    private countryCode: "HK" = "HK"; // ID: 58
    /** @category Merchant Information */
    private merchantName: string = "NA"; // ID: 59
    /** @category Merchant Information */
    private merchantCity: string = "HK"; // ID: 60
    /** @category Billing Data */
    private additionalInfo?: ADDITIONAL_INFO; // ID: 62
    private cyclicRedundancyCheck?: string; // ID: 63

    /**
     * Prevent function throwing error and stop the script.
     * You may need to handle the error yourself.
     * @category static
     */
    static Silent(): void {
        Response.Silent();
    }

    // Common Bank Participants
    /**
     * Standard Chartered Bank (Hong Kong) Limited
     *
     * Used in [[FPS.setBank]]
     * @category Bank Participant
     */
    static get BANK_STANDARD_CHARTERED() { return USEFUL_CONSTANT["BANK_STANDARD_CHARTERED"]; }
    /**
     * The Hongkong and Shanghai Banking Corporation Limited
     *
     * Used in [[FPS.setBank]]
     * @category Bank Participant
     */
    static get BANK_HSBC() { return USEFUL_CONSTANT["BANK_HSBC"]; }
    /**
     * Bank of China (Hong Kong) Limited
     *
     * Used in [[FPS.setBank]]
     * @category Bank Participant
     */
    static get BANK_BANK_OF_CHINA() { return USEFUL_CONSTANT["BANK_BANK_OF_CHINA"]; }
    /**
     * The Bank of East Asia, Limited
     *
     * Used in [[FPS.setBank]]
     * @category Bank Participant
     */
    static get BANK_EAST_ASIA() { return USEFUL_CONSTANT["BANK_EAST_ASIA"]; }
    /**
     * DBS Bank (Hong Kong) Ltd.
     *
     * Used in [[FPS.setBank]]
     * @category Bank Participant
     */
    static get BANK_DBS() { return USEFUL_CONSTANT["BANK_DBS"]; }
    /**
     * Hang Seng Bank Ltd.
     *
     * Used in [[FPS.setBank]]
     * @category Bank Participant
     */
    static get BANK_HANG_SANG() { return USEFUL_CONSTANT["BANK_HANG_SANG"]; }
    /**
     * Citibank (Hong Kong) Limited
     *
     * Used in [[FPS.setBank]]
     * @category Bank Participant
     */
    static get BANK_CITIBANK() { return USEFUL_CONSTANT["BANK_CITIBANK"]; }

    // Common SVF Participants
    /**
     * WeChat Pay Hong Kong Limited
     *
     * Used in [[FPS.setBank]]
     * @category SVF Participant
     */
    static get BANK_WECHAT() { return USEFUL_CONSTANT["BANK_WECHAT"]; }
    /**
     * HKT Payment Limited
     *
     * Used in [[FPS.setBank]]
     * @category SVF Participant
     */
    static get BANK_TAP_N_GO() { return USEFUL_CONSTANT["BANK_TAP_N_GO"]; }
    /**
     * TNG (Asia) Limited
     *
     * Used in [[FPS.setBank]]
     * @category SVF Participant
     */
    static get BANK_TNG() { return USEFUL_CONSTANT["BANK_TNG"]; }
    /**
     * Alipay Financial Services (HK) Limited
     *
     * Used in [[FPS.setBank]]
     * @category SVF Participant
     */
    static get BANK_ALIPAY() { return USEFUL_CONSTANT["BANK_ALIPAY"]; }
    /**
     * Octopus Cards Limited
     *
     * Used in [[FPS.setBank]]
     * @category SVF Participant
     */
    static get BANK_OCTOPUS() { return USEFUL_CONSTANT["BANK_OCTOPUS"]; }
    /**
     * PayMe
     *
     * Used in [[FPS.setBank]]
     * @category SVF Participant
     */
    static get BANK_PAYME() { return USEFUL_CONSTANT["BANK_PAYME"]; }

    // Common Currency Code
    /**
     * Hong Kong Dollar
     *
     * Used in [[FPS.setCurrency]]
     * @category Currency
     */
    static get CURRENCY_HKD() { return USEFUL_CONSTANT["CURRENCY_HKD"]; }
    /**
     * Chinese Yuan Renminbi
     *
     * Used in [[FPS.setCurrency]]
     * @category Currency
     */
    static get CURRENCY_CNY() { return USEFUL_CONSTANT["CURRENCY_CNY"]; }
    /**
     * Taiwan New Dollar
     *
     * Used in [[FPS.setCurrency]]
     * @category Currency
     */
    static get CURRENCY_TWD() { return USEFUL_CONSTANT["CURRENCY_TWD"]; }
    /**
     * United States Dollar
     *
     * Used in [[FPS.setCurrency]]
     * @category Currency
     */
    static get CURRENCY_USD() { return USEFUL_CONSTANT["CURRENCY_USD"]; }

    // Common FPS Merchant Unique Identifier
    /**
     * Inland Revenue Department - Profits Tax
     *
     * Used in [[FPS.setEmail]]
     * @category FPS Identifier
     */
    static get FPS_EMAIL_IRD_PROFITS_TAX() { return USEFUL_CONSTANT["FPS_EMAIL_IRD_PROFITS_TAX"]; }
    /**
     * Inland Revenue Department - Salaries Tax
     *
     * Used in [[FPS.setEmail]]
     * @category FPS Identifier
     */
    static get FPS_EMAIL_IRD_SALARIES_TAX() { return USEFUL_CONSTANT["FPS_EMAIL_IRD_SALARIES_TAX"]; }
    /**
     * Inland Revenue Department - Personal Assessment
     *
     * Used in [[FPS.setEmail]]
     * @category FPS Identifier
     */
    static get FPS_EMAIL_IRD_PERSONAL_ASSESSMENT() { return USEFUL_CONSTANT["FPS_EMAIL_IRD_PERSONAL_ASSESSMENT"]; }

    /**
     * CLP Power Hong Kong Ltd.
     *
     * Used in [[FPS.setFPSId]]
     * @category FPS Identifier
     */
    static get FPS_ID_CLP() { return USEFUL_CONSTANT["FPS_ID_CLP"]; }
    /**
     * Hongkong Electric Company
     *
     * Used in [[FPS.setFPSId]]
     * @category FPS Identifier
     */
    // static get FPS_ID_HK_ELECTRIC(){return USEFUL_CONSTANT["FPS_ID_HK_ELECTRIC"];}

    /**
     * Function to help building the resulting string
     */
    payload(id: VALID_ID, content: string = ""): string {
        return `${id}${numberToValidId(content.length)}${content}`
    }

    /**
     * Function to validate a string as alphanumeric special string (A-z0-9.@_+-)
     * @param x Source string
     * @param length Maximum length available
     */
    setAlphanumericSpecial(x: string, length: number): Response {
        let event = new Response();
        if (typeof x === "undefined") {
            event.setError("Not Specified", true);
        } else if (x.length > length) {
            event.setError(`Length Exceeds Limit (>${length})`, true);
        } else if (!isAlphanumericSpecial(x)) {
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
    setNumeric(x: number | string, fraction: number | boolean = false, limit: number = 13): Response {
        let str: string,
            event = new Response();
        if (typeof x === "undefined") {
            event.setError("Not Specified", true);
        } else if (typeof x === "string") str = x;
        else if (typeof fraction === "number") str = x.toFixed(fraction);
        else str = x.toString();

        if (!event.isError()) {
            if (!/^[0-9.]+$/.test(str)) {
                event.setError("Should Contains Certain Characters Only (0-9.)", true);
            } else if (parseFloat(str) <= 0) {
                event.setError("Exceeds Limit (<=0)", true);
            } else if (str.length > limit) {
                event.setError(`Length Exceeds Limit (>${limit}) (Including "." Character)`, true);
            } else {
                event.data = str;
            }
        }
        return event;
    }

    /**
     * Extract and parse data from plaintext
     * @param x Plaintext decoded from QR code
     */
    parse(x: string): Response {
        let event = this.extract(x);
        if (event.isError()) return event;

        let data = JSON.parse(JSON.stringify(event.data as object));
        for (let id in data) {
            if (event.isError()) break;
            let content = data[id];
            if (id == FORMAT_INDICATOR) {
                // Fixed
            } else if (id == INITIATION_POINT) {
                if (content == STATIC_QR_CODE || content == DYNAMIC_QR_CODE) {
                    this.initiationPoint = content as POINT_OF_INITIATION;
                } else {
                    event.setError(`Invalid Initiation Point (id=${id})`);
                }
            } else if (id == TRANSACTION_CURRENCY) {
                content = content.toUpperCase();
                let currency = Object.keys(FPS_CURRENCY_LIST).filter(v => FPS_CURRENCY_LIST[v] == content);
                if (currency.length > 0) {
                    this.setCurrency(currency[0] as FPS_CURRENCY);
                } else {
                    event.setError(`Invalid Transaction Currency (id=${id})`);
                }
            } else if (id == TRANSACTION_AMOUNT) {
                this.setAmount(content);
            } else if (id == MERCHANT_NAME) {
                this.merchantName = content;
            } else if (id == MERCHANT_CITY) {
                this.merchantCity = content;
            } else if (id == ADDITIONAL_INFORMATION) {
                this.setAdditionalInfo(content)
            } else if (id == CYCLIC_REDUNDANCY_CHECK) {
                // Already Checked
            } else if (id == this.merchantAccount) {
                this.setMerchantAccount(content)
            }
        }
        return event;
    }

    /**
     * Extract data from plaintext
     * @param x Plaintext decoded from QR code
     */
    extract(x: string = ""): Response {
        let event = new Response();
        if (x.length == 0) {
            event = this.generate();
            if (event.isError()) return event;
            x = event.data as string;
            delete event.data;
        }
        let e = extract(x);
        if (e.length == 1) {
            let data = e[0],
                crc = data[CYCLIC_REDUNDANCY_CHECK],
                crcStr = CYCLIC_REDUNDANCY_CHECK + "04",
                crcCheck = x.split(`${crcStr}${crc}`)[0] + crcStr;
            if (!crc || crc16(crcCheck) != crc) {
                event.setError("Invalid Input - Invalid CRC");
            } else {
                event.data = data;
            }
        } else {
            event.setError("Invalid Input");
        }
        return event;
    }

    /**
     * Generate resulting string for QR code
     */
    generate(): Response {
        let code: string = "",
            event = new Response();
        code += this.payload(FORMAT_INDICATOR, this.formatIndicator);
        code += this.payload(INITIATION_POINT, this.initiationPoint);

        // Merchant Data
        let merchantAccount: string = "";
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
            Object.keys(this.merchantAccountInfo.paymentNetwork).map((id: VALID_ID) => {
                merchantAccount += this.payload(id, this.merchantAccountInfo.paymentNetwork[id]);
            })
        }
        if (merchantAccount.length > 99) {
            event.setError("Merchant Account Information Length Exceeds Limit (>99)");
            return event;
        }
        code += this.payload(this.merchantAccount, merchantAccount);
        code += this.payload(MERCHANT_CATEGORY_CODE, this.merchantCategory);

        // Transaction Data
        code += this.payload(TRANSACTION_CURRENCY, FPS_CURRENCY_LIST[this.transactionCurrency]);
        if (this.transactionAmount && parseFloat(this.transactionAmount) > 0) {
            code += this.payload(TRANSACTION_AMOUNT, this.transactionAmount);
        }

        // Additional Merchant Data
        code += this.payload(COUNTRY_CODE, this.countryCode);
        code += this.payload(MERCHANT_NAME, this.merchantName);
        code += this.payload(MERCHANT_CITY, this.merchantCity);

        // Additional Data
        let additionalInfo: string = "";
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
        } else if (additionalInfo.length > 0) {
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
    isStatic(): boolean {
        return this.initiationPoint == STATIC_QR_CODE;
    }

    /**
     * Set it to a static QR Code
     * @category Point of Initiation
     */
    setStatic(): Response {
        this.initiationPoint = STATIC_QR_CODE as POINT_OF_INITIATION;
        return new Response();
    }

    /**
     * Set it to a dynamic QR Code
     * @category Point of Initiation
     */
    setDynamic(): Response {
        this.initiationPoint = DYNAMIC_QR_CODE as POINT_OF_INITIATION;
        return new Response();
    }

    /**
     * Set merchant account data
     * @category Merchant Account
     */
    setMerchantAccount(x: VALID_OBJECT): Response {
        let event = new Response();
        for (let id in x) {
            if (event.isError()) break;
            event = this.setAlphanumericSpecial(x[id], 99);
            if (event.isError()) {
                event.setError(`Data ${event.message}`);
            } else {
                if (!this.merchantAccountInfo.paymentNetwork) this.merchantAccountInfo.paymentNetwork = {};
                if (id == MERCHANT_ACCOUNT_UNIQUE) continue;
                if (id == MERCHANT_ACCOUNT_PARTICIPANT) {
                    if (!(x[id] in FPS_PARTICIPANT_LIST)) {
                        event.setError("Invalid Merchant Code");
                        continue;
                    }
                } else if (id == MERCHANT_ACCOUNT_IDENTIFIER_FPS) {
                    if (!/^[0-9]+$/.test(x[id])) {
                        event.setError("FPS Identifier Should Contains Numbers Only (0-9)");
                        continue;
                    } else if (x[id].length < 7 || x[id].length > 9) {
                        event.setError("Invalid FPS Identifier Length (7-9)");
                        continue;
                    }
                } else if (id == MERCHANT_ACCOUNT_IDENTIFIER_MOBILE) {
                    if (!/^[0-9+-]+$/.test(x[id])) {
                        event.setError("Mobile Number Should Contains Certain Characters Only (0-9+-)");
                        continue;
                    } else if (/^[0-9]{8}$/.test(x[id])) {
                        x[id] = `+852-${x[id]}`;
                    } else if (/^852[0-9]{8}$/.test(x[id])) {
                        x[id] = `+${x[id].slice(0, 3)}-${x[id].slice(3)}`;
                    } else if (!/^\+852-[0-9]{8}$/.test(x[id])) {
                        event.setError("Invalid Mobile Number")
                        continue;
                    }
                } else if (id == MERCHANT_ACCOUNT_IDENTIFIER_EMAIL) {
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
    getBank(toName: boolean = false): Response {
        let event = new Response;
        if (this?.merchantAccountInfo?.paymentNetwork && MERCHANT_ACCOUNT_PARTICIPANT in this.merchantAccountInfo.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork[MERCHANT_ACCOUNT_PARTICIPANT];
            if (toName) {
                event.data = FPS_PARTICIPANT_LIST[event.data];
            }
        } else {
            event.setError('Merchant Account Participant Code not set');
        }
        return event;
    }
    /**
     * Set merchant account participant code
     * @category Merchant Account
     */
    setBank(x: FPS_PARTICIPANTS): Response {
        let info: VALID_OBJECT = {};
        info[MERCHANT_ACCOUNT_PARTICIPANT] = x;
        return this.setMerchantAccount(info);
    }

    /**
     * Get merchant account identifier - FPS ID
     * @category Merchant Account
     */
    getFPSId(): Response {
        let event = new Response;
        if (this?.merchantAccountInfo?.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork[MERCHANT_ACCOUNT_IDENTIFIER_FPS];
        } else {
            event.setError('FPS ID not set');
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
    setFPSId(x: number | string): Response {
        let info: VALID_OBJECT = {},
            id: string;
        if (typeof x === "number") id = x.toString();
        else id = x;
        info[MERCHANT_ACCOUNT_IDENTIFIER_FPS] = id;
        return this.setMerchantAccount(info);
    }

    /**
     * Get merchant account identifier - Mobile Number
     * @category Merchant Account
     */
    getMobile(): Response {
        let event = new Response;
        if (this?.merchantAccountInfo?.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork[MERCHANT_ACCOUNT_IDENTIFIER_MOBILE];
        } else {
            event.setError('Mobile Number not set');
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
    setMobile(x: number | string): Response {
        let info: VALID_OBJECT = {},
            mobile: string;
        if (typeof x === "number") mobile = x.toString();
        else mobile = x;
        info[MERCHANT_ACCOUNT_IDENTIFIER_MOBILE] = mobile;
        return this.setMerchantAccount(info);
    }

    /**
     * Get merchant account identifier - Email
     * @category Merchant Account
     */
    getEmail(): Response {
        let event = new Response;
        if (this?.merchantAccountInfo?.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork[MERCHANT_ACCOUNT_IDENTIFIER_EMAIL];
        } else {
            event.setError('Email not set');
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
    setEmail(x: string): Response {
        let info: VALID_OBJECT = {};
        info[MERCHANT_ACCOUNT_IDENTIFIER_EMAIL] = x;
        return this.setMerchantAccount(info);
    }

    /**
     * Get transaction amount
     * @param toNumber Convert number string to number
     *
     * @category Transaction Data
     */
    getAmount(toNumber: boolean = false): Response {
        let event = new Response;
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
    setAmount(x: number): Response {
        let event = this.setNumeric(x);
        if (event.isError()) {
            event.setError(`Transaction Amount ${event.message}`);
        } else {
            this.transactionAmount = event.data as string;
        }
        return event;
    }

    /**
     * Set all the billing information
     * @category Billing Data
     */
    setAdditionalInfo(x: VALID_OBJECT): Response {
        let event = new Response();
        if (!this.additionalInfo) this.additionalInfo = {};
        if (ADDITIONAL_INFO_BILL in x) {
            event = this.setAlphanumericSpecial(x[ADDITIONAL_INFO_BILL], 25);
            if (event.isError()) {
                event.setError(`Bill Number ${event.message}`);
                return event;
            } else {
                this.additionalInfo.billNumber = x[ADDITIONAL_INFO_BILL];
            }
            delete x[MERCHANT_INFO_NAME];
        }
        if (ADDITIONAL_INFO_REFERENCE in x) {
            event = this.setAlphanumericSpecial(x[ADDITIONAL_INFO_REFERENCE], 25);
            if (event.isError()) {
                event.setError(`Reference Label ${event.message}`);
                return event;
            } else {
                this.additionalInfo.referenceLabel = x[ADDITIONAL_INFO_REFERENCE];
            }
            delete x[ADDITIONAL_INFO_REFERENCE];
        }
        for (let id in x) {
            if (!this.additionalInfo.extra) this.additionalInfo.extra = {};
            this.additionalInfo.extra[id] = x[id];
        }
        return event;
    }

    /**
     * Get the billing number
     * @category Billing Data
     */
    getBillNumber(): Response {
        let event = new Response;
        if (this?.additionalInfo?.billNumber) {
            event.data = this.additionalInfo.billNumber;
        } else {
            event.setError('Bill Number not set');
        }
        return event;
    }
    /**
     * Set the billing number
     * @category Billing Data
     */
    setBillNumber(x: string): Response {
        let info: VALID_OBJECT = {};
        info[ADDITIONAL_INFO_BILL] = x;
        return this.setAdditionalInfo(info);
    }

    /**
     * Get the reference of the transaction
     * @category Billing Data
     */
    getReference(): Response {
        let event = new Response;
        if (this?.additionalInfo?.referenceLabel) {
            event.data = this.additionalInfo.referenceLabel;
        } else {
            event.setError('Reference Label not set');
        }
        return event;
    }
    /**
     * Set the reference of the transaction
     * @category Billing Data
     */
    setReference(x: string): Response {
        let info: VALID_OBJECT = {};
        info[ADDITIONAL_INFO_REFERENCE] = x;
        return this.setAdditionalInfo(info);
    }

    /**
     * Set transaction currency to Hong Kong Dollar (HKD)
     *
     * See [[FPS.setCurrency]]
     * @category Transaction Data
     */
    setHKD(): Response {
        return this.setCurrency(FPS.CURRENCY_HKD);
    }
    /**
     * Set transaction currency to Chinese Yuan Renmenbi (CNY)
     *
     * See [[FPS.setCurrency]]
     * @category Transaction Data
     */
    setCNY(): Response {
        return this.setCurrency(FPS.CURRENCY_CNY);
    }

    /**
     * Get transaction currency code
     * @param toCode Get the 3-digit number code instead
     *
     * @category Transaction Data
     */
    getCurrency(toCode: boolean = false): Response {
        let event = new Response;
        event.data = this.transactionCurrency;
        if (toCode) {
            event.data = FPS_CURRENCY_LIST[event.data];
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
    setCurrency(x: FPS_CURRENCY): Response {
        x = x.toUpperCase() as FPS_CURRENCY;
        let event = new Response();
        if (!(x in FPS_CURRENCY_LIST)) {
            event.setError("Invalid Currency Code");
        } else {
            this.transactionCurrency = x;

        }
        return event;
    }
}

if (typeof window !== "undefined" && !window.FPS) {
    window.FPS = FPS;
}