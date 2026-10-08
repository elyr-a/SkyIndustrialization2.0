import { $JsonObject_ } from "@package/com/google/gson";
import { $Consumer_ } from "@package/java/util/function";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $NuclearConstant$ScatteringType_ } from "@package/aztech/modern_industrialization/nuclear";
import { $MaterialBuilder } from "@package/aztech/modern_industrialization/materials";
import { $Object } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";

declare module "@package/aztech/modern_industrialization/compat/kubejs/material" {
    export class $ModifyMaterialEventJS implements $KubeEvent {
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
        builder: $MaterialBuilderJSWrapper;
        name: string;
        constructor(arg0: $MaterialBuilder);
    }
    export class $AddMaterialsEventJS implements $KubeEvent {
        createMaterial(arg0: string, arg1: string, arg2: number, arg3: $Consumer_<$MaterialBuilderJSWrapper>): void;
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
        constructor();
    }
    export class $MaterialBuilderJSWrapper {
        addParts(...arg0: string[]): $MaterialBuilderJSWrapper;
        hardness(arg0: string): $MaterialBuilderJSWrapper;
        barrel(arg0: number): $MaterialBuilderJSWrapper;
        barrel(arg0: string, arg1: string, arg2: number): $MaterialBuilderJSWrapper;
        ore(arg0: $JsonObject_, arg1: $ResourceLocation_): $MaterialBuilderJSWrapper;
        ore(arg0: $JsonObject_): $MaterialBuilderJSWrapper;
        tank(arg0: string, arg1: string, arg2: number): $MaterialBuilderJSWrapper;
        tank(arg0: number): $MaterialBuilderJSWrapper;
        machineCasing(arg0: number): $MaterialBuilderJSWrapper;
        machineCasing(arg0: string, arg1: string): $MaterialBuilderJSWrapper;
        machineCasing(): $MaterialBuilderJSWrapper;
        machineCasing(arg0: string, arg1: string, arg2: number): $MaterialBuilderJSWrapper;
        customRegularPart(arg0: string, arg1: string): $MaterialBuilderJSWrapper;
        addExternalPart(arg0: string, arg1: string, arg2: string): $MaterialBuilderJSWrapper;
        addExternalPart(arg0: string, arg1: string): $MaterialBuilderJSWrapper;
        materialSet(arg0: string): $MaterialBuilderJSWrapper;
        setMainPart(arg0: string): $MaterialBuilderJSWrapper;
        defaultRecipes(): $MaterialBuilderJSWrapper;
        nuclearFuel(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $MaterialBuilderJSWrapper;
        nuclearFuelMix(arg0: string, arg1: string, arg2: number): $MaterialBuilderJSWrapper;
        specialCasing(arg0: string, arg1: string, arg2: number): $MaterialBuilderJSWrapper;
        specialCasing(arg0: string, arg1: string): $MaterialBuilderJSWrapper;
        forgeHammerRecipes(): $MaterialBuilderJSWrapper;
        block(arg0: string): $MaterialBuilderJSWrapper;
        battery(arg0: number): $MaterialBuilderJSWrapper;
        cable(arg0: string): $MaterialBuilderJSWrapper;
        controlRod(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $NuclearConstant$ScatteringType_, arg7: number): $MaterialBuilderJSWrapper;
        rawMetal(arg0: string): $MaterialBuilderJSWrapper;
        rawMetal(arg0: string, arg1: boolean): $MaterialBuilderJSWrapper;
        pipeCasing(arg0: number): $MaterialBuilderJSWrapper;
        pipeCasing(): $MaterialBuilderJSWrapper;
        fuelRods(): $MaterialBuilderJSWrapper;
        constructor(arg0: $MaterialBuilder);
        set mainPart(value: string);
    }
}
