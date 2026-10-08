import { $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $CreativeModeTab_, $Item_, $CreativeModeTab, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Pattern } from "@package/java/util/regex";
import { $Set } from "@package/java/util";
import { $ItemStackSet, $ItemPredicate } from "@package/dev/latvian/mods/kubejs/item";
import { $Predicate, $Predicate_, $Supplier } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $IngredientType, $ICustomIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/ingredient" {
    export class $KubeJSIngredients {
        static NAMESPACE: $Supplier<$IngredientType<$NamespaceIngredient>>;
        static WILDCARD: $Supplier<$IngredientType<$WildcardIngredient>>;
        static REGEX: $Supplier<$IngredientType<$RegExIngredient>>;
        static CREATIVE_TAB: $Supplier<$IngredientType<$CreativeTabIngredient>>;
        static REGISTRY: $DeferredRegister<$IngredientType<never>>;
    }
    export interface $KubeJSIngredients {
    }
    export class $CreativeTabIngredient extends $Record implements $KubeJSIngredient {
        test(stack: $ItemStack_): boolean;
        tab(): $CreativeModeTab;
        getType(): $IngredientType<never>;
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        isSimple(): boolean;
        toVanilla(): $Ingredient;
        getDisplayStacks(): $ItemStackSet;
        isWildcard(): boolean;
        getFirst(): $ItemStack;
        getStackArray(): $ItemStack[];
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        getStacks(): $ItemStackSet;
        testItem(item: $Item_): boolean;
        asIngredient(): $Ingredient;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$CreativeTabIngredient>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CreativeTabIngredient>;
        constructor(tab: $CreativeModeTab_);
        get type(): $IngredientType<never>;
        get items(): $Stream<$ItemStack>;
        get simple(): boolean;
        get displayStacks(): $ItemStackSet;
        get wildcard(): boolean;
        get first(): $ItemStack;
        get stackArray(): $ItemStack[];
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get stacks(): $ItemStackSet;
    }
    /**
     * Values that may be interpreted as {@link $CreativeTabIngredient}.
     */
    export type $CreativeTabIngredient_ = { tab?: $CreativeModeTab_,  } | [tab?: $CreativeModeTab_, ];
    export class $RegExIngredient extends $Record implements $KubeJSIngredient {
        patternString(): string;
        test(stack: $ItemStack_): boolean;
        pattern(): $Pattern;
        getType(): $IngredientType<never>;
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        isSimple(): boolean;
        toVanilla(): $Ingredient;
        getDisplayStacks(): $ItemStackSet;
        isWildcard(): boolean;
        getFirst(): $ItemStack;
        getStackArray(): $ItemStack[];
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        getStacks(): $ItemStackSet;
        testItem(item: $Item_): boolean;
        asIngredient(): $Ingredient;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$RegExIngredient>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RegExIngredient>;
        constructor(pattern: $Pattern);
        constructor(pattern: $Pattern, patternString: string);
        get type(): $IngredientType<never>;
        get items(): $Stream<$ItemStack>;
        get simple(): boolean;
        get displayStacks(): $ItemStackSet;
        get wildcard(): boolean;
        get first(): $ItemStack;
        get stackArray(): $ItemStack[];
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get stacks(): $ItemStackSet;
    }
    /**
     * Values that may be interpreted as {@link $RegExIngredient}.
     */
    export type $RegExIngredient_ = { patternString?: string, pattern?: $Pattern,  } | [patternString?: string, pattern?: $Pattern, ];
    export class $WildcardIngredient implements $KubeJSIngredient {
        test(stack: $ItemStack_): boolean;
        getType(): $IngredientType<never>;
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        isSimple(): boolean;
        toVanilla(): $Ingredient;
        getDisplayStacks(): $ItemStackSet;
        isWildcard(): boolean;
        getFirst(): $ItemStack;
        getStackArray(): $ItemStack[];
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        getStacks(): $ItemStackSet;
        testItem(item: $Item_): boolean;
        asIngredient(): $Ingredient;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$WildcardIngredient>;
        static INSTANCE: $WildcardIngredient;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $WildcardIngredient>;
        get type(): $IngredientType<never>;
        get items(): $Stream<$ItemStack>;
        get simple(): boolean;
        get displayStacks(): $ItemStackSet;
        get wildcard(): boolean;
        get first(): $ItemStack;
        get stackArray(): $ItemStack[];
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get stacks(): $ItemStackSet;
    }
    export class $NamespaceIngredient extends $Record implements $KubeJSIngredient {
        test(stack: $ItemStack_): boolean;
        getType(): $IngredientType<never>;
        namespace(): string;
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        isSimple(): boolean;
        toVanilla(): $Ingredient;
        getDisplayStacks(): $ItemStackSet;
        isWildcard(): boolean;
        getFirst(): $ItemStack;
        getStackArray(): $ItemStack[];
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        getStacks(): $ItemStackSet;
        testItem(item: $Item_): boolean;
        asIngredient(): $Ingredient;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$NamespaceIngredient>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $NamespaceIngredient>;
        constructor(namespace: string);
        get type(): $IngredientType<never>;
        get items(): $Stream<$ItemStack>;
        get simple(): boolean;
        get displayStacks(): $ItemStackSet;
        get wildcard(): boolean;
        get first(): $ItemStack;
        get stackArray(): $ItemStack[];
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get stacks(): $ItemStackSet;
    }
    /**
     * Values that may be interpreted as {@link $NamespaceIngredient}.
     */
    export type $NamespaceIngredient_ = { namespace?: string,  } | [namespace?: string, ];
    export class $KubeJSIngredient {
    }
    export interface $KubeJSIngredient extends $ICustomIngredient, $ItemPredicate {
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        test(stack: $ItemStack_): boolean;
        isSimple(): boolean;
        get items(): $Stream<$ItemStack>;
        get simple(): boolean;
    }
}
