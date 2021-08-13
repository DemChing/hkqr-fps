import Response from "../lib/event";
import { VALID_OBJECT } from "../lib/constant";
export declare const FPS_COUNTRY_LIST: readonly ["CN", "GB", "HK", "MO", "TW", "US"];
export declare const FPS_CURRENCY_LIST: {
    readonly CNY: "156";
    readonly HKD: "344";
    readonly TWD: "901";
    readonly USD: "840";
};
export declare const FPS_LANGUAGE_LIST: readonly ["EN", "ZH"];
export declare const FPS_MERCHANT_LIST = "26";
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
export declare const FPS_PARTICIPANT_LIST: {
    "003": string;
    "004": string;
    "009": string;
    "012": string;
    "014": string;
    "015": string;
    "016": string;
    "019": string;
    "020": string;
    "024": string;
    "025": string;
    "026": string;
    "027": string;
    "028": string;
    "029": string;
    "030": string;
    "031": string;
    "033": string;
    "035": string;
    "036": string;
    "038": string;
    "039": string;
    "040": string;
    "041": string;
    "043": string;
    "044": string;
    "061": string;
    "064": string;
    "070": string;
    "128": string;
    "250": string;
    "929": string;
    "930": string;
    "931": string;
    "933": string;
    "934": string;
    "935": string;
    "947": string;
    "948": string;
    "949": string;
    "952": string;
    "954": string;
};
export declare type FPS_COUNTRY = keyof typeof FPS_COUNTRY_LIST;
export declare type FPS_CURRENCY = keyof typeof FPS_CURRENCY_LIST;
export declare type FPS_LANGUAGE = typeof FPS_LANGUAGE_LIST[number];
export declare type FPS_MERCHANT = typeof FPS_MERCHANT_LIST;
export declare type FPS_PARTICIPANTS = keyof typeof FPS_PARTICIPANT_LIST;
export declare type MERCHANT_INFO = {
    language: FPS_LANGUAGE;
    merchantName: string;
    merchantCity?: string;
    extra?: VALID_OBJECT;
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
