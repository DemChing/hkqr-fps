export const ACCOUNT_VISA = ["02", "03"];
export const ACCOUNT_MASTER = ["04", "05"];
export const ACCOUNT_EMVCO = ["06", "07", "08", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
export const ACCOUNT_DISCOVER = ["09", "10"];
export const ACCOUNT_AMEX = ["11", "12"];
export const ACCOUNT_JCB = ["13", "14"];
export const ACCOUNT_UNION = ["15", "16"];
export const ACCOUNT_FPS = ["26"];
export const ACCOUNT_WG = ["27", "28", "29", "30", "31"];
export const ACCOUNT_PO = ["32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51"];
export const ACCOUNTS = [ACCOUNT_VISA, ACCOUNT_MASTER, ACCOUNT_EMVCO, ACCOUNT_DISCOVER, ACCOUNT_AMEX, ACCOUNT_JCB, ACCOUNT_UNION, ACCOUNT_FPS, ACCOUNT_WG, ACCOUNT_PO].reduce((p, c) => p.concat(c), []);
export const TEMPLATE_ACCOUNTS = [ACCOUNT_FPS, ACCOUNT_WG, ACCOUNT_PO].reduce((p, c) => p.concat(c), []);
//# sourceMappingURL=merchantID.js.map