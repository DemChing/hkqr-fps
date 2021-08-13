export type VALID_ID = "00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60" | "61" | "62" | "63" | "64" | "65" | "66" | "67" | "68" | "69" | "70" | "71" | "72" | "73" | "74" | "75" | "76" | "77" | "78" | "79" | "80" | "81" | "82" | "83" | "84" | "85" | "86" | "87" | "88" | "89" | "90" | "91" | "92" | "93" | "94" | "95" | "96" | "97" | "98" | "99";
export type VALID_OBJECT = {
    [key in VALID_ID]?: string;
}

// Main | ID: [00..64]
export const FORMAT_INDICATOR = "00" as const;
export const INITIATION_POINT = "01" as const;
export const MERCHANT_CATEGORY_CODE = "52" as const;
export const TRANSACTION_CURRENCY = "53" as const;
export const TRANSACTION_AMOUNT = "54" as const;
export const CONVENIENCE_FEE_INDICATOR = "55" as const;
export const CONVENIENCE_FEE_FIXED = "56" as const;
export const CONVENIENCE_FEE_PERCENT = "57" as const;
export const COUNTRY_CODE = "58" as const;
export const MERCHANT_NAME = "59" as const;
export const MERCHANT_CITY = "60" as const;
export const POSTAL_CODE = "61" as const;
export const ADDITIONAL_INFORMATION = "62" as const;
export const CYCLIC_REDUNDANCY_CHECK = "63" as const;
export const LOCALIZE_MERCHANT = "64" as const;

// Point of initiation | ID: 01
export const STATIC_QR_CODE = "11" as const;
export const DYNAMIC_QR_CODE = "12" as const;
export type POINT_OF_INITIATION = typeof STATIC_QR_CODE | typeof DYNAMIC_QR_CODE;

// Convenience Fee | ID: [55..57]
export type CONVENIENCE_FEE = typeof CONVENIENCE_FEE_FIXED | typeof CONVENIENCE_FEE_PERCENT;

// Merchant Account Data | ID: [02..51]
export const MERCHANT_ACCOUNT_UNIQUE = "00" as const;
export const MERCHANT_ACCOUNT_PARTICIPANT = "01" as const;
export const MERCHANT_ACCOUNT_IDENTIFIER_FPS = "02" as const;
export const MERCHANT_ACCOUNT_IDENTIFIER_MOBILE = "03" as const;
export const MERCHANT_ACCOUNT_IDENTIFIER_EMAIL = "04" as const;
export type MERCHANT_ACCOUNT_INFO = {
    uniqueIdentifier: string; // Merchant Account | ID: 00
    paymentNetwork?: VALID_OBJECT; // Merchant Account | ID: [01..99]
}

// Localized Merchant Account Data | ID: 64
export const MERCHANT_INFO_LANGUAGE = "00" as const;
export const MERCHANT_INFO_NAME = "01" as const;
export const MERCHANT_INFO_CITY = "02" as const;

// Additional Information | ID: 62
export const ADDITIONAL_INFO_BILL = "01" as const;
export const ADDITIONAL_INFO_MOBILE = "02" as const;
export const ADDITIONAL_INFO_STORE = "03" as const;
export const ADDITIONAL_INFO_LOYALTY = "04" as const;
export const ADDITIONAL_INFO_REFERENCE = "05" as const;
export const ADDITIONAL_INFO_CUSTOMER = "06" as const;
export const ADDITIONAL_INFO_TERMINAL = "07" as const;
export const ADDITIONAL_INFO_PURPOSE = "08" as const;
export const ADDITIONAL_INFO_REQUEST = "09" as const;
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