import { $IGuiHandlerRegistration, $IVanillaCategoryExtensionRegistration, $IAdvancedRegistration, $IRecipeCategoryRegistration, $IIngredientAliasRegistration, $IModIngredientRegistration, $IRecipeRegistration, $IRuntimeRegistration, $ISubtypeRegistration, $IModInfoRegistration_, $IRecipeCatalystRegistration, $IRecipeTransferRegistration, $IExtraIngredientRegistration_ } from "@package/mezz/jei/api/registration";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IPlatformFluidHelper } from "@package/mezz/jei/api/helpers";
import { $IJeiConfigManager_ } from "@package/mezz/jei/api/runtime/config";
import { $IJeiRuntime } from "@package/mezz/jei/api/runtime";
export * as gui from "@package/mezz/jei/api/gui";
export * as ingredients from "@package/mezz/jei/api/ingredients";
export * as recipe from "@package/mezz/jei/api/recipe";
export * as registration from "@package/mezz/jei/api/registration";
export * as runtime from "@package/mezz/jei/api/runtime";
export * as helpers from "@package/mezz/jei/api/helpers";

declare module "@package/mezz/jei/api" {
    export class $IModPlugin {
    }
    export interface $IModPlugin {
        onRuntimeUnavailable(): void;
        registerRecipeTransferHandlers(arg0: $IRecipeTransferRegistration): void;
        registerVanillaCategoryExtensions(arg0: $IVanillaCategoryExtensionRegistration): void;
        registerExtraIngredients(arg0: $IExtraIngredientRegistration_): void;
        registerIngredientAliases(arg0: $IIngredientAliasRegistration): void;
        registerFluidSubtypes<T>(arg0: $ISubtypeRegistration, arg1: $IPlatformFluidHelper<T>): void;
        registerRecipeCatalysts(arg0: $IRecipeCatalystRegistration): void;
        registerItemSubtypes(arg0: $ISubtypeRegistration): void;
        onConfigManagerAvailable(arg0: $IJeiConfigManager_): void;
        registerGuiHandlers(arg0: $IGuiHandlerRegistration): void;
        registerIngredients(arg0: $IModIngredientRegistration): void;
        registerModInfo(arg0: $IModInfoRegistration_): void;
        registerCategories(arg0: $IRecipeCategoryRegistration): void;
        registerRecipes(arg0: $IRecipeRegistration): void;
        registerAdvanced(arg0: $IAdvancedRegistration): void;
        registerRuntime(arg0: $IRuntimeRegistration): void;
        onRuntimeAvailable(arg0: $IJeiRuntime): void;
        getPluginUid(): $ResourceLocation;
        get pluginUid(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $IModPlugin}.
     */
    export type $IModPlugin_ = (() => $ResourceLocation_);
}
