import { $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $MachineCasingAccessor } from "@package/net/swedz/tesseract/neoforge/compat/mi/mixin/accessor";
import { $ComponentStackHolder } from "@package/net/swedz/tesseract/neoforge/compat/mi/api";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/aztech/modern_industrialization/machines/models" {
    export class $MachineModelClientData {
        active(arg0: boolean): $MachineModelClientData;
        casing: $MachineCasing;
        outputDirection: $Direction;
        fluidAutoExtract: boolean;
        frontDirection: $Direction;
        itemAutoExtract: boolean;
        isActive: boolean;
        static KEY: $ModelProperty<$MachineModelClientData>;
        constructor(arg0: $MachineCasing, arg1: $Direction_);
        constructor(arg0: $MachineCasing);
        constructor();
    }
    export class $MachineCasing implements $MachineCasingAccessor, $ComponentStackHolder {
        getTranslationKey(): string;
        getName(): $MutableComponent;
        static init$tesseract_api_$md$d6362b$0(arg0: $ResourceLocation_, arg1: $Supplier_<any>): $MachineCasing;
        imitatedBlock: $Supplier<$Block>;
        key: $ResourceLocation;
        get translationKey(): string;
        get name(): $MutableComponent;
    }
}
