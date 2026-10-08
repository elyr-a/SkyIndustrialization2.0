import { $ItemLike } from "@package/net/minecraft/world/level";
import { $DeferredRegister$Items, $DeferredRegister$Blocks } from "@package/net/neoforged/neoforge/registries";
import { $Consumer_, $Consumer, $Function_, $Function } from "@package/java/util/function";
import { $Item$Properties, $Item } from "@package/net/minecraft/world/item";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $BlockLootSubProvider } from "@package/net/minecraft/data/loot";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BlockRegisterableWrapper, $ItemRegisterableWrapper } from "@package/net/swedz/tesseract/neoforge/registry/registerable";
import { $SortOrder, $ModeledRegisteredObjectHolder, $SortOrder_, $AccessibleBlockLootSubProvider } from "@package/net/swedz/tesseract/neoforge/registry";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ItemModelBuilder, $BlockStateProvider, $ItemModelProvider } from "@package/net/neoforged/neoforge/client/model/generators";
import { $LootTable$Builder } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/swedz/tesseract/neoforge/registry/holder" {
    export class $ItemHolder<Type extends $Item> extends $ModeledRegisteredObjectHolder<$Item, Type, $ItemModelProvider, $ItemHolder<Type>> implements $ItemLike {
        withProperties(arg0: $Consumer_<$Item$Properties>): $ItemHolder<Type>;
        asItem(): $Item;
        get(): Type;
        register(): $ItemHolder<Type>;
        sorted(arg0: $SortOrder_): $ItemHolder<Type>;
        registerableItem(): $ItemRegisterableWrapper<Type>;
        withModelBuilder(arg0: $Function_<$ItemHolder<Type>, $Consumer<$ItemModelBuilder>>): $ItemHolder<Type>;
        sortOrder(): $SortOrder;
        constructor(arg0: $ResourceLocation_, arg1: string, arg2: $DeferredRegister$Items, arg3: $Function_<$Item$Properties, Type>);
    }
    export class $BlockHolder<BlockType extends $Block> extends $ModeledRegisteredObjectHolder<$Block, BlockType, $BlockStateProvider, $BlockHolder<BlockType>> {
        withLootTable(arg0: $Function_<$BlockHolder<BlockType>, $Function<$AccessibleBlockLootSubProvider, $LootTable$Builder>>): $BlockHolder<BlockType>;
        withProperties(arg0: $Consumer_<$BlockBehaviour$Properties>): $BlockHolder<BlockType>;
        get(): BlockType;
        register(): $BlockHolder<BlockType>;
        buildLootTable(arg0: $BlockLootSubProvider): $LootTable$Builder;
        registerableBlock(): $BlockRegisterableWrapper<BlockType>;
        hasLootTable(): boolean;
        getLootTableBuilder(): $Function<$AccessibleBlockLootSubProvider, $LootTable$Builder>;
        constructor(arg0: $ResourceLocation_, arg1: string, arg2: $DeferredRegister$Blocks, arg3: $Function_<$BlockBehaviour$Properties, BlockType>);
        get lootTableBuilder(): $Function<$AccessibleBlockLootSubProvider, $LootTable$Builder>;
    }
}
