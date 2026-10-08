import { $FluidVariant } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/fluid";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ItemVariant } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/item";

declare module "@package/aztech/modern_industrialization/api/machine/component" {
    export class $FluidAccess {
    }
    export interface $FluidAccess {
        toStack(): $FluidStack;
        getVariant(): $FluidVariant;
        getCapacity(): number;
        getAmount(): number;
        get variant(): $FluidVariant;
        get capacity(): number;
        get amount(): number;
    }
    export class $CrafterAccess {
    }
    export interface $CrafterAccess {
        getInventory(): $InventoryAccess;
        getProgress(): number;
        getMaxEfficiencyTicks(): number;
        getBaseRecipeEu(): number;
        getCurrentRecipeEu(): number;
        getEfficiencyTicks(): number;
        hasActiveRecipe(): boolean;
        matchesMultipleRecipes(): boolean;
        get inventory(): $InventoryAccess;
        get progress(): number;
        get maxEfficiencyTicks(): number;
        get baseRecipeEu(): number;
        get currentRecipeEu(): number;
        get efficiencyTicks(): number;
    }
    export class $ItemAccess {
    }
    export interface $ItemAccess {
        toStack(): $ItemStack;
        getVariant(): $ItemVariant;
        getAmount(): number;
        get variant(): $ItemVariant;
        get amount(): number;
    }
}
