import { HKQR as HKQR_ICJS } from "../dist/cjs";
import { FPS as FPS_ICJS } from "../dist/cjs";
import HKQR_CJS from "../dist/cjs/HKQR";
import FPS_CJS from "../dist/cjs/FPS";
import { HKQR as HKQR_IESM } from "../dist/esm";
import { FPS as FPS_IESM } from "../dist/esm";
import HKQR_ESM from "../dist/esm/HKQR";
import FPS_ESM from "../dist/esm/FPS";

import test from "./test";

const HKQR_ICJS_R = require("../dist/cjs").HKQR;
const FPS_ICJS_R = require("../dist/cjs").FPS;
const HKQR_CJS_R = require("../dist/cjs/HKQR").default;
const FPS_CJS_R = require("../dist/cjs/FPS").default;

const HKQR_IESM_R = require("../dist/esm").HKQR;
const FPS_IESM_R = require("../dist/esm").FPS;
const HKQR_ESM_R = require("../dist/esm/HKQR").default;
const FPS_ESM_R = require("../dist/esm/FPS").default;

test(HKQR_IESM, "ES Module - Import Index HKQR");
test(FPS_IESM, "ES Module - Import Index FPS");
test(HKQR_ESM, "ES Module - Import HKQR");
test(FPS_ESM, "ES Module - Import FPS");

test(HKQR_ICJS, "CommonJS - Import Index HKQR");
test(FPS_ICJS, "CommonJS - Import Index FPS");
test(HKQR_CJS, "CommonJS - Import HKQR");
test(FPS_CJS, "CommonJS - Import FPS");

test(HKQR_ICJS_R, "CommonJS - Require Index HKQR");
test(FPS_ICJS_R, "CommonJS - Require Index FPS");
test(HKQR_CJS_R, "CommonJS - Require HKQR");
test(FPS_CJS_R, "CommonJS - Require FPS");

test(HKQR_IESM_R, "ES Module - Require Index HKQR");
test(FPS_IESM_R, "ES Module - Require Index FPS");
test(HKQR_ESM_R, "ES Module - Require HKQR");
test(FPS_ESM_R, "ES Module - Require FPS");

console.log("All case pass")