
let silent = false;

export default class Event {
    private error: boolean = false;
    data?: string | number | object = "Success";
    message?: string;

    static Silent() {
        silent = true;
    }

    isError(): boolean {
        return this.error;
    }

    setError(x: string = "", s: boolean = false): void {
        this.error = true;
        this.message = x;
        delete this.data;
        if (!(s || silent)) { 
            throw this.message; 
        }
    }
}