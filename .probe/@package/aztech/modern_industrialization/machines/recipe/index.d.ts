import { $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient, $Ingredient_, $Recipe, $RecipeHolder, $RecipeType, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $List, $Collection } from "@package/java/util";
import { $FluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MachineProcessCondition, $MachineProcessCondition$Context_ } from "@package/aztech/modern_industrialization/machines/recipe/condition";
import { $ItemVariant } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/item";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as condition from "@package/aztech/modern_industrialization/machines/recipe/condition";

declare module "@package/aztech/modern_industrialization/machines/recipe" {
    export class $MachineRecipe implements $Recipe<$RecipeInput> {
        conditionsMatch(arg0: $MachineProcessCondition$Context_): boolean;
        assemble(arg0: $RecipeInput, arg1: $HolderLookup$Provider): $ItemStack;
        getSerializer(): $RecipeSerializer<never>;
        isSpecial(): boolean;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        static codec(arg0: $MachineRecipeType): $MapCodec<$MachineRecipe>;
        static streamCodec(arg0: $MachineRecipeType): $StreamCodec<$RegistryFriendlyByteBuf, $MachineRecipe>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        matches(arg0: $RecipeInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        getTotalEu(): number;
        getGroup(): string;
        getRemainingItems(arg0: $RecipeInput): $NonNullList<$ItemStack>;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        showNotification(): boolean;
        eu: number;
        duration: number;
        itemOutputs: $List<$MachineRecipe$ItemOutput>;
        fluidInputs: $List<$MachineRecipe$FluidInput>;
        itemInputs: $List<$MachineRecipe$ItemInput>;
        conditions: $List<$MachineProcessCondition>;
        fluidOutputs: $List<$MachineRecipe$FluidOutput>;
        get serializer(): $RecipeSerializer<never>;
        get special(): boolean;
        get ingredients(): $NonNullList<$Ingredient>;
        get type(): $RecipeType<never>;
        get totalEu(): number;
        get group(): string;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $MachineRecipe$FluidOutput extends $Record {
        probability(): number;
        fluid(): $Fluid;
        amount(): number;
        static CODEC: $Codec<$MachineRecipe$FluidOutput>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MachineRecipe$FluidOutput>;
        constructor(fluid: $Fluid_, amount: number, probability: number);
    }
    /**
     * Values that may be interpreted as {@link $MachineRecipe$FluidOutput}.
     */
    export type $MachineRecipe$FluidOutput_ = { fluid?: $Fluid_, probability?: number, amount?: number,  } | [fluid?: $Fluid_, probability?: number, amount?: number, ];
    export class $MachineRecipe$ItemOutput extends $Record {
        probability(): number;
        getStack(): $ItemStack;
        variant(): $ItemVariant;
        amount(): number;
        static CODEC: $Codec<$MachineRecipe$ItemOutput>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MachineRecipe$ItemOutput>;
        constructor(variant: $ItemVariant, amount: number, probability: number);
        get stack(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $MachineRecipe$ItemOutput}.
     */
    export type $MachineRecipe$ItemOutput_ = { variant?: $ItemVariant, probability?: number, amount?: number,  } | [variant?: $ItemVariant, probability?: number, amount?: number, ];
    export class $MachineRecipe$ItemInput extends $Record {
        probability(): number;
        ingredient(): $Ingredient;
        getInputItems(): $List<$Item>;
        matches(arg0: $ItemStack_): boolean;
        amount(): number;
        static CODEC: $Codec<$MachineRecipe$ItemInput>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MachineRecipe$ItemInput>;
        constructor(ingredient: $Ingredient_, amount: number, probability: number);
        get inputItems(): $List<$Item>;
    }
    /**
     * Values that may be interpreted as {@link $MachineRecipe$ItemInput}.
     */
    export type $MachineRecipe$ItemInput_ = { probability?: number, amount?: number, ingredient?: $Ingredient_,  } | [probability?: number, amount?: number, ingredient?: $Ingredient_, ];
    export class $MachineRecipeType implements $RecipeType<$MachineRecipe>, $RecipeSerializer<$MachineRecipe> {
        codec(): $MapCodec<$MachineRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $MachineRecipe>;
        getRecipe(arg0: $ServerLevel, arg1: $ResourceLocation_): $RecipeHolder<$MachineRecipe>;
        getMatchingRecipes(arg0: $ServerLevel, arg1: $Item_): $Collection<$RecipeHolder<$MachineRecipe>>;
        withItemOutputs(): $MachineRecipeType;
        withFluidOutputs(): $MachineRecipeType;
        withItemInputs(): $MachineRecipeType;
        withFluidInputs(): $MachineRecipeType;
        getId(): $ResourceLocation;
        getPath(): string;
        getRecipesWithCache(arg0: $ServerLevel): $Collection<$RecipeHolder<$MachineRecipe>>;
        getRecipesWithoutCache(arg0: $Level_): $Collection<$RecipeHolder<$MachineRecipe>>;
        getFluidOnlyRecipes(arg0: $ServerLevel): $Collection<$RecipeHolder<$MachineRecipe>>;
        constructor(arg0: $ResourceLocation_);
        get id(): $ResourceLocation;
        get path(): string;
    }
    export class $MachineRecipe$FluidInput extends $Record {
        probability(): number;
        fluid(): $FluidIngredient;
        getInputFluids(): $List<$Fluid>;
        amount(): number;
        static CODEC: $Codec<$MachineRecipe$FluidInput>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MachineRecipe$FluidInput>;
        /**
         * @deprecated
         */
        constructor(arg0: $Fluid_, arg1: number, arg2: number);
        constructor(fluid: $FluidIngredient_, amount: number, probability: number);
        get inputFluids(): $List<$Fluid>;
    }
    /**
     * Values that may be interpreted as {@link $MachineRecipe$FluidInput}.
     */
    export type $MachineRecipe$FluidInput_ = { fluid?: $FluidIngredient_, probability?: number, amount?: number,  } | [fluid?: $FluidIngredient_, probability?: number, amount?: number, ];
}
