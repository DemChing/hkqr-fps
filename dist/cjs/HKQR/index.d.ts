import Event from "../lib/event";
import { MERCHANT_ACCOUNTS, HKQR_COUNTRY, HKQR_CURRENCY, HKQR_LANGUAGE, MERCHANT_CATEGORY, HKQR_PARTICIPANTS } from "./config";
import { VALID_ID, VALID_OBJECT, POINT_OF_INITIATION } from "../lib/constant";
import { IHKQR_CODE } from "./config";
/**
 * Main class contains all the functions
 */
export default class HKQR implements IHKQR_CODE {
    /** @category Format Indicator */
    private formatIndicator?;
    /** @category Point of Initiation */
    private initiationPoint?;
    /** @category Merchant Account */
    private merchantAccount?;
    /** @category Merchant Account */
    private merchantAccountInfo?;
    /** @category Merchant Information */
    private merchantCategory;
    /** @category Transaction Data */
    private transactionCurrency;
    /** @category Transaction Data */
    private transactionAmount?;
    /** @category Transaction Data */
    private convenienceFeeIndicator?;
    /** @category Transaction Data */
    private convenienceFeeAmount?;
    /** @category Transaction Data */
    private convenienceFeePercent?;
    /** @category Merchant Information */
    private countryCode;
    /** @category Merchant Information */
    private merchantName;
    /** @category Merchant Information */
    private merchantCity;
    /** @category Merchant Information */
    private postalCode?;
    /** @category Billing Data */
    private additionalInfo?;
    private cyclicRedundancyCheck?;
    /** @category Merchant Information */
    private merchantInfo?;
    /**
     * Prevent function throwing error and stop the script.
     * You may need to handle the error yourself.
     * @category static
     */
    static Silent(): void;
    /**
     * Standard Chartered Bank (Hong Kong) Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category Bank Participant
     */
    static get BANK_STANDARD_CHARTERED(): "003";
    /**
     * The Hongkong and Shanghai Banking Corporation Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category Bank Participant
     */
    static get BANK_HSBC(): "004";
    /**
     * Bank of China (Hong Kong) Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category Bank Participant
     */
    static get BANK_BANK_OF_CHINA(): "012";
    /**
     * The Bank of East Asia, Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category Bank Participant
     */
    static get BANK_EAST_ASIA(): "015";
    /**
     * DBS Bank (Hong Kong) Ltd.
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category Bank Participant
     */
    static get BANK_DBS(): "016";
    /**
     * Hang Seng Bank Ltd.
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category Bank Participant
     */
    static get BANK_HANG_SANG(): "024";
    /**
     * Citibank (Hong Kong) Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category Bank Participant
     */
    static get BANK_CITIBANK(): "250";
    /**
     * WeChat Pay Hong Kong Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category SVF Participant
     */
    static get BANK_WECHAT(): "931";
    /**
     * HKT Payment Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category SVF Participant
     */
    static get BANK_TAP_N_GO(): "935";
    /**
     * TNG (Asia) Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category SVF Participant
     */
    static get BANK_TNG(): "947";
    /**
     * Alipay Financial Services (HK) Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category SVF Participant
     */
    static get BANK_ALIPAY(): "948";
    /**
     * Octopus Cards Limited
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category SVF Participant
     */
    static get BANK_OCTOPUS(): "949";
    /**
     * PayMe
     *
     * Used in [[HKQR.setMerchantAccountParticipantCode]]
     * @category SVF Participant
     */
    static get BANK_PAYME(): "954";
    /**
     * Hong Kong Dollar
     *
     * Used in [[HKQR.setTransactionCurrency]]
     * @category Currency
     */
    static get CURRENCY_HKD(): "HKD";
    /**
     * Chinese Yuan Renminbi
     *
     * Used in [[HKQR.setTransactionCurrency]]
     * @category Currency
     */
    static get CURRENCY_CNY(): "CNY";
    /**
     * Taiwan New Dollar
     *
     * Used in [[HKQR.setTransactionCurrency]]
     * @category Currency
     */
    static get CURRENCY_TWD(): "TWD";
    /**
     * United States Dollar
     *
     * Used in [[HKQR.setTransactionCurrency]]
     * @category Currency
     */
    static get CURRENCY_USD(): "USD";
    /**
     * Chinese
     *
     * Used in [[HKQR.setLanguagePreference]]
     * @category Language
     */
    static get LANGUAGE_CHINESE(): "ZH";
    /**
     * English
     *
     * Used in [[HKQR.setLanguagePreference]]
     * @category Language
     */
    static get LANGUAGE_ENGLISH(): "EN";
    /**
     * Hong Kong
     *
     * Used in [[HKQR.setCountryCode]]
     * @category Country / Region
     */
    static get LOCATION_HONG_KONG(): "HK";
    /**
     * China
     *
     * Used in [[HKQR.setCountryCode]]
     * @category Country / Region
     */
    static get LOCATION_CHINA(): "CN";
    /**
     * Taiwan
     *
     * Used in [[HKQR.setCountryCode]]
     * @category Country / Region
     */
    static get LOCATION_TAIWAN(): "TW";
    /**
     * Macao
     *
     * Used in [[HKQR.setCountryCode]]
     * @category Country / Region
     */
    static get LOCATION_MACAO(): "MO";
    /**
     * United States of America
     *
     * Used in [[HKQR.setCountryCode]]
     * @category Country / Region
     */
    static get LOCATION_USA(): "US";
    /**
     * United Kingdom of Great Britain and Northern Ireland
     *
     * Used in [[HKQR.setCountryCode]]
     * @category Country / Region
     */
    static get LOCATION_UK(): "GB";
    /**
     * Fast Payment System (FPS)
     *
     * Used in [[HKQR.setMerchantAccountId]]
     * @category Merchant Account ID
     */
    static get MERCHANT_ID_FPS(): "26";
    /**
     * Inland Revenue Department - Profits Tax
     *
     * Used in [[HKQR.setMerchantAccountEmail]]
     * @category FPS Identifier
     */
    static get FPS_EMAIL_IRD_PROFITS_TAX(): "FPS_Identifier_CRC201A@ird.gov.hk";
    /**
     * Inland Revenue Department - Salaries Tax
     *
     * Used in [[HKQR.setMerchantAccountEmail]]
     * @category FPS Identifier
     */
    static get FPS_EMAIL_IRD_SALARIES_TAX(): "FPS_Identifier_CRC201B@ird.gov.hk";
    /**
     * Inland Revenue Department - Personal Assessment
     *
     * Used in [[HKQR.setMerchantAccountEmail]]
     * @category FPS Identifier
     */
    static get FPS_EMAIL_IRD_PERSONAL_ASSESSMENT(): "FPS_Identifier_CRC201D@ird.gov.hk";
    /**
     * Water Supplies Department
     *
     * Used in [[HKQR.setMerchantAccountEmail]]
     * @category FPS Identifier
     */
    static get FPS_EMAIL_WSD(): "wsdinfo@wsd.gov.hk";
    /**
     * CLP Power Hong Kong Ltd.
     *
     * Used in [[HKQR.setMerchantAccountFPSId]]
     * @category FPS Identifier
     */
    static get FPS_ID_CLP(): "4853305";
    /**
     * Hongkong Electric Company
     *
     * Used in [[HKQR.setMerchantAccountFPSId]]
     * @category FPS Identifier
     */
    /**
     * Function to help building the resulting string
     */
    payload(id: VALID_ID, content?: string): string;
    /**
     * Function to validate a string as alphanumeric special string (A-z0-9.@_+-)
     * @param x Source string
     * @param length Maximum length available
     */
    setAlphanumericSpecial(x: string, length: number): Event;
    /**
     * Function to validate a string or number as a valid numeric string
     * @param x Source string or number
     * @param fraction Force the number to be converted in fixed-point notation (i.e. `x.toFixed(fraction)`)
     * @param limit Maximum length available
     */
    setNumeric(x: number | string, fraction?: number | boolean, limit?: number): Event;
    /**
     * Extract and parse data from plaintext
     * @param x Plaintext decoded from QR code
     */
    parse(x: string): Event;
    /**
     * Extract data from plaintext
     * @param x Plaintext decoded from QR code
     */
    extract(x?: string): Event;
    /**
     * Generate resulting string for QR code
     */
    generate(): Event;
    /**
     * Check if it is a static QR Code
     * @category Point of Initiation
     */
    isStaticQRCode(): boolean;
    /**
     * Get setting
     * @category Point of Initiation
     */
    getInitiationPoint(): Event;
    /**
     * Update current setting
     * @category Point of Initiation
     */
    setInitiationPoint(x: POINT_OF_INITIATION): Event;
    /**
     * Get merchant ID
     * @category Merchant Account
     */
    getMerchantAccountId(): Event;
    /**
     * Set merchant ID
     * @category Merchant Account
     */
    setMerchantAccountId(x: MERCHANT_ACCOUNTS): Event;
    /**
     * Get country/region that the transaction take place
     * @category Merchant Information
     */
    getCountryCode(): Event;
    /**
     * Set country/region that the transaction take place
     * @category Merchant Information
     */
    setCountryCode(x: HKQR_COUNTRY): Event;
    /**
     * Get merchant account data
     * @category Merchant Account
     */
    getMerchantAccount(): Event;
    /**
     * Set merchant account data
     * @category Merchant Account
     */
    setMerchantAccount(x: VALID_OBJECT): Event;
    /**
     * Get unique identifier of the payment operator
     * @category Merchant Account
     */
    getUniqueIdentifier(): Event;
    /**
     * Set unique identifier of the payment operator
     *
     * 1) Applcation Identifier following `ISO 7816-4` or,
     * 2) UUID without hyphen `/[a-f0-9]{32}/`
     * 3) Reversed domain name `com.domain.my.www`
     *
     * @category Merchant Account
     */
    setUniqueIdentifier(x: string): Event;
    /**
     * Get merchant account participant code
     * @param toName Return the name of the participant
     *
     * @category Merchant Account
     */
    getMerchantAccountParticipantCode(toName?: boolean): Event;
    /**
     * Set merchant account participant code
     * @category Merchant Account
     */
    setMerchantAccountParticipantCode(x: HKQR_PARTICIPANTS): Event;
    /**
     * Get merchant account identifier - FPS ID
     * @category Merchant Account
     */
    getMerchantAccountFPSId(): Event;
    /**
     * Set merchant account identifier - FPS ID
     *
     * Set either one among these functions [[HKQR.setMerchantAccountFPSId]], [[HKQR.setMerchantAccountMobile]], [[HKQR.setMerchantAccountEmail]]
     * @category Merchant Account
     */
    setMerchantAccountFPSId(x: number | string): Event;
    /**
     * Get merchant account identifier - Mobile Number
     * @category Merchant Account
     */
    getMerchantAccountMobile(): Event;
    /**
     * Set merchant account identifier - Mobile Number
     *
     * Set either one among these functions [[HKQR.setMerchantAccountFPSId]], [[HKQR.setMerchantAccountMobile]], [[HKQR.setMerchantAccountEmail]]
     * @category Merchant Account
     */
    setMerchantAccountMobile(x: number | string): Event;
    /**
     * Get merchant account identifier - Email
     * @category Merchant Account
     */
    getMerchantAccountEmail(): Event;
    /**
     * Set merchant account identifier - Email
     *
     * Set either one among these functions [[HKQR.setMerchantAccountFPSId]], [[HKQR.setMerchantAccountMobile]], [[HKQR.setMerchantAccountEmail]]
     * @category Merchant Account
     */
    setMerchantAccountEmail(x: string): Event;
    /**
     * Get merchant account data
     * @category Merchant Account
     */
    getPaymentNetwork(): Event;
    /**
     * Set merchant account data by ID
     * @category Merchant Account
     */
    setPaymentNetwork(id: VALID_ID, x: string): Event;
    /**
     * Get merchant name
     * @category Merchant Information
     */
    getMerchantName(): Event;
    /**
     * Set merchant name
     * @category Merchant Information
     */
    setMerchantName(x: string): Event;
    /**
     * Get physical location of the merchant
     * @category Merchant Information
     */
    getMerchantCity(): Event;
    /**
     * Set physical location of the merchant
     * @category Merchant Information
     */
    setMerchantCity(x: string): Event;
    /**
     * Get postal code of the merchant
     * @category Merchant Information
     */
    getPostalCode(): Event;
    /**
     * Set postal code of the merchant
     * @category Merchant Information
     */
    setPostalCode(x: string): Event;
    /**
     * Get merchant category code
     * @param toName Return the name of the merchant category
     *
     * @category Merchant Information
     */
    getMerchantCategory(toName?: boolean): Event;
    /**
     * Set merchant category code. `0000` if not applicable.
     * @category Merchant Information
     */
    setMerchantCategory(x: MERCHANT_CATEGORY): Event;
    /**
     * Get transaction currency code
     * @param toCode Get the 3-digit number code instead
     *
     * @category Transaction Data
     */
    getTransactionCurrency(toCode?: boolean): Event;
    /**
     * Set transaction currency code
     *
     * Will be converted to number in [[HKQR.generate]]
     * @category Transaction Data
     */
    setTransactionCurrency(x: HKQR_CURRENCY): Event;
    /**
     * Get transaction amount
     * @param toNumber Convert number string to number
     *
     * @category Transaction Data
     */
    getTransactionAmount(toNumber?: boolean): Event;
    /**
     * Set transaction amount
     * @category Transaction Data
     */
    setTransactionAmount(x: number | string, fraction?: number | boolean): Event;
    /**
     * Get convenience fee amount (transaction cost or tips)
     * @param toNumber Convert number string to number
     *
     * @category Transaction Data
     */
    getConvenienceFeeAmount(toNumber?: boolean): Event;
    /**
     * Set convenience fee amount (fixed amount) (transaction cost or tips)
     *
     * Set either one among these functions [[HKQR.setConvenienceFeeAmount]], [[HKQR.setConvenienceFeePercent]]
     * @category Transaction Data
     */
    setConvenienceFeeAmount(x: number | string, fraction?: number | boolean): Event;
    /**
     * Get convenience fee percent (transaction cost or tips)
     * @param toNumber Convert number string to number
     *
     * @category Transaction Data
     */
    getConvenienceFeePercent(toNumber?: boolean): Event;
    /**
     * Set convenience fee percent (fixed amount) (transaction cost or tips)
     *
     * Set either one among these functions [[HKQR.setConvenienceFeeAmount]], [[HKQR.setConvenienceFeePercent]]
     * @category Transaction Data
     */
    setConvenienceFeePercent(x: number | string, fraction?: number | boolean): Event;
    /**
     * Get all the billing information
     * @category Billing Data
     */
    getAdditionalInfo(): Event;
    /**
     * Set all the billing information
     * @category Billing Data
     */
    setAdditionalInfo(x: VALID_OBJECT): Event;
    /**
     * Get the billing number
     * @category Billing Data
     */
    getBillNumber(): Event;
    /**
     * Set the billing number
     * @category Billing Data
     */
    setBillNumber(x: string): Event;
    /**
     * Get the mobile number of the customer
     * @category Billing Data
     */
    getCustomerMobileNumber(): Event;
    /**
     * Set the mobile number of the customer
     * @category Billing Data
     */
    setCustomerMobileNumber(x: string): Event;
    /**
     * Get the identifier of the store
     * @category Billing Data
     */
    getStoreLabel(): Event;
    /**
     * Set the identifier of the store
     * @category Billing Data
     */
    setStoreLabel(x: string): Event;
    /**
     * Get the loyalty number of the customer
     * @category Billing Data
     */
    getLoyaltyNumber(): Event;
    /**
     * Set the loyalty number of the customer
     * @category Billing Data
     */
    setLoyaltyNumber(x: string): Event;
    /**
     * Get the reference of the transaction
     * @category Billing Data
     */
    getReferenceLabel(): Event;
    /**
     * Set the reference of the transaction
     * @category Billing Data
     */
    setReferenceLabel(x: string): Event;
    /**
     * Get the identifier for the customer
     * @category Billing Data
     */
    getCustomerLabel(): Event;
    /**
     * Set the identifier for the customer
     * @category Billing Data
     */
    setCustomerLabel(x: string): Event;
    /**
     * Get the identifier of the payment terminal (e.g. POS/Credit Card terminal)
     * @category Billing Data
     */
    getTerminalLabel(): Event;
    /**
     * Set the identifier of the payment terminal (e.g. POS/Credit Card terminal)
     * @category Billing Data
     */
    setTerminalLabel(x: string): Event;
    /**
     * Get the purpose of the transaction
     * @category Billing Data
     */
    getTransactionPurpose(): Event;
    /**
     * Set the purpose of the transaction
     * @category Billing Data
     */
    setTransactionPurpose(x: string): Event;
    /**
     * Get any other information for the customer
     * @category Billing Data
     */
    getCustomerDataRequest(): Event;
    /**
     * Set any other information for the customer
     * @category Billing Data
     */
    setCustomerDataRequest(x: string): Event;
    /**
     * Get any other information related to this billing
     * @category Billing Data
     */
    getExtraAdditionalData(): Event;
    /**
     * Set any other information related to this billing
     * @category Billing Data
     */
    setExtraAdditionalData(id: VALID_ID, x: string): Event;
    /**
     * Get localized merchant information
     * @category Merchant Information
     */
    getMerchantInfo(): Event;
    /**
     * Set localized merchant information
     * @category Merchant Information
     */
    setMerchantInfo(x: VALID_OBJECT): Event;
    /**
     * Get the language of localized information
     * @category Merchant Information
     */
    getLanguagePreference(): Event;
    /**
     * Set the language of localized information
     * @category Merchant Information
     */
    setLanguagePreference(x: HKQR_LANGUAGE): Event;
    /**
     * Get the localized merchant name
     * @category Merchant Information
     */
    getLocalizedMerchantName(): Event;
    /**
     * Set the localized merchant name
     * @category Merchant Information
     */
    setLocalizedMerchantName(x: string): Event;
    /**
     * Get the localized physical location of the merchant
     * @category Merchant Information
     */
    getLocalizedMerchantCity(): Event;
    /**
     * Set the localized physical location of the merchant
     * @category Merchant Information
     */
    setLocalizedMerchantCity(x: string): Event;
    /**
     * Get all the localized information
     * @category Merchant Information
     */
    getExtraLocalizedData(): Event;
    /**
     * Set all the localized information by ID
     * @category Merchant Information
     */
    setExtraLocalizedData(id: VALID_ID, x: string): Event;
}
