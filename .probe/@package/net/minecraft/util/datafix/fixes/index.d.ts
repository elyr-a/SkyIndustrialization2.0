import { $UnaryOperator_, $IntFunction_, $Predicate_, $Function_, $UnaryOperator } from "@package/java/util/function";
import { $Dynamic } from "@package/com/mojang/serialization";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $Schema } from "@package/com/mojang/datafixers/schemas";
import { $Enum, $Record } from "@package/java/lang";
import { $UUID, $List, $Map_, $Map, $Set_, $List_ } from "@package/java/util";
import { $DataFix, $Typed, $DSL$TypeReference_, $TypeRewriteRule, $DSL$TypeReference } from "@package/com/mojang/datafixers";
import { $Type } from "@package/com/mojang/datafixers/types";
import { $CrudeIncrementalIntIdentityHashBiMap } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/util/datafix/fixes" {
    export class $JukeboxTicksSinceSongStartedFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema);
    }
    export class $EntityPaintingMotiveFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $OptionsAddTextBackgroundFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $LeavesFix$Section {
        isSkippable(): boolean;
        write(data: $Typed<never>): $Typed<never>;
        getBlock(index: number): number;
        constructor(data: $Typed<never>, schema: $Schema);
        get skippable(): boolean;
    }
    export class $ItemStackMapIdFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ChunkPalettedStorageFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static idFor(palette: $CrudeIncrementalIntIdentityHashBiMap<$Dynamic<never>>, data: $Dynamic<never>): number;
        static getSideMask(west: boolean, east: boolean, north: boolean, south: boolean): number;
        static getName(data: $Dynamic<never>): string;
        static getProperty(data: $Dynamic<never>, key: string): string;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $GoatHornIdFix extends $ItemStackTagFix {
        constructor(outputSchema: $Schema);
    }
    export class $OptionsForceVBOFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityShulkerColorFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $StatsCounterFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityProjectileOwnerFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $EntityBlockStateFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static getBlockId(name: string): number;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $TrappedChestBlockEntityFix$TrappedChestSection extends $LeavesFix$Section {
        isTrappedChest(id: number): boolean;
        constructor(data: $Typed<never>, schema: $Schema);
    }
    export class $EntityZombifiedPiglinRenameFix extends $SimplestEntityRenameFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor(outputSchema: $Schema);
    }
    export class $PlayerHeadBlockProfileFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema);
    }
    export class $RandomSequenceSettingsFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $BlockEntityCustomNameToComponentFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $BlendingDataRemoveFromNetherEndFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $EntityWolfColorFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $MobSpawnerEntityIdentifiersFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $StructuresBecomeConfiguredFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $BlockStateStructureTemplateFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $StructureReferenceCountFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $FilteredBooksFix extends $ItemStackTagFix {
        constructor(outputSchema: $Schema);
    }
    export class $StatsRenameFix extends $DataFix {
        constructor(outputSchema: $Schema, name: string, renames: $Map_<string, string>);
    }
    export class $FeatureFlagRemoveFix extends $DataFix {
        constructor(outputSchema: $Schema, name: string, flagsToRemove: $Set_<string>);
    }
    export class $EntityZombieSplitFix extends $EntityRenameFix {
        constructor(outputSchema: $Schema);
    }
    export class $BlockEntitySignDoubleSidedEditableTextFix extends $NamedEntityFix {
        static FILTERED_CORRECT: string;
        constructor(outputSchema: $Schema, name: string, entityName: string);
    }
    export class $ChunkStatusFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $JigsawPropertiesFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ChunkToProtochunkFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $FurnaceRecipeFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityElderGuardianSplitFix extends $SimpleEntityRenameFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ItemCustomNameToComponentFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $OptionsAmbientOcclusionFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $LevelUUIDFix extends $AbstractUUIDFix {
        constructor(outputSchema: $Schema);
    }
    export class $ItemPotionFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static DEFAULT: string;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $OminousBannerRenameFix extends $ItemStackTagFix {
        constructor(schema: $Schema);
    }
    export class $EntityPaintingItemFrameDirectionFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityPufferfishRenameFix extends $SimplestEntityRenameFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $VillagerRebuildLevelAndXpFix extends $DataFix {
        static getMinXpPerLevel(level: number): number;
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $WallPropertyFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityShulkerRotationFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema);
    }
    export class $StatsCounterFix$StatType extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $StatsCounterFix$StatType}.
     */
    export type $StatsCounterFix$StatType_ = { type?: string, typeKey?: string,  } | [type?: string, typeKey?: string, ];
    export class $EntityRedundantChanceTagsFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ColorlessShulkerEntityFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ItemStackTagFix extends $DataFix {
        static createFixer(type: $Type<never>, filter: $Predicate_<string>, fixer: $UnaryOperator_<$Dynamic<never>>): $UnaryOperator<$Typed<never>>;
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, name: string, idFilter: $Predicate_<string>);
    }
    export class $ForcePoiRebuild extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $PoiTypeRemoveFix extends $AbstractPoiSectionFix {
        constructor(outputSchema: $Schema, name: string, typesToRemove: $Predicate_<string>);
    }
    export class $OptionsAccessibilityOnboardFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $AdvancementsFix extends $AdvancementsRenameFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ItemStackEnchantmentNamesFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $BitStorageAlignFix extends $DataFix {
        static addPadding(numBits: number, bitWidth: number, inputData: number[]): number[];
        constructor(outputSchema: $Schema);
    }
    export class $PoiTypeRenameFix extends $AbstractPoiSectionFix {
        constructor(schema: $Schema, name: string, renamer: $Function_<string, string>);
    }
    export class $ProjectileStoredWeaponFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $SpawnerDataFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $GossipUUIDFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, entityName: string);
    }
    export class $ScoreboardDisplaySlotFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $EntityMinecartIdentifiersFix extends $EntityRenameFix {
        constructor(outputSchema: $Schema);
    }
    export class $CriteriaRenameFix extends $DataFix {
        constructor(outputSchema: $Schema, name: string, advancementId: string, conversions: $UnaryOperator_<string>);
    }
    export class $ItemWrittenBookPagesStrictJsonFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $TeamDisplayNameFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $LevelDataGeneratorOptionsFix extends $DataFix {
        static GENERATOR_OPTIONS: string;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $RecipesFix {
        static RECIPES: $Map<string, string>;
        constructor();
    }
    export class $EntityStringUuidFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $SimpleEntityRenameFix extends $EntityRenameFix {
        constructor(name: string, outputSchema: $Schema, changesType: boolean);
    }
    export class $NewVillageFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $LeavesFix extends $DataFix {
        static getSideMask(west: boolean, east: boolean, north: boolean, south: boolean): number;
        static getIndex(x: number, y: number, z: number): number;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EmptyItemInVillagerTradeFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $MapIdFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $WeaponSmithChestLootTableFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ItemStackComponentRemainderFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, name: string, componentId: string);
        constructor(outputSchema: $Schema, name: string, componentId: string, newComponentId: string);
    }
    export class $RemoveGolemGossipFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ChunkStatusFix2 extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ChunkDeleteLightFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $ZombieVillagerRebuildXpFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityRidingToPassengersFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $RenameEnchantmentsFix extends $DataFix {
        constructor(outputSchema: $Schema, name: string, renames: $Map_<string, string>);
    }
    export class $ItemWaterPotionFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ChunkPalettedStorageFix$Section {
    }
    export class $LodestoneCompassComponentFix extends $ItemStackComponentRemainderFix {
        constructor(outputSchema: $Schema);
    }
    export class $RenamedCoralFansFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor();
    }
    export class $ChunkPalettedStorageFix$DataLayer {
    }
    export class $BlockEntityKeepPacked extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $LeavesFix$LeavesSection extends $LeavesFix$Section {
        isLog(id: number): boolean;
        isLeaf(id: number): boolean;
        constructor(data: $Typed<never>, schema: $Schema);
    }
    export class $FilteredSignsFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema);
    }
    export class $AddFlagIfNotPresentFix extends $DataFix {
        constructor(outputSchema: $Schema, typeReference: $DSL$TypeReference_, flagKey: string, flagValue: boolean);
    }
    export class $BlockNameFlatteningFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $CauldronRenameFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $OverreachingTickFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $MissingDimensionFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $SavedDataFeaturePoolElementFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $ChunkRenamesFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $EntityEquipmentToArmorAndHandFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $OptionsKeyLwjgl3Fix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static KEY_UNKNOWN: string;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $AbstractPoiSectionFix extends $DataFix {
        constructor(outputSchema: $Schema, name: string);
    }
    export class $WorldGenSettingsHeightAndBiomeFix extends $DataFix {
        static WAS_PREVIOUSLY_INCREASED_KEY: string;
        constructor(outputSchema: $Schema);
    }
    export class $BiomeFix {
        static BIOMES: $Map<string, string>;
        constructor();
    }
    export class $EntityGoatMissingStateFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema);
    }
    export class $ChunkLightRemoveFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $BlockEntitySignTextStrictJsonFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ObjectiveDisplayNameFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityPaintingFieldsRenameFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema);
    }
    export class $ChunkStructuresTemplateRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $WorldGenSettingsFix$StructureFeatureConfiguration {
    }
    export class $OptionsProgrammerArtFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $AddNewChoices extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, name: string, type: $DSL$TypeReference_);
    }
    export class $OptionsRenameFieldFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean, fixName: string, fieldFrom: string, fieldTo: string);
    }
    export class $HorseBodyArmorItemFix extends $NamedEntityWriteReadFix {
        constructor(outputSchema: $Schema, entityName: string, previousBodyArmorTag: string, clearArmorItems: boolean);
    }
    export class $ItemStackSpawnEggFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean, itemType: string);
    }
    export class $BlockEntityRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static create(outputSchema: $Schema, name: string, nameChangeLookup: $UnaryOperator_<string>): $DataFix;
    }
    export class $MemoryExpiryDataFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, entityName: string);
    }
    export class $SavedDataUUIDFix extends $AbstractUUIDFix {
        constructor(outputSchema: $Schema);
    }
    export class $PlayerUUIDFix extends $AbstractUUIDFix {
        constructor(outputSchema: $Schema);
    }
    export class $BlockEntityIdFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $FixProjectileStoredItem extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $LegacyDragonFightFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $ChunkDeleteIgnoredLightDataFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $EntityIdFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $NamedEntityWriteReadFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean, name: string, type: $DSL$TypeReference_, entityName: string);
    }
    export class $EntityTheRenameningFix extends $SimplestEntityRenameFix {
        static RENAMED_ITEMS: $Map<string, string>;
        static RENAMED_IDS: $Map<string, string>;
        static RENAMED_BLOCKS: $Map<string, string>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityHorseSplitFix extends $EntityRenameFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $BannerPatternFormatFix extends $NamedEntityFix {
        static fixColor(color: number): string;
        constructor(outputSchema: $Schema);
    }
    export class $ChunkBiomeFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EmptyItemInHotbarFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $VillagerFollowRangeFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema);
    }
    export class $ChunkProtoTickListFix$PoorMansPalettedContainer {
        palette(): $List<$Dynamic<never>>;
        get(x: number, y: number, z: number): $Dynamic<never>;
        data(): number[];
        constructor(palette: $List_<$Dynamic<never>>, data: number[]);
    }
    export class $ItemBannerColorFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $References {
        static reference(name: string): $DSL$TypeReference;
        static MULTI_NOISE_BIOME_SOURCE_PARAMETER_LIST: $DSL$TypeReference;
        static ENTITY_TREE: $DSL$TypeReference;
        static FLAT_BLOCK_STATE: $DSL$TypeReference;
        static WORLD_GEN_SETTINGS: $DSL$TypeReference;
        static SAVED_DATA_MAP_INDEX: $DSL$TypeReference;
        static PARTICLE: $DSL$TypeReference;
        static BLOCK_NAME: $DSL$TypeReference;
        static BIOME: $DSL$TypeReference;
        static DATA_COMPONENTS: $DSL$TypeReference;
        static BLOCK_STATE: $DSL$TypeReference;
        static STATS: $DSL$TypeReference;
        static ADVANCEMENTS: $DSL$TypeReference;
        static POI_CHUNK: $DSL$TypeReference;
        static ITEM_NAME: $DSL$TypeReference;
        static SAVED_DATA_RANDOM_SEQUENCES: $DSL$TypeReference;
        static ENTITY: $DSL$TypeReference;
        static SAVED_DATA_RAIDS: $DSL$TypeReference;
        static ITEM_STACK: $DSL$TypeReference;
        static OBJECTIVE: $DSL$TypeReference;
        static RECIPE: $DSL$TypeReference;
        static CHUNK: $DSL$TypeReference;
        static ENTITY_NAME: $DSL$TypeReference;
        static SAVED_DATA_MAP_DATA: $DSL$TypeReference;
        static STRUCTURE: $DSL$TypeReference;
        static BLOCK_ENTITY: $DSL$TypeReference;
        static LEVEL: $DSL$TypeReference;
        static OPTIONS: $DSL$TypeReference;
        static SAVED_DATA_COMMAND_STORAGE: $DSL$TypeReference;
        static PLAYER: $DSL$TypeReference;
        static SAVED_DATA_FORCED_CHUNKS: $DSL$TypeReference;
        static GAME_EVENT_NAME: $DSL$TypeReference;
        static SAVED_DATA_SCOREBOARD: $DSL$TypeReference;
        static SAVED_DATA_STRUCTURE_FEATURE_INDICES: $DSL$TypeReference;
        static VILLAGER_TRADE: $DSL$TypeReference;
        static ENTITY_CHUNK: $DSL$TypeReference;
        static UNTAGGED_SPAWNER: $DSL$TypeReference;
        static TEAM: $DSL$TypeReference;
        static HOTBAR: $DSL$TypeReference;
        static STRUCTURE_FEATURE: $DSL$TypeReference;
        constructor();
    }
    export class $BannerEntityCustomNameToOverrideComponentFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $OptionsLowerCaseLanguageFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ItemRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static create(outputSchema: $Schema, name: string, fixer: $Function_<string, string>): $DataFix;
        constructor(outputSchema: $Schema, name: string);
    }
    export class $ItemStackTheFlatteningFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static updateItem(item: string | null, dataValue: number): string;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $VariantRenameFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, name: string, type: $DSL$TypeReference_, entityName: string, renames: $Map_<string, string>);
    }
    export class $StructureSettingsFlattenFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $ChunkPalettedStorageFix$Direction extends $Enum<$ChunkPalettedStorageFix$Direction> {
        getAxis(): $ChunkPalettedStorageFix$Direction$Axis;
        getAxisDirection(): $ChunkPalettedStorageFix$Direction$AxisDirection;
        static values(): $ChunkPalettedStorageFix$Direction[];
        static valueOf(arg0: string): $ChunkPalettedStorageFix$Direction;
        static DOWN: $ChunkPalettedStorageFix$Direction;
        static NORTH: $ChunkPalettedStorageFix$Direction;
        static WEST: $ChunkPalettedStorageFix$Direction;
        static UP: $ChunkPalettedStorageFix$Direction;
        static SOUTH: $ChunkPalettedStorageFix$Direction;
        static EAST: $ChunkPalettedStorageFix$Direction;
        get axis(): $ChunkPalettedStorageFix$Direction$Axis;
        get axisDirection(): $ChunkPalettedStorageFix$Direction$AxisDirection;
    }
    /**
     * Values that may be interpreted as {@link $ChunkPalettedStorageFix$Direction}.
     */
    export type $ChunkPalettedStorageFix$Direction_ = "down" | "up" | "north" | "south" | "west" | "east";
    export class $LevelFlatGeneratorInfoFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $BlockRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static create(outputSchema: $Schema, name: string, renamer: $Function_<string, string>): $DataFix;
        constructor(outputSchema: $Schema, name: string);
    }
    export class $BeehiveFieldRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $WriteAndReadFix extends $DataFix {
        constructor(outputSchema: $Schema, name: string, type: $DSL$TypeReference_);
    }
    export class $ChunkPalettedStorageFix$Direction$Axis extends $Enum<$ChunkPalettedStorageFix$Direction$Axis> {
        static values(): $ChunkPalettedStorageFix$Direction$Axis[];
        static valueOf(arg0: string): $ChunkPalettedStorageFix$Direction$Axis;
        static X: $ChunkPalettedStorageFix$Direction$Axis;
        static Y: $ChunkPalettedStorageFix$Direction$Axis;
        static Z: $ChunkPalettedStorageFix$Direction$Axis;
    }
    /**
     * Values that may be interpreted as {@link $ChunkPalettedStorageFix$Direction$Axis}.
     */
    export type $ChunkPalettedStorageFix$Direction$Axis_ = "x" | "y" | "z";
    export class $OptionsKeyTranslationFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ItemIdFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static getItem(id: number): string;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $CatTypeFix extends $NamedEntityFix {
        fixTag(dynamic: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $RecipesRenameningFix {
        static RECIPES: $Map<string, string>;
        constructor();
    }
    export class $AttributeModifierIdFix extends $DataFix {
        static uuidFromIntArray(intArray: number[]): $UUID;
        constructor(outputSchema: $Schema);
    }
    export class $LevelLegacyWorldGenSettingsFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $StriderGravityFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $WorldGenSettingsDisallowOldCustomWorldsFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $BlockEntityUUIDFix extends $AbstractUUIDFix {
        constructor(outputSchema: $Schema);
    }
    export class $ItemShulkerBoxColorFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static NAMES_BY_COLOR: string[];
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $AbstractUUIDFix extends $DataFix {
        constructor(outputSchema: $Schema, typeReference: $DSL$TypeReference_);
    }
    export class $MobEffectIdFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $EntityRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(name: string, outputSchema: $Schema, changesType: boolean);
    }
    export class $DecoratedPotFieldRenameFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $AbstractArrowPickupFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $ItemLoreFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ObjectiveRenderTypeFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $FixProjectileStoredItem$SubFixer<F> {
    }
    export interface $FixProjectileStoredItem$SubFixer<F> {
    }
    /**
     * Values that may be interpreted as {@link $FixProjectileStoredItem$SubFixer}.
     */
    export type $FixProjectileStoredItem$SubFixer_<F> = (() => void);
    export class $ParticleUnflatteningFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $TrappedChestBlockEntityFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ItemSpawnEggFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $DyeItemRenameFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor();
    }
    export class $VillagerTradeFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $EntityHorseSaddleFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $RenamedCoralFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor();
    }
    export class $OminousBannerBlockEntityRenameFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ChunkProtoTickListFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $BlockEntityBannerColorFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $BlendingDataFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $ItemRemoveBlockEntityTagFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean, items: $Set_<string>);
    }
    export class $EntityTippedArrowFix extends $SimplestEntityRenameFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityUUIDFix extends $AbstractUUIDFix {
        static updateLivingEntity(animalTag: $Dynamic<never>): $Dynamic<never>;
        static updateEntityUUID(animalTag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema);
    }
    export class $EntityBrushableBlockFieldsRenameFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema);
    }
    export class $MapBannerBlockPosFormatFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $EntityCatSplitFix extends $SimpleEntityRenameFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $NamedEntityFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean, name: string, type: $DSL$TypeReference_, entityName: string);
    }
    export class $HeightmapRenamingFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityCodSalmonFix extends $SimplestEntityRenameFix {
        static RENAMED_IDS: $Map<string, string>;
        static RENAMED_EGG_IDS: $Map<string, string>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ChunkPalettedStorageFix$Direction$AxisDirection extends $Enum<$ChunkPalettedStorageFix$Direction$AxisDirection> {
        static values(): $ChunkPalettedStorageFix$Direction$AxisDirection[];
        static valueOf(arg0: string): $ChunkPalettedStorageFix$Direction$AxisDirection;
        getStep(): number;
        static POSITIVE: $ChunkPalettedStorageFix$Direction$AxisDirection;
        static NEGATIVE: $ChunkPalettedStorageFix$Direction$AxisDirection;
        get step(): number;
    }
    /**
     * Values that may be interpreted as {@link $ChunkPalettedStorageFix$Direction$AxisDirection}.
     */
    export type $ChunkPalettedStorageFix$Direction$AxisDirection_ = "positive" | "negative";
    export class $BlockPosFormatAndRenamesFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $EntityItemFrameDirectionFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ItemStackComponentizationFix$ItemStackData {
    }
    export class $EntitySkeletonSplitFix extends $SimpleEntityRenameFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityRavagerRenameFix extends $SimplestEntityRenameFix {
        static RENAMED_IDS: $Map<string, string>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $BlockEntityBlockStateFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $EntityArmorStandSilentFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $RemapChunkStatusFix extends $DataFix {
        constructor(outputSchema: $Schema, name: string, mapper: $UnaryOperator_<string>);
    }
    export class $ItemStackCustomNameToOverrideComponentFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $OptionsMenuBlurrinessFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $ItemStackComponentizationFix extends $DataFix {
        static fixProfile(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema);
    }
    export class $IglooMetadataRemovalFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $ChunkPalettedStorageFix$UpgradeChunk {
    }
    export class $ChunkHeightAndBiomeFix extends $DataFix {
        static ceillog2(value: number): number;
        static DATAFIXER_CONTEXT_TAG: string;
        static DEFAULT_BIOME: string;
        static BLOCKS_PER_SECTION: number;
        constructor(outputSchema: $Schema);
    }
    export class $NamespacedTypeRenameFix extends $DataFix {
        constructor(outputSchema: $Schema, name: string, type: $DSL$TypeReference_, renamer: $UnaryOperator_<string>);
    }
    export class $ReorganizePoi extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $DropInvalidSignDataFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, name: string, entityName: string);
    }
    export class $ItemStackUUIDFix extends $AbstractUUIDFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema);
    }
    export class $EntityZombieVillagerTypeFix extends $NamedEntityFix {
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $TippedArrowPotionToItemFix extends $NamedEntityWriteReadFix {
        constructor(outputSchema: $Schema);
    }
    export class $BlockEntityJukeboxFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $JigsawRotationFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $BedItemColorFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $AdvancementsRenameFix extends $DataFix {
        constructor(outputSchema: $Schema, changesType: boolean, name: string, renamer: $Function_<string, string>);
    }
    export class $RemoveEmptyItemInBrushableBlockFix extends $NamedEntityWriteReadFix {
        constructor(outputSchema: $Schema);
    }
    export class $CavesAndCliffsRenames {
        static RENAMES: $ImmutableMap<string, string>;
    }
    export class $TrialSpawnerConfigFix extends $NamedEntityWriteReadFix {
        constructor(outputSchema: $Schema);
    }
    export class $StructuresBecomeConfiguredFix$Conversion extends $Record {
        biomeMapping(): $Map<string, string>;
        static biomeMapped(biomeMapping: $Map_<$List_<string>, string>, fallback: string): $StructuresBecomeConfiguredFix$Conversion;
        static trivial(fallback: string): $StructuresBecomeConfiguredFix$Conversion;
        fallback(): string;
        constructor(biomeMapping: $Map_<string, string>, fallback: string);
    }
    /**
     * Values that may be interpreted as {@link $StructuresBecomeConfiguredFix$Conversion}.
     */
    export type $StructuresBecomeConfiguredFix$Conversion_ = { fallback?: string, biomeMapping?: $Map_<string, string>,  } | [fallback?: string, biomeMapping?: $Map_<string, string>, ];
    export class $BlockStateData {
        static upgradeBlockStateTag(nbt: $Dynamic<never>): $Dynamic<never>;
        static upgradeBlock(id: number): string;
        static upgradeBlock(name: string): string;
        static parse(nbt: string): $Dynamic<never>;
        static getTag(id: number): $Dynamic<never>;
        constructor();
    }
    export class $EntityHealthFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        fixTag(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $VillagerDataFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, entityName: string);
    }
    export class $SimplestEntityRenameFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(name: string, outputSchema: $Schema, changesType: boolean);
    }
    export class $BlockEntityShulkerBoxColorFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $WorldGenSettingsFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $ChunkBedBlockEntityInjecterFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $PrimedTntBlockStateFixer extends $NamedEntityWriteReadFix {
        constructor(outputSchema: $Schema);
    }
    export class $EffectDurationFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $AttributesRename extends $DataFix {
        constructor(outputSchema: $Schema, name: string, renames: $UnaryOperator_<string>);
    }
    export class $ChestedHorsesInventoryZeroIndexingFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $EntityCustomNameToComponentFix extends $DataFix {
        makeRule(): $TypeRewriteRule;
        static fixTagCustomName(tag: $Dynamic<never>): $Dynamic<never>;
        constructor(outputSchema: $Schema, changesType: boolean);
    }
    export class $AreaEffectCloudPotionFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema);
    }
    export class $RedstoneWireConnectionsFix extends $DataFix {
        constructor(outputSchema: $Schema);
    }
    export class $EntityVariantFix extends $NamedEntityFix {
        constructor(outputSchema: $Schema, name: string, type: $DSL$TypeReference_, entityName: string, fieldName: string, idConversions: $IntFunction_<string>);
    }
}
