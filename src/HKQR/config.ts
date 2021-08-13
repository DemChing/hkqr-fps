import Response from "../lib/event";

import ISO_COUNTRIES from "../lib/iso/country";
import ISO_CURRENCIES from "../lib/iso/currency";
import ISO_LANGUAGES from "../lib/iso/language";
import ISO_MERCHANT_CATEGORIES from "../lib/iso/merchant_category";
import * as LIST_MERCHANTS from "../lib/merchantID";
import LIST_PARTICIPANTS from "../lib/participant";
import { POINT_OF_INITIATION } from "../lib/constant";

export const HKQR_COUNTRY_LIST = ISO_COUNTRIES;
export const HKQR_CURRENCY_LIST = ISO_CURRENCIES;
export const HKQR_LANGUAGE_LIST = ISO_LANGUAGES;
/** Check the merchant category list [here](https://github.com/DemChing/hkqr-fps/blob/master/MERCHANT_CATEGORY.md) */
export const HKQR_MERCHANT_CATEGORY_LIST = ISO_MERCHANT_CATEGORIES;
export const HKQR_MERCHANT_TEMPLATE_LIST = LIST_MERCHANTS.TEMPLATE_ACCOUNTS;
/** Check the merchant account list [here](https://github.com/DemChing/hkqr-fps/blob/master/MERCHANT_ACCOUNT.md) */
export const HKQR_MERCHANT_ACCOUNT_LIST = LIST_MERCHANTS.ACCOUNTS;
/** Check the participant list [here](https://github.com/DemChing/hkqr-fps/blob/master/PARTICIPANTS.md) */
export const HKQR_PARTICIPANT_LIST = LIST_PARTICIPANTS;

export type VALID_ID = "00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60" | "61" | "62" | "63" | "64" | "65" | "66" | "67" | "68" | "69" | "70" | "71" | "72" | "73" | "74" | "75" | "76" | "77" | "78" | "79" | "80" | "81" | "82" | "83" | "84" | "85" | "86" | "87" | "88" | "89" | "90" | "91" | "92" | "93" | "94" | "95" | "96" | "97" | "98" | "99";
export type VALID_OBJECT = {
    [key in VALID_ID]?: string;
}

// Merchant Accounts | ID: [02..51]
export type MERCHANT_ACCOUNT_VISA = typeof LIST_MERCHANTS.ACCOUNT_VISA[number];
export type MERCHANT_ACCOUNT_MASTER = typeof LIST_MERCHANTS.ACCOUNT_MASTER[number];
export type MERCHANT_ACCOUNT_EMVCO = typeof LIST_MERCHANTS.ACCOUNT_EMVCO[number];
export type MERCHANT_ACCOUNT_DISCOVER = typeof LIST_MERCHANTS.ACCOUNT_DISCOVER[number];
export type MERCHANT_ACCOUNT_AMEX = typeof LIST_MERCHANTS.ACCOUNT_AMEX[number];
export type MERCHANT_ACCOUNT_JCB = typeof LIST_MERCHANTS.ACCOUNT_JCB[number];
export type MERCHANT_ACCOUNT_UNION = typeof LIST_MERCHANTS.ACCOUNT_UNION[number];
export type MERCHANT_ACCOUNT_FPS = typeof LIST_MERCHANTS.ACCOUNT_FPS[number];
export type MERCHANT_ACCOUNT_WG = typeof LIST_MERCHANTS.ACCOUNT_WG[number];
export type MERCHANT_ACCOUNT_PO = typeof LIST_MERCHANTS.ACCOUNT_PO[number];
export type MERCHANT_ACCOUNTS_TEMPLATE = typeof LIST_MERCHANTS.TEMPLATE_ACCOUNTS[number];
export type MERCHANT_ACCOUNTS = typeof LIST_MERCHANTS.ACCOUNTS[number];

// ISO Data
export type HKQR_COUNTRY = typeof HKQR_COUNTRY_LIST[number];
export type HKQR_CURRENCY = keyof typeof HKQR_CURRENCY_LIST;
export type HKQR_LANGUAGE = typeof HKQR_LANGUAGE_LIST[number];
export type HKQR_MERCHANT_CATEGORY = keyof typeof ISO_MERCHANT_CATEGORIES;
export type HKQR_PARTICIPANTS = keyof typeof HKQR_PARTICIPANT_LIST;

