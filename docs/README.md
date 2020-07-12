[hkqr-fps](README.md) › [Globals](globals.md)

# hkqr-fps

# HKQR-FPS
Typescript library for generating a QR Code following the standard by [HKICL](https://fps.hkicl.com.hk/eng/fps/merchants/qr_code.php).

## Intro
Fast Payment System (快速支付系統, also known as [FPS 轉數快](https://fps.hkicl.com.hk/eng/fps/index.php)) was introduce since 2018. It actually follows a standard introduced by Hong Kong Interbank Clearing Limited (香港銀行同業結算有限公司). HKICL tried to create a common QR code that can be communicate between different payment service providers.

This repository contains two versions of code (`HKQR` and `FPS`) that follows the standard. One supports all the features under the standard while the other only support major features that is used in FPS.

It has been compiled to CommonJS and ES module. A webpacked version is also available. Please find it in `dist/`.

## Usage
Directly import the `.ts` file.
```
import { HKQR } from "./src";           // or
import HKQR from "./src/HKQR";

let qrCode = new HKQR();
```

The typescript files have been compiled to CommonJS and ES Module. Files can be found in `dist/`.

To use in html without import module, javascript files have been compiled using Webpack. Include the script directly to html.
```
// index.html
<script src="HKQR.js></script>

// index.js
let qrCode = new HKQR();
```

## Core Methods
__ATTENTION:__ This repository __DO NOT__ generate or decode QR Code. It only handles data before generating QR Code or after decoding QR Code.

### Extract and Parse
- `HKQR.extract(x?: string): Event` / `FPS.extract(x: string): Event`
Extracts the data from the QR Code if provided a `string`. Returns its data otherwise.

- `HKQR.parse(x: string): Event` / `FPS.parse(x: string): Event`
Runs `extract()` and updates its data if extracts success.

### Generate Output
- `HKQR.generate(): Event` / `FPS.generate(): Event`
Generate final output for create QR Code.

### Merchant/Receipant Identifier
- `HKQR.setMerchantAccountFPSId(x: number | string): Event` / `FPS.setFPSId(x: number | string): Event`
Set 7-digit / 9-digit FPS ID as identifier.

- `HKQR.setMerchantAccountMobile(x: number | string): Event` / `FPS.setMobile(x: number | string): Event`
Set mobile number as identifier. Format: `+852-12345678`

- `HKQR.setMerchantAccountEmail(x: string): Event` / `FPS.setEmail(x: string): Event`
Set email as identifier.

### Transaction Amount
- `HKQR.setTransactionAmount(x: number | string, fraction: number | boolean = false): Event` / `FPS.setAmount(x: number): Event`
For `HKQR.setTransactionAmount`, you can convert a number to string in fixed-point notation (i.e. `x.toFixed(fraction)`)

### Billing Information
- `HKQR.setBillNumber(x: string): Event` / `FPS.setBillNumber(x: string): Event`
Set the bill number/identifier provided by the merchant.

- `HKQR.setReferenceLabel(x: string): Event` / `FPS.setReference(x: string): Event`
Set reference detail of the billing.

## Event
Most of the functions return an `Event` class object. If there is no error, you can access `event.data` to get your data.

If there is any error, it will throw the error message causing the script to end. However, you can run `HKQR.Silent()` / `FPS.Silent()` to stop this behavior.

To handle error with silent enabled, you can use `event.isError()` to check if error exists. Get the error message with `event.message`.
