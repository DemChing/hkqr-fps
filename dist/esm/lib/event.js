let silent = false;
export default class Event {
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
//# sourceMappingURL=event.js.map