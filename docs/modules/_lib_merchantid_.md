[hkqr-fps](../README.md) › ["lib/merchantID"](_lib_merchantid_.md)

# Module: "lib/merchantID"

## Index

### Variables

* [ACCOUNTS](_lib_merchantid_.md#const-accounts)
* [ACCOUNT_AMEX](_lib_merchantid_.md#const-account_amex)
* [ACCOUNT_DISCOVER](_lib_merchantid_.md#const-account_discover)
* [ACCOUNT_EMVCO](_lib_merchantid_.md#const-account_emvco)
* [ACCOUNT_FPS](_lib_merchantid_.md#const-account_fps)
* [ACCOUNT_JCB](_lib_merchantid_.md#const-account_jcb)
* [ACCOUNT_MASTER](_lib_merchantid_.md#const-account_master)
* [ACCOUNT_PO](_lib_merchantid_.md#const-account_po)
* [ACCOUNT_UNION](_lib_merchantid_.md#const-account_union)
* [ACCOUNT_VISA](_lib_merchantid_.md#const-account_visa)
* [ACCOUNT_WG](_lib_merchantid_.md#const-account_wg)
* [TEMPLATE_ACCOUNTS](_lib_merchantid_.md#const-template_accounts)

## Variables

### `Const` ACCOUNTS

• **ACCOUNTS**: *any[]* = [ACCOUNT_VISA, ACCOUNT_MASTER, ACCOUNT_EMVCO, ACCOUNT_DISCOVER, ACCOUNT_AMEX, ACCOUNT_JCB, ACCOUNT_UNION, ACCOUNT_FPS, ACCOUNT_WG, ACCOUNT_PO].reduce((p, c) => p.concat(c), [])

Defined in lib/merchantID.ts:12

___

### `Const` ACCOUNT_AMEX

• **ACCOUNT_AMEX**: *["11", "12"]* = ["11", "12"] as const

Defined in lib/merchantID.ts:5

___

### `Const` ACCOUNT_DISCOVER

• **ACCOUNT_DISCOVER**: *["09", "10"]* = ["09", "10"] as const

Defined in lib/merchantID.ts:4

___

### `Const` ACCOUNT_EMVCO

• **ACCOUNT_EMVCO**: *["06", "07", "08", "17", "18", "19", "20", "21", "22", "23", "24", "25"]* = ["06", "07", "08", "17", "18", "19", "20", "21", "22", "23", "24", "25"] as const

Defined in lib/merchantID.ts:3

___

### `Const` ACCOUNT_FPS

• **ACCOUNT_FPS**: *["26"]* = ["26"] as const

Defined in lib/merchantID.ts:8

___

### `Const` ACCOUNT_JCB

• **ACCOUNT_JCB**: *["13", "14"]* = ["13", "14"] as const

Defined in lib/merchantID.ts:6

___

### `Const` ACCOUNT_MASTER

• **ACCOUNT_MASTER**: *["04", "05"]* = ["04", "05"] as const

Defined in lib/merchantID.ts:2

___

### `Const` ACCOUNT_PO

• **ACCOUNT_PO**: *["32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51"]* = ["32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51"] as const

Defined in lib/merchantID.ts:10

___

### `Const` ACCOUNT_UNION

• **ACCOUNT_UNION**: *["15", "16"]* = ["15", "16"] as const

Defined in lib/merchantID.ts:7

___

### `Const` ACCOUNT_VISA

• **ACCOUNT_VISA**: *["02", "03"]* = ["02", "03"] as const

Defined in lib/merchantID.ts:1

___

### `Const` ACCOUNT_WG

• **ACCOUNT_WG**: *["27", "28", "29", "30", "31"]* = ["27", "28", "29", "30", "31"] as const

Defined in lib/merchantID.ts:9

___

### `Const` TEMPLATE_ACCOUNTS

• **TEMPLATE_ACCOUNTS**: *any[]* = [ACCOUNT_FPS, ACCOUNT_WG, ACCOUNT_PO].reduce((p, c) => p.concat(c), [])

Defined in lib/merchantID.ts:13
