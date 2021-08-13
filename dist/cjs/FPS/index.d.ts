import Response from "../lib/event";
import { FPS_CURRENCY, FPS_PARTICIPANTS } from "./config";
import { VALID_ID, VALID_OBJECT } from "../lib/constant";
import { IFPS_CODE } from "./config";
/**
 * Simplified class contains some functions from the main class
 *
 * Already meet the requirements of daily transaction for FPS
 */
export default class FPS implements IFPS_CODE {
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
    /** @category Merchant Information */
    private countryCode;
    /** @category Merchant Information */
    private merchantName;
    /** @category Merchant Information */
    private merchantCity;
    /** @category Billing Data */
    private additionalInfo?;
    private cyclicRedundancyCheck?;
    /**
     * Prevent function throwing error and stop the script.
     * You may need to handle the error yourself.
     * @category static
     */
    static Silent(): void;
    /**
     * Standard Chartered Bank (Hong Kong) Limited
     *
     * Used in [[FPS.setBank]]
     * @category Bank Participant
     */
    static get BANK_STANDARD_CHARTERED(): "003";
    /**
     * The Hongkong and Shanghai Banking Corporation Limited
     *
     * Used in [[FPS.setBank]]
     * @category Bank Participant
     */
    static get BANK_HSBC(): "004";
    /**
     * Bank of China (Hong Kong) Limited
     *
     * Used in [[FPS.setBank]]
     * @category Bank Participant
     */
    static get BANK_BANK_OF_CHINA(): "012";
    /**
     * The Bank of East Asia, Limited
     *
     * Used in [[FPS.setBank]]
     * @category Bank Participant
     */
    static get BANK_EAST_ASIA(): "015";
    /**
     * DBS Bank (Hong Kong) Ltd.
     *
     * Used in [[FPS.setBank]]
     * @category Bank Participant
     */
    static get BANK_DBS(): "016";
    /**
     * Hang Seng Bank Ltd.
     *
     * Used in [[FPS.setBank]]
     * @category Bank Participant
     */
    static get BANK_HANG_SANG(): "024";
    /**
     * Citibank (Hong Kong) Limited
     *
     * Used in [[FPS.setBank]]
     * @category Bank Participant
     */
    static get BANK_CITIBANK(): "250";
    /**
     * WeChat Pay Hong Kong Limited
     *
     * Used in [[FPS.setBank]]
     * @category SVF Participant
     */
    static get BANK_WECHAT(): "931";
    /**
     * HKT Payment Limited
     *
     * Used in [[FPS.setBank]]
     * @category SVF Participant
     */
    static get BANK_TAP_N_GO(): "935";
    /**
     * TNG (Asia) Limited
     *
     * Used in [[FPS.setBank]]
     * @category SVF Participant
     */
    static get BANK_TNG(): "947";
    /**
     * Alipay Financial Services (HK) Limited
     *
     * Used in [[FPS.setBank]]
     * @category SVF Participant
     */
    static get BANK_ALIPAY(): "948";
    /**
     * Octopus Cards Limited
     *
     * Used in [[FPS.setBank]]
     * @category SVF Participant
     */
    static get BANK_OCTOPUS(): "949";
    /**
     * PayMe
     *
     * Used in [[FPS.setBank]]
     * @category SVF Participant
     */
    static get BANK_PAYME(): "954";
    /**
     * Hong Kong Dollar
     *
     * Used in [[FPS.setCurrency]]
     * @category Currency
     */
    static get CURRENCY_HKD(): "HKD";
    /**
     * Chinese Yuan Renminbi
     *
     * Used in [[FPS.setCurrency]]
     * @category Currency
     */
    static get CURRENCY_CNY(): "CNY";
    /**
     * Taiwan New Dollar
     *
     * Used in [[FPS.setCurrency]]
     * @category Currency
     */
    static get CURRENCY_TWD(): "TWD";
    /**
     * United States Dollar
     *
     * Used in [[FPS.setCurrency]]
     * @category Currency
     */
    static get CURRENCY_USD(): "USD";
    /**
     * Inland Revenue Department - Profits Tax
     *
     * Used in [[FPS.setEmail]]
     * @category FPS Identifier
     */
    static get FPS_EMAIL_IRD_PROFITS_TAX(): "FPS_Identifier_CRC201A@ird.gov.hk";
    /**
     * Inland Revenue Department - Salaries Tax
     *
     * Used in [[FPS.setEmail]]
     * @category FPS Identifier
     */
    static get FPS_EMAIL_IRD_SALARIES_TAX(): "FPS_Identifier_CRC201B@ird.gov.hk";
    /**
     * Inland Revenue Department - Personal Assessment
     *
     * Used in [[FPS.setEmail]]
     * @category FPS Identifier
     */
    static get FPS_EMAIL_IRD_PERSONAL_ASSESSMENT(): "FPS_Identifier_CRC201D@ird.gov.hk";
    /**
     * CLP Power Hong Kong Ltd.
     *
     * Used in [[FPS.setFPSId]]
     * @category FPS Identifier
     */
    static get FPS_ID_CLP(): "4853305";
    /**
     * Hongkong Electric Company
     *
     * Used in [[FPS.setFPSId]]
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
    isStatic(): boolean;
    /**
     * Set it to a static QR Code
     * @category Point of Initiation
     */
    setStatic(): Response;
    /**
     * Set it to a dynamic QR Code
     * @category Point of Initiation
     */
    setDynamic(): Response;
    /**
     * Set merchant account data
     * @category Merchant Account
     */
    setMerchantAccount(x: VALID_OBJECT): Response;
    /**
     * Get merchant account participant code
     * @param toName Return the name of the participant
     *
     * @category Merchant Account
     */
    getBank(toName?: boolean): Response;
    /**
     * Set merchant account participant code
     * @category Merchant Account
     */
    setBank(x: FPS_PARTICIPANTS): Response;
    /**
     * Get merchant account identifier - FPS ID
     * @category Merchant Account
     */
    getFPSId(): Response;
    /**
     * Set merchant account identifier - FPS ID
     *
     * Set either one among these functions [[FPS.getFPSId]], [[FPS.setMobile]], [[FPS.setEmail]]
     *
     * @category Merchant Account
     */
    setFPSId(x: number | string): Response;
    /**
     * Get merchant account identifier - Mobile Number
     * @category Merchant Account
     */
    getMobile(): Response;
    /**
     * Set merchant account identifier - Mobile Number
     *
     * Set either one among these functions [[FPS.getFPSId]], [[FPS.setMobile]], [[FPS.setEmail]]
     *
     * @category Merchant Account
     */
    setMobile(x: number | string): Response;
    /**
     * Get merchant account identifier - Email
     * @category Merchant Account
     */
    getEmail(): Response;
    /**
     * Set merchant account identifier - Email
     *
     * Set either one among these functions [[FPS.getFPSId]], [[FPS.setMobile]], [[FPS.setEmail]]
     *
     * @category Merchant Account
     */
    setEmail(x: string): Response;
    /**
     * Get transaction amount
     * @param toNumber Convert number string to number
     *
     * @category Transaction Data
     */
    getAmount(toNumber?: boolean): Response;
    /**
     * Set transaction amount
     * @category Transaction Data
     */
    setAmount(x: number): Response;
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
     * Get the reference of the transaction
     * @category Billing Data
     */
    getReference(): Response;
    /**
     * Set the reference of the transaction
     * @category Billing Data
     */
    setReference(x: string): Response;
    /**
     * Set transaction currency to Hong Kong Dollar (HKD)
     *
     * See [[FPS.setCurrency]]
     * @category Transaction Data
     */
    setHKD(): Response;
    /**
     * Set transaction currency to Chinese Yuan Renmenbi (CNY)
     *
     * See [[FPS.setCurrency]]
     * @category Transaction Data
     */
    setCNY(): Response;
    /**
     * Get transaction currency code
     * @param toCode Get the 3-digit number code instead
     *
     * @category Transaction Data
     */
    getCurrency(toCode?: boolean): Response;
    /**
     * Set transaction currency code
     *
     * Will be converted to number code in [[FPS.generate]]
     *
     * @category Transaction Data
     */
    setCurrency(x: FPS_CURRENCY): Response;
}
