import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MachineComponent } from "@package/aztech/modern_industrialization/machines";

declare module "@package/dev/thestaticvoid/mi_sound_addon/util" {
    export class $SilencedComponent implements $MachineComponent {
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        onMalletUse(): void;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        silenced: boolean;
        constructor();
    }
    export class $SilencedComponentInterface {
    }
    export interface $SilencedComponentInterface {
        mISoundAddon$toggleSilencedState(): void;
        mISoundAddon$getSilencedState(): $SilencedComponent;
    }
}
