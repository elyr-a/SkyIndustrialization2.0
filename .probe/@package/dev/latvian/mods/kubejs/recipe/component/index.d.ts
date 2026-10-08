import { $JsonObject_ } from "@package/com/google/gson";
import { $Ingredient, $Ingredient_, $CraftingBookCategory, $CookingBookCategory } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $AbstractMap, $Map$Entry, $Set, $List, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $SizedFluidIngredient, $FluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Predicate_, $Function, $Function_ } from "@package/java/util/function";
import { $EnumTypeInfo, $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Reference2ObjectOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Registry, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $OpsContainer, $WrappedJS, $TinyMap, $TickDuration, $TinyMap_, $TickDuration_, $RegistryOpsContainer, $ErrorStack, $IntBounds_, $IntBounds, $RegistryAccessContainer } from "@package/dev/latvian/mods/kubejs/util";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $Enum, $Number, $StringBuilder, $Comparable, $Record, $Class, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $SourceLine_ } from "@package/dev/latvian/mods/kubejs/script";
import { $SizedIngredient_, $SizedIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $Level } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $Pattern } from "@package/java/util/regex";
import { $RecipeScriptContext, $RecipeTypeRegistryContext, $RecipeTypeRegistryContext_, $KubeRecipeContext, $KubeRecipe, $RecipeKey } from "@package/dev/latvian/mods/kubejs/recipe";
import { $RegistryType, $RegistryType_ } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Scriptable, $BaseFunction } from "@package/dev/latvian/mods/rhino";

