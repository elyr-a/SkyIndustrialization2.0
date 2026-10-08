import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $LootPoolEntryContainer$Builder } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $FunctionUserBuilder } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $Function_, $Consumer } from "@package/java/util/function";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $BlockLootSubProvider } from "@package/net/minecraft/data/loot";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder, $LootItemCondition$Builder_, $ConditionUserBuilder } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Comparable, $Comparable_, $Record } from "@package/java/lang";
import { $LootTable$Builder } from "@package/net/minecraft/world/level/storage/loot";
export * as holder from "@package/net/swedz/tesseract/neoforge/registry/holder";
export * as registerable from "@package/net/swedz/tesseract/neoforge/registry/registerable";

declare module "@package/net/swedz/tesseract/neoforge/registry" {
    export class $SortOrder extends $Record implements $Comparable<$SortOrder> {
        compareTo(arg0: $SortOrder_): number;
        ordinal(): number;
        and(arg0: $Comparable_<any>): $SortOrder;
        comparables(): $Comparable<any>[];
        static UNSORTED: $SortOrder;
        constructor(arg0: number);
        constructor(ordinal: number, ...comparables: $Comparable_<any>[]);
    }
    /**
     * Values that may be interpreted as {@link $SortOrder}.
     */
    export type $SortOrder_ = { ordinal?: number, comparables?: $Comparable_<any>[],  } | [ordinal?: number, comparables?: $Comparable_<any>[], ];
    export class $ModeledRegisteredObjectHolder<Thing, ActualThing extends Thing, ModelProviderType, Self extends $ModeledRegisteredObjectHolder<Thing, ActualThing, ModelProviderType, Self>> extends $RegisteredObjectHolder<Thing, ActualThing, Self> {
        hasModelProvider(): boolean;
        modelProvider(): $Consumer<ModelProviderType>;
        withoutModel(): Self;
        withModel(arg0: $Function_<Self, $Consumer<ModelProviderType>>): Self;
        constructor(arg0: $ResourceLocation_, arg1: string);
    }
    export class $AccessibleBlockLootSubProvider {
        registries(): $HolderLookup$Provider;
        createSilkTouchDispatchTable(arg0: $Block_, arg1: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        doesNotHaveShearsOrSilkTouch(): $LootItemCondition$Builder;
        createSinglePropConditionTable<T extends $Comparable<T>>(arg0: $Block_, arg1: $Property<T>, arg2: T): $LootTable$Builder;
        createSingleItemTableWithSilkTouch(arg0: $Block_, arg1: $ItemLike_): $LootTable$Builder;
        createSingleItemTableWithSilkTouch(arg0: $Block_, arg1: $ItemLike_, arg2: $NumberProvider_): $LootTable$Builder;
        createNameableBlockEntityTable(arg0: $Block_): $LootTable$Builder;
        createDoublePlantWithSeedDrops(arg0: $Block_, arg1: $Block_): $LootTable$Builder;
        createDoublePlantShearsDrop(arg0: $Block_): $LootTable$Builder;
        createSelfDropDispatchTable(arg0: $Block_, arg1: $LootItemCondition$Builder_, arg2: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        createBannerDrop(arg0: $Block_): $LootTable$Builder;
        createCropDrops(arg0: $Block_, arg1: $Item_, arg2: $Item_, arg3: $LootItemCondition$Builder_): $LootTable$Builder;
        createCandleDrops(arg0: $Block_): $LootTable$Builder;
        createBeeHiveDrop(arg0: $Block_): $LootTable$Builder;
        hasSilkTouch(): $LootItemCondition$Builder;
        createPetalsDrops(arg0: $Block_): $LootTable$Builder;
        createDoorTable(arg0: $Block_): $LootTable$Builder;
        createBeeNestDrop(arg0: $Block_): $LootTable$Builder;
        createOreDrop(arg0: $Block_, arg1: $Item_): $LootTable$Builder;
        createGrassDrops(arg0: $Block_): $LootTable$Builder;
        createLeavesDrops(arg0: $Block_, arg1: $Block_, ...arg2: number[]): $LootTable$Builder;
        createStemDrops(arg0: $Block_, arg1: $Item_): $LootTable$Builder;
        noDrop(): $LootTable$Builder;
        createSilkTouchOrShearsDispatchTable(arg0: $Block_, arg1: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        normalLeavesStickChances(): number[];
        applyExplosionCondition<T extends $ConditionUserBuilder<T>>(arg0: $ItemLike_, arg1: $ConditionUserBuilder<T>): T;
        createOakLeavesDrops(arg0: $Block_, arg1: $Block_, ...arg2: number[]): $LootTable$Builder;
        applyExplosionDecay<T extends $FunctionUserBuilder<T>>(arg0: $ItemLike_, arg1: $FunctionUserBuilder<T>): T;
        createPotFlowerItemTable(arg0: $ItemLike_): $LootTable$Builder;
        createMushroomBlockDrop(arg0: $Block_, arg1: $ItemLike_): $LootTable$Builder;
        createMangroveLeavesDrops(arg0: $Block_): $LootTable$Builder;
        createAttachedStemDrops(arg0: $Block_, arg1: $Item_): $LootTable$Builder;
        createSingleItemTable(arg0: $ItemLike_, arg1: $NumberProvider_): $LootTable$Builder;
        createSingleItemTable(arg0: $ItemLike_): $LootTable$Builder;
        createShearsDispatchTable(arg0: $Block_, arg1: $LootPoolEntryContainer$Builder<never>): $LootTable$Builder;
        createSilkTouchOnlyTable(arg0: $ItemLike_): $LootTable$Builder;
        createShulkerBoxDrop(arg0: $Block_): $LootTable$Builder;
        createRedstoneOreDrops(arg0: $Block_): $LootTable$Builder;
        createCopperOreDrops(arg0: $Block_): $LootTable$Builder;
        createCaveVinesDrop(arg0: $Block_): $LootTable$Builder;
        doesNotHaveSilkTouch(): $LootItemCondition$Builder;
        createShearsOnlyDrop(arg0: $ItemLike_): $LootTable$Builder;
        createSlabItemTable(arg0: $Block_): $LootTable$Builder;
        createLapisOreDrops(arg0: $Block_): $LootTable$Builder;
        createCandleCakeDrops(arg0: $Block_): $LootTable$Builder;
        normalLeavesSaplingChances(): number[];
        hasShearsOrSilkTouch(): $LootItemCondition$Builder;
        createMultifaceBlockDrops(arg0: $Block_, arg1: $LootItemCondition$Builder_): $LootTable$Builder;
        constructor(arg0: $BlockLootSubProvider);
    }
}
