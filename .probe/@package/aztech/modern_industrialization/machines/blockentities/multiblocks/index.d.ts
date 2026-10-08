import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";

declare module "@package/aztech/modern_industrialization/machines/blockentities/multiblocks" {
    export class $ElectricBlastFurnaceBlockEntity$Tier extends $Record {
        getTranslationKey(): string;
        englishName(): string;
        getDisplayName(): $Component;
        maxBaseEu(): number;
        coilBlockId(): $ResourceLocation;
        constructor(coilBlockId: $ResourceLocation_, maxBaseEu: number, englishName: string);
        get translationKey(): string;
        get displayName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ElectricBlastFurnaceBlockEntity$Tier}.
     */
    export type $ElectricBlastFurnaceBlockEntity$Tier_ = { coilBlockId?: $ResourceLocation_, maxBaseEu?: number, englishName?: string,  } | [coilBlockId?: $ResourceLocation_, maxBaseEu?: number, englishName?: string, ];
}
