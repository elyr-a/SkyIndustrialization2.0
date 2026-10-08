import { $ForwardingMultimap } from "@package/com/google/common/collect";
import { $PublicKey } from "@package/java/security";
import { $Record } from "@package/java/lang";

declare module "@package/com/mojang/authlib/properties" {
    export class $Property extends $Record {
        hasSignature(): boolean;
        /**
         * @deprecated
         */
        isSignatureValid(arg0: $PublicKey): boolean;
        signature(): string;
        name(): string;
        value(): string;
        constructor(arg0: string, arg1: string);
        constructor(name: string, value: string, signature: string | null);
    }
    /**
     * Values that may be interpreted as {@link $Property}.
     */
    export type $Property_ = { signature?: string, name?: string, value?: string,  } | [signature?: string, name?: string, value?: string, ];
    export class $PropertyMap extends $ForwardingMultimap<string, $Property> {
        constructor();
    }
}
