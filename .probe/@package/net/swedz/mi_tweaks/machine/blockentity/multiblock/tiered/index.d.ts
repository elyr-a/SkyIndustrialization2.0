import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $MachineRecipeType } from "@package/aztech/modern_industrialization/machines/recipe";
import { $ShapeTemplate } from "@package/aztech/modern_industrialization/machines/multiblocks";
import { $WorkstationAdder } from "@package/net/swedz/mi_tweaks/compat/kubejs/machine";

declare module "@package/net/swedz/mi_tweaks/machine/blockentity/multiblock/tiered" {
    export class $CustomMultiblockTier extends $Record {
        getTranslationKey(): string;
        workstations(): $Consumer<$WorkstationAdder>;
        getWorkstations(): $List<$ResourceLocation>;
        recipeType(): $MachineRecipeType;
        id(): string;
        getDisplayName(): $Component;
        shape(): $ShapeTemplate;
        multiplier(): number;
        euCostMultiplier(): number;
        maxBaseEu(): number;
        constructor(id: string, recipeType: $MachineRecipeType, shape: $ShapeTemplate, workstations: $Consumer_<$WorkstationAdder>, maxBaseEu: number, multiplier: number, euCostMultiplier: number);
        get translationKey(): string;
        get displayName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $CustomMultiblockTier}.
     */
    export type $CustomMultiblockTier_ = { multiplier?: number, maxBaseEu?: number, workstations?: $Consumer_<$WorkstationAdder>, id?: string, recipeType?: $MachineRecipeType, shape?: $ShapeTemplate, euCostMultiplier?: number,  } | [multiplier?: number, maxBaseEu?: number, workstations?: $Consumer_<$WorkstationAdder>, id?: string, recipeType?: $MachineRecipeType, shape?: $ShapeTemplate, euCostMultiplier?: number, ];
}
