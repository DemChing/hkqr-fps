export declare type VALID_ID = "00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60" | "61" | "62" | "63" | "64" | "65" | "66" | "67" | "68" | "69" | "70" | "71" | "72" | "73" | "74" | "75" | "76" | "77" | "78" | "79" | "80" | "81" | "82" | "83" | "84" | "85" | "86" | "87" | "88" | "89" | "90" | "91" | "92" | "93" | "94" | "95" | "96" | "97" | "98" | "99";
export declare type VALID_OBJECT = {
    [key in VALID_ID]?: string;
};
export declare const FORMAT_INDICATOR: VALID_ID;
export declare const INITIATION_POINT: VALID_ID;
export declare const MERCHANT_CATEGORY_CODE: VALID_ID;
export declare const TRANSACTION_CURRENCY: VALID_ID;
export declare const TRANSACTION_AMOUNT: VALID_ID;
export declare const CONVENIENCE_FEE_INDICATOR: VALID_ID;
export declare const CONVENIENCE_FEE_FIXED: VALID_ID;
export declare const CONVENIENCE_FEE_PERCENT: VALID_ID;
export declare const COUNTRY_CODE: VALID_ID;
export declare const MERCHANT_NAME: VALID_ID;
export declare const MERCHANT_CITY: VALID_ID;
export declare const POSTAL_CODE: VALID_ID;
export declare const ADDITIONAL_INFORMATION: VALID_ID;
export declare const CYCLIC_REDUNDANCY_CHECK: VALID_ID;
export declare const LOCALIZE_MERCHANT: VALID_ID;
export declare const STATIC_QR_CODE: VALID_ID;
export declare const DYNAMIC_QR_CODE: VALID_ID;
export declare type POINT_OF_INITIATION = typeof STATIC_QR_CODE | typeof DYNAMIC_QR_CODE;
export declare type CONVENIENCE_FEE = typeof CONVENIENCE_FEE_FIXED | typeof CONVENIENCE_FEE_PERCENT;
export declare const MERCHANT_ACCOUNT_UNIQUE: VALID_ID;
export declare const MERCHANT_ACCOUNT_PARTICIPANT: VALID_ID;
export declare const MERCHANT_ACCOUNT_IDENTIFIER_FPS: VALID_ID;
export declare const MERCHANT_ACCOUNT_IDENTIFIER_MOBILE: VALID_ID;
export declare const MERCHANT_ACCOUNT_IDENTIFIER_EMAIL: VALID_ID;
export declare type MERCHANT_ACCOUNT_INFO = {
    uniqueIdentifier: string;
    paymentNetwork?: VALID_OBJECT;
};
export declare const MERCHANT_INFO_LANGUAGE: VALID_ID;
export declare const MERCHANT_INFO_NAME: VALID_ID;
export declare const MERCHANT_INFO_CITY: VALID_ID;
export declare const ADDITIONAL_INFO_BILL: VALID_ID;
export declare const ADDITIONAL_INFO_MOBILE: VALID_ID;
export declare const ADDITIONAL_INFO_STORE: VALID_ID;
export declare const ADDITIONAL_INFO_LOYALTY: VALID_ID;
export declare const ADDITIONAL_INFO_REFERENCE: VALID_ID;
export declare const ADDITIONAL_INFO_CUSTOMER: VALID_ID;
export declare const ADDITIONAL_INFO_TERMINAL: VALID_ID;
export declare const ADDITIONAL_INFO_PURPOSE: VALID_ID;
export declare const ADDITIONAL_INFO_REQUEST: VALID_ID;
export declare type ADDITIONAL_INFO = {
    billNumber?: string;
    mobileNumber?: string;
    storeLabel?: string;
    loyaltyNumber?: string;
    referenceLabel?: string;
    customerLabel?: string;
    terminalLabel?: string;
    transactionPurpose?: string;
    customerDataRequest?: string;
    extra?: VALID_OBJECT;
};
export declare type EXTRACT_CONTENT = {
    id: VALID_ID;
    content: string;
    remain: string;
};
export declare type EXTRACTS = {
    [key in VALID_ID]?: string | EXTRACTS;
};
export declare const USEFUL_CONSTANT: {
    readonly BANK_STANDARD_CHARTERED: "003";
    readonly BANK_HSBC: "004";
    readonly BANK_BANK_OF_CHINA: "012";
    readonly BANK_EAST_ASIA: "015";
    readonly BANK_DBS: "016";
    readonly BANK_HANG_SANG: "024";
    readonly BANK_CITIBANK: "250";
    readonly BANK_WECHAT: "931";
    readonly BANK_TAP_N_GO: "935";
    readonly BANK_TNG: "947";
    readonly BANK_ALIPAY: "948";
    readonly BANK_OCTOPUS: "949";
    readonly BANK_PAYME: "954";
    readonly CURRENCY_HKD: "HKD";
    readonly CURRENCY_CNY: "CNY";
    readonly CURRENCY_TWD: "TWD";
    readonly CURRENCY_USD: "USD";
    readonly LANGUAGE_CHINESE: "ZH";
    readonly LANGUAGE_ENGLISH: "EN";
    readonly LOCATION_HONG_KONG: "HK";
    readonly LOCATION_CHINA: "CN";
    readonly LOCATION_TAIWAN: "TW";
    readonly LOCATION_MACAO: "MO";
    readonly LOCATION_USA: "US";
    readonly LOCATION_UK: "GB";
    readonly MERCHANT_ID_FPS: "26";
    readonly FPS_EMAIL_IRD_PROFITS_TAX: "FPS_Identifier_CRC201A@ird.gov.hk";
    readonly FPS_EMAIL_IRD_SALARIES_TAX: "FPS_Identifier_CRC201B@ird.gov.hk";
    readonly FPS_EMAIL_IRD_PERSONAL_ASSESSMENT: "FPS_Identifier_CRC201D@ird.gov.hk";
    readonly FPS_EMAIL_WSD: "wsdinfo@wsd.gov.hk";
    readonly FPS_ID_CLP: "4853305";
};
declare global {
    interface Window {
        HKQR?: any;
        FPS?: any;
    }
}
