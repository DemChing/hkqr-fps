[hkqr-fps](../README.md) › ["FPS/config"](_fps_config_.md)

# Module: "FPS/config"

## Index

### Interfaces

* [ICODE](../interfaces/_fps_config_.icode.md)

### Type aliases

* [COUNTRY](_fps_config_.md#country)
* [CURRENCY](_fps_config_.md#currency)
* [LANGUAGE](_fps_config_.md#language)
* [MERCHANT](_fps_config_.md#merchant)
* [MERCHANT_INFO](_fps_config_.md#merchant_info)
* [PARTICIPANTS](_fps_config_.md#participants)

### Variables

* [COUNTRY](_fps_config_.md#const-country)
* [CURRENCY](_fps_config_.md#const-currency)
* [LANGUAGE](_fps_config_.md#const-language)
* [MERCHANT](_fps_config_.md#const-merchant)
* [PARTICIPANT](_fps_config_.md#const-participant)

## Type aliases

###  COUNTRY

Ƭ **COUNTRY**: *keyof typeof COUNTRY*

Defined in FPS/config.ts:68

___

###  CURRENCY

Ƭ **CURRENCY**: *keyof typeof CURRENCY*

Defined in FPS/config.ts:69

___

###  LANGUAGE

Ƭ **LANGUAGE**: *keyof typeof LANGUAGE*

Defined in FPS/config.ts:70

___

###  MERCHANT

Ƭ **MERCHANT**: *typeof MERCHANT*

Defined in FPS/config.ts:71

___

###  MERCHANT_INFO

Ƭ **MERCHANT_INFO**: *object*

Defined in FPS/config.ts:74

#### Type declaration:

* **extra**? : *[VALID_OBJECT](_lib_constant_.md#valid_object)*

* **language**: *[LANGUAGE](_fps_config_.md#language)*

* **merchantCity**? : *string*

* **merchantName**: *string*

___

###  PARTICIPANTS

Ƭ **PARTICIPANTS**: *keyof typeof PARTICIPANT*

Defined in FPS/config.ts:72

## Variables

### `Const` COUNTRY

• **COUNTRY**: *object* = {
    CN: "cn",
    GB: "gb",
    HK: "hk",
    MO: "mo",
    TW: "tw",
    US: "us",
} as const

Defined in FPS/config.ts:4

#### Type declaration:

* **CN**: *"cn"* = "cn"

* **GB**: *"gb"* = "gb"

* **HK**: *"hk"* = "hk"

* **MO**: *"mo"* = "mo"

* **TW**: *"tw"* = "tw"

* **US**: *"us"* = "us"

___

### `Const` CURRENCY

• **CURRENCY**: *object* = {
    CNY: "156",
    HKD: "344",
    TWD: "901",
    USD: "840",
} as const

Defined in FPS/config.ts:12

#### Type declaration:

* **CNY**: *"156"* = "156"

* **HKD**: *"344"* = "344"

* **TWD**: *"901"* = "901"

* **USD**: *"840"* = "840"

___

### `Const` LANGUAGE

• **LANGUAGE**: *object* = {
    EN: "en",
    ZH: "zh",
} as const

Defined in FPS/config.ts:18

#### Type declaration:

* **EN**: *"en"* = "en"

* **ZH**: *"zh"* = "zh"

___

### `Const` MERCHANT

• **MERCHANT**: *"26"* = "26"

Defined in FPS/config.ts:22

___

### `Const` PARTICIPANT

• **PARTICIPANT**: *object* = {
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
} as const

Defined in FPS/config.ts:23

#### Type declaration:

* **003**: *"STANDARD CHARTERED BANK (HONG KONG) LIMITED"* = "STANDARD CHARTERED BANK (HONG KONG) LIMITED"

* **004**: *"The Hongkong and Shanghai Banking Corporation Limited"* = "The Hongkong and Shanghai Banking Corporation Limited"

* **009**: *"China Construction Bank (Asia) Corporation Limited"* = "China Construction Bank (Asia) Corporation Limited"

* **012**: *"Bank of China (Hong Kong) Limited"* = "Bank of China (Hong Kong) Limited"

* **014**: *"Bank of China (Hong Kong) Limited"* = "Bank of China (Hong Kong) Limited"

* **015**: *"The Bank of East Asia, Limited"* = "The Bank of East Asia, Limited"

* **016**: *"DBS Bank (Hong Kong) Ltd."* = "DBS Bank (Hong Kong) Ltd."

* **019**: *"Bank of China (Hong Kong) Limited"* = "Bank of China (Hong Kong) Limited"

* **020**: *"CMB Wing Lung Bank Limited"* = "CMB Wing Lung Bank Limited"

* **024**: *"Hang Seng Bank Ltd."* = "Hang Seng Bank Ltd."

* **025**: *"Shanghai Commercial Bank Limited"* = "Shanghai Commercial Bank Limited"

* **026**: *"Bank of China (Hong Kong) Limited"* = "Bank of China (Hong Kong) Limited"

* **027**: *"Bank of Communications Co., Ltd. Hong Kong Branch"* = "Bank of Communications Co., Ltd. Hong Kong Branch"

* **028**: *"Public Bank (Hong Kong) Limited"* = "Public Bank (Hong Kong) Limited"

* **029**: *"INDUSTRIAL AND COMMERCIAL BANK OF CHINA (ASIA) LIMITED"* = "INDUSTRIAL AND COMMERCIAL BANK OF CHINA (ASIA) LIMITED"

* **030**: *"Bank of China (Hong Kong) Limited"* = "Bank of China (Hong Kong) Limited"

* **031**: *"Bank of China (Hong Kong) Limited"* = "Bank of China (Hong Kong) Limited"

* **033**: *"Bank of China (Hong Kong) Limited"* = "Bank of China (Hong Kong) Limited"

* **035**: *"OCBC Wing Hang Bank Limited"* = "OCBC Wing Hang Bank Limited"

* **036**: *"Bank of China (Hong Kong) Limited"* = "Bank of China (Hong Kong) Limited"

* **038**: *"Tai Yau Bank Limited"* = "Tai Yau Bank Limited"

* **039**: *"Chiyu Banking Corporation Limited"* = "Chiyu Banking Corporation Limited"

* **040**: *"Dah Sing Bank, Limited"* = "Dah Sing Bank, Limited"

* **041**: *"Chong Hing Bank Limited"* = "Chong Hing Bank Limited"

* **043**: *"Nanyang Commercial Bank, Limited"* = "Nanyang Commercial Bank, Limited"

* **044**: *"OCBC Wing Hang Bank Limited"* = "OCBC Wing Hang Bank Limited"

* **061**: *"TAI SANG BANK LTD."* = "TAI SANG BANK LTD."

* **064**: *"Bank of China (Hong Kong) Limited"* = "Bank of China (Hong Kong) Limited"

* **070**: *"Bank of China (Hong Kong) Limited"* = "Bank of China (Hong Kong) Limited"

* **128**: *"Fubon Bank (Hong Kong) Limited"* = "Fubon Bank (Hong Kong) Limited"

* **250**: *"Citibank (Hong Kong) Limited"* = "Citibank (Hong Kong) Limited"

* **929**: *"K & R INTERNATIONAL LIMITED"* = "K & R INTERNATIONAL LIMITED"

* **930**: *"EPAYLINKS TECHNOLOGY CO., LIMITED"* = "EPAYLINKS TECHNOLOGY CO., LIMITED"

* **931**: *"WeChat Pay Hong Kong Limited"* = "WeChat Pay Hong Kong Limited"

* **933**: *"33 Financial Services Limited"* = "33 Financial Services Limited"

* **934**: *"UniCard Solution Limited"* = "UniCard Solution Limited"

* **935**: *"HKT Payment Limited"* = "HKT Payment Limited"

* **947**: *"TNG (Asia) Limited"* = "TNG (Asia) Limited"

* **948**: *"Alipay Financial Services (HK) Limited"* = "Alipay Financial Services (HK) Limited"

* **949**: *"Octopus Cards Limited"* = "Octopus Cards Limited"

* **952**: *"Autotoll Limited"* = "Autotoll Limited"

* **954**: *"PayMe"* = "PayMe"
