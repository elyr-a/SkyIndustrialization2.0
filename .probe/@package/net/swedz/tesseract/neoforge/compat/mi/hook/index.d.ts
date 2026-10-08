import { $DeferredRegister$Items, $DeferredRegister, $DeferredRegister$Blocks } from "@package/net/neoforged/neoforge/registries";
import { $RecipeSerializer, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $ItemHolder, $BlockHolder } from "@package/net/swedz/tesseract/neoforge/registry/holder";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $SortOrder } from "@package/net/swedz/tesseract/neoforge/registry";
import { $Runnable_ } from "@package/java/lang";
import { $EfficiencyMIHookContext } from "@package/net/swedz/tesseract/neoforge/compat/mi/hook/context/machine";
import { $ClientGuiComponentsMIHookContext, $ViewerSetupMIHookContext, $HatchMIHookContext, $SingleBlockCraftingMachinesMIHookContext, $MultiblockMachinesMIHookContext, $MachineProcessConditionsMIHookContext, $BlastFurnaceTiersMIHookContext, $MachineCasingsMIHookContext, $MachineRecipeTypesMIHookContext, $SingleBlockSpecialMachinesMIHookContext } from "@package/net/swedz/tesseract/neoforge/compat/mi/hook/context/listener";
import { $MachineRecipeType } from "@package/aztech/modern_industrialization/machines/recipe";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
export * as context from "@package/net/swedz/tesseract/neoforge/compat/mi/hook/context";

declare module "@package/net/swedz/tesseract/neoforge/compat/mi/hook" {
    export class $MIHook {
        modId(): string;
        registry(): $MIHookRegistry;
        hasRegistry(): boolean;
        hasListener(): boolean;
        hasEfficiencyListener(): boolean;
        id(arg0: string): $ResourceLocation;
        enqueue(arg0: $Runnable_): void;
        listener(): $MIHookListener;
        efficiencyListener(): $MIHookEfficiency;
        constructor(arg0: string);
    }
    export class $MIHookListener {
        static NONE: $MIHookListener;
    }
    export interface $MIHookListener extends $MIHookInstance {
        tooltips(): void;
        afterInit(): void;
        beforeInit(): void;
        machineProcessConditions(arg0: $MachineProcessConditionsMIHookContext): void;
        singleBlockSpecialMachines(arg0: $SingleBlockSpecialMachinesMIHookContext): void;
        clientGuiComponents(arg0: $ClientGuiComponentsMIHookContext): void;
        singleBlockCraftingMachines(arg0: $SingleBlockCraftingMachinesMIHookContext): void;
        multiblockMachines(arg0: $MultiblockMachinesMIHookContext): void;
        machineCasings(arg0: $MachineCasingsMIHookContext): void;
        machineRecipeTypes(arg0: $MachineRecipeTypesMIHookContext): void;
        viewerSetup(arg0: $ViewerSetupMIHookContext): void;
        blastFurnaceTiers(arg0: $BlastFurnaceTiersMIHookContext): void;
        hatches(arg0: $HatchMIHookContext): void;
    }
    export class $MIHookInstance {
    }
    export interface $MIHookInstance {
        modId(): string;
        shouldInitialize(): boolean;
    }
    export class $MIHookRegistry {
        static NONE: $MIHookRegistry;
    }
    export interface $MIHookRegistry extends $MIHookInstance {
        recipeSerializerRegistry(): $DeferredRegister<$RecipeSerializer<never>>;
        onBlockEntityRegister(arg0: $BlockEntityType_<never>): void;
        blockEntityRegistry(): $DeferredRegister<$BlockEntityType<never>>;
        onMachineRecipeTypeRegister(arg0: $MachineRecipeType): void;
        itemRegistry(): $DeferredRegister$Items;
        blockRegistry(): $DeferredRegister$Blocks;
        recipeTypeRegistry(): $DeferredRegister<$RecipeType<never>>;
        onItemRegister(arg0: $ItemHolder<any>): void;
        sortOrderMachines(): $SortOrder;
        onBlockRegister(arg0: $BlockHolder<any>): void;
    }
    export class $MIHookEfficiency {
        static NONE: $MIHookEfficiency;
    }
    export interface $MIHookEfficiency extends $MIHookInstance {
        onIncreaseEfficiencyTicks(arg0: $EfficiencyMIHookContext): void;
        onDecreaseEfficiencyTicks(arg0: $EfficiencyMIHookContext): void;
        getPriority(): number;
        onGetRecipeMaxEu(arg0: $EfficiencyMIHookContext): void;
        onTickStart(arg0: $EfficiencyMIHookContext): void;
        shouldAlwaysRun(): boolean;
        onReadNbt(arg0: $EfficiencyMIHookContext): void;
        onTickEnd(arg0: $EfficiencyMIHookContext, arg1: number): void;
        get priority(): number;
    }
    /**
     * Values that may be interpreted as {@link $MIHookEfficiency}.
     */
    export type $MIHookEfficiency_ = (() => number);
}
