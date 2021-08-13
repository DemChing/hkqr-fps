/**
 * Default response for most of the functions
 */
declare class Response {
    private error;
    data?: string | number | object;
    message?: string;
    /**
     * Prevent function throwing error and stop the script.
     * You may need to handle the error yourself.
     * @category static
     */
    static Silent(): void;
    /** Return if this action cause an error */
    isError(): boolean;
    /** Set error detail */
    setError(x?: string, s?: boolean): void;
}
export default Response;