declare module "@package/dev/latvian/mods/kubejs/recipe/component" {
    export class $NestedRecipeComponent implements $RecipeComponent<$KubeRecipe> {
        codec(): $Codec<$KubeRecipe>;
        type(): $RecipeComponentType<never>;
        wrap(cx: $RecipeScriptContext, from: $Object): $KubeRecipe;
        typeInfo(): $TypeInfo;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $KubeRecipe>>;
        otherKey(name: string): $RecipeKey<$KubeRecipe>;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<$KubeRecipe>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$KubeRecipe>, json: $JsonObject_): void;
        isIgnored(): boolean;
        toString(ops: $OpsContainer, value: $KubeRecipe): string;
        isEmpty(value: $KubeRecipe): boolean;
        replace(cx: $RecipeScriptContext, original: $KubeRecipe, match: $ReplacementMatchInfo_, arg3: $Object): $KubeRecipe;
        matches(cx: $RecipeMatchContext, value: $KubeRecipe, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $KubeRecipe): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$KubeRecipe>;
        asList(): $ListRecipeComponent<$KubeRecipe>;
        spread(value: $KubeRecipe): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$KubeRecipe, O>;
        inputKey(name: string): $RecipeKey<$KubeRecipe>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$KubeRecipe>): $RecipeComponent<$KubeRecipe>;
        asConditionalList(): $ListRecipeComponent<$KubeRecipe>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$KubeRecipe>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $KubeRecipe): void;
        asListOrSelf(): $ListRecipeComponent<$KubeRecipe>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $KubeRecipe>>;
        outputKey(name: string): $RecipeKey<$KubeRecipe>;
        asConditionalListOrSelf(): $ListRecipeComponent<$KubeRecipe>;
        static RECIPE: $RecipeComponentType<$KubeRecipe>;
        constructor();
        get ignored(): boolean;
    }
    export class $IngredientComponent extends $Record implements $RecipeComponent<$Ingredient> {
        codec(): $Codec<$Ingredient>;
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: $Ingredient_): string;
        isEmpty(value: $Ingredient_): boolean;
        matches(cx: $RecipeMatchContext, value: $Ingredient_, match: $ReplacementMatchInfo_): boolean;
        typeInfo(): $TypeInfo;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $Ingredient_): void;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $Ingredient>>;
        otherKey(name: string): $RecipeKey<$Ingredient>;
        orSelf(): $RecipeComponent<$Ingredient>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Ingredient_>, json: $JsonObject_): void;
        isIgnored(): boolean;
        wrap(cx: $RecipeScriptContext, from: $Object): $Ingredient;
        replace(cx: $RecipeScriptContext, original: $Ingredient_, match: $ReplacementMatchInfo_, arg3: $Object): $Ingredient;
        validate(ctx: $RecipeValidationContext, value: $Ingredient_): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$Ingredient>;
        asList(): $ListRecipeComponent<$Ingredient>;
        spread(value: $Ingredient_): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$Ingredient, O>;
        inputKey(name: string): $RecipeKey<$Ingredient>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$Ingredient_>): $RecipeComponent<$Ingredient>;
        asConditionalList(): $ListRecipeComponent<$Ingredient>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Ingredient_>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$Ingredient>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $Ingredient>>;
        outputKey(name: string): $RecipeKey<$Ingredient>;
        asConditionalListOrSelf(): $ListRecipeComponent<$Ingredient>;
        static OPTIONAL_INGREDIENT: $RecipeComponentType<$Ingredient>;
        static INGREDIENT: $RecipeComponentType<$Ingredient>;
        constructor(type: $RecipeComponentType<never>, codec: $Codec<$Ingredient_>, allowEmpty: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IngredientComponent}.
     */
    export type $IngredientComponent_ = { allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$Ingredient_>,  } | [allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$Ingredient_>, ];
    export class $RegistryComponent<T> extends $Record implements $RecipeComponent<$Holder<T>> {
        registry(): $Registry<$Holder<T>>;
        regType(): $RegistryType<$Holder<T>>;
        codec(): $Codec<$Holder<$Holder<T>>>;
        type(): $RecipeComponentType<never>;
        wrap(cx: $RecipeScriptContext, from: $Object): $Holder<$Holder<T>>;
        typeInfo(): $TypeInfo;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $Holder_<$Holder<T>>): void;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $Holder<T>>>;
        otherKey(name: string): $RecipeKey<$Holder<T>>;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<$Holder<T>>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Holder_<T>>, json: $JsonObject_): void;
        isIgnored(): boolean;
        toString(ops: $OpsContainer, value: $Holder_<T>): string;
        isEmpty(value: $Holder_<T>): boolean;
        replace(cx: $RecipeScriptContext, original: $Holder_<T>, match: $ReplacementMatchInfo_, arg3: $Object): $Holder<T>;
        matches(cx: $RecipeMatchContext, value: $Holder_<T>, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $Holder_<T>): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$Holder<T>>;
        asList(): $ListRecipeComponent<$Holder<T>>;
        spread(value: $Holder_<T>): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$Holder<T>, O>;
        inputKey(name: string): $RecipeKey<$Holder<T>>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$Holder_<T>>): $RecipeComponent<$Holder<T>>;
        asConditionalList(): $ListRecipeComponent<$Holder<T>>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Holder_<T>>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$Holder<T>>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $Holder<T>>>;
        outputKey(name: string): $RecipeKey<$Holder<T>>;
        asConditionalListOrSelf(): $ListRecipeComponent<$Holder<T>>;
        static TYPE: $RecipeComponentType<never>;
        constructor(registries: $RegistryAccessContainer, regType: $RegistryType_<$Holder_<T>>, key: $ResourceKey_<any>);
        constructor(registries: $RegistryAccessContainer, key: $ResourceKey_<any>);
        constructor(registry: $Registry<$Holder_<T>>, regType: $RegistryType_<$Holder_<T>>, codec: $Codec<$Holder_<$Holder<T>>>, typeInfo: $TypeInfo_);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RegistryComponent}.
     */
    export type $RegistryComponent_<T> = { typeInfo?: $TypeInfo_, regType?: $RegistryType_<any>, codec?: $Codec<$Holder_<any>>, registry?: $Registry<any>,  } | [typeInfo?: $TypeInfo_, regType?: $RegistryType_<any>, codec?: $Codec<$Holder_<any>>, registry?: $Registry<any>, ];
    export class $NumberComponent$LongRange extends $Record implements $NumberComponent<$NumberComponent$LongRange, number> {
        codec(): $Codec<number>;
        type(): $RecipeComponentType<never>;
        min(): number;
        max(): number;
        wrap(cx: $RecipeScriptContext, from: $Object): number;
        static of(typeOverride: $RecipeComponentType<never>, min: number, max: number): $NumberComponent$LongRange;
        typeInfo(): $TypeInfo;
        range(min: number, max: number): $NumberComponent$LongRange;
        typeOverride(): $RecipeComponentType<never>;
        toString(typeOverride: $RecipeComponentType<never>, name: string, min: number, max: number): string;
        min(min: number): $NumberComponent<$NumberComponent$LongRange, number>;
        max(max: number): $NumberComponent<$NumberComponent$LongRange, number>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, number>>;
        otherKey(name: string): $RecipeKey<number>;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<number>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<number>, json: $JsonObject_): void;
        isIgnored(): boolean;
        toString(ops: $OpsContainer, value: number): string;
        isEmpty(value: number): boolean;
        replace(cx: $RecipeScriptContext, original: number, match: $ReplacementMatchInfo_, arg3: $Object): number;
        matches(cx: $RecipeMatchContext, value: number, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: number): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<number>;
        asList(): $ListRecipeComponent<number>;
        spread(value: number): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<number, O>;
        inputKey(name: string): $RecipeKey<number>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<number>): $RecipeComponent<number>;
        asConditionalList(): $ListRecipeComponent<number>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<number>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: number): void;
        asListOrSelf(): $ListRecipeComponent<number>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, number>>;
        outputKey(name: string): $RecipeKey<number>;
        asConditionalListOrSelf(): $ListRecipeComponent<number>;
        constructor(typeOverride: $RecipeComponentType<never>, min: number, max: number, codec: $Codec<number>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NumberComponent$LongRange}.
     */
    export type $NumberComponent$LongRange_ = { typeOverride?: $RecipeComponentType<never>, codec?: $Codec<number>, max?: number, min?: number,  } | [typeOverride?: $RecipeComponentType<never>, codec?: $Codec<number>, max?: number, min?: number, ];
    export class $NumberComponent$FloatRange extends $Record implements $NumberComponent<$NumberComponent$FloatRange, number> {
        codec(): $Codec<number>;
        type(): $RecipeComponentType<never>;
        min(): number;
        max(): number;
        wrap(cx: $RecipeScriptContext, from: $Object): number;
        static of(typeOverride: $RecipeComponentType<never>, min: number, max: number): $NumberComponent$FloatRange;
        typeInfo(): $TypeInfo;
        range(min: number, max: number): $NumberComponent$FloatRange;
        typeOverride(): $RecipeComponentType<never>;
        toString(typeOverride: $RecipeComponentType<never>, name: string, min: number, max: number): string;
        min(min: number): $NumberComponent<$NumberComponent$FloatRange, number>;
        max(max: number): $NumberComponent<$NumberComponent$FloatRange, number>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, number>>;
        otherKey(name: string): $RecipeKey<number>;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<number>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<number>, json: $JsonObject_): void;
        isIgnored(): boolean;
        toString(ops: $OpsContainer, value: number): string;
        isEmpty(value: number): boolean;
        replace(cx: $RecipeScriptContext, original: number, match: $ReplacementMatchInfo_, arg3: $Object): number;
        matches(cx: $RecipeMatchContext, value: number, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: number): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<number>;
        asList(): $ListRecipeComponent<number>;
        spread(value: number): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<number, O>;
        inputKey(name: string): $RecipeKey<number>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<number>): $RecipeComponent<number>;
        asConditionalList(): $ListRecipeComponent<number>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<number>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: number): void;
        asListOrSelf(): $ListRecipeComponent<number>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, number>>;
        outputKey(name: string): $RecipeKey<number>;
        asConditionalListOrSelf(): $ListRecipeComponent<number>;
        constructor(typeOverride: $RecipeComponentType<never>, min: number, max: number, codec: $Codec<number>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NumberComponent$FloatRange}.
     */
    export type $NumberComponent$FloatRange_ = { typeOverride?: $RecipeComponentType<never>, codec?: $Codec<number>, max?: number, min?: number,  } | [typeOverride?: $RecipeComponentType<never>, codec?: $Codec<number>, max?: number, min?: number, ];
    export class $RecipeComponent<T> {
        static builder(keys: $List_<$CustomObjectRecipeComponent$Key_>): $CustomObjectRecipeComponent;
        static builder(...keys: $CustomObjectRecipeComponent$Key_[]): $CustomObjectRecipeComponent;
    }
    export interface $RecipeComponent<T> {
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, T>>;
        otherKey(name: string): $RecipeKey<T>;
        codec(): $Codec<T>;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<T>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        isIgnored(): boolean;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: T): string;
        wrap(cx: $RecipeScriptContext, from: $Object): T;
        isEmpty(value: T): boolean;
        replace(cx: $RecipeScriptContext, original: T, match: $ReplacementMatchInfo_, arg3: $Object): T;
        matches(cx: $RecipeMatchContext, value: T, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: T): void;
        typeInfo(): $TypeInfo;
        key(name: string, role: $ComponentRole_): $RecipeKey<T>;
        asList(): $ListRecipeComponent<T>;
        spread(value: T): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<T, O>;
        inputKey(name: string): $RecipeKey<T>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<T>): $RecipeComponent<T>;
        asConditionalList(): $ListRecipeComponent<T>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: T): void;
        asListOrSelf(): $ListRecipeComponent<T>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, T>>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<T>;
        asConditionalListOrSelf(): $ListRecipeComponent<T>;
        get ignored(): boolean;
    }
    export class $UniqueIdBuilder extends $Record {
        appendSeparator(): void;
        append(id: $ResourceLocation_): void;
        append(string: string): void;
        append(key: $ResourceKey_<never>): void;
        builder(): $StringBuilder;
        build(): string;
        static MULTIPLE_UNDERSCORES_PATTERN: $Pattern;
        static NON_W_PATTERN: $Pattern;
        constructor(builder: $StringBuilder);
    }
    /**
     * Values that may be interpreted as {@link $UniqueIdBuilder}.
     */
    export type $UniqueIdBuilder_ = { builder?: $StringBuilder,  } | [builder?: $StringBuilder, ];
    export class $RecipeComponentWithCodec<T> extends $Record implements $RecipeComponentWithParent<T> {
        codec(): $Codec<T>;
        parent(): $RecipeComponent<T>;
        type(): $RecipeComponentType<never>;
        parentComponent(): $RecipeComponent<T>;
        allowEmpty(): boolean;
        wrap(cx: $RecipeScriptContext, from: $Object): T;
        isEmpty(value: T): boolean;
        replace(cx: $RecipeScriptContext, original: T, match: $ReplacementMatchInfo_, arg3: $Object): T;
        matches(cx: $RecipeMatchContext, value: T, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: T): void;
        typeInfo(): $TypeInfo;
        spread(value: T): $List<never>;
        createBuilder(): $RecipeComponentBuilder;
        buildUniqueId(builder: $UniqueIdBuilder_, value: T): void;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, T>>;
        otherKey(name: string): $RecipeKey<T>;
        orSelf(): $RecipeComponent<T>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        isIgnored(): boolean;
        toString(ops: $OpsContainer, value: T): string;
        key(name: string, role: $ComponentRole_): $RecipeKey<T>;
        asList(): $ListRecipeComponent<T>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<T, O>;
        inputKey(name: string): $RecipeKey<T>;
        withCodec(codec: $Codec<T>): $RecipeComponent<T>;
        asConditionalList(): $ListRecipeComponent<T>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<T>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, T>>;
        outputKey(name: string): $RecipeKey<T>;
        asConditionalListOrSelf(): $ListRecipeComponent<T>;
        constructor(parent: $RecipeComponent<T>, codec: $Codec<T>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RecipeComponentWithCodec}.
     */
    export type $RecipeComponentWithCodec_<T> = { codec?: $Codec<any>, parent?: $RecipeComponent<any>,  } | [codec?: $Codec<any>, parent?: $RecipeComponent<any>, ];
    export class $FluidIngredientComponent extends $Record implements $RecipeComponent<$FluidIngredient> {
        codec(): $Codec<$FluidIngredient>;
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: $FluidIngredient_): string;
        isEmpty(value: $FluidIngredient_): boolean;
        matches(cx: $RecipeMatchContext, value: $FluidIngredient_, match: $ReplacementMatchInfo_): boolean;
        typeInfo(): $TypeInfo;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $FluidIngredient_): void;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $FluidIngredient>>;
        otherKey(name: string): $RecipeKey<$FluidIngredient>;
        orSelf(): $RecipeComponent<$FluidIngredient>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$FluidIngredient_>, json: $JsonObject_): void;
        isIgnored(): boolean;
        wrap(cx: $RecipeScriptContext, from: $Object): $FluidIngredient;
        replace(cx: $RecipeScriptContext, original: $FluidIngredient_, match: $ReplacementMatchInfo_, arg3: $Object): $FluidIngredient;
        validate(ctx: $RecipeValidationContext, value: $FluidIngredient_): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$FluidIngredient>;
        asList(): $ListRecipeComponent<$FluidIngredient>;
        spread(value: $FluidIngredient_): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$FluidIngredient, O>;
        inputKey(name: string): $RecipeKey<$FluidIngredient>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$FluidIngredient_>): $RecipeComponent<$FluidIngredient>;
        asConditionalList(): $ListRecipeComponent<$FluidIngredient>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$FluidIngredient_>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$FluidIngredient>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $FluidIngredient>>;
        outputKey(name: string): $RecipeKey<$FluidIngredient>;
        asConditionalListOrSelf(): $ListRecipeComponent<$FluidIngredient>;
        static FLUID_INGREDIENT: $RecipeComponentType<$FluidIngredient>;
        static OPTIONAL_FLUID_INGREDIENT: $RecipeComponentType<$FluidIngredient>;
        constructor(type: $RecipeComponentType<never>, codec: $Codec<$FluidIngredient_>, allowEmpty: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FluidIngredientComponent}.
     */
    export type $FluidIngredientComponent_ = { allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$FluidIngredient_>,  } | [allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$FluidIngredient_>, ];
    export class $MapRecipeComponent<K, V> extends $Record implements $RecipeComponent<$TinyMap<K, V>> {
        codec(): $Codec<$TinyMap<K, V>>;
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        wrap(cx: $RecipeScriptContext, from: $Object): $TinyMap<K, V>;
        isEmpty(value: $TinyMap_<K, V>): boolean;
        replace(cx: $RecipeScriptContext, original: $TinyMap_<K, V>, match: $ReplacementMatchInfo_, arg3: $Object): $TinyMap<K, V>;
        matches(cx: $RecipeMatchContext, value: $TinyMap_<K, V>, match: $ReplacementMatchInfo_): boolean;
        static of<K, V>(key: $RecipeComponent<K>, component: $RecipeComponent<V>, bounds: $IntBounds_): $MapRecipeComponent<K, V>;
        validate(ctx: $RecipeValidationContext, value: $TinyMap_<K, V>): void;
        component(): $RecipeComponent<V>;
        bounds(): $IntBounds;
        typeInfo(): $TypeInfo;
        key(): $RecipeComponent<K>;
        static patternOf<V>(component: $RecipeComponent<V>, bounds: $IntBounds_): $MapRecipeComponent<string, V>;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $TinyMap_<K, V>): void;
        patternKey(): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $TinyMap<K, V>>>;
        otherKey(name: string): $RecipeKey<$TinyMap<K, V>>;
        orSelf(): $RecipeComponent<$TinyMap<K, V>>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$TinyMap_<K, V>>, json: $JsonObject_): void;
        isIgnored(): boolean;
        toString(ops: $OpsContainer, value: $TinyMap_<K, V>): string;
        key(name: string, role: $ComponentRole_): $RecipeKey<$TinyMap<K, V>>;
        asList(): $ListRecipeComponent<$TinyMap<K, V>>;
        spread(value: $TinyMap_<K, V>): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$TinyMap<K, V>, O>;
        inputKey(name: string): $RecipeKey<$TinyMap<K, V>>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$TinyMap_<K, V>>): $RecipeComponent<$TinyMap<K, V>>;
        asConditionalList(): $ListRecipeComponent<$TinyMap<K, V>>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$TinyMap_<K, V>>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$TinyMap<K, V>>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $TinyMap<K, V>>>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<$TinyMap<K, V>>;
        asConditionalListOrSelf(): $ListRecipeComponent<$TinyMap<K, V>>;
        static PATTERN_TYPE: $RecipeComponentType<never>;
        static TYPE: $RecipeComponentType<never>;
        constructor(key: $RecipeComponent<K>, component: $RecipeComponent<V>, patternKey: boolean, bounds: $IntBounds_, codec: $Codec<$TinyMap_<K, V>>, typeInfo: $TypeInfo_);
        constructor(key: $RecipeComponent<K>, component: $RecipeComponent<V>, bounds: $IntBounds_, patternKey: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MapRecipeComponent}.
     */
    export type $MapRecipeComponent_<K, V> = { key?: $RecipeComponent<any>, typeInfo?: $TypeInfo_, patternKey?: boolean, codec?: $Codec<$TinyMap_<any, any>>, bounds?: $IntBounds_, component?: $RecipeComponent<any>,  } | [key?: $RecipeComponent<any>, typeInfo?: $TypeInfo_, patternKey?: boolean, codec?: $Codec<$TinyMap_<any, any>>, bounds?: $IntBounds_, component?: $RecipeComponent<any>, ];
    export class $TimeComponent extends $Record implements $RecipeComponent<$TickDuration> {
        codec(): $Codec<$TickDuration>;
        type(): $RecipeComponentType<never>;
        scale(): number;
        wrap(cx: $RecipeScriptContext, from: $Object): $TickDuration;
        isEmpty(value: $TickDuration_): boolean;
        typeInfo(): $TypeInfo;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $TickDuration_): void;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $TickDuration>>;
        otherKey(name: string): $RecipeKey<$TickDuration>;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<$TickDuration>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$TickDuration_>, json: $JsonObject_): void;
        isIgnored(): boolean;
        toString(ops: $OpsContainer, value: $TickDuration_): string;
        replace(cx: $RecipeScriptContext, original: $TickDuration_, match: $ReplacementMatchInfo_, arg3: $Object): $TickDuration;
        matches(cx: $RecipeMatchContext, value: $TickDuration_, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $TickDuration_): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$TickDuration>;
        asList(): $ListRecipeComponent<$TickDuration>;
        spread(value: $TickDuration_): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$TickDuration, O>;
        inputKey(name: string): $RecipeKey<$TickDuration>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$TickDuration_>): $RecipeComponent<$TickDuration>;
        asConditionalList(): $ListRecipeComponent<$TickDuration>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$TickDuration_>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$TickDuration>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $TickDuration>>;
        outputKey(name: string): $RecipeKey<$TickDuration>;
        asConditionalListOrSelf(): $ListRecipeComponent<$TickDuration>;
        static HOURS: $RecipeComponentType<$TickDuration>;
        static TICKS: $RecipeComponentType<$TickDuration>;
        static SECONDS: $RecipeComponentType<$TickDuration>;
        static MINUTES: $RecipeComponentType<$TickDuration>;
        constructor(type: $RecipeComponentType<never>, scale: number, codec: $Codec<$TickDuration_>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TimeComponent}.
     */
    export type $TimeComponent_ = { scale?: number, type?: $RecipeComponentType<never>, codec?: $Codec<$TickDuration_>,  } | [scale?: number, type?: $RecipeComponentType<never>, codec?: $Codec<$TickDuration_>, ];
    export class $SizedFluidIngredientComponent extends $Record implements $RecipeComponent<$SizedFluidIngredient> {
        codec(): $Codec<$SizedFluidIngredient>;
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        isEmpty(value: $SizedFluidIngredient): boolean;
        matches(cx: $RecipeMatchContext, value: $SizedFluidIngredient, match: $ReplacementMatchInfo_): boolean;
        typeInfo(): $TypeInfo;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $SizedFluidIngredient): void;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $SizedFluidIngredient>>;
        otherKey(name: string): $RecipeKey<$SizedFluidIngredient>;
        orSelf(): $RecipeComponent<$SizedFluidIngredient>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$SizedFluidIngredient>, json: $JsonObject_): void;
        isIgnored(): boolean;
        toString(ops: $OpsContainer, value: $SizedFluidIngredient): string;
        wrap(cx: $RecipeScriptContext, from: $Object): $SizedFluidIngredient;
        replace(cx: $RecipeScriptContext, original: $SizedFluidIngredient, match: $ReplacementMatchInfo_, arg3: $Object): $SizedFluidIngredient;
        validate(ctx: $RecipeValidationContext, value: $SizedFluidIngredient): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$SizedFluidIngredient>;
        asList(): $ListRecipeComponent<$SizedFluidIngredient>;
        spread(value: $SizedFluidIngredient): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$SizedFluidIngredient, O>;
        inputKey(name: string): $RecipeKey<$SizedFluidIngredient>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$SizedFluidIngredient>): $RecipeComponent<$SizedFluidIngredient>;
        asConditionalList(): $ListRecipeComponent<$SizedFluidIngredient>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$SizedFluidIngredient>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$SizedFluidIngredient>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $SizedFluidIngredient>>;
        outputKey(name: string): $RecipeKey<$SizedFluidIngredient>;
        asConditionalListOrSelf(): $ListRecipeComponent<$SizedFluidIngredient>;
        static OPTIONAL_FLAT: $RecipeComponentType<$SizedFluidIngredient>;
        static OPTIONAL_NESTED: $RecipeComponentType<$SizedFluidIngredient>;
        static FLAT: $RecipeComponentType<$SizedFluidIngredient>;
        static NESTED: $RecipeComponentType<$SizedFluidIngredient>;
        constructor(type: $RecipeComponentType<never>, codec: $Codec<$SizedFluidIngredient>, allowEmpty: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SizedFluidIngredientComponent}.
     */
    export type $SizedFluidIngredientComponent_ = { allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$SizedFluidIngredient>,  } | [allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$SizedFluidIngredient>, ];
    export class $CustomObjectRecipeComponent implements $RecipeComponent<$List<$CustomObjectRecipeComponent$Value>> {
        mapCodec(): $MapCodec<$List<$CustomObjectRecipeComponent$Value>>;
        codec(): $Codec<$List<$CustomObjectRecipeComponent$Value>>;
        createCopy(): $CustomObjectRecipeComponent;
        type(): $RecipeComponentType<never>;
        wrap(rcx: $RecipeScriptContext, from: $Object): $List<$CustomObjectRecipeComponent$Value>;
        isEmpty(value: $List_<$CustomObjectRecipeComponent$Value_>): boolean;
        replace(cx: $RecipeScriptContext, original: $List_<$CustomObjectRecipeComponent$Value_>, match: $ReplacementMatchInfo_, arg3: $Object): $List<$CustomObjectRecipeComponent$Value>;
        matches(cx: $RecipeMatchContext, value: $List_<$CustomObjectRecipeComponent$Value_>, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $List_<$CustomObjectRecipeComponent$Value_>): void;
        typeInfo(): $TypeInfo;
        keys(): $List<$CustomObjectRecipeComponent$Key>;
        buildUniqueId(builder: $UniqueIdBuilder_, list: $List_<$CustomObjectRecipeComponent$Value_>): void;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        hasPriority(hasPriority: $Predicate_<$Set<string>>): $CustomObjectRecipeComponent;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $List<$CustomObjectRecipeComponent$Value>>>;
        otherKey(name: string): $RecipeKey<$List<$CustomObjectRecipeComponent$Value>>;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$List_<$CustomObjectRecipeComponent$Value_>>, json: $JsonObject_): void;
        isIgnored(): boolean;
        toString(ops: $OpsContainer, value: $List_<$CustomObjectRecipeComponent$Value_>): string;
        key(name: string, role: $ComponentRole_): $RecipeKey<$List<$CustomObjectRecipeComponent$Value>>;
        asList(): $ListRecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        spread(value: $List_<$CustomObjectRecipeComponent$Value_>): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$List<$CustomObjectRecipeComponent$Value>, O>;
        inputKey(name: string): $RecipeKey<$List<$CustomObjectRecipeComponent$Value>>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$List_<$CustomObjectRecipeComponent$Value_>>): $RecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        asConditionalList(): $ListRecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$List_<$CustomObjectRecipeComponent$Value_>>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $List<$CustomObjectRecipeComponent$Value>>>;
        outputKey(name: string): $RecipeKey<$List<$CustomObjectRecipeComponent$Value>>;
        asConditionalListOrSelf(): $ListRecipeComponent<$List<$CustomObjectRecipeComponent$Value>>;
        static TYPE: $RecipeComponentType<never>;
        constructor(keys: $List_<$CustomObjectRecipeComponent$Key_>);
        get ignored(): boolean;
    }
    export class $NumberComponent<S, T extends $Number> {
        static intRange(min: number, max: number): $NumberComponent$IntRange;
        static floatRange(min: number, max: number): $NumberComponent$FloatRange;
        static doubleRange(min: number, max: number): $NumberComponent$DoubleRange;
        static longRange(min: number, max: number): $NumberComponent$LongRange;
        static NON_NEGATIVE_DOUBLE: $RecipeComponentType<number>;
        static POSITIVE_FLOAT: $RecipeComponentType<number>;
        static FLOAT: $NumberComponent$FloatRange;
        static DOUBLE_TYPE: $RecipeComponentType<never>;
        static LONG_TYPE: $RecipeComponentType<never>;
        static POSITIVE_INT: $RecipeComponentType<number>;
        static NON_NEGATIVE_FLOAT: $RecipeComponentType<number>;
        static FLOAT_TYPE: $RecipeComponentType<never>;
        static INT: $NumberComponent$IntRange;
        static NON_NEGATIVE_INT: $RecipeComponentType<number>;
        static POSITIVE_LONG: $RecipeComponentType<number>;
        static NON_NEGATIVE_LONG: $RecipeComponentType<number>;
        static DOUBLE: $NumberComponent$DoubleRange;
        static POSITIVE_DOUBLE: $RecipeComponentType<number>;
        static LONG: $NumberComponent$LongRange;
        static INT_TYPE: $RecipeComponentType<never>;
    }
    export interface $NumberComponent<S, T extends $Number> extends $RecipeComponent<T> {
        toString(typeOverride: $RecipeComponentType<never>, name: string, min: T, max: T): string;
        min(min: T): $NumberComponent<S, T>;
        min(): T;
        max(max: T): $NumberComponent<S, T>;
        max(): T;
        typeInfo(): $TypeInfo;
        range(min: T, max: T): $NumberComponent<S, T>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
    }
    export class $BookCategoryComponent {
        static CRAFTING_BOOK_CATEGORY: $RecipeComponentType<$CraftingBookCategory>;
        static COOKING_BOOK_CATEGORY: $RecipeComponentType<$CookingBookCategory>;
        constructor();
    }
    export class $RecipeComponentType$Dynamic$Simple extends $Record implements $RecipeComponentCodecFactory<$RecipeComponent<never>> {
    }
    /**
     * Values that may be interpreted as {@link $RecipeComponentType$Dynamic$Simple}.
     */
    export type $RecipeComponentType$Dynamic$Simple_ = { mapCodec?: $MapCodec_<any>,  } | [mapCodec?: $MapCodec_<any>, ];
    export class $RecipeValidationContext {
    }
    export interface $RecipeValidationContext extends $KubeRecipeContext, $RecipeMatchContext {
        errors(): $ErrorStack;
    }
    export class $RecipeComponentBuilder {
    }
    export interface $RecipeComponentBuilder {
    }
    export class $EitherRecipeComponent<H, L> extends $Record implements $RecipeComponent<$Either<H, L>> {
        codec(): $Codec<$Either<H, L>>;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: $Either<H, L>): string;
        wrap(cx: $RecipeScriptContext, from: $Object): $Either<H, L>;
        replace(cx: $RecipeScriptContext, original: $Either<H, L>, match: $ReplacementMatchInfo_, arg3: $Object): $Either<H, L>;
        matches(cx: $RecipeMatchContext, value: $Either<H, L>, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $Either<H, L>): void;
        typeInfo(): $TypeInfo;
        spread(value: $Either<H, L>): $List<never>;
        left(): $RecipeComponent<H>;
        right(): $RecipeComponent<L>;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $Either<H, L>): void;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $Either<H, L>>>;
        otherKey(name: string): $RecipeKey<$Either<H, L>>;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<$Either<H, L>>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Either<H, L>>, json: $JsonObject_): void;
        isIgnored(): boolean;
        isEmpty(value: $Either<H, L>): boolean;
        key(name: string, role: $ComponentRole_): $RecipeKey<$Either<H, L>>;
        asList(): $ListRecipeComponent<$Either<H, L>>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$Either<H, L>, O>;
        inputKey(name: string): $RecipeKey<$Either<H, L>>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$Either<H, L>>): $RecipeComponent<$Either<H, L>>;
        asConditionalList(): $ListRecipeComponent<$Either<H, L>>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Either<H, L>>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$Either<H, L>>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $Either<H, L>>>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<$Either<H, L>>;
        asConditionalListOrSelf(): $ListRecipeComponent<$Either<H, L>>;
        static TYPE: $RecipeComponentType<never>;
        constructor(left: $RecipeComponent<H>, right: $RecipeComponent<L>);
        constructor(left: $RecipeComponent<H>, right: $RecipeComponent<L>, codec: $Codec<$Either<H, L>>, typeInfo: $TypeInfo_);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EitherRecipeComponent}.
     */
    export type $EitherRecipeComponent_<H, L> = { typeInfo?: $TypeInfo_, left?: $RecipeComponent<any>, codec?: $Codec<$Either<any, any>>, right?: $RecipeComponent<any>,  } | [typeInfo?: $TypeInfo_, left?: $RecipeComponent<any>, codec?: $Codec<$Either<any, any>>, right?: $RecipeComponent<any>, ];
    export class $ComponentRole extends $Enum<$ComponentRole> implements $StringRepresentable {
        isOutput(): boolean;
        isInput(): boolean;
        getSerializedName(): string;
        static values(): $ComponentRole[];
        static valueOf(name: string): $ComponentRole;
        isOther(): boolean;
        getRemappedEnumConstantName(): string;
        static OTHER: $ComponentRole;
        static INPUT: $ComponentRole;
        static CODEC: $Codec<$ComponentRole>;
        static OUTPUT: $ComponentRole;
        get output(): boolean;
        get input(): boolean;
        get serializedName(): string;
        get other(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ComponentRole}.
     */
    export type $ComponentRole_ = "input" | "output" | "other";
    export class $IgnoreComponent extends $Enum<$IgnoreComponent> implements $RecipeComponent<$Object> {
        codec(): $Codec<$Object>;
        allowEmpty(): boolean;
        isIgnored(): boolean;
        type(): $RecipeComponentType<never>;
        static values(): $IgnoreComponent[];
        static valueOf(name: string): $IgnoreComponent;
        wrap(cx: $RecipeScriptContext, from: $Object): $Object;
        isEmpty(value: $Object): boolean;
        validate(ctx: $RecipeValidationContext, value: $Object): void;
        typeInfo(): $TypeInfo;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $Object): void;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $Object>>;
        otherKey(name: string): $RecipeKey<$Object>;
        orSelf(): $RecipeComponent<$Object>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Object>, json: $JsonObject_): void;
        toString(ops: $OpsContainer, value: $Object): string;
        replace(cx: $RecipeScriptContext, original: $Object, match: $ReplacementMatchInfo_, arg3: $Object): $Object;
        matches(cx: $RecipeMatchContext, value: $Object, match: $ReplacementMatchInfo_): boolean;
        key(name: string, role: $ComponentRole_): $RecipeKey<$Object>;
        asList(): $ListRecipeComponent<$Object>;
        spread(value: $Object): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$Object, O>;
        inputKey(name: string): $RecipeKey<$Object>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$Object>): $RecipeComponent<$Object>;
        asConditionalList(): $ListRecipeComponent<$Object>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Object>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$Object>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $Object>>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<$Object>;
        asConditionalListOrSelf(): $ListRecipeComponent<$Object>;
        static CODEC: $Codec<$Object>;
        static INSTANCE: $IgnoreComponent;
        static TYPE: $RecipeComponentType<$Object>;
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IgnoreComponent}.
     */
    export type $IgnoreComponent_ = "instance";
    export class $RecipeComponentType$Dynamic<T> extends $RecipeComponentType<T> {
    }
    export class $NumberComponent$IntRange extends $Record implements $NumberComponent<$NumberComponent$IntRange, number> {
        codec(): $Codec<number>;
        type(): $RecipeComponentType<never>;
        min(): number;
        max(): number;
        wrap(cx: $RecipeScriptContext, from: $Object): number;
        static of(typeOverride: $RecipeComponentType<never>, min: number, max: number): $NumberComponent$IntRange;
        typeInfo(): $TypeInfo;
        range(min: number, max: number): $NumberComponent$IntRange;
        typeOverride(): $RecipeComponentType<never>;
        toString(typeOverride: $RecipeComponentType<never>, name: string, min: number, max: number): string;
        min(min: number): $NumberComponent<$NumberComponent$IntRange, number>;
        max(max: number): $NumberComponent<$NumberComponent$IntRange, number>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, number>>;
        otherKey(name: string): $RecipeKey<number>;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<number>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<number>, json: $JsonObject_): void;
        isIgnored(): boolean;
        toString(ops: $OpsContainer, value: number): string;
        isEmpty(value: number): boolean;
        replace(cx: $RecipeScriptContext, original: number, match: $ReplacementMatchInfo_, arg3: $Object): number;
        matches(cx: $RecipeMatchContext, value: number, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: number): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<number>;
        asList(): $ListRecipeComponent<number>;
        spread(value: number): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<number, O>;
        inputKey(name: string): $RecipeKey<number>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<number>): $RecipeComponent<number>;
        asConditionalList(): $ListRecipeComponent<number>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<number>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: number): void;
        asListOrSelf(): $ListRecipeComponent<number>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, number>>;
        outputKey(name: string): $RecipeKey<number>;
        asConditionalListOrSelf(): $ListRecipeComponent<number>;
        constructor(typeOverride: $RecipeComponentType<never>, min: number, max: number, codec: $Codec<number>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NumberComponent$IntRange}.
     */
    export type $NumberComponent$IntRange_ = { typeOverride?: $RecipeComponentType<never>, codec?: $Codec<number>, max?: number, min?: number,  } | [typeOverride?: $RecipeComponentType<never>, codec?: $Codec<number>, max?: number, min?: number, ];
    export class $RecipeComponentValueFunction extends $BaseFunction {
        call(scope: $Scriptable, thisObj: $Scriptable, args: $Object[]): $KubeRecipe;
        componentValue: $RecipeComponentValue<never>;
        static DONTENUM: number;
        static CONST: number;
        recipe: $KubeRecipe;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(recipe: $KubeRecipe, componentValue: $RecipeComponentValue<never>);
    }
    export class $NumberComponent$DoubleRange extends $Record implements $NumberComponent<$NumberComponent$DoubleRange, number> {
        codec(): $Codec<number>;
        type(): $RecipeComponentType<never>;
        min(): number;
        max(): number;
        wrap(cx: $RecipeScriptContext, from: $Object): number;
        static of(typeOverride: $RecipeComponentType<never>, min: number, max: number): $NumberComponent$DoubleRange;
        typeInfo(): $TypeInfo;
        range(min: number, max: number): $NumberComponent$DoubleRange;
        typeOverride(): $RecipeComponentType<never>;
        toString(typeOverride: $RecipeComponentType<never>, name: string, min: number, max: number): string;
        min(min: number): $NumberComponent<$NumberComponent$DoubleRange, number>;
        max(max: number): $NumberComponent<$NumberComponent$DoubleRange, number>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, number>>;
        otherKey(name: string): $RecipeKey<number>;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<number>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<number>, json: $JsonObject_): void;
        isIgnored(): boolean;
        toString(ops: $OpsContainer, value: number): string;
        isEmpty(value: number): boolean;
        replace(cx: $RecipeScriptContext, original: number, match: $ReplacementMatchInfo_, arg3: $Object): number;
        matches(cx: $RecipeMatchContext, value: number, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: number): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<number>;
        asList(): $ListRecipeComponent<number>;
        spread(value: number): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<number, O>;
        inputKey(name: string): $RecipeKey<number>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<number>): $RecipeComponent<number>;
        asConditionalList(): $ListRecipeComponent<number>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<number>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: number): void;
        asListOrSelf(): $ListRecipeComponent<number>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, number>>;
        outputKey(name: string): $RecipeKey<number>;
        asConditionalListOrSelf(): $ListRecipeComponent<number>;
        constructor(typeOverride: $RecipeComponentType<never>, min: number, max: number, codec: $Codec<number>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NumberComponent$DoubleRange}.
     */
    export type $NumberComponent$DoubleRange_ = { typeOverride?: $RecipeComponentType<never>, codec?: $Codec<number>, max?: number, min?: number,  } | [typeOverride?: $RecipeComponentType<never>, codec?: $Codec<number>, max?: number, min?: number, ];
    export class $RecipeComponentValueMap extends $AbstractMap<$RecipeKey<never>, $Object> {
        getHolder(key: $Object): $RecipeComponentValue<never>;
        put(key: $RecipeKey<never>, value: $Object): $Object;
        holders: $RecipeComponentValue<never>[];
        static EMPTY: $RecipeComponentValueMap;
        constructor(holders: $RecipeComponentValue<never>[]);
        constructor(keys: $List_<$RecipeKey<never>>);
    }
    export class $CharacterComponent extends $SimpleRecipeComponent<string> {
        toString(ops: $OpsContainer, value: string): string;
        wrap(cx: $RecipeScriptContext, from: $Object): string;
        isEmpty(value: string): boolean;
        static CHARACTER: $RecipeComponentType<string>;
        constructor(type: $RecipeComponentType<never>);
    }
    export class $ItemStackComponent extends $Record implements $RecipeComponent<$ItemStack> {
        codec(): $Codec<$ItemStack>;
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: $ItemStack_): string;
        isEmpty(value: $ItemStack_): boolean;
        matches(cx: $RecipeMatchContext, value: $ItemStack_, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $ItemStack_): void;
        filter(): $Ingredient;
        typeInfo(): $TypeInfo;
        spread(value: $ItemStack_): $List<$ItemStack>;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $ItemStack_): void;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $ItemStack>>;
        otherKey(name: string): $RecipeKey<$ItemStack>;
        orSelf(): $RecipeComponent<$ItemStack>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$ItemStack_>, json: $JsonObject_): void;
        isIgnored(): boolean;
        wrap(cx: $RecipeScriptContext, from: $Object): $ItemStack;
        replace(cx: $RecipeScriptContext, original: $ItemStack_, match: $ReplacementMatchInfo_, arg3: $Object): $ItemStack;
        key(name: string, role: $ComponentRole_): $RecipeKey<$ItemStack>;
        asList(): $ListRecipeComponent<$ItemStack>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$ItemStack, O>;
        inputKey(name: string): $RecipeKey<$ItemStack>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$ItemStack_>): $RecipeComponent<$ItemStack>;
        asConditionalList(): $ListRecipeComponent<$ItemStack>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$ItemStack_>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$ItemStack>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $ItemStack>>;
        outputKey(name: string): $RecipeKey<$ItemStack>;
        asConditionalListOrSelf(): $ListRecipeComponent<$ItemStack>;
        static ITEM_STACK: $RecipeComponentType<$ItemStack>;
        static FILTERED_ITEM_STACK: $RecipeComponentType<never>;
        static OPTIONAL_ITEM_STACK: $RecipeComponentType<$ItemStack>;
        constructor(type: $RecipeComponentType<never>, allowEmpty: boolean, filter: $Ingredient_);
        constructor(type: $RecipeComponentType<never>, codec: $Codec<$ItemStack_>, allowEmpty: boolean, filter: $Ingredient_);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemStackComponent}.
     */
    export type $ItemStackComponent_ = { filter?: $Ingredient_, codec?: $Codec<$ItemStack_>, allowEmpty?: boolean, type?: $RecipeComponentType<never>,  } | [filter?: $Ingredient_, codec?: $Codec<$ItemStack_>, allowEmpty?: boolean, type?: $RecipeComponentType<never>, ];
    export class $BooleanComponent implements $RecipeComponent<boolean> {
        codec(): $Codec<boolean>;
        type(): $RecipeComponentType<never>;
        wrap(cx: $RecipeScriptContext, from: $Object): boolean;
        typeInfo(): $TypeInfo;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, boolean>>;
        otherKey(name: string): $RecipeKey<boolean>;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<boolean>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<boolean>, json: $JsonObject_): void;
        isIgnored(): boolean;
        toString(ops: $OpsContainer, value: boolean): string;
        isEmpty(value: boolean): boolean;
        replace(cx: $RecipeScriptContext, original: boolean, match: $ReplacementMatchInfo_, arg3: $Object): boolean;
        matches(cx: $RecipeMatchContext, value: boolean, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: boolean): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<boolean>;
        asList(): $ListRecipeComponent<boolean>;
        spread(value: boolean): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<boolean, O>;
        inputKey(name: string): $RecipeKey<boolean>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<boolean>): $RecipeComponent<boolean>;
        asConditionalList(): $ListRecipeComponent<boolean>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<boolean>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: boolean): void;
        asListOrSelf(): $ListRecipeComponent<boolean>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, boolean>>;
        outputKey(name: string): $RecipeKey<boolean>;
        asConditionalListOrSelf(): $ListRecipeComponent<boolean>;
        static BOOLEAN: $RecipeComponentType<boolean>;
        constructor();
        get ignored(): boolean;
    }
    export class $RecipeValidationContext$Impl extends $Record implements $RecipeValidationContext {
        errors(): $ErrorStack;
        recipe(): $KubeRecipe;
        registries(): $RegistryAccessContainer;
        ops(): $RegistryOpsContainer;
        constructor(recipe: $KubeRecipe, errors: $ErrorStack);
    }
    /**
     * Values that may be interpreted as {@link $RecipeValidationContext$Impl}.
     */
    export type $RecipeValidationContext$Impl_ = { errors?: $ErrorStack, recipe?: $KubeRecipe,  } | [errors?: $ErrorStack, recipe?: $KubeRecipe, ];
    export class $TagKeyComponent<T> extends $Record implements $RecipeComponent<$TagKey<T>> {
        registry(): $ResourceKey<$Registry<$TagKey<T>>>;
        codec(): $Codec<$TagKey<$TagKey<T>>>;
        hashed(): boolean;
        registryType(): $TypeInfo;
        type(): $RecipeComponentType<never>;
        wrap(cx: $RecipeScriptContext, from: $Object): $TagKey<$TagKey<T>>;
        typeInfo(): $TypeInfo;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $TagKey_<$TagKey<T>>): void;
        typeOverride(): $RecipeComponentType<never>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $TagKey<T>>>;
        otherKey(name: string): $RecipeKey<$TagKey<T>>;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<$TagKey<T>>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$TagKey_<T>>, json: $JsonObject_): void;
        isIgnored(): boolean;
        toString(ops: $OpsContainer, value: $TagKey_<T>): string;
        isEmpty(value: $TagKey_<T>): boolean;
        replace(cx: $RecipeScriptContext, original: $TagKey_<T>, match: $ReplacementMatchInfo_, arg3: $Object): $TagKey<T>;
        matches(cx: $RecipeMatchContext, value: $TagKey_<T>, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $TagKey_<T>): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$TagKey<T>>;
        asList(): $ListRecipeComponent<$TagKey<T>>;
        spread(value: $TagKey_<T>): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$TagKey<T>, O>;
        inputKey(name: string): $RecipeKey<$TagKey<T>>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$TagKey_<T>>): $RecipeComponent<$TagKey<T>>;
        asConditionalList(): $ListRecipeComponent<$TagKey<T>>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$TagKey_<T>>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$TagKey<T>>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $TagKey<T>>>;
        outputKey(name: string): $RecipeKey<$TagKey<T>>;
        asConditionalListOrSelf(): $ListRecipeComponent<$TagKey<T>>;
        static ITEM: $RecipeComponentType<$TagKey<$Item>>;
        static HASHED_FLUID: $RecipeComponentType<$TagKey<$Fluid>>;
        static HASHED_ENTITY_TYPE: $RecipeComponentType<$TagKey<$EntityType<never>>>;
        static BIOME: $RecipeComponentType<$TagKey<$Biome>>;
        static FLUID: $RecipeComponentType<$TagKey<$Fluid>>;
        static HASHED_ITEM: $RecipeComponentType<$TagKey<$Item>>;
        static BLOCK: $RecipeComponentType<$TagKey<$Block>>;
        static TAG_KEY_TYPE: $TypeInfo;
        static HASHED_BLOCK: $RecipeComponentType<$TagKey<$Block>>;
        static ENTITY_TYPE: $RecipeComponentType<$TagKey<$EntityType<never>>>;
        static TYPE: $RecipeComponentType<never>;
        static HASHED_BIOME: $RecipeComponentType<$TagKey<$Biome>>;
        constructor(typeOverride: $RecipeComponentType<never>, registry: $ResourceKey_<$Registry<$TagKey<T>>>, registryType: $TypeInfo_, hashed: boolean);
        constructor(typeOverride: $RecipeComponentType<never>, registry: $ResourceKey_<$Registry<$TagKey<T>>>, registryType: $TypeInfo_, codec: $Codec<$TagKey_<$TagKey<T>>>, typeInfo: $TypeInfo_, hashed: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TagKeyComponent}.
     */
    export type $TagKeyComponent_<T> = { registryType?: $TypeInfo_, typeOverride?: $RecipeComponentType<never>, typeInfo?: $TypeInfo_, hashed?: boolean, codec?: $Codec<$TagKey_<any>>, registry?: $ResourceKey_<$Registry<any>>,  } | [registryType?: $TypeInfo_, typeOverride?: $RecipeComponentType<never>, typeInfo?: $TypeInfo_, hashed?: boolean, codec?: $Codec<$TagKey_<any>>, registry?: $ResourceKey_<$Registry<any>>, ];
    export class $BlockComponent extends $Record implements $RecipeComponent<$Block> {
        codec(): $Codec<$Block>;
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: $Block_): string;
        wrap(cx: $RecipeScriptContext, from: $Object): $Block;
        isEmpty(value: $Block_): boolean;
        matches(cx: $RecipeMatchContext, value: $Block_, match: $ReplacementMatchInfo_): boolean;
        typeInfo(): $TypeInfo;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $Block_): void;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $Block>>;
        otherKey(name: string): $RecipeKey<$Block>;
        orSelf(): $RecipeComponent<$Block>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Block_>, json: $JsonObject_): void;
        isIgnored(): boolean;
        replace(cx: $RecipeScriptContext, original: $Block_, match: $ReplacementMatchInfo_, arg3: $Object): $Block;
        validate(ctx: $RecipeValidationContext, value: $Block_): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$Block>;
        asList(): $ListRecipeComponent<$Block>;
        spread(value: $Block_): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$Block, O>;
        inputKey(name: string): $RecipeKey<$Block>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$Block_>): $RecipeComponent<$Block>;
        asConditionalList(): $ListRecipeComponent<$Block>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$Block_>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$Block>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $Block>>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<$Block>;
        asConditionalListOrSelf(): $ListRecipeComponent<$Block>;
        static BLOCK: $RecipeComponentType<$Block>;
        static OPTIONAL_BLOCK: $RecipeComponentType<$Block>;
        constructor(allowEmpty: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockComponent}.
     */
    export type $BlockComponent_ = { allowEmpty?: boolean,  } | [allowEmpty?: boolean, ];
    export class $RecipeComponentType$Unit$Simple<T> extends $Record implements $Function<$RecipeComponentType<T>, $RecipeComponent<T>> {
        compose<V>(arg0: $Function_<V, $RecipeComponentType<T>>): $Function<V, $RecipeComponent<T>>;
        andThen<V>(arg0: $Function_<$RecipeComponent<T>, V>): $Function<$RecipeComponentType<T>, V>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeComponentType$Unit$Simple}.
     */
    export type $RecipeComponentType$Unit$Simple_<T> = { value?: $RecipeComponent<any>,  } | [value?: $RecipeComponent<any>, ];
    export class $RecipeComponentWithParent<T> {
    }
    export interface $RecipeComponentWithParent<T> extends $RecipeComponent<T> {
        codec(): $Codec<T>;
        allowEmpty(): boolean;
        wrap(cx: $RecipeScriptContext, from: $Object): T;
        isEmpty(value: T): boolean;
        replace(cx: $RecipeScriptContext, original: T, match: $ReplacementMatchInfo_, arg3: $Object): T;
        matches(cx: $RecipeMatchContext, value: T, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: T): void;
        typeInfo(): $TypeInfo;
        spread(value: T): $List<never>;
        createBuilder(): $RecipeComponentBuilder;
        buildUniqueId(builder: $UniqueIdBuilder_, value: T): void;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        parentComponent(): $RecipeComponent<T>;
    }
    export class $FluidStackComponent extends $Record implements $RecipeComponent<$FluidStack> {
        codec(): $Codec<$FluidStack>;
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        isEmpty(value: $FluidStack_): boolean;
        matches(cx: $RecipeMatchContext, value: $FluidStack_, match: $ReplacementMatchInfo_): boolean;
        typeInfo(): $TypeInfo;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $FluidStack_): void;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $FluidStack>>;
        otherKey(name: string): $RecipeKey<$FluidStack>;
        orSelf(): $RecipeComponent<$FluidStack>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$FluidStack_>, json: $JsonObject_): void;
        isIgnored(): boolean;
        toString(ops: $OpsContainer, value: $FluidStack_): string;
        wrap(cx: $RecipeScriptContext, from: $Object): $FluidStack;
        replace(cx: $RecipeScriptContext, original: $FluidStack_, match: $ReplacementMatchInfo_, arg3: $Object): $FluidStack;
        validate(ctx: $RecipeValidationContext, value: $FluidStack_): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$FluidStack>;
        asList(): $ListRecipeComponent<$FluidStack>;
        spread(value: $FluidStack_): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$FluidStack, O>;
        inputKey(name: string): $RecipeKey<$FluidStack>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$FluidStack_>): $RecipeComponent<$FluidStack>;
        asConditionalList(): $ListRecipeComponent<$FluidStack>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$FluidStack_>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$FluidStack>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $FluidStack>>;
        outputKey(name: string): $RecipeKey<$FluidStack>;
        asConditionalListOrSelf(): $ListRecipeComponent<$FluidStack>;
        static FLUID_STACK: $RecipeComponentType<$FluidStack>;
        static OPTIONAL_FLUID_STACK: $RecipeComponentType<$FluidStack>;
        constructor(type: $RecipeComponentType<never>, codec: $Codec<$FluidStack_>, allowEmpty: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FluidStackComponent}.
     */
    export type $FluidStackComponent_ = { allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$FluidStack_>,  } | [allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$FluidStack_>, ];
    export class $CustomObjectRecipeComponent$Value extends $Record implements $Map$Entry<$CustomObjectRecipeComponent$Key, $Object>, $Comparable<$CustomObjectRecipeComponent$Value> {
        index(): number;
        value(): $Object;
        compareTo(value: $CustomObjectRecipeComponent$Value_): number;
        getValue(): $Object;
        getKey(): $CustomObjectRecipeComponent$Key;
        key(): $CustomObjectRecipeComponent$Key;
        setValue(object: $Object): $Object;
        constructor(key: $CustomObjectRecipeComponent$Key_, index: number, value: $Object);
    }
    /**
     * Values that may be interpreted as {@link $CustomObjectRecipeComponent$Value}.
     */
    export type $CustomObjectRecipeComponent$Value_ = { key?: $CustomObjectRecipeComponent$Key_, index?: number, value?: $Object,  } | [key?: $CustomObjectRecipeComponent$Key_, index?: number, value?: $Object, ];
    export class $SizedIngredientComponent extends $Record implements $RecipeComponent<$SizedIngredient> {
        codec(): $Codec<$SizedIngredient>;
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        isEmpty(value: $SizedIngredient_): boolean;
        matches(cx: $RecipeMatchContext, value: $SizedIngredient_, match: $ReplacementMatchInfo_): boolean;
        typeInfo(): $TypeInfo;
        spread(value: $SizedIngredient_): $List<$Ingredient>;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $SizedIngredient_): void;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $SizedIngredient>>;
        otherKey(name: string): $RecipeKey<$SizedIngredient>;
        orSelf(): $RecipeComponent<$SizedIngredient>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$SizedIngredient_>, json: $JsonObject_): void;
        isIgnored(): boolean;
        toString(ops: $OpsContainer, value: $SizedIngredient_): string;
        wrap(cx: $RecipeScriptContext, from: $Object): $SizedIngredient;
        replace(cx: $RecipeScriptContext, original: $SizedIngredient_, match: $ReplacementMatchInfo_, arg3: $Object): $SizedIngredient;
        validate(ctx: $RecipeValidationContext, value: $SizedIngredient_): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$SizedIngredient>;
        asList(): $ListRecipeComponent<$SizedIngredient>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$SizedIngredient, O>;
        inputKey(name: string): $RecipeKey<$SizedIngredient>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$SizedIngredient_>): $RecipeComponent<$SizedIngredient>;
        asConditionalList(): $ListRecipeComponent<$SizedIngredient>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$SizedIngredient_>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$SizedIngredient>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $SizedIngredient>>;
        outputKey(name: string): $RecipeKey<$SizedIngredient>;
        asConditionalListOrSelf(): $ListRecipeComponent<$SizedIngredient>;
        static OPTIONAL_FLAT: $RecipeComponentType<$SizedIngredient>;
        static OPTIONAL_SIZED_INGREDIENT: $RecipeComponentType<$SizedIngredient>;
        static FLAT: $RecipeComponentType<$SizedIngredient>;
        static SIZED_INGREDIENT: $RecipeComponentType<$SizedIngredient>;
        constructor(type: $RecipeComponentType<never>, codec: $Codec<$SizedIngredient_>, allowEmpty: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SizedIngredientComponent}.
     */
    export type $SizedIngredientComponent_ = { allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$SizedIngredient_>,  } | [allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<$SizedIngredient_>, ];
    export class $SimpleRecipeComponent<T> implements $RecipeComponent<T> {
        codec(): $Codec<T>;
        type(): $RecipeComponentType<never>;
        typeInfo(): $TypeInfo;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, T>>;
        otherKey(name: string): $RecipeKey<T>;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<T>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        isIgnored(): boolean;
        toString(ops: $OpsContainer, value: T): string;
        wrap(cx: $RecipeScriptContext, from: $Object): T;
        isEmpty(value: T): boolean;
        replace(cx: $RecipeScriptContext, original: T, match: $ReplacementMatchInfo_, arg3: $Object): T;
        matches(cx: $RecipeMatchContext, value: T, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: T): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<T>;
        asList(): $ListRecipeComponent<T>;
        spread(value: T): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<T, O>;
        inputKey(name: string): $RecipeKey<T>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<T>): $RecipeComponent<T>;
        asConditionalList(): $ListRecipeComponent<T>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: T): void;
        asListOrSelf(): $ListRecipeComponent<T>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, T>>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<T>;
        asConditionalListOrSelf(): $ListRecipeComponent<T>;
        constructor(type: $RecipeComponentType<never>, codec: $Codec<T>, typeInfo: $TypeInfo_);
        get ignored(): boolean;
    }
    export class $StringComponent extends $Record implements $RecipeComponent<string> {
        codec(): $Codec<string>;
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: string): string;
        isEmpty(value: string): boolean;
        typeInfo(): $TypeInfo;
        spread(value: string): $List<string>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, string>>;
        otherKey(name: string): $RecipeKey<string>;
        orSelf(): $RecipeComponent<string>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<string>, json: $JsonObject_): void;
        isIgnored(): boolean;
        wrap(cx: $RecipeScriptContext, from: $Object): string;
        replace(cx: $RecipeScriptContext, original: string, match: $ReplacementMatchInfo_, arg3: $Object): string;
        matches(cx: $RecipeMatchContext, value: string, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: string): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<string>;
        asList(): $ListRecipeComponent<string>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<string, O>;
        inputKey(name: string): $RecipeKey<string>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<string>): $RecipeComponent<string>;
        asConditionalList(): $ListRecipeComponent<string>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<string>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: string): void;
        asListOrSelf(): $ListRecipeComponent<string>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, string>>;
        outputKey(name: string): $RecipeKey<string>;
        asConditionalListOrSelf(): $ListRecipeComponent<string>;
        static OPTIONAL_STRING: $RecipeComponentType<string>;
        static STRING: $RecipeComponentType<string>;
        static ID: $RecipeComponentType<string>;
        constructor(type: $RecipeComponentType<never>, codec: $Codec<string>, allowEmpty: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $StringComponent}.
     */
    export type $StringComponent_ = { allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<string>,  } | [allowEmpty?: boolean, type?: $RecipeComponentType<never>, codec?: $Codec<string>, ];
    export class $RecipeComponentCodecFactory<CT extends $RecipeComponent<never>> {
    }
    export interface $RecipeComponentCodecFactory<CT extends $RecipeComponent<never>> {
        create(type: $RecipeComponentType<never>, ctx: $RecipeTypeRegistryContext_): $MapCodec<CT>;
    }
    /**
     * Values that may be interpreted as {@link $RecipeComponentCodecFactory}.
     */
    export type $RecipeComponentCodecFactory_<CT> = ((type: $RecipeComponentType<never>, ctx: $RecipeTypeRegistryContext) => $MapCodec_<CT>);
    export class $RecipeComponentTypeRegistry {
    }
    export interface $RecipeComponentTypeRegistry {
        register(type: $RecipeComponentType<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $RecipeComponentTypeRegistry}.
     */
    export type $RecipeComponentTypeRegistry_ = ((type: $RecipeComponentType<never>) => void);
    export class $ComponentValueMap extends $Reference2ObjectOpenHashMap<$RecipeKey<never>, $Object> {
        getValue<T>(cx: $RecipeScriptContext, key: $RecipeKey<T>): T;
        constructor(init: number);
    }
    export class $RecipeComponentType$Unit<T> extends $RecipeComponentType<T> {
    }
    export class $RecipeComponentValue<T> implements $WrappedJS, $Map$Entry<$RecipeKey<T>, T> {
        getValue(): T;
        replace(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        matches(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, sourceLine: $SourceLine_): void;
        getKey(): $RecipeKey<T>;
        write(): void;
        setValue(newValue: T): T;
        copy(): $RecipeComponentValue<T>;
        getIndex(): number;
        shouldWrite(): boolean;
        static EMPTY_ARRAY: $RecipeComponentValue<never>[];
        index: number;
        value: T;
        key: $RecipeKey<T>;
        constructor(key: $RecipeKey<T>, index: number);
    }
    export class $BlockStateComponent extends $Record implements $RecipeComponent<$BlockState> {
        codec(): $Codec<$BlockState>;
        allowEmpty(): boolean;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: $BlockState_): string;
        wrap(cx: $RecipeScriptContext, from: $Object): $BlockState;
        isEmpty(value: $BlockState_): boolean;
        matches(cx: $RecipeMatchContext, value: $BlockState_, match: $ReplacementMatchInfo_): boolean;
        typeInfo(): $TypeInfo;
        preferObjectForm(): boolean;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $BlockState_): void;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $BlockState>>;
        otherKey(name: string): $RecipeKey<$BlockState>;
        orSelf(): $RecipeComponent<$BlockState>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$BlockState_>, json: $JsonObject_): void;
        isIgnored(): boolean;
        replace(cx: $RecipeScriptContext, original: $BlockState_, match: $ReplacementMatchInfo_, arg3: $Object): $BlockState;
        validate(ctx: $RecipeValidationContext, value: $BlockState_): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$BlockState>;
        asList(): $ListRecipeComponent<$BlockState>;
        spread(value: $BlockState_): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$BlockState, O>;
        inputKey(name: string): $RecipeKey<$BlockState>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$BlockState_>): $RecipeComponent<$BlockState>;
        asConditionalList(): $ListRecipeComponent<$BlockState>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$BlockState_>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$BlockState>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $BlockState>>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<$BlockState>;
        asConditionalListOrSelf(): $ListRecipeComponent<$BlockState>;
        static OPTIONAL_BLOCK_STRING: $RecipeComponentType<$BlockState>;
        static BLOCK_STRING: $RecipeComponentType<$BlockState>;
        static TYPE_INFO: $TypeInfo;
        static BLOCK: $RecipeComponentType<$BlockState>;
        static OPTIONAL_BLOCK: $RecipeComponentType<$BlockState>;
        constructor(type: $RecipeComponentType<never>, preferObjectForm: boolean, allowEmpty: boolean);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockStateComponent}.
     */
    export type $BlockStateComponent_ = { preferObjectForm?: boolean, allowEmpty?: boolean, type?: $RecipeComponentType<never>,  } | [preferObjectForm?: boolean, allowEmpty?: boolean, type?: $RecipeComponentType<never>, ];
    export class $CustomObjectRecipeComponent$Key extends $Record {
        static createCodec(ctx: $RecipeTypeRegistryContext_): $Codec<$CustomObjectRecipeComponent$Key>;
        name(): string;
        component(): $RecipeComponent<never>;
        optional(): boolean;
        alwaysWrite(): boolean;
        constructor(name: string, component: $RecipeComponent<never>, optional: boolean);
        constructor(name: string, component: $RecipeComponent<never>, optional: boolean, alwaysWrite: boolean);
        constructor(name: string, component: $RecipeComponent<never>);
    }
    /**
     * Values that may be interpreted as {@link $CustomObjectRecipeComponent$Key}.
     */
    export type $CustomObjectRecipeComponent$Key_ = { alwaysWrite?: boolean, component?: $RecipeComponent<never>, name?: string, optional?: boolean,  } | [alwaysWrite?: boolean, component?: $RecipeComponent<never>, name?: string, optional?: boolean, ];
    export class $ListRecipeComponent<T> extends $Record implements $RecipeComponent<$List<T>> {
        conditional(): boolean;
        codec(): $Codec<$List<$List<T>>>;
        allowEmpty(): boolean;
        listCodec(): $Codec<$List<$List<T>>>;
        orSelf(): $ListRecipeComponent<$List<T>>;
        spreadWrap(): ($RecipeComponent<never>) | undefined;
        static wrap0<T>(cx: $RecipeScriptContext, component: $RecipeComponent<T>, from: $Object): $List<T>;
        type(): $RecipeComponentType<never>;
        wrap(cx: $RecipeScriptContext, from: $Object): $List<$List<T>>;
        isEmpty(value: $List_<$List_<T>>): boolean;
        replace(cx: $RecipeScriptContext, original: $List_<$List_<T>>, match: $ReplacementMatchInfo_, arg3: $Object): $List<$List<T>>;
        matches(cx: $RecipeMatchContext, value: $List_<$List_<T>>, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $List_<$List_<T>>): void;
        component(): $RecipeComponent<$List<T>>;
        bounds(): $IntBounds;
        typeInfo(): $TypeInfo;
        static create<L>(component: $RecipeComponent<L>, canWriteSelf: boolean, conditional: boolean): $ListRecipeComponent<L>;
        static create<L>(component: $RecipeComponent<L>, canWriteSelf: boolean, conditional: boolean, bounds: $IntBounds_, spread: ($RecipeComponent<never>) | undefined): $ListRecipeComponent<L>;
        spread(): ($RecipeComponent<never>) | undefined;
        spread(value: $List_<$List_<T>>): $List<never>;
        withSpread(spread: ($RecipeComponent<never>) | undefined): $ListRecipeComponent<$List<T>>;
        withBounds(bounds: $IntBounds_): $ListRecipeComponent<$List<T>>;
        canWriteSelf(): boolean;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $List_<$List_<T>>): void;
        asConditional(): $ListRecipeComponent<$List<T>>;
        listTypeInfo(): $TypeInfo;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $List<T>>>;
        otherKey(name: string): $RecipeKey<$List<T>>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$List_<T>>, json: $JsonObject_): void;
        isIgnored(): boolean;
        toString(ops: $OpsContainer, value: $List_<T>): string;
        key(name: string, role: $ComponentRole_): $RecipeKey<$List<T>>;
        asList(): $ListRecipeComponent<$List<T>>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$List<T>, O>;
        inputKey(name: string): $RecipeKey<$List<T>>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$List_<T>>): $RecipeComponent<$List<T>>;
        asConditionalList(): $ListRecipeComponent<$List<T>>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$List_<T>>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<$List<T>>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $List<T>>>;
        outputKey(name: string): $RecipeKey<$List<T>>;
        asConditionalListOrSelf(): $ListRecipeComponent<$List<T>>;
        static TYPE: $RecipeComponentType<never>;
        constructor(component: $RecipeComponent<$List_<T>>, canWriteSelf: boolean, listTypeInfo: $TypeInfo_, listCodec: $Codec<$List_<$List_<T>>>, conditional: boolean, bounds: $IntBounds_, spread: ($RecipeComponent<never>) | undefined, spreadWrap: ($RecipeComponent<never>) | undefined);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ListRecipeComponent}.
     */
    export type $ListRecipeComponent_<T> = { spreadWrap?: ($RecipeComponent<never>) | undefined, component?: $RecipeComponent<any>, canWriteSelf?: boolean, listCodec?: $Codec<$List_<any>>, conditional?: boolean, listTypeInfo?: $TypeInfo_, bounds?: $IntBounds_, spread?: ($RecipeComponent<never>) | undefined,  } | [spreadWrap?: ($RecipeComponent<never>) | undefined, component?: $RecipeComponent<any>, canWriteSelf?: boolean, listCodec?: $Codec<$List_<any>>, conditional?: boolean, listTypeInfo?: $TypeInfo_, bounds?: $IntBounds_, spread?: ($RecipeComponent<never>) | undefined, ];
    export class $EnumComponent<T extends $Enum<T>> extends $Record implements $RecipeComponent<T> {
        codec(): $Codec<T>;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: T): string;
        static of<T extends $Enum<T>>(id: $ResourceLocation_, enumClass: $Class<T>): $RecipeComponentType<T>;
        static of<T extends $Enum<T>>(id: $ResourceLocation_, enumClass: $Class<T>, codec: $Codec<T>): $RecipeComponentType<T>;
        typeInfo(): $EnumTypeInfo;
        buildUniqueId(builder: $UniqueIdBuilder_, value: T): void;
        typeOverride(): $RecipeComponentType<never>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, T>>;
        otherKey(name: string): $RecipeKey<T>;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<T>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        isIgnored(): boolean;
        wrap(cx: $RecipeScriptContext, from: $Object): T;
        isEmpty(value: T): boolean;
        replace(cx: $RecipeScriptContext, original: T, match: $ReplacementMatchInfo_, arg3: $Object): T;
        matches(cx: $RecipeMatchContext, value: T, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: T): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<T>;
        asList(): $ListRecipeComponent<T>;
        spread(value: T): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<T, O>;
        inputKey(name: string): $RecipeKey<T>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<T>): $RecipeComponent<T>;
        asConditionalList(): $ListRecipeComponent<T>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<T>, json: $JsonObject_): void;
        asListOrSelf(): $ListRecipeComponent<T>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, T>>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<T>;
        asConditionalListOrSelf(): $ListRecipeComponent<T>;
        static TYPE: $RecipeComponentType<never>;
        constructor(typeOverride: $RecipeComponentType<never>, typeInfo: $EnumTypeInfo, codec: $Codec<T>);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EnumComponent}.
     */
    export type $EnumComponent_<T> = { typeInfo?: $EnumTypeInfo, typeOverride?: $RecipeComponentType<never>, codec?: $Codec<$Enum<T>>,  } | [typeInfo?: $EnumTypeInfo, typeOverride?: $RecipeComponentType<never>, codec?: $Codec<$Enum<T>>, ];
    export class $ResourceKeyComponent<T> extends $Record implements $RecipeComponent<$ResourceKey<T>> {
        codec(): $Codec<$ResourceKey<$ResourceKey<T>>>;
        registryKey(): $ResourceKey<$Registry<$ResourceKey<T>>>;
        type(): $RecipeComponentType<never>;
        toString(ops: $OpsContainer, value: $ResourceKey_<$ResourceKey<T>>): string;
        wrap(cx: $RecipeScriptContext, from: $Object): $ResourceKey<$ResourceKey<T>>;
        typeInfo(): $TypeInfo;
        typeOverride(): $RecipeComponentType<never>;
        asMap<K>(key: $RecipeComponent<K>): $RecipeComponent<$TinyMap<K, $ResourceKey<T>>>;
        otherKey(name: string): $RecipeKey<$ResourceKey<T>>;
        allowEmpty(): boolean;
        orSelf(): $RecipeComponent<$ResourceKey<T>>;
        readFromJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$ResourceKey_<T>>, json: $JsonObject_): void;
        isIgnored(): boolean;
        isEmpty(value: $ResourceKey_<T>): boolean;
        replace(cx: $RecipeScriptContext, original: $ResourceKey_<T>, match: $ReplacementMatchInfo_, arg3: $Object): $ResourceKey<T>;
        matches(cx: $RecipeMatchContext, value: $ResourceKey_<T>, match: $ReplacementMatchInfo_): boolean;
        validate(ctx: $RecipeValidationContext, value: $ResourceKey_<T>): void;
        key(name: string, role: $ComponentRole_): $RecipeKey<$ResourceKey<T>>;
        asList(): $ListRecipeComponent<$ResourceKey<T>>;
        spread(value: $ResourceKey_<T>): $List<never>;
        or<O>(other: $RecipeComponent<O>): $EitherRecipeComponent<$ResourceKey<T>, O>;
        inputKey(name: string): $RecipeKey<$ResourceKey<T>>;
        createBuilder(): $RecipeComponentBuilder;
        withCodec(codec: $Codec<$ResourceKey_<T>>): $RecipeComponent<$ResourceKey<T>>;
        asConditionalList(): $ListRecipeComponent<$ResourceKey<T>>;
        writeToJson(recipe: $KubeRecipe, cv: $RecipeComponentValue<$ResourceKey_<T>>, json: $JsonObject_): void;
        buildUniqueId(builder: $UniqueIdBuilder_, value: $ResourceKey_<T>): void;
        asListOrSelf(): $ListRecipeComponent<$ResourceKey<T>>;
        asPatternKey(): $RecipeComponent<$TinyMap<string, $ResourceKey<T>>>;
        hasPriority(cx: $RecipeMatchContext, from: $Object): boolean;
        outputKey(name: string): $RecipeKey<$ResourceKey<T>>;
        asConditionalListOrSelf(): $ListRecipeComponent<$ResourceKey<T>>;
        static DIMENSION: $RecipeComponentType<$ResourceKey<$Level>>;
        static LOOT_TABLE: $RecipeComponentType<$ResourceKey<$LootTable>>;
        static TYPE: $RecipeComponentType<never>;
        constructor(typeOverride: $RecipeComponentType<never>, registryKey: $ResourceKey_<$Registry<$ResourceKey<T>>>, codec: $Codec<$ResourceKey_<$ResourceKey<T>>>, typeInfo: $TypeInfo_);
        get ignored(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ResourceKeyComponent}.
     */
    export type $ResourceKeyComponent_<T> = { typeInfo?: $TypeInfo_, typeOverride?: $RecipeComponentType<never>, codec?: $Codec<$ResourceKey_<any>>, registryKey?: $ResourceKey_<$Registry<any>>,  } | [typeInfo?: $TypeInfo_, typeOverride?: $RecipeComponentType<never>, codec?: $Codec<$ResourceKey_<any>>, registryKey?: $ResourceKey_<$Registry<any>>, ];
    export class $RecipeComponentType<T> {
        otherKey(name: string): $RecipeKey<T>;
        mapCodec(ctx: $RecipeTypeRegistryContext_): $MapCodec<$RecipeComponent<never>>;
        id(): $ResourceLocation;
        key(name: string, role: $ComponentRole_): $RecipeKey<T>;
        instance(): $RecipeComponent<T>;
        static dynamic<CT extends $RecipeComponent<never>>(id: $ResourceLocation_, mapCodec: $MapCodec_<CT>): $RecipeComponentType<never>;
        static dynamic<CT extends $RecipeComponent<never>>(id: $ResourceLocation_, codecFactory: $RecipeComponentCodecFactory_<CT>): $RecipeComponentType<never>;
        static unit<T>(id: $ResourceLocation_, instanceGetter: $Function_<$RecipeComponentType<T>, $RecipeComponent<T>>): $RecipeComponentType$Unit<T>;
        static unit<T>(id: $ResourceLocation_, instance: $RecipeComponent<T>): $RecipeComponentType$Unit<T>;
        inputKey(name: string): $RecipeKey<T>;
        outputKey(name: string): $RecipeKey<T>;
        isUnit(): boolean;
        constructor(id: $ResourceLocation_);
    }
}
