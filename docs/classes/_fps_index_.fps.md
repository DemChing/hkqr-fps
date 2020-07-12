[hkqr-fps](../README.md) › ["FPS/index"](../modules/_fps_index_.md) › [FPS](_fps_index_.fps.md)

# Class: FPS

Simplified class contains some functions from the main class

Already meet the requirements of daily transaction for FPS

## Hierarchy

* **FPS**

## Implements

* [ICODE](../interfaces/_fps_config_.icode.md)

## Index

### Bank Participant Properties

* [BANK_BANK_OF_CHINA](_fps_index_.fps.md#static-bank_bank_of_china)
* [BANK_CITIBANK](_fps_index_.fps.md#static-bank_citibank)
* [BANK_DBS](_fps_index_.fps.md#static-bank_dbs)
* [BANK_EAST_ASIA](_fps_index_.fps.md#static-bank_east_asia)
* [BANK_HANG_SANG](_fps_index_.fps.md#static-bank_hang_sang)
* [BANK_HSBC](_fps_index_.fps.md#static-bank_hsbc)
* [BANK_STANDARD_CHARTERED](_fps_index_.fps.md#static-bank_standard_chartered)

### Billing Data Properties

* [additionalInfo](_fps_index_.fps.md#private-optional-additionalinfo)

### Currency Properties

* [CURRENCY_CNY](_fps_index_.fps.md#static-currency_cny)
* [CURRENCY_HKD](_fps_index_.fps.md#static-currency_hkd)
* [CURRENCY_TWD](_fps_index_.fps.md#static-currency_twd)
* [CURRENCY_USD](_fps_index_.fps.md#static-currency_usd)

### FPS Identifier Properties

* [FPS_EMAIL_IRD_PERSONAL_ASSESSMENT](_fps_index_.fps.md#static-fps_email_ird_personal_assessment)
* [FPS_EMAIL_IRD_PROFITS_TAX](_fps_index_.fps.md#static-fps_email_ird_profits_tax)
* [FPS_EMAIL_IRD_SALARIES_TAX](_fps_index_.fps.md#static-fps_email_ird_salaries_tax)
* [FPS_ID_CLP](_fps_index_.fps.md#static-fps_id_clp)
* [FPS_ID_HK_ELECTRIC](_fps_index_.fps.md#static-fps_id_hk_electric)

### Format Indicator Properties

* [formatIndicator](_fps_index_.fps.md#private-optional-formatindicator)

### Merchant Account Properties

* [merchantAccount](_fps_index_.fps.md#private-optional-merchantaccount)

### Merchant Information Properties

* [countryCode](_fps_index_.fps.md#private-countrycode)
* [merchantCategory](_fps_index_.fps.md#private-merchantcategory)
* [merchantCity](_fps_index_.fps.md#private-merchantcity)
* [merchantName](_fps_index_.fps.md#private-merchantname)

### Other Properties

* [cyclicRedundancyCheck](_fps_index_.fps.md#private-optional-cyclicredundancycheck)

### Point of Initiation Properties

* [initiationPoint](_fps_index_.fps.md#private-optional-initiationpoint)

### SVF Participant Properties

* [BANK_ALIPAY](_fps_index_.fps.md#static-bank_alipay)
* [BANK_OCTOPUS](_fps_index_.fps.md#static-bank_octopus)
* [BANK_PAYME](_fps_index_.fps.md#static-bank_payme)
* [BANK_TAP_N_GO](_fps_index_.fps.md#static-bank_tap_n_go)
* [BANK_TNG](_fps_index_.fps.md#static-bank_tng)
* [BANK_WECHAT](_fps_index_.fps.md#static-bank_wechat)

### Transaction Data Properties

* [transactionAmount](_fps_index_.fps.md#private-optional-transactionamount)
* [transactionCurrency](_fps_index_.fps.md#private-transactioncurrency)

### Billing Data Methods

* [getBillNumber](_fps_index_.fps.md#getbillnumber)
* [getReference](_fps_index_.fps.md#getreference)
* [setAdditionalInfo](_fps_index_.fps.md#setadditionalinfo)
* [setBillNumber](_fps_index_.fps.md#setbillnumber)
* [setReference](_fps_index_.fps.md#setreference)

### Merchant Account Methods

* [getBank](_fps_index_.fps.md#getbank)
* [getEmail](_fps_index_.fps.md#getemail)
* [getFPSId](_fps_index_.fps.md#getfpsid)
* [getMobile](_fps_index_.fps.md#getmobile)
* [setBank](_fps_index_.fps.md#setbank)
* [setEmail](_fps_index_.fps.md#setemail)
* [setFPSId](_fps_index_.fps.md#setfpsid)
* [setMerchantAccount](_fps_index_.fps.md#setmerchantaccount)
* [setMobile](_fps_index_.fps.md#setmobile)

### Other Methods

* [extract](_fps_index_.fps.md#extract)
* [generate](_fps_index_.fps.md#generate)
* [parse](_fps_index_.fps.md#parse)
* [payload](_fps_index_.fps.md#payload)
* [setAlphanumericSpecial](_fps_index_.fps.md#setalphanumericspecial)
* [setNumeric](_fps_index_.fps.md#setnumeric)

### Point of Initiation Methods

* [isStatic](_fps_index_.fps.md#isstatic)
* [setDynamic](_fps_index_.fps.md#setdynamic)
* [setStatic](_fps_index_.fps.md#setstatic)

### Transaction Data Methods

* [getAmount](_fps_index_.fps.md#getamount)
* [getCurrency](_fps_index_.fps.md#getcurrency)
* [setAmount](_fps_index_.fps.md#setamount)
* [setCNY](_fps_index_.fps.md#setcny)
* [setCurrency](_fps_index_.fps.md#setcurrency)
* [setHKD](_fps_index_.fps.md#sethkd)

### static Methods

* [Silent](_fps_index_.fps.md#static-silent)

### Merchant Account Object literals

* [merchantAccountInfo](_fps_index_.fps.md#private-optional-merchantaccountinfo)

## Bank Participant Properties

### `Static` BANK_BANK_OF_CHINA

▪ **BANK_BANK_OF_CHINA**: *[PARTICIPANTS](../modules/_hkqr_config_.md#participants)* = "012"

Defined in FPS/index.ts:83

Bank of China (Hong Kong) Limited

Used in [FPS.setBank](_fps_index_.fps.md#setbank)

___

### `Static` BANK_CITIBANK

▪ **BANK_CITIBANK**: *[PARTICIPANTS](../modules/_hkqr_config_.md#participants)* = "250"

Defined in FPS/index.ts:111

Citibank (Hong Kong) Limited

Used in [FPS.setBank](_fps_index_.fps.md#setbank)

___

### `Static` BANK_DBS

▪ **BANK_DBS**: *[PARTICIPANTS](../modules/_hkqr_config_.md#participants)* = "016"

Defined in FPS/index.ts:97

DBS Bank (Hong Kong) Ltd.

Used in [FPS.setBank](_fps_index_.fps.md#setbank)

___

### `Static` BANK_EAST_ASIA

▪ **BANK_EAST_ASIA**: *[PARTICIPANTS](../modules/_hkqr_config_.md#participants)* = "015"

Defined in FPS/index.ts:90

The Bank of East Asia, Limited

Used in [FPS.setBank](_fps_index_.fps.md#setbank)

___

### `Static` BANK_HANG_SANG

▪ **BANK_HANG_SANG**: *[PARTICIPANTS](../modules/_hkqr_config_.md#participants)* = "024"

Defined in FPS/index.ts:104

Hang Seng Bank Ltd.

Used in [FPS.setBank](_fps_index_.fps.md#setbank)

___

### `Static` BANK_HSBC

▪ **BANK_HSBC**: *[PARTICIPANTS](../modules/_hkqr_config_.md#participants)* = "004"

Defined in FPS/index.ts:76

The Hongkong and Shanghai Banking Corporation Limited

Used in [FPS.setBank](_fps_index_.fps.md#setbank)

___

### `Static` BANK_STANDARD_CHARTERED

▪ **BANK_STANDARD_CHARTERED**: *[PARTICIPANTS](../modules/_hkqr_config_.md#participants)* = "003"

Defined in FPS/index.ts:69

Standard Chartered Bank (Hong Kong) Limited

Used in [FPS.setBank](_fps_index_.fps.md#setbank)

___

## Billing Data Properties

### `Private` `Optional` additionalInfo

• **additionalInfo**? : *[ADDITIONAL_INFO](../modules/_lib_constant_.md#additional_info)*

Defined in FPS/index.ts:50

___

## Currency Properties

### `Static` CURRENCY_CNY

▪ **CURRENCY_CNY**: *[CURRENCY](../modules/_hkqr_config_.md#currency)* = "CNY"

Defined in FPS/index.ts:171

Chinese Yuan Renminbi

Used in [FPS.setCurrency](_fps_index_.fps.md#setcurrency)

___

### `Static` CURRENCY_HKD

▪ **CURRENCY_HKD**: *[CURRENCY](../modules/_hkqr_config_.md#currency)* = "HKD"

Defined in FPS/index.ts:164

Hong Kong Dollar

Used in [FPS.setCurrency](_fps_index_.fps.md#setcurrency)

___

### `Static` CURRENCY_TWD

▪ **CURRENCY_TWD**: *[CURRENCY](../modules/_hkqr_config_.md#currency)* = "TWD"

Defined in FPS/index.ts:178

Taiwan New Dollar

Used in [FPS.setCurrency](_fps_index_.fps.md#setcurrency)

___

### `Static` CURRENCY_USD

▪ **CURRENCY_USD**: *[CURRENCY](../modules/_hkqr_config_.md#currency)* = "USD"

Defined in FPS/index.ts:185

United States Dollar

Used in [FPS.setCurrency](_fps_index_.fps.md#setcurrency)

___

## FPS Identifier Properties

### `Static` FPS_EMAIL_IRD_PERSONAL_ASSESSMENT

▪ **FPS_EMAIL_IRD_PERSONAL_ASSESSMENT**: *string* = "FPS_Identifier_CRC201D@ird.gov.hk"

Defined in FPS/index.ts:208

Inland Revenue Department - Personal Assessment

Used in [FPS.setEmail](_fps_index_.fps.md#setemail)

___

### `Static` FPS_EMAIL_IRD_PROFITS_TAX

▪ **FPS_EMAIL_IRD_PROFITS_TAX**: *string* = "FPS_Identifier_CRC201A@ird.gov.hk"

Defined in FPS/index.ts:194

Inland Revenue Department - Profits Tax

Used in [FPS.setEmail](_fps_index_.fps.md#setemail)

___

### `Static` FPS_EMAIL_IRD_SALARIES_TAX

▪ **FPS_EMAIL_IRD_SALARIES_TAX**: *string* = "FPS_Identifier_CRC201B@ird.gov.hk"

Defined in FPS/index.ts:201

Inland Revenue Department - Salaries Tax

Used in [FPS.setEmail](_fps_index_.fps.md#setemail)

___

### `Static` FPS_ID_CLP

▪ **FPS_ID_CLP**: *string* = "4853305"

Defined in FPS/index.ts:216

CLP Power Hong Kong Ltd.

Used in [FPS.setFPSId](_fps_index_.fps.md#setfpsid)

___

### `Static` FPS_ID_HK_ELECTRIC

▪ **FPS_ID_HK_ELECTRIC**: *string* = "4853305"

Defined in FPS/index.ts:223

Hongkong Electric Company

Used in [FPS.setFPSId](_fps_index_.fps.md#setfpsid)

___

## Format Indicator Properties

### `Private` `Optional` formatIndicator

• **formatIndicator**? : *string* = "01"

Defined in FPS/index.ts:28

___

## Merchant Account Properties

### `Private` `Optional` merchantAccount

• **merchantAccount**? : *[VALID_ID](../modules/_lib_constant_.md#valid_id)* = "26"

Defined in FPS/index.ts:32

___

## Merchant Information Properties

### `Private` countryCode

• **countryCode**: *string* = "HK"

Defined in FPS/index.ts:44

___

### `Private` merchantCategory

• **merchantCategory**: *string* = "0000"

Defined in FPS/index.ts:38

___

### `Private` merchantCity

• **merchantCity**: *string* = "HK"

Defined in FPS/index.ts:48

___

### `Private` merchantName

• **merchantName**: *string* = "NA"

Defined in FPS/index.ts:46

___

## Other Properties

### `Private` `Optional` cyclicRedundancyCheck

• **cyclicRedundancyCheck**? : *string*

Defined in FPS/index.ts:51

___

## Point of Initiation Properties

### `Private` `Optional` initiationPoint

• **initiationPoint**? : *[POINT_OF_INITIATION](../modules/_lib_constant_.md#point_of_initiation)* = "11"

Defined in FPS/index.ts:30

___

## SVF Participant Properties

### `Static` BANK_ALIPAY

▪ **BANK_ALIPAY**: *[PARTICIPANTS](../modules/_hkqr_config_.md#participants)* = "948"

Defined in FPS/index.ts:141

Alipay Financial Services (HK) Limited

Used in [FPS.setBank](_fps_index_.fps.md#setbank)

___

### `Static` BANK_OCTOPUS

▪ **BANK_OCTOPUS**: *[PARTICIPANTS](../modules/_hkqr_config_.md#participants)* = "949"

Defined in FPS/index.ts:148

Octopus Cards Limited

Used in [FPS.setBank](_fps_index_.fps.md#setbank)

___

### `Static` BANK_PAYME

▪ **BANK_PAYME**: *[PARTICIPANTS](../modules/_hkqr_config_.md#participants)* = "954"

Defined in FPS/index.ts:155

PayMe

Used in [FPS.setBank](_fps_index_.fps.md#setbank)

___

### `Static` BANK_TAP_N_GO

▪ **BANK_TAP_N_GO**: *[PARTICIPANTS](../modules/_hkqr_config_.md#participants)* = "935"

Defined in FPS/index.ts:127

HKT Payment Limited

Used in [FPS.setBank](_fps_index_.fps.md#setbank)

___

### `Static` BANK_TNG

▪ **BANK_TNG**: *[PARTICIPANTS](../modules/_hkqr_config_.md#participants)* = "947"

Defined in FPS/index.ts:134

TNG (Asia) Limited

Used in [FPS.setBank](_fps_index_.fps.md#setbank)

___

### `Static` BANK_WECHAT

▪ **BANK_WECHAT**: *[PARTICIPANTS](../modules/_hkqr_config_.md#participants)* = "931"

Defined in FPS/index.ts:120

WeChat Pay Hong Kong Limited

Used in [FPS.setBank](_fps_index_.fps.md#setbank)

___

## Transaction Data Properties

### `Private` `Optional` transactionAmount

• **transactionAmount**? : *string*

Defined in FPS/index.ts:42

___

### `Private` transactionCurrency

• **transactionCurrency**: *[CURRENCY](../modules/_hkqr_config_.md#currency)* = "HKD"

Defined in FPS/index.ts:40

## Billing Data Methods

###  getBillNumber

▸ **getBillNumber**(): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:667

Get the billing number

**Returns:** *[Event](_lib_event_.event.md)*

___

###  getReference

▸ **getReference**(): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:688

Get the reference of the transaction

**Returns:** *[Event](_lib_event_.event.md)*

___

###  setAdditionalInfo

▸ **setAdditionalInfo**(`x`: [VALID_OBJECT](../modules/_lib_constant_.md#valid_object)): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:633

Set all the billing information

**Parameters:**

Name | Type |
------ | ------ |
`x` | [VALID_OBJECT](../modules/_lib_constant_.md#valid_object) |

**Returns:** *[Event](_lib_event_.event.md)*

___

###  setBillNumber

▸ **setBillNumber**(`x`: string): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:678

Set the billing number

**Parameters:**

Name | Type |
------ | ------ |
`x` | string |

**Returns:** *[Event](_lib_event_.event.md)*

___

###  setReference

▸ **setReference**(`x`: string): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:699

Set the reference of the transaction

**Parameters:**

Name | Type |
------ | ------ |
`x` | string |

**Returns:** *[Event](_lib_event_.event.md)*

___

## Merchant Account Methods

###  getBank

▸ **getBank**(`toName`: boolean): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:503

Get merchant account participant code

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`toName` | boolean | false | Return the name of the participant  |

**Returns:** *[Event](_lib_event_.event.md)*

___

###  getEmail

▸ **getEmail**(): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:581

Get merchant account identifier - Email

**Returns:** *[Event](_lib_event_.event.md)*

___

###  getFPSId

▸ **getFPSId**(): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:527

Get merchant account identifier - FPS ID

**Returns:** *[Event](_lib_event_.event.md)*

___

###  getMobile

▸ **getMobile**(): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:554

Get merchant account identifier - Mobile Number

**Returns:** *[Event](_lib_event_.event.md)*

___

###  setBank

▸ **setBank**(`x`: [PARTICIPANTS](../modules/_hkqr_config_.md#participants)): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:517

Set merchant account participant code

**Parameters:**

Name | Type |
------ | ------ |
`x` | [PARTICIPANTS](../modules/_hkqr_config_.md#participants) |

**Returns:** *[Event](_lib_event_.event.md)*

___

###  setEmail

▸ **setEmail**(`x`: string): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:595

Set merchant account identifier - Email

Set either one among these functions [FPS.getFPSId](_fps_index_.fps.md#getfpsid), [FPS.setMobile](_fps_index_.fps.md#setmobile), [FPS.setEmail](_fps_index_.fps.md#setemail)

**Parameters:**

Name | Type |
------ | ------ |
`x` | string |

**Returns:** *[Event](_lib_event_.event.md)*

___

###  setFPSId

▸ **setFPSId**(`x`: number | string): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:541

Set merchant account identifier - FPS ID

Set either one among these functions [FPS.getFPSId](_fps_index_.fps.md#getfpsid), [FPS.setMobile](_fps_index_.fps.md#setmobile), [FPS.setEmail](_fps_index_.fps.md#setemail)

**Parameters:**

Name | Type |
------ | ------ |
`x` | number &#124; string |

**Returns:** *[Event](_lib_event_.event.md)*

___

###  setMerchantAccount

▸ **setMerchantAccount**(`x`: [VALID_OBJECT](../modules/_lib_constant_.md#valid_object)): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:450

Set merchant account data

**Parameters:**

Name | Type |
------ | ------ |
`x` | [VALID_OBJECT](../modules/_lib_constant_.md#valid_object) |

**Returns:** *[Event](_lib_event_.event.md)*

___

###  setMobile

▸ **setMobile**(`x`: number | string): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:568

Set merchant account identifier - Mobile Number

Set either one among these functions [FPS.getFPSId](_fps_index_.fps.md#getfpsid), [FPS.setMobile](_fps_index_.fps.md#setmobile), [FPS.setEmail](_fps_index_.fps.md#setemail)

**Parameters:**

Name | Type |
------ | ------ |
`x` | number &#124; string |

**Returns:** *[Event](_lib_event_.event.md)*

___

## Other Methods

###  extract

▸ **extract**(`x`: string): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:326

Extract data from plaintext

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`x` | string | "" | Plaintext decoded from QR code  |

**Returns:** *[Event](_lib_event_.event.md)*

___

###  generate

▸ **generate**(): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:354

Generate resulting string for QR code

**Returns:** *[Event](_lib_event_.event.md)*

___

###  parse

▸ **parse**(`x`: string): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:282

Extract and parse data from plaintext

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | string | Plaintext decoded from QR code  |

**Returns:** *[Event](_lib_event_.event.md)*

___

###  payload

▸ **payload**(`id`: [VALID_ID](../modules/_lib_constant_.md#valid_id), `content`: string): *string*

Defined in FPS/index.ts:228

Function to help building the resulting string

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | [VALID_ID](../modules/_lib_constant_.md#valid_id) | - |
`content` | string | "" |

**Returns:** *string*

___

###  setAlphanumericSpecial

▸ **setAlphanumericSpecial**(`x`: string, `length`: number): *[Event](_lib_event_.event.md)*

Defined in FPS/index.ts:237

Function to validate a string as alphanumeric special string (A-z0-9.@_+-)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | string | Source string |
`length` | number | Maximum length available  |

**Returns:** *[Event](_lib_event_.event.md)*

___

###  setNumeric

▸ **setNumeric**(`x`: number | string, `fraction`: number | boolean, `limit`: number): *[Event](_lib_event_.event.md)*

Defined in FPS/index.ts:255

Function to validate a string or number as a valid numeric string

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`x` | number &#124; string | - | Source string or number |
`fraction` | number &#124; boolean | false | Force the number to be converted in fixed-point notation (i.e. `x.toFixed(fraction)`) |
`limit` | number | 13 | Maximum length available  |

**Returns:** *[Event](_lib_event_.event.md)*

___

## Point of Initiation Methods

###  isStatic

▸ **isStatic**(): *boolean*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:424

Check if it is a static QR Code

**Returns:** *boolean*

___

###  setDynamic

▸ **setDynamic**(): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:441

Set it to a dynamic QR Code

**Returns:** *[Event](_lib_event_.event.md)*

___

###  setStatic

▸ **setStatic**(): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:432

Set it to a static QR Code

**Returns:** *[Event](_lib_event_.event.md)*

___

## Transaction Data Methods

###  getAmount

▸ **getAmount**(`toNumber`: boolean): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:607

Get transaction amount

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`toNumber` | boolean | false | Convert number string to number  |

**Returns:** *[Event](_lib_event_.event.md)*

___

###  getCurrency

▸ **getCurrency**(`toCode`: boolean): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:730

Get transaction currency code

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`toCode` | boolean | false | Get the 3-digit number code instead  |

**Returns:** *[Event](_lib_event_.event.md)*

___

###  setAmount

▸ **setAmount**(`x`: number): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:619

Set transaction amount

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *[Event](_lib_event_.event.md)*

___

###  setCNY

▸ **setCNY**(): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:720

Set transaction currency to Chinese Yuan Renmenbi (CNY)

See [FPS.setCurrency](_fps_index_.fps.md#setcurrency)

**Returns:** *[Event](_lib_event_.event.md)*

___

###  setCurrency

▸ **setCurrency**(`x`: [CURRENCY](../modules/_hkqr_config_.md#currency)): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:745

Set transaction currency code

Will be converted to number code in [FPS.generate](_fps_index_.fps.md#generate)

**Parameters:**

Name | Type |
------ | ------ |
`x` | [CURRENCY](../modules/_hkqr_config_.md#currency) |

**Returns:** *[Event](_lib_event_.event.md)*

___

###  setHKD

▸ **setHKD**(): *[Event](_lib_event_.event.md)*

*Implementation of [ICODE](../interfaces/_fps_config_.icode.md)*

Defined in FPS/index.ts:711

Set transaction currency to Hong Kong Dollar (HKD)

See [FPS.setCurrency](_fps_index_.fps.md#setcurrency)

**Returns:** *[Event](_lib_event_.event.md)*

___

## static Methods

### `Static` Silent

▸ **Silent**(): *void*

Defined in FPS/index.ts:58

Prevent function throwing error and stop the script.
You may need to handle the error yourself.

**Returns:** *void*

## Merchant Account Object literals

### `Private` `Optional` merchantAccountInfo

### ▪ **merchantAccountInfo**? : *object*

Defined in FPS/index.ts:34

###  uniqueIdentifier

• **uniqueIdentifier**: *string* = "hk.com.hkicl"

Defined in FPS/index.ts:35
