import Event from "./event";

export type VALID_ID = "00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60" | "61" | "62" | "63" | "64" | "65" | "66" | "67" | "68" | "69" | "70" | "71" | "72" | "73" | "74" | "75" | "76" | "77" | "78" | "79" | "80" | "81" | "82" | "83" | "84" | "85" | "86" | "87" | "88" | "89" | "90" | "91" | "92" | "93" | "94" | "95" | "96" | "97" | "98" | "99";
export type VALID_OBJECT = {
    [key in VALID_ID]?: string;
}

// Main | ID: [00..64]
export const FORMAT_INDICATOR: VALID_ID = "00";
export const INITIATION_POINT: VALID_ID = "01";
export const MERCHANT_CATEGORY_CODE: VALID_ID = "52";
export const TRANSACTION_CURRENCY: VALID_ID = "53";
export const TRANSACTION_AMOUNT: VALID_ID = "54";
export const CONVENIENCE_FEE_INDICATOR: VALID_ID = "55";
export const CONVENIENCE_FEE_FIXED: VALID_ID = "56";
export const CONVENIENCE_FEE_PERCENT: VALID_ID = "57";
export const COUNTRY_CODE: VALID_ID = "58";
export const MERCHANT_NAME: VALID_ID = "59";
export const MERCHANT_CITY: VALID_ID = "60";
export const POSTAL_CODE: VALID_ID = "61";
export const ADDITIONAL_INFORMATION: VALID_ID = "62";
export const CYCLIC_REDUNDANCY_CHECK: VALID_ID = "63";
export const LOCALIZE_MERCHANT: VALID_ID = "64";

// Point of initiation | ID: 01
export const STATIC_QR_CODE: VALID_ID = "11";
export const DYNAMIC_QR_CODE: VALID_ID = "12";
export type POINT_OF_INITIATION = typeof STATIC_QR_CODE | typeof DYNAMIC_QR_CODE;

// Convenience Fee | ID: [55..57]
export type CONVENIENCE_FEE = typeof CONVENIENCE_FEE_FIXED | typeof CONVENIENCE_FEE_PERCENT;

// Merchant Account Data | ID: [02..51]
export const MERCHANT_ACCOUNT_UNIQUE: VALID_ID = "00";
export const MERCHANT_ACCOUNT_PARTICIPANT: VALID_ID = "01";
export const MERCHANT_ACCOUNT_IDENTIFIER_FPS: VALID_ID = "02";
export const MERCHANT_ACCOUNT_IDENTIFIER_MOBILE: VALID_ID = "03";
export const MERCHANT_ACCOUNT_IDENTIFIER_EMAIL: VALID_ID = "04";
export type MERCHANT_ACCOUNT_INFO = {
    uniqueIdentifier: string; // Merchant Account | ID: 00
    paymentNetwork?: VALID_OBJECT; // Merchant Account | ID: [01..99]
}

// Localized Merchant Account Data | ID: 64
export const MERCHANT_INFO_LANGUAGE: VALID_ID = "00";
export const MERCHANT_INFO_NAME: VALID_ID = "01";
export const MERCHANT_INFO_CITY: VALID_ID = "02";

// Additional Information | ID: 62
export const ADDITIONAL_INFO_BILL: VALID_ID = "01";
export const ADDITIONAL_INFO_MOBILE: VALID_ID = "02";
export const ADDITIONAL_INFO_STORE: VALID_ID = "03";
export const ADDITIONAL_INFO_LOYALTY: VALID_ID = "04";
export const ADDITIONAL_INFO_REFERENCE: VALID_ID = "05";
export const ADDITIONAL_INFO_CUSTOMER: VALID_ID = "06";
export const ADDITIONAL_INFO_TERMINAL: VALID_ID = "07";
export const ADDITIONAL_INFO_PURPOSE: VALID_ID = "08";
export const ADDITIONAL_INFO_REQUEST: VALID_ID = "09";
export type ADDITIONAL_INFO = {
    billNumber?: string; // ID: 01
    mobileNumber?: string; // ID: 02
    storeLabel?: string; // ID: 03
    loyaltyNumber?: string; // ID: 04
    referenceLabel?: string; // ID: 05
    customerLabel?: string; // ID: 06
    terminalLabel?: string; // ID: 07
    transactionPurpose?: string; // ID: 08
    customerDataRequest?: string; // ID: 09
    extra?: VALID_OBJECT; // ID: [10..99]
}

export type EXTRACT_CONTENT = {
    id: VALID_ID,
    content: string,
    remain: string
}

export type EXTRACTS = {
    [key in VALID_ID]?: string | EXTRACTS;
}

// Useful constant
export const USEFUL_CONSTANT = {
    BANK_STANDARD_CHARTERED: "003",
    BANK_HSBC: "004",
    BANK_BANK_OF_CHINA: "012",
    BANK_EAST_ASIA: "015",
    BANK_DBS: "016",
    BANK_HANG_SANG: "024",
    BANK_CITIBANK: "250",
    BANK_WECHAT: "931",
    BANK_TAP_N_GO: "935",
    BANK_TNG: "947",
    BANK_ALIPAY: "948",
    BANK_OCTOPUS: "949",
    BANK_PAYME: "954",
    CURRENCY_HKD: "HKD",
    CURRENCY_CNY: "CNY",
    CURRENCY_TWD: "TWD",
    CURRENCY_USD: "USD",
    LANGUAGE_CHINESE: "ZH",
    LANGUAGE_ENGLISH: "EN",
    LOCATION_HONG_KONG: "HK",
    LOCATION_CHINA: "CN",
    LOCATION_TAIWAN: "TW",
    LOCATION_MACAO: "MO",
    LOCATION_USA: "US",
    LOCATION_UK: "GB",
    MERCHANT_ID_FPS: "26",
    FPS_EMAIL_IRD_PROFITS_TAX: "FPS_Identifier_CRC201A@ird.gov.hk",
    FPS_EMAIL_IRD_SALARIES_TAX: "FPS_Identifier_CRC201B@ird.gov.hk",
    FPS_EMAIL_IRD_PERSONAL_ASSESSMENT: "FPS_Identifier_CRC201D@ird.gov.hk",
    FPS_EMAIL_WSD: "wsdinfo@wsd.gov.hk",
    FPS_ID_CLP: "4853305",
} as const;

declare global {
    interface Window {
        HKQR?: any;
        FPS?: any;
    }
}