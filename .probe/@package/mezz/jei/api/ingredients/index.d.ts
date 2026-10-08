import { $TagKey } from "@package/net/minecraft/tags";
import { $ItemStack, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Collection_, $List, $List_ } from "@package/java/util";
import { $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $Stream } from "@package/java/util/stream";
import { $RecipeIngredientRole, $RecipeIngredientRole_ } from "@package/mezz/jei/api/recipe";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BatchRenderElement_ } from "@package/mezz/jei/api/ingredients/rendering";
import { $UidContext_ } from "@package/mezz/jei/api/ingredients/subtypes";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Object, $Iterable, $Class } from "@package/java/lang";
export * as subtypes from "@package/mezz/jei/api/ingredients/subtypes";
export * as rendering from "@package/mezz/jei/api/ingredients/rendering";

declare module "@package/mezz/jei/api/ingredients" {
    export class $IIngredientRenderer<T> {
    }
    export interface $IIngredientRenderer<T> {
        render(arg0: $GuiGraphics, arg1: T): void;
        render(arg0: $GuiGraphics, arg1: T, arg2: number, arg3: number): void;
        getTooltip(arg0: T, arg1: $TooltipFlag): $List<$Component>;
        getTooltip(arg0: $ITooltipBuilder, arg1: T, arg2: $TooltipFlag): void;
        renderBatch(arg0: $GuiGraphics, arg1: $List_<$BatchRenderElement_<T>>): void;
        getFontRenderer(arg0: $Minecraft, arg1: T): $Font;
        getWidth(): number;
        getHeight(): number;
        get width(): number;
        get height(): number;
    }
    export class $IIngredientSupplier {
    }
    export interface $IIngredientSupplier {
        getIngredients(arg0: $RecipeIngredientRole_): $List<$ITypedIngredient<never>>;
    }
    /**
     * Values that may be interpreted as {@link $IIngredientSupplier}.
     */
    export type $IIngredientSupplier_ = ((arg0: $RecipeIngredientRole) => $List_<$ITypedIngredient<never>>);
    export class $IIngredientType<T> {
    }
    export interface $IIngredientType<T> {
        getUid(): string;
        castIngredient(arg0: $Object): (T) | undefined;
        getIngredientClass(): $Class<T>;
        getCastIngredient(arg0: $Object): T;
        get uid(): string;
        get ingredientClass(): $Class<T>;
    }
    /**
     * Values that may be interpreted as {@link $IIngredientType}.
     */
    export type $IIngredientType_<T> = (() => $Class<T>);
    export class $ITypedIngredient<T> {
    }
    export interface $ITypedIngredient<T> {
        getItemStack(): ($ItemStack) | undefined;
        getIngredient<V>(arg0: $IIngredientType_<V>): (V) | undefined;
        getIngredient(): T;
        getCastIngredient<V>(arg0: $IIngredientType_<V>): V;
        cast<V>(arg0: $IIngredientType_<V>): $ITypedIngredient<V>;
        getType(): $IIngredientType<T>;
        getBaseIngredient<B>(arg0: $IIngredientTypeWithSubtypes<B, T>): B;
        castToItemStackType(): $ITypedIngredient<$ItemStack>;
        get itemStack(): ($ItemStack) | undefined;
        get type(): $IIngredientType<T>;
    }
    export class $IIngredientTypeWithSubtypes<B, I> {
    }
    export interface $IIngredientTypeWithSubtypes<B, I> extends $IIngredientType<I> {
        getIngredientClass(): $Class<I>;
        getDefaultIngredient(arg0: B): I;
        getIngredientBaseClass(): $Class<B>;
        getBase(arg0: I): B;
        get ingredientClass(): $Class<I>;
        get ingredientBaseClass(): $Class<B>;
    }
    export class $IIngredientHelper<V> {
    }
    export interface $IIngredientHelper<V> {
        /**
         * @deprecated
         */
        getUniqueId(arg0: V, arg1: $UidContext_): string;
        hasSubtypes(arg0: V): boolean;
        getUid(arg0: $ITypedIngredient<V>, arg1: $UidContext_): $Object;
        getUid(arg0: V, arg1: $UidContext_): $Object;
        normalizeIngredient(arg0: V): V;
        isHiddenFromRecipeViewersByTags(arg0: $ITypedIngredient<V>): boolean;
        isHiddenFromRecipeViewersByTags(arg0: V): boolean;
        getColors(arg0: V): $Iterable<number>;
        isValidIngredient(arg0: V): boolean;
        /**
         * @deprecated
         */
        getWildcardId(arg0: V): string;
        getCheatItemStack(arg0: V): $ItemStack;
        getTagStream(arg0: V): $Stream<$ResourceLocation>;
        getErrorInfo(arg0: V): string;
        getIngredientType(): $IIngredientType<V>;
        getDisplayModId(arg0: V): string;
        copyWithAmount(arg0: V, arg1: number): V;
        copyIngredient(arg0: V): V;
        getGroupingUid(arg0: $ITypedIngredient<V>): $Object;
        getGroupingUid(arg0: V): $Object;
        /**
         * @deprecated
         */
        getTagEquivalent(arg0: $Collection_<V>): ($ResourceLocation) | undefined;
        getResourceLocation(arg0: V): $ResourceLocation;
        getTagKeyEquivalent(arg0: $Collection_<V>): ($TagKey<never>) | undefined;
        isIngredientOnServer(arg0: V): boolean;
        getDisplayName(arg0: V): string;
        getAmount(arg0: V): number;
        get ingredientType(): $IIngredientType<V>;
    }
}
