import { VALID_ID, EXTRACTS, EXTRACT_CONTENT } from "./constant";

export function isAlphanumericSpecial(x: string): boolean {
    return /^[A-z0-9.@_+-]+$/.test(x);
}

export function numberToValidId(x: number): VALID_ID {
    if (x < 0 || x > 99) x = 0;
    return `00${x}`.slice(-2) as VALID_ID;
}

export function extractContent(x: string): EXTRACT_CONTENT | false {
    let id = x.slice(0, 2) as VALID_ID,
        numRegex = /\d\d/;
    if (numRegex.test(id)) {
        x = x.slice(2)
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

export function extract(x: string): EXTRACTS[] {
    let data: EXTRACT_CONTENT | false,
        extracts: EXTRACTS = {};
    while (data = extractContent(x)) {
        x = data.remain;

        let subExtract = extract(data.content);
        if (subExtract.length == 2) {
            extracts[data.id] = data.content;
        } else {
            extracts[data.id] = subExtract[0];
        }
    }
    if (x.length == 0) return [extracts];

    let remain: EXTRACTS = {
        "00": x
    }
    return [
        extracts,
        remain
    ];
}