import { $OutputStream, $FilterOutputStream } from "@package/java/io";

declare module "@package/org/apache/commons/io/output" {
    export class $CountingOutputStream extends $ProxyOutputStream {
        resetCount(): number;
        getByteCount(): number;
        resetByteCount(): number;
        getCount(): number;
        constructor(arg0: $OutputStream);
        get byteCount(): number;
        get count(): number;
    }
    export class $ProxyOutputStream extends $FilterOutputStream {
        constructor(arg0: $OutputStream);
    }
}
