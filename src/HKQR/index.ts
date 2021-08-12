import Event from "../lib/event";

// Import functions
import crc16 from "../lib/crc";
import { extract, isAlphanumericSpecial, numberToValidId } from "../lib/utils";

// Import data
import { ISO_COUNTRY, ISO_CURRENCY, ISO_LANGUAGE, ISO_MERCHANT_CATEGORY, HKQR_MERCHANT, HKQR_PARTICIPANT, MERCHANT_ACCOUNTS, HKQR_COUNTRY, HKQR_CURRENCY, HKQR_LANGUAGE, MERCHANT_CATEGORY, HKQR_PARTICIPANTS, MERCHANT_INFO } from "./config";

// Import constants for Main ID
import { FORMAT_INDICATOR, INITIATION_POINT, MERCHANT_CATEGORY_CODE, TRANSACTION_CURRENCY, TRANSACTION_AMOUNT, CONVENIENCE_FEE_INDICATOR, CONVENIENCE_FEE_FIXED, CONVENIENCE_FEE_PERCENT, COUNTRY_CODE, MERCHANT_NAME, MERCHANT_CITY, POSTAL_CODE, ADDITIONAL_INFORMATION, CYCLIC_REDUNDANCY_CHECK, LOCALIZE_MERCHANT, USEFUL_CONSTANT } from "../lib/constant";

// Import constants for Sub ID or other value
import { STATIC_QR_CODE, DYNAMIC_QR_CODE, MERCHANT_ACCOUNT_UNIQUE, MERCHANT_ACCOUNT_PARTICIPANT, MERCHANT_ACCOUNT_IDENTIFIER_FPS, MERCHANT_ACCOUNT_IDENTIFIER_MOBILE, MERCHANT_ACCOUNT_IDENTIFIER_EMAIL, MERCHANT_INFO_LANGUAGE, MERCHANT_INFO_NAME, MERCHANT_INFO_CITY, ADDITIONAL_INFO_BILL, ADDITIONAL_INFO_MOBILE, ADDITIONAL_INFO_STORE, ADDITIONAL_INFO_LOYALTY, ADDITIONAL_INFO_REFERENCE, ADDITIONAL_INFO_CUSTOMER, ADDITIONAL_INFO_TERMINAL, ADDITIONAL_INFO_PURPOSE, ADDITIONAL_INFO_REQUEST } from "../lib/constant";

// Import types
import { VALID_ID, VALID_OBJECT, POINT_OF_INITIATION, CONVENIENCE_FEE, MERCHANT_ACCOUNT_INFO, ADDITIONAL_INFO } from "../lib/constant";

import { IHKQR_CODE } from "./config";

/**
 * Main class contains all the functions
 */
export default class HKQR implements IHKQR_CODE {
    /** @category Format Indicator */
    private formatIndicator?: string = "01"; // ID: 00 // Fixed
    /** @category Point of Initiation */
    private initiationPoint?: POINT_OF_INITIATION = "11"; // ID: 01
    /** @category Merchant Account */
    private merchantAccount?: MERCHANT_ACCOUNTS = "26"; // ID: [02..51] // Default FPS
    /** @category Merchant Account */
    private merchantAccountInfo?: MERCHANT_ACCOUNT_INFO = {
        uniqueIdentifier: "hk.com.hkicl"
    };
    /** @category Merchant Information */
    private merchantCategory: MERCHANT_CATEGORY = "0000"; // ID: 52 // 0000 is Dummy value
    /** @category Transaction Data */
    private transactionCurrency: HKQR_CURRENCY = "HKD"; // ID: 53
    /** @category Transaction Data */
    private transactionAmount?: string; // ID: 54
    /** @category Transaction Data */
    private convenienceFeeIndicator?: CONVENIENCE_FEE; // ID: 55
    /** @category Transaction Data */
    private convenienceFeeAmount?: string; // ID: 56
    /** @category Transaction Data */
    private convenienceFeePercent?: string; // ID: 57
    /** @category Merchant Information */
    private countryCode: HKQR_COUNTRY = "HK"; // ID: 58
    /** @category Merchant Information */
    private merchantName: string = "NA"; // ID: 59
    /** @category Merchant Information */
    private merchantCity: string = "HK"; // ID: 60
    /** @category Merchant Information */
    private postalCode?: string; // ID: 61
    /** @category Billing Data */
    private additionalInfo?: ADDITIONAL_INFO; // ID: 62
    private cyclicRedundancyCheck?: string; // ID: 63
    /** @category Merchant Information */
    private merchantInfo?: MERCHANT_INFO; // ID:64

    /**
     * Prevent function throwing error and stop the script.
     * You may need to handle the error yourself.
     * @category static
     */
    static Silent(): void {
        Event.Silent();
    }

    // Common Bank Participants
    /**
     * Standard Chartered Bank (Hong Kong) Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category Bank Participant
     */
    static get BANK_STANDARD_CHARTERED() { return USEFUL_CONSTANT["BANK_STANDARD_CHARTERED"]; }
    /**
     * The Hongkong and Shanghai Banking Corporation Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category Bank Participant
     */
    static get BANK_HSBC() { return USEFUL_CONSTANT["BANK_HSBC"]; }
    /**
     * Bank of China (Hong Kong) Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category Bank Participant
     */
    static get BANK_BANK_OF_CHINA() { return USEFUL_CONSTANT["BANK_BANK_OF_CHINA"]; }
    /**
     * The Bank of East Asia, Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category Bank Participant
     */
    static get BANK_EAST_ASIA() { return USEFUL_CONSTANT["BANK_EAST_ASIA"]; }
    /**
     * DBS Bank (Hong Kong) Ltd.
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category Bank Participant
     */
    static get BANK_DBS() { return USEFUL_CONSTANT["BANK_DBS"]; }
    /**
     * Hang Seng Bank Ltd.
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category Bank Participant
     */
    static get BANK_HANG_SANG() { return USEFUL_CONSTANT["BANK_HANG_SANG"]; }
    /**
     * Citibank (Hong Kong) Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category Bank Participant
     */
    static get BANK_CITIBANK() { return USEFUL_CONSTANT["BANK_CITIBANK"]; }

