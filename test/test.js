export default function test(classObj, id) {
    try {
        classObj.Silent();
        if (classObj.BANK_BANK_OF_CHINA != "012") {
            throw "Constant Fail";
        }
        let input = "00020101021126530012hk.com.hkicl0433FPS_Identifier_CRC201D@ird.gov.hk520400005303344540419895802HK5902NA6002HK63042767",
            newClass = new classObj();
        let e1 = newClass.parse(input),
            e2 = newClass.generate();
        if (e1.isError()) {
            throw "Event 1: " + e1.message;
        } else if (e2.isError()) {
            throw "Event 2: " + e2.message;
        } else if (e2.data != input) {
            throw "Different value";
        }
    } catch (e) {
        console.log(id + " Fail")
        throw e;
    }
}