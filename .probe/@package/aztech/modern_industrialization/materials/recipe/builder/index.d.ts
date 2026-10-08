import { $RecipeOutput } from "@package/net/minecraft/data/recipes";

declare module "@package/aztech/modern_industrialization/materials/recipe/builder" {
    export class $MaterialRecipeBuilder {
    }
    export interface $MaterialRecipeBuilder {
        isCanceled(): boolean;
        getRecipeId(): string;
        cancel(): void;
        /**
         * @deprecated
         */
        save(arg0: $RecipeOutput): void;
        get canceled(): boolean;
        get recipeId(): string;
    }
}
