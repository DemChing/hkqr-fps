[hkqr-fps](../README.md) › [Globals](../globals.md) › ["lib/constant"](_lib_constant_.md)

# Module: "lib/constant"

## Index

### Namespaces

* [__global](_lib_constant_.__global.md)

### Type aliases

* [ADDITIONAL_INFO](_lib_constant_.md#additional_info)
* [CONVENIENCE_FEE](_lib_constant_.md#convenience_fee)
* [EXTRACTS](_lib_constant_.md#extracts)
* [EXTRACT_CONTENT](_lib_constant_.md#extract_content)
* [MERCHANT_ACCOUNT_INFO](_lib_constant_.md#merchant_account_info)
* [POINT_OF_INITIATION](_lib_constant_.md#point_of_initiation)
* [VALID_ID](_lib_constant_.md#valid_id)
* [VALID_OBJECT](_lib_constant_.md#valid_object)

### Variables

* [ADDITIONAL_INFORMATION](_lib_constant_.md#const-additional_information)
* [ADDITIONAL_INFO_BILL](_lib_constant_.md#const-additional_info_bill)
* [ADDITIONAL_INFO_CUSTOMER](_lib_constant_.md#const-additional_info_customer)
* [ADDITIONAL_INFO_LOYALTY](_lib_constant_.md#const-additional_info_loyalty)
* [ADDITIONAL_INFO_MOBILE](_lib_constant_.md#const-additional_info_mobile)
* [ADDITIONAL_INFO_PURPOSE](_lib_constant_.md#const-additional_info_purpose)
* [ADDITIONAL_INFO_REFERENCE](_lib_constant_.md#const-additional_info_reference)
* [ADDITIONAL_INFO_REQUEST](_lib_constant_.md#const-additional_info_request)
* [ADDITIONAL_INFO_STORE](_lib_constant_.md#const-additional_info_store)
* [ADDITIONAL_INFO_TERMINAL](_lib_constant_.md#const-additional_info_terminal)
* [CONVENIENCE_FEE_FIXED](_lib_constant_.md#const-convenience_fee_fixed)
* [CONVENIENCE_FEE_INDICATOR](_lib_constant_.md#const-convenience_fee_indicator)
* [CONVENIENCE_FEE_PERCENT](_lib_constant_.md#const-convenience_fee_percent)
* [COUNTRY_CODE](_lib_constant_.md#const-country_code)
* [CYCLIC_REDUNDANCY_CHECK](_lib_constant_.md#const-cyclic_redundancy_check)
* [DYNAMIC_QR_CODE](_lib_constant_.md#const-dynamic_qr_code)
* [FORMAT_INDICATOR](_lib_constant_.md#const-format_indicator)
* [INITIATION_POINT](_lib_constant_.md#const-initiation_point)
* [LOCALIZE_MERCHANT](_lib_constant_.md#const-localize_merchant)
* [MERCHANT_ACCOUNT_IDENTIFIER_EMAIL](_lib_constant_.md#const-merchant_account_identifier_email)
* [MERCHANT_ACCOUNT_IDENTIFIER_FPS](_lib_constant_.md#const-merchant_account_identifier_fps)
* [MERCHANT_ACCOUNT_IDENTIFIER_MOBILE](_lib_constant_.md#const-merchant_account_identifier_mobile)
* [MERCHANT_ACCOUNT_PARTICIPANT](_lib_constant_.md#const-merchant_account_participant)
* [MERCHANT_ACCOUNT_UNIQUE](_lib_constant_.md#const-merchant_account_unique)
* [MERCHANT_CATEGORY_CODE](_lib_constant_.md#const-merchant_category_code)
* [MERCHANT_CITY](_lib_constant_.md#const-merchant_city)
* [MERCHANT_INFO_CITY](_lib_constant_.md#const-merchant_info_city)
* [MERCHANT_INFO_LANGUAGE](_lib_constant_.md#const-merchant_info_language)
* [MERCHANT_INFO_NAME](_lib_constant_.md#const-merchant_info_name)
* [MERCHANT_NAME](_lib_constant_.md#const-merchant_name)
* [POSTAL_CODE](_lib_constant_.md#const-postal_code)
* [STATIC_QR_CODE](_lib_constant_.md#const-static_qr_code)
* [TRANSACTION_AMOUNT](_lib_constant_.md#const-transaction_amount)
* [TRANSACTION_CURRENCY](_lib_constant_.md#const-transaction_currency)

## Type aliases

###  ADDITIONAL_INFO

Ƭ **ADDITIONAL_INFO**: *object*

Defined in lib/constant.ts:59

#### Type declaration:

* **billNumber**? : *string*

* **customerDataRequest**? : *string*

* **customerLabel**? : *string*

* **extra**? : *[VALID_OBJECT](_lib_constant_.md#valid_object)*

* **loyaltyNumber**? : *string*

* **mobileNumber**? : *string*

* **referenceLabel**? : *string*

* **storeLabel**? : *string*

* **terminalLabel**? : *string*

* **transactionPurpose**? : *string*

___

###  CONVENIENCE_FEE

Ƭ **CONVENIENCE_FEE**: *typeof CONVENIENCE_FEE_FIXED | typeof CONVENIENCE_FEE_PERCENT*

Defined in lib/constant.ts:31

___

###  EXTRACTS

Ƭ **EXTRACTS**: *object*

Defined in lib/constant.ts:78

#### Type declaration:

___

###  EXTRACT_CONTENT

Ƭ **EXTRACT_CONTENT**: *object*

Defined in lib/constant.ts:72

#### Type declaration:

* **content**: *string*

* **id**: *[VALID_ID](_lib_constant_.md#valid_id)*

* **remain**: *string*

___

###  MERCHANT_ACCOUNT_INFO

Ƭ **MERCHANT_ACCOUNT_INFO**: *object*

Defined in lib/constant.ts:39

#### Type declaration:

* **paymentNetwork**? : *[VALID_OBJECT](_lib_constant_.md#valid_object)*

* **uniqueIdentifier**: *string*

___

###  POINT_OF_INITIATION

Ƭ **POINT_OF_INITIATION**: *typeof STATIC_QR_CODE | typeof DYNAMIC_QR_CODE*

Defined in lib/constant.ts:28

___

###  VALID_ID

Ƭ **VALID_ID**: *"00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60" | "61" | "62" | "63" | "64" | "65" | "66" | "67" | "68" | "69" | "70" | "71" | "72" | "73" | "74" | "75" | "76" | "77" | "78" | "79" | "80" | "81" | "82" | "83" | "84" | "85" | "86" | "87" | "88" | "89" | "90" | "91" | "92" | "93" | "94" | "95" | "96" | "97" | "98" | "99"*

Defined in lib/constant.ts:3

___

###  VALID_OBJECT

Ƭ **VALID_OBJECT**: *object*

Defined in lib/constant.ts:4

#### Type declaration:

## Variables

### `Const` ADDITIONAL_INFORMATION

• **ADDITIONAL_INFORMATION**: *[VALID_ID](_lib_constant_.md#valid_id)* = "62"

Defined in lib/constant.ts:21

___

### `Const` ADDITIONAL_INFO_BILL

• **ADDITIONAL_INFO_BILL**: *[VALID_ID](_lib_constant_.md#valid_id)* = "01"

Defined in lib/constant.ts:50

___

### `Const` ADDITIONAL_INFO_CUSTOMER

• **ADDITIONAL_INFO_CUSTOMER**: *[VALID_ID](_lib_constant_.md#valid_id)* = "06"

Defined in lib/constant.ts:55

___

### `Const` ADDITIONAL_INFO_LOYALTY

• **ADDITIONAL_INFO_LOYALTY**: *[VALID_ID](_lib_constant_.md#valid_id)* = "04"

Defined in lib/constant.ts:53

___

### `Const` ADDITIONAL_INFO_MOBILE

• **ADDITIONAL_INFO_MOBILE**: *[VALID_ID](_lib_constant_.md#valid_id)* = "02"

Defined in lib/constant.ts:51

___

### `Const` ADDITIONAL_INFO_PURPOSE

• **ADDITIONAL_INFO_PURPOSE**: *[VALID_ID](_lib_constant_.md#valid_id)* = "08"

Defined in lib/constant.ts:57

___

### `Const` ADDITIONAL_INFO_REFERENCE

• **ADDITIONAL_INFO_REFERENCE**: *[VALID_ID](_lib_constant_.md#valid_id)* = "05"

Defined in lib/constant.ts:54

___

### `Const` ADDITIONAL_INFO_REQUEST

• **ADDITIONAL_INFO_REQUEST**: *[VALID_ID](_lib_constant_.md#valid_id)* = "09"

Defined in lib/constant.ts:58

___

### `Const` ADDITIONAL_INFO_STORE

• **ADDITIONAL_INFO_STORE**: *[VALID_ID](_lib_constant_.md#valid_id)* = "03"

Defined in lib/constant.ts:52

___

### `Const` ADDITIONAL_INFO_TERMINAL

• **ADDITIONAL_INFO_TERMINAL**: *[VALID_ID](_lib_constant_.md#valid_id)* = "07"

Defined in lib/constant.ts:56

___

### `Const` CONVENIENCE_FEE_FIXED

• **CONVENIENCE_FEE_FIXED**: *[VALID_ID](_lib_constant_.md#valid_id)* = "56"

Defined in lib/constant.ts:15

___

### `Const` CONVENIENCE_FEE_INDICATOR

• **CONVENIENCE_FEE_INDICATOR**: *[VALID_ID](_lib_constant_.md#valid_id)* = "55"

Defined in lib/constant.ts:14

___

### `Const` CONVENIENCE_FEE_PERCENT

• **CONVENIENCE_FEE_PERCENT**: *[VALID_ID](_lib_constant_.md#valid_id)* = "57"

Defined in lib/constant.ts:16

___

### `Const` COUNTRY_CODE

• **COUNTRY_CODE**: *[VALID_ID](_lib_constant_.md#valid_id)* = "58"

Defined in lib/constant.ts:17

___

### `Const` CYCLIC_REDUNDANCY_CHECK

• **CYCLIC_REDUNDANCY_CHECK**: *[VALID_ID](_lib_constant_.md#valid_id)* = "63"

Defined in lib/constant.ts:22

___

### `Const` DYNAMIC_QR_CODE

• **DYNAMIC_QR_CODE**: *[VALID_ID](_lib_constant_.md#valid_id)* = "12"

Defined in lib/constant.ts:27

___

### `Const` FORMAT_INDICATOR

• **FORMAT_INDICATOR**: *[VALID_ID](_lib_constant_.md#valid_id)* = "00"

Defined in lib/constant.ts:9

___

### `Const` INITIATION_POINT

• **INITIATION_POINT**: *[VALID_ID](_lib_constant_.md#valid_id)* = "01"

Defined in lib/constant.ts:10

___

### `Const` LOCALIZE_MERCHANT

• **LOCALIZE_MERCHANT**: *[VALID_ID](_lib_constant_.md#valid_id)* = "64"

Defined in lib/constant.ts:23

___

### `Const` MERCHANT_ACCOUNT_IDENTIFIER_EMAIL

• **MERCHANT_ACCOUNT_IDENTIFIER_EMAIL**: *[VALID_ID](_lib_constant_.md#valid_id)* = "04"

Defined in lib/constant.ts:38

___

### `Const` MERCHANT_ACCOUNT_IDENTIFIER_FPS

• **MERCHANT_ACCOUNT_IDENTIFIER_FPS**: *[VALID_ID](_lib_constant_.md#valid_id)* = "02"

Defined in lib/constant.ts:36

___

### `Const` MERCHANT_ACCOUNT_IDENTIFIER_MOBILE

• **MERCHANT_ACCOUNT_IDENTIFIER_MOBILE**: *[VALID_ID](_lib_constant_.md#valid_id)* = "03"

Defined in lib/constant.ts:37

___

### `Const` MERCHANT_ACCOUNT_PARTICIPANT

• **MERCHANT_ACCOUNT_PARTICIPANT**: *[VALID_ID](_lib_constant_.md#valid_id)* = "01"

Defined in lib/constant.ts:35

___

### `Const` MERCHANT_ACCOUNT_UNIQUE

• **MERCHANT_ACCOUNT_UNIQUE**: *[VALID_ID](_lib_constant_.md#valid_id)* = "00"

Defined in lib/constant.ts:34

___

### `Const` MERCHANT_CATEGORY_CODE

• **MERCHANT_CATEGORY_CODE**: *[VALID_ID](_lib_constant_.md#valid_id)* = "52"

Defined in lib/constant.ts:11

___

### `Const` MERCHANT_CITY

• **MERCHANT_CITY**: *[VALID_ID](_lib_constant_.md#valid_id)* = "60"

Defined in lib/constant.ts:19

___

### `Const` MERCHANT_INFO_CITY

• **MERCHANT_INFO_CITY**: *[VALID_ID](_lib_constant_.md#valid_id)* = "02"

Defined in lib/constant.ts:47

___

### `Const` MERCHANT_INFO_LANGUAGE

• **MERCHANT_INFO_LANGUAGE**: *[VALID_ID](_lib_constant_.md#valid_id)* = "00"

Defined in lib/constant.ts:45

___

### `Const` MERCHANT_INFO_NAME

• **MERCHANT_INFO_NAME**: *[VALID_ID](_lib_constant_.md#valid_id)* = "01"

Defined in lib/constant.ts:46

___

### `Const` MERCHANT_NAME

• **MERCHANT_NAME**: *[VALID_ID](_lib_constant_.md#valid_id)* = "59"

Defined in lib/constant.ts:18

___

### `Const` POSTAL_CODE

• **POSTAL_CODE**: *[VALID_ID](_lib_constant_.md#valid_id)* = "61"

Defined in lib/constant.ts:20

___

### `Const` STATIC_QR_CODE

• **STATIC_QR_CODE**: *[VALID_ID](_lib_constant_.md#valid_id)* = "11"

Defined in lib/constant.ts:26

___

### `Const` TRANSACTION_AMOUNT

• **TRANSACTION_AMOUNT**: *[VALID_ID](_lib_constant_.md#valid_id)* = "54"

Defined in lib/constant.ts:13

___

### `Const` TRANSACTION_CURRENCY

• **TRANSACTION_CURRENCY**: *[VALID_ID](_lib_constant_.md#valid_id)* = "53"

Defined in lib/constant.ts:12