    // Common SVF Participants
    /**
     * WeChat Pay Hong Kong Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category SVF Participant
     */
    static get BANK_WECHAT() { return USEFUL_CONSTANT["BANK_WECHAT"]; }
    /**
     * HKT Payment Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category SVF Participant
     */
    static get BANK_TAP_N_GO() { return USEFUL_CONSTANT["BANK_TAP_N_GO"]; }
    /**
     * TNG (Asia) Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category SVF Participant
     */
    static get BANK_TNG() { return USEFUL_CONSTANT["BANK_TNG"]; }
    /**
     * Alipay Financial Services (HK) Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category SVF Participant
     */
    static get BANK_ALIPAY() { return USEFUL_CONSTANT["BANK_ALIPAY"]; }
    /**
     * Octopus Cards Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category SVF Participant
     */
    static get BANK_OCTOPUS() { return USEFUL_CONSTANT["BANK_OCTOPUS"]; }
    /**
     * PayMe
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category SVF Participant
     */
    static get BANK_PAYME() { return USEFUL_CONSTANT["BANK_PAYME"]; }

    // Common Currency Code
    /**
     * Hong Kong Dollar
     *
     * Used in [[HKQR.setTransactionCurrency]]
     * @category Currency
     */
    static get CURRENCY_HKD() { return USEFUL_CONSTANT["CURRENCY_HKD"]; }
    /**
     * Chinese Yuan Renminbi
     *
     * Used in [[HKQR.setTransactionCurrency]]
     * @category Currency
     */
    static get CURRENCY_CNY() { return USEFUL_CONSTANT["CURRENCY_CNY"]; }
    /**
     * Taiwan New Dollar
     *
     * Used in [[HKQR.setTransactionCurrency]]
     * @category Currency
     */
    static get CURRENCY_TWD() { return USEFUL_CONSTANT["CURRENCY_TWD"]; }
    /**
     * United States Dollar
     *
     * Used in [[HKQR.setTransactionCurrency]]
     * @category Currency
     */
    static get CURRENCY_USD() { return USEFUL_CONSTANT["CURRENCY_USD"]; }

    // Common Language
    /**
     * Chinese
     *
     * Used in [[HKQR.setLanguagePreference]]
     * @category Language
     */
    static get LANGUAGE_CHINESE() { return USEFUL_CONSTANT["LANGUAGE_CHINESE"]; }
    /**
     * English
     *
     * Used in [[HKQR.setLanguagePreference]]
     * @category Language
     */
    static get LANGUAGE_ENGLISH() { return USEFUL_CONSTANT["LANGUAGE_ENGLISH"]; }

    // Common Country / Region
    /**
     * Hong Kong
     *
     * Used in [[HKQR.setCountryCode]]
     * @category Country / Region
     */
    static get LOCATION_HONG_KONG() { return USEFUL_CONSTANT["LOCATION_HONG_KONG"]; }
    /**
     * China
     *
     * Used in [[HKQR.setCountryCode]]
     * @category Country / Region
     */
    static get LOCATION_CHINA() { return USEFUL_CONSTANT["LOCATION_CHINA"]; }
    /**
     * Taiwan
     *
     * Used in [[HKQR.setCountryCode]]
     * @category Country / Region
     */
    static get LOCATION_TAIWAN() { return USEFUL_CONSTANT["LOCATION_TAIWAN"]; }
    /**
     * Macao
     *
     * Used in [[HKQR.setCountryCode]]
     * @category Country / Region
     */
    static get LOCATION_MACAO() { return USEFUL_CONSTANT["LOCATION_MACAO"]; }
    /**
     * United States of America
     *
     * Used in [[HKQR.setCountryCode]]
     * @category Country / Region
     */
    static get LOCATION_USA() { return USEFUL_CONSTANT["LOCATION_USA"]; }
    /**
     * United Kingdom of Great Britain and Northern Ireland
     *
     * Used in [[HKQR.setCountryCode]]
     * @category Country / Region
     */
    static get LOCATION_UK() { return USEFUL_CONSTANT["LOCATION_UK"]; }

    // Common Merchant Account
    /**
     * Fast Payment System (FPS)
     *
     * Used in [[HKQR.setMerchantAccountId]]
     * @category Merchant Account ID
     */
    static get MERCHANT_ID_FPS() { return USEFUL_CONSTANT["MERCHANT_ID_FPS"]; }

    // Common FPS Merchant Unique Identifier
    /**
     * Inland Revenue Department - Profits Tax
     *
     * Used in [[HKQR.setMerchantAccountEmail]]
     * @category FPS Identifier
     */
    static get FPS_EMAIL_IRD_PROFITS_TAX() { return USEFUL_CONSTANT["FPS_EMAIL_IRD_PROFITS_TAX"]; }
    /**
     * Inland Revenue Department - Salaries Tax
     *
     * Used in [[HKQR.setMerchantAccountEmail]]
     * @category FPS Identifier
     */
    static get FPS_EMAIL_IRD_SALARIES_TAX() { return USEFUL_CONSTANT["FPS_EMAIL_IRD_SALARIES_TAX"]; }
    /**
     * Inland Revenue Department - Personal Assessment
     *
     * Used in [[HKQR.setMerchantAccountEmail]]
     * @category FPS Identifier
     */
    static get FPS_EMAIL_IRD_PERSONAL_ASSESSMENT() { return USEFUL_CONSTANT["FPS_EMAIL_IRD_PERSONAL_ASSESSMENT"]; }
    /**
     * Water Supplies Department
     *
     * Used in [[HKQR.setMerchantAccountEmail]]
     * @category FPS Identifier
     */
    static get FPS_EMAIL_WSD() { return USEFUL_CONSTANT["FPS_EMAIL_WSD"]; }

