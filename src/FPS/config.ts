import Response from "../lib/event";
import { VALID_OBJECT } from "../lib/constant"

export const FPS_COUNTRY_LIST = [
    "CN",
    "GB",
    "HK",
    "MO",
    "TW",
    "US",
] as const;
export const FPS_CURRENCY_LIST = {
    CNY: "156",
    HKD: "344",
    TWD: "901",
    USD: "840",
} as const;
export const FPS_LANGUAGE_LIST = [
    "EN",
    "ZH",
 ] as const;
export const FPS_MERCHANT_LIST = "26";
/**
- `003`: STANDARD CHARTERED BANK (HONG KONG) LIMITED
- `004`: The Hongkong and Shanghai Banking Corporation Limited
- `009`: China Construction Bank (Asia) Corporation Limited
- `012`: Bank of China (Hong Kong) Limited
- `014`: Bank of China (Hong Kong) Limited
- `015`: The Bank of East Asia, Limited
- `016`: DBS Bank (Hong Kong) Ltd.
- `019`: Bank of China (Hong Kong) Limited
- `020`: CMB Wing Lung Bank Limited
- `024`: Hang Seng Bank Ltd.
- `025`: Shanghai Commercial Bank Limited
- `026`: Bank of China (Hong Kong) Limited
- `027`: Bank of Communications Co., Ltd. Hong Kong Branch
- `028`: Public Bank (Hong Kong) Limited
- `029`: INDUSTRIAL AND COMMERCIAL BANK OF CHINA (ASIA) LIMITED
- `030`: Bank of China (Hong Kong) Limited
- `031`: Bank of China (Hong Kong) Limited
- `033`: Bank of China (Hong Kong) Limited
- `035`: OCBC Wing Hang Bank Limited
- `036`: Bank of China (Hong Kong) Limited
- `038`: Tai Yau Bank Limited
- `039`: Chiyu Banking Corporation Limited
- `040`: Dah Sing Bank, Limited
- `041`: Chong Hing Bank Limited
- `043`: Nanyang Commercial Bank, Limited
- `044`: OCBC Wing Hang Bank Limited
- `061`: TAI SANG BANK LTD.
- `064`: Bank of China (Hong Kong) Limited
- `070`: Bank of China (Hong Kong) Limited
- `128`: Fubon Bank (Hong Kong) Limited
- `250`: Citibank (Hong Kong) Limited
- `929`: K & R INTERNATIONAL LIMITED
- `930`: EPAYLINKS TECHNOLOGY CO., LIMITED
- `931`: WeChat Pay Hong Kong Limited
- `933`: 33 Financial Services Limited
- `934`: UniCard Solution Limited
- `935`: HKT Payment Limited
- `947`: TNG (Asia) Limited
- `948`: Alipay Financial Services (HK) Limited
- `949`: Octopus Cards Limited
- `952`: Autotoll Limited
- `954`: PayMe
*/
export const FPS_PARTICIPANT_LIST = {
    "003": "STANDARD CHARTERED BANK (HONG KONG) LIMITED",
    "004": "The Hongkong and Shanghai Banking Corporation Limited",
    "009": "China Construction Bank (Asia) Corporation Limited",
    "012": "Bank of China (Hong Kong) Limited",
    "014": "Bank of China (Hong Kong) Limited",
    "015": "The Bank of East Asia, Limited",
    "016": "DBS Bank (Hong Kong) Ltd.",
    "019": "Bank of China (Hong Kong) Limited",
    "020": "CMB Wing Lung Bank Limited",
    "024": "Hang Seng Bank Ltd.",
    "025": "Shanghai Commercial Bank Limited",
    "026": "Bank of China (Hong Kong) Limited",
    "027": "Bank of Communications Co., Ltd. Hong Kong Branch",
    "028": "Public Bank (Hong Kong) Limited",
    "029": "INDUSTRIAL AND COMMERCIAL BANK OF CHINA (ASIA) LIMITED",
    "030": "Bank of China (Hong Kong) Limited",
    "031": "Bank of China (Hong Kong) Limited",
    "033": "Bank of China (Hong Kong) Limited",
    "035": "OCBC Wing Hang Bank Limited",
    "036": "Bank of China (Hong Kong) Limited",
    "038": "Tai Yau Bank Limited",
    "039": "Chiyu Banking Corporation Limited",
    "040": "Dah Sing Bank, Limited",
    "041": "Chong Hing Bank Limited",
    "043": "Nanyang Commercial Bank, Limited",
    "044": "OCBC Wing Hang Bank Limited",
    "061": "TAI SANG BANK LTD.",
    "064": "Bank of China (Hong Kong) Limited",
    "070": "Bank of China (Hong Kong) Limited",
    "128": "Fubon Bank (Hong Kong) Limited",
    "250": "Citibank (Hong Kong) Limited",
    "929": "K & R INTERNATIONAL LIMITED",
    "930": "EPAYLINKS TECHNOLOGY CO., LIMITED",
    "931": "WeChat Pay Hong Kong Limited",
    "933": "33 Financial Services Limited",
    "934": "UniCard Solution Limited",
    "935": "HKT Payment Limited",
    "947": "TNG (Asia) Limited",
    "948": "Alipay Financial Services (HK) Limited",
    "949": "Octopus Cards Limited",
    "952": "Autotoll Limited",
    "954": "PayMe",
};

export type FPS_COUNTRY = keyof typeof FPS_COUNTRY_LIST;
export type FPS_CURRENCY = keyof typeof FPS_CURRENCY_LIST;
export type FPS_LANGUAGE = typeof FPS_LANGUAGE_LIST[number];
export type FPS_MERCHANT = typeof FPS_MERCHANT_LIST;
export type FPS_PARTICIPANTS = keyof typeof FPS_PARTICIPANT_LIST;

export type MERCHANT_INFO = {
    language: FPS_LANGUAGE; // ID: 00
    merchantName: string; // ID: 01
    merchantCity?: string; // ID: 02
    extra?: VALID_OBJECT; // ID: [03..99]
};

export interface IFPS_CODE {
    parse(x: string): Response;
    extract(x: string): Response;
    generate(): Response;
    isStatic(): boolean;
    setStatic(): Response;
    setDynamic(): Response;
    setMerchantAccount(x: VALID_OBJECT): Response;
    getBank(toName: boolean): Response;
    setBank(x: FPS_PARTICIPANTS): Response;
    getFPSId(): Response;
    setFPSId(x: number | string): Response;
    getMobile(): Response;
    setMobile(x: number | string): Response;
    getEmail(): Response;
    setEmail(x: string): Response;
    getAmount(toNumber: boolean): Response;
    setAmount(x: number): Response;
    setAdditionalInfo(x: VALID_OBJECT): Response;
    getBillNumber(): Response;
    setBillNumber(x: string): Response;
    getReference(): Response;
    setReference(x: string): Response;
    setHKD(): Response;
    setCNY(): Response;
    getCurrency(toCode: boolean): Response;
    setCurrency(x: FPS_CURRENCY): Response;
}