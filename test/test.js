const MSG_NOT_FOUND = "No property found";
const fakeError = message => ({
    isError: () => true,
    message
});
const fakeSuccess = () => ({
    isError: () => false
});
const migrate = (obj, key1, key2, ...args) => {
    let key;
    if (obj[key1]) key = key1;
    else if (obj[key2]) key = key2;
    try {
        return key ? typeof obj[key] === "function" ? obj[key](...args) : obj[key] : fakeError(MSG_NOT_FOUND);
    } catch (e) {
        console.trace(key, ...args);
        throw e;
    }
}
const migrateInvalid = (obj, key1, key2, ...args) => {
    let e = migrate(obj, key1, key2, ...args);

    if (e.message === MSG_NOT_FOUND) return e;
    if (e.isError()) return fakeSuccess();
    return fakeError("Accept invalid parameter");
}

export default function test(classObj, id) {
    try {
        classObj.Silent();
        let input = "00020101021126530012hk.com.hkicl0433FPS_Identifier_CRC201D@ird.gov.hk520400005303344540419895802HK5902NA6002HK63042767",
            newClass = new classObj();

        if (typeof window !== "undefined") {
            window.__TEST_OBJECT__ = window.__TEST_OBJECT__ || {};
            window.__TEST_OBJECT__[id] = newClass;
        }
        let testCase = {
            "Valid Constant": () => {
                let e = migrate(classObj, "BANK_BANK_OF_CHINA");
                if (typeof e !== "string" && "isError" in e) return e;
                if (e === "012") return fakeSuccess();
                return fakeError("Constant changed")
            },
            "Parse": () => newClass.parse(input),
            "Generate": () => {
                let e = newClass.generate()
                if (!e.isError() && e.data != input) e.setError("Different value");
                return e;
            },
            "Set Currency": () => {
                return migrate(newClass, "setCurrency", "setTransactionCurrency", "HKD")
            },
            "Set Invalid Currency": () => {
                return migrateInvalid(newClass, "setCurrency", "setTransactionCurrency", "invalid");
            },
            "Set FPSId": () => {
                return migrate(newClass, "setFPSId", "setMerchantAccountFPSId", "1234567")
            },
            "Set Static FPSId": () => {
                return migrate(newClass, "setFPSId", "setMerchantAccountFPSId", migrate(classObj, "FPS_ID_CLP"))
            },
            "Set Invalid FPSId": () => {
                return migrateInvalid(newClass, "setFPSId", "setMerchantAccountFPSId", "invalid");
            },
            "Set FPS Email": () => {
                return migrate(newClass, "setEmail", "setMerchantAccountEmail", "fps@hkqr.hk")
            },
            "Set Static FPS Email": () => {
                return migrate(newClass, "setEmail", "setMerchantAccountEmail", migrate(classObj, "FPS_EMAIL_IRD_PERSONAL_ASSESSMENT"))
            },
            "Set Invalid FPS Email": () => {
                return migrateInvalid(newClass, "setEmail", "setMerchantAccountEmail", "invalid");
            },
            "Set FPS Mobile": () => {
                return migrate(newClass, "setMobile", "setMerchantAccountMobile", "12345678")
            },
            "Set Invalid FPS Mobile": () => {
                return migrateInvalid(newClass, "setMobile", "setMerchantAccountMobile", "invalid");
            },
            "Set Amount": () => {
                return migrate(newClass, "setAmount", "setTransactionAmount", "12345678")
            },
            "Set Invalid Amount": () => {
                return migrateInvalid(newClass, "setAmount", "setTransactionAmount", "invalid");
            },
        };

        for (let key in testCase) {
            let e = testCase[key]();
            if (e.isError()) {
                throw `Test case - ${key}: ${e.message}`;
            }
        }
    } catch (e) {
        console.log(id + " Fail")
        throw e;
    }
}