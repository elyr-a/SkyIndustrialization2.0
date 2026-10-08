import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IIngredientType_ } from "@package/mezz/jei/api/ingredients";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $RecipeSlotUnderMouse, $IJeiInputHandler } from "@package/mezz/jei/api/gui/inputs";
import { $IRecipeSlotDrawable, $IRecipeSlotsView } from "@package/mezz/jei/api/gui/ingredient";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
export * as builder from "@package/mezz/jei/api/gui/builder";
export * as widgets from "@package/mezz/jei/api/gui/widgets";
export * as placement from "@package/mezz/jei/api/gui/placement";
export * as inputs from "@package/mezz/jei/api/gui/inputs";
export * as ingredient from "@package/mezz/jei/api/gui/ingredient";
export * as drawable from "@package/mezz/jei/api/gui/drawable";
export * as handlers from "@package/mezz/jei/api/gui/handlers";
export * as buttons from "@package/mezz/jei/api/gui/buttons";

declare module "@package/mezz/jei/api/gui" {
    export class $IRecipeLayoutDrawable<R> {
    }
    export interface $IRecipeLayoutDrawable<R> {
        getRecipeCategory(): $IRecipeCategory<R>;
        isMouseOver(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        getRecipeSlotUnderMouse(arg0: number, arg1: number): ($IRecipeSlotDrawable) | undefined;
        getIngredientUnderMouse<T>(arg0: number, arg1: number, arg2: $IIngredientType_<T>): (T) | undefined;
        getSlotUnderMouse(arg0: number, arg1: number): ($RecipeSlotUnderMouse) | undefined;
        setPosition(arg0: number, arg1: number): void;
        getRecipeTransferButtonArea(): $Rect2i;
        getRecipeBookmarkButtonArea(): $Rect2i;
        getRecipe(): R;
        drawRecipe(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getRect(): $Rect2i;
        getItemStackUnderMouse(arg0: number, arg1: number): ($ItemStack) | undefined;
        getRectWithBorder(): $Rect2i;
        getInputHandler(): $IJeiInputHandler;
        getSideButtonArea(arg0: number): $Rect2i;
        drawOverlays(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getRecipeSlotsView(): $IRecipeSlotsView;
        tick(): void;
        get recipeCategory(): $IRecipeCategory<R>;
        get recipeTransferButtonArea(): $Rect2i;
        get recipeBookmarkButtonArea(): $Rect2i;
        get recipe(): R;
        get rect(): $Rect2i;
        get rectWithBorder(): $Rect2i;
        get inputHandler(): $IJeiInputHandler;
        get recipeSlotsView(): $IRecipeSlotsView;
    }
    export class $ITickTimer {
    }
    export interface $ITickTimer {
        getValue(): number;
        getMaxValue(): number;
        get value(): number;
        get maxValue(): number;
    }
}
