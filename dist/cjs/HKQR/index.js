"use strict";var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});const event_1=__importDefault(require("../lib/event")),crc_1=__importDefault(require("../lib/crc")),utils_1=require("../lib/utils"),config_1=require("./config"),constant_1=require("../lib/constant"),constant_2=require("../lib/constant");class HKQR{constructor(){this.formatIndicator="01",this.initiationPoint="11",this.merchantAccount="26",this.merchantAccountInfo={uniqueIdentifier:"hk.com.hkicl"},this.merchantCategory="0000",this.transactionCurrency="HKD",this.countryCode="HK",this.merchantName="NA",this.merchantCity="HK"}static Silent(){event_1.default.Silent()}static get BANK_STANDARD_CHARTERED(){return constant_1.USEFUL_CONSTANT.BANK_STANDARD_CHARTERED}static get BANK_HSBC(){return constant_1.USEFUL_CONSTANT.BANK_HSBC}static get BANK_BANK_OF_CHINA(){return constant_1.USEFUL_CONSTANT.BANK_BANK_OF_CHINA}static get BANK_EAST_ASIA(){return constant_1.USEFUL_CONSTANT.BANK_EAST_ASIA}static get BANK_DBS(){return constant_1.USEFUL_CONSTANT.BANK_DBS}static get BANK_HANG_SANG(){return constant_1.USEFUL_CONSTANT.BANK_HANG_SANG}static get BANK_CITIBANK(){return constant_1.USEFUL_CONSTANT.BANK_CITIBANK}static get BANK_WECHAT(){return constant_1.USEFUL_CONSTANT.BANK_WECHAT}static get BANK_TAP_N_GO(){return constant_1.USEFUL_CONSTANT.BANK_TAP_N_GO}static get BANK_TNG(){return constant_1.USEFUL_CONSTANT.BANK_TNG}static get BANK_ALIPAY(){return constant_1.USEFUL_CONSTANT.BANK_ALIPAY}static get BANK_OCTOPUS(){return constant_1.USEFUL_CONSTANT.BANK_OCTOPUS}static get BANK_PAYME(){return constant_1.USEFUL_CONSTANT.BANK_PAYME}static get CURRENCY_HKD(){return constant_1.USEFUL_CONSTANT.CURRENCY_HKD}static get CURRENCY_CNY(){return constant_1.USEFUL_CONSTANT.CURRENCY_CNY}static get CURRENCY_TWD(){return constant_1.USEFUL_CONSTANT.CURRENCY_TWD}static get CURRENCY_USD(){return constant_1.USEFUL_CONSTANT.CURRENCY_USD}static get LANGUAGE_CHINESE(){return constant_1.USEFUL_CONSTANT.LANGUAGE_CHINESE}static get LANGUAGE_ENGLISH(){return constant_1.USEFUL_CONSTANT.LANGUAGE_ENGLISH}static get LOCATION_HONG_KONG(){return constant_1.USEFUL_CONSTANT.LOCATION_HONG_KONG}static get LOCATION_CHINA(){return constant_1.USEFUL_CONSTANT.LOCATION_CHINA}static get LOCATION_TAIWAN(){return constant_1.USEFUL_CONSTANT.LOCATION_TAIWAN}static get LOCATION_MACAO(){return constant_1.USEFUL_CONSTANT.LOCATION_MACAO}static get LOCATION_USA(){return constant_1.USEFUL_CONSTANT.LOCATION_USA}static get LOCATION_UK(){return constant_1.USEFUL_CONSTANT.LOCATION_UK}static get MERCHANT_ID_FPS(){return constant_1.USEFUL_CONSTANT.MERCHANT_ID_FPS}static get FPS_EMAIL_IRD_PROFITS_TAX(){return constant_1.USEFUL_CONSTANT.FPS_EMAIL_IRD_PROFITS_TAX}static get FPS_EMAIL_IRD_SALARIES_TAX(){return constant_1.USEFUL_CONSTANT.FPS_EMAIL_IRD_SALARIES_TAX}static get FPS_EMAIL_IRD_PERSONAL_ASSESSMENT(){return constant_1.USEFUL_CONSTANT.FPS_EMAIL_IRD_PERSONAL_ASSESSMENT}static get FPS_EMAIL_WSD(){return constant_1.USEFUL_CONSTANT.FPS_EMAIL_WSD}static get FPS_ID_CLP(){return constant_1.USEFUL_CONSTANT.FPS_ID_CLP}payload(t,e=""){return`${t}${utils_1.numberToValidId(e.length)}${e}`}setAlphanumericSpecial(t,e){let n=new event_1.default;return void 0===t?n.setError("Not Specified",!0):t.length>e?n.setError(`Length Exceeds Limit (>${e})`,!0):utils_1.isAlphanumericSpecial(t)||n.setError("Should Contains Certain Characters Only (A-z0-9.@_+-)",!0),n}setNumeric(t,e=!1,n=13){let a,i=new event_1.default;return void 0===t?i.setError("Not Specified",!0):a="string"==typeof t?t:"number"==typeof e?t.toFixed(e):t.toString(),i.isError()||(/^[0-9.]+$/.test(a)?parseFloat(a)<=0?i.setError("Exceeds Limit (<=0)",!0):a.length>n?i.setError(`Length Exceeds Limit (>${n}) (Including "." Character)`,!0):i.data=a:i.setError("Should Contains Certain Characters Only (0-9.)",!0)),i}parse(t){let e=this.extract(t);if(e.isError())return e;let n=JSON.parse(JSON.stringify(e.data));for(let t in n){if(e.isError())break;let a=n[t];if(t==constant_1.FORMAT_INDICATOR);else if(t==constant_1.INITIATION_POINT)a==constant_2.STATIC_QR_CODE||a==constant_2.DYNAMIC_QR_CODE?this.initiationPoint=a:e.setError(`Invalid Initiation Point (id=${t})`);else if(t==constant_1.MERCHANT_CATEGORY_CODE)a in config_1.ISO_MERCHANT_CATEGORY&&(this.merchantCategory=a);else if(t==constant_1.TRANSACTION_CURRENCY){let n=Object.keys(config_1.ISO_CURRENCY).filter((t=>config_1.ISO_CURRENCY[t]==a));n.length>0?this.setTransactionCurrency(n[0]):e.setError(`Invalid Transaction Currency (id=${t})`)}else t==constant_1.TRANSACTION_AMOUNT?this.setTransactionAmount(a):t==constant_1.CONVENIENCE_FEE_INDICATOR||(t==constant_1.CONVENIENCE_FEE_FIXED?this.setConvenienceFeeAmount(a):t==constant_1.CONVENIENCE_FEE_PERCENT?this.setConvenienceFeePercent(a):t==constant_1.COUNTRY_CODE?a in config_1.ISO_COUNTRY&&(this.countryCode=a):t==constant_1.MERCHANT_NAME?this.merchantName=a:t==constant_1.MERCHANT_CITY?this.merchantCity=a:t==constant_1.POSTAL_CODE?this.postalCode=a:t==constant_1.ADDITIONAL_INFORMATION?this.setAdditionalInfo(a):t==constant_1.CYCLIC_REDUNDANCY_CHECK||-1!=config_1.HKQR_MERCHANT.ACCOUNTS.indexOf(t)&&this.setMerchantAccount(a))}return e}extract(t=""){let e=new event_1.default;if(0==t.length){if(e=this.generate(),e.isError())return e;t=e.data,delete e.data}let n=utils_1.extract(t);if(1==n.length){let a=n[0],i=a[constant_1.CYCLIC_REDUNDANCY_CHECK],r=constant_1.CYCLIC_REDUNDANCY_CHECK+"04",o=t.split(`${r}${i}`)[0]+r;i&&crc_1.default(o)==i?e.data=a:e.setError("Invalid Input - Invalid CRC")}else e.setError("Invalid Input");return e}generate(){let t="",e=new event_1.default;t+=this.payload(constant_1.FORMAT_INDICATOR,this.formatIndicator),t+=this.payload(constant_1.INITIATION_POINT,this.initiationPoint);let n="";if(-1!=config_1.HKQR_MERCHANT.TEMPLATE_ACCOUNTS.indexOf(this.merchantAccount)){if(!this.merchantAccountInfo)return e.setError("Missing Merchant Account Information"),e;if(!this.merchantAccountInfo.uniqueIdentifier)return e.setError("Missing Merchant Unique Identifier"),e;n+=this.payload(constant_2.MERCHANT_ACCOUNT_UNIQUE,this.merchantAccountInfo.uniqueIdentifier),this.merchantAccountInfo.paymentNetwork&&Object.keys(this.merchantAccountInfo.paymentNetwork).map((t=>{n+=this.payload(t,this.merchantAccountInfo.paymentNetwork[t])}))}if(n.length>99)return e.setError("Merchant Account Information Length Exceeds Limit (>99)"),e;t+=this.payload(this.merchantAccount,n),t+=this.payload(constant_1.MERCHANT_CATEGORY_CODE,this.merchantCategory),t+=this.payload(constant_1.TRANSACTION_CURRENCY,config_1.ISO_CURRENCY[this.transactionCurrency]),this.transactionAmount&&parseFloat(this.transactionAmount)>0&&(t+=this.payload(constant_1.TRANSACTION_AMOUNT,this.transactionAmount)),this.convenienceFeeIndicator&&(t+=this.payload(constant_1.CONVENIENCE_FEE_INDICATOR,this.convenienceFeeIndicator),this.convenienceFeeIndicator==constant_1.CONVENIENCE_FEE_FIXED?t+=this.payload(constant_1.CONVENIENCE_FEE_FIXED,this.convenienceFeeAmount):t+=this.payload(constant_1.CONVENIENCE_FEE_PERCENT,this.convenienceFeePercent)),t+=this.payload(constant_1.COUNTRY_CODE,this.countryCode),t+=this.payload(constant_1.MERCHANT_NAME,this.merchantName),t+=this.payload(constant_1.MERCHANT_CITY,this.merchantCity),this.postalCode&&(t+=this.payload(constant_1.POSTAL_CODE,this.postalCode));let a="";if(this.additionalInfo&&(this.additionalInfo.billNumber&&(a+=this.payload(constant_2.ADDITIONAL_INFO_BILL,this.additionalInfo.billNumber)),this.additionalInfo.mobileNumber&&(a+=this.payload(constant_2.ADDITIONAL_INFO_MOBILE,this.additionalInfo.mobileNumber)),this.additionalInfo.storeLabel&&(a+=this.payload(constant_2.ADDITIONAL_INFO_STORE,this.additionalInfo.storeLabel)),this.additionalInfo.loyaltyNumber&&(a+=this.payload(constant_2.ADDITIONAL_INFO_LOYALTY,this.additionalInfo.loyaltyNumber)),this.additionalInfo.referenceLabel&&(a+=this.payload(constant_2.ADDITIONAL_INFO_REFERENCE,this.additionalInfo.referenceLabel)),this.additionalInfo.customerLabel&&(a+=this.payload(constant_2.ADDITIONAL_INFO_CUSTOMER,this.additionalInfo.customerLabel)),this.additionalInfo.terminalLabel&&(a+=this.payload(constant_2.ADDITIONAL_INFO_TERMINAL,this.additionalInfo.terminalLabel)),this.additionalInfo.transactionPurpose&&(a+=this.payload(constant_2.ADDITIONAL_INFO_PURPOSE,this.additionalInfo.transactionPurpose)),this.additionalInfo.customerDataRequest&&(a+=this.payload(constant_2.ADDITIONAL_INFO_REQUEST,this.additionalInfo.customerDataRequest)),this.additionalInfo.extra&&Object.keys(this.additionalInfo.extra).map((t=>{a+=this.payload(t,this.additionalInfo.extra[t])}))),a.length>99)return e.setError("Additional Information Length Exceeds Limit (>99)"),e;a.length>0&&(t+=this.payload(constant_1.ADDITIONAL_INFORMATION,a)),this.cyclicRedundancyCheck=crc_1.default(t+constant_1.CYCLIC_REDUNDANCY_CHECK+"04"),t+=this.payload(constant_1.CYCLIC_REDUNDANCY_CHECK,this.cyclicRedundancyCheck);let i="";if(this.merchantInfo){if(!this.merchantInfo.language)return e.setError("Missing Language of Localization"),e;if(!this.merchantInfo.merchantName)return e.setError("Missing Localized Merchant Name"),e;i+=this.payload(constant_2.MERCHANT_INFO_LANGUAGE,this.merchantInfo.language),i+=this.payload(constant_2.MERCHANT_INFO_NAME,this.merchantInfo.merchantName),this.merchantInfo.merchantCity&&(i+=this.payload(constant_2.MERCHANT_INFO_CITY,this.merchantInfo.merchantCity)),this.merchantInfo.extra&&Object.keys(this.merchantInfo.extra).map((t=>{i+=this.payload(t,this.merchantInfo.extra[t])}))}return i.length>99?(e.setError("Localized Merchant Information Length Exceeds Limit (>99)"),e):(i.length>0&&(t+=this.payload(constant_1.LOCALIZE_MERCHANT,i)),e.data=t,e)}isStaticQRCode(){return this.initiationPoint==constant_2.STATIC_QR_CODE}getInitiationPoint(){let t=new event_1.default;return t.data=this.initiationPoint,t}setInitiationPoint(t){let e=new event_1.default;return t!=constant_2.STATIC_QR_CODE||t!=constant_2.DYNAMIC_QR_CODE?e.setError("Invalid Point of Initiation"):this.initiationPoint=t,e}getMerchantAccountId(){let t=new event_1.default;return t.data=this.merchantAccount,t}setMerchantAccountId(t){let e=new event_1.default;return-1==config_1.HKQR_MERCHANT.ACCOUNTS.indexOf(t)?e.setError("Invalid Merchant Account ID"):this.merchantAccount=t,e}getCountryCode(){let t=new event_1.default;return t.data=this.countryCode,t}setCountryCode(t){let e=new event_1.default;return t in config_1.ISO_COUNTRY?this.countryCode=t:e.setError("Invalid Country Code"),e}getMerchantAccount(){let t,e=new event_1.default;return this.merchantAccountInfo&&(t[constant_2.MERCHANT_ACCOUNT_UNIQUE]=this.merchantAccountInfo.uniqueIdentifier,this.merchantAccountInfo.paymentNetwork&&(t=Object.assign(Object.assign({},t),this.merchantAccountInfo.paymentNetwork))),e.data=t,e}setMerchantAccount(t){let e,n=new event_1.default;if(constant_2.MERCHANT_ACCOUNT_UNIQUE in t){if(n=this.setAlphanumericSpecial(t[constant_2.MERCHANT_ACCOUNT_UNIQUE],32),n.isError())return n.setError(`Unique Identifier ${n.message}`),n;e=t[constant_2.MERCHANT_ACCOUNT_UNIQUE],delete t[constant_2.MERCHANT_ACCOUNT_UNIQUE]}if(!this.merchantAccountInfo){if(!e)return n.setError("Missing Merchant Unique Identifier"),n;this.merchantAccountInfo={uniqueIdentifier:e}}e&&(this.merchantAccountInfo.uniqueIdentifier=e);for(let e in t){if(n.isError())break;if(n=this.setAlphanumericSpecial(t[e],99),n.isError())n.setError(`Data ${n.message}`);else{if(this.merchantAccountInfo.paymentNetwork||(this.merchantAccountInfo.paymentNetwork={}),e==constant_2.MERCHANT_ACCOUNT_PARTICIPANT){if(!(t[e]in config_1.HKQR_PARTICIPANT)){n.setError("Invalid Merchant Code");continue}}else if(e==constant_2.MERCHANT_ACCOUNT_IDENTIFIER_FPS){if(!/^[0-9]+$/.test(t[e])){n.setError("FPS Identifier Should Contains Numbers Only (0-9)");continue}if(t[e].length<7||t[e].length>9){n.setError("Invalid FPS Identifier Length (7-9)");continue}}else if(e==constant_2.MERCHANT_ACCOUNT_IDENTIFIER_MOBILE){if(!/^[0-9+-]+$/.test(t[e])){n.setError("Mobile Number Should Contains Certain Characters Only (0-9+-)");continue}if(/^[0-9]{8}$/.test(t[e]))t[e]=`+852-${t[e]}`;else if(/^852[0-9]{8}$/.test(t[e]))t[e]=`+${t[e].slice(0,3)}-${t[e].slice(3)}`;else if(!/^\+852-[0-9]{8}$/.test(t[e])){n.setError("Invalid Mobile Number");continue}}else if(e==constant_2.MERCHANT_ACCOUNT_IDENTIFIER_EMAIL&&!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i.test(t[e])){n.setError("Invalid Email");continue}this.merchantAccountInfo.paymentNetwork[e]=t[e]}}return n}getUniqueIdentifier(){let t=new event_1.default;return this.merchantAccountInfo&&(t.data=this.merchantAccountInfo.uniqueIdentifier),t}setUniqueIdentifier(t){let e={};return e[constant_2.MERCHANT_ACCOUNT_UNIQUE]=t,this.setMerchantAccount(e)}getMerchantAccountParticipantCode(t=!1){var e;let n=new event_1.default;return(null===(e=null==this?void 0:this.merchantAccountInfo)||void 0===e?void 0:e.paymentNetwork)&&constant_2.MERCHANT_ACCOUNT_PARTICIPANT in this.merchantAccountInfo.paymentNetwork&&(n.data=this.merchantAccountInfo.paymentNetwork[constant_2.MERCHANT_ACCOUNT_PARTICIPANT],t&&(n.data=config_1.HKQR_PARTICIPANT[n.data])),n}setMerchantAccountParticipantCode(t){let e={};return e[constant_2.MERCHANT_ACCOUNT_PARTICIPANT]=t,this.setMerchantAccount(e)}getMerchantAccountFPSId(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.merchantAccountInfo)||void 0===t?void 0:t.paymentNetwork)&&(e.data=this.merchantAccountInfo.paymentNetwork[constant_2.MERCHANT_ACCOUNT_IDENTIFIER_FPS]),e}setMerchantAccountFPSId(t){let e,n={};return e="number"==typeof t?t.toString():t,n[constant_2.MERCHANT_ACCOUNT_IDENTIFIER_FPS]=e,this.setMerchantAccount(n)}getMerchantAccountMobile(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.merchantAccountInfo)||void 0===t?void 0:t.paymentNetwork)&&(e.data=this.merchantAccountInfo.paymentNetwork[constant_2.MERCHANT_ACCOUNT_IDENTIFIER_MOBILE]),e}setMerchantAccountMobile(t){let e,n={};return e="number"==typeof t?t.toString():t,n[constant_2.MERCHANT_ACCOUNT_IDENTIFIER_MOBILE]=e,this.setMerchantAccount(n)}getMerchantAccountEmail(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.merchantAccountInfo)||void 0===t?void 0:t.paymentNetwork)&&(e.data=this.merchantAccountInfo.paymentNetwork[constant_2.MERCHANT_ACCOUNT_IDENTIFIER_EMAIL]),e}setMerchantAccountEmail(t){let e={};return e[constant_2.MERCHANT_ACCOUNT_IDENTIFIER_EMAIL]=t,this.setMerchantAccount(e)}getPaymentNetwork(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.merchantAccountInfo)||void 0===t?void 0:t.paymentNetwork)&&(e.data=this.merchantAccountInfo.paymentNetwork),e}setPaymentNetwork(t,e){let n={};return n[t]=e,this.setMerchantAccount(n)}getMerchantName(){let t=new event_1.default;return t.data=this.merchantName,t}setMerchantName(t){let e=this.setAlphanumericSpecial(t,25);return e.isError()?e.setError(`Merchant Name ${e.message}`):this.merchantName=t,e}getMerchantCity(){let t=new event_1.default;return t.data=this.merchantCity,t}setMerchantCity(t){let e=this.setAlphanumericSpecial(t,15);return e.isError()?e.setError(`Merchant City ${e.message}`):this.merchantCity=t,e}getPostalCode(){let t=new event_1.default;return t.data=this.postalCode,t}setPostalCode(t){let e=this.setAlphanumericSpecial(t,10);return e.isError()?e.setError(`Postal Code ${e.message}`):this.postalCode=t,e}getMerchantCategory(t=!1){let e=new event_1.default;return e.data=this.merchantCategory,t&&(e.data=config_1.ISO_MERCHANT_CATEGORY[e.data]),e}setMerchantCategory(t){let e=new event_1.default;return t in config_1.ISO_MERCHANT_CATEGORY?e.setError("Invalid Merchant Category"):this.merchantCategory=t,e}getTransactionCurrency(t=!1){let e=new event_1.default;return e.data=this.transactionCurrency,t&&(e.data=config_1.ISO_CURRENCY[e.data]),e}setTransactionCurrency(t){t=t.toUpperCase();let e=new event_1.default;return t in config_1.ISO_CURRENCY?this.transactionCurrency=t:e.setError("Invalid Currency Code"),e}getTransactionAmount(t=!1){let e=new event_1.default;return e.data=this.transactionAmount,t&&(e.data=parseFloat(e.data)),e}setTransactionAmount(t,e=!1){let n=this.setNumeric(t,e);return n.isError()?n.setError(`Transaction Amount ${n.message}`):this.transactionAmount=n.data,n}getConvenienceFeeAmount(t=!1){let e=new event_1.default;return e.data=this.convenienceFeeAmount,t&&(e.data=parseFloat(e.data)),e}setConvenienceFeeAmount(t,e=!1){let n=this.setNumeric(t,e);return n.isError()?n.setError(`Convenience Fee Amount ${n.message}`):(this.convenienceFeeAmount=n.data,this.convenienceFeeIndicator=constant_1.CONVENIENCE_FEE_FIXED),n}getConvenienceFeePercent(t=!1){let e=new event_1.default;return e.data=this.convenienceFeePercent,t&&(e.data=parseFloat(e.data)),e}setConvenienceFeePercent(t,e=!1){let n=this.setNumeric(t,e);return n.isError()?n.setError(`Convenience Fee Percent ${n.message}`):(this.convenienceFeePercent=n.data,this.convenienceFeeIndicator=constant_1.CONVENIENCE_FEE_PERCENT),n}getAdditionalInfo(){let t,e=new event_1.default;return this.additionalInfo&&(this.additionalInfo.billNumber&&(t[constant_2.ADDITIONAL_INFO_BILL]=this.additionalInfo.billNumber),this.additionalInfo.mobileNumber&&(t[constant_2.ADDITIONAL_INFO_MOBILE]=this.additionalInfo.mobileNumber),this.additionalInfo.storeLabel&&(t[constant_2.ADDITIONAL_INFO_STORE]=this.additionalInfo.storeLabel),this.additionalInfo.loyaltyNumber&&(t[constant_2.ADDITIONAL_INFO_LOYALTY]=this.additionalInfo.loyaltyNumber),this.additionalInfo.referenceLabel&&(t[constant_2.ADDITIONAL_INFO_REFERENCE]=this.additionalInfo.referenceLabel),this.additionalInfo.customerLabel&&(t[constant_2.ADDITIONAL_INFO_CUSTOMER]=this.additionalInfo.customerLabel),this.additionalInfo.terminalLabel&&(t[constant_2.ADDITIONAL_INFO_TERMINAL]=this.additionalInfo.terminalLabel),this.additionalInfo.transactionPurpose&&(t[constant_2.ADDITIONAL_INFO_PURPOSE]=this.additionalInfo.transactionPurpose),this.additionalInfo.customerDataRequest&&(t[constant_2.ADDITIONAL_INFO_REQUEST]=this.additionalInfo.customerDataRequest),this.additionalInfo.extra&&(t=Object.assign(Object.assign({},t),this.additionalInfo.extra))),e.data=t,e}setAdditionalInfo(t){let e=new event_1.default;if(this.additionalInfo||(this.additionalInfo={}),constant_2.ADDITIONAL_INFO_BILL in t){if(e=this.setAlphanumericSpecial(t[constant_2.ADDITIONAL_INFO_BILL],25),e.isError())return e.setError(`Bill Number ${e.message}`),e;this.additionalInfo.billNumber=t[constant_2.ADDITIONAL_INFO_BILL],delete t[constant_2.MERCHANT_INFO_NAME]}if(constant_2.ADDITIONAL_INFO_MOBILE in t){if(e=this.setAlphanumericSpecial(t[constant_2.ADDITIONAL_INFO_MOBILE],25),e.isError())return e.setError(`Mobile Number ${e.message}`),e;this.additionalInfo.mobileNumber=t[constant_2.ADDITIONAL_INFO_MOBILE],delete t[constant_2.ADDITIONAL_INFO_MOBILE]}if(constant_2.ADDITIONAL_INFO_STORE in t){if(e=this.setAlphanumericSpecial(t[constant_2.ADDITIONAL_INFO_STORE],25),e.isError())return e.setError(`Store Label ${e.message}`),e;this.additionalInfo.storeLabel=t[constant_2.ADDITIONAL_INFO_STORE],delete t[constant_2.ADDITIONAL_INFO_STORE]}if(constant_2.ADDITIONAL_INFO_LOYALTY in t){if(e=this.setAlphanumericSpecial(t[constant_2.ADDITIONAL_INFO_LOYALTY],25),e.isError())return e.setError(`Loyalty Number ${e.message}`),e;this.additionalInfo.loyaltyNumber=t[constant_2.ADDITIONAL_INFO_LOYALTY],delete t[constant_2.ADDITIONAL_INFO_LOYALTY]}if(constant_2.ADDITIONAL_INFO_REFERENCE in t){if(e=this.setAlphanumericSpecial(t[constant_2.ADDITIONAL_INFO_REFERENCE],25),e.isError())return e.setError(`Reference Label ${e.message}`),e;this.additionalInfo.referenceLabel=t[constant_2.ADDITIONAL_INFO_REFERENCE],delete t[constant_2.ADDITIONAL_INFO_REFERENCE]}if(constant_2.ADDITIONAL_INFO_CUSTOMER in t){if(e=this.setAlphanumericSpecial(t[constant_2.ADDITIONAL_INFO_CUSTOMER],25),e.isError())return e.setError(`Customer Label ${e.message}`),e;this.additionalInfo.customerLabel=t[constant_2.ADDITIONAL_INFO_CUSTOMER],delete t[constant_2.ADDITIONAL_INFO_CUSTOMER]}if(constant_2.ADDITIONAL_INFO_TERMINAL in t){if(e=this.setAlphanumericSpecial(t[constant_2.ADDITIONAL_INFO_TERMINAL],25),e.isError())return e.setError(`Terminal Label ${e.message}`),e;this.additionalInfo.terminalLabel=t[constant_2.ADDITIONAL_INFO_TERMINAL],delete t[constant_2.ADDITIONAL_INFO_TERMINAL]}if(constant_2.ADDITIONAL_INFO_PURPOSE in t){if(e=this.setAlphanumericSpecial(t[constant_2.ADDITIONAL_INFO_PURPOSE],25),e.isError())return e.setError(`Transaction Purpose ${e.message}`),e;this.additionalInfo.transactionPurpose=t[constant_2.ADDITIONAL_INFO_PURPOSE],delete t[constant_2.ADDITIONAL_INFO_PURPOSE]}if(constant_2.ADDITIONAL_INFO_REQUEST in t){if(e=this.setAlphanumericSpecial(t[constant_2.ADDITIONAL_INFO_REQUEST],25),e.isError())return e.setError(`Customer Data Request ${e.message}`),e;this.additionalInfo.customerDataRequest=t[constant_2.ADDITIONAL_INFO_REQUEST],delete t[constant_2.ADDITIONAL_INFO_REQUEST]}for(let e in t)this.additionalInfo.extra||(this.additionalInfo.extra={}),this.additionalInfo.extra[e]=t[e];return e}getBillNumber(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.additionalInfo)||void 0===t?void 0:t.billNumber)&&(e.data=this.additionalInfo.billNumber),e}setBillNumber(t){let e={};return e[constant_2.ADDITIONAL_INFO_BILL]=t,this.setAdditionalInfo(e)}getCustomerMobileNumber(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.additionalInfo)||void 0===t?void 0:t.mobileNumber)&&(e.data=this.additionalInfo.mobileNumber),e}setCustomerMobileNumber(t){let e={};return e[constant_2.ADDITIONAL_INFO_MOBILE]=t,this.setAdditionalInfo(e)}getStoreLabel(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.additionalInfo)||void 0===t?void 0:t.storeLabel)&&(e.data=this.additionalInfo.storeLabel),e}setStoreLabel(t){let e={};return e[constant_2.ADDITIONAL_INFO_STORE]=t,this.setAdditionalInfo(e)}getLoyaltyNumber(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.additionalInfo)||void 0===t?void 0:t.loyaltyNumber)&&(e.data=this.additionalInfo.loyaltyNumber),e}setLoyaltyNumber(t){let e={};return e[constant_2.ADDITIONAL_INFO_LOYALTY]=t,this.setAdditionalInfo(e)}getReferenceLabel(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.additionalInfo)||void 0===t?void 0:t.referenceLabel)&&(e.data=this.additionalInfo.referenceLabel),e}setReferenceLabel(t){let e={};return e[constant_2.ADDITIONAL_INFO_REFERENCE]=t,this.setAdditionalInfo(e)}getCustomerLabel(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.additionalInfo)||void 0===t?void 0:t.customerLabel)&&(e.data=this.additionalInfo.customerLabel),e}setCustomerLabel(t){let e={};return e[constant_2.ADDITIONAL_INFO_CUSTOMER]=t,this.setAdditionalInfo(e)}getTerminalLabel(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.additionalInfo)||void 0===t?void 0:t.terminalLabel)&&(e.data=this.additionalInfo.terminalLabel),e}setTerminalLabel(t){let e={};return e[constant_2.ADDITIONAL_INFO_TERMINAL]=t,this.setAdditionalInfo(e)}getTransactionPurpose(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.additionalInfo)||void 0===t?void 0:t.transactionPurpose)&&(e.data=this.additionalInfo.transactionPurpose),e}setTransactionPurpose(t){let e={};return e[constant_2.ADDITIONAL_INFO_PURPOSE]=t,this.setAdditionalInfo(e)}getCustomerDataRequest(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.additionalInfo)||void 0===t?void 0:t.customerDataRequest)&&(e.data=this.additionalInfo.customerDataRequest),e}setCustomerDataRequest(t){let e={};return e[constant_2.ADDITIONAL_INFO_REQUEST]=t,this.setAdditionalInfo(e)}getExtraAdditionalData(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.additionalInfo)||void 0===t?void 0:t.extra)&&(e.data=this.additionalInfo.extra),e}setExtraAdditionalData(t,e){let n={};return n[t]=e,this.setAdditionalInfo(n)}getMerchantInfo(){let t,e=new event_1.default;return this.merchantInfo&&(t[constant_2.MERCHANT_INFO_LANGUAGE]=this.merchantInfo.language,t[constant_2.MERCHANT_INFO_NAME]=this.merchantInfo.merchantName,this.merchantInfo.merchantCity&&(t[constant_2.MERCHANT_INFO_CITY]=this.merchantInfo.merchantCity),this.merchantInfo.extra&&(t=Object.assign(Object.assign({},t),this.merchantInfo.extra))),e.data=t,e}setMerchantInfo(t){let e,n,a=new event_1.default;if(constant_2.MERCHANT_INFO_LANGUAGE in t){if(!(t[constant_2.MERCHANT_INFO_LANGUAGE]in config_1.ISO_LANGUAGE))return a.setError("Invalid Language Preference"),a;e=t[constant_2.MERCHANT_INFO_LANGUAGE],delete t[constant_2.MERCHANT_INFO_LANGUAGE]}if(constant_2.MERCHANT_INFO_NAME in t){if(a=this.setAlphanumericSpecial(t[constant_2.MERCHANT_INFO_NAME],25),a.isError())return a.setError(`Localized Merchant Name ${a.message}`),a;n=t[constant_2.MERCHANT_INFO_NAME],delete t[constant_2.MERCHANT_INFO_NAME]}if(!this.merchantInfo&&(e?n?this.merchantInfo={language:e,merchantName:n}:a.setError("Missing Localized Merchant Name"):a.setError("Missing Language of Localization"),a.isError()))return a;e&&(this.merchantInfo.language=e),n&&(this.merchantInfo.merchantName=n);for(let e in t){if(a.isError())break;e==constant_2.MERCHANT_INFO_CITY?(a=this.setAlphanumericSpecial(t[e],15),a.isError()?a.setError(`Localized Merchant City ${a.message}`):this.merchantInfo.merchantCity=t[e]):(a=this.setAlphanumericSpecial(t[e],99),a.isError()?a.setError(`Data ${a.message}`):(this.merchantInfo.extra||(this.merchantInfo.extra={}),this.merchantInfo.extra[e]=t[e]))}return a}getLanguagePreference(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.merchantInfo)||void 0===t?void 0:t.language)&&(e.data=this.merchantInfo.language),e}setLanguagePreference(t){let e={};return e[constant_2.MERCHANT_INFO_LANGUAGE]=t,this.setMerchantInfo(e)}getLocalizedMerchantName(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.merchantInfo)||void 0===t?void 0:t.merchantName)&&(e.data=this.merchantInfo.merchantName),e}setLocalizedMerchantName(t){let e={};return e[constant_2.MERCHANT_INFO_NAME]=t,this.setMerchantInfo(e)}getLocalizedMerchantCity(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.merchantInfo)||void 0===t?void 0:t.merchantCity)&&(e.data=this.merchantInfo.merchantCity),e}setLocalizedMerchantCity(t){let e={};return e[constant_2.MERCHANT_INFO_CITY]=t,this.setMerchantInfo(e)}getExtraLocalizedData(){var t;let e=new event_1.default;return(null===(t=null==this?void 0:this.merchantInfo)||void 0===t?void 0:t.extra)&&(e.data=this.merchantInfo.extra),e}setExtraLocalizedData(t,e){let n={};return n[t]=e,this.setMerchantInfo(n)}}exports.default=HKQR,"undefined"==typeof window||window.HKQR||(window.HKQR=HKQR);