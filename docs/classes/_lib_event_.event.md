[hkqr-fps](../README.md) › [Globals](../globals.md) › ["lib/event"](../modules/_lib_event_.md) › [Event](_lib_event_.event.md)

# Class: Event

## Hierarchy

* **Event**

## Index

### Properties

* [data](_lib_event_.event.md#optional-data)
* [error](_lib_event_.event.md#private-error)
* [message](_lib_event_.event.md#optional-message)

### Methods

* [isError](_lib_event_.event.md#iserror)
* [setError](_lib_event_.event.md#seterror)
* [Silent](_lib_event_.event.md#static-silent)

## Properties

### `Optional` data

• **data**? : *string | number | object* = "Success"

Defined in lib/event.ts:6

___

### `Private` error

• **error**: *boolean* = false

Defined in lib/event.ts:5

___

### `Optional` message

• **message**? : *string*

Defined in lib/event.ts:7

## Methods

###  isError

▸ **isError**(): *boolean*

Defined in lib/event.ts:13

**Returns:** *boolean*

___

###  setError

▸ **setError**(`x`: string, `s`: boolean): *void*

Defined in lib/event.ts:17

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`x` | string | "" |
`s` | boolean | false |

**Returns:** *void*

___

### `Static` Silent

▸ **Silent**(): *void*

Defined in lib/event.ts:9

**Returns:** *void*
