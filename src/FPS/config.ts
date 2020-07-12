import Event from "../lib/event";
import { VALID_OBJECT } from "../lib/constant"

export const COUNTRY = {
    CN: "cn",
    GB: "gb",
    HK: "hk",
    MO: "mo",
    TW: "tw",
    US: "us",
} as const;
export const CURRENCY = {
    CNY: "156",
    HKD: "344",
    TWD: "901",
    USD: "840",
} as const;
export const LANGUAGE = {
    EN: "en",
    ZH: "zh",
} as const;
export const MERCHANT = "26";
export const PARTICIPANT = {
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
} as const;

export type COUNTRY = keyof typeof COUNTRY;
export type CURRENCY = keyof typeof CURRENCY;
export type LANGUAGE = keyof typeof LANGUAGE;
export type MERCHANT = typeof MERCHANT;
export type PARTICIPANTS = keyof typeof PARTICIPANT;

export type MERCHANT_INFO = {
    language: LANGUAGE; // ID: 00
    merchantName: string; // ID: 01
    merchantCity?: string; // ID: 02
    extra?: VALID_OBJECT; // ID: [03..99]
};

export interface ICODE {
    parse(x: string): Event;
    extract(x: string): Event;
    generate(): Event;
    isStatic(): boolean;
    setStatic(): Event;
    setDynamic(): Event;
    setMerchantAccount(x: VALID_OBJECT): Event;
    getBank(toName: boolean): Event;
    setBank(x: PARTICIPANTS): Event;
    getFPSId(): Event;
    setFPSId(x: number | string): Event;
    getMobile(): Event;
    setMobile(x: number | string): Event;
    getEmail(): Event;
    setEmail(x: string): Event;
    getAmount(toNumber: boolean): Event;
    setAmount(x: number): Event;
    setAdditionalInfo(x: VALID_OBJECT): Event;
    getBillNumber(): Event;
    setBillNumber(x: string): Event;
    getReference(): Event;
    setReference(x: string): Event;
    setHKD(): Event;
    setCNY(): Event;
    getCurrency(toCode: boolean): Event;
    setCurrency(x: CURRENCY): Event;
}