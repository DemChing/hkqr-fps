[hkqr-fps](../README.md) › ["FPS/config"](../modules/_fps_config_.md) › [ICODE](_fps_config_.icode.md)

# Interface: ICODE

## Hierarchy

* **ICODE**

## Implemented by

* [FPS](../classes/_fps_index_.fps.md)

## Index

### Methods

* [extract](_fps_config_.icode.md#extract)
* [generate](_fps_config_.icode.md#generate)
* [getAmount](_fps_config_.icode.md#getamount)
* [getBank](_fps_config_.icode.md#getbank)
* [getBillNumber](_fps_config_.icode.md#getbillnumber)
* [getCurrency](_fps_config_.icode.md#getcurrency)
* [getEmail](_fps_config_.icode.md#getemail)
* [getFPSId](_fps_config_.icode.md#getfpsid)
* [getMobile](_fps_config_.icode.md#getmobile)
* [getReference](_fps_config_.icode.md#getreference)
* [isStatic](_fps_config_.icode.md#isstatic)
* [parse](_fps_config_.icode.md#parse)
* [setAdditionalInfo](_fps_config_.icode.md#setadditionalinfo)
* [setAmount](_fps_config_.icode.md#setamount)
* [setBank](_fps_config_.icode.md#setbank)
* [setBillNumber](_fps_config_.icode.md#setbillnumber)
* [setCNY](_fps_config_.icode.md#setcny)
* [setCurrency](_fps_config_.icode.md#setcurrency)
* [setDynamic](_fps_config_.icode.md#setdynamic)
* [setEmail](_fps_config_.icode.md#setemail)
* [setFPSId](_fps_config_.icode.md#setfpsid)
* [setHKD](_fps_config_.icode.md#sethkd)
* [setMerchantAccount](_fps_config_.icode.md#setmerchantaccount)
* [setMobile](_fps_config_.icode.md#setmobile)
* [setReference](_fps_config_.icode.md#setreference)
* [setStatic](_fps_config_.icode.md#setstatic)

## Methods

###  extract

▸ **extract**(`x`: string): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:83

**Parameters:**

Name | Type |
------ | ------ |
`x` | string |

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  generate

▸ **generate**(): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:84

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  getAmount

▸ **getAmount**(`toNumber`: boolean): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:97

**Parameters:**

Name | Type |
------ | ------ |
`toNumber` | boolean |

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  getBank

▸ **getBank**(`toName`: boolean): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:89

**Parameters:**

Name | Type |
------ | ------ |
`toName` | boolean |

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  getBillNumber

▸ **getBillNumber**(): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:100

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  getCurrency

▸ **getCurrency**(`toCode`: boolean): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:106

**Parameters:**

Name | Type |
------ | ------ |
`toCode` | boolean |

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  getEmail

▸ **getEmail**(): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:95

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  getFPSId

▸ **getFPSId**(): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:91

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  getMobile

▸ **getMobile**(): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:93

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  getReference

▸ **getReference**(): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:102

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  isStatic

▸ **isStatic**(): *boolean*

Defined in FPS/config.ts:85

**Returns:** *boolean*

___

###  parse

▸ **parse**(`x`: string): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:82

**Parameters:**

Name | Type |
------ | ------ |
`x` | string |

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  setAdditionalInfo

▸ **setAdditionalInfo**(`x`: [VALID_OBJECT](../modules/_lib_constant_.md#valid_object)): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:99

**Parameters:**

Name | Type |
------ | ------ |
`x` | [VALID_OBJECT](../modules/_lib_constant_.md#valid_object) |

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  setAmount

▸ **setAmount**(`x`: number): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:98

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  setBank

▸ **setBank**(`x`: [PARTICIPANTS](../modules/_fps_config_.md#participants)): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:90

**Parameters:**

Name | Type |
------ | ------ |
`x` | [PARTICIPANTS](../modules/_fps_config_.md#participants) |

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  setBillNumber

▸ **setBillNumber**(`x`: string): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:101

**Parameters:**

Name | Type |
------ | ------ |
`x` | string |

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  setCNY

▸ **setCNY**(): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:105

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  setCurrency

▸ **setCurrency**(`x`: [CURRENCY](../modules/_fps_config_.md#currency)): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:107

**Parameters:**

Name | Type |
------ | ------ |
`x` | [CURRENCY](../modules/_fps_config_.md#currency) |

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  setDynamic

▸ **setDynamic**(): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:87

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  setEmail

▸ **setEmail**(`x`: string): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:96

**Parameters:**

Name | Type |
------ | ------ |
`x` | string |

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  setFPSId

▸ **setFPSId**(`x`: number | string): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:92

**Parameters:**

Name | Type |
------ | ------ |
`x` | number &#124; string |

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  setHKD

▸ **setHKD**(): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:104

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  setMerchantAccount

▸ **setMerchantAccount**(`x`: [VALID_OBJECT](../modules/_lib_constant_.md#valid_object)): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:88

**Parameters:**

Name | Type |
------ | ------ |
`x` | [VALID_OBJECT](../modules/_lib_constant_.md#valid_object) |

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  setMobile

▸ **setMobile**(`x`: number | string): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:94

**Parameters:**

Name | Type |
------ | ------ |
`x` | number &#124; string |

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  setReference

▸ **setReference**(`x`: string): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:103

**Parameters:**

Name | Type |
------ | ------ |
`x` | string |

**Returns:** *[Event](../classes/_lib_event_.event.md)*

___

###  setStatic

▸ **setStatic**(): *[Event](../classes/_lib_event_.event.md)*

Defined in FPS/config.ts:86

**Returns:** *[Event](../classes/_lib_event_.event.md)*
