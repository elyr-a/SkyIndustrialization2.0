import { $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $TransferVariant } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/storage";
import { $Item } from "@package/net/minecraft/world/item";
import { $MIInventory, $SlotPositions$Builder, $SlotPositions, $AbstractConfigurableStack } from "@package/aztech/modern_industrialization/inventory";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $MachineInventoryComponent } from "@package/aztech/modern_industrialization/machines/components";
import { $Record } from "@package/java/lang";

declare module "@package/net/swedz/tesseract/neoforge/compat/mi/machine/builder/slots" {
    export class $MachineSlotConfiguration$Builder {
        itemInputs(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Supplier_<$Item>): $MachineSlotConfiguration$Builder;
        itemInputs(arg0: number, arg1: number, arg2: number, arg3: number): $MachineSlotConfiguration$Builder;
        fluidInputs(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): $MachineSlotConfiguration$Builder;
        fluidInputs(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Supplier_<$Fluid>): $MachineSlotConfiguration$Builder;
        fluidInputs(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Supplier_<$Fluid>, arg5: number): $MachineSlotConfiguration$Builder;
        fluidInputs(arg0: number, arg1: number, arg2: number, arg3: number): $MachineSlotConfiguration$Builder;
        itemOutputs(arg0: number, arg1: number, arg2: number, arg3: number): $MachineSlotConfiguration$Builder;
        itemOutputs(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Supplier_<$Item>): $MachineSlotConfiguration$Builder;
        fluidOutputs(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): $MachineSlotConfiguration$Builder;
        fluidOutputs(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Supplier_<$Fluid>): $MachineSlotConfiguration$Builder;
        fluidOutputs(arg0: number, arg1: number, arg2: number, arg3: number): $MachineSlotConfiguration$Builder;
        fluidOutputs(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Supplier_<$Fluid>, arg5: number): $MachineSlotConfiguration$Builder;
        fluidCapacity(arg0: number): $MachineSlotConfiguration$Builder;
        fluidOutput(arg0: number, arg1: number): $MachineSlotConfiguration$Builder;
        fluidOutput(arg0: number, arg1: number, arg2: number): $MachineSlotConfiguration$Builder;
        fluidOutput(arg0: number, arg1: number, arg2: $Supplier_<$Fluid>): $MachineSlotConfiguration$Builder;
        fluidOutput(arg0: number, arg1: number, arg2: $Supplier_<$Fluid>, arg3: number): $MachineSlotConfiguration$Builder;
        append(arg0: $MachineSlotConfiguration$Builder): $MachineSlotConfiguration$Builder;
        append(arg0: $Consumer_<$SlotPositions$Builder>, arg1: $Consumer_<$SlotPositions$Builder>, arg2: $Consumer_<$SlotPositions$Builder>, arg3: $Consumer_<$SlotPositions$Builder>): $MachineSlotConfiguration$Builder;
        append(arg0: $SlotPositions, arg1: $SlotPositions, arg2: $SlotPositions, arg3: $SlotPositions): $MachineSlotConfiguration$Builder;
        append(arg0: $SlotPositions$Builder, arg1: $SlotPositions$Builder, arg2: $SlotPositions$Builder, arg3: $SlotPositions$Builder): $MachineSlotConfiguration$Builder;
        build(): $MachineSlotConfiguration;
        build(arg0: $Consumer_<$MachineSlotConfiguration$Builder>): $MachineSlotConfiguration;
        itemOutput(arg0: number, arg1: number): $MachineSlotConfiguration$Builder;
        itemOutput(arg0: number, arg1: number, arg2: $Supplier_<$Item>): $MachineSlotConfiguration$Builder;
        fluidInput(arg0: number, arg1: number, arg2: $Supplier_<$Fluid>, arg3: number): $MachineSlotConfiguration$Builder;
        fluidInput(arg0: number, arg1: number, arg2: $Supplier_<$Fluid>): $MachineSlotConfiguration$Builder;
        fluidInput(arg0: number, arg1: number, arg2: number): $MachineSlotConfiguration$Builder;
        fluidInput(arg0: number, arg1: number): $MachineSlotConfiguration$Builder;
        itemInput(arg0: number, arg1: number, arg2: $Supplier_<$Item>): $MachineSlotConfiguration$Builder;
        itemInput(arg0: number, arg1: number): $MachineSlotConfiguration$Builder;
        fluidIOs(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Supplier_<$Fluid>, arg5: number): $MachineSlotConfiguration$Builder;
        fluidIOs(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Supplier_<$Fluid>): $MachineSlotConfiguration$Builder;
        fluidIOs(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): $MachineSlotConfiguration$Builder;
        fluidIOs(arg0: number, arg1: number, arg2: number, arg3: number): $MachineSlotConfiguration$Builder;
        fluidIO(arg0: number, arg1: number, arg2: number): $MachineSlotConfiguration$Builder;
        fluidIO(arg0: number, arg1: number, arg2: $Supplier_<$Fluid>): $MachineSlotConfiguration$Builder;
        fluidIO(arg0: number, arg1: number, arg2: $Supplier_<$Fluid>, arg3: number): $MachineSlotConfiguration$Builder;
        fluidIO(arg0: number, arg1: number): $MachineSlotConfiguration$Builder;
        itemIOs(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Supplier_<$Item>): $MachineSlotConfiguration$Builder;
        itemIOs(arg0: number, arg1: number, arg2: number, arg3: number): $MachineSlotConfiguration$Builder;
        itemIO(arg0: number, arg1: number): $MachineSlotConfiguration$Builder;
        itemIO(arg0: number, arg1: number, arg2: $Supplier_<$Item>): $MachineSlotConfiguration$Builder;
        constructor();
    }
    export class $MachineSlotDefinition<T, K extends $TransferVariant<T>> {
        lock(): T;
        x(): number;
        create(): $AbstractConfigurableStack<T, K>;
        y(): number;
        playerInsert(): boolean;
        pipesInsert(): boolean;
        playerExtract(): boolean;
        pipesExtract(): boolean;
        hasLock(): boolean;
        constructor(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $Supplier_<T>);
    }
    export class $MachineSlotConfiguration$AllSlotPositions extends $Record {
        items(): $SlotPositions;
        itemInputs(): $SlotPositions;
        fluidInputs(): $SlotPositions;
        itemOutputs(): $SlotPositions;
        fluidOutputs(): $SlotPositions;
        all(): $SlotPositions;
        outputs(): number;
        inputs(): number;
        fluids(): $SlotPositions;
        hasOutputs(): boolean;
        hasInputs(): boolean;
        hasItems(): boolean;
        hasFluids(): boolean;
        constructor(all: $SlotPositions, items: $SlotPositions, itemInputs: $SlotPositions, itemOutputs: $SlotPositions, fluids: $SlotPositions, fluidInputs: $SlotPositions, fluidOutputs: $SlotPositions);
    }
    /**
     * Values that may be interpreted as {@link $MachineSlotConfiguration$AllSlotPositions}.
     */
    export type $MachineSlotConfiguration$AllSlotPositions_ = { itemOutputs?: $SlotPositions, itemInputs?: $SlotPositions, fluids?: $SlotPositions, items?: $SlotPositions, fluidInputs?: $SlotPositions, fluidOutputs?: $SlotPositions, all?: $SlotPositions,  } | [itemOutputs?: $SlotPositions, itemInputs?: $SlotPositions, fluids?: $SlotPositions, items?: $SlotPositions, fluidInputs?: $SlotPositions, fluidOutputs?: $SlotPositions, all?: $SlotPositions, ];
    export class $MachineSlotConfiguration {
        size(): number;
        get(arg0: number): $MachineSlotDefinition<any, any>;
        static empty(): $MachineSlotConfiguration;
        static combine(...arg0: $MachineSlotConfiguration[]): $MachineSlotConfiguration$Builder;
        toSlotPositions(): $MachineSlotConfiguration$AllSlotPositions;
        toInventoryComponent(): $MachineInventoryComponent;
        toInventory(): $MIInventory;
    }
}
