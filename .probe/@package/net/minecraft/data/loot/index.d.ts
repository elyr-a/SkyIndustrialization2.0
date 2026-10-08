import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $LootPoolEntryContainer$Builder } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $FunctionUserBuilder } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $List, $Set_, $List_ } from "@package/java/util";
import { $CachedOutput_, $DataProvider, $PackOutput } from "@package/net/minecraft/data";
import { $BiConsumer, $BiConsumer_, $Function_, $Function } from "@package/java/util/function";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder, $LootItemCondition$Builder_, $ConditionUserBuilder } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record, $Comparable } from "@package/java/lang";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootTable, $LootTable$Builder } from "@package/net/minecraft/world/level/storage/loot";
export * as packs from "@package/net/minecraft/data/loot/packs";

declare module "@package/net/minecraft/data/loot" {
    export class $LootTableProvider implements $DataProvider {
        getTables(): $List<$LootTableProvider$SubProviderEntry>;
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        constructor(output: $PackOutput, requiredTables: $Set_<$ResourceKey_<$LootTable>>, subProviders: $List_<$LootTableProvider$SubProviderEntry_>, registries: $CompletableFuture<$HolderLookup$Provider>);
        get tables(): $List<$LootTableProvider$SubProviderEntry>;
        get name(): string;
    }
    export class $LootTableProvider$SubProviderEntry extends $Record {
        paramSet(): $LootContextParamSet;
        provider(): $Function<$HolderLookup$Provider, $LootTableSubProvider>;
        constructor(provider: $Function_<$HolderLookup$Provider, $LootTableSubProvider>, paramSet: $LootContextParamSet);
    }
    /**
     * Values that may be interpreted as {@link $LootTableProvider$SubProviderEntry}.
     */
    export type $LootTableProvider$SubProviderEntry_ = { paramSet?: $LootContextParamSet, provider?: $Function_<$HolderLookup$Provider, $LootTableSubProvider>,  } | [paramSet?: $LootContextParamSet, provider?: $Function_<$HolderLookup$Provider, $LootTableSubProvider>, ];
    export class $BlockLootSubProvider implements $LootTableSubProvider {
        /**
         * If the block is mined with Shears, drops 1 `block`.
         * Otherwise, drops loot specified by `builder`.
         */
        createSilkTouchDispatchTable(block: $Block_, builder: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        doesNotHaveShearsOrSilkTouch(): $LootItemCondition$Builder;
        createSinglePropConditionTable<T extends $Comparable<T>>(block: $Block_, property: $Property<T>, value: T): $LootTable$Builder;
        createSingleItemTableWithSilkTouch(block: $Block_, item: $ItemLike_): $LootTable$Builder;
        createSingleItemTableWithSilkTouch(block: $Block_, item: $ItemLike_, count: $NumberProvider_): $LootTable$Builder;
        createNameableBlockEntityTable(block: $Block_): $LootTable$Builder;
        createDoublePlantWithSeedDrops(block: $Block_, sheared: $Block_): $LootTable$Builder;
        createDoublePlantShearsDrop(block: $Block_): $LootTable$Builder;
        /**
         * If the condition from `conditionBuilder` succeeds, drops 1 `block`.
         * Otherwise, drops loot specified by `alternativeBuilder`.
         */
        static createSelfDropDispatchTable(block: $Block_, conditionBuilder: $LootItemCondition$Builder_, alternativeBuilder: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        generate(output: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
        createBannerDrop(block: $Block_): $LootTable$Builder;
        /**
         * If `dropGrownCropCondition` fails (i.e. crop is not ready), drops 1 `seedsItem`.
         * If `dropGrownCropCondition` succeeds (i.e. crop is ready), drops 1 `grownCropItem`, and 0-3 `seedsItem` with fortune applied.
         */
        createCropDrops(cropBlock: $Block_, grownCropItem: $Item_, seedsItem: $Item_, dropGrownCropCondition: $LootItemCondition$Builder_): $LootTable$Builder;
        createCandleDrops(block: $Block_): $LootTable$Builder;
        createBeeHiveDrop(block: $Block_): $LootTable$Builder;
        hasSilkTouch(): $LootItemCondition$Builder;
        createPetalsDrops(block: $Block_): $LootTable$Builder;
        createDoorTable(block: $Block_): $LootTable$Builder;
        createBeeNestDrop(block: $Block_): $LootTable$Builder;
        createOreDrop(block: $Block_, item: $Item_): $LootTable$Builder;
        createGrassDrops(block: $Block_): $LootTable$Builder;
        /**
         * Used for all leaves, drops self with silk touch, otherwise drops the second Block param with the passed chances for fortune levels, adding in sticks.
         */
        createLeavesDrops(leavesBlock: $Block_, saplingBlock: $Block_, ...chances: number[]): $LootTable$Builder;
        createStemDrops(block: $Block_, item: $Item_): $LootTable$Builder;
        static noDrop(): $LootTable$Builder;
        /**
         * If the block is mined with Shears, drops 1 `block`.
         * Otherwise, drops loot specified by `builder`.
         */
        createSilkTouchOrShearsDispatchTable(block: $Block_, builder: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        applyExplosionCondition<T extends $ConditionUserBuilder<T>>(item: $ItemLike_, conditionBuilder: $ConditionUserBuilder<T>): T;
        /**
         * Used for all leaves, drops self with silk touch, otherwise drops the second Block param with the passed chances for fortune levels, adding in sticks.
         */
        createOakLeavesDrops(leavesBlock: $Block_, saplingBlock: $Block_, ...chances: number[]): $LootTable$Builder;
        applyExplosionDecay<T extends $FunctionUserBuilder<T>>(item: $ItemLike_, functionBuilder: $FunctionUserBuilder<T>): T;
        createPotFlowerItemTable(item: $ItemLike_): $LootTable$Builder;
        createMushroomBlockDrop(block: $Block_, item: $ItemLike_): $LootTable$Builder;
        createMangroveLeavesDrops(block: $Block_): $LootTable$Builder;
        createAttachedStemDrops(block: $Block_, item: $Item_): $LootTable$Builder;
        createSingleItemTable(item: $ItemLike_, count: $NumberProvider_): $LootTable$Builder;
        createSingleItemTable(item: $ItemLike_): $LootTable$Builder;
        /**
         * If the block is mined with Shears, drops 1 `block`.
         * Otherwise, drops loot specified by `builder`.
         */
        createShearsDispatchTable(block: $Block_, builder: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        createSilkTouchOnlyTable(item: $ItemLike_): $LootTable$Builder;
        createShulkerBoxDrop(block: $Block_): $LootTable$Builder;
        createRedstoneOreDrops(block: $Block_): $LootTable$Builder;
        createCopperOreDrops(block: $Block_): $LootTable$Builder;
        createCaveVinesDrop(block: $Block_): $LootTable$Builder;
        doesNotHaveSilkTouch(): $LootItemCondition$Builder;
        static createShearsOnlyDrop(item: $ItemLike_): $LootTable$Builder;
        createSlabItemTable(block: $Block_): $LootTable$Builder;
        createLapisOreDrops(block: $Block_): $LootTable$Builder;
        static createCandleCakeDrops(block: $Block_): $LootTable$Builder;
        hasShearsOrSilkTouch(): $LootItemCondition$Builder;
        createMultifaceBlockDrops(block: $Block_, builder: $LootItemCondition$Builder_): $LootTable$Builder;
        static NORMAL_LEAVES_STICK_CHANCES: number[];
        registries: $HolderLookup$Provider;
        static NORMAL_LEAVES_SAPLING_CHANCES: number[];
    }
    export class $LootTableSubProvider {
    }
    export interface $LootTableSubProvider {
        generate(output: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
    }
    /**
     * Values that may be interpreted as {@link $LootTableSubProvider}.
     */
    export type $LootTableSubProvider_ = ((arg0: $BiConsumer<$ResourceKey<$LootTable>, $LootTable$Builder>) => void);
    export class $EntityLootSubProvider implements $LootTableSubProvider {
        generate(): void;
        generate(output: $BiConsumer_<$ResourceKey<$LootTable>, $LootTable$Builder>): void;
    }
}
