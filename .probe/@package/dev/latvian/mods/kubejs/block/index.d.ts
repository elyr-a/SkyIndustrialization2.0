import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $LevelBlock, $KubeLevelEvent } from "@package/dev/latvian/mods/kubejs/level";
import { $Map, $List, $List_ } from "@package/java/util";
import { $KubePlayerEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ItemPredicate_, $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$LeftClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Consumer_, $Predicate_, $Function, $Consumer, $ToIntFunction, $Function_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $RegistryAccess, $Registry, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $RandomTickCallback, $BlockStateRotateCallback, $AfterEntityFallenOnBlockCallback, $BlockStateModifyPlacementCallback, $BlockStateModifyCallback, $BlockStateMirrorCallback, $CanBeReplacedCallback, $EntityFallenOnBlockCallback, $BlockExplodedCallback, $EntityBlockCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEvent$FarmlandTrampleEvent, $BlockEvent$BreakEvent, $BlockEvent$EntityPlaceEvent, $BlockDropsEvent } from "@package/net/neoforged/neoforge/event/level";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $SpecialPlantable } from "@package/net/neoforged/neoforge/common";
import { $BlockEntityInfo } from "@package/dev/latvian/mods/kubejs/block/entity";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $BlockAndTintGetter, $LevelAccessor, $LevelReader, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockStatePredicate_ } from "@package/dev/latvian/mods/kubejs/block/state";
import { $KubeAssetGenerator, $KubeDataGenerator } from "@package/dev/latvian/mods/kubejs/generator";
import { $VariantBlockStateGenerator } from "@package/dev/latvian/mods/kubejs/client";
import { $Item, $ItemNameBlockItem, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapColor } from "@package/net/minecraft/world/level/material";
import { $KubeColor, $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity, $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $Villager } from "@package/net/minecraft/world/entity/npc";
import { $KubeRayTraceResult, $KubeEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $Property, $NoteBlockInstrument_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $TypeWrapperFactory } from "@package/dev/latvian/mods/rhino/util/wrap";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ModelledBuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $SoundType_, $SoundType, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $HitResult, $AABB_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockDropSupplier_ } from "@package/dev/latvian/mods/kubejs/block/drop";
import { $Vector3f } from "@package/org/joml";
export * as entity from "@package/dev/latvian/mods/kubejs/block/entity";
export * as custom from "@package/dev/latvian/mods/kubejs/block/custom";
export * as state from "@package/dev/latvian/mods/kubejs/block/state";
export * as predicate from "@package/dev/latvian/mods/kubejs/block/predicate";
export * as drop from "@package/dev/latvian/mods/kubejs/block/drop";
export * as callback from "@package/dev/latvian/mods/kubejs/block/callback";

