import { $Supplier_ } from "@package/java/util/function";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $ComponentStackHolder } from "@package/net/swedz/tesseract/neoforge/compat/mi/api";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MachineProcessCondition$Context } from "@package/aztech/modern_industrialization/machines/recipe/condition";
import { $MachineRecipe } from "@package/aztech/modern_industrialization/machines/recipe";
import { $MachineCasing } from "@package/aztech/modern_industrialization/machines/models";

declare module "@package/net/swedz/tesseract/neoforge/compat/mi/mixin/accessor" {
    export class $CrafterComponentAccessor {
    }
    export interface $CrafterComponentAccessor {
        getActiveRecipe(): $RecipeHolder<$MachineRecipe>;
        getConditionContext(): $MachineProcessCondition$Context;
        get activeRecipe(): $RecipeHolder<$MachineRecipe>;
        get conditionContext(): $MachineProcessCondition$Context;
    }
    export class $ConfigurableStackAccessor<T> {
    }
    export interface $ConfigurableStackAccessor<T> {
        setPipesExtract(arg0: boolean): void;
        setLockedInstance(arg0: T): void;
        setPlayerExtract(arg0: boolean): void;
        setPlayerLocked(arg0: boolean): void;
        setMachineLocked(arg0: boolean): void;
        setPlayerLockable(arg0: boolean): void;
        setPlayerInsert(arg0: boolean): void;
        setPipesInsert(arg0: boolean): void;
        set pipesExtract(value: boolean);
        set lockedInstance(value: T);
        set playerExtract(value: boolean);
        set playerLocked(value: boolean);
        set machineLocked(value: boolean);
        set playerLockable(value: boolean);
        set playerInsert(value: boolean);
        set pipesInsert(value: boolean);
    }
    export class $MachineCasingAccessor {
        static init(arg0: $ResourceLocation_, arg1: $Supplier_<$Block>): $MachineCasing;
    }
    export interface $MachineCasingAccessor extends $ComponentStackHolder {
    }
}
