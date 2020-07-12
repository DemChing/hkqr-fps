"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extract = exports.extractContent = exports.numberToValidId = exports.isAlphanumericSpecial = void 0;
function isAlphanumericSpecial(x) {
    return /^[A-z0-9.@_+-]+$/.test(x);
}
exports.isAlphanumericSpecial = isAlphanumericSpecial;
function numberToValidId(x) {
    if (x < 0 || x > 99)
        x = 0;
    return `00${x}`.slice(-2);
}
exports.numberToValidId = numberToValidId;
function extractContent(x) {
    let id = x.slice(0, 2), numRegex = /\d\d/;
    if (numRegex.test(id)) {
        x = x.slice(2);
        if (numRegex.test(x.slice(0, 2))) {
            let length = parseInt(x.slice(0, 2));
            if (length > 0 && x.length - 2 >= length) {
                x = x.slice(2);
                let content = x.slice(0, length);
                return {
                    id: id,
                    content: content,
                    remain: x.slice(length)
                };
            }
        }
    }
    return false;
}
exports.extractContent = extractContent;
function extract(x) {
    let data, extracts = {};
    while (data = extractContent(x)) {
        x = data.remain;
        let subExtract = extract(data.content);
        if (subExtract.length == 2) {
            extracts[data.id] = data.content;
        }
        else {
            extracts[data.id] = subExtract[0];
        }
    }
    if (x.length == 0)
        return [extracts];
    let remain = {
        "00": x
    };
    return [
        extracts,
        remain
    ];
}
exports.extract = extract;
//# sourceMappingURL=utils.js.map