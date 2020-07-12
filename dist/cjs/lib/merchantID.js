"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMPLATE_ACCOUNTS = exports.ACCOUNTS = exports.ACCOUNT_PO = exports.ACCOUNT_WG = exports.ACCOUNT_FPS = exports.ACCOUNT_UNION = exports.ACCOUNT_JCB = exports.ACCOUNT_AMEX = exports.ACCOUNT_DISCOVER = exports.ACCOUNT_EMVCO = exports.ACCOUNT_MASTER = exports.ACCOUNT_VISA = void 0;
exports.ACCOUNT_VISA = ["02", "03"];
exports.ACCOUNT_MASTER = ["04", "05"];
exports.ACCOUNT_EMVCO = ["06", "07", "08", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
exports.ACCOUNT_DISCOVER = ["09", "10"];
exports.ACCOUNT_AMEX = ["11", "12"];
exports.ACCOUNT_JCB = ["13", "14"];
exports.ACCOUNT_UNION = ["15", "16"];
exports.ACCOUNT_FPS = ["26"];
exports.ACCOUNT_WG = ["27", "28", "29", "30", "31"];
exports.ACCOUNT_PO = ["32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51"];
exports.ACCOUNTS = [exports.ACCOUNT_VISA, exports.ACCOUNT_MASTER, exports.ACCOUNT_EMVCO, exports.ACCOUNT_DISCOVER, exports.ACCOUNT_AMEX, exports.ACCOUNT_JCB, exports.ACCOUNT_UNION, exports.ACCOUNT_FPS, exports.ACCOUNT_WG, exports.ACCOUNT_PO].reduce((p, c) => p.concat(c), []);
exports.TEMPLATE_ACCOUNTS = [exports.ACCOUNT_FPS, exports.ACCOUNT_WG, exports.ACCOUNT_PO].reduce((p, c) => p.concat(c), []);
//# sourceMappingURL=merchantID.js.map