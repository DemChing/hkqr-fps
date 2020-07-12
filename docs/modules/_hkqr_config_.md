[hkqr-fps](../README.md) › [Globals](../globals.md) › ["HKQR/config"](_hkqr_config_.md)

# Module: "HKQR/config"

## Index

### Interfaces

* [ICODE](../interfaces/_hkqr_config_.icode.md)

### Type aliases

* [COUNTRY](_hkqr_config_.md#country)
* [CURRENCY](_hkqr_config_.md#currency)
* [LANGUAGE](_hkqr_config_.md#language)
* [MERCHANT_ACCOUNTS](_hkqr_config_.md#merchant_accounts)
* [MERCHANT_ACCOUNT_AMEX](_hkqr_config_.md#merchant_account_amex)
* [MERCHANT_ACCOUNT_DISCOVER](_hkqr_config_.md#merchant_account_discover)
* [MERCHANT_ACCOUNT_EMVCO](_hkqr_config_.md#merchant_account_emvco)
* [MERCHANT_ACCOUNT_FPS](_hkqr_config_.md#merchant_account_fps)
* [MERCHANT_ACCOUNT_JCB](_hkqr_config_.md#merchant_account_jcb)
* [MERCHANT_ACCOUNT_MASTER](_hkqr_config_.md#merchant_account_master)
* [MERCHANT_ACCOUNT_PO](_hkqr_config_.md#merchant_account_po)
* [MERCHANT_ACCOUNT_UNION](_hkqr_config_.md#merchant_account_union)
* [MERCHANT_ACCOUNT_VISA](_hkqr_config_.md#merchant_account_visa)
* [MERCHANT_ACCOUNT_WG](_hkqr_config_.md#merchant_account_wg)
* [MERCHANT_CATEGORY](_hkqr_config_.md#merchant_category)
* [MERCHANT_INFO](_hkqr_config_.md#merchant_info)
* [PARTICIPANTS](_hkqr_config_.md#participants)
* [VALID_ID](_hkqr_config_.md#valid_id)
* [VALID_OBJECT](_hkqr_config_.md#valid_object)

### Variables

* [ISO_COUNTRY](_hkqr_config_.md#const-iso_country)
* [ISO_CURRENCY](_hkqr_config_.md#const-iso_currency)
* [ISO_LANGUAGE](_hkqr_config_.md#const-iso_language)
* [ISO_MERCHANT_CATEGORY](_hkqr_config_.md#const-iso_merchant_category)
* [MERCHANT](_hkqr_config_.md#const-merchant)
* [PARTICIPANT](_hkqr_config_.md#const-participant)

## Type aliases

###  COUNTRY

Ƭ **COUNTRY**: *keyof typeof ISO_COUNTRY*

Defined in HKQR/config.ts:37

___

###  CURRENCY

Ƭ **CURRENCY**: *keyof typeof ISO_CURRENCY*

Defined in HKQR/config.ts:38

___

###  LANGUAGE

Ƭ **LANGUAGE**: *keyof typeof ISO_LANGUAGE*

Defined in HKQR/config.ts:39

___

###  MERCHANT_ACCOUNTS

Ƭ **MERCHANT_ACCOUNTS**: *[MERCHANT_ACCOUNT_VISA](_hkqr_config_.md#merchant_account_visa) | [MERCHANT_ACCOUNT_MASTER](_hkqr_config_.md#merchant_account_master) | [MERCHANT_ACCOUNT_EMVCO](_hkqr_config_.md#merchant_account_emvco) | [MERCHANT_ACCOUNT_DISCOVER](_hkqr_config_.md#merchant_account_discover) | [MERCHANT_ACCOUNT_AMEX](_hkqr_config_.md#merchant_account_amex) | [MERCHANT_ACCOUNT_JCB](_hkqr_config_.md#merchant_account_jcb) | [MERCHANT_ACCOUNT_UNION](_hkqr_config_.md#merchant_account_union) | [MERCHANT_ACCOUNT_FPS](_hkqr_config_.md#merchant_account_fps) | [MERCHANT_ACCOUNT_WG](_hkqr_config_.md#merchant_account_wg) | [MERCHANT_ACCOUNT_PO](_hkqr_config_.md#merchant_account_po)*

Defined in HKQR/config.ts:34

___

###  MERCHANT_ACCOUNT_AMEX

Ƭ **MERCHANT_ACCOUNT_AMEX**: *typeof ACCOUNT_AMEX[number]*

Defined in HKQR/config.ts:28

___

###  MERCHANT_ACCOUNT_DISCOVER

Ƭ **MERCHANT_ACCOUNT_DISCOVER**: *typeof ACCOUNT_DISCOVER[number]*

Defined in HKQR/config.ts:27

___

###  MERCHANT_ACCOUNT_EMVCO

Ƭ **MERCHANT_ACCOUNT_EMVCO**: *typeof ACCOUNT_EMVCO[number]*

Defined in HKQR/config.ts:26

___

###  MERCHANT_ACCOUNT_FPS

Ƭ **MERCHANT_ACCOUNT_FPS**: *typeof ACCOUNT_FPS[number]*

Defined in HKQR/config.ts:31

___

###  MERCHANT_ACCOUNT_JCB

Ƭ **MERCHANT_ACCOUNT_JCB**: *typeof ACCOUNT_JCB[number]*

Defined in HKQR/config.ts:29

___

###  MERCHANT_ACCOUNT_MASTER

Ƭ **MERCHANT_ACCOUNT_MASTER**: *typeof ACCOUNT_MASTER[number]*

Defined in HKQR/config.ts:25

___

###  MERCHANT_ACCOUNT_PO

Ƭ **MERCHANT_ACCOUNT_PO**: *typeof ACCOUNT_PO[number]*

Defined in HKQR/config.ts:33

___

###  MERCHANT_ACCOUNT_UNION

Ƭ **MERCHANT_ACCOUNT_UNION**: *typeof ACCOUNT_UNION[number]*

Defined in HKQR/config.ts:30

___

###  MERCHANT_ACCOUNT_VISA

Ƭ **MERCHANT_ACCOUNT_VISA**: *typeof ACCOUNT_VISA[number]*

Defined in HKQR/config.ts:24

___

###  MERCHANT_ACCOUNT_WG

Ƭ **MERCHANT_ACCOUNT_WG**: *typeof ACCOUNT_WG[number]*

Defined in HKQR/config.ts:32

___

###  MERCHANT_CATEGORY

Ƭ **MERCHANT_CATEGORY**: *keyof typeof ISO_MERCHANT_CATEGORIES*

Defined in HKQR/config.ts:40

___

###  MERCHANT_INFO

Ƭ **MERCHANT_INFO**: *object*

Defined in HKQR/config.ts:43

#### Type declaration:

* **extra**? : *[VALID_OBJECT](_hkqr_config_.md#valid_object)*

* **language**: *[LANGUAGE](_hkqr_config_.md#language)*

* **merchantCity**? : *string*

* **merchantName**: *string*

___

###  PARTICIPANTS

Ƭ **PARTICIPANTS**: *keyof typeof PARTICIPANT*

Defined in HKQR/config.ts:41

___

###  VALID_ID

Ƭ **VALID_ID**: *"00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60" | "61" | "62" | "63" | "64" | "65" | "66" | "67" | "68" | "69" | "70" | "71" | "72" | "73" | "74" | "75" | "76" | "77" | "78" | "79" | "80" | "81" | "82" | "83" | "84" | "85" | "86" | "87" | "88" | "89" | "90" | "91" | "92" | "93" | "94" | "95" | "96" | "97" | "98" | "99"*

Defined in HKQR/config.ts:18

___

###  VALID_OBJECT

Ƭ **VALID_OBJECT**: *object*

Defined in HKQR/config.ts:19

#### Type declaration:

## Variables

### `Const` ISO_COUNTRY

• **ISO_COUNTRY**: *object* = ISO_COUNTRIES

Defined in HKQR/config.ts:11

#### Type declaration:

* **AD**: *string* = "ad"

* **AE**: *string* = "ae"

* **AF**: *string* = "af"

* **AG**: *string* = "ag"

* **AI**: *string* = "ai"

* **AL**: *string* = "al"

* **AM**: *string* = "am"

* **AO**: *string* = "ao"

* **AQ**: *string* = "aq"

* **AR**: *string* = "ar"

* **AS**: *string* = "as"

* **AT**: *string* = "at"

* **AU**: *string* = "au"

* **AW**: *string* = "aw"

* **AX**: *string* = "ax"

* **AZ**: *string* = "az"

* **BA**: *string* = "ba"

* **BB**: *string* = "bb"

* **BD**: *string* = "bd"

* **BE**: *string* = "be"

* **BF**: *string* = "bf"

* **BG**: *string* = "bg"

* **BH**: *string* = "bh"

* **BI**: *string* = "bi"

* **BJ**: *string* = "bj"

* **BL**: *string* = "bl"

* **BM**: *string* = "bm"

* **BN**: *string* = "bn"

* **BO**: *string* = "bo"

* **BQ**: *string* = "bq"

* **BR**: *string* = "br"

* **BS**: *string* = "bs"

* **BT**: *string* = "bt"

* **BV**: *string* = "bv"

* **BW**: *string* = "bw"

* **BY**: *string* = "by"

* **BZ**: *string* = "bz"

* **CA**: *string* = "ca"

* **CC**: *string* = "cc"

* **CD**: *string* = "cd"

* **CF**: *string* = "cf"

* **CG**: *string* = "cg"

* **CH**: *string* = "ch"

* **CI**: *string* = "ci"

* **CK**: *string* = "ck"

* **CL**: *string* = "cl"

* **CM**: *string* = "cm"

* **CN**: *string* = "cn"

* **CO**: *string* = "co"

* **CR**: *string* = "cr"

* **CU**: *string* = "cu"

* **CV**: *string* = "cv"

* **CW**: *string* = "cw"

* **CX**: *string* = "cx"

* **CY**: *string* = "cy"

* **CZ**: *string* = "cz"

* **DE**: *string* = "de"

* **DJ**: *string* = "dj"

* **DK**: *string* = "dk"

* **DM**: *string* = "dm"

* **DO**: *string* = "do"

* **DZ**: *string* = "dz"

* **EC**: *string* = "ec"

* **EE**: *string* = "ee"

* **EG**: *string* = "eg"

* **EH**: *string* = "eh"

* **ER**: *string* = "er"

* **ES**: *string* = "es"

* **ET**: *string* = "et"

* **FI**: *string* = "fi"

* **FJ**: *string* = "fj"

* **FK**: *string* = "fk"

* **FM**: *string* = "fm"

* **FO**: *string* = "fo"

* **FR**: *string* = "fr"

* **GA**: *string* = "ga"

* **GB**: *string* = "gb"

* **GD**: *string* = "gd"

* **GE**: *string* = "ge"

* **GF**: *string* = "gf"

* **GG**: *string* = "gg"

* **GH**: *string* = "gh"

* **GI**: *string* = "gi"

* **GL**: *string* = "gl"

* **GM**: *string* = "gm"

* **GN**: *string* = "gn"

* **GP**: *string* = "gp"

* **GQ**: *string* = "gq"

* **GR**: *string* = "gr"

* **GS**: *string* = "gs"

* **GT**: *string* = "gt"

* **GU**: *string* = "gu"

* **GW**: *string* = "gw"

* **GY**: *string* = "gy"

* **HK**: *string* = "hk"

* **HM**: *string* = "hm"

* **HN**: *string* = "hn"

* **HR**: *string* = "hr"

* **HT**: *string* = "ht"

* **HU**: *string* = "hu"

* **ID**: *string* = "id"

* **IE**: *string* = "ie"

* **IL**: *string* = "il"

* **IM**: *string* = "im"

* **IN**: *string* = "in"

* **IO**: *string* = "io"

* **IQ**: *string* = "iq"

* **IR**: *string* = "ir"

* **IS**: *string* = "is"

* **IT**: *string* = "it"

* **JE**: *string* = "je"

* **JM**: *string* = "jm"

* **JO**: *string* = "jo"

* **JP**: *string* = "jp"

* **KE**: *string* = "ke"

* **KG**: *string* = "kg"

* **KH**: *string* = "kh"

* **KI**: *string* = "ki"

* **KM**: *string* = "km"

* **KN**: *string* = "kn"

* **KP**: *string* = "kp"

* **KR**: *string* = "kr"

* **KW**: *string* = "kw"

* **KY**: *string* = "ky"

* **KZ**: *string* = "kz"

* **LA**: *string* = "la"

* **LB**: *string* = "lb"

* **LC**: *string* = "lc"

* **LI**: *string* = "li"

* **LK**: *string* = "lk"

* **LR**: *string* = "lr"

* **LS**: *string* = "ls"

* **LT**: *string* = "lt"

* **LU**: *string* = "lu"

* **LV**: *string* = "lv"

* **LY**: *string* = "ly"

* **MA**: *string* = "ma"

* **MC**: *string* = "mc"

* **MD**: *string* = "md"

* **ME**: *string* = "me"

* **MF**: *string* = "mf"

* **MG**: *string* = "mg"

* **MH**: *string* = "mh"

* **MK**: *string* = "mk"

* **ML**: *string* = "ml"

* **MM**: *string* = "mm"

* **MN**: *string* = "mn"

* **MO**: *string* = "mo"

* **MP**: *string* = "mp"

* **MQ**: *string* = "mq"

* **MR**: *string* = "mr"

* **MS**: *string* = "ms"

* **MT**: *string* = "mt"

* **MU**: *string* = "mu"

* **MV**: *string* = "mv"

* **MW**: *string* = "mw"

* **MX**: *string* = "mx"

* **MY**: *string* = "my"

* **MZ**: *string* = "mz"

* **NA**: *string* = "na"

* **NC**: *string* = "nc"

* **NE**: *string* = "ne"

* **NF**: *string* = "nf"

* **NG**: *string* = "ng"

* **NI**: *string* = "ni"

* **NL**: *string* = "nl"

* **NO**: *string* = "no"

* **NP**: *string* = "np"

* **NR**: *string* = "nr"

* **NU**: *string* = "nu"

* **NZ**: *string* = "nz"

* **OM**: *string* = "om"

* **PA**: *string* = "pa"

* **PE**: *string* = "pe"

* **PF**: *string* = "pf"

* **PG**: *string* = "pg"

* **PH**: *string* = "ph"

* **PK**: *string* = "pk"

* **PL**: *string* = "pl"

* **PM**: *string* = "pm"

* **PN**: *string* = "pn"

* **PR**: *string* = "pr"

* **PS**: *string* = "ps"

* **PT**: *string* = "pt"

* **PW**: *string* = "pw"

* **PY**: *string* = "py"

* **QA**: *string* = "qa"

* **RE**: *string* = "re"

* **RO**: *string* = "ro"

* **RS**: *string* = "rs"

* **RU**: *string* = "ru"

* **RW**: *string* = "rw"

* **SA**: *string* = "sa"

* **SB**: *string* = "sb"

* **SC**: *string* = "sc"

* **SD**: *string* = "sd"

* **SE**: *string* = "se"

* **SG**: *string* = "sg"

* **SH**: *string* = "sh"

* **SI**: *string* = "si"

* **SJ**: *string* = "sj"

* **SK**: *string* = "sk"

* **SL**: *string* = "sl"

* **SM**: *string* = "sm"

* **SN**: *string* = "sn"

* **SO**: *string* = "so"

* **SR**: *string* = "sr"

* **SS**: *string* = "ss"

* **ST**: *string* = "st"

* **SV**: *string* = "sv"

* **SX**: *string* = "sx"

* **SY**: *string* = "sy"

* **SZ**: *string* = "sz"

* **TC**: *string* = "tc"

* **TD**: *string* = "td"

* **TF**: *string* = "tf"

* **TG**: *string* = "tg"

* **TH**: *string* = "th"

* **TJ**: *string* = "tj"

* **TK**: *string* = "tk"

* **TL**: *string* = "tl"

* **TM**: *string* = "tm"

* **TN**: *string* = "tn"

* **TO**: *string* = "to"

* **TR**: *string* = "tr"

* **TT**: *string* = "tt"

* **TV**: *string* = "tv"

* **TW**: *string* = "tw"

* **TZ**: *string* = "tz"

* **UA**: *string* = "ua"

* **UG**: *string* = "ug"

* **UM**: *string* = "um"

* **US**: *string* = "us"

* **UY**: *string* = "uy"

* **UZ**: *string* = "uz"

* **VA**: *string* = "va"

* **VC**: *string* = "vc"

* **VE**: *string* = "ve"

* **VG**: *string* = "vg"

* **VI**: *string* = "vi"

* **VN**: *string* = "vn"

* **VU**: *string* = "vu"

* **WF**: *string* = "wf"

* **WS**: *string* = "ws"

* **YE**: *string* = "ye"

* **YT**: *string* = "yt"

* **ZA**: *string* = "za"

* **ZM**: *string* = "zm"

* **ZW**: *string* = "zw"

___

### `Const` ISO_CURRENCY

• **ISO_CURRENCY**: *object* = ISO_CURRENCIES

Defined in HKQR/config.ts:12

#### Type declaration:

* **AED**: *string* = "784"

* **AFN**: *string* = "971"

* **ALL**: *string* = "008"

* **AMD**: *string* = "051"

* **ANG**: *string* = "532"

* **AOA**: *string* = "973"

* **ARS**: *string* = "032"

* **AUD**: *string* = "036"

* **AWG**: *string* = "533"

* **AZN**: *string* = "944"

* **BAM**: *string* = "977"

* **BBD**: *string* = "052"

* **BDT**: *string* = "050"

* **BGN**: *string* = "975"

* **BHD**: *string* = "048"

* **BIF**: *string* = "108"

* **BMD**: *string* = "060"

* **BND**: *string* = "096"

* **BOB**: *string* = "068"

* **BOV**: *string* = "984"

* **BRL**: *string* = "986"

* **BSD**: *string* = "044"

* **BTN**: *string* = "064"

* **BWP**: *string* = "072"

* **BYN**: *string* = "933"

* **BZD**: *string* = "084"

* **CAD**: *string* = "124"

* **CDF**: *string* = "976"

* **CHE**: *string* = "947"

* **CHF**: *string* = "756"

* **CHW**: *string* = "948"

* **CLF**: *string* = "990"

* **CLP**: *string* = "152"

* **CNY**: *string* = "156"

* **COP**: *string* = "170"

* **COU**: *string* = "970"

* **CRC**: *string* = "188"

* **CUC**: *string* = "931"

* **CUP**: *string* = "192"

* **CVE**: *string* = "132"

* **CZK**: *string* = "203"

* **DJF**: *string* = "262"

* **DKK**: *string* = "208"

* **DOP**: *string* = "214"

* **DZD**: *string* = "012"

* **EGP**: *string* = "818"

* **ERN**: *string* = "232"

* **ETB**: *string* = "230"

* **EUR**: *string* = "978"

* **FJD**: *string* = "242"

* **FKP**: *string* = "238"

* **GBP**: *string* = "826"

* **GEL**: *string* = "981"

* **GHS**: *string* = "936"

* **GIP**: *string* = "292"

* **GMD**: *string* = "270"

* **GNF**: *string* = "324"

* **GTQ**: *string* = "320"

* **GYD**: *string* = "328"

* **HKD**: *string* = "344"

* **HNL**: *string* = "340"

* **HRK**: *string* = "191"

* **HTG**: *string* = "332"

* **HUF**: *string* = "348"

* **IDR**: *string* = "360"

* **ILS**: *string* = "376"

* **INR**: *string* = "356"

* **IQD**: *string* = "368"

* **IRR**: *string* = "364"

* **ISK**: *string* = "352"

* **JMD**: *string* = "388"

* **JOD**: *string* = "400"

* **JPY**: *string* = "392"

* **KES**: *string* = "404"

* **KGS**: *string* = "417"

* **KHR**: *string* = "116"

* **KMF**: *string* = "174"

* **KPW**: *string* = "408"

* **KRW**: *string* = "410"

* **KWD**: *string* = "414"

* **KYD**: *string* = "136"

* **KZT**: *string* = "398"

* **LAK**: *string* = "418"

* **LBP**: *string* = "422"

* **LKR**: *string* = "144"

* **LRD**: *string* = "430"

* **LSL**: *string* = "426"

* **LYD**: *string* = "434"

* **MAD**: *string* = "504"

* **MDL**: *string* = "498"

* **MGA**: *string* = "969"

* **MKD**: *string* = "807"

* **MMK**: *string* = "104"

* **MNT**: *string* = "496"

* **MOP**: *string* = "446"

* **MRU**: *string* = "929"

* **MUR**: *string* = "480"

* **MVR**: *string* = "462"

* **MWK**: *string* = "454"

* **MXN**: *string* = "484"

* **MXV**: *string* = "979"

* **MYR**: *string* = "458"

* **MZN**: *string* = "943"

* **NAD**: *string* = "516"

* **NGN**: *string* = "566"

* **NIO**: *string* = "558"

* **NOK**: *string* = "578"

* **NPR**: *string* = "524"

* **NZD**: *string* = "554"

* **OMR**: *string* = "512"

* **PAB**: *string* = "590"

* **PEN**: *string* = "604"

* **PGK**: *string* = "598"

* **PHP**: *string* = "608"

* **PKR**: *string* = "586"

* **PLN**: *string* = "985"

* **PYG**: *string* = "600"

* **QAR**: *string* = "634"

* **RON**: *string* = "946"

* **RSD**: *string* = "941"

* **RUB**: *string* = "643"

* **RWF**: *string* = "646"

* **SAR**: *string* = "682"

* **SBD**: *string* = "090"

* **SCR**: *string* = "690"

* **SDG**: *string* = "938"

* **SEK**: *string* = "752"

* **SGD**: *string* = "702"

* **SHP**: *string* = "654"

* **SLL**: *string* = "694"

* **SOS**: *string* = "706"

* **SRD**: *string* = "968"

* **SSP**: *string* = "728"

* **STN**: *string* = "930"

* **SVC**: *string* = "222"

* **SYP**: *string* = "760"

* **SZL**: *string* = "748"

* **THB**: *string* = "764"

* **TJS**: *string* = "972"

* **TMT**: *string* = "934"

* **TND**: *string* = "788"

* **TOP**: *string* = "776"

* **TRY**: *string* = "949"

* **TTD**: *string* = "780"

* **TWD**: *string* = "901"

* **TZS**: *string* = "834"

* **UAH**: *string* = "980"

* **UGX**: *string* = "800"

* **USD**: *string* = "840"

* **USN**: *string* = "997"

* **UYI**: *string* = "940"

* **UYU**: *string* = "858"

* **UYW**: *string* = "927"

* **UZS**: *string* = "860"

* **VES**: *string* = "928"

* **VND**: *string* = "704"

* **VUV**: *string* = "548"

* **WST**: *string* = "882"

* **XAF**: *string* = "950"

* **XAG**: *string* = "961"

* **XAU**: *string* = "959"

* **XBA**: *string* = "955"

* **XBB**: *string* = "956"

* **XBC**: *string* = "957"

* **XBD**: *string* = "958"

* **XCD**: *string* = "951"

* **XDR**: *string* = "960"

* **XOF**: *string* = "952"

* **XPD**: *string* = "964"

* **XPF**: *string* = "953"

* **XPT**: *string* = "962"

* **XSU**: *string* = "994"

* **XTS**: *string* = "963"

* **XUA**: *string* = "965"

* **XXX**: *string* = "999"

* **YER**: *string* = "886"

* **ZAR**: *string* = "710"

* **ZMW**: *string* = "967"

* **ZWL**: *string* = "932"

___

### `Const` ISO_LANGUAGE

• **ISO_LANGUAGE**: *object* = ISO_LANGUAGES

Defined in HKQR/config.ts:13

#### Type declaration:

* **AA**: *string* = "aa"

* **AB**: *string* = "ab"

* **AE**: *string* = "ae"

* **AF**: *string* = "af"

* **AK**: *string* = "ak"

* **AM**: *string* = "am"

* **AN**: *string* = "an"

* **AR**: *string* = "ar"

* **AS**: *string* = "as"

* **AV**: *string* = "av"

* **AY**: *string* = "ay"

* **AZ**: *string* = "az"

* **BA**: *string* = "ba"

* **BE**: *string* = "be"

* **BG**: *string* = "bg"

* **BH**: *string* = "bh"

* **BI**: *string* = "bi"

* **BM**: *string* = "bm"

* **BN**: *string* = "bn"

* **BO**: *string* = "bo"

* **BR**: *string* = "br"

* **BS**: *string* = "bs"

* **CA**: *string* = "ca"

* **CE**: *string* = "ce"

* **CH**: *string* = "ch"

* **CO**: *string* = "co"

* **CR**: *string* = "cr"

* **CS**: *string* = "cs"

* **CU**: *string* = "cu"

* **CV**: *string* = "cv"

* **CY**: *string* = "cy"

* **DA**: *string* = "da"

* **DE**: *string* = "de"

* **DV**: *string* = "dv"

* **DZ**: *string* = "dz"

* **EE**: *string* = "ee"

* **EL**: *string* = "el"

* **EN**: *string* = "en"

* **EO**: *string* = "eo"

* **ES**: *string* = "es"

* **ET**: *string* = "et"

* **EU**: *string* = "eu"

* **FA**: *string* = "fa"

* **FF**: *string* = "ff"

* **FI**: *string* = "fi"

* **FJ**: *string* = "fj"

* **FO**: *string* = "fo"

* **FR**: *string* = "fr"

* **FY**: *string* = "fy"

* **GA**: *string* = "ga"

* **GD**: *string* = "gd"

* **GL**: *string* = "gl"

* **GN**: *string* = "gn"

* **GU**: *string* = "gu"

* **GV**: *string* = "gv"

* **HA**: *string* = "ha"

* **HE**: *string* = "he"

* **HI**: *string* = "hi"

* **HO**: *string* = "ho"

* **HR**: *string* = "hr"

* **HT**: *string* = "ht"

* **HU**: *string* = "hu"

* **HY**: *string* = "hy"

* **HZ**: *string* = "hz"

* **IA**: *string* = "ia"

* **ID**: *string* = "id"

* **IE**: *string* = "ie"

* **IG**: *string* = "ig"

* **II**: *string* = "ii"

* **IK**: *string* = "ik"

* **IO**: *string* = "io"

* **IS**: *string* = "is"

* **IT**: *string* = "it"

* **IU**: *string* = "iu"

* **JA**: *string* = "ja"

* **JV**: *string* = "jv"

* **KA**: *string* = "ka"

* **KG**: *string* = "kg"

* **KI**: *string* = "ki"

* **KJ**: *string* = "kj"

* **KK**: *string* = "kk"

* **KL**: *string* = "kl"

* **KM**: *string* = "km"

* **KN**: *string* = "kn"

* **KO**: *string* = "ko"

* **KR**: *string* = "kr"

* **KS**: *string* = "ks"

* **KU**: *string* = "ku"

* **KV**: *string* = "kv"

* **KW**: *string* = "kw"

* **KY**: *string* = "ky"

* **LA**: *string* = "la"

* **LB**: *string* = "lb"

* **LG**: *string* = "lg"

* **LI**: *string* = "li"

* **LN**: *string* = "ln"

* **LO**: *string* = "lo"

* **LT**: *string* = "lt"

* **LU**: *string* = "lu"

* **LV**: *string* = "lv"

* **MG**: *string* = "mg"

* **MH**: *string* = "mh"

* **MI**: *string* = "mi"

* **MK**: *string* = "mk"

* **ML**: *string* = "ml"

* **MN**: *string* = "mn"

* **MR**: *string* = "mr"

* **MS**: *string* = "ms"

* **MT**: *string* = "mt"

* **MY**: *string* = "my"

* **NA**: *string* = "na"

* **NB**: *string* = "nb"

* **ND**: *string* = "nd"

* **NE**: *string* = "ne"

* **NG**: *string* = "ng"

* **NL**: *string* = "nl"

* **NN**: *string* = "nn"

* **NO**: *string* = "no"

* **NR**: *string* = "nr"

* **NV**: *string* = "nv"

* **NY**: *string* = "ny"

* **OC**: *string* = "oc"

* **OJ**: *string* = "oj"

* **OM**: *string* = "om"

* **OR**: *string* = "or"

* **OS**: *string* = "os"

* **PA**: *string* = "pa"

* **PI**: *string* = "pi"

* **PL**: *string* = "pl"

* **PS**: *string* = "ps"

* **PT**: *string* = "pt"

* **QU**: *string* = "qu"

* **RM**: *string* = "rm"

* **RN**: *string* = "rn"

* **RO**: *string* = "ro"

* **RU**: *string* = "ru"

* **RW**: *string* = "rw"

* **SA**: *string* = "sa"

* **SC**: *string* = "sc"

* **SD**: *string* = "sd"

* **SE**: *string* = "se"

* **SG**: *string* = "sg"

* **SI**: *string* = "si"

* **SK**: *string* = "sk"

* **SL**: *string* = "sl"

* **SM**: *string* = "sm"

* **SN**: *string* = "sn"

* **SO**: *string* = "so"

* **SQ**: *string* = "sq"

* **SR**: *string* = "sr"

* **SS**: *string* = "ss"

* **ST**: *string* = "st"

* **SU**: *string* = "su"

* **SV**: *string* = "sv"

* **SW**: *string* = "sw"

* **TA**: *string* = "ta"

* **TE**: *string* = "te"

* **TG**: *string* = "tg"

* **TH**: *string* = "th"

* **TI**: *string* = "ti"

* **TK**: *string* = "tk"

* **TL**: *string* = "tl"

* **TN**: *string* = "tn"

* **TO**: *string* = "to"

* **TR**: *string* = "tr"

* **TS**: *string* = "ts"

* **TT**: *string* = "tt"

* **TW**: *string* = "tw"

* **TY**: *string* = "ty"

* **UG**: *string* = "ug"

* **UK**: *string* = "uk"

* **UR**: *string* = "ur"

* **UZ**: *string* = "uz"

* **VE**: *string* = "ve"

* **VI**: *string* = "vi"

* **VO**: *string* = "vo"

* **WA**: *string* = "wa"

* **WO**: *string* = "wo"

* **XH**: *string* = "xh"

* **YI**: *string* = "yi"

* **YO**: *string* = "yo"

* **ZA**: *string* = "za"

* **ZH**: *string* = "zh"

* **ZU**: *string* = "zu"

___

### `Const` ISO_MERCHANT_CATEGORY

• **ISO_MERCHANT_CATEGORY**: *object* = ISO_MERCHANT_CATEGORIES

Defined in HKQR/config.ts:14

#### Type declaration:

* **0000**: *string* = "Dummy Value"

* **0742**: *string* = "Veterinary Services"

* **0763**: *string* = "Agricultural Co-operatives"

* **0780**: *string* = "Horticultural Services"

* **1520**: *string* = "General Contractors-Residential and Commercial"

* **1711**: *string* = "Air Conditioning Contractors – Sales and Installation"

* **1731**: *string* = "Electrical Contractors"

* **1740**: *string* = "Insulation – Contractors"

* **1750**: *string* = "Carpentry Contractors"

* **1761**: *string* = "Roofing - Contractors"

* **1771**: *string* = "Contractors – Concrete Work"

* **1799**: *string* = "Contractors – Special Trade, Not Elsewhere Classified"

* **2741**: *string* = "Miscellaneous Publishing and Printing"

* **2791**: *string* = "Typesetting, Plate Making, & Related Services"

* **2842**: *string* = "Specialty Cleaning, Polishing, and Sanitation Preparations"

* **3000**: *string* = "UNITED AIRLINES"

* **3001**: *string* = "AMERICAN AIRLINES"

* **3002**: *string* = "PAN AMERICAN"

* **3003**: *string* = "Airlines"

* **3004**: *string* = "TRANS WORLD AIRLINES"

* **3005**: *string* = "BRITISH AIRWAYS"

* **3006**: *string* = "JAPAN AIRLINES"

* **3007**: *string* = "AIR FRANCE"

* **3008**: *string* = "LUFTHANSA"

* **3009**: *string* = "AIR CANADA"

* **3010**: *string* = "KLM (ROYAL DUTCH AIRLINES)"

* **3011**: *string* = "AEORFLOT"

* **3012**: *string* = "QANTAS"

* **3013**: *string* = "ALITALIA"

* **3014**: *string* = "SAUDIA ARABIAN AIRLINES"

* **3015**: *string* = "SWISSAIR"

* **3016**: *string* = "SAS"

* **3017**: *string* = "SOUTH AFRICAN AIRWAYS"

* **3018**: *string* = "VARIG (BRAZIL)"

* **3019**: *string* = "Airlines"

* **3020**: *string* = "AIR-INDIA"

* **3021**: *string* = "AIR ALGERIE"

* **3022**: *string* = "PHILIPPINE AIRLINES"

* **3023**: *string* = "MEXICANA"

* **3024**: *string* = "PAKISTAN INTERNATIONAL"

* **3025**: *string* = "AIR NEW ZEALAND"

* **3026**: *string* = "Airlines"

* **3027**: *string* = "UTA/INTERAIR"

* **3028**: *string* = "AIR MALTA"

* **3029**: *string* = "SABENA"

* **3030**: *string* = "AEROLINEAS ARGENTINAS"

* **3031**: *string* = "OLYMPIC AIRWAYS"

* **3032**: *string* = "EL AL"

* **3033**: *string* = "ANSETT AIRLINES"

* **3034**: *string* = "AUSTRAINLIAN AIRLINES"

* **3035**: *string* = "TAP (PORTUGAL)"

* **3036**: *string* = "VASP (BRAZIL)"

* **3037**: *string* = "EGYPTAIR"

* **3038**: *string* = "KUWAIT AIRLINES"

* **3039**: *string* = "AVIANCA"

* **3040**: *string* = "GULF AIR (BAHRAIN)"

* **3041**: *string* = "BALKAN-BULGARIAN AIRLINES"

* **3042**: *string* = "FINNAIR"

* **3043**: *string* = "AER LINGUS"

* **3044**: *string* = "AIR LANKA"

* **3045**: *string* = "NIGERIA AIRWAYS"

* **3046**: *string* = "CRUZEIRO DO SUL (BRAZIJ)"

* **3047**: *string* = "THY (TURKEY)"

* **3048**: *string* = "ROYAL AIR MAROC"

* **3049**: *string* = "TUNIS AIR"

* **3050**: *string* = "ICELANDAIR"

* **3051**: *string* = "AUSTRIAN AIRLINES"

* **3052**: *string* = "LANCHILE"

* **3053**: *string* = "AVIACO (SPAIN)"

* **3054**: *string* = "LADECO (CHILE)"

* **3055**: *string* = "LAB (BOLIVIA)"

* **3056**: *string* = "QUEBECAIRE"

* **3057**: *string* = "EASTWEST AIRLINES (AUSTRALIA)"

* **3058**: *string* = "DELTA"

* **3059**: *string* = "Airlines"

* **3060**: *string* = "NORTHWEST"

* **3061**: *string* = "CONTINENTAL"

* **3062**: *string* = "WESTERN"

* **3063**: *string* = "US AIR"

* **3064**: *string* = "Airlines"

* **3065**: *string* = "AIRINTER"

* **3066**: *string* = "SOUTHWEST"

* **3067**: *string* = "Airlines"

* **3068**: *string* = "Airlines"

* **3069**: *string* = "SUN COUNTRY AIRLINES"

* **3070**: *string* = "Airlines"

* **3071**: *string* = "AIR BRITISH COLUBIA"

* **3072**: *string* = "Airlines"

* **3073**: *string* = "Airlines"

* **3074**: *string* = "Airlines"

* **3075**: *string* = "SINGAPORE AIRLINES"

* **3076**: *string* = "AEROMEXICO"

* **3077**: *string* = "THAI AIRWAYS"

* **3078**: *string* = "CHINA AIRLINES"

* **3079**: *string* = "Airlines"

* **3080**: *string* = "Airlines"

* **3081**: *string* = "NORDAIR"

* **3082**: *string* = "KOREAN AIRLINES"

* **3083**: *string* = "AIR AFRIGUE"

* **3084**: *string* = "EVA AIRLINES"

* **3085**: *string* = "MIDWEST EXPRESS AIRLINES, INC."

* **3086**: *string* = "Airlines"

* **3087**: *string* = "METRO AIRLINES"

* **3088**: *string* = "CROATIA AIRLINES"

* **3089**: *string* = "TRANSAERO"

* **3090**: *string* = "Airlines"

* **3091**: *string* = "Airlines"

* **3092**: *string* = "Airlines"

* **3093**: *string* = "Airlines"

* **3094**: *string* = "ZAMBIA AIRWAYS"

* **3095**: *string* = "Airlines"

* **3096**: *string* = "AIR ZIMBABWE"

* **3097**: *string* = "Airlines"

* **3098**: *string* = "Airlines"

* **3099**: *string* = "CATHAY PACIFIC"

* **3100**: *string* = "MALAYSIAN AIRLINE SYSTEM"

* **3101**: *string* = "Airlines"

* **3102**: *string* = "IBERIA"

* **3103**: *string* = "GARUDA (INDONESIA)"

* **3104**: *string* = "Airlines"

* **3105**: *string* = "Airlines"

* **3106**: *string* = "BRAATHENS S.A.F.E. (NORWAY)"

* **3107**: *string* = "Airlines"

* **3108**: *string* = "Airlines"

* **3109**: *string* = "Airlines"

* **3110**: *string* = "WINGS AIRWAYS"

* **3111**: *string* = "BRITISH MIDLAND"

* **3112**: *string* = "WINDWARD ISLAND"

* **3113**: *string* = "Airlines"

* **3114**: *string* = "Airlines"

* **3115**: *string* = "Airlines"

* **3116**: *string* = "Airlines"

* **3117**: *string* = "VIASA"

* **3118**: *string* = "VALLEY AIRLINES"

* **3119**: *string* = "Airlines"

* **3120**: *string* = "Airlines"

* **3121**: *string* = "Airlines"

* **3122**: *string* = "Airlines"

* **3123**: *string* = "Airlines"

* **3124**: *string* = "Airlines"

* **3125**: *string* = "TAN"

* **3126**: *string* = "TALAIR"

* **3127**: *string* = "TACA INTERNATIONAL"

* **3128**: *string* = "Airlines"

* **3129**: *string* = "SURINAM AIRWAYS"

* **3130**: *string* = "SUN WORLD INTERNATIONAL"

* **3131**: *string* = "Airlines"

* **3132**: *string* = "Airlines"

* **3133**: *string* = "SUNBELT AIRLINES"

* **3134**: *string* = "Airlines"

* **3135**: *string* = "SUDAN AIRWAYS"

* **3136**: *string* = "Airlines"

* **3137**: *string* = "SINGLETON"

* **3138**: *string* = "SIMMONS AIRLINES"

* **3139**: *string* = "Airlines"

* **3140**: *string* = "Airlines"

* **3141**: *string* = "Airlines"

* **3142**: *string* = "Airlines"

* **3143**: *string* = "SCENIC AIRLINES"

* **3144**: *string* = "VIRGIN ATLANTIC"

* **3145**: *string* = "SAN JUAN AIRLINES"

* **3146**: *string* = "LUXAIR"

* **3147**: *string* = "Airlines"

* **3148**: *string* = "Airlines"

* **3149**: *string* = "Airlines"

* **3150**: *string* = "Airlines"

* **3151**: *string* = "AIR ZAIRE"

* **3152**: *string* = "Airlines"

* **3153**: *string* = "Airlines"

* **3154**: *string* = "PRINCEVILLE"

* **3155**: *string* = "Airlines"

* **3156**: *string* = "Airlines"

* **3157**: *string* = "Airlines"

* **3158**: *string* = "Airlines"

* **3159**: *string* = "PBA"

* **3160**: *string* = "Airlines"

* **3161**: *string* = "ALL NIPPON AIRWAYS"

* **3162**: *string* = "Airlines"

* **3163**: *string* = "Airlines"

* **3164**: *string* = "NORONTAIR"

* **3165**: *string* = "NEW YORK HELICOPTER"

* **3166**: *string* = "Airlines"

* **3167**: *string* = "Airlines"

* **3168**: *string* = "Airlines"

* **3169**: *string* = "Airlines"

* **3170**: *string* = "NOUNT COOK"

* **3171**: *string* = "CANADIAN AIRLINES INTERNATIONAL"

* **3172**: *string* = "NATIONAIR"

* **3173**: *string* = "Airlines"

* **3174**: *string* = "Airlines"

* **3175**: *string* = "Airlines"

* **3176**: *string* = "METROFLIGHT AIRLINES"

* **3177**: *string* = "Airlines"

* **3178**: *string* = "MESA AIR"

* **3179**: *string* = "Airlines"

* **3180**: *string* = "Airlines"

* **3181**: *string* = "MALEV"

* **3182**: *string* = "LOT (POLAND)"

* **3183**: *string* = "Airlines"

* **3184**: *string* = "LIAT"

* **3185**: *string* = "LAV (VENEZUELA)"

* **3186**: *string* = "LAP (PARAGUAY)"

* **3187**: *string* = "LACSA (COSTA RICA)"

* **3188**: *string* = "Airlines"

* **3189**: *string* = "Airlines"

* **3190**: *string* = "JUGOSLAV AIR"

* **3191**: *string* = "ISLAND AIRLINES"

* **3192**: *string* = "IRAN AIR"

* **3193**: *string* = "INDIAN AIRLINES"

* **3194**: *string* = "Airlines"

* **3195**: *string* = "Airlines"

* **3196**: *string* = "HAWAIIAN AIR"

* **3197**: *string* = "HAVASU AIRLINES"

* **3198**: *string* = "Airlines"

* **3199**: *string* = "Airlines"

* **3200**: *string* = "FUYANA AIRWAYS"

* **3201**: *string* = "Airlines"

* **3202**: *string* = "Airlines"

* **3203**: *string* = "GOLDEN PACIFIC AIR"

* **3204**: *string* = "FREEDOM AIR"

* **3205**: *string* = "Airlines"

* **3206**: *string* = "Airlines"

* **3207**: *string* = "Airlines"

* **3208**: *string* = "Airlines"

* **3209**: *string* = "Airlines"

* **3210**: *string* = "Airlines"

* **3211**: *string* = "Airlines"

* **3212**: *string* = "DOMINICANA"

* **3213**: *string* = "Airlines"

* **3214**: *string* = "Airlines"

* **3215**: *string* = "DAN AIR SERVICES"

* **3216**: *string* = "CUMBERLAND AIRLINES"

* **3217**: *string* = "CSA"

* **3218**: *string* = "CROWN AIR"

* **3219**: *string* = "COPA"

* **3220**: *string* = "COMPANIA FAUCETT"

* **3221**: *string* = "TRANSPORTES AEROS MILITARES ECCUATORANOS"

* **3222**: *string* = "COMMAND AIRWAYS"

* **3223**: *string* = "COMAIR"

* **3224**: *string* = "Airlines"

* **3225**: *string* = "Airlines"

* **3226**: *string* = "Airlines"

* **3227**: *string* = "Airlines"

* **3228**: *string* = "CAYMAN AIRWAYS"

* **3229**: *string* = "SAETA SOCIAEDAD ECUATORIANOS DE TRANSPORTES AEREOS"

* **3230**: *string* = "Airlines"

* **3231**: *string* = "SASHA SERVICIO AERO DE HONDURAS"

* **3232**: *string* = "Airlines"

* **3233**: *string* = "CAPITOL AIR"

* **3234**: *string* = "BWIA"

* **3235**: *string* = "BROKWAY AIR"

* **3236**: *string* = "Airlines"

* **3237**: *string* = "Airlines"

* **3238**: *string* = "BEMIDJI AIRLINES"

* **3239**: *string* = "BAR HARBOR AIRLINES"

* **3240**: *string* = "BAHAMASAIR"

* **3241**: *string* = "AVIATECA (GUATEMALA)"

* **3242**: *string* = "AVENSA"

* **3243**: *string* = "AUSTRIAN AIR SERVICE"

* **3244**: *string* = "Airlines"

* **3245**: *string* = "Airlines"

* **3246**: *string* = "Airlines"

* **3247**: *string* = "Airlines"

* **3248**: *string* = "Airlines"

* **3249**: *string* = "Airlines"

* **3250**: *string* = "Airlines"

* **3251**: *string* = "ALOHA AIRLINES"

* **3252**: *string* = "ALM"

* **3253**: *string* = "AMERICA WEST"

* **3254**: *string* = "TRUMP AIRLINE"

* **3255**: *string* = "Airlines"

* **3256**: *string* = "ALASKA AIRLINES"

* **3257**: *string* = "Airlines"

* **3258**: *string* = "Airlines"

* **3259**: *string* = "AMERICAN TRANS AIR"

* **3260**: *string* = "Airlines"

* **3261**: *string* = "AIR CHINA"

* **3262**: *string* = "RENO AIR, INC."

* **3263**: *string* = "Airlines"

* **3264**: *string* = "Airlines"

* **3265**: *string* = "Airlines"

* **3266**: *string* = "AIR SEYCHELLES"

* **3267**: *string* = "AIR PANAMA"

* **3268**: *string* = "Airlines"

* **3269**: *string* = "Airlines"

* **3270**: *string* = "Airlines"

* **3271**: *string* = "Airlines"

* **3272**: *string* = "Airlines"

* **3273**: *string* = "Airlines"

* **3274**: *string* = "Airlines"

* **3275**: *string* = "Airlines"

* **3276**: *string* = "Airlines"

* **3277**: *string* = "Airlines"

* **3278**: *string* = "Airlines"

* **3279**: *string* = "Airlines"

* **3280**: *string* = "AIR JAMAICA"

* **3281**: *string* = "Airlines"

* **3282**: *string* = "AIR DJIBOUTI"

* **3283**: *string* = "Airlines"

* **3284**: *string* = "AERO VIRGIN ISLANDS"

* **3285**: *string* = "AERO PERU"

* **3286**: *string* = "AEROLINEAS NICARAGUENSIS"

* **3287**: *string* = "AERO COACH AVAIATION"

* **3288**: *string* = "Airlines"

* **3289**: *string* = "Airlines"

* **3290**: *string* = "Airlines"

* **3291**: *string* = "ARIANA AFGHAN"

* **3292**: *string* = "CYPRUS AIRWAYS"

* **3293**: *string* = "ECUATORIANA"

* **3294**: *string* = "ETHIOPIAN AIRLINES"

* **3295**: *string* = "KENYA AIRLINES"

* **3296**: *string* = "Airlines"

* **3297**: *string* = "Airlines"

* **3298**: *string* = "AIR MAURITIUS"

* **3299**: *string* = "WIDERO’S FLYVESELSKAP"

* **3351**: *string* = "AFFILIATED AUTO RENTAL"

* **3352**: *string* = "AMERICAN INTL RENT-A-CAR"

* **3353**: *string* = "BROOKS RENT-A-CAR"

* **3354**: *string* = "ACTION AUTO RENTAL"

* **3355**: *string* = "Car Rental"

* **3356**: *string* = "Car Rental"

* **3357**: *string* = "HERTZ RENT-A-CAR"

* **3358**: *string* = "Car Rental"

* **3359**: *string* = "PAYLESS CAR RENTAL"

* **3360**: *string* = "SNAPPY CAR RENTAL"

* **3361**: *string* = "AIRWAYS RENT-A-CAR"

* **3362**: *string* = "ALTRA AUTO RENTAL"

* **3363**: *string* = "Car Rental"

* **3364**: *string* = "AGENCY RENT-A-CAR"

* **3365**: *string* = "Car Rental"

* **3366**: *string* = "BUDGET RENT-A-CAR"

* **3367**: *string* = "Car Rental"

* **3368**: *string* = "HOLIDAY RENT-A-WRECK"

* **3369**: *string* = "Car Rental"

* **3370**: *string* = "RENT-A-WRECK"

* **3371**: *string* = "Car Rental"

* **3372**: *string* = "Car Rental"

* **3373**: *string* = "Car Rental"

* **3374**: *string* = "Car Rental"

* **3375**: *string* = "Car Rental"

* **3376**: *string* = "AJAX RENT-A-CAR"

* **3377**: *string* = "Car Rental"

* **3378**: *string* = "Car Rental"

* **3379**: *string* = "Car Rental"

* **3380**: *string* = "Car Rental"

* **3381**: *string* = "EUROP CAR"

* **3382**: *string* = "Car Rental"

* **3383**: *string* = "Car Rental"

* **3384**: *string* = "Car Rental"

* **3385**: *string* = "TROPICAL RENT-A-CAR"

* **3386**: *string* = "SHOWCASE RENTAL CARS"

* **3387**: *string* = "ALAMO RENT-A-CAR"

* **3388**: *string* = "Car Rental"

* **3389**: *string* = "AVIS RENT-A-CAR"

* **3390**: *string* = "DOLLAR RENT-A-CAR"

* **3391**: *string* = "EUROPE BY CAR"

* **3392**: *string* = "Car Rental"

* **3393**: *string* = "NATIONAL CAR RENTAL"

* **3394**: *string* = "KEMWELL GROUP RENT-A-CAR"

* **3395**: *string* = "THRIFTY RENT-A-CAR"

* **3396**: *string* = "TILDEN TENT-A-CAR"

* **3397**: *string* = "Car Rental"

* **3398**: *string* = "ECONO-CAR RENT-A-CAR"

* **3399**: *string* = "Car Rental"

* **3400**: *string* = "AUTO HOST COST CAR RENTALS"

* **3401**: *string* = "Car Rental"

* **3402**: *string* = "Car Rental"

* **3403**: *string* = "Car Rental"

* **3404**: *string* = "Car Rental"

* **3405**: *string* = "ENTERPRISE RENT-A-CAR"

* **3406**: *string* = "Car Rental"

* **3407**: *string* = "Car Rental"

* **3408**: *string* = "Car Rental"

* **3409**: *string* = "GENERAL RENT-A-CAR"

* **3410**: *string* = "Car Rental"

* **3411**: *string* = "Car Rental"

* **3412**: *string* = "A-1 RENT-A-CAR"

* **3413**: *string* = "Car Rental"

* **3414**: *string* = "GODFREY NATL RENT-A-CAR"

* **3415**: *string* = "Car Rental"

* **3416**: *string* = "Car Rental"

* **3417**: *string* = "Car Rental"

* **3418**: *string* = "Car Rental"

* **3419**: *string* = "ALPHA RENT-A-CAR"

* **3420**: *string* = "ANSA INTL RENT-A-CAR"

* **3421**: *string* = "ALLSTAE RENT-A-CAR"

* **3422**: *string* = "Car Rental"

* **3423**: *string* = "AVCAR RENT-A-CAR"

* **3424**: *string* = "Car Rental"

* **3425**: *string* = "AUTOMATE RENT-A-CAR"

* **3426**: *string* = "Car Rental"

* **3427**: *string* = "AVON RENT-A-CAR"

* **3428**: *string* = "CAREY RENT-A-CAR"

* **3429**: *string* = "INSURANCE RENT-A-CAR"

* **3430**: *string* = "MAJOR RENT-A-CAR"

* **3431**: *string* = "REPLACEMENT RENT-A-CAR"

* **3432**: *string* = "RESERVE RENT-A-CAR"

* **3433**: *string* = "UGLY DUCKLING RENT-A-CAR"

* **3434**: *string* = "USA RENT-A-CAR"

* **3435**: *string* = "VALUE RENT-A-CAR"

* **3436**: *string* = "AUTOHANSA RENT-A-CAR"

* **3437**: *string* = "CITE RENT-A-CAR"

* **3438**: *string* = "INTERENT RENT-A-CAR"

* **3439**: *string* = "MILLEVILLE RENT-A-CAR"

* **3440**: *string* = "VIA ROUTE RENT-A-CAR"

* **3441**: *string* = "Car Rental"

* **3501**: *string* = "HOLIDAY INNS"

* **3502**: *string* = "BEST WESTERN HOTELS"

* **3503**: *string* = "SHERATON HOTELS"

* **3504**: *string* = "HILTON HOTELS"

* **3505**: *string* = "FORTE HOTELS"

* **3506**: *string* = "GOLDEN TULIP HOTELS"

* **3507**: *string* = "FRIENDSHIP INNS"

* **3508**: *string* = "QUALITY INNS"

* **3509**: *string* = "MARRIOTT HOTELS"

* **3510**: *string* = "DAYS INN"

* **3511**: *string* = "ARABELLA HOTELS"

* **3512**: *string* = "INTER-CONTINENTAL HOTELS"

* **3513**: *string* = "WESTIN HOTELS"

* **3514**: *string* = "Hotels/Motels/Inns/Resorts"

* **3515**: *string* = "RODEWAY INNS"

* **3516**: *string* = "LA QUINTA MOTOR INNS"

* **3517**: *string* = "AMERICANA HOTELS"

* **3518**: *string* = "SOL HOTELS"

* **3519**: *string* = "PULLMAN INTERNATIONAL HOTELS"

* **3520**: *string* = "MERIDIEN HOTELS"

* **3521**: *string* = "CREST HOTELS (see FORTE HOTELS)"

* **3522**: *string* = "TOKYO HOTEL"

* **3523**: *string* = "PENNSULA HOTEL"

* **3524**: *string* = "WELCOMGROUP HOTELS"

* **3525**: *string* = "DUNFEY HOTELS"

* **3526**: *string* = "Hotels/Motels/Inns/Resorts"

* **3527**: *string* = "DOWNTOWNER-PASSPORT HOTEL"

* **3528**: *string* = "RED LION HOTELS"

* **3529**: *string* = "CP HOTELS"

* **3530**: *string* = "RENAISSANCE HOTELS"

* **3531**: *string* = "ASTIR HOTELS"

* **3532**: *string* = "SUN ROUTE HOTELS"

* **3533**: *string* = "HOTEL IBIS"

* **3534**: *string* = "SOUTHERN PACIFIC HOTELS"

* **3535**: *string* = "HILTON INTERNATIONAL"

* **3536**: *string* = "AMFAC HOTELS"

* **3537**: *string* = "ANA HOTEL"

* **3538**: *string* = "CONCORDE HOTELS"

* **3539**: *string* = "Hotels/Motels/Inns/Resorts"

* **3540**: *string* = "IBEROTEL HOTELS"

* **3541**: *string* = "HOTEL OKURA"

* **3542**: *string* = "ROYAL HOTELS"

* **3543**: *string* = "FOUR SEASONS HOTELS"

* **3544**: *string* = "CIGA HOTELS"

* **3545**: *string* = "SHANGRI-LA INTERNATIONAL"

* **3546**: *string* = "Hotels/Motels/Inns/Resorts"

* **3547**: *string* = "Hotels/Motels/Inns/Resorts"

* **3548**: *string* = "HOTELES MELIA"

* **3549**: *string* = "AUBERGE DES GOVERNEURS"

* **3550**: *string* = "REGAL 8 INNS"

* **3551**: *string* = "Hotels/Motels/Inns/Resorts"

* **3552**: *string* = "COAST HOTELS"

* **3553**: *string* = "PARK INNS INTERNATIONAL"

* **3554**: *string* = "Hotels/Motels/Inns/Resorts"

* **3555**: *string* = "Hotels/Motels/Inns/Resorts"

* **3556**: *string* = "Hotels/Motels/Inns/Resorts"

* **3557**: *string* = "Hotels/Motels/Inns/Resorts"

* **3558**: *string* = "JOLLY HOTELS"

* **3559**: *string* = "Hotels/Motels/Inns/Resorts"

* **3560**: *string* = "Hotels/Motels/Inns/Resorts"

* **3561**: *string* = "Hotels/Motels/Inns/Resorts"

* **3562**: *string* = "COMFORT INNS"

* **3563**: *string* = "JOURNEY’S END MOTLS"

* **3564**: *string* = "Hotels/Motels/Inns/Resorts"

* **3565**: *string* = "RELAX INNS"

* **3566**: *string* = "Hotels/Motels/Inns/Resorts"

* **3567**: *string* = "Hotels/Motels/Inns/Resorts"

* **3568**: *string* = "LADBROKE HOTELS"

* **3569**: *string* = "Hotels/Motels/Inns/Resorts"

* **3570**: *string* = "FORUM HOTELS"

* **3571**: *string* = "Hotels/Motels/Inns/Resorts"

* **3572**: *string* = "MIYAKO HOTELS"

* **3573**: *string* = "SANDMAN HOTELS"

* **3574**: *string* = "VENTURE INNS"

* **3575**: *string* = "VAGABOND HOTELS"

* **3576**: *string* = "Hotels/Motels/Inns/Resorts"

* **3577**: *string* = "MANDARIN ORIENTAL HOTEL"

* **3578**: *string* = "Hotels/Motels/Inns/Resorts"

* **3579**: *string* = "HOTEL MERCURE"

* **3580**: *string* = "Hotels/Motels/Inns/Resorts"

* **3581**: *string* = "DELTA HOTEL"

* **3582**: *string* = "Hotels/Motels/Inns/Resorts"

* **3583**: *string* = "SAS HOTELS"

* **3584**: *string* = "PRINCESS HOTELS INTERNATIONAL"

* **3585**: *string* = "HUNGAR HOTELS"

* **3586**: *string* = "SOKOS HOTELS"

* **3587**: *string* = "DORAL HOTELS"

* **3588**: *string* = "HELMSLEY HOTELS"

* **3589**: *string* = "Hotels/Motels/Inns/Resorts"

* **3590**: *string* = "FAIRMONT HOTELS"

* **3591**: *string* = "SONESTA HOTELS"

* **3592**: *string* = "OMNI HOTELS"

* **3593**: *string* = "CUNARD HOTELS"

* **3594**: *string* = "Hotels/Motels/Inns/Resorts"

* **3595**: *string* = "HOSPITALITY INTERNATIONAL"

* **3596**: *string* = "Hotels/Motels/Inns/Resorts"

* **3597**: *string* = "Hotels/Motels/Inns/Resorts"

* **3598**: *string* = "REGENT INTERNATIONAL HOTELS"

* **3599**: *string* = "PANNONIA HOTELS"

* **3600**: *string* = "Hotels/Motels/Inns/Resorts"

* **3601**: *string* = "Hotels/Motels/Inns/Resorts"

* **3602**: *string* = "Hotels/Motels/Inns/Resorts"

* **3603**: *string* = "NOAH’S HOTELS"

* **3604**: *string* = "Hotels/Motels/Inns/Resorts"

* **3605**: *string* = "Hotels/Motels/Inns/Resorts"

* **3606**: *string* = "Hotels/Motels/Inns/Resorts"

* **3607**: *string* = "Hotels/Motels/Inns/Resorts"

* **3608**: *string* = "Hotels/Motels/Inns/Resorts"

* **3609**: *string* = "Hotels/Motels/Inns/Resorts"

* **3610**: *string* = "Hotels/Motels/Inns/Resorts"

* **3611**: *string* = "Hotels/Motels/Inns/Resorts"

* **3612**: *string* = "MOVENPICK HOTELS"

* **3613**: *string* = "Hotels/Motels/Inns/Resorts"

* **3614**: *string* = "Hotels/Motels/Inns/Resorts"

* **3615**: *string* = "TRAVELODGE"

* **3616**: *string* = "Hotels/Motels/Inns/Resorts"

* **3617**: *string* = "Hotels/Motels/Inns/Resorts"

* **3618**: *string* = "Hotels/Motels/Inns/Resorts"

* **3619**: *string* = "Hotels/Motels/Inns/Resorts"

* **3620**: *string* = "TELFORD INTERNATIONAL"

* **3621**: *string* = "Hotels/Motels/Inns/Resorts"

* **3622**: *string* = "MERLIN HOTELS"

* **3623**: *string* = "DORINT HOTELS"

* **3624**: *string* = "Hotels/Motels/Inns/Resorts"

* **3625**: *string* = "HOTLE UNIVERSALE"

* **3626**: *string* = "PRINCE HOTELS"

* **3627**: *string* = "Hotels/Motels/Inns/Resorts"

* **3628**: *string* = "Hotels/Motels/Inns/Resorts"

* **3629**: *string* = "DAN HOTELS"

* **3630**: *string* = "Hotels/Motels/Inns/Resorts"

* **3631**: *string* = "Hotels/Motels/Inns/Resorts"

* **3632**: *string* = "Hotels/Motels/Inns/Resorts"

* **3633**: *string* = "RANK HOTELS"

* **3634**: *string* = "SWISSOTEL"

* **3635**: *string* = "RESO HOTELS"

* **3636**: *string* = "SAROVA HOTELS"

* **3637**: *string* = "RAMADA INNS"

* **3638**: *string* = "HO JO INN"

* **3639**: *string* = "MOUNT CHARLOTTE THISTLE"

* **3640**: *string* = "HYATT HOTEL"

* **3641**: *string* = "SOFITEL HOTELS"

* **3642**: *string* = "NOVOTEL HOTELS"

* **3643**: *string* = "STEIGENBERGER HOTELS"

* **3644**: *string* = "ECONO LODGES"

* **3645**: *string* = "QUEENS MOAT HOUSES"

* **3646**: *string* = "SWALLOW HOTELS"

* **3647**: *string* = "HUSA HOTELS"

* **3648**: *string* = "DE VERE HOTELS"

* **3649**: *string* = "RADISSON HOTELS"

* **3650**: *string* = "RED ROOK INNS"

* **3651**: *string* = "IMPERIAL LONDON HOTEL"

* **3652**: *string* = "EMBASSY HOTELS"

* **3653**: *string* = "PENTA HOTELS"

* **3654**: *string* = "LOEWS HOTELS"

* **3655**: *string* = "SCANDIC HOTELS"

* **3656**: *string* = "SARA HOTELS"

* **3657**: *string* = "OBEROI HOTELS"

* **3658**: *string* = "OTANI HOTELS"

* **3659**: *string* = "TAJ HOTELS INTERNATIONAL"

* **3660**: *string* = "KNIGHTS INNS"

* **3661**: *string* = "METROPOLE HOTELS"

* **3662**: *string* = "Hotels/Motels/Inns/Resorts"

* **3663**: *string* = "HOTELES EL PRESIDENTS"

* **3664**: *string* = "FLAG INN"

* **3665**: *string* = "HAMPTON INNS"

* **3666**: *string* = "STAKIS HOTELS"

* **3667**: *string* = "Hotels/Motels/Inns/Resorts"

* **3668**: *string* = "MARITIM HOTELS"

* **3669**: *string* = "Hotels/Motels/Inns/Resorts"

* **3670**: *string* = "ARCARD HOTELS"

* **3671**: *string* = "ARCTIA HOTELS"

* **3672**: *string* = "CAMPANIEL HOTELS"

* **3673**: *string* = "IBUSZ HOTELS"

* **3674**: *string* = "RANTASIPI HOTELS"

* **3675**: *string* = "INTERHOTEL CEDOK"

* **3676**: *string* = "Hotels/Motels/Inns/Resorts"

* **3677**: *string* = "CLIMAT DE FRANCE HOTELS"

* **3678**: *string* = "CUMULUS HOTELS"

* **3679**: *string* = "DANUBIUS HOTEL"

* **3680**: *string* = "Hotels/Motels/Inns/Resorts"

* **3681**: *string* = "ADAMS MARK HOTELS"

* **3682**: *string* = "ALLSTAR INNS"

* **3683**: *string* = "Hotels/Motels/Inns/Resorts"

* **3684**: *string* = "BUDGET HOST INNS"

* **3685**: *string* = "BUDGETEL HOTELS"

* **3686**: *string* = "SUISSE CHALETS"

* **3687**: *string* = "CLARION HOTELS"

* **3688**: *string* = "COMPRI HOTELS"

* **3689**: *string* = "CONSORT HOTELS"

* **3690**: *string* = "COURTYARD BY MARRIOTT"

* **3691**: *string* = "DILLION INNS"

* **3692**: *string* = "DOUBLETREE HOTELS"

* **3693**: *string* = "DRURY INNS"

* **3694**: *string* = "ECONOMY INNS OF AMERICA"

* **3695**: *string* = "EMBASSY SUITES"

* **3696**: *string* = "EXEL INNS"

* **3697**: *string* = "FARFIELD HOTELS"

* **3698**: *string* = "HARLEY HOTELS"

* **3699**: *string* = "MIDWAY MOTOR LODGE"

* **3700**: *string* = "MOTEL 6"

* **3701**: *string* = "GUEST QUARTERS (Formally PICKETT SUITE HOTELS)"

* **3702**: *string* = "THE REGISTRY HOTELS"

* **3703**: *string* = "RESIDENCE INNS"

* **3704**: *string* = "ROYCE HOTELS"

* **3705**: *string* = "SANDMAN INNS"

* **3706**: *string* = "SHILO INNS"

* **3707**: *string* = "SHONEY’S INNS"

* **3708**: *string* = "Hotels/Motels/Inns/Resorts"

* **3709**: *string* = "SUPER8 MOTELS"

* **3710**: *string* = "THE RITZ CARLTON HOTELS"

* **3711**: *string* = "FLAG INNS (AUSRALIA)"

* **3712**: *string* = "GOLDEN CHAIN HOTEL"

* **3713**: *string* = "QUALITY PACIFIC HOTEL"

* **3714**: *string* = "FOUR SEASONS HOTEL (AUSTRALIA)"

* **3715**: *string* = "FARIFIELD INN"

* **3716**: *string* = "CARLTON HOTELS"

* **3717**: *string* = "CITY LODGE HOTELS"

* **3718**: *string* = "KAROS HOTELS"

* **3719**: *string* = "PROTEA HOTELS"

* **3720**: *string* = "SOUTHERN SUN HOTELS"

* **3721**: *string* = "HILTON CONRAD"

* **3722**: *string* = "WYNDHAM HOTEL AND RESORTS"

* **3723**: *string* = "RICA HOTELS"

* **3724**: *string* = "INER NOR HOTELS"

* **3725**: *string* = "SEAINES PLANATION"

* **3726**: *string* = "RIO SUITES"

* **3727**: *string* = "BROADMOOR HOTEL"

* **3728**: *string* = "BALLY’S HOTEL AND CASINO"

* **3729**: *string* = "JOHN ASCUAGA’S NUGGET"

* **3730**: *string* = "MGM GRAND HOTEL"

* **3731**: *string* = "HARRAH’S HOTELS AND CASINOS"

* **3732**: *string* = "OPRYLAND HOTEL"

* **3733**: *string* = "BOCA RATON RESORT"

* **3734**: *string* = "HARVEY/BRISTOL HOTELS"

* **3735**: *string* = "Hotels/Motels/Inns/Resorts"

* **3736**: *string* = "COLORADO BELLE/EDGEWATER RESORT"

* **3737**: *string* = "RIVIERA HOTEL AND CASINO"

* **3738**: *string* = "TROPICANA RESORT AND CASINO"

* **3739**: *string* = "WOODSIDE HOTELS AND RESORTS"

* **3740**: *string* = "TOWNPLACE SUITES"

* **3741**: *string* = "MILLENIUM BROADWAY HOTEL"

* **3742**: *string* = "CLUB MED"

* **3743**: *string* = "BILTMORE HOTEL AND SUITES"

* **3744**: *string* = "CAREFREE RESORTS"

* **3745**: *string* = "ST. REGIS HOTEL"

* **3746**: *string* = "THE ELIOT HOTEL"

* **3747**: *string* = "CLUBCORP/CLUB RESORTS"

* **3748**: *string* = "WELESLEY INNS"

* **3749**: *string* = "THE BEVERLY HILLS HOTEL"

* **3750**: *string* = "CROWNE PLAZA HOTELS"

* **3751**: *string* = "HOMEWOOD SUITES"

* **3752**: *string* = "PEABODY HOTELS"

* **3753**: *string* = "GREENBRIAH RESORTS"

* **3754**: *string* = "AMELIA ISLAND PLANATION"

* **3755**: *string* = "THE HOMESTEAD"

* **3756**: *string* = "SOUTH SEAS RESORTS"

* **3757**: *string* = "Hotels/Motels/Inns/Resorts"

* **3758**: *string* = "Hotels/Motels/Inns/Resorts"

* **3759**: *string* = "Hotels/Motels/Inns/Resorts"

* **3760**: *string* = "Hotels/Motels/Inns/Resorts"

* **3761**: *string* = "Hotels/Motels/Inns/Resorts"

* **3762**: *string* = "Hotels/Motels/Inns/Resorts"

* **3763**: *string* = "Hotels/Motels/Inns/Resorts"

* **3764**: *string* = "Hotels/Motels/Inns/Resorts"

* **3765**: *string* = "Hotels/Motels/Inns/Resorts"

* **3766**: *string* = "Hotels/Motels/Inns/Resorts"

* **3767**: *string* = "Hotels/Motels/Inns/Resorts"

* **3768**: *string* = "Hotels/Motels/Inns/Resorts"

* **3769**: *string* = "Hotels/Motels/Inns/Resorts"

* **3770**: *string* = "Hotels/Motels/Inns/Resorts"

* **3771**: *string* = "Hotels/Motels/Inns/Resorts"

* **3772**: *string* = "Hotels/Motels/Inns/Resorts"

* **3773**: *string* = "Hotels/Motels/Inns/Resorts"

* **3774**: *string* = "Hotels/Motels/Inns/Resorts"

* **3775**: *string* = "Hotels/Motels/Inns/Resorts"

* **3776**: *string* = "Hotels/Motels/Inns/Resorts"

* **3777**: *string* = "Hotels/Motels/Inns/Resorts"

* **3778**: *string* = "Hotels/Motels/Inns/Resorts"

* **3779**: *string* = "Hotels/Motels/Inns/Resorts"

* **3780**: *string* = "Hotels/Motels/Inns/Resorts"

* **3781**: *string* = "Hotels/Motels/Inns/Resorts"

* **3782**: *string* = "Hotels/Motels/Inns/Resorts"

* **3783**: *string* = "Hotels/Motels/Inns/Resorts"

* **3784**: *string* = "Hotels/Motels/Inns/Resorts"

* **3785**: *string* = "Hotels/Motels/Inns/Resorts"

* **3786**: *string* = "Hotels/Motels/Inns/Resorts"

* **3787**: *string* = "Hotels/Motels/Inns/Resorts"

* **3788**: *string* = "Hotels/Motels/Inns/Resorts"

* **3789**: *string* = "Hotels/Motels/Inns/Resorts"

* **3790**: *string* = "Hotels/Motels/Inns/Resorts"

* **3816**: *string* = ""

* **3835**: *string* = "* MASTERS ECONOMY INNS"

* **4011**: *string* = "Railroads"

* **4111**: *string* = "Local/Suburban Commuter Passenger Transportation – Railroads, Feries, Local Water Transportation."

* **4112**: *string* = "Passenger Railways"

* **4119**: *string* = "Ambulance Services"

* **4121**: *string* = "Taxicabs and Limousines"

* **4131**: *string* = "Bus Lines, Including Charters, Tour Buses"

* **4214**: *string* = "Motor Freight Carriers"

* **4215**: *string* = "Courier Services – Air or Ground"

* **4225**: *string* = "Warehousing, Public"

* **4411**: *string* = "Cruise Lines"

* **4457**: *string* = "Boat Rentals and Leases"

* **4468**: *string* = "Marinas, Marine Service, and Supplies"

* **4511**: *string* = "Airlines, Air Carriers ( not listed elsewhere)"

* **4582**: *string* = "Airports, Airport Terminals"

* **4722**: *string* = "Travel Agencies and Tour Operations"

* **4723**: *string* = "Package Tour Operators (For use in Germany only)"

* **4784**: *string* = "Toll and Bridge Fees"

* **4789**: *string* = "Transportation Services, Not elsewhere classified)"

* **4812**: *string* = "Telecommunications Equipment including telephone sales"

* **4814**: *string* = "Fax services"

* **4815**: *string* = "VisaPhone"

* **4816**: *string* = "Computer Network Services"

* **4821**: *string* = "Telegraph services"

* **4829**: *string* = "Money Orders – Wire Transfer"

* **4899**: *string* = "Cable and other pay television (previously Cable Services)"

* **4900**: *string* = "Electric, Gas, Sanitary and Water Utilities"

* **5013**: *string* = "Motor vehicle supplies and new parts"

* **5021**: *string* = "Office and Commercial Furniture"

* **5039**: *string* = "Construction Materials, Not Elsewhere Classified"

* **5044**: *string* = "Office, Photographic, Photocopy, and Microfilm Equipment"

* **5045**: *string* = "Computers, Computer Peripheral Equipment, Software"

* **5046**: *string* = "Commercial Equipment, Not Elsewhere Classified"

* **5047**: *string* = "Medical, Dental Ophthalmic, Hospital Equipment and Supplies"

* **5051**: *string* = "Metal Service Centers and Offices"

* **5065**: *string* = "Electrical Parts and Equipment"

* **5072**: *string* = "Hardware Equipment and Supplies"

* **5074**: *string* = "Plumbing and Heating Equipment and Supplies"

* **5085**: *string* = "Industrial Supplies, Not Elsewhere Classified"

* **5094**: *string* = "Precious Stones and Metals, Watches and Jewelry"

* **5099**: *string* = "Durable Goods, Not Elsewhere Classified"

* **5111**: *string* = "Stationery, Office Supplies, Printing, and Writing Paper"

* **5122**: *string* = "Drugs, Drug Proprietors, and Druggist’s Sundries"

* **5131**: *string* = "Piece Goods, Notions, and Other Dry Goods"

* **5137**: *string* = "Men’s Women’s and Children’s Uniforms and Commercial Clothing"

* **5139**: *string* = "Commercial Footwear"

* **5169**: *string* = "Chemicals and Allied Products, Not Elsewhere Classified"

* **5172**: *string* = "Petroleum and Petroleum Products"

* **5192**: *string* = "Books, Periodicals, and Newspapers"

* **5193**: *string* = "Florists’ Supplies, Nursery Stock and Flowers"

* **5198**: *string* = "Paints, Varnishes, and Supplies"

* **5199**: *string* = "Non-durable Goods, Not Elsewhere Classified"

* **5200**: *string* = "Home Supply Warehouse Stores"

* **5211**: *string* = "Lumber and Building Materials Stores"

* **5231**: *string* = "Wallpaper Stores"

* **5251**: *string* = "Hardware Stores"

* **5261**: *string* = "Nurseries – Lawn and Garden Supply Store"

* **5271**: *string* = "Mobile Home Dealers"

* **5300**: *string* = "Wholesale Clubs"

* **5309**: *string* = "Duty Free Store"

* **5310**: *string* = "Discount Stores"

* **5311**: *string* = "Department Stores"

* **5331**: *string* = "Variety Stores"

* **5399**: *string* = "Misc. General Merchandise"

* **5411**: *string* = "Grocery Stores"

* **5422**: *string* = "Meat Provisioners – Freezer and Locker"

* **5441**: *string* = "Candy Stores"

* **5451**: *string* = "Dairy Products Stores"

* **5462**: *string* = "Bakeries"

* **5499**: *string* = "Misc. Food Stores – Convenience Stores and Specialty Markets"

* **5511**: *string* = "Car and Truck Dealers (New and Used) Sales, Service, Repairs, Parts, and Leasing"

* **5521**: *string* = "Automobile and Truck Dealers (Used Only)"

* **5531**: *string* = "Automobile Supply Stores"

* **5532**: *string* = "Automotive Tire Stores"

* **5533**: *string* = "Automotive Parts, Accessories Stores"

* **5541**: *string* = "Service Stations ( with or without ancillary services)"

* **5542**: *string* = "Automated Fuel Dispensers"

* **5551**: *string* = "Boat Dealers"

* **5561**: *string* = "Recreational and Utility Trailers, Camp Dealers"

* **5571**: *string* = "Motorcycle Dealers"

* **5592**: *string* = "Motor Home Dealers"

* **5598**: *string* = "Snowmobile Dealers"

* **5599**: *string* = "Miscellaneous Auto Dealers "

* **5611**: *string* = "Men’s and Boy’s Clothing and Accessories Stores"

* **5621**: *string* = "Women’s Ready-to-Wear Stores"

* **5631**: *string* = "Women’s Accessory and Specialty Shops"

* **5641**: *string* = "Children’s and Infant’s Wear Stores"

* **5651**: *string* = "Family Clothing Stores"

* **5655**: *string* = "Sports Apparel, Riding Apparel Stores"

* **5661**: *string* = "Shoe Stores"

* **5681**: *string* = "Furriers and Fur Shops"

* **5691**: *string* = "Men’s and Women’s Clothing Stores"

* **5697**: *string* = "Tailors, Seamstress, Mending, and Alterations"

* **5698**: *string* = "Wig and Toupee Stores"

* **5699**: *string* = "Miscellaneous Apparel and Accessory Shops"

* **5712**: *string* = "Furniture, Home Furnishings, and Equipment Stores, ExceptAppliances"

* **5713**: *string* = "Floor Covering Stores"

* **5714**: *string* = "Drapery, Window Covering and Upholstery Stores"

* **5718**: *string* = "Fireplace, Fireplace Screens, and Accessories Stores"

* **5719**: *string* = "Miscellaneous Home Furnishing Specialty Stores"

* **5722**: *string* = "Household Appliance Stores"

* **5732**: *string* = "Electronic Sales"

* **5733**: *string* = "Music Stores, Musical Instruments, Piano Sheet Music"

* **5734**: *string* = "Computer Software Stores"

* **5735**: *string* = "Record Shops"

* **5811**: *string* = "Caterers"

* **5812**: *string* = "Eating places and Restaurants"

* **5813**: *string* = "Drinking Places (Alcoholic Beverages), Bars, Taverns, Cocktail lounges, Nightclubs and Discotheques"

* **5814**: *string* = "Fast Food Restaurants"

* **5815**: *string* = ""

* **5816**: *string* = ""

* **5817**: *string* = ""

* **5818**: *string* = ""

* **5832**: *string* = "Antique Shops – Sales, Repairs, and Restoration Services"

* **5912**: *string* = "Drug Stores and Pharmacies"

* **5921**: *string* = "Package Stores – Beer, Wine, and Liquor"

* **5931**: *string* = "Used Merchandise and Secondhand Stores"

* **5932**: *string* = "Antique Shops"

* **5933**: *string* = "Pawn Shops and Salvage Yards"

* **5935**: *string* = "Wrecking and Salvage Yards"

* **5937**: *string* = "Antique Reproductions"

* **5940**: *string* = "Bicycle Shops – Sales and Service"

* **5941**: *string* = "Sporting Goods Stores"

* **5942**: *string* = "Book Stores"

* **5943**: *string* = "Stationery Stores, Office and School Supply Stores"

* **5944**: *string* = "Watch, Clock, Jewelry, and Silverware Stores"

* **5945**: *string* = "Hobby, Toy, and Game Shops"

* **5946**: *string* = "Camera and Photographic Supply Stores"

* **5947**: *string* = "Card Shops, Gift, Novelty, and Souvenir Shops"

* **5948**: *string* = "Leather Goods Stores"

* **5949**: *string* = "Sewing, Needle, Fabric, and Price Goods Stores"

* **5950**: *string* = "Glassware/Crystal Stores"

* **5960**: *string* = "Direct Marketing- Insurance Service"

* **5961**: *string* = "Mail Order Houses Including Catalog Order Stores, Book/Record Clubs (No longer permitted for U.S. original presentments)"

* **5962**: *string* = "Direct Marketing – Travel Related Arrangements Services"

* **5963**: *string* = "Door-to-Door Sales"

* **5964**: *string* = "Direct Marketing – Catalog Merchant"

* **5965**: *string* = "Direct Marketing – Catalog and Catalog and Retail Merchant"

* **5966**: *string* = "Direct Marketing- Outbound Telemarketing Merchant"

* **5967**: *string* = "Direct Marketing – Inbound Teleservices Merchant"

* **5968**: *string* = "Direct Marketing – Continuity/Subscription Merchant"

* **5969**: *string* = "Direct Marketing – Not Elsewhere Classified"

* **5970**: *string* = "Artist’s Supply and Craft Shops"

* **5971**: *string* = "Art Dealers and Galleries"

* **5972**: *string* = "Stamp and Coin Stores – Philatelic and Numismatic Supplies"

* **5973**: *string* = "Religious Goods Stores"

* **5975**: *string* = "Hearing Aids – Sales, Service, and Supply Stores"

* **5976**: *string* = "Orthopedic Goods Prosthetic Devices"

* **5977**: *string* = "Cosmetic Stores"

* **5978**: *string* = "Typewriter Stores – Sales, Rental, Service"

* **5983**: *string* = "Fuel – Fuel Oil, Wood, Coal, Liquefied Petroleum"

* **5992**: *string* = "Florists"

* **5993**: *string* = "Cigar Stores and Stands"

* **5994**: *string* = "News Dealers and Newsstands"

* **5995**: *string* = "Pet Shops, Pet Foods, and Supplies Stores"

* **5996**: *string* = "Swimming Pools – Sales, Service, and Supplies"

* **5997**: *string* = "Electric Razor Stores – Sales and Service"

* **5998**: *string* = "Tent and Awning Shops"

* **5999**: *string* = "Miscellaneous and Specialty Retail Stores"

* **6010**: *string* = "Financial Institutions – Manual Cash Disbursements"

* **6011**: *string* = "Financial Institutions – Manual Cash Disbursements"

* **6012**: *string* = "Financial Institutions – Merchandise and Services"

* **6051**: *string* = "Non-Financial Institutions – Foreign Currency, Money Orders (not wire transfer) and Travelers Cheques"

* **6211**: *string* = "Security Brokers/Dealers"

* **6300**: *string* = "Insurance Sales, Underwriting, and Premiums"

* **6381**: *string* = "Insurance Premiums, (no longer valid for first presentment work)"

* **6399**: *string* = "Insurance, Not Elsewhere Classified ( no longer valid forfirst presentment work)"

* **6513**: *string* = "Real Estate Agents and Managers - Rentals"

* **7011**: *string* = "Lodging – Hotels, Motels, Resorts, Central Reservation Services (not elsewhere classified)"

* **7012**: *string* = "Timeshares"

* **7032**: *string* = "Sporting and Recreational Camps"

* **7033**: *string* = "Trailer Parks and Camp Grounds"

* **7210**: *string* = "Laundry, Cleaning, and Garment Services"

* **7211**: *string* = "Laundry – Family and Commercial"

* **7216**: *string* = "Dry Cleaners"

* **7217**: *string* = "Carpet and Upholstery Cleaning"

* **7221**: *string* = "Photographic Studios"

* **7230**: *string* = "Barber and Beauty Shops"

* **7251**: *string* = "Shop Repair Shops and Shoe Shine Parlors, and Hat Cleaning Shops"

* **7261**: *string* = "Funeral Service and Crematories"

* **7273**: *string* = "Dating and Escort Services"

* **7276**: *string* = "Tax Preparation Service"

* **7277**: *string* = "Counseling Service – Debt, Marriage, Personal"

* **7278**: *string* = "Buying/Shopping Services, Clubs"

* **7296**: *string* = "Clothing Rental – Costumes, Formal Wear, Uniforms"

* **7297**: *string* = "Massage Parlors"

* **7298**: *string* = "Health and Beauty Shops"

* **7299**: *string* = "Miscellaneous Personal Services ( not elsewhere classifies)"

* **7311**: *string* = "Advertising Services"

* **7321**: *string* = "Consumer Credit Reporting Agencies"

* **7332**: *string* = "Blueprinting and Photocopying Services"

* **7333**: *string* = "Commercial Photography, Art and Graphics"

* **7338**: *string* = "Quick Copy, Reproduction and Blueprinting Services"

* **7339**: *string* = "Stenographic and Secretarial Support Services"

* **7342**: *string* = "Exterminating and Disinfecting Services"

* **7349**: *string* = "Cleaning and Maintenance, Janitorial Services"

* **7361**: *string* = "Employment Agencies, Temporary Help Services"

* **7372**: *string* = "Computer Programming, Integrated Systems Design and Data Processing Services"

* **7375**: *string* = "Information Retrieval Services"

* **7379**: *string* = "Computer Maintenance and Repair Services, Not Elsewhere Classified"

* **7392**: *string* = "Management, Consulting, and Public Relations Services"

* **7393**: *string* = "Protective and Security Services – Including Armored Carsand Guard Dogs"

* **7394**: *string* = "Equipment Rental and Leasing Services, Tool Rental, Furniture Rental, and Appliance Rental"

* **7395**: *string* = "Photofinishing Laboratories, Photo Developing"

* **7399**: *string* = "Business Services, Not Elsewhere Classified"

* **7511**: *string* = "Truck Stop"

* **7512**: *string* = "Car Rental Companies ( Not Listed Below)"

* **7513**: *string* = "Truck and Utility Trailer Rentals"

* **7519**: *string* = "Motor Home and Recreational Vehicle Rentals"

* **7523**: *string* = "Automobile Parking Lots and Garages"

* **7531**: *string* = "Automotive Body Repair Shops"

* **7534**: *string* = "Tire Re-treading and Repair Shops"

* **7535**: *string* = "Paint Shops – Automotive"

* **7538**: *string* = "Automotive Service Shops"

* **7542**: *string* = "Car Washes"

* **7549**: *string* = "Towing Services"

* **7622**: *string* = "Radio Repair Shops"

* **7623**: *string* = "Air Conditioning and Refrigeration Repair Shops"

* **7629**: *string* = "Electrical And Small Appliance Repair Shops"

* **7631**: *string* = "Watch, Clock, and Jewelry Repair"

* **7641**: *string* = "Furniture, Furniture Repair, and Furniture Refinishing"

* **7692**: *string* = "Welding Repair"

* **7699**: *string* = "Repair Shops and Related Services –Miscellaneous"

* **7800**: *string* = ""

* **7801**: *string* = ""

* **7802**: *string* = ""

* **7829**: *string* = "Motion Pictures and Video Tape Production and Distribution"

* **7832**: *string* = "Motion Picture Theaters"

* **7841**: *string* = "Video Tape Rental Stores"

* **7911**: *string* = "Dance Halls, Studios and Schools"

* **7922**: *string* = "Theatrical Producers (Except Motion Pictures), Ticket Agencies"

* **7929**: *string* = "Bands, Orchestras, and Miscellaneous Entertainers (Not Elsewhere Classified)"

* **7932**: *string* = "Billiard and Pool Establishments"

* **7933**: *string* = "Bowling Alleys"

* **7941**: *string* = "Commercial Sports, Athletic Fields, Professional Sport Clubs, and Sport Promoters"

* **7991**: *string* = "Tourist Attractions and Exhibits"

* **7992**: *string* = "Golf Courses – Public"

* **7993**: *string* = "Video Amusement Game Supplies"

* **7994**: *string* = "Video Game Arcades/Establishments"

* **7995**: *string* = "Betting (including Lottery Tickets, Casino Gaming Chips, Off-track Betting and Wagers at Race Tracks)"

* **7996**: *string* = "Amusement Parks, Carnivals, Circuses, Fortune Tellers"

* **7997**: *string* = "Membership Clubs (Sports, Recreation, Athletic), Country Clubs, and Private Golf Courses"

* **7998**: *string* = "Aquariums, Sea-aquariums, Dolphinariums"

* **7999**: *string* = "Recreation Services (Not Elsewhere Classified)"

* **8011**: *string* = "Doctors and Physicians (Not Elsewhere Classified)"

* **8021**: *string* = "Dentists and Orthodontists"

* **8031**: *string* = "Osteopaths"

* **8041**: *string* = "Chiropractors"

* **8042**: *string* = "Optometrists and Ophthalmologists"

* **8043**: *string* = "Opticians, Opticians Goods and Eyeglasses"

* **8044**: *string* = "Opticians, Optical Goods, and Eyeglasses (no longer validfor first presentments)"

* **8049**: *string* = "Podiatrists and Chiropodists"

* **8050**: *string* = "Nursing and Personal Care Facilities"

* **8062**: *string* = "Hospitals"

* **8071**: *string* = "Medical and Dental Laboratories"

* **8099**: *string* = "Medical Services and Health Practitioners (Not Elsewhere Classified)"

* **8111**: *string* = "Legal Services and Attorneys"

* **8211**: *string* = "Elementary and Secondary Schools"

* **8220**: *string* = "Colleges, Junior Colleges, Universities, and ProfessionalSchools"

* **8241**: *string* = "Correspondence Schools"

* **8244**: *string* = "Business and Secretarial Schools"

* **8249**: *string* = "Vocational Schools and Trade Schools"

* **8299**: *string* = "Schools and Educational Services ( Not Elsewhere Classified)"

* **8351**: *string* = "Child Care Services"

* **8398**: *string* = "Charitable and Social Service Organizations"

* **8641**: *string* = "Civic, Fraternal, and Social Associations"

* **8651**: *string* = "Political Organizations"

* **8661**: *string* = "Religious Organizations"

* **8675**: *string* = "Automobile Associations"

* **8699**: *string* = "Membership Organizations ( Not Elsewhere Classified)"

* **8734**: *string* = "Testing Laboratories ( non-medical)"

* **8911**: *string* = "Architectural – Engineering and Surveying Services"

* **8931**: *string* = "Accounting, Auditing, and Bookkeeping Services"

* **8999**: *string* = "Professional Services ( Not Elsewhere Defined)"

* **9211**: *string* = "Court Costs, including Alimony and Child Support"

* **9222**: *string* = "Fines"

* **9223**: *string* = "Bail and Bond Payments"

* **9311**: *string* = "Tax Payments"

* **9399**: *string* = "Government Services ( Not Elsewhere Classified)"

* **9402**: *string* = "Postal Services – Government Only"

* **9405**: *string* = "Intra – Government Transactions"

* **9700**: *string* = "Automated Referral Service ( For Visa Only)"

* **9701**: *string* = "Visa Credential Service ( For Visa Only)"

* **9702**: *string* = "GCAS Emergency Services ( For Visa Only)"

* **9950**: *string* = "Intra – Company Purchases ( For Visa Only)"

___

### `Const` MERCHANT

• **MERCHANT**: *["lib/merchantID"](_lib_merchantid_.md)* = LIST_MERCHANTS

Defined in HKQR/config.ts:15

___

### `Const` PARTICIPANT

• **PARTICIPANT**: *object* = LIST_PARTICIPANTS

Defined in HKQR/config.ts:16

#### Type declaration:

* **003**: *string* = "STANDARD CHARTERED BANK (HONG KONG) LIMITED"

* **004**: *string* = "The Hongkong and Shanghai Banking Corporation Limited"

* **005**: *string* = "Credit Agricole Corporate and Investment Bank"

* **006**: *string* = "Citibank N.A. Hong Kong"

* **007**: *string* = "JPMorgan Chase Bank, N.A."

* **008**: *string* = "NatWest Markets Plc Hong Kong Branch"

* **009**: *string* = "China Construction Bank (Asia) Corporation Limited"

* **012**: *string* = "Bank of China (Hong Kong) Limited"

* **014**: *string* = "Bank of China (Hong Kong) Limited"

* **015**: *string* = "The Bank of East Asia, Limited"

* **016**: *string* = "DBS Bank (Hong Kong) Ltd."

* **018**: *string* = "CHINA CITIC BANK INTERNATIONAL LIMITED"

* **019**: *string* = "Bank of China (Hong Kong) Limited"

* **020**: *string* = "CMB Wing Lung Bank Limited"

* **022**: *string* = "OVERSEA - CHINESE BANKING CORPORATION LIMITED"

* **024**: *string* = "Hang Seng Bank Ltd."

* **025**: *string* = "Shanghai Commercial Bank Limited"

* **026**: *string* = "Bank of China (Hong Kong) Limited"

* **027**: *string* = "Bank of Communications Co., Ltd. Hong Kong Branch"

* **028**: *string* = "Public Bank (Hong Kong) Limited"

* **029**: *string* = "INDUSTRIAL AND COMMERCIAL BANK OF CHINA (ASIA) LIMITED"

* **030**: *string* = "Bank of China (Hong Kong) Limited"

* **031**: *string* = "Bank of China (Hong Kong) Limited"

* **032**: *string* = "DBS Bank (Hong Kong) Ltd."

* **033**: *string* = "Bank of China (Hong Kong) Limited"

* **035**: *string* = "OCBC Wing Hang Bank Limited"

* **036**: *string* = "Bank of China (Hong Kong) Limited"

* **038**: *string* = "Tai Yau Bank Limited"

* **039**: *string* = "Chiyu Banking Corporation Limited"

* **040**: *string* = "Dah Sing Bank, Limited"

* **041**: *string* = "Chong Hing Bank Limited"

* **043**: *string* = "Nanyang Commercial Bank, Limited"

* **044**: *string* = "OCBC Wing Hang Bank Limited"

* **045**: *string* = "UCO BANK HONG KONG"

* **046**: *string* = "KEB HANA BANK"

* **047**: *string* = "MUFG Bank, Ltd."

* **049**: *string* = "BANGKOK BANK PUBLIC COMPANY LIMITED"

* **050**: *string* = "INDIAN OVERSEAS BANK"

* **051**: *string* = "CHINA CITIC BANK INTERNATIONAL LIMITED"

* **052**: *string* = "DBS Bank (Hong Kong) Ltd."

* **054**: *string* = "Deutsche Bank AG Hong Kong Branch"

* **055**: *string* = "Bank of America N.A."

* **056**: *string* = "BNP PARIBAS HONG KONG BRANCH"

* **058**: *string* = "BANK OF INDIA"

* **060**: *string* = "National Bank of Pakistan"

* **061**: *string* = "TAI SANG BANK LTD."

* **063**: *string* = "Malayan Banking Berhad Hong Kong Branch"

* **064**: *string* = "Bank of China (Hong Kong) Limited"

* **065**: *string* = "Sumitomo Mitsui Banking Corporation"

* **066**: *string* = "PT. BANK NEGARA INDONESIA (PERSERO) TBK."

* **067**: *string* = "BDO UNIBANK, INC."

* **070**: *string* = "Bank of China (Hong Kong) Limited"

* **071**: *string* = "United Overseas Bank Limited"

* **072**: *string* = "INDUSTRIAL AND COMMERCIAL BANK OF CHINA (ASIA) LIMITED"

* **074**: *string* = "Barclays Bank PLC"

* **076**: *string* = "The Bank of Nova Scotia"

* **080**: *string* = "Royal Bank of Canada, Hong Kong Branch"

* **081**: *string* = "SOCIETE GENERALE HONGKONG BRANCH"

* **082**: *string* = "STATE BANK OF INDIA"

* **085**: *string* = "Toronto Dominion Bank"

* **086**: *string* = "BANK OF  MONTREAL"

* **092**: *string* = "CANADIAN IMPERIAL BANK OF COMMERCE"

* **097**: *string* = "Commerzbank AG, Hong Kong Branch"

* **103**: *string* = "UBS AG Hong Kong"

* **109**: *string* = "Mizuho Bank, Ltd."

* **113**: *string* = "DZ BANK AG DEUTSCHE ZENTRAL- GENOSSENSCHAFTSBANK, FRANKFURT AM MAIN, HONG KONG BRANCH"

* **118**: *string* = "Woori Bank Hong Kong Branch"

* **119**: *string* = "PHILIPPINE NATIONAL BANK"

* **128**: *string* = "Fubon Bank (Hong Kong) Limited"

* **138**: *string* = "MITSUBISHI UFJ TRUST AND BANKING CORPORATION"

* **139**: *string* = "The Bank of New York Mellon, Hong Kong Branch"

* **145**: *string* = "ING Bank N.V., Hong Kong"

* **147**: *string* = "Banco Bilbao Vizcaya Argentaria S.A., Hong Kong Branch"

* **150**: *string* = "National Australia Bank Limited"

* **151**: *string* = "Westpac Banking Corporation"

* **152**: *string* = "Australia and New Zealand Banking Corporation Limited"

* **153**: *string* = "Commonwealth Bank of Australia"

* **161**: *string* = "Intesa Sanpaolo S.p.A., Hong Kong"

* **164**: *string* = "UNICREDIT BANK AG HONG KONG BRANCH"

* **165**: *string* = "SVENSKA HANDELSBANKEN AB (PUBL) HONG KONG BRANCH"

* **170**: *string* = "The Chiba Bank Ltd"

* **178**: *string* = "KBC Bank N.V. Hong Kong Branch"

* **180**: *string* = "Wells Fargo Bank, N.A. Hong Kong Branch"

* **183**: *string* = "COOPERATIEVE RABOBANK U.A."

* **185**: *string* = "DBS Bank Ltd, HK Branch"

* **186**: *string* = "The Shizuoka  Bank, Ltd."

* **188**: *string* = "The Hachijuni Bank Ltd"

* **198**: *string* = "HUA NAN COMMERCIAL BANK LTD. (HK BRANCH)"

* **199**: *string* = "THE SHIGA BANK, LTD."

* **201**: *string* = "BANK OF TAIWAN"

* **202**: *string* = "THE CHUGOKU BANK, LTD."

* **203**: *string* = "FIRST COMMERCIAL BANK LTD HONG KONG BRANCH"

* **206**: *string* = "CHANG HWA COMMERCIAL BANK LIMITED"

* **210**: *string* = "NATIXIS HONG KONG BRANCH"

* **214**: *string* = "INDUSTRIAL AND COMMERCIAL BANK OF CHINA LIMITED"

* **220**: *string* = "State Street Bank & Trust Company, Hong Kong"

* **221**: *string* = "China Construction Bank Corporation, Hong Kong Branch"

* **222**: *string* = "Agricultural Bank of China Limited, Hong Kong Branch"

* **227**: *string* = "Erste Group Bank AG"

* **229**: *string* = "CTBC BANK CO., LTD"

* **230**: *string* = "Taiwan Business Bank, Ltd."

* **233**: *string* = "Credit Suisse AG Hong Kong Branch"

* **236**: *string* = "Cathay United Bank Company, Limited, Hong Kong Branch"

* **237**: *string* = "EFG Bank AG Hong Kong Branch"

* **238**: *string* = "China Merchants Bank Co. Ltd. Hong Kong Branch"

* **239**: *string* = "Taipei Fubon Commercial Bank"

* **241**: *string* = "Bank SinoPac (Hong Kong Branch)"

* **242**: *string* = "Mega International Commercial Bank Co Ltd"

* **243**: *string* = "E.Sun Commercial Bank, Ltd."

* **245**: *string* = "Taishin International Bank Co Ltd"

* **248**: *string* = "Hong Leong Bank Berhad Hong Kong Branch"

* **250**: *string* = "Citibank (Hong Kong) Limited"

* **251**: *string* = "ICICI BANK LIMITED"

* **254**: *string* = "Melli Bank Plc"

* **258**: *string* = "EAST WEST BANK"

* **260**: *string* = "Far Eastern International Bank Co Ltd."

* **261**: *string* = "AXIS BANK LIMITED"

* **262**: *string* = "CANARA BANK HONG KONG"

* **263**: *string* = "CATHAY BANK"

* **264**: *string* = "LAND BANK OF TAIWAN CO.,LTD."

* **265**: *string* = "Taiwan Cooperative Bank"

* **266**: *string* = "PUNJAB NATIONAL BANK"

* **267**: *string* = "BANCO SANTANDER S.A."

* **268**: *string* = "UNION  BANK OF INDIA UNION BANK OF INDIA UNION BANK OF INDIA"

* **269**: *string* = "The Shanghai Commercial & Savings Bank Ltd.Hong Kong Branch."

* **271**: *string* = "INDUSTRIAL BANK OF KOREA"

* **272**: *string* = "Bank of Singapore Limited"

* **273**: *string* = "Shinhan Bank Hong Kong Branch"

* **274**: *string* = "O-Bank Co., Ltd"

* **275**: *string* = "BNP PARIBAS SECURITIES SERVICES"

* **276**: *string* = "China Development Bank Hong Kong Branch"

* **277**: *string* = "First Abu Dhabi Bank PJSC"

* **278**: *string* = "BANK J. SAFRA SARASIN LTD, HONG KONG BRANCH"

* **307**: *string* = "ABN AMRO BANK N.V."

* **308**: *string* = "HDFC BANK LIMITED"

* **309**: *string* = "Union Bancaire Privee, UBP SA"

* **316**: *string* = "Skandinaviska Enskilda Banken AB"

* **320**: *string* = "BANK JULIUS BAER AND CO LTD HONG KONG"

* **324**: *string* = "Credit Industriel et Commercial, Hong Kong Branch"

* **337**: *string* = "Taiwan Shin Kong Commercial Bank Co., LTD."

* **339**: *string* = "CA Indosuez (Switzerland) SA"

* **341**: *string* = "ICBC STANDARD BANK PLC"

* **342**: *string* = "LGT Bank AG., HK Branch"

* **344**: *string* = "MACQUARIE BANK LIMITED"

* **345**: *string* = "Shanghai Pudong Development Bank Co., Ltd."

* **353**: *string* = "China Minsheng Banking Corp., Ltd."

* **357**: *string* = "Pictet & Cie (Europe) S.A., Hong Kong Branch"

* **360**: *string* = "NatWest Markets N.V. Hong Kong Branch"

* **368**: *string* = "China Everbright Bank"

* **371**: *string* = "Sumitomo Mitsui Trust Bank, Limited, Hong Kong Branch"

* **374**: *string* = "CIMB BANK BERHAD"

* **377**: *string* = "Industrial Bank Co., Ltd., Hong Kong Branch"

* **378**: *string* = "YUANTA COMMERCIAL BANK CO.,LTD"

* **379**: *string* = "Mashreq Bank Public Shareholding Company"

* **381**: *string* = "Kookmin Bank"

* **382**: *string* = "Bank of Communications (Hong Kong) Ltd."

* **383**: *string* = "CHINA ZHESHANG BANK CO., LTD."

* **385**: *string* = "Ping An Bank Co., Ltd."

* **386**: *string* = "Hua Xia Bank Co., Limited"

* **387**: *string* = "ZA Bank Limited"

* **388**: *string* = "Livi Bank Limited"

* **389**: *string* = "Mox Bank Limited"

* **390**: *string* = "Welab Bank Limited"

* **391**: *string* = "Fusion Bank Limited"

* **392**: *string* = "Ping An OneConnect Bank (Hong Kong) Limited"

* **393**: *string* = "Ant Bank (Hong Kong) Limited"

* **395**: *string* = "Airstar Bank Limited"

* **929**: *string* = "K & R INTERNATIONAL LIMITED"

* **930**: *string* = "EPAYLINKS TECHNOLOGY CO., LIMITED"

* **931**: *string* = "WeChat Pay Hong Kong Limited"

* **933**: *string* = "33 Financial Services Limited"

* **934**: *string* = "UniCard Solution Limited"

* **935**: *string* = "HKT Payment Limited"

* **947**: *string* = "TNG (Asia) Limited"

* **948**: *string* = "Alipay Financial Services (HK) Limited"

* **949**: *string* = "Octopus Cards Limited"

* **952**: *string* = "Autotoll Limited"

* **954**: *string* = "PayMe"

* **955**: *string* = "Yintran Group Holdings Limited"
