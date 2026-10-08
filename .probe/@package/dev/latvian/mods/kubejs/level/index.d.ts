import { $Explosion, $Level$ExplosionInteraction, $Level$ExplosionInteraction_, $Level, $ExplosionDamageCalculator, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fireworks_ } from "@package/net/minecraft/world/item/component";
import { $EntityType_, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $Direction_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockProviderKJS, $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Record, $Object } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $ExplosionEvent$Detonate, $LevelEvent$Unload, $ExplosionEvent$Start, $LevelEvent$Load } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as ruletest from "@package/dev/latvian/mods/kubejs/level/ruletest";

declare module "@package/dev/latvian/mods/kubejs/level" {
    export class $KubeJSWorldEventHandler {
        static serverLevelLoad(event: $LevelEvent$Load): void;
        static detonateExplosion(event: $ExplosionEvent$Detonate): void;
        static preExplosion(event: $ExplosionEvent$Start): void;
        static serverTickEvent(event: $LevelTickEvent$Post): void;
        static serverLevelUnload(event: $LevelEvent$Unload): void;
        constructor();
    }
    export class $ExplosionKubeEvent$After extends $ExplosionKubeEvent {
        /**
         * Gets a list of all blocks affected by the explosion.
         */
        getAffectedBlocks(): $List<$LevelBlock>;
        /**
         * Gets a list of all entities affected by the explosion.
         */
        getAffectedEntities(): $EntityArrayList;
        /**
         * Remove all knockback from all affected *players*.
         */
        removeKnockback(): void;
        /**
         * Remove all entities from the list of affected entities.
         */
        removeAllAffectedEntities(): void;
        /**
         * Remove a block from the list of affected blocks.
         */
        removeAffectedBlock(block: $LevelBlock): void;
        /**
         * Remove all blocks from the list of affected blocks.
         */
        removeAllAffectedBlocks(): void;
        /**
         * Remove an entity from the list of affected entities.
         */
        removeAffectedEntity(entity: $Entity): void;
        constructor(level: $Level_, explosion: $Explosion, affectedEntities: $List_<$Entity>);
        get affectedBlocks(): $List<$LevelBlock>;
        get affectedEntities(): $EntityArrayList;
    }
    export class $LevelBlock {
    }
    export interface $LevelBlock extends $BlockProviderKJS {
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        getEntity(): $BlockEntity;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getPlayersInRadius(): $EntityArrayList;
        getBlockLight(): number;
        mergeEntityData(tag: $CompoundTag_): void;
        toBlockStateString(): string;
        spawnLightning(effectOnly: boolean): void;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        getSkyLight(): number;
        getCanSeeSky(): boolean;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        setEntityData(tag: $CompoundTag_): void;
        getEntityId(): string;
        getBlockState(): $BlockState;
        getInventory(): $InventoryKJS;
        getInventory(facing: $Direction_): $InventoryKJS;
        setBlockState(state: $BlockState_, flags: number): void;
        setBlockState(state: $BlockState_): void;
        getDimensionKey(): $ResourceKey<$Level>;
        explode(properties: $ExplosionProperties_): $Explosion;
        getBlock(): $Block;
        getEntityData(): $CompoundTag;
        getZ(): number;
        getX(): number;
        canSeeSkyFromBelowWater(): boolean;
        getDown(): $LevelBlock;
        getUp(): $LevelBlock;
        getWest(): $LevelBlock;
        getCenterY(): number;
        getLight(): number;
        getEast(): $LevelBlock;
        popItem(item: $ItemStack_): void;
        getSouth(): $LevelBlock;
        getBiomeId(): $ResourceLocation;
        getNorth(): $LevelBlock;
        getPos(): $BlockPos;
        getCenterX(): number;
        getCenterZ(): number;
        offset(f: $Direction_): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_, d: number): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        getProperties(): $Map<string, string>;
        createEntity(type: $EntityType_<never>): $Entity;
        getY(): number;
        getItem(): $ItemStack;
        getLevel(): $Level;
        getDimension(): $ResourceLocation;
        get entity(): $BlockEntity;
        get blockLight(): number;
        get skyLight(): number;
        get canSeeSky(): boolean;
        get entityId(): string;
        get dimensionKey(): $ResourceKey<$Level>;
        get block(): $Block;
        get z(): number;
        get x(): number;
        get down(): $LevelBlock;
        get up(): $LevelBlock;
        get west(): $LevelBlock;
        get centerY(): number;
        get light(): number;
        get east(): $LevelBlock;
        get south(): $LevelBlock;
        get biomeId(): $ResourceLocation;
        get north(): $LevelBlock;
        get pos(): $BlockPos;
        get centerX(): number;
        get centerZ(): number;
        get properties(): $Map<string, string>;
        get y(): number;
        get item(): $ItemStack;
        get level(): $Level;
        get dimension(): $ResourceLocation;
    }
    export class $WrappedSpawner extends $Record {
        static of(spawner: $Either<$BlockEntity, $Entity>): $WrappedSpawner;
        block(): $LevelBlock;
        entity(): $Entity;
        isWorldgen(): boolean;
        constructor(entity: $Entity, block: $LevelBlock);
        get worldgen(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WrappedSpawner}.
     */
    export type $WrappedSpawner_ = { entity?: $Entity, block?: $LevelBlock,  } | [entity?: $Entity, block?: $LevelBlock, ];
    export class $ExplosionKubeEvent$Before extends $ExplosionKubeEvent {
        /**
         * Returns the size of the explosion.
         */
        getSize(): number;
        /**
         * Sets the size of the explosion.
         */
        setSize(s: number): void;
        constructor(level: $Level_, explosion: $Explosion);
    }
    export class $KubeLevelEvent {
    }
    export interface $KubeLevelEvent extends $KubeEvent {
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        getLevel(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get level(): $Level;
    }
    /**
     * Values that may be interpreted as {@link $KubeLevelEvent}.
     */
    export type $KubeLevelEvent_ = (() => $Level_);
    export class $CachedLevelBlock implements $LevelBlock {
        getEntity(): $BlockEntity;
        getBlockState(): $BlockState;
        setBlockState(state: $BlockState_, flags: number): void;
        getPos(): $BlockPos;
        clearCache(): void;
        getLevel(): $Level;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getPlayersInRadius(): $EntityArrayList;
        getBlockLight(): number;
        mergeEntityData(tag: $CompoundTag_): void;
        toBlockStateString(): string;
        spawnLightning(effectOnly: boolean): void;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        getSkyLight(): number;
        getCanSeeSky(): boolean;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        setEntityData(tag: $CompoundTag_): void;
        getEntityId(): string;
        getInventory(): $InventoryKJS;
        getInventory(facing: $Direction_): $InventoryKJS;
        setBlockState(state: $BlockState_): void;
        getDimensionKey(): $ResourceKey<$Level>;
        explode(properties: $ExplosionProperties_): $Explosion;
        getBlock(): $Block;
        getEntityData(): $CompoundTag;
        getZ(): number;
        getX(): number;
        canSeeSkyFromBelowWater(): boolean;
        getDown(): $LevelBlock;
        getUp(): $LevelBlock;
        getWest(): $LevelBlock;
        getCenterY(): number;
        getLight(): number;
        getEast(): $LevelBlock;
        popItem(item: $ItemStack_): void;
        getSouth(): $LevelBlock;
        getBiomeId(): $ResourceLocation;
        getNorth(): $LevelBlock;
        getCenterX(): number;
        getCenterZ(): number;
        offset(f: $Direction_): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_, d: number): $LevelBlock;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block_): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        getProperties(): $Map<string, string>;
        createEntity(type: $EntityType_<never>): $Entity;
        getY(): number;
        getItem(): $ItemStack;
        getDimension(): $ResourceLocation;
        getId(): string;
        getTypeData(): $Map<string, $Object>;
        asHolder(): $Holder<$Block>;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getKey(): $ResourceKey<$Block>;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        getIdLocation(): $ResourceLocation;
        specialEquals(o: $Object, shallow: boolean): boolean;
        minecraftLevel: $Level;
        constructor(w: $Level_, p: $BlockPos_);
        get entity(): $BlockEntity;
        get pos(): $BlockPos;
        get level(): $Level;
        get blockLight(): number;
        get skyLight(): number;
        get canSeeSky(): boolean;
        get entityId(): string;
        get dimensionKey(): $ResourceKey<$Level>;
        get block(): $Block;
        get z(): number;
        get x(): number;
        get down(): $LevelBlock;
        get up(): $LevelBlock;
        get west(): $LevelBlock;
        get centerY(): number;
        get light(): number;
        get east(): $LevelBlock;
        get south(): $LevelBlock;
        get biomeId(): $ResourceLocation;
        get north(): $LevelBlock;
        get centerX(): number;
        get centerZ(): number;
        get properties(): $Map<string, string>;
        get y(): number;
        get item(): $ItemStack;
        get dimension(): $ResourceLocation;
        get id(): string;
        get typeData(): $Map<string, $Object>;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get key(): $ResourceKey<$Block>;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Block>>;
        get tags(): $List<$ResourceLocation>;
        get idLocation(): $ResourceLocation;
    }
    export class $ExplosionProperties extends $Record {
        damageCalculator(): $ExplosionDamageCalculator;
        explosionSound(): $Holder<$SoundEvent>;
        explode(level: $Level_, x: number, y: number, z: number): $Explosion;
        particles(): (boolean) | undefined;
        damageSource(): $DamageSource;
        mode(): $Level$ExplosionInteraction;
        source(): $Entity;
        strength(): (number) | undefined;
        largeParticles(): $ParticleOptions;
        smallParticles(): $ParticleOptions;
        causesFire(): (boolean) | undefined;
        constructor(source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, strength: (number) | undefined, causesFire: (boolean) | undefined, mode: $Level$ExplosionInteraction_ | null, particles: (boolean) | undefined, smallParticles: $ParticleOptions_ | null, largeParticles: $ParticleOptions_ | null, explosionSound: $Holder_<$SoundEvent> | null);
    }
    /**
     * Values that may be interpreted as {@link $ExplosionProperties}.
     */
    export type $ExplosionProperties_ = { largeParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, smallParticles?: $ParticleOptions_, strength?: (number) | undefined, source?: $Entity, mode?: $Level$ExplosionInteraction_, causesFire?: (boolean) | undefined, particles?: (boolean) | undefined, damageSource?: $DamageSource_, explosionSound?: $Holder_<$SoundEvent>,  } | [largeParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, smallParticles?: $ParticleOptions_, strength?: (number) | undefined, source?: $Entity, mode?: $Level$ExplosionInteraction_, causesFire?: (boolean) | undefined, particles?: (boolean) | undefined, damageSource?: $DamageSource_, explosionSound?: $Holder_<$SoundEvent>, ];
    export class $SimpleLevelKubeEvent implements $KubeLevelEvent {
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
        constructor(l: $Level_);
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $ExplosionKubeEvent implements $KubeLevelEvent {
        getZ(): number;
        getX(): number;
        getY(): number;
        getPosition(): $Vec3;
        getBlock(): $LevelBlock;
        getLevel(): $Level;
        getExploder(): $LivingEntity;
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
        constructor(level: $Level_, explosion: $Explosion);
        get z(): number;
        get x(): number;
        get y(): number;
        get position(): $Vec3;
        get block(): $LevelBlock;
        get level(): $Level;
        get exploder(): $LivingEntity;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
}
