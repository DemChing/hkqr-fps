
let silent = false;

/**
 * Default response for most of the functions
 */
class Response {
    private error: boolean = false;
    data?: string | number | object = "Success";
    message?: string;

    /**
     * Prevent function throwing error and stop the script.
     * You may need to handle the error yourself.
     * @category static
     */
    static Silent() {
        silent = true;
    }

    /** Return if this action cause an error */
    isError(): boolean {
        return this.error;
    }

    /** Set error detail */
    setError(x: string = "", s: boolean = false): void {
        this.error = true;
        this.message = x;
        delete this.data;
        if (!(s || silent)) {
            throw this.message;
        }
    }
}

export default Response;