import { $Record } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/com/mojang/authlib/yggdrasil/response" {
    export class $KeyPairResponse extends $Record {
        keyPair(): $KeyPairResponse$KeyPair;
        refreshedAfter(): string;
        publicKeySignature(): $ByteBuffer;
        expiresAt(): string;
        constructor(keyPair: $KeyPairResponse$KeyPair_, publicKeySignature: $ByteBuffer, expiresAt: string, refreshedAfter: string);
    }
    /**
     * Values that may be interpreted as {@link $KeyPairResponse}.
     */
    export type $KeyPairResponse_ = { expiresAt?: string, publicKeySignature?: $ByteBuffer, refreshedAfter?: string, keyPair?: $KeyPairResponse$KeyPair_,  } | [expiresAt?: string, publicKeySignature?: $ByteBuffer, refreshedAfter?: string, keyPair?: $KeyPairResponse$KeyPair_, ];
    export class $KeyPairResponse$KeyPair extends $Record {
        privateKey(): string;
        publicKey(): string;
        constructor(privateKey: string, publicKey: string);
    }
    /**
     * Values that may be interpreted as {@link $KeyPairResponse$KeyPair}.
     */
    export type $KeyPairResponse$KeyPair_ = { publicKey?: string, privateKey?: string,  } | [publicKey?: string, privateKey?: string, ];
}