export type MERCHANT_INFO = {
    language: HKQR_LANGUAGE; // ID: 00
    merchantName: string; // ID: 01
    merchantCity?: string; // ID: 02
    extra?: VALID_OBJECT; // ID: [03..99]
};

export interface IHKQR_CODE {
    parse(x: string): Response;
    extract(x: string): Response;
    generate(): Response;
    isStaticQRCode(): boolean;
    getInitiationPoint(): Response;
    setInitiationPoint(x: POINT_OF_INITIATION): Response;
    getMerchantAccountId(): Response;
    setMerchantAccountId(x: MERCHANT_ACCOUNTS): Response;
    getCountryCode(): Response;
    setCountryCode(x: HKQR_COUNTRY): Response;
    getMerchantAccount(): Response;
    setMerchantAccount(x: VALID_OBJECT): Response;
    getUniqueIdentifier(): Response;
    setUniqueIdentifier(x: string): Response;
    getMerchantAccountParticipantCode(toName: boolean): Response;
    setMerchantAccountParticipantCode(x: HKQR_PARTICIPANTS): Response;
    getMerchantAccountFPSId(): Response;
    setMerchantAccountFPSId(x: number | string): Response;
    getMerchantAccountMobile(): Response;
    setMerchantAccountMobile(x: number | string): Response;
    getMerchantAccountEmail(): Response;
    setMerchantAccountEmail(x: string): Response;
    getPaymentNetwork(): Response;
    setPaymentNetwork(id: VALID_ID, x: string): Response;
    getMerchantName(): Response;
    setMerchantName(x: string): Response;
    getMerchantCity(): Response;
    setMerchantCity(x: string): Response;
    getPostalCode(): Response;
    setPostalCode(x: string): Response;
    getMerchantCategory(toName: boolean): Response;
    setMerchantCategory(x: HKQR_MERCHANT_CATEGORY): Response;
    getTransactionCurrency(toCode: boolean): Response;
    setTransactionCurrency(x: HKQR_CURRENCY): Response;
    getTransactionAmount(toNumber: boolean): Response;
    setTransactionAmount(x: number | string, fraction: number | boolean): Response;
    getConvenienceFeeAmount(toNumber: boolean): Response;
    setConvenienceFeeAmount(x: number | string, fraction: number | boolean): Response;
    getConvenienceFeePercent(toNumber: boolean): Response;
    setConvenienceFeePercent(x: number | string, fraction: number | boolean): Response;
    getAdditionalInfo(): Response;
    setAdditionalInfo(x: VALID_OBJECT): Response;
    getBillNumber(): Response;
    setBillNumber(x: string): Response;
    getCustomerMobileNumber(): Response;
    setCustomerMobileNumber(x: string): Response;
    getStoreLabel(): Response;
    setStoreLabel(x: string): Response;
    getLoyaltyNumber(): Response;
    setLoyaltyNumber(x: string): Response;
    getReferenceLabel(): Response;
    setReferenceLabel(x: string): Response;
    getCustomerLabel(): Response;
    setCustomerLabel(x: string): Response;
    getTerminalLabel(): Response;
    setTerminalLabel(x: string): Response;
    getTransactionPurpose(): Response;
    setTransactionPurpose(x: string): Response;
    getCustomerDataRequest(): Response;
    setCustomerDataRequest(x: string): Response;
    getExtraAdditionalData(): Response;
    setExtraAdditionalData(id: VALID_ID, x: string): Response;
    getMerchantInfo(): Response;
    setMerchantInfo(x: VALID_OBJECT): Response;
    getLanguagePreference(): Response;
    setLanguagePreference(x: HKQR_LANGUAGE): Response;
    getLocalizedMerchantName(): Response;
    setLocalizedMerchantName(x: string, y?: HKQR_LANGUAGE): Response;
    getLocalizedMerchantCity(): Response;
    setLocalizedMerchantCity(x: string): Response;
    getExtraLocalizedData(): Response;
    setExtraLocalizedData(id: VALID_ID, x: string): Response;
}