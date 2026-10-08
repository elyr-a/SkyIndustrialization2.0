import { $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $UUID, $List, $List_, $Collection } from "@package/java/util";
import { $MachineRecipe, $MachineRecipeType } from "@package/aztech/modern_industrialization/machines/recipe";
import { $Simulation_ } from "@package/aztech/modern_industrialization/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ActiveRecipeHolder } from "@package/net/swedz/tesseract/neoforge/compat/mi/api";
import { $MachineBlockEntity, $MachineComponent, $MachineComponent$ServerOnly } from "@package/aztech/modern_industrialization/machines";
import { $Enum, $Record } from "@package/java/lang";
import { $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $CrafterComponentAccessor } from "@package/net/swedz/tesseract/neoforge/compat/mi/mixin/accessor";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $MachineModelClientData } from "@package/aztech/modern_industrialization/machines/models";
import { $FluidDefinition } from "@package/aztech/modern_industrialization/definition";
import { $SlotPositions, $ConfigurableFluidStack, $ConfigurableItemStack, $MIInventory } from "@package/aztech/modern_industrialization/inventory";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $InventoryAccess, $CrafterAccess } from "@package/aztech/modern_industrialization/api/machine/component";
import { $MachineProcessCondition$Context } from "@package/aztech/modern_industrialization/machines/recipe/condition";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $PlayerStatistics } from "@package/aztech/modern_industrialization/stats";

