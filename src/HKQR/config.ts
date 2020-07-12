import Event from "../lib/event";

import ISO_COUNTRIES from "../lib/iso/country";
import ISO_CURRENCIES from "../lib/iso/currency";
import ISO_LANGUAGES from "../lib/iso/language";
import ISO_MERCHANT_CATEGORIES from "../lib/iso/merchant_category";
import * as LIST_MERCHANTS from "../lib/merchantID";
import LIST_PARTICIPANTS from "../lib/participant";
import { POINT_OF_INITIATION } from "../lib/constant";

export const ISO_COUNTRY = ISO_COUNTRIES;
export const ISO_CURRENCY = ISO_CURRENCIES;
export const ISO_LANGUAGE = ISO_LANGUAGES;
export const ISO_MERCHANT_CATEGORY = ISO_MERCHANT_CATEGORIES;
export const MERCHANT = LIST_MERCHANTS;
export const PARTICIPANT = LIST_PARTICIPANTS;

export type VALID_ID = "00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60" | "61" | "62" | "63" | "64" | "65" | "66" | "67" | "68" | "69" | "70" | "71" | "72" | "73" | "74" | "75" | "76" | "77" | "78" | "79" | "80" | "81" | "82" | "83" | "84" | "85" | "86" | "87" | "88" | "89" | "90" | "91" | "92" | "93" | "94" | "95" | "96" | "97" | "98" | "99";
export type VALID_OBJECT = {
    [key in VALID_ID]?: string;
}

// Merchant Accounts | ID: [02..51]
export type MERCHANT_ACCOUNT_VISA = typeof MERCHANT.ACCOUNT_VISA[number];
export type MERCHANT_ACCOUNT_MASTER = typeof MERCHANT.ACCOUNT_MASTER[number];
export type MERCHANT_ACCOUNT_EMVCO = typeof MERCHANT.ACCOUNT_EMVCO[number];
export type MERCHANT_ACCOUNT_DISCOVER = typeof MERCHANT.ACCOUNT_DISCOVER[number];
export type MERCHANT_ACCOUNT_AMEX = typeof MERCHANT.ACCOUNT_AMEX[number];
export type MERCHANT_ACCOUNT_JCB = typeof MERCHANT.ACCOUNT_JCB[number];
export type MERCHANT_ACCOUNT_UNION = typeof MERCHANT.ACCOUNT_UNION[number];
export type MERCHANT_ACCOUNT_FPS = typeof MERCHANT.ACCOUNT_FPS[number];
export type MERCHANT_ACCOUNT_WG = typeof MERCHANT.ACCOUNT_WG[number];
export type MERCHANT_ACCOUNT_PO = typeof MERCHANT.ACCOUNT_PO[number];
export type MERCHANT_ACCOUNTS = MERCHANT_ACCOUNT_VISA | MERCHANT_ACCOUNT_MASTER | MERCHANT_ACCOUNT_EMVCO | MERCHANT_ACCOUNT_DISCOVER | MERCHANT_ACCOUNT_AMEX | MERCHANT_ACCOUNT_JCB | MERCHANT_ACCOUNT_UNION | MERCHANT_ACCOUNT_FPS | MERCHANT_ACCOUNT_WG | MERCHANT_ACCOUNT_PO;

// ISO Data
export type COUNTRY = keyof typeof ISO_COUNTRY;
export type CURRENCY = keyof typeof ISO_CURRENCY;
export type LANGUAGE = keyof typeof ISO_LANGUAGE;
export type MERCHANT_CATEGORY = keyof typeof ISO_MERCHANT_CATEGORIES;
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
    isStaticQRCode(): boolean;
    getInitiationPoint(): Event;
    setInitiationPoint(x: POINT_OF_INITIATION): Event;
    getMerchantAccountId(): Event;
    setMerchantAccountId(x: MERCHANT_ACCOUNTS): Event;
    getCountryCode(): Event;
    setCountryCode(x: COUNTRY): Event;
    getMerchantAccount(): Event;
    setMerchantAccount(x: VALID_OBJECT): Event;
    getUniqueIdentifier(): Event;
    setUniqueIdentifier(x: string): Event;
    getMerchantAccountParticipantCode(toName: boolean): Event;
    setMerchantAccountParticipantCode(x: PARTICIPANTS): Event;
    getMerchantAccountFPSId(): Event;
    setMerchantAccountFPSId(x: number | string): Event;
    getMerchantAccountMobile(): Event;
    setMerchantAccountMobile(x: number | string): Event;
    getMerchantAccountEmail(): Event;
    setMerchantAccountEmail(x: string): Event;
    getPaymentNetwork(): Event;
    setPaymentNetwork(id: VALID_ID, x: string): Event;
    getMerchantName(): Event;
    setMerchantName(x: string): Event;
    getMerchantCity(): Event;
    setMerchantCity(x: string): Event;
    getPostalCode(): Event;
    setPostalCode(x: string): Event;
    getMerchantCategory(toName: boolean): Event;
    setMerchantCategory(x: MERCHANT_CATEGORY): Event;
    getTransactionCurrency(toCode: boolean): Event;
    setTransactionCurrency(x: CURRENCY): Event;
    getTransactionAmount(toNumber: boolean): Event;
    setTransactionAmount(x: number | string, fraction: number | boolean): Event;
    getConvenienceFeeAmount(toNumber: boolean): Event;
    setConvenienceFeeAmount(x: number | string, fraction: number | boolean): Event;
    getConvenienceFeePercent(toNumber: boolean): Event;
    setConvenienceFeePercent(x: number | string, fraction: number | boolean): Event;
    getAdditionalInfo(): Event;
    setAdditionalInfo(x: VALID_OBJECT): Event;
    getBillNumber(): Event;
    setBillNumber(x: string): Event;
    getCustomerMobileNumber(): Event;
    setCustomerMobileNumber(x: string): Event;
    getStoreLabel(): Event;
    setStoreLabel(x: string): Event;
    getLoyaltyNumber(): Event;
    setLoyaltyNumber(x: string): Event;
    getReferenceLabel(): Event;
    setReferenceLabel(x: string): Event;
    getCustomerLabel(): Event;
    setCustomerLabel(x: string): Event;
    getTerminalLabel(): Event;
    setTerminalLabel(x: string): Event;
    getTransactionPurpose(): Event;
    setTransactionPurpose(x: string): Event;
    getCustomerDataRequest(): Event;
    setCustomerDataRequest(x: string): Event;
    getExtraAdditionalData(): Event;
    setExtraAdditionalData(id: VALID_ID, x: string): Event;
    getMerchantInfo(): Event;
    setMerchantInfo(x: VALID_OBJECT): Event;
    getLanguagePreference(): Event;
    setLanguagePreference(x: LANGUAGE): Event;
    getLocalizedMerchantName(): Event;
    setLocalizedMerchantName(x: string): Event;
    getLocalizedMerchantCity(): Event;
    setLocalizedMerchantCity(x: string): Event;
    getExtraLocalizedData(): Event;
    setExtraLocalizedData(id: VALID_ID, x: string): Event;
}