import { VALID_ID, EXTRACTS, EXTRACT_CONTENT } from "./constant";
export declare function isAlphanumericSpecial(x: string): boolean;
export declare function numberToValidId(x: number): VALID_ID;
export declare function extractContent(x: string): EXTRACT_CONTENT | false;
export declare function extract(x: string): EXTRACTS[];
