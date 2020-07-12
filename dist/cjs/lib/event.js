"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let silent = false;
class Event {
    constructor() {
        this.error = false;
        this.data = "Success";
    }
    static Silent() {
        silent = true;
    }
    isError() {
        return this.error;
    }
    setError(x = "", s = false) {
        this.error = true;
        this.message = x;
        delete this.data;
        if (!(s || silent)) {
            throw this.message;
        }
    }
}
exports.default = Event;
//# sourceMappingURL=event.js.map