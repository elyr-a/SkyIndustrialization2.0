import { $Consumer_ } from "@package/java/util/function";
import { $SlotPositions$Builder } from "@package/aztech/modern_industrialization/inventory";
import { $ProgressBar$Params, $RecipeEfficiencyBar$Params, $EnergyBar$Params, $ProgressBar$Params_ } from "@package/aztech/modern_industrialization/machines/guicomponents";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $MultiblockMachinesMIHookContext, $SingleBlockSpecialMachinesMIHookContext } from "@package/net/swedz/tesseract/neoforge/compat/mi/hook/context/listener";
import { $List } from "@package/java/util";
import { $ShapeTemplateHelper } from "@package/aztech/modern_industrialization/compat/kubejs/machine";
import { $MachineRecipeType } from "@package/aztech/modern_industrialization/machines/recipe";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ShapeTemplate$Builder, $HatchFlags, $ShapeTemplate, $SimpleMember, $ShapeTemplate$LayeredBuilder } from "@package/aztech/modern_industrialization/machines/multiblocks";
import { $CustomMultiblockTier_, $CustomMultiblockTier } from "@package/net/swedz/mi_tweaks/machine/blockentity/multiblock/tiered";

declare module "@package/net/swedz/mi_tweaks/compat/kubejs/machine" {
    export class $RecipeTypeHelper {
    }
    export interface $RecipeTypeHelper {
        getRecipeType(arg0: $ResourceLocation_): $MachineRecipeType;
    }
    export class $BarHelper {
    }
    export interface $BarHelper {
        progressBar(arg0: number, arg1: number, arg2: string): $ProgressBar$Params;
        energyBar(arg0: number, arg1: number): $EnergyBar$Params;
        efficiencyBar(arg0: number, arg1: number): $RecipeEfficiencyBar$Params;
    }
    export class $RegisterTieredMultiblocksEventJS$TierAdder {
        get(): $List<$CustomMultiblockTier>;
        add(...arg0: $CustomMultiblockTier_[]): $RegisterTieredMultiblocksEventJS$TierAdder;
        constructor();
    }
    export class $RegisterPowerlessMachinesEventJS implements $KubeEvent, $ShapeTemplateHelper, $RecipeTypeHelper, $BarHelper {
        singleblock(arg0: string, arg1: string, arg2: $MachineRecipeType, arg3: number, arg4: $ProgressBar$Params_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: $Consumer_<$SlotPositions$Builder>, arg11: $Consumer_<$SlotPositions$Builder>, arg12: string, arg13: string, arg14: boolean, arg15: boolean, arg16: boolean, arg17: number, arg18: boolean): void;
        multiblock(arg0: string, arg1: string, arg2: $MachineRecipeType, arg3: $ShapeTemplate, arg4: $ProgressBar$Params_, arg5: $Consumer_<$SlotPositions$Builder>, arg6: $Consumer_<$SlotPositions$Builder>, arg7: $Consumer_<$SlotPositions$Builder>, arg8: $Consumer_<$SlotPositions$Builder>, arg9: string, arg10: string, arg11: boolean, arg12: boolean, arg13: boolean, arg14: number, arg15: boolean): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        hatchOf(...arg0: string[]): $HatchFlags;
        noHatch(): $HatchFlags;
        startShape(arg0: string): $ShapeTemplate$Builder;
        memberOfBlockTag(arg0: string, arg1: string): $SimpleMember;
        memberOfBlock(arg0: string): $SimpleMember;
        layeredShape(arg0: string, arg1: string[][]): $ShapeTemplate$LayeredBuilder;
        getRecipeType(arg0: $ResourceLocation_): $MachineRecipeType;
        progressBar(arg0: number, arg1: number, arg2: string): $ProgressBar$Params;
        energyBar(arg0: number, arg1: number): $EnergyBar$Params;
        efficiencyBar(arg0: number, arg1: number): $RecipeEfficiencyBar$Params;
        constructor(arg0: $SingleBlockSpecialMachinesMIHookContext);
        constructor(arg0: $MultiblockMachinesMIHookContext);
    }
    export class $WorkstationAdder {
        get(): $List<$ResourceLocation>;
        add(...arg0: $ResourceLocation_[]): $WorkstationAdder;
        constructor();
    }
    export class $RegisterTieredMultiblocksEventJS implements $KubeEvent, $ShapeTemplateHelper, $RecipeTypeHelper, $BarHelper {
        electricStandalone(arg0: string, arg1: string, arg2: $Consumer_<$RegisterTieredMultiblocksEventJS$TierAdder>, arg3: $ProgressBar$Params_, arg4: $Consumer_<$SlotPositions$Builder>, arg5: $Consumer_<$SlotPositions$Builder>, arg6: $Consumer_<$SlotPositions$Builder>, arg7: $Consumer_<$SlotPositions$Builder>, arg8: string, arg9: string, arg10: boolean, arg11: boolean, arg12: boolean): void;
        steamStandalone(arg0: string, arg1: string, arg2: $Consumer_<$RegisterTieredMultiblocksEventJS$TierAdder>, arg3: $ProgressBar$Params_, arg4: $Consumer_<$SlotPositions$Builder>, arg5: $Consumer_<$SlotPositions$Builder>, arg6: $Consumer_<$SlotPositions$Builder>, arg7: $Consumer_<$SlotPositions$Builder>, arg8: string, arg9: string, arg10: boolean, arg11: boolean, arg12: boolean): void;
        createTier(arg0: string, arg1: $MachineRecipeType, arg2: $ShapeTemplate, arg3: $Consumer_<$WorkstationAdder>): $CustomMultiblockTier;
        createTier(arg0: string, arg1: $MachineRecipeType, arg2: $ShapeTemplate, arg3: $Consumer_<$WorkstationAdder>, arg4: number, arg5: number, arg6: number): $CustomMultiblockTier;
        createTier(arg0: string, arg1: $MachineRecipeType, arg2: $ShapeTemplate, arg3: $Consumer_<$WorkstationAdder>, arg4: number): $CustomMultiblockTier;
        createTier(arg0: string, arg1: $MachineRecipeType, arg2: $ShapeTemplate, arg3: $Consumer_<$WorkstationAdder>, arg4: number, arg5: number): $CustomMultiblockTier;
        electric(arg0: string, arg1: string, arg2: $Consumer_<$RegisterTieredMultiblocksEventJS$TierAdder>, arg3: string, arg4: string, arg5: boolean, arg6: boolean, arg7: boolean): void;
        steam(arg0: string, arg1: string, arg2: $Consumer_<$RegisterTieredMultiblocksEventJS$TierAdder>, arg3: string, arg4: string, arg5: boolean, arg6: boolean, arg7: boolean): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        hatchOf(...arg0: string[]): $HatchFlags;
        noHatch(): $HatchFlags;
        startShape(arg0: string): $ShapeTemplate$Builder;
        memberOfBlockTag(arg0: string, arg1: string): $SimpleMember;
        memberOfBlock(arg0: string): $SimpleMember;
        layeredShape(arg0: string, arg1: string[][]): $ShapeTemplate$LayeredBuilder;
        getRecipeType(arg0: $ResourceLocation_): $MachineRecipeType;
        progressBar(arg0: number, arg1: number, arg2: string): $ProgressBar$Params;
        energyBar(arg0: number, arg1: number): $EnergyBar$Params;
        efficiencyBar(arg0: number, arg1: number): $RecipeEfficiencyBar$Params;
        constructor(arg0: $MultiblockMachinesMIHookContext);
    }
    export class $RegisterBatchMultiblocksEventJS implements $KubeEvent, $ShapeTemplateHelper, $RecipeTypeHelper, $BarHelper {
        electricStandalone(arg0: string, arg1: string, arg2: $MachineRecipeType, arg3: $ShapeTemplate, arg4: $ProgressBar$Params_, arg5: $Consumer_<$SlotPositions$Builder>, arg6: $Consumer_<$SlotPositions$Builder>, arg7: $Consumer_<$SlotPositions$Builder>, arg8: $Consumer_<$SlotPositions$Builder>, arg9: string, arg10: string, arg11: boolean, arg12: boolean, arg13: boolean, arg14: number, arg15: number): void;
        electricStandalone(arg0: string, arg1: string, arg2: $MachineRecipeType, arg3: $ShapeTemplate, arg4: $ProgressBar$Params_, arg5: $Consumer_<$SlotPositions$Builder>, arg6: $Consumer_<$SlotPositions$Builder>, arg7: $Consumer_<$SlotPositions$Builder>, arg8: $Consumer_<$SlotPositions$Builder>, arg9: string, arg10: string, arg11: boolean, arg12: boolean, arg13: boolean, arg14: number, arg15: number, arg16: boolean): void;
        steamStandalone(arg0: string, arg1: string, arg2: $MachineRecipeType, arg3: $ShapeTemplate, arg4: $ProgressBar$Params_, arg5: $Consumer_<$SlotPositions$Builder>, arg6: $Consumer_<$SlotPositions$Builder>, arg7: $Consumer_<$SlotPositions$Builder>, arg8: $Consumer_<$SlotPositions$Builder>, arg9: string, arg10: string, arg11: boolean, arg12: boolean, arg13: boolean, arg14: number, arg15: number): void;
        electric(arg0: string, arg1: string, arg2: $MachineRecipeType, arg3: $ShapeTemplate, arg4: $Consumer_<$WorkstationAdder>, arg5: string, arg6: string, arg7: boolean, arg8: boolean, arg9: boolean, arg10: number, arg11: number, arg12: boolean): void;
        electric(arg0: string, arg1: string, arg2: $MachineRecipeType, arg3: $ShapeTemplate, arg4: $Consumer_<$WorkstationAdder>, arg5: string, arg6: string, arg7: boolean, arg8: boolean, arg9: boolean, arg10: number, arg11: number): void;
        steam(arg0: string, arg1: string, arg2: $MachineRecipeType, arg3: $ShapeTemplate, arg4: $Consumer_<$WorkstationAdder>, arg5: string, arg6: string, arg7: boolean, arg8: boolean, arg9: boolean, arg10: number, arg11: number): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        hatchOf(...arg0: string[]): $HatchFlags;
        noHatch(): $HatchFlags;
        startShape(arg0: string): $ShapeTemplate$Builder;
        memberOfBlockTag(arg0: string, arg1: string): $SimpleMember;
        memberOfBlock(arg0: string): $SimpleMember;
        layeredShape(arg0: string, arg1: string[][]): $ShapeTemplate$LayeredBuilder;
        getRecipeType(arg0: $ResourceLocation_): $MachineRecipeType;
        progressBar(arg0: number, arg1: number, arg2: string): $ProgressBar$Params;
        energyBar(arg0: number, arg1: number): $EnergyBar$Params;
        efficiencyBar(arg0: number, arg1: number): $RecipeEfficiencyBar$Params;
        constructor(arg0: $MultiblockMachinesMIHookContext);
    }
}
