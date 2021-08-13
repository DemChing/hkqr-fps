import Response from "../lib/event";
import { MERCHANT_ACCOUNTS, HKQR_COUNTRY, HKQR_CURRENCY, HKQR_LANGUAGE, HKQR_MERCHANT_CATEGORY, HKQR_PARTICIPANTS } from "./config";
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
    setAlphanumericSpecial(x: string, length: number): Response;
    /**
     * Function to validate a string or number as a valid numeric string
     * @param x Source string or number
     * @param fraction Force the number to be converted in fixed-point notation (i.e. `x.toFixed(fraction)`)
     * @param limit Maximum length available
     */
    setNumeric(x: number | string, fraction?: number | boolean, limit?: number): Response;
    /**
     * Extract and parse data from plaintext
     * @param x Plaintext decoded from QR code
     */
    parse(x: string): Response;
    /**
     * Extract data from plaintext
     * @param x Plaintext decoded from QR code
     */
    extract(x?: string): Response;
    /**
     * Generate resulting string for QR code
     */
    generate(): Response;
    /**
     * Check if it is a static QR Code
     * @category Point of Initiation
     */
    isStaticQRCode(): boolean;
    /**
     * Get setting
     * @category Point of Initiation
     */
    getInitiationPoint(): Response;
    /**
     * Update current setting
     * @category Point of Initiation
     */
    setInitiationPoint(x: POINT_OF_INITIATION): Response;
    /**
     * Get merchant ID
     * @category Merchant Account
     */
    getMerchantAccountId(): Response;
    /**
     * Set merchant ID
     * @category Merchant Account
     */
    setMerchantAccountId(x: MERCHANT_ACCOUNTS): Response;
    /**
     * Get country/region that the transaction take place
     * @category Merchant Information
     */
    getCountryCode(): Response;
    /**
     * Set country/region that the transaction take place
     * @category Merchant Information
     */
    setCountryCode(x: HKQR_COUNTRY): Response;
    /**
     * Get merchant account data
     * @category Merchant Account
     */
    getMerchantAccount(): Response;
    /**
     * Set merchant account data
     * @category Merchant Account
     */
    setMerchantAccount(x: VALID_OBJECT): Response;
    /**
     * Get unique identifier of the payment operator
     * @category Merchant Account
     */
    getUniqueIdentifier(): Response;
    /**
     * Set unique identifier of the payment operator
     *
     * 1) Applcation Identifier following `ISO 7816-4` or,
     * 2) UUID without hyphen `/[a-f0-9]{32}/`
     * 3) Reversed domain name `com.domain.my.www`
     *
     * @category Merchant Account
     */
    setUniqueIdentifier(x: string): Response;
    /**
     * Get merchant account participant code
     * @param toName Return the name of the participant
     *
     * @category Merchant Account
     */
    getMerchantAccountParticipantCode(toName?: boolean): Response;
    /**
     * Set merchant account participant code
     * @category Merchant Account
     */
    setMerchantAccountParticipantCode(x: HKQR_PARTICIPANTS): Response;
    /**
     * Get merchant account identifier - FPS ID
     * @category Merchant Account
     */
    getMerchantAccountFPSId(): Response;
    /**
     * Set merchant account identifier - FPS ID
     *
     * Set either one among these functions [[HKQR.setMerchantAccountFPSId]], [[HKQR.setMerchantAccountMobile]], [[HKQR.setMerchantAccountEmail]]
     * @category Merchant Account
     */
    setMerchantAccountFPSId(x: number | string): Response;
    /**
     * Get merchant account identifier - Mobile Number
     * @category Merchant Account
     */
    getMerchantAccountMobile(): Response;
    /**
     * Set merchant account identifier - Mobile Number
     *
     * Set either one among these functions [[HKQR.setMerchantAccountFPSId]], [[HKQR.setMerchantAccountMobile]], [[HKQR.setMerchantAccountEmail]]
     * @category Merchant Account
     */
    setMerchantAccountMobile(x: number | string): Response;
    /**
     * Get merchant account identifier - Email
     * @category Merchant Account
     */
    getMerchantAccountEmail(): Response;
    /**
     * Set merchant account identifier - Email
     *
     * Set either one among these functions [[HKQR.setMerchantAccountFPSId]], [[HKQR.setMerchantAccountMobile]], [[HKQR.setMerchantAccountEmail]]
     * @category Merchant Account
     */
    setMerchantAccountEmail(x: string): Response;
    /**
     * Get merchant account data
     * @category Merchant Account
     */
    getPaymentNetwork(): Response;
    /**
     * Set merchant account data by ID
     * @category Merchant Account
     */
    setPaymentNetwork(id: VALID_ID, x: string): Response;
    /**
     * Get merchant name
     * @category Merchant Information
     */
    getMerchantName(): Response;
    /**
     * Set merchant name
     * @category Merchant Information
     */
    setMerchantName(x: string): Response;
    /**
     * Get physical location of the merchant
     * @category Merchant Information
     */
    getMerchantCity(): Response;
    /**
     * Set physical location of the merchant
     * @category Merchant Information
     */
    setMerchantCity(x: string): Response;
    /**
     * Get postal code of the merchant
     * @category Merchant Information
     */
    getPostalCode(): Response;
    /**
     * Set postal code of the merchant
     * @category Merchant Information
     */
    setPostalCode(x: string): Response;
    /**
     * Get merchant category code
     * @param toName Return the name of the merchant category
     *
     * @category Merchant Information
     */
    getMerchantCategory(toName?: boolean): Response;
    /**
     * Set merchant category code. `0000` if not applicable.
     * @category Merchant Information
     */
    setMerchantCategory(x: HKQR_MERCHANT_CATEGORY): Response;
    /**
     * Get transaction currency code
     * @param toCode Get the 3-digit number code instead
     *
     * @category Transaction Data
     */
    getTransactionCurrency(toCode?: boolean): Response;
    /**
     * Set transaction currency code
     *
     * Will be converted to number in [[HKQR.generate]]
     * @category Transaction Data
     */
    setTransactionCurrency(x: HKQR_CURRENCY): Response;
    /**
     * Get transaction amount
     * @param toNumber Convert number string to number
     *
     * @category Transaction Data
     */
    getTransactionAmount(toNumber?: boolean): Response;
    /**
     * Set transaction amount
     * @category Transaction Data
     */
    setTransactionAmount(x: number | string, fraction?: number | boolean): Response;
    /**
     * Get convenience fee amount (transaction cost or tips)
     * @param toNumber Convert number string to number
     *
     * @category Transaction Data
     */
    getConvenienceFeeAmount(toNumber?: boolean): Response;
    /**
     * Set convenience fee amount (fixed amount) (transaction cost or tips)
     *
     * Set either one among these functions [[HKQR.setConvenienceFeeAmount]], [[HKQR.setConvenienceFeePercent]]
     * @category Transaction Data
     */
    setConvenienceFeeAmount(x: number | string, fraction?: number | boolean): Response;
    /**
     * Get convenience fee percent (transaction cost or tips)
     * @param toNumber Convert number string to number
     *
     * @category Transaction Data
     */
    getConvenienceFeePercent(toNumber?: boolean): Response;
    /**
     * Set convenience fee percent (fixed amount) (transaction cost or tips)
     *
     * Set either one among these functions [[HKQR.setConvenienceFeeAmount]], [[HKQR.setConvenienceFeePercent]]
     * @category Transaction Data
     */
    setConvenienceFeePercent(x: number | string, fraction?: number | boolean): Response;
    /**
     * Get all the billing information
     * @category Billing Data
     */
    getAdditionalInfo(): Response;
    /**
     * Set all the billing information
     * @category Billing Data
     */
    setAdditionalInfo(x: VALID_OBJECT): Response;
    /**
     * Get the billing number
     * @category Billing Data
     */
    getBillNumber(): Response;
    /**
     * Set the billing number
     * @category Billing Data
     */
    setBillNumber(x: string): Response;
    /**
     * Get the mobile number of the customer
     * @category Billing Data
     */
    getCustomerMobileNumber(): Response;
    /**
     * Set the mobile number of the customer
     * @category Billing Data
     */
    setCustomerMobileNumber(x: string): Response;
    /**
     * Get the identifier of the store
     * @category Billing Data
     */
    getStoreLabel(): Response;
    /**
     * Set the identifier of the store
     * @category Billing Data
     */
    setStoreLabel(x: string): Response;
    /**
     * Get the loyalty number of the customer
     * @category Billing Data
     */
    getLoyaltyNumber(): Response;
    /**
     * Set the loyalty number of the customer
     * @category Billing Data
     */
    setLoyaltyNumber(x: string): Response;
    /**
     * Get the reference of the transaction
     * @category Billing Data
     */
    getReferenceLabel(): Response;
    /**
     * Set the reference of the transaction
     * @category Billing Data
     */
    setReferenceLabel(x: string): Response;
    /**
     * Get the identifier for the customer
     * @category Billing Data
     */
    getCustomerLabel(): Response;
    /**
     * Set the identifier for the customer
     * @category Billing Data
     */
    setCustomerLabel(x: string): Response;
    /**
     * Get the identifier of the payment terminal (e.g. POS/Credit Card terminal)
     * @category Billing Data
     */
    getTerminalLabel(): Response;
    /**
     * Set the identifier of the payment terminal (e.g. POS/Credit Card terminal)
     * @category Billing Data
     */
    setTerminalLabel(x: string): Response;
    /**
     * Get the purpose of the transaction
     * @category Billing Data
     */
    getTransactionPurpose(): Response;
    /**
     * Set the purpose of the transaction
     * @category Billing Data
     */
    setTransactionPurpose(x: string): Response;
    /**
     * Get any other information for the customer
     * @category Billing Data
     */
    getCustomerDataRequest(): Response;
    /**
     * Set any other information for the customer
     * @category Billing Data
     */
    setCustomerDataRequest(x: string): Response;
    /**
     * Get any other information related to this billing
     * @category Billing Data
     */
    getExtraAdditionalData(): Response;
    /**
     * Set any other information related to this billing
     * @category Billing Data
     */
    setExtraAdditionalData(id: VALID_ID, x: string): Response;
    /**
     * Get localized merchant information
     * @category Merchant Information
     */
    getMerchantInfo(): Response;
    /**
     * Set localized merchant information
     * @category Merchant Information
     */
    setMerchantInfo(x: VALID_OBJECT): Response;
    /**
     * Get the language of localized information
     * @category Merchant Information
     */
    getLanguagePreference(): Response;
    /**
     * Set the language of localized information
     * @category Merchant Information
     */
    setLanguagePreference(x: HKQR_LANGUAGE): Response;
    /**
     * Get the localized merchant name
     * @category Merchant Information
     */
    getLocalizedMerchantName(): Response;
    /**
     * Set the localized merchant name
     * @category Merchant Information
     */
    setLocalizedMerchantName(x: string, y?: HKQR_LANGUAGE): Response;
    /**
     * Get the localized physical location of the merchant
     * @category Merchant Information
     */
    getLocalizedMerchantCity(): Response;
    /**
     * Set the localized physical location of the merchant
     * @category Merchant Information
     */
    setLocalizedMerchantCity(x: string): Response;
    /**
     * Get all the localized information
     * @category Merchant Information
     */
    getExtraLocalizedData(): Response;
    /**
     * Set all the localized information by ID
     * @category Merchant Information
     */
    setExtraLocalizedData(id: VALID_ID, x: string): Response;
}
