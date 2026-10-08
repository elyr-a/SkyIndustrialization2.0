import { $FFICIF } from "@package/org/lwjgl/system/libffi";
import { $Callback, $CallbackI } from "@package/org/lwjgl/system";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/org/lwjgl/stb" {
    export class $STBIWriteCallback extends $Callback implements $STBIWriteCallbackI {
        static createSafe(arg0: number): $STBIWriteCallback;
        static create(arg0: number): $STBIWriteCallback;
        static create(arg0: $STBIWriteCallbackI_): $STBIWriteCallback;
        static getData(arg0: number, arg1: number): $ByteBuffer;
        getCallInterface(): $FFICIF;
        callback(arg0: number, arg1: number): void;
        get callInterface(): $FFICIF;
    }
    export class $STBIWriteCallbackI {
        static CIF: $FFICIF;
    }
    export interface $STBIWriteCallbackI extends $CallbackI {
        getCallInterface(): $FFICIF;
        invoke(arg0: number, arg1: number, arg2: number): void;
        callback(arg0: number, arg1: number): void;
        get callInterface(): $FFICIF;
    }
    /**
     * Values that may be interpreted as {@link $STBIWriteCallbackI}.
     */
    export type $STBIWriteCallbackI_ = ((arg0: number, arg1: number, arg2: number) => void);
}
