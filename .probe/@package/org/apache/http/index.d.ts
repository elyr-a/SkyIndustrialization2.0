import { $InputStream, $OutputStream } from "@package/java/io";
export * as entity from "@package/org/apache/http/entity";

declare module "@package/org/apache/http" {
    export class $Header {
    }
    export interface $Header extends $NameValuePair {
        getElements(): $HeaderElement[];
        get elements(): $HeaderElement[];
    }
    export class $HttpEntity {
    }
    export interface $HttpEntity {
        isChunked(): boolean;
        isRepeatable(): boolean;
        isStreaming(): boolean;
        /**
         * @deprecated
         */
        consumeContent(): void;
        getContent(): $InputStream;
        getContentType(): $Header;
        getContentEncoding(): $Header;
        getContentLength(): number;
        writeTo(arg0: $OutputStream): void;
        get chunked(): boolean;
        get repeatable(): boolean;
        get streaming(): boolean;
        get content(): $InputStream;
        get contentType(): $Header;
        get contentEncoding(): $Header;
        get contentLength(): number;
    }
    export class $NameValuePair {
    }
    export interface $NameValuePair {
        getName(): string;
        getValue(): string;
        get name(): string;
        get value(): string;
    }
    export class $HeaderElement {
    }
    export interface $HeaderElement {
        getParameter(arg0: number): $NameValuePair;
        getParameters(): $NameValuePair[];
        getName(): string;
        getValue(): string;
        getParameterCount(): number;
        getParameterByName(arg0: string): $NameValuePair;
        get parameters(): $NameValuePair[];
        get name(): string;
        get value(): string;
        get parameterCount(): number;
    }
}