declare module "@package/dev/latvian/mods/kubejs/block" {
    export class $BlockRotationType extends $Enum<$BlockRotationType> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $BlockRotationType[];
        static valueOf(name: string): $BlockRotationType;
        generateBlockStateJson(bs: $VariantBlockStateGenerator, block: $BlockBuilder): void;
        generateBlockModelJsons(gen: $KubeAssetGenerator): void;
        getRemappedEnumConstantName(): string;
        static VERTICAL: $BlockRotationType;
        static WALL_ATTACHED: $BlockRotationType;
        static HORIZONTAL: $BlockRotationType;
        static NONE: $BlockRotationType;
        static FACING: $BlockRotationType;
        properties: $List<$Property<never>>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BlockRotationType}.
     */
    export type $BlockRotationType_ = "none" | "horizontal" | "vertical" | "facing" | "wall_attached";
    export class $DetectorBlock$Builder extends $BlockBuilder {
        detectorId(id: string): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(i: $ResourceLocation_);
    }
    export class $RandomTickKubeEvent implements $KubeLevelEvent {
        getBlock(): $LevelBlock;
        getLevel(): $ServerLevel;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        random: $RandomSource;
        constructor(level: $ServerLevel, pos: $BlockPos_, state: $BlockState_, random: $RandomSource);
        get block(): $LevelBlock;
        get level(): $ServerLevel;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $BlockPlacedKubeEvent implements $KubeEntityEvent {
        /**
         * The entity that placed the block. Can be `null`, e.g. when a block is placed by a dispenser.
         */
        getEntity(): $Entity;
        /**
         * The block that is placed.
         */
        getBlock(): $LevelBlock;
        /**
         * The level of the block that was placed.
         */
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(event: $BlockEvent$EntityPlaceEvent);
        get entity(): $Entity;
        get block(): $LevelBlock;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $DetectorBlock extends $Block {
        /**
         * @deprecated
         */
        neighborChanged(blockState: $BlockState_, level: $Level_, blockPos: $BlockPos_, block: $Block_, blockPos2: $BlockPos_, bl: boolean): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(b: $DetectorBlock$Builder);
    }
    export class $BlockItemBuilder extends $ItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(i: $ResourceLocation_);
    }
    export class $BlockTintFunction$Mapped implements $BlockTintFunction {
        getColor(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_, index: number): $KubeColor;
        map: $Int2ObjectMap<$BlockTintFunction>;
        constructor();
    }
    export class $MapColorHelper extends $Record implements $Function<$BlockState, $MapColor> {
        static findClosest(rgbi: number): $MapColorHelper;
        name(): string;
        static reverse(c: $MapColor): $MapColorHelper;
        static wrap(o: $Object): $MapColor;
        apply(blockState: $BlockState_): $MapColor;
        id(): number;
        color(): $MapColor;
        rgb(): $Vector3f;
        compose<V>(arg0: $Function_<V, $BlockState>): $Function<V, $MapColor>;
        andThen<V>(arg0: $Function_<$MapColor, V>): $Function<$BlockState, V>;
        static ID_MAP: $Map<number, $MapColorHelper>;
        static NAME_MAP: $Map<string, $MapColorHelper>;
        static NONE: $MapColorHelper;
        constructor(id: number, name: string, color: $MapColor, rgb: $Vector3f);
    }
    /**
     * Values that may be interpreted as {@link $MapColorHelper}.
     */
    export type $MapColorHelper_ = string | number | { rgb?: $Vector3f, id?: number, name?: string, color?: $MapColor,  } | [rgb?: $Vector3f, id?: number, name?: string, color?: $MapColor, ];
    export class $BlockStoppedFallingKubeEvent implements $KubeEntityEvent {
        getEntity(): $Entity;
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        fallSpeed: number;
        replacedBlock: $LevelBlock;
        block: $LevelBlock;
        constructor(level: $Level_, pos: $BlockPos_, state: $BlockState_, entity: $FallingBlockEntity, fallSpeed: number, replacedState: $BlockState_);
        get entity(): $Entity;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $KubeJSBlockEventHandler {
        static drops(event: $BlockDropsEvent): void;
        static farmlandTrample(event: $BlockEvent$FarmlandTrampleEvent): void;
        static blockPlace(event: $BlockEvent$EntityPlaceEvent): void;
        static blockBreak(event: $BlockEvent$BreakEvent): void;
        static rightClick(event: $PlayerInteractEvent$RightClickBlock): void;
        static leftClick(event: $PlayerInteractEvent$LeftClickBlock): void;
        constructor();
    }
    export class $BlockLeftClickedKubeEvent implements $KubePlayerEvent {
        /**
         * The player that left clicked the block.
         */
        getEntity(): $Player;
        /**
         * The face of the block that was left clicked.
         */
        getFacing(): $Direction;
        /**
         * The item that was used to left click the block.
         */
        getItem(): $ItemStack;
        /**
         * The block that was left clicked.
         */
        getBlock(): $LevelBlock;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(event: $PlayerInteractEvent$LeftClickBlock);
        get entity(): $Player;
        get facing(): $Direction;
        get item(): $ItemStack;
        get block(): $LevelBlock;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $BlockPickedKubeEvent implements $KubePlayerEvent {
        getEntity(): $Player;
        getTarget(): $KubeRayTraceResult;
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        level: $Level;
        block: $LevelBlock;
        player: $Player;
        constructor(level: $Level_, pos: $BlockPos_, state: $BlockState_, player: $Player, hitResult: $HitResult);
        get entity(): $Player;
        get target(): $KubeRayTraceResult;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $BlockModificationKubeEvent implements $KubeEvent {
        /**
         * Modifies blocks that match the given predicate.
         * 
         * **NOTE**: tag predicates are not supported at this time.
         */
        modify(predicate: $BlockStatePredicate_, c: $Consumer_<$BlockModificationKubeEvent$BlockModifications>): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
    }
    export class $KubeJSBlockProperties extends $BlockBehaviour$Properties {
        static CODEC: $Codec<$BlockBehaviour$Properties>;
        isRandomlyTicking: boolean;
        blockBuilder: $BlockBuilder;
        canOcclude: boolean;
        lightEmission: $ToIntFunction<$BlockState>;
        isAir: boolean;
        hasCollision: boolean;
        soundType: $SoundType;
        constructor(blockBuilder: $BlockBuilder, copyPropertiesFrom: $Block_);
    }
    export class $BlockBrokenKubeEvent implements $KubePlayerEvent {
        /**
         * The player that broke the block.
         */
        getEntity(): $Player;
        /**
         * The block that was broken.
         */
        getBlock(): $LevelBlock;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(event: $BlockEvent$BreakEvent);
        get entity(): $Player;
        get block(): $LevelBlock;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $BlockRightClickedKubeEvent implements $KubePlayerEvent {
        /**
         * The player that right clicked the block.
         */
        getEntity(): $Player;
        getHitResult(): $BlockHitResult;
        /**
         * The face of the block being right clicked.
         */
        getFacing(): $Direction;
        /**
         * The position of the block that was right clicked.
         */
        getItem(): $ItemStack;
        /**
         * The block that was right clicked.
         */
        getBlock(): $LevelBlock;
        /**
         * The hand that was used to right click the block.
         */
        getHand(): $InteractionHand;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(item: $ItemStack_, player: $Player, hand: $InteractionHand_, pos: $BlockPos_, direction: $Direction_, hitResult: $BlockHitResult);
        get entity(): $Player;
        get hitResult(): $BlockHitResult;
        get facing(): $Direction;
        get item(): $ItemStack;
        get block(): $LevelBlock;
        get hand(): $InteractionHand;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $BlockTintFunction$Fixed extends $Record implements $BlockTintFunction {
        getColor(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_, index: number): $KubeColor;
        color(): $KubeColor;
        constructor(color: $KubeColor_);
    }
    /**
     * Values that may be interpreted as {@link $BlockTintFunction$Fixed}.
     */
    export type $BlockTintFunction$Fixed_ = { color?: $KubeColor_,  } | [color?: $KubeColor_, ];
    export class $BlockRenderType extends $Enum<$BlockRenderType> {
        static values(): $BlockRenderType[];
        static valueOf(name: string): $BlockRenderType;
        static CUTOUT: $BlockRenderType;
        static TRANSLUCENT: $BlockRenderType;
        static CUTOUT_MIPPED: $BlockRenderType;
        static SOLID: $BlockRenderType;
    }
    /**
     * Values that may be interpreted as {@link $BlockRenderType}.
     */
    export type $BlockRenderType_ = "solid" | "cutout" | "cutout_mipped" | "translucent";
    export class $BlockStartedFallingKubeEvent implements $KubeEntityEvent {
        getEntity(): $Entity;
        getBlock(): $LevelBlock;
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(level: $Level_, pos: $BlockPos_, state: $BlockState_, entity: $FallingBlockEntity);
        get entity(): $Entity;
        get block(): $LevelBlock;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $BlockModificationKubeEvent$BlockModifications extends $Record {
        setNameKey(key: string): void;
        block(): $Block;
        setSpeedFactor(v: number): void;
        setSoundType(v: $SoundType_): void;
        setLightEmission(v: number): void;
        setDestroySpeed(v: number): void;
        setHasCollision(v: boolean): void;
        setJumpFactor(v: number): void;
        setFriction(v: number): void;
        setRequiresTool(v: boolean): void;
        setRandomTickCallback(callback: $Consumer_<$RandomTickCallback>): void;
        setExplosionResistance(v: number): void;
        setIsRandomlyTicking(v: boolean): void;
        constructor(block: $Block_);
        set nameKey(value: string);
        set speedFactor(value: number);
        set soundType(value: $SoundType_);
        set lightEmission(value: number);
        set destroySpeed(value: number);
        set hasCollision(value: boolean);
        set jumpFactor(value: number);
        set friction(value: number);
        set requiresTool(value: boolean);
        set randomTickCallback(value: $Consumer_<$RandomTickCallback>);
        set explosionResistance(value: number);
        set isRandomlyTicking(value: boolean);
    }
    /**
     * Values that may be interpreted as {@link $BlockModificationKubeEvent$BlockModifications}.
     */
    export type $BlockModificationKubeEvent$BlockModifications_ = { block?: $Block_,  } | [block?: $Block_, ];
    export class $FarmlandTrampledKubeEvent implements $KubeEntityEvent {
        /**
         * The entity that is attempting to trample the farmland.
         */
        getEntity(): $Entity;
        /**
         * The distance of the entity from the block.
         */
        getDistance(): number;
        /**
         * The farmland block.
         */
        getBlock(): $LevelBlock;
        /**
         * The level that the farmland and the entity are in.
         */
        getLevel(): $Level;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(event: $BlockEvent$FarmlandTrampleEvent);
        get entity(): $Entity;
        get distance(): number;
        get block(): $LevelBlock;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $BlockTintFunction {
        static wrap(o: $Object): $BlockTintFunction;
        static REDSTONE: $BlockTintFunction;
        static BIRCH_FOLIAGE: $BlockTintFunction$Fixed;
        static TYPE_INFO: $TypeInfo;
        static GRASS: $BlockTintFunction;
        static MANGROVE_FOLIAGE: $BlockTintFunction$Fixed;
        static FOLIAGE: $BlockTintFunction;
        static EVERGREEN_FOLIAGE: $BlockTintFunction$Fixed;
        static REDSTONE_COLORS: $KubeColor[];
        static DEFAULT_FOLIAGE_COLOR: $KubeColor;
        static WATER: $BlockTintFunction;
    }
    export interface $BlockTintFunction {
        getColor(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_, index: number): $KubeColor;
    }
    /**
     * Values that may be interpreted as {@link $BlockTintFunction}.
     */
    export type $BlockTintFunction_ = $BlockTintFunction_[] | string | ((state: $BlockState, level: $BlockAndTintGetter, pos: $BlockPos_, index: number) => $KubeColor_) | ((state: $BlockState, level: $BlockAndTintGetter, pos: $BlockPos, index: number) => $KubeColor_);
    export class $BlockBuilder extends $ModelledBuilderBase<$Block> {
        /**
         * Set how high you can jump on the block.
         */
        jumpFactor(f: number): this;
        /**
         * Change drops of this block
         */
        drops(drops: $BlockDropSupplier_): this;
        /**
         * Sets the block's sound type. Defaults to wood.
         */
        soundType(m: $SoundType_): this;
        /**
         * Sets random tick callback for this black.
         */
        randomTick(randomTickCallback: $Consumer_<$RandomTickCallback>): this;
        /**
         * Sets the block's map color. Defaults to NONE.
         */
        mapColor(m: $MapColor): this;
        /**
         * Sets the blast resistance of the block. Defaults to 3.
         */
        resistance(r: number): this;
        /**
         * Set what happens when an entity is inside the block
         * This is called every tick for every entity inside the block, so be careful what you do here.
         * This will only be called if the entity's bounding box overlaps with the block's collision.
         */
        entityInside(callbackJS: $Consumer_<$EntityBlockCallback>): this;
        /**
         * Set how fast you can walk on the block.
         * 
         * Any value above 1 will make you walk insanely fast as your speed is multiplied by this value each tick.
         * 
         * Recommended values are between 0.1 and 1, useful for mimicking soul sand or ice.
         */
        speedFactor(f: number): this;
        /**
         * Makes the block not collide with entities.
         */
        noCollision(): this;
        /**
         * Makes the block can be waterlogged.
         */
        waterlogged(): this;
        /**
         * Creates a Block Entity for this block
         */
        blockEntity(callback: $Consumer_<$BlockEntityInfo>): this;
        /**
         * Sets the opacity of the block. Opaque blocks do not let light through.
         */
        opaque(o: boolean): this;
        /**
         * Note block instrument.
         */
        instrument(i: $NoteBlockInstrument_): this;
        /**
         * Sets the hardness of the block. Defaults to 1.5.
         * 
         * Setting this to -1 will make the block unbreakable like bedrock.
         */
        hardness(h: number): this;
        /**
         * Set if the block can be replaced by something else.
         */
        canBeReplaced(callbackJS: $Predicate_<$CanBeReplacedCallback>): this;
        /**
         * Set the default state of the block.
         */
        defaultState(callbackJS: $Consumer_<$BlockStateModifyCallback>): this;
        /**
         * Makes the block suffocating.
         */
        suffocating(b: boolean): this;
        /**
         * Makes the block unbreakable.
         */
        unbreakable(): this;
        /**
         * Makes the block transparent.
         */
        transparent(b: boolean): this;
        /**
         * Sets the light level of the block. Defaults to 0 (no light).
         */
        lightLevel(light: number): this;
        /**
         * Sets the render type of the block. Can be `cutout`, `cutout_mipped`, `translucent`, or `basic`.
         */
        renderType(l: $BlockRenderType_): this;
        transformObject(obj: $Block_): $Block;
        /**
         * Makes the block require a tool to have drops when broken.
         */
        requiresTool(f: boolean): this;
        /**
         * Makes the block require a tool to have drops when broken.
         */
        requiresTool(): this;
        /**
         * Makes mobs not spawn on the block.
         */
        noValidSpawns(b: boolean): this;
        /**
         * Makes the block view blocking.
         */
        viewBlocking(b: boolean): this;
        /**
         * @deprecated
         */
        generateLootTable(): $LootTable;
        generateLootTable(generator: $KubeDataGenerator): $LootTable;
        /**
         * Helper method for setting the render type of the block to `cutout` correctly.
         */
        defaultCutout(): this;
        /**
         * Makes the block a redstone conductor.
         */
        redstoneConductor(b: boolean): this;
        /**
         * Set how slippery the block is.
         */
        slipperiness(f: number): this;
        /**
         * Set how this block bounces/moves entities that land on top of this. Do not use this to modify the block, use fallOn instead!
         * Use ctx.bounce(height) or ctx.setVelocity(x, y, z) to change the entities velocity.
         */
        afterFallenOn(callbackJS: $Consumer_<$AfterEntityFallenOnBlockCallback>): this;
        /**
         * Checks if the block can be waterlogged.
         */
        canBeWaterlogged(): boolean;
        noSoundType(): this;
        woodSoundType(): this;
        stoneSoundType(): this;
        gravelSoundType(): this;
        grassSoundType(): this;
        sandSoundType(): this;
        copyPropertiesFrom(block: $Block_): this;
        /**
         * Set the callback for determining the blocks state when placed.
         */
        placementState(callbackJS: $Consumer_<$BlockStateModifyPlacementCallback>): this;
        /**
         * Sets the block's map color dynamically per block state. If unset, defaults to NONE.
         */
        dynamicMapColor(m: $Function_<$BlockState, $Object>): this;
        cropSoundType(): this;
        /**
         * Helper method for setting the render type of the block to `translucent` correctly.
         */
        defaultTranslucent(): this;
        glassSoundType(): this;
        static createShape(boxes: $List_<$AABB_>): $VoxelShape;
        /**
         * Set the callback used for determining how the block is mirrored
         */
        mirrorState(callbackJS: $Consumer_<$BlockStateMirrorCallback>): this;
        /**
         * Set the callback used for determining how the block rotates
         */
        rotateState(callbackJS: $Consumer_<$BlockStateRotateCallback>): this;
        /**
         * @deprecated
         */
        getWaterlogged(): boolean;
        /**
         * @deprecated
         */
        setWaterlogged(waterlogged: boolean): this;
        /**
         * Add a blockstate property to the block.
         * 
         * For example, facing, lit, etc.
         */
        property(property: $Property<never>): this;
        createProperties(): $BlockBehaviour$Properties;
        /**
         * Set the color of a specific layer of the block.
         */
        color(index: number, color: $BlockTintFunction_): this;
        /**
         * Set the color of a specific layer of the block.
         */
        color(color: $BlockTintFunction_): this;
        /**
         * Set the shape of the block.
         */
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, scale16: boolean): this;
        /**
         * Set the shape of the block.
         */
        box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): this;
        /**
         * Tags both the block and the item with the given tag.
         */
        tag(tag: $ResourceLocation_[]): this;
        /**
         * Modifies the block's item representation.
         */
        item(i: $Consumer_<$ItemBuilder>): this;
        /**
         * Set the callback used for right-clicking on the block
         */
        rightClick(callbackJS: $Consumer_<$BlockRightClickedKubeEvent>): this;
        /**
         * Sets the block should be a full block or not, like cactus or doors.
         */
        fullBlock(f: boolean): this;
        /**
         * Makes the block not be solid.
         */
        notSolid(): this;
        /**
         * Set what happens when an entity steps on the block
         * This is called every tick for every entity standing on the block, so be careful what you do here.
         */
        steppedOn(callbackJS: $Consumer_<$EntityBlockCallback>): this;
        /**
         * Tags the item with the given tag.
         */
        tagItem(tag: $ResourceLocation_[]): this;
        /**
         * Set what happens when an entity falls on the block. Do not use this for moving them, use bounce instead!
         */
        fallenOn(callbackJS: $Consumer_<$EntityFallenOnBlockCallback>): this;
        /**
         * Set the block to have no corresponding item.
         */
        noItem(): this;
        /**
         * Tags both the block and the item with the given tag.
         */
        tagBoth(tag: $ResourceLocation_[]): this;
        /**
         * Clears all drops for the block.
         */
        noDrops(): this;
        /**
         * Bounces entities that land on this block by bounciness * their fall velocity.
         * Do not make bounciness negative, as that is a recipe for a long and laggy trip to the void
         */
        bounciness(bounciness: number): this;
        /**
         * Set how this block reacts after an explosion. Note the block has already been destroyed at this point
         */
        exploded(callbackJS: $Consumer_<$BlockExplodedCallback>): this;
        /**
         * Tags the block with the given tag.
         */
        tagBlock(tag: $ResourceLocation_[]): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        randomTickCallback: $Consumer<$RandomTickCallback>;
        registryKey: $ResourceKey<$Registry<$Block>>;
        constructor(id: $ResourceLocation_);
    }
    export class $DetectorBlockKubeEvent implements $KubeLevelEvent {
        /**
         * If the detector block is powered.
         */
        isPowered(): boolean;
        /**
         * The detector block.
         */
        getBlock(): $LevelBlock;
        /**
         * The level where the detector block is located.
         */
        getLevel(): $Level;
        /**
         * The id of the detector block when it was registered.
         */
        getDetectorId(): string;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(i: string, l: $Level_, p: $BlockPos_, pow: boolean);
        get powered(): boolean;
        get block(): $LevelBlock;
        get level(): $Level;
        get detectorId(): string;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $SeedItemBuilder extends $BlockItemBuilder {
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        blockBuilder: $BlockBuilder;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(i: $ResourceLocation_);
    }
    export class $SoundTypeWrapper implements $TypeWrapperFactory<$SoundType> {
        wrap(o: $Object, target: $TypeInfo_): $SoundType;
        getMap(): $Map<string, $SoundType>;
        static INSTANCE: $SoundTypeWrapper;
        constructor();
        get map(): $Map<string, $SoundType>;
    }
    export class $BlockDropsKubeEvent implements $KubeEntityEvent {
        getEntity(): $Entity;
        /**
         * Dropped items. Immutable.
         */
        getItems(): $List<$ItemStack>;
        /**
         * The experience dropped by the block.
         */
        getXp(): number;
        /**
         * Sets the experience dropped by the block.
         */
        setXp(xp: number): void;
        /**
         * The tool used when breaking this block. May be null.
         */
        getTool(): $ItemStack;
        /**
         * The block that was broken.
         */
        getBlock(): $LevelBlock;
        addItem(item: $ItemStack_): $ItemEntity;
        getLevel(): $ServerLevel;
        removeItem(item: $ItemPredicate_): void;
        containsItem(item: $ItemPredicate_): boolean;
        /**
         * Dropped item entities.
         */
        getItemEntities(): $List<$ItemEntity>;
        getPlayer(): $Player;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(event: $BlockDropsEvent);
        get entity(): $Entity;
        get items(): $List<$ItemStack>;
        get tool(): $ItemStack;
        get block(): $LevelBlock;
        get level(): $ServerLevel;
        get itemEntities(): $List<$ItemEntity>;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $SeedItemBuilder$SeedKubeItem extends $ItemNameBlockItem implements $SpecialPlantable {
        villagerCanPlantItem(villager: $Villager): boolean;
        canPlacePlantAtPosition(stack: $ItemStack_, level: $LevelReader, pos: $BlockPos_, direction: $Direction_): boolean;
        spawnPlantAtPosition(stack: $ItemStack_, level: $LevelAccessor, pos: $BlockPos_, direction: $Direction_): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(b: $SeedItemBuilder);
    }
}
