import { $MachineBlockEntity } from "@package/aztech/modern_industrialization/machines";

declare module "@package/net/swedz/tesseract/neoforge/compat/mi/hook/context/machine" {
    export class $EfficiencyMIHookContext extends $MachineMIHookContext {
        getMaxEfficiencyTicks(): number;
        isCancelled(): boolean;
        hasBeenModified(): boolean;
        getEfficiencyTicks(): number;
        setMaxRecipeEu(arg0: number): void;
        hasActiveRecipe(): boolean;
        getMaxRecipeEu(): number;
        setCancelled(arg0: boolean): void;
        setEfficiencyTicks(arg0: number): void;
        constructor(arg0: $MachineBlockEntity, arg1: boolean, arg2: number, arg3: number, arg4: number);
        get maxEfficiencyTicks(): number;
    }
    export class $MachineMIHookContext {
        getMachineBlockEntity(): $MachineBlockEntity;
        constructor(arg0: $MachineBlockEntity);
        get machineBlockEntity(): $MachineBlockEntity;
    }
}