    /**
     * CLP Power Hong Kong Ltd.
     *
     * Used in [[HKQR.setMerchantAccountFPSId]]
     * @category FPS Identifier
     */
    static get FPS_ID_CLP() { return USEFUL_CONSTANT["FPS_ID_CLP"]; }
    /**
     * Hongkong Electric Company
     *
     * Used in [[HKQR.setMerchantAccountFPSId]]
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
    setAlphanumericSpecial(x: string, length: number): Event {
        let event = new Event();
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
    setNumeric(x: number | string, fraction: number | boolean = false, limit: number = 13): Event {
        let str: string,
            event = new Event();
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
    parse(x: string): Event {
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
            } else if (id == MERCHANT_CATEGORY_CODE) {
                if (content in ISO_MERCHANT_CATEGORY) {
                    this.merchantCategory = content as MERCHANT_CATEGORY;
                }
            } else if (id == TRANSACTION_CURRENCY) {
                let currency = Object.keys(ISO_CURRENCY).filter(v => ISO_CURRENCY[v] == content);
                if (currency.length > 0) {
                    this.setTransactionCurrency(currency[0] as HKQR_CURRENCY);
                } else {
                    event.setError(`Invalid Transaction Currency (id=${id})`);
                }
            } else if (id == TRANSACTION_AMOUNT) {
                this.setTransactionAmount(content);
            } else if (id == CONVENIENCE_FEE_INDICATOR) {
                // Set this value if found id=56 or id=57
            } else if (id == CONVENIENCE_FEE_FIXED) {
                this.setConvenienceFeeAmount(content);
            } else if (id == CONVENIENCE_FEE_PERCENT) {
                this.setConvenienceFeePercent(content);
            } else if (id == COUNTRY_CODE) {
                if (content in ISO_COUNTRY) {
                    this.countryCode = content as HKQR_COUNTRY;
                }
            } else if (id == MERCHANT_NAME) {
                this.merchantName = content;
            } else if (id == MERCHANT_CITY) {
                this.merchantCity = content;
            } else if (id == POSTAL_CODE) {
                this.postalCode = content;
            } else if (id == ADDITIONAL_INFORMATION) {
                this.setAdditionalInfo(content)
            } else if (id == CYCLIC_REDUNDANCY_CHECK) {
                // Already Checked
            } else if (HKQR_MERCHANT.ACCOUNTS.indexOf(id) != -1) {
                this.setMerchantAccount(content)
            }
        }
        return event;
    }

    /**
     * Extract data from plaintext
     * @param x Plaintext decoded from QR code
     */
    extract(x: string = ""): Event {
        let event = new Event();
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
    generate(): Event {
        let code: string = "",
            event = new Event();
        code += this.payload(FORMAT_INDICATOR, this.formatIndicator);
        code += this.payload(INITIATION_POINT, this.initiationPoint);

        // Merchant Data
        let merchantAccount: string = "";
        if (HKQR_MERCHANT.TEMPLATE_ACCOUNTS.indexOf(this.merchantAccount) != -1) {
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
        }
        if (merchantAccount.length > 99) {
            event.setError("Merchant Account Information Length Exceeds Limit (>99)");
            return event;
        }
        code += this.payload(this.merchantAccount, merchantAccount);
        code += this.payload(MERCHANT_CATEGORY_CODE, this.merchantCategory);

        // Transaction Data
        code += this.payload(TRANSACTION_CURRENCY, ISO_CURRENCY[this.transactionCurrency]);
        if (this.transactionAmount && parseFloat(this.transactionAmount) > 0) {
            code += this.payload(TRANSACTION_AMOUNT, this.transactionAmount);
        }
        if (this.convenienceFeeIndicator) {
            code += this.payload(CONVENIENCE_FEE_INDICATOR, this.convenienceFeeIndicator);
            if (this.convenienceFeeIndicator == CONVENIENCE_FEE_FIXED) {
                code += this.payload(CONVENIENCE_FEE_FIXED, this.convenienceFeeAmount);
            } else {
                code += this.payload(CONVENIENCE_FEE_PERCENT, this.convenienceFeePercent);
            }
        }

        // Additional Merchant Data
        code += this.payload(COUNTRY_CODE, this.countryCode);
        code += this.payload(MERCHANT_NAME, this.merchantName);
        code += this.payload(MERCHANT_CITY, this.merchantCity);
        if (this.postalCode) {
            code += this.payload(POSTAL_CODE, this.postalCode);
        }

        // Additional Data
        let additionalInfo: string = "";
        if (this.additionalInfo) {
            if (this.additionalInfo.billNumber) {
                additionalInfo += this.payload(ADDITIONAL_INFO_BILL, this.additionalInfo.billNumber);
            }
            if (this.additionalInfo.mobileNumber) {
                additionalInfo += this.payload(ADDITIONAL_INFO_MOBILE, this.additionalInfo.mobileNumber);
            }
            if (this.additionalInfo.storeLabel) {
                additionalInfo += this.payload(ADDITIONAL_INFO_STORE, this.additionalInfo.storeLabel);
            }
            if (this.additionalInfo.loyaltyNumber) {
                additionalInfo += this.payload(ADDITIONAL_INFO_LOYALTY, this.additionalInfo.loyaltyNumber);
            }
            if (this.additionalInfo.referenceLabel) {
                additionalInfo += this.payload(ADDITIONAL_INFO_REFERENCE, this.additionalInfo.referenceLabel);
            }
            if (this.additionalInfo.customerLabel) {
                additionalInfo += this.payload(ADDITIONAL_INFO_CUSTOMER, this.additionalInfo.customerLabel);
            }
            if (this.additionalInfo.terminalLabel) {
                additionalInfo += this.payload(ADDITIONAL_INFO_TERMINAL, this.additionalInfo.terminalLabel);
            }
            if (this.additionalInfo.transactionPurpose) {
                additionalInfo += this.payload(ADDITIONAL_INFO_PURPOSE, this.additionalInfo.transactionPurpose);
            }
            if (this.additionalInfo.customerDataRequest) {
                additionalInfo += this.payload(ADDITIONAL_INFO_REQUEST, this.additionalInfo.customerDataRequest);
            }

            if (this.additionalInfo.extra) {
                Object.keys(this.additionalInfo.extra).map((id: VALID_ID) => {
                    additionalInfo += this.payload(id, this.additionalInfo.extra[id]);
                })
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

        // Localized Merchant Data
        let merchantInfo: string = "";
        if (this.merchantInfo) {
            if (!this.merchantInfo.language) {
                event.setError("Missing Language of Localization");
                return event;
            }
            if (!this.merchantInfo.merchantName) {
                event.setError("Missing Localized Merchant Name");
                return event;
            }
            merchantInfo += this.payload(MERCHANT_INFO_LANGUAGE, this.merchantInfo.language);
            merchantInfo += this.payload(MERCHANT_INFO_NAME, this.merchantInfo.merchantName);
            if (this.merchantInfo.merchantCity) {
                merchantInfo += this.payload(MERCHANT_INFO_CITY, this.merchantInfo.merchantCity);
            }

            if (this.merchantInfo.extra) {
                Object.keys(this.merchantInfo.extra).map((id: VALID_ID) => {
                    merchantInfo += this.payload(id, this.merchantInfo.extra[id]);
                })
            }
        }
        if (merchantInfo.length > 99) {
            event.setError("Localized Merchant Information Length Exceeds Limit (>99)");
            return event;
        } else if (merchantInfo.length > 0) {
            code += this.payload(LOCALIZE_MERCHANT, merchantInfo);
        }

        event.data = code;
        return event;
    }

    /**
     * Check if it is a static QR Code
     * @category Point of Initiation
     */
    isStaticQRCode(): boolean {
        return this.initiationPoint == STATIC_QR_CODE;
    }

    /**
     * Get setting
     * @category Point of Initiation
     */
    getInitiationPoint(): Event {
        let event = new Event();
        event.data = this.initiationPoint;
        return event;
    }
    /**
     * Update current setting
     * @category Point of Initiation
     */
    setInitiationPoint(x: POINT_OF_INITIATION): Event {
        let event = new Event();
        if (!(x == STATIC_QR_CODE && x == DYNAMIC_QR_CODE)) {
            event.setError("Invalid Point of Initiation");
        } else {
            this.initiationPoint = x;
        }
        return event;
    }

    /**
     * Get merchant ID
     * @category Merchant Account
     */
    getMerchantAccountId(): Event {
        let event = new Event();
        event.data = this.merchantAccount
        return event;
    }
    /**
     * Set merchant ID
     * @category Merchant Account
     */
    setMerchantAccountId(x: MERCHANT_ACCOUNTS): Event {
        let event = new Event();
        if (HKQR_MERCHANT.ACCOUNTS.indexOf(x) == -1) {
            event.setError("Invalid Merchant Account ID");
        } else {
            this.merchantAccount = x;
        }
        return event;
    }

    /**
     * Get country/region that the transaction take place
     * @category Merchant Information
     */
    getCountryCode(): Event {
        let event = new Event();
        event.data = this.countryCode
        return event;
    }
    /**
     * Set country/region that the transaction take place
     * @category Merchant Information
     */
    setCountryCode(x: HKQR_COUNTRY): Event {
        let event = new Event();
        if (!(x in ISO_COUNTRY)) {
            event.setError("Invalid Country Code");
        } else {
            this.countryCode = x;
        }
        return event;
    }

    /**
     * Get merchant account data
     * @category Merchant Account
     */
    getMerchantAccount(): Event {
        let event = new Event(),
            info: VALID_OBJECT;
        if (this.merchantAccountInfo) {
            info[MERCHANT_ACCOUNT_UNIQUE] = this.merchantAccountInfo.uniqueIdentifier;
            if (this.merchantAccountInfo.paymentNetwork) {
                info = {
                    ...info,
                    ...this.merchantAccountInfo.paymentNetwork,
                }
            }
        }
        event.data = info;
        return event;
    }
    /**
     * Set merchant account data
     * @category Merchant Account
     */
    setMerchantAccount(x: VALID_OBJECT): Event {
        let event = new Event(),
            uniqueIdentifier: string;

        if (MERCHANT_ACCOUNT_UNIQUE in x) {
            event = this.setAlphanumericSpecial(x[MERCHANT_ACCOUNT_UNIQUE], 32);
            if (event.isError()) {
                event.setError(`Unique Identifier ${event.message}`);
                return event;
            } else {
                uniqueIdentifier = x[MERCHANT_ACCOUNT_UNIQUE];
            }
            delete x[MERCHANT_ACCOUNT_UNIQUE];
        }

        if (!this.merchantAccountInfo) {
            if (!uniqueIdentifier) {
                event.setError("Missing Merchant Unique Identifier");
                return event;
            } else {
                this.merchantAccountInfo = {
                    uniqueIdentifier: uniqueIdentifier
                }
            }
        }

        if (uniqueIdentifier) {
            this.merchantAccountInfo.uniqueIdentifier = uniqueIdentifier;
        }

        for (let id in x) {
            if (event.isError()) break;
            event = this.setAlphanumericSpecial(x[id], 99);
            if (event.isError()) {
                event.setError(`Data ${event.message}`);
            } else {
                if (!this.merchantAccountInfo.paymentNetwork) this.merchantAccountInfo.paymentNetwork = {};
                if (id == MERCHANT_ACCOUNT_PARTICIPANT) {
                    if (!(x[id] in HKQR_PARTICIPANT)) {
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
     * Get unique identifier of the payment operator
     * @category Merchant Account
     */
    getUniqueIdentifier(): Event {
        let event = new Event;
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
    setUniqueIdentifier(x: string): Event {
        let info: VALID_OBJECT = {};
        info[MERCHANT_ACCOUNT_UNIQUE] = x;
        return this.setMerchantAccount(info);
    }

    /**
     * Get merchant account participant code
     * @param toName Return the name of the participant
     *
     * @category Merchant Account
     */
    getMerchantAccountParticipantCode(toName: boolean = false): Event {
        let event = new Event;
        if (this?.merchantAccountInfo?.paymentNetwork && MERCHANT_ACCOUNT_PARTICIPANT in this.merchantAccountInfo.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork[MERCHANT_ACCOUNT_PARTICIPANT];
            if (toName) {
                event.data = HKQR_PARTICIPANT[event.data];
            }
        }
        return event;
    }
    /**
     * Set merchant account participant code
     * @category Merchant Account
     */
    setMerchantAccountParticipantCode(x: HKQR_PARTICIPANTS): Event {
        let info: VALID_OBJECT = {};
        info[MERCHANT_ACCOUNT_PARTICIPANT] = x;
        return this.setMerchantAccount(info);
    }

    /**
     * Get merchant account identifier - FPS ID
     * @category Merchant Account
     */
    getMerchantAccountFPSId(): Event {
        let event = new Event;
        if (this?.merchantAccountInfo?.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork[MERCHANT_ACCOUNT_IDENTIFIER_FPS];
        }
        return event;
    }
    /**
     * Set merchant account identifier - FPS ID
     *
     * Set either one among these functions [[HKQR.setMerchantAccountFPSId]], [[HKQR.setMerchantAccountMobile]], [[HKQR.setMerchantAccountEmail]]
     * @category Merchant Account
     */
    setMerchantAccountFPSId(x: number | string): Event {
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
    getMerchantAccountMobile(): Event {
        let event = new Event;
        if (this?.merchantAccountInfo?.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork[MERCHANT_ACCOUNT_IDENTIFIER_MOBILE];
        }
        return event;
    }
    /**
     * Set merchant account identifier - Mobile Number
     *
     * Set either one among these functions [[HKQR.setMerchantAccountFPSId]], [[HKQR.setMerchantAccountMobile]], [[HKQR.setMerchantAccountEmail]]
     * @category Merchant Account
     */
    setMerchantAccountMobile(x: number | string): Event {
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
    getMerchantAccountEmail(): Event {
        let event = new Event;
        if (this?.merchantAccountInfo?.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork[MERCHANT_ACCOUNT_IDENTIFIER_EMAIL];
        }
        return event;
    }
    /**
     * Set merchant account identifier - Email
     *
     * Set either one among these functions [[HKQR.setMerchantAccountFPSId]], [[HKQR.setMerchantAccountMobile]], [[HKQR.setMerchantAccountEmail]]
     * @category Merchant Account
     */
    setMerchantAccountEmail(x: string): Event {
        let info: VALID_OBJECT = {};
        info[MERCHANT_ACCOUNT_IDENTIFIER_EMAIL] = x;
        return this.setMerchantAccount(info);
    }

    /**
     * Get merchant account data
     * @category Merchant Account
     */
    getPaymentNetwork(): Event {
        let event = new Event;
        if (this?.merchantAccountInfo?.paymentNetwork) {
            event.data = this.merchantAccountInfo.paymentNetwork;
        }
        return event;
    }
    /**
     * Set merchant account data by ID
     * @category Merchant Account
     */
    setPaymentNetwork(id: VALID_ID, x: string): Event {
        let info: VALID_OBJECT = {};
        info[id] = x;
        return this.setMerchantAccount(info);
    }

    /**
     * Get merchant name
     * @category Merchant Information
     */
    getMerchantName(): Event {
        let event = new Event;
        event.data = this.merchantName;
        return event;
    }
    /**
     * Set merchant name
     * @category Merchant Information
     */
    setMerchantName(x: string): Event {
        let event = this.setAlphanumericSpecial(x, 25);
        if (event.isError()) {
            event.setError(`Merchant Name ${event.message}`);
        } else {
            this.merchantName = x;
        }
        return event;
    }

    /**
     * Get physical location of the merchant
     * @category Merchant Information
     */
    getMerchantCity(): Event {
        let event = new Event;
        event.data = this.merchantCity;
        return event;
    }
    /**
     * Set physical location of the merchant
     * @category Merchant Information
     */
    setMerchantCity(x: string): Event {
        let event = this.setAlphanumericSpecial(x, 15);
        if (event.isError()) {
            event.setError(`Merchant City ${event.message}`);
        } else {
            this.merchantCity = x;
        }
        return event;
    }

    /**
     * Get postal code of the merchant
     * @category Merchant Information
     */
    getPostalCode(): Event {
        let event = new Event;
        event.data = this.postalCode;
        return event;
    }
    /**
     * Set postal code of the merchant
     * @category Merchant Information
     */
    setPostalCode(x: string): Event {
        let event = this.setAlphanumericSpecial(x, 10);
        if (event.isError()) {
            event.setError(`Postal Code ${event.message}`);
        } else {
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
    getMerchantCategory(toName: boolean = false): Event {
        let event = new Event;
        event.data = this.merchantCategory;
        if (toName) {
            event.data = ISO_MERCHANT_CATEGORY[event.data];
        }
        return event;
    }
    /**
     * Set merchant category code. `0000` if not applicable.
     * @category Merchant Information
     */
    setMerchantCategory(x: MERCHANT_CATEGORY): Event {
        let event = new Event();
        if (x in ISO_MERCHANT_CATEGORY) {
            event.setError("Invalid Merchant Category");
        } else {
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
    getTransactionCurrency(toCode: boolean = false): Event {
        let event = new Event;
        event.data = this.transactionCurrency;
        if (toCode) {
            event.data = ISO_CURRENCY[event.data];
        }
        return event;
    }
    /**
     * Set transaction currency code
     *
     * Will be converted to number in [[HKQR.generate]]
     * @category Transaction Data
     */
    setTransactionCurrency(x: HKQR_CURRENCY): Event {
        x = x.toUpperCase() as HKQR_CURRENCY;
        let event = new Event();
        if (!(x in ISO_CURRENCY)) {
            event.setError("Invalid Currency Code");
        } else {
            this.transactionCurrency = x;

        }
        return event;
    }

    /**
     * Get transaction amount
     * @param toNumber Convert number string to number
     *
     * @category Transaction Data
     */
    getTransactionAmount(toNumber: boolean = false): Event {
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
    setTransactionAmount(x: number | string, fraction: number | boolean = false): Event {
        let event = this.setNumeric(x, fraction);
        if (event.isError()) {
            event.setError(`Transaction Amount ${event.message}`);
        } else {
            this.transactionAmount = event.data as string;
        }
        return event;
    }

    /**
     * Get convenience fee amount (transaction cost or tips)
     * @param toNumber Convert number string to number
     *
     * @category Transaction Data
     */
    getConvenienceFeeAmount(toNumber: boolean = false): Event {
        let event = new Event;
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
    setConvenienceFeeAmount(x: number | string, fraction: number | boolean = false): Event {
        let event = this.setNumeric(x, fraction);
        if (event.isError()) {
            event.setError(`Convenience Fee Amount ${event.message}`);
        } else {
            this.convenienceFeeAmount = event.data as string;
            this.convenienceFeeIndicator = CONVENIENCE_FEE_FIXED as CONVENIENCE_FEE;
        }
        return event;
    }

    /**
     * Get convenience fee percent (transaction cost or tips)
     * @param toNumber Convert number string to number
     *
     * @category Transaction Data
     */
    getConvenienceFeePercent(toNumber: boolean = false): Event {
        let event = new Event;
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
    setConvenienceFeePercent(x: number | string, fraction: number | boolean = false): Event {
        let event = this.setNumeric(x, fraction);
        if (event.isError()) {
            event.setError(`Convenience Fee Percent ${event.message}`);
        } else {
            this.convenienceFeePercent = event.data as string;
            this.convenienceFeeIndicator = CONVENIENCE_FEE_PERCENT as CONVENIENCE_FEE;
        }
        return event;
    }

    /**
     * Get all the billing information
     * @category Billing Data
     */
    getAdditionalInfo(): Event {
        let event = new Event(),
            info: VALID_OBJECT;
        if (this.additionalInfo) {
            if (this.additionalInfo.billNumber) {
                info[ADDITIONAL_INFO_BILL] = this.additionalInfo.billNumber;
            }
            if (this.additionalInfo.mobileNumber) {
                info[ADDITIONAL_INFO_MOBILE] = this.additionalInfo.mobileNumber;
            }
            if (this.additionalInfo.storeLabel) {
                info[ADDITIONAL_INFO_STORE] = this.additionalInfo.storeLabel;
            }
            if (this.additionalInfo.loyaltyNumber) {
                info[ADDITIONAL_INFO_LOYALTY] = this.additionalInfo.loyaltyNumber;
            }
            if (this.additionalInfo.referenceLabel) {
                info[ADDITIONAL_INFO_REFERENCE] = this.additionalInfo.referenceLabel;
            }
            if (this.additionalInfo.customerLabel) {
                info[ADDITIONAL_INFO_CUSTOMER] = this.additionalInfo.customerLabel;
            }
            if (this.additionalInfo.terminalLabel) {
                info[ADDITIONAL_INFO_TERMINAL] = this.additionalInfo.terminalLabel;
            }
            if (this.additionalInfo.transactionPurpose) {
                info[ADDITIONAL_INFO_PURPOSE] = this.additionalInfo.transactionPurpose;
            }
            if (this.additionalInfo.customerDataRequest) {
                info[ADDITIONAL_INFO_REQUEST] = this.additionalInfo.customerDataRequest;
            }
            if (this.additionalInfo.extra) {
                info = {
                    ...info,
                    ...this.additionalInfo.extra,
                }
            }
        }
        event.data = info;
        return event;
    }
    /**
     * Set all the billing information
     * @category Billing Data
     */
    setAdditionalInfo(x: VALID_OBJECT): Event {
        let event = new Event();
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
        if (ADDITIONAL_INFO_MOBILE in x) {
            event = this.setAlphanumericSpecial(x[ADDITIONAL_INFO_MOBILE], 25);
            if (event.isError()) {
                event.setError(`Mobile Number ${event.message}`);
                return event;
            } else {
                this.additionalInfo.mobileNumber = x[ADDITIONAL_INFO_MOBILE];
            }
            delete x[ADDITIONAL_INFO_MOBILE];
        }
        if (ADDITIONAL_INFO_STORE in x) {
            event = this.setAlphanumericSpecial(x[ADDITIONAL_INFO_STORE], 25);
            if (event.isError()) {
                event.setError(`Store Label ${event.message}`);
                return event;
            } else {
                this.additionalInfo.storeLabel = x[ADDITIONAL_INFO_STORE];
            }
            delete x[ADDITIONAL_INFO_STORE];
        }
        if (ADDITIONAL_INFO_LOYALTY in x) {
            event = this.setAlphanumericSpecial(x[ADDITIONAL_INFO_LOYALTY], 25);
            if (event.isError()) {
                event.setError(`Loyalty Number ${event.message}`);
                return event;
            } else {
                this.additionalInfo.loyaltyNumber = x[ADDITIONAL_INFO_LOYALTY];
            }
            delete x[ADDITIONAL_INFO_LOYALTY];
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
        if (ADDITIONAL_INFO_CUSTOMER in x) {
            event = this.setAlphanumericSpecial(x[ADDITIONAL_INFO_CUSTOMER], 25);
            if (event.isError()) {
                event.setError(`Customer Label ${event.message}`);
                return event;
            } else {
                this.additionalInfo.customerLabel = x[ADDITIONAL_INFO_CUSTOMER];
            }
            delete x[ADDITIONAL_INFO_CUSTOMER];
        }
        if (ADDITIONAL_INFO_TERMINAL in x) {
            event = this.setAlphanumericSpecial(x[ADDITIONAL_INFO_TERMINAL], 25);
            if (event.isError()) {
                event.setError(`Terminal Label ${event.message}`);
                return event;
            } else {
                this.additionalInfo.terminalLabel = x[ADDITIONAL_INFO_TERMINAL];
            }
            delete x[ADDITIONAL_INFO_TERMINAL];
        }
        if (ADDITIONAL_INFO_PURPOSE in x) {
            event = this.setAlphanumericSpecial(x[ADDITIONAL_INFO_PURPOSE], 25);
            if (event.isError()) {
                event.setError(`Transaction Purpose ${event.message}`);
                return event;
            } else {
                this.additionalInfo.transactionPurpose = x[ADDITIONAL_INFO_PURPOSE];
            }
            delete x[ADDITIONAL_INFO_PURPOSE];
        }
        if (ADDITIONAL_INFO_REQUEST in x) {
            event = this.setAlphanumericSpecial(x[ADDITIONAL_INFO_REQUEST], 25);
            if (event.isError()) {
                event.setError(`Customer Data Request ${event.message}`);
                return event;
            } else {
                this.additionalInfo.customerDataRequest = x[ADDITIONAL_INFO_REQUEST];
            }
            delete x[ADDITIONAL_INFO_REQUEST];
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
    getBillNumber(): Event {
        let event = new Event;
        if (this?.additionalInfo?.billNumber) {
            event.data = this.additionalInfo.billNumber;
        }
        return event;
    }
    /**
     * Set the billing number
     * @category Billing Data
     */
    setBillNumber(x: string): Event {
        let info: VALID_OBJECT = {};
        info[ADDITIONAL_INFO_BILL] = x;
        return this.setAdditionalInfo(info);
    }

    /**
     * Get the mobile number of the customer
     * @category Billing Data
     */
    getCustomerMobileNumber(): Event {
        let event = new Event;
        if (this?.additionalInfo?.mobileNumber) {
            event.data = this.additionalInfo.mobileNumber;
        }
        return event;
    }
    /**
     * Set the mobile number of the customer
     * @category Billing Data
     */
    setCustomerMobileNumber(x: string): Event {
        let info: VALID_OBJECT = {};
        info[ADDITIONAL_INFO_MOBILE] = x;
        return this.setAdditionalInfo(info);
    }

    /**
     * Get the identifier of the store
     * @category Billing Data
     */
    getStoreLabel(): Event {
        let event = new Event;
        if (this?.additionalInfo?.storeLabel) {
            event.data = this.additionalInfo.storeLabel;
        }
        return event;
    }
    /**
     * Set the identifier of the store
     * @category Billing Data
     */
    setStoreLabel(x: string): Event {
        let info: VALID_OBJECT = {};
        info[ADDITIONAL_INFO_STORE] = x;
        return this.setAdditionalInfo(info);
    }

    /**
     * Get the loyalty number of the customer
     * @category Billing Data
     */
    getLoyaltyNumber(): Event {
        let event = new Event;
        if (this?.additionalInfo?.loyaltyNumber) {
            event.data = this.additionalInfo.loyaltyNumber;
        }
        return event;
    }
    /**
     * Set the loyalty number of the customer
     * @category Billing Data
     */
    setLoyaltyNumber(x: string): Event {
        let info: VALID_OBJECT = {};
        info[ADDITIONAL_INFO_LOYALTY] = x;
        return this.setAdditionalInfo(info);
    }

    /**
     * Get the reference of the transaction
     * @category Billing Data
     */
    getReferenceLabel(): Event {
        let event = new Event;
        if (this?.additionalInfo?.referenceLabel) {
            event.data = this.additionalInfo.referenceLabel;
        }
        return event;
    }
    /**
     * Set the reference of the transaction
     * @category Billing Data
     */
    setReferenceLabel(x: string): Event {
        let info: VALID_OBJECT = {};
        info[ADDITIONAL_INFO_REFERENCE] = x;
        return this.setAdditionalInfo(info);
    }

    /**
     * Get the identifier for the customer
     * @category Billing Data
     */
    getCustomerLabel(): Event {
        let event = new Event;
        if (this?.additionalInfo?.customerLabel) {
            event.data = this.additionalInfo.customerLabel;
        }
        return event;
    }
    /**
     * Set the identifier for the customer
     * @category Billing Data
     */
    setCustomerLabel(x: string): Event {
        let info: VALID_OBJECT = {};
        info[ADDITIONAL_INFO_CUSTOMER] = x;
        return this.setAdditionalInfo(info);
    }

    /**
     * Get the identifier of the payment terminal (e.g. POS/Credit Card terminal)
     * @category Billing Data
     */
    getTerminalLabel(): Event {
        let event = new Event;
        if (this?.additionalInfo?.terminalLabel) {
            event.data = this.additionalInfo.terminalLabel;
        }
        return event;
    }
    /**
     * Set the identifier of the payment terminal (e.g. POS/Credit Card terminal)
     * @category Billing Data
     */
    setTerminalLabel(x: string): Event {
        let info: VALID_OBJECT = {};
        info[ADDITIONAL_INFO_TERMINAL] = x;
        return this.setAdditionalInfo(info);
    }

    /**
     * Get the purpose of the transaction
     * @category Billing Data
     */
    getTransactionPurpose(): Event {
        let event = new Event;
        if (this?.additionalInfo?.transactionPurpose) {
            event.data = this.additionalInfo.transactionPurpose;
        }
        return event;
    }
    /**
     * Set the purpose of the transaction
     * @category Billing Data
     */
    setTransactionPurpose(x: string): Event {
        let info: VALID_OBJECT = {};
        info[ADDITIONAL_INFO_PURPOSE] = x;
        return this.setAdditionalInfo(info);
    }

    /**
     * Get any other information for the customer
     * @category Billing Data
     */
    getCustomerDataRequest(): Event {
        let event = new Event;
        if (this?.additionalInfo?.customerDataRequest) {
            event.data = this.additionalInfo.customerDataRequest;
        }
        return event;
    }
    /**
     * Set any other information for the customer
     * @category Billing Data
     */
    setCustomerDataRequest(x: string): Event {
        let info: VALID_OBJECT = {};
        info[ADDITIONAL_INFO_REQUEST] = x;
        return this.setAdditionalInfo(info);
    }

    /**
     * Get any other information related to this billing
     * @category Billing Data
     */
    getExtraAdditionalData(): Event {
        let event = new Event;
        if (this?.additionalInfo?.extra) {
            event.data = this.additionalInfo.extra;
        }
        return event;
    }
    /**
     * Set any other information related to this billing
     * @category Billing Data
     */
    setExtraAdditionalData(id: VALID_ID, x: string): Event {
        let info: VALID_OBJECT = {};
        info[id] = x;
        return this.setAdditionalInfo(info);
    }

    /**
     * Get localized merchant information
     * @category Merchant Information
     */
    getMerchantInfo(): Event {
        let event = new Event,
            info: VALID_OBJECT;
        if (this.merchantInfo) {
            info[MERCHANT_INFO_LANGUAGE] = this.merchantInfo.language;
            info[MERCHANT_INFO_NAME] = this.merchantInfo.merchantName;
            if (this.merchantInfo.merchantCity) {
                info[MERCHANT_INFO_CITY] = this.merchantInfo.merchantCity;
            }
            if (this.merchantInfo.extra) {
                info = {
                    ...info,
                    ...this.merchantInfo.extra,
                }
            }
        }
        event.data = info;
        return event;
    }
    /**
     * Set localized merchant information
     * @category Merchant Information
     */
    setMerchantInfo(x: VALID_OBJECT): Event {
        let event = new Event(),
            language: HKQR_LANGUAGE,
            merchantName: string;

        if (MERCHANT_INFO_LANGUAGE in x) {
            if (x[MERCHANT_INFO_LANGUAGE] in ISO_LANGUAGE) {
                language = x[MERCHANT_INFO_LANGUAGE] as HKQR_LANGUAGE;
            } else {
                event.setError("Invalid Language Preference");
                return event;
            }
            delete x[MERCHANT_INFO_LANGUAGE];
        }
        if (MERCHANT_INFO_NAME in x) {
            event = this.setAlphanumericSpecial(x[MERCHANT_INFO_NAME], 25);
            if (event.isError()) {
                event.setError(`Localized Merchant Name ${event.message}`);
                return event;
            } else {
                merchantName = x[MERCHANT_INFO_NAME];
            }
            delete x[MERCHANT_INFO_NAME];
        }

        if (!this.merchantInfo) {
            if (!language) {
                event.setError("Missing Language of Localization");
            } else if (!merchantName) {
                event.setError("Missing Localized Merchant Name");
            } else {
                this.merchantInfo = {
                    language: language,
                    merchantName: merchantName
                }
            }
            if (event.isError()) return event;
        }

        if (language) {
            this.merchantInfo.language = language;
        }
        if (merchantName) {
            this.merchantInfo.merchantName = merchantName;
        }

        for (let id in x) {
            if (event.isError()) break;
            if (id == MERCHANT_INFO_CITY) {
                event = this.setAlphanumericSpecial(x[id], 15);
                if (event.isError()) {
                    event.setError(`Localized Merchant City ${event.message}`);
                } else {
                    this.merchantInfo.merchantCity = x[id];
                }
            } else {
                event = this.setAlphanumericSpecial(x[id], 99);
                if (event.isError()) {
                    event.setError(`Data ${event.message}`);
                } else {
                    if (!this.merchantInfo.extra) this.merchantInfo.extra = {};
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
    getLanguagePreference(): Event {
        let event = new Event;
        if (this?.merchantInfo?.language) {
            event.data = this.merchantInfo.language;
        }
        return event;
    }
    /**
     * Set the language of localized information
     * @category Merchant Information
     */
    setLanguagePreference(x: HKQR_LANGUAGE): Event {
        let info: VALID_OBJECT = {};
        info[MERCHANT_INFO_LANGUAGE] = x;
        return this.setMerchantInfo(info);
    }

    /**
     * Get the localized merchant name
     * @category Merchant Information
     */
    getLocalizedMerchantName(): Event {
        let event = new Event;
        if (this?.merchantInfo?.merchantName) {
            event.data = this.merchantInfo.merchantName;
        }
        return event;
    }
    /**
     * Set the localized merchant name
     * @category Merchant Information
     */
    setLocalizedMerchantName(x: string): Event {
        let info: VALID_OBJECT = {};
        info[MERCHANT_INFO_NAME] = x;
        return this.setMerchantInfo(info);
    }

    /**
     * Get the localized physical location of the merchant
     * @category Merchant Information
     */
    getLocalizedMerchantCity(): Event {
        let event = new Event;
        if (this?.merchantInfo?.merchantCity) {
            event.data = this.merchantInfo.merchantCity;
        }
        return event;
    }
    /**
     * Set the localized physical location of the merchant
     * @category Merchant Information
     */
    setLocalizedMerchantCity(x: string): Event {
        let info: VALID_OBJECT = {};
        info[MERCHANT_INFO_CITY] = x;
        return this.setMerchantInfo(info);
    }

    /**
     * Get all the localized information
     * @category Merchant Information
     */
    getExtraLocalizedData(): Event {
        let event = new Event;
        if (this?.merchantInfo?.extra) {
            event.data = this.merchantInfo.extra;
        }
        return event;
    }
    /**
     * Set all the localized information by ID
     * @category Merchant Information
     */
    setExtraLocalizedData(id: VALID_ID, x: string): Event {
        let info: VALID_OBJECT = {};
        info[id] = x;
        return this.setMerchantInfo(info);
    }
}

if (typeof window !== "undefined" && !window.HKQR) {
    window.HKQR = HKQR;
}