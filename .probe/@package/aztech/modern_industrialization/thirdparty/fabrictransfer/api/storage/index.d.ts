import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Tag } from "@package/net/minecraft/nbt";
import { $TransactionContext_ } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/transaction";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $DataComponentPatch } from "@package/net/minecraft/core/component";
export * as base from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/storage/base";

declare module "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/storage" {
    export class $TransferVariant<O> {
    }
    export interface $TransferVariant<O> {
        getComponentsPatch(): $DataComponentPatch;
        toPacket(arg0: $RegistryFriendlyByteBuf): void;
        toNbt(arg0: $HolderLookup$Provider): $Tag;
        isBlank(): boolean;
        getObject(): O;
        isOf(arg0: O): boolean;
        get componentsPatch(): $DataComponentPatch;
        get blank(): boolean;
        get object(): O;
    }
    export class $StorageView<T> {
    }
    export interface $StorageView<T> {
        isResourceBlank(): boolean;
        getUnderlyingView(): $StorageView<T>;
        extract(arg0: T, arg1: number, arg2: $TransactionContext_): number;
        getResource(): T;
        getCapacity(): number;
        getAmount(): number;
        get resourceBlank(): boolean;
        get underlyingView(): $StorageView<T>;
        get resource(): T;
        get capacity(): number;
        get amount(): number;
    }
}