declare module "@package/aztech/modern_industrialization/machines/components" {
    export class $OrientationComponent implements $MachineComponent {
        onPlaced(arg0: $LivingEntity, arg1: $ItemStack_): void;
        useWrench(arg0: $Player, arg1: $InteractionHand_, arg2: $Direction_): boolean;
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeModelData(arg0: $MachineModelClientData): void;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        facingDirection: $Direction;
        extractFluids: boolean;
        outputDirection: $Direction;
        params: $OrientationComponent$Params;
        extractItems: boolean;
        constructor(arg0: $OrientationComponent$Params, arg1: $BlockEntity);
    }
    export class $MachineInventoryComponent implements $CrafterComponent$Inventory, $MachineComponent$ServerOnly {
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        hash(): number;
        getFluidInputs(): $List<$ConfigurableFluidStack>;
        getItemInputs(): $List<$ConfigurableItemStack>;
        getItemOutputs(): $List<$ConfigurableItemStack>;
        getFluidOutputs(): $List<$ConfigurableFluidStack>;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        itemInputCount: number;
        fluidInputCount: number;
        itemOutputCount: number;
        fluidOutputCount: number;
        inventory: $MIInventory;
        constructor(arg0: $List_<$ConfigurableItemStack>, arg1: $List_<$ConfigurableItemStack>, arg2: $List_<$ConfigurableFluidStack>, arg3: $List_<$ConfigurableFluidStack>, arg4: $SlotPositions, arg5: $SlotPositions);
        get fluidInputs(): $List<$ConfigurableFluidStack>;
        get itemInputs(): $List<$ConfigurableItemStack>;
        get itemOutputs(): $List<$ConfigurableItemStack>;
        get fluidOutputs(): $List<$ConfigurableFluidStack>;
    }
    export class $FluidItemConsumerComponent implements $MachineComponent$ServerOnly {
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getTooltips(): $List<$Component>;
        static ofFluidFuels(arg0: number, arg1: number): $FluidItemConsumerComponent;
        static ofFluid(arg0: number, arg1: $FluidItemConsumerComponent$EUProductionMap<$Fluid_>): $FluidItemConsumerComponent;
        static itemFuels(): $FluidItemConsumerComponent$EUProductionMap<$Item>;
        static fluidFuels(): $FluidItemConsumerComponent$EUProductionMap<$Fluid>;
        doAllowMoreThanOne(): boolean;
        getEuProduction(arg0: $List_<$ConfigurableFluidStack>, arg1: $List_<$ConfigurableItemStack>, arg2: number): number;
        static ofSingleFluid(arg0: number, arg1: $FluidDefinition, arg2: number): $FluidItemConsumerComponent;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        fluidEUProductionMap: $FluidItemConsumerComponent$EUProductionMap<$Fluid>;
        itemEUProductionMap: $FluidItemConsumerComponent$EUProductionMap<$Item>;
        maxEuProduction: number;
        constructor(arg0: number, arg1: number, arg2: $FluidItemConsumerComponent$EUProductionMap<$Item_>, arg3: $FluidItemConsumerComponent$EUProductionMap<$Fluid_>, arg4: boolean);
        get tooltips(): $List<$Component>;
    }
    export class $OrientationComponent$Params {
        static noFacing(arg0: boolean, arg1: boolean): $OrientationComponent$Params;
        static noFacingNoOutput(arg0: boolean, arg1: boolean): $OrientationComponent$Params;
        static noFacingNoOutput(): $OrientationComponent$Params;
        hasFacing: boolean;
        hasExtractFluids: boolean;
        hasOutput: boolean;
        canBeVertical: boolean;
        hasExtractItems: boolean;
        constructor(arg0: boolean, arg1: boolean, arg2: boolean);
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean);
    }
    export class $CrafterComponent$Inventory {
    }
    export interface $CrafterComponent$Inventory extends $InventoryAccess {
        hash(): number;
        getFluidInputs(): $List<$ConfigurableFluidStack>;
        getItemInputs(): $List<$ConfigurableItemStack>;
        getItemOutputs(): $List<$ConfigurableItemStack>;
        getFluidOutputs(): $List<$ConfigurableFluidStack>;
        get fluidInputs(): $List<$ConfigurableFluidStack>;
        get itemInputs(): $List<$ConfigurableItemStack>;
        get itemOutputs(): $List<$ConfigurableItemStack>;
        get fluidOutputs(): $List<$ConfigurableFluidStack>;
    }
    export class $FluidItemConsumerComponent$NumberOfFuel extends $Enum<$FluidItemConsumerComponent$NumberOfFuel> {
        static values(): $FluidItemConsumerComponent$NumberOfFuel[];
        static valueOf(arg0: string): $FluidItemConsumerComponent$NumberOfFuel;
        static SINGLE: $FluidItemConsumerComponent$NumberOfFuel;
        static NONE: $FluidItemConsumerComponent$NumberOfFuel;
        static MANY: $FluidItemConsumerComponent$NumberOfFuel;
    }
    /**
     * Values that may be interpreted as {@link $FluidItemConsumerComponent$NumberOfFuel}.
     */
    export type $FluidItemConsumerComponent$NumberOfFuel_ = "none" | "single" | "many";
    export class $CrafterComponent implements $MachineComponent$ServerOnly, $CrafterAccess, $ActiveRecipeHolder<any>, $CrafterComponentAccessor {
        getInventory(): $CrafterComponent$Inventory;
        static getRecipes(arg0: $ServerLevel, arg1: $MachineRecipeType, arg2: $List_<$ConfigurableItemStack>): $Collection<$RecipeHolder<$MachineRecipe>>;
        getProgress(): number;
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getMaxEfficiencyTicks(): number;
        getRecipeTotalEuCost(arg0: $RecipeHolder_<any>): number;
        getBehavior(): $CrafterComponent$Behavior;
        getRecipeEuCost(arg0: $RecipeHolder_<any>): number;
        getBaseRecipeEu(): number;
        getActiveRecipe(): $RecipeHolder<any>;
        getCurrentRecipeEu(): number;
        getEfficiencyTicks(): number;
        hasActiveRecipe(): boolean;
        lockRecipe(arg0: $ResourceLocation_, arg1: $Inventory): void;
        tickRecipe(): boolean;
        matchesMultipleRecipes(): boolean;
        doConditionsMatchForRecipe(arg0: $RecipeHolder_<any>): boolean;
        increaseEfficiencyTicks(arg0: number): void;
        tryContinueRecipe(): boolean;
        static doInputsMatch(arg0: $List_<$ConfigurableItemStack>, arg1: $List_<$ConfigurableFluidStack>, arg2: $MachineRecipe): boolean;
        decreaseEfficiencyTicks(): void;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getConditionContext(): $MachineProcessCondition$Context;
        mI_Sound_Addon$lastSoundTime: number;
        constructor(arg0: $MachineBlockEntity, arg1: $CrafterComponent$Inventory, arg2: $CrafterComponent$Behavior);
        get inventory(): $CrafterComponent$Inventory;
        get progress(): number;
        get maxEfficiencyTicks(): number;
        get behavior(): $CrafterComponent$Behavior;
        get baseRecipeEu(): number;
        get activeRecipe(): $RecipeHolder<any>;
        get currentRecipeEu(): number;
        get efficiencyTicks(): number;
        get conditionContext(): $MachineProcessCondition$Context;
    }
    export class $FluidItemConsumerComponent$EUProductionMap$InformationEntry<T> extends $Record {
        eu(): number;
        variant(): T;
        constructor(eu: number, variant: T);
    }
    /**
     * Values that may be interpreted as {@link $FluidItemConsumerComponent$EUProductionMap$InformationEntry}.
     */
    export type $FluidItemConsumerComponent$EUProductionMap$InformationEntry_<T> = { variant?: any, eu?: number,  } | [variant?: any, eu?: number, ];
    export class $OverclockComponent$Catalyst extends $Record {
        resourceLocation(): $ResourceLocation;
        ticks(): number;
        multiplier(): number;
        constructor(multiplier: number, resourceLocation: $ResourceLocation_, ticks: number);
    }
    /**
     * Values that may be interpreted as {@link $OverclockComponent$Catalyst}.
     */
    export type $OverclockComponent$Catalyst_ = { resourceLocation?: $ResourceLocation_, ticks?: number, multiplier?: number,  } | [resourceLocation?: $ResourceLocation_, ticks?: number, multiplier?: number, ];
    export class $PlacedByComponent implements $MachineComponent {
        onPlaced(arg0: $LivingEntity): void;
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        placerId: $UUID;
        constructor();
    }
    export class $CrafterComponent$Behavior {
    }
    export interface $CrafterComponent$Behavior {
        recipeType(): $MachineRecipeType;
        getBaseRecipeEu(): number;
        getOwnerUuid(): $UUID;
        getStatsOrDummy(): $PlayerStatistics;
        getMaxFluidOutputs(): number;
        isOverdriving(): boolean;
        getCrafterWorld(): $ServerLevel;
        isEnabled(): boolean;
        getMaxRecipeEu(): number;
        banRecipe(arg0: $MachineRecipe): boolean;
        onCraft(): void;
        consumeEu(arg0: number, arg1: $Simulation_): number;
        oneFluidInputPerStack(): boolean;
        get baseRecipeEu(): number;
        get ownerUuid(): $UUID;
        get statsOrDummy(): $PlayerStatistics;
        get maxFluidOutputs(): number;
        get overdriving(): boolean;
        get crafterWorld(): $ServerLevel;
        get enabled(): boolean;
        get maxRecipeEu(): number;
    }
    export class $FluidItemConsumerComponent$EUProductionMap<T> {
        static empty<T>(): $FluidItemConsumerComponent$EUProductionMap<T>;
    }
    export interface $FluidItemConsumerComponent$EUProductionMap<T> {
        accept(arg0: T): boolean;
        getAllAcceptedWithEU(): $List<$FluidItemConsumerComponent$EUProductionMap$InformationEntry<T>>;
        getAllAccepted(): $List<T>;
        getNumberOfFuel(): $FluidItemConsumerComponent$NumberOfFuel;
        getEuProduction(arg0: T): number;
        isStandardFuels(): boolean;
        get allAcceptedWithEU(): $List<$FluidItemConsumerComponent$EUProductionMap$InformationEntry<T>>;
        get allAccepted(): $List<T>;
        get numberOfFuel(): $FluidItemConsumerComponent$NumberOfFuel;
        get standardFuels(): boolean;
    }
}
