import { $SteamMode, $SteamMode_ } from "@package/aztech/modern_industrialization/compat/rei/machines";
import { $ProgressBar$Params, $RecipeEfficiencyBar$Params, $EnergyBar$Params } from "@package/aztech/modern_industrialization/machines/guicomponents";
import { $CableTier } from "@package/aztech/modern_industrialization/api/energy";
import { $CrafterComponent, $MachineInventoryComponent } from "@package/aztech/modern_industrialization/machines/components";
import { $MachineRecipeType } from "@package/aztech/modern_industrialization/machines/recipe";
import { $MachineCasing } from "@package/aztech/modern_industrialization/machines/models";
import { $MIHook } from "@package/net/swedz/tesseract/neoforge/compat/mi/hook";
import { $MachineBlockRegistrators_, $MachineGuiConfigurator_, $MachineRecipePredicate_, $MachineBlockHolderHatchModifier, $MachineBlockPropertiesModifier_, $MachineBlockEntityWithGuiFactory_, $MachineBlockFactory_, $MachineRecipePredicate, $MachineBlockHolderModifier_, $MachineBlockHatchBlockEntityFactory } from "@package/net/swedz/tesseract/neoforge/compat/mi/machine/builder/function";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MachineGuiParameters } from "@package/aztech/modern_industrialization/machines/gui";
import { $MachineBlockEntity } from "@package/aztech/modern_industrialization/machines";
import { $MachineSlotConfiguration$Builder, $MachineSlotConfiguration } from "@package/net/swedz/tesseract/neoforge/compat/mi/machine/builder/slots";
import { $ShapeTemplate } from "@package/aztech/modern_industrialization/machines/multiblocks";
import { $SingleBlockCraftingMachines$Config } from "@package/aztech/modern_industrialization/machines/init";
export * as function from "@package/net/swedz/tesseract/neoforge/compat/mi/machine/builder/function";
export * as slots from "@package/net/swedz/tesseract/neoforge/compat/mi/machine/builder/slots";

