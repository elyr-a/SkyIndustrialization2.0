import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/net/swedz/tesseract/neoforge/compat/mi/api" {
    export class $ActiveRecipeHolder<R> {
    }
    export interface $ActiveRecipeHolder<R> {
        getRecipeTotalEuCost(arg0: R): number;
        getRecipeEuCost(arg0: R): number;
        getActiveRecipe(): R;
        hasActiveRecipe(): boolean;
        doConditionsMatchForRecipe(arg0: R): boolean;
        get activeRecipe(): R;
    }
    export class $ComponentStackHolder {
    }
    export interface $ComponentStackHolder {
        setStack(arg0: $ItemStack_): void;
        getStack(): $ItemStack;
    }
}