declare module "@package/net/swedz/tesseract/neoforge/compat/mi/machine/builder" {
    export class $SingleBlockCraftingMachineBuilder extends $MachineWithGuiBuilder<$SingleBlockCraftingMachineBuilder> {
        gui(arg0: $SteamMode_, arg1: $MachineGuiConfigurator_): $SingleBlockCraftingMachineBuilder;
        bronze(): $SingleBlockCraftingMachineBuilder;
        steel(): $SingleBlockCraftingMachineBuilder;
        extra(arg0: $Consumer_<$SingleBlockCraftingMachines$Config>): $SingleBlockCraftingMachineBuilder;
        builtinModel(arg0: $MachineCasing, arg1: string, arg2: $Consumer_<$MachineBuiltinModelBuilder>): $SingleBlockCraftingMachineBuilder;
        builtinModel(arg0: string, arg1: $Consumer_<$MachineBuiltinModelBuilder>): $SingleBlockCraftingMachineBuilder;
        builtinModel(arg0: string): $SingleBlockCraftingMachineBuilder;
        electric(): $SingleBlockCraftingMachineBuilder;
        steamSlotPosition(arg0: number, arg1: number): $SingleBlockCraftingMachineBuilder;
    }
    export class $MachineGuiConfiguration {
        getRecipeType(): $MachineRecipeType;
        progressBar(arg0: number, arg1: number, arg2: string): $MachineGuiConfiguration;
        progressBar(arg0: number, arg1: number, arg2: string, arg3: boolean): $MachineGuiConfiguration;
        getPredicate(): $MachineRecipePredicate;
        getSlots(): $MachineSlotConfiguration;
        guiHeight(arg0: number): $MachineGuiConfiguration;
        isMultiblock(): boolean;
        copy(): $MachineGuiConfiguration;
        slots(arg0: $Consumer_<$MachineSlotConfiguration$Builder>): $MachineGuiConfiguration;
        predicate(arg0: $MachineRecipePredicate_): $MachineGuiConfiguration;
        getSteamMode(): $SteamMode;
        inventoryOnlySlots(arg0: $Consumer_<$MachineSlotConfiguration$Builder>): $MachineGuiConfiguration;
        hasLockButton(): boolean;
        getEnergyBar(): $EnergyBar$Params;
        getEfficiencyBar(): $RecipeEfficiencyBar$Params;
        registerEnergyBar(arg0: $MachineBlockEntity, arg1: $Supplier_<number>, arg2: $Supplier_<number>): void;
        buildInventory(): $MachineInventoryComponent;
        getGuiHeight(): number;
        getProgressBar(): $ProgressBar$Params;
        createGuiParams(arg0: $ResourceLocation_): $MachineGuiParameters;
        energyBar(arg0: number, arg1: number): $MachineGuiConfiguration;
        lockButton(arg0: boolean): $MachineGuiConfiguration;
        efficiencyBar(arg0: number, arg1: number): $MachineGuiConfiguration;
        registerProgressBar(arg0: $MachineBlockEntity, arg1: $Supplier_<number>): void;
        registerEfficiencyBar(arg0: $MachineBlockEntity, arg1: $CrafterComponent): void;
        getInventoryOnlySlots(): $MachineSlotConfiguration;
        get recipeType(): $MachineRecipeType;
        get multiblock(): boolean;
        get steamMode(): $SteamMode;
    }
    export class $MachineBuilder<T extends $MachineBuilder<T>> {
        static hatch(arg0: $MIHook, arg1: string, arg2: string): $HatchMachineBuilder;
        static special(arg0: $MIHook, arg1: string, arg2: string, arg3: boolean, arg4: $MachineBlockEntityWithGuiFactory_): $SpecialMachineBuilder;
        creator(arg0: $MachineBlockFactory_): T;
        modify(arg0: $MachineBlockHolderModifier_): T;
        excludeDefaultBlockProperties(): T;
        properties(arg0: $MachineBlockPropertiesModifier_): T;
        builtinModel(arg0: $MachineCasing, arg1: string): T;
        builtinModel(arg0: $MachineCasing, arg1: string, arg2: $Consumer_<$MachineBuiltinModelBuilder>): T;
        registrator(arg0: $MachineBlockRegistrators_): T;
        registerMachine(): T;
        static singleBlockCrafting(arg0: $MIHook, arg1: string, arg2: string, arg3: $MachineRecipeType): $SingleBlockCraftingMachineBuilder;
        excludeDefaultMineableTags(): T;
    }
    export class $MachineBuiltinModelBuilder {
        top(arg0: boolean): $MachineBuiltinModelBuilder;
        top(): $MachineBuiltinModelBuilder;
        front(arg0: boolean): $MachineBuiltinModelBuilder;
        front(): $MachineBuiltinModelBuilder;
        side(arg0: boolean): $MachineBuiltinModelBuilder;
        side(): $MachineBuiltinModelBuilder;
        active(): $MachineBuiltinModelBuilder;
        active(arg0: boolean): $MachineBuiltinModelBuilder;
        outputTextureItem(): $MachineBuiltinModelBuilder;
        outputTexture(arg0: string): $MachineBuiltinModelBuilder;
        outputTexture(arg0: $ResourceLocation_): $MachineBuiltinModelBuilder;
        outputTextureFluid(): $MachineBuiltinModelBuilder;
        outputTextureDefault(): $MachineBuiltinModelBuilder;
        outputTextureEnergy(): $MachineBuiltinModelBuilder;
    }
    export class $MachineWithGuiBuilder<T extends $MachineWithGuiBuilder<T>> extends $MachineBuilder<T> {
    }
    export class $HatchMachineBuilder extends $MachineBuilder<$HatchMachineBuilder> {
        special(arg0: $MachineBlockHatchBlockEntityFactory): $HatchMachineBuilder;
        special(arg0: $MachineBlockHatchBlockEntityFactory, arg1: boolean): $HatchMachineBuilder;
        fluid(arg0: number): $HatchMachineBuilder;
        modify(arg0: $MachineBlockHolderHatchModifier): $HatchMachineBuilder;
        energy(arg0: $CableTier): $HatchMachineBuilder;
        item(arg0: number, arg1: number, arg2: number, arg3: number): $HatchMachineBuilder;
        builtinModel(): $HatchMachineBuilder;
        builtinModel(arg0: string, arg1: $Consumer_<$MachineBuiltinModelBuilder>): $HatchMachineBuilder;
        builtinModel(arg0: $Consumer_<$MachineBuiltinModelBuilder>): $HatchMachineBuilder;
        builtinModel(arg0: $MachineCasing, arg1: string): $HatchMachineBuilder;
        builtinModel(arg0: $MachineCasing, arg1: string, arg2: $Consumer_<$MachineBuiltinModelBuilder>): $HatchMachineBuilder;
        builtinModel(arg0: $MachineCasing, arg1: $Consumer_<$MachineBuiltinModelBuilder>): $HatchMachineBuilder;
        builtinModel(arg0: $MachineCasing): $HatchMachineBuilder;
        registerIO(arg0: boolean): $HatchMachineBuilder;
        registerIO(): $HatchMachineBuilder;
    }
    export class $SpecialMachineBuilder extends $MachineWithGuiBuilder<$SpecialMachineBuilder> {
        gui(arg0: $MachineGuiConfigurator_): $SpecialMachineBuilder;
        gui(arg0: boolean, arg1: $SteamMode_, arg2: $MachineRecipeType, arg3: $MachineGuiConfigurator_): $SpecialMachineBuilder;
        gui(arg0: $SteamMode_, arg1: $MachineRecipeType, arg2: $MachineGuiConfigurator_): $SpecialMachineBuilder;
        builtinModel(arg0: string, arg1: $Consumer_<$MachineBuiltinModelBuilder>): $SpecialMachineBuilder;
        builtinModel(arg0: string): $SpecialMachineBuilder;
        builtinModel(arg0: $MachineCasing, arg1: string, arg2: $Consumer_<$MachineBuiltinModelBuilder>): $SpecialMachineBuilder;
        registerMultiblockShape(arg0: $ShapeTemplate): $SpecialMachineBuilder;
        registerMultiblockShape(arg0: $ShapeTemplate, arg1: string): $SpecialMachineBuilder;
        registerRecipeCategory(): $SpecialMachineBuilder;
        registerExtraWorkstations(...arg0: $ResourceLocation_[]): $SpecialMachineBuilder;
        registerAsWorkstationFor(arg0: $ResourceLocation_): $SpecialMachineBuilder;
    }
}
