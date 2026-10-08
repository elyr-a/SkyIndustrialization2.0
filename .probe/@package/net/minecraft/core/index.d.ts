import { $LongConsumer_ } from "@package/it/unimi/dsi/fastutil/longs";
import { $RegistryLayer_ } from "@package/net/minecraft/server";
import { $Keyable, $DynamicOps, $Codec, $Dynamic, $MapCodec, $Lifecycle } from "@package/com/mojang/serialization";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $Tag_, $Tag, $ListTag_, $ListTag } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $UUID_, $Set_, $Map, $Map$Entry, $Set, $Spliterator, $Iterator, $UUID, $List, $Map_, $Collection_, $List_, $Collection, $AbstractList } from "@package/java/util";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $IntFunction, $Consumer_, $Predicate_, $Predicate, $Consumer, $BiConsumer_, $Function_ } from "@package/java/util/function";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $IHolderSetExtension$SerializationType, $IHolderExtension, $IHolderLookupProviderExtension, $IHolderSetExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryTypes } from "@special/types";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Enum, $RuntimeException, $Comparable, $Iterable, $Record, $Runnable_, $Object } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $EntityAccess } from "@package/net/minecraft/world/level/entity";
import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $BaseMappedRegistry, $IRegistryExtension } from "@package/net/neoforged/neoforge/registries";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $KnownPack_, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $RegistryOps, $ResourceLocation, $ResourceLocation_, $RegistryOps$RegistryInfo_ } from "@package/net/minecraft/resources";
import { $MappedRegistryAccessor } from "@package/net/neoforged/neoforge/mixins";
import { $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $AABB_, $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Transformation } from "@package/com/mojang/math";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $Matrix4f, $Vector3f, $Quaternionf } from "@package/org/joml";
export * as component from "@package/net/minecraft/core/component";
export * as particles from "@package/net/minecraft/core/particles";
export * as dispenser from "@package/net/minecraft/core/dispenser";
export * as cauldron from "@package/net/minecraft/core/cauldron";
export * as registries from "@package/net/minecraft/core/registries";

declare module "@package/net/minecraft/core" {
    export class $RegistryAccess$Frozen {
    }
    export interface $RegistryAccess$Frozen extends $RegistryAccess {
    }
    export class $HolderLookup$RegistryLookup$Delegate<T> {
    }
    export interface $HolderLookup$RegistryLookup$Delegate<T> extends $HolderLookup$RegistryLookup<T> {
        listTags(): $Stream<$HolderSet$Named<T>>;
        registryLifecycle(): $Lifecycle;
        listElements(): $Stream<$Holder$Reference<T>>;
        parent(): $HolderLookup$RegistryLookup<T>;
        get(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        get(arg0: $TagKey_<T>): ($HolderSet$Named<T>) | undefined;
        key(): $ResourceKey<$Registry<T>>;
        getData<A>(arg0: $DataMapType<T, A>, arg1: $ResourceKey_<T>): A;
    }
    /**
     * Values that may be interpreted as {@link $HolderLookup$RegistryLookup$Delegate}.
     */
    export type $HolderLookup$RegistryLookup$Delegate_<T> = (() => $HolderLookup$RegistryLookup<T>);
    export class $Registry<T> {
        static registerForHolder<T>(registry: $Registry<T>, key: $ResourceKey_<T>, value: T): $Holder$Reference<T>;
        static registerForHolder<T>(registry: $Registry<T>, name: $ResourceLocation_, value: T): $Holder$Reference<T>;
        static register<T>(registry: $Registry<T>, name: string, value: T): T;
        static register<V, T extends V>(registry: $Registry<V>, key: $ResourceKey_<V>, value: T): T;
        static register<V, T extends V>(registry: $Registry<V>, name: $ResourceLocation_, value: T): T;
    }
    export interface $Registry<T> extends $Keyable, $IdMap<T>, $IRegistryExtension<T> {
        getOptional(location: $ResourceLocation_ | null): (T) | undefined;
        getOptional(key: $ResourceKey_<T> | null): (T) | undefined;
        getAny(): ($Holder$Reference<T>) | undefined;
        getTags(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>;
        resetTags(): void;
        bindTags(tagMap: $Map_<$TagKey_<T>, $List_<$Holder_<T>>>): void;
        holders(): $Stream<$Holder$Reference<T>>;
        asLookup(): $HolderLookup$RegistryLookup<T>;
        createIntrusiveHolder(value: T): $Holder$Reference<T>;
        getOrThrow(key: $ResourceKey_<T>): T;
        getOrCreateTag(key: $TagKey_<T>): $HolderSet$Named<T>;
        registrationInfo(key: $ResourceKey_<T>): ($RegistrationInfo) | undefined;
        getTagNames(): $Stream<$TagKey<T>>;
        holderOwner(): $HolderOwner<T>;
        asTagAddingLookup(): $HolderLookup$RegistryLookup<T>;
        registryLifecycle(): $Lifecycle;
        wrapAsHolder(value: T): $Holder<T>;
        byNameCodec(): $Codec<T>;
        holderByNameCodec(): $Codec<$Holder<T>>;
        /**
         * @return all keys in this registry
         */
        registryKeySet(): $Set<$ResourceKey<T>>;
        getHolderOrThrow(key: $ResourceKey_<T>): $Holder$Reference<T>;
        getTagOrEmpty(key: $TagKey_<T>): $Iterable<$Holder<T>>;
        getResourceKey(value: T): ($ResourceKey<T>) | undefined;
        getRandomElementOf(key: $TagKey_<T>, random: $RandomSource): ($Holder<T>) | undefined;
        getHolder(location: $ResourceLocation_): ($Holder$Reference<T>) | undefined;
        getHolder(key: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        getHolder(id: number): ($Holder$Reference<T>) | undefined;
        asHolderIdMap(): $IdMap<$Holder<T>>;
        getRandom(random: $RandomSource): ($Holder$Reference<T>) | undefined;
        get(name: $ResourceLocation_ | null): T;
        get(key: $ResourceKey_<T> | null): T;
        stream(): $Stream<T>;
        /**
         * @return all keys in this registry
         */
        entrySet(): $Set<$Map$Entry<$ResourceKey<T>, T>>;
        /**
         * @return the name used to identify the given object within this registry or `null` if the object is not within this registry
         */
        getKey(value: T): $ResourceLocation;
        key(): $ResourceKey<$Registry<T>>;
        containsKey(key: $ResourceKey_<T>): boolean;
        containsKey(name: $ResourceLocation_): boolean;
        /**
         * @return the integer ID used to identify the given object
         */
        getId(value: T | null): number;
        keys<U>(ops: $DynamicOps<U>): $Stream<U>;
        /**
         * @return all keys in this registry
         */
        keySet(): $Set<$ResourceLocation>;
        freeze(): $Registry<T>;
        getTag(key: $TagKey_<T>): ($HolderSet$Named<T>) | undefined;
        get any(): ($Holder$Reference<T>) | undefined;
        get tags(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>;
        get tagNames(): $Stream<$TagKey<T>>;
    }
    export class $RegistryCodecs {
        static homogeneousList<E>(registryKey: $ResourceKey_<$Registry<E>>): $Codec<$HolderSet<E>>;
        static homogeneousList<E>(registryKey: $ResourceKey_<$Registry<E>>, disallowInline: boolean): $Codec<$HolderSet<E>>;
        static homogeneousList<E>(registryKey: $ResourceKey_<$Registry<E>>, elementCodec: $Codec<E>): $Codec<$HolderSet<E>>;
        static homogeneousList<E>(registryKey: $ResourceKey_<$Registry<E>>, elementCodec: $Codec<E>, disallowInline: boolean): $Codec<$HolderSet<E>>;
        constructor();
    }
    export class $NonNullList<E> extends $AbstractList<E> {
        static codecOf<E>(arg0: $Codec<E>): $Codec<$NonNullList<E>>;
        static createWithCapacity<E>(initialCapacity: number): $NonNullList<E>;
        static copyOf<E>(arg0: $Collection_<E>): $NonNullList<E>;
        static of<E>(defaultValue: E, ...elements: E[]): $NonNullList<E>;
        static create<E>(): $NonNullList<E>;
        /**
         * Creates a new NonNullList with *fixed* size and default value. The list will be filled with the default value.
         */
        static withSize<E>(size: number, defaultValue: E): $NonNullList<E>;
    }
    export class $RegistrySetBuilder$EmptyTagRegistryLookup<T> extends $RegistrySetBuilder$EmptyTagLookup<T> implements $HolderLookup$RegistryLookup<T> {
        filterFeatures(arg0: $FeatureFlagSet): $HolderLookup$RegistryLookup<T>;
        filterElements(arg0: $Predicate_<T>): $HolderLookup$RegistryLookup<T>;
        getData<A>(arg0: $DataMapType<T, A>, arg1: $ResourceKey_<T>): A;
        listTagIds(): $Stream<$TagKey<T>>;
        listElementIds(): $Stream<$ResourceKey<T>>;
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
    }
    export class $Holder$Reference<T> implements $Holder<T> {
        unwrapKey(): ($ResourceKey<T>) | undefined;
        isBound(): boolean;
        canSerializeIn(owner: $HolderOwner<T>): boolean;
        /**
         * Attempts to resolve the underlying `RegistryLookup` from a `Holder`.
         * 
         * This will only succeed if the underlying holder is a `Reference`.
         */
        unwrapLookup(): $HolderLookup$RegistryLookup<T>;
        static createStandAlone<T>(owner: $HolderOwner<T>, key: $ResourceKey_<T>): $Holder$Reference<T>;
        /**
         * @deprecated
         */
        static createIntrusive<T>(owner: $HolderOwner<T>, value: T | null): $Holder$Reference<T>;
        value(): T;
        /**
         * Get the resource key held by this Holder, or null if none is present. This method will be overriden
         * by Holder implementations to avoid allocation associated with `Holder#unwrapKey()`
         */
        getKey(): $ResourceKey<T>;
        kind(): $Holder$Kind;
        /**
         * Get the resource key held by this Holder, or null if none is present. This method will be overriden
         * by Holder implementations to avoid allocation associated with `Holder#unwrapKey()`
         */
        key(): $ResourceKey<T>;
        unwrap(): $Either<$ResourceKey<T>, T>;
        is(predicate: $Predicate_<$ResourceKey<T>>): boolean;
        is(location: $ResourceLocation_): boolean;
        tags(): $Stream<$TagKey<T>>;
        getData<A>(arg0: $DataMapType<T, A>): A;
        /**
         * Test if a tag matches the object this holder holds.
         */
        isTag(location: $ResourceLocation_): boolean;
        getRegisteredName(): string;
        /**
         * @return the holder that this holder wraps
         * 
         * Used by `Registry#safeCastToReference` to resolve the underlying `Reference` for delegating holders.
         */
        getDelegate(): $Holder<T>;
        type: $Holder$Reference$Type;
        get bound(): boolean;
        get registeredName(): string;
        get delegate(): $Holder<T>;
    }
    export class $Vec3i implements $Comparable<$Vec3i> {
        closerThan(vector: $Vec3i, distance: number): boolean;
        /**
         * Calculate squared distance to the given Vector
         */
        distSqr(vector: $Vec3i): number;
        closerToCenterThan(position: $Position, distance: number): boolean;
        distManhattan(other: $Vec3i): number;
        distToLowCornerSqr(x: number, arg1: number, y: number): number;
        static offsetCodec(maxOffset: number): $Codec<$Vec3i>;
        distToCenterSqr(position: $Position): number;
        distToCenterSqr(x: number, arg1: number, y: number): number;
        getZ(): number;
        getX(): number;
        /**
         * Calculate the cross product of this and the given Vector
         */
        cross(vector: $Vec3i): $Vec3i;
        /**
         * Offset this vector 1 unit up
         */
        south(): $Vec3i;
        /**
         * Offset this vector upwards by the given distance.
         */
        south(distance: number): $Vec3i;
        /**
         * Offset this vector 1 unit up
         */
        west(): $Vec3i;
        /**
         * Offset this vector upwards by the given distance.
         */
        west(distance: number): $Vec3i;
        /**
         * Offset this vector 1 unit up
         */
        east(): $Vec3i;
        /**
         * Offset this vector upwards by the given distance.
         */
        east(distance: number): $Vec3i;
        /**
         * Offset this vector 1 unit up
         */
        north(): $Vec3i;
        /**
         * Offset this vector upwards by the given distance.
         */
        north(distance: number): $Vec3i;
        /**
         * Offset this vector 1 unit up
         */
        above(): $Vec3i;
        /**
         * Offset this vector upwards by the given distance.
         */
        above(distance: number): $Vec3i;
        /**
         * Offset this vector 1 unit up
         */
        below(): $Vec3i;
        /**
         * Offset this vector upwards by the given distance.
         */
        below(distance: number): $Vec3i;
        get(axis: $Direction$Axis_): number;
        compareTo(other: $Vec3i): number;
        offset(dx: number, dy: number, dz: number): $Vec3i;
        /**
         * Calculate the cross product of this and the given Vector
         */
        offset(vector: $Vec3i): $Vec3i;
        toShortString(): string;
        /**
         * Offset this vector upwards by the given distance.
         */
        multiply(distance: number): $Vec3i;
        /**
         * Calculate the cross product of this and the given Vector
         */
        subtract(vector: $Vec3i): $Vec3i;
        getY(): number;
        /**
         * Offsets this Vector by the given distance in the specified direction.
         */
        relative(direction: $Direction_, distance: number): $Vec3i;
        relative(axis: $Direction$Axis_, amount: number): $Vec3i;
        relative(direction: $Direction_): $Vec3i;
        static ZERO: $Vec3i;
        static CODEC: $Codec<$Vec3i>;
        constructor(x: number, y: number, z: number);
        get z(): number;
        get x(): number;
        get y(): number;
    }
    export class $AxisCycle extends $Enum<$AxisCycle> {
        inverse(): $AxisCycle;
        cycle(x: number, arg1: number, y: number, arg3: $Direction$Axis_): number;
        cycle(x: number, y: number, z: number, axis: $Direction$Axis_): number;
        cycle(axis: $Direction$Axis_): $Direction$Axis;
        static values(): $AxisCycle[];
        static valueOf(arg0: string): $AxisCycle;
        static between(to: $Direction$Axis_, axis2: $Direction$Axis_): $AxisCycle;
        static BACKWARD: $AxisCycle;
        static FORWARD: $AxisCycle;
        static VALUES: $AxisCycle[];
        static NONE: $AxisCycle;
        static AXIS_VALUES: $Direction$Axis[];
    }
    /**
     * Values that may be interpreted as {@link $AxisCycle}.
     */
    export type $AxisCycle_ = "none" | "forward" | "backward";
    export class $WritableRegistry<T> {
    }
    export interface $WritableRegistry<T> extends $Registry<T> {
        createRegistrationLookup(): $HolderGetter<T>;
        /**
         * @return whether this registry should be synced to clients
         */
        isEmpty(): boolean;
        register(key: $ResourceKey_<T>, value: T, registrationInfo: $RegistrationInfo_): $Holder$Reference<T>;
        get empty(): boolean;
    }
    export class $RegistrySetBuilder$RegisteredValue<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$RegisteredValue}.
     */
    export type $RegistrySetBuilder$RegisteredValue_<T> = { lifecycle?: $Lifecycle, value?: any,  } | [lifecycle?: $Lifecycle, value?: any, ];
    export class $RegistrySetBuilder$UniversalLookup extends $RegistrySetBuilder$EmptyTagLookup<$Object> implements $HolderLookup<$Object> {
        listTagIds(): $Stream<$TagKey<$Object>>;
        listElementIds(): $Stream<$ResourceKey<$Object>>;
    }
    export class $HolderLookup$Provider {
        static create(lookupStream: $Stream<$HolderLookup$RegistryLookup<never>>): $HolderLookup$Provider;
    }
    export interface $HolderLookup$Provider extends $IHolderLookupProviderExtension {
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        asGetterLookup(): $HolderGetter$Provider;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
    }
    export class $LayeredRegistryAccess<T> {
        compositeAccess(): $RegistryAccess$Frozen;
        replaceFrom(key: T, values: $List_<$RegistryAccess$Frozen>): $LayeredRegistryAccess<T>;
        replaceFrom(key: T, ...values: $RegistryAccess$Frozen[]): $LayeredRegistryAccess<T>;
        getAccessForLoading(key: T): $RegistryAccess$Frozen;
        getLayer(key: T): $RegistryAccess$Frozen;
        getAccessFrom(key: T): $RegistryAccess$Frozen;
        constructor(keys: $List_<T>);
    }
    export class $Direction8 extends $Enum<$Direction8> {
        getStepZ(): number;
        getStepX(): number;
        static values(): $Direction8[];
        static valueOf(arg0: string): $Direction8;
        getDirections(): $Set<$Direction>;
        static NORTH_WEST: $Direction8;
        static NORTH: $Direction8;
        static NORTH_EAST: $Direction8;
        static WEST: $Direction8;
        static SOUTH_EAST: $Direction8;
        static SOUTH: $Direction8;
        static SOUTH_WEST: $Direction8;
        static EAST: $Direction8;
        get stepZ(): number;
        get stepX(): number;
        get directions(): $Set<$Direction>;
    }
    /**
     * Values that may be interpreted as {@link $Direction8}.
     */
    export type $Direction8_ = "north" | "north_east" | "east" | "south_east" | "south" | "south_west" | "west" | "north_west";
    export class $Holder$Direct<T> extends $Record implements $Holder<T> {
        unwrapKey(): ($ResourceKey<T>) | undefined;
        isBound(): boolean;
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
        value(): T;
        kind(): $Holder$Kind;
        unwrap(): $Either<$ResourceKey<T>, T>;
        is(arg0: $ResourceLocation_): boolean;
        is(arg0: $Predicate_<$ResourceKey<T>>): boolean;
        tags(): $Stream<$TagKey<T>>;
        /**
         * Test if a tag matches the object this holder holds.
         */
        isTag(tagKey: $ResourceLocation_): boolean;
        getRegisteredName(): string;
        unwrapLookup(): $HolderLookup$RegistryLookup<T>;
        getKey(): $ResourceKey<T>;
        getDelegate(): $Holder<T>;
        getData<T>(arg0: $DataMapType<T, T>): T;
        constructor(value: T);
        get bound(): boolean;
        get registeredName(): string;
        get key(): $ResourceKey<T>;
        get delegate(): $Holder<T>;
    }
    /**
     * Values that may be interpreted as {@link $Holder$Direct}.
     */
    export type $Holder$Direct_<T> = { value?: any,  } | [value?: any, ];
    export class $RegistrySetBuilder$RegistryContents<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$RegistryContents}.
     */
    export type $RegistrySetBuilder$RegistryContents_<T> = { values?: $Map_<$ResourceKey_<any>, $RegistrySetBuilder$ValueAndHolder_<any>>, lifecycle?: $Lifecycle, key?: $ResourceKey_<$Registry<any>>,  } | [values?: $Map_<$ResourceKey_<any>, $RegistrySetBuilder$ValueAndHolder_<any>>, lifecycle?: $Lifecycle, key?: $ResourceKey_<$Registry<any>>, ];
    export class $RegistrySetBuilder {
        add<T>(key: $ResourceKey_<$Registry<T>>, lifecycle: $Lifecycle, bootstrap: $RegistrySetBuilder$RegistryBootstrap_<T>): $RegistrySetBuilder;
        add<T>(key: $ResourceKey_<$Registry<T>>, bootstrap: $RegistrySetBuilder$RegistryBootstrap_<T>): $RegistrySetBuilder;
        build(registryAccess: $RegistryAccess): $HolderLookup$Provider;
        getEntryKeys(): $List<$ResourceKey<$Registry<never>>>;
        buildPatch(registryAccess: $RegistryAccess, lookupProvider: $HolderLookup$Provider, clonerFactory: $Cloner$Factory): $RegistrySetBuilder$PatchedRegistries;
        constructor();
        get entryKeys(): $List<$ResourceKey<$Registry<never>>>;
    }
    export class $Holder$Reference$Type extends $Enum<$Holder$Reference$Type> {
        static values(): $Holder$Reference$Type[];
        static valueOf(arg0: string): $Holder$Reference$Type;
        static STAND_ALONE: $Holder$Reference$Type;
        static INTRUSIVE: $Holder$Reference$Type;
    }
    /**
     * Values that may be interpreted as {@link $Holder$Reference$Type}.
     */
    export type $Holder$Reference$Type_ = "stand_alone" | "intrusive";
    export class $UUIDUtil {
        static readUUID(dynamic: $Dynamic<never>): $UUID;
        static createOfflineProfile(username: string): $GameProfile;
        static createOfflinePlayerUUID(username: string): $UUID;
        static uuidFromIntArray(bits: number[]): $UUID;
        static uuidToByteArray(uuid: $UUID_): number[];
        static uuidToIntArray(uuid: $UUID_): number[];
        static CODEC_SET: $Codec<$Set<$UUID>>;
        static AUTHLIB_CODEC: $Codec<$UUID>;
        static CODEC: $Codec<$UUID>;
        static CODEC_LINKED_SET: $Codec<$Set<$UUID>>;
        static UUID_BYTES: number;
        static STRING_CODEC: $Codec<$UUID>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $UUID>;
        static LENIENT_CODEC: $Codec<$UUID>;
    }
    export class $FrontAndTop extends $Enum<$FrontAndTop> implements $StringRepresentable {
        static fromFrontAndTop(front: $Direction_, top: $Direction_): $FrontAndTop;
        getSerializedName(): string;
        static values(): $FrontAndTop[];
        static valueOf(arg0: string): $FrontAndTop;
        top(): $Direction;
        front(): $Direction;
        getRemappedEnumConstantName(): string;
        static UP_SOUTH: $FrontAndTop;
        static DOWN_NORTH: $FrontAndTop;
        static UP_EAST: $FrontAndTop;
        static UP_NORTH: $FrontAndTop;
        static NORTH_UP: $FrontAndTop;
        static SOUTH_UP: $FrontAndTop;
        static DOWN_EAST: $FrontAndTop;
        static DOWN_WEST: $FrontAndTop;
        static UP_WEST: $FrontAndTop;
        static WEST_UP: $FrontAndTop;
        static DOWN_SOUTH: $FrontAndTop;
        static EAST_UP: $FrontAndTop;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FrontAndTop}.
     */
    export type $FrontAndTop_ = "down_east" | "down_north" | "down_south" | "down_west" | "up_east" | "up_north" | "up_south" | "up_west" | "west_up" | "east_up" | "north_up" | "south_up";
    export class $HolderGetter$Provider {
    }
    export interface $HolderGetter$Provider {
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderGetter<T>;
        get<T>(registryKey: $ResourceKey_<$Registry<T>>, key: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($HolderGetter<T>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $HolderGetter$Provider}.
     */
    export type $HolderGetter$Provider_ = ((arg0: $ResourceKey<$Registry<any>>) => ($HolderGetter<T>) | undefined);
    export class $IdMap<T> {
        static DEFAULT: number;
    }
    export interface $IdMap<T> extends $Iterable<T> {
        byId(id: number): T;
        byIdOrThrow(id: number): T;
        /**
         * @return the integer ID used to identify the given object
         */
        getIdOrThrow(value: T): number;
        size(): number;
        /**
         * @return the integer ID used to identify the given object
         */
        getId(value: T): number;
    }
    export class $BlockMath {
        static blockCenterToCorner(transformation: $Transformation): $Transformation;
        static blockCornerToCenter(transformation: $Transformation): $Transformation;
        static getUVLockTransform(transformation: $Transformation, direction: $Direction_): $Transformation;
        static VANILLA_UV_TRANSFORM_GLOBAL_TO_LOCAL: $Map<$Direction, $Transformation>;
        static VANILLA_UV_TRANSFORM_LOCAL_TO_GLOBAL: $Map<$Direction, $Transformation>;
        constructor();
    }
    export class $RegistrySetBuilder$ValueAndHolder<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$ValueAndHolder}.
     */
    export type $RegistrySetBuilder$ValueAndHolder_<T> = { value?: $RegistrySetBuilder$RegisteredValue_<any>, holder?: ($Holder$Reference<T>) | undefined,  } | [value?: $RegistrySetBuilder$RegisteredValue_<any>, holder?: ($Holder$Reference<T>) | undefined, ];
    export class $RegistryAccess$RegistryEntry<T> extends $Record {
        value(): $Registry<T>;
        key(): $ResourceKey<$Registry<T>>;
        constructor(arg0: $ResourceKey_<$Registry<T>>, arg1: $Registry<T>);
    }
    /**
     * The root level registry, essentially a registry of registries. It is also an access point, hence the name, for other dynamic registries.
     */
    export class $RegistryAccess {
        static fromRegistryOfRegistries(registryOfRegistries: $Registry<$Registry<never>>): $RegistryAccess$Frozen;
        static LOGGER: $Logger;
        static EMPTY: $RegistryAccess$Frozen;
    }
    export interface $RegistryAccess extends $HolderLookup$Provider {
        registry<E>(registryKey: $ResourceKey_<$Registry<E>>): ($Registry<E>) | undefined;
        /**
         * A variant of `#registry(ResourceKey)` that throws if the registry does not exist.
         */
        registryOrThrow<E>(registryKey: $ResourceKey_<$Registry<E>>): $Registry<E>;
        registries(): $Stream<$RegistryAccess$RegistryEntry<never>>;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        allRegistriesLifecycle(): $Lifecycle;
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        freeze(): $RegistryAccess$Frozen;
    }
    export class $BlockPos extends $Vec3i {
        static containing(x: number, arg1: number, y: number): $BlockPos;
        static containing(position: $Position): $BlockPos;
        /**
         * Offset this vector upwards by the given distance.
         */
        atY(distance: number): $BlockPos;
        getCenter(): $Vec3;
        /**
         * Offset this vector 1 unit up
         */
        immutable(): $BlockPos;
        static getFlatIndex(packedPos: number): number;
        /**
         * @deprecated
         */
        static squareOutSouthEast(pos: $BlockPos_): $Stream<$BlockPos>;
        static withinManhattan(pos: $BlockPos_, xSize: number, ySize: number, zSize: number): $Iterable<$BlockPos>;
        getBottomCenter(): $Vec3;
        static spiralAround(center: $BlockPos_, size: number, rotationDirection: $Direction_, expansionDirection: $Direction_): $Iterable<$BlockPos$MutableBlockPos>;
        /**
         * Creates an Iterable that returns all positions in the box specified by the given corners. **Coordinates must be in order**. e.g. x1 <= x2.
         * 
         * This method uses MutableBlockPos instead of regular BlockPos, which grants better performance. However, the resulting BlockPos instances can only be used inside the iteration loop (as otherwise the value will change), unless `#toImmutable()` is called. This method is ideal for searching large areas and only storing a few locations.
         * 
         * @see #betweenClosed(BlockPos, BlockPos)
         * @see #betweenClosed(int, int, int, int, int, int)
         */
        static betweenClosed(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): $Iterable<$BlockPos>;
        static betweenClosed(firstPos: $BlockPos_, secondPos: $BlockPos_): $Iterable<$BlockPos>;
        static findClosestMatch(pos: $BlockPos_, width: number, height: number, posFilter: $Predicate_<$BlockPos>): ($BlockPos) | undefined;
        static getZ(packedPos: number): number;
        static getX(packedPos: number): number;
        static asLong(x: number, y: number, z: number): number;
        asLong(): number;
        /**
         * Calculate the cross product of this and the given Vector
         */
        cross(vector: $Vec3i): $BlockPos;
        /**
         * Offset this vector 1 unit up
         */
        south(): $BlockPos;
        /**
         * Offset this vector upwards by the given distance.
         */
        south(distance: number): $BlockPos;
        /**
         * Offset this vector upwards by the given distance.
         */
        west(distance: number): $BlockPos;
        /**
         * Offset this vector 1 unit up
         */
        west(): $BlockPos;
        /**
         * Offset this vector 1 unit up
         */
        east(): $BlockPos;
        /**
         * Offset this vector upwards by the given distance.
         */
        east(distance: number): $BlockPos;
        /**
         * Offset this vector 1 unit up
         */
        north(): $BlockPos;
        /**
         * Offset this vector upwards by the given distance.
         */
        north(distance: number): $BlockPos;
        /**
         * Offset this vector 1 unit up
         */
        above(): $BlockPos;
        /**
         * Offset this vector upwards by the given distance.
         */
        above(distance: number): $BlockPos;
        /**
         * Offset this vector 1 unit up
         */
        below(): $BlockPos;
        /**
         * Offset this vector upwards by the given distance.
         */
        below(distance: number): $BlockPos;
        static randomInCube(random: $RandomSource, amount: number, center: $BlockPos_, radius: number): $Iterable<$BlockPos>;
        mutable(): $BlockPos$MutableBlockPos;
        static breadthFirstTraversal(startPos: $BlockPos_, depth: number, visitLimit: number, action: $BiConsumer_<$BlockPos, $Consumer<$BlockPos>>, predicate: $Predicate_<$BlockPos>): number;
        static betweenClosedStream(firstPos: $BlockPos_, secondPos: $BlockPos_): $Stream<$BlockPos>;
        static betweenClosedStream(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): $Stream<$BlockPos>;
        static betweenClosedStream(aabb: $AABB_): $Stream<$BlockPos>;
        static betweenClosedStream(box: $BoundingBox): $Stream<$BlockPos>;
        static randomBetweenClosed(random: $RandomSource, amount: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): $Iterable<$BlockPos>;
        /**
         * Returns a stream of positions in a box shape, ordered by closest to furthest. Returns by definition the given position as first element in the stream.
         */
        static withinManhattanStream(pos: $BlockPos_, xSize: number, ySize: number, zSize: number): $Stream<$BlockPos>;
        clampLocationWithin(pos: $Vec3_): $Vec3;
        static min(pos1: $BlockPos_, pos2: $BlockPos_): $BlockPos;
        static max(pos1: $BlockPos_, pos2: $BlockPos_): $BlockPos;
        static of(packedPos: number): $BlockPos;
        offset(dx: number, dy: number, dz: number): $BlockPos;
        /**
         * Calculate the cross product of this and the given Vector
         */
        offset(vector: $Vec3i): $BlockPos;
        static offset(pos: number, arg1: number, dx: number, dy: number): number;
        static offset(pos: number, arg1: $Direction_): number;
        /**
         * Offset this vector upwards by the given distance.
         */
        multiply(distance: number): $BlockPos;
        rotate(rotation: $Rotation_): $BlockPos;
        /**
         * Calculate the cross product of this and the given Vector
         */
        subtract(vector: $Vec3i): $BlockPos;
        static getY(packedPos: number): number;
        /**
         * Offsets this Vector by the given distance in the specified direction.
         */
        relative(direction: $Direction_, distance: number): $BlockPos;
        relative(direction: $Direction_): $BlockPos;
        relative(axis: $Direction$Axis_, amount: number): $BlockPos;
        static ZERO: $BlockPos;
        static CODEC: $Codec<$BlockPos>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockPos>;
        static PACKED_Y_LENGTH: number;
        constructor(x: number, y: number, z: number);
        constructor(vector: $Vec3i);
        get center(): $Vec3;
        get bottomCenter(): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $BlockPos}.
     */
    export type $BlockPos_ = [x: number, y: number, z: number, ];
    export class $HolderSet$Named<T> extends $HolderSet$ListBacked<T> {
        key(): $TagKey<T>;
    }
    export class $RegistrySetBuilder$RegistryStub<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$RegistryStub}.
     */
    export type $RegistrySetBuilder$RegistryStub_<T> = { key?: $ResourceKey_<$Registry<any>>, lifecycle?: $Lifecycle, bootstrap?: $RegistrySetBuilder$RegistryBootstrap_<any>,  } | [key?: $ResourceKey_<$Registry<any>>, lifecycle?: $Lifecycle, bootstrap?: $RegistrySetBuilder$RegistryBootstrap_<any>, ];
    export class $HolderSet$Direct<T> extends $HolderSet$ListBacked<T> {
    }
    export class $MappedRegistry<T> extends $BaseMappedRegistry<T> implements $WritableRegistry<T>, $MappedRegistryAccessor<any> {
        /**
         * @deprecated
         */
        unfreeze(): void;
        createRegistrationLookup(): $HolderGetter<T>;
        /**
         * @return whether this registry should be synced to clients
         */
        isEmpty(): boolean;
        register(arg0: number, arg1: $ResourceKey_<T>, arg2: T, arg3: $RegistrationInfo_): $Holder$Reference<T>;
        register(key: $ResourceKey_<T>, value: T, registrationInfo: $RegistrationInfo_): $Holder$Reference<T>;
        neoforge$getRegistrationInfos(): $Map<$ResourceKey<T>, $RegistrationInfo>;
        unregisteredIntrusiveHolders: $Map<T, $Holder$Reference<T>>;
        constructor(key: $ResourceKey_<$Registry<T>>, registryLifecycle: $Lifecycle);
        constructor(key: $ResourceKey_<$Registry<T>>, registryLifecycle: $Lifecycle, hasIntrusiveHolders: boolean);
        get empty(): boolean;
    }
    export class $RegistrySetBuilder$RegistryBootstrap<T> {
    }
    export interface $RegistrySetBuilder$RegistryBootstrap<T> {
        run(context: $BootstrapContext<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$RegistryBootstrap}.
     */
    export type $RegistrySetBuilder$RegistryBootstrap_<T> = ((arg0: $BootstrapContext<T>) => void);
    export class $Direction$Axis extends $Enum<$Direction$Axis> implements $StringRepresentable, $Predicate<$Direction> {
        choose(x: number, y: number, z: number): number;
        choose(x: number, arg1: number, y: number): number;
        /**
         * @return the Axis specified by the given name or `null` if no such Axis exists
         */
        static byName(name: string): $Direction$Axis;
        /**
         * @return whether this Axis is on the horizontal plane (true for X and Z)
         */
        isHorizontal(): boolean;
        getSerializedName(): string;
        /**
         * @return whether this Axis is on the horizontal plane (true for X and Z)
         */
        isVertical(): boolean;
        /**
         * @return this Axis' Plane (VERTICAL for Y, HORIZONTAL for X and Z)
         */
        getPlane(): $Direction$Plane;
        static getRandom(random: $RandomSource): $Direction$Axis;
        getName(): string;
        static values(): $Direction$Axis[];
        test(direction: $Direction_ | null): boolean;
        /**
         * @return the Axis specified by the given name or `null` if no such Axis exists
         */
        static valueOf(name: string): $Direction$Axis;
        getRemappedEnumConstantName(): string;
        or(arg0: $Predicate_<$Direction>): $Predicate<$Direction>;
        negate(): $Predicate<$Direction>;
        and(arg0: $Predicate_<$Direction>): $Predicate<$Direction>;
        static CODEC: $StringRepresentable$EnumCodec<$Direction$Axis>;
        static X: $Direction$Axis;
        static Y: $Direction$Axis;
        static Z: $Direction$Axis;
        static VALUES: $Direction$Axis[];
        get horizontal(): boolean;
        get serializedName(): string;
        get vertical(): boolean;
        get plane(): $Direction$Plane;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Direction$Axis}.
     */
    export type $Direction$Axis_ = "x" | "y" | "z";
    export class $RegistrySetBuilder$BuildState extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$BuildState}.
     */
    export type $RegistrySetBuilder$BuildState_ = { lookup?: $RegistrySetBuilder$UniversalLookup, owner?: $RegistrySetBuilder$UniversalOwner, errors?: $List_<$RuntimeException>, registeredValues?: $Map_<$ResourceKey_<never>, $RegistrySetBuilder$RegisteredValue_<never>>, registries?: $Map_<$ResourceLocation_, $HolderGetter<never>>,  } | [lookup?: $RegistrySetBuilder$UniversalLookup, owner?: $RegistrySetBuilder$UniversalOwner, errors?: $List_<$RuntimeException>, registeredValues?: $Map_<$ResourceKey_<never>, $RegistrySetBuilder$RegisteredValue_<never>>, registries?: $Map_<$ResourceLocation_, $HolderGetter<never>>, ];
    export class $DefaultedMappedRegistry<T> extends $MappedRegistry<T> implements $DefaultedRegistry<T> {
        getDefaultKey(): $ResourceLocation;
        unregisteredIntrusiveHolders: $Map<T, $Holder$Reference<T>>;
        constructor(defaultKey: string, key: $ResourceKey_<$Registry<T>>, registryLifecycle: $Lifecycle, hasIntrusiveHolders: boolean);
        get defaultKey(): $ResourceLocation;
    }
    export class $Holder$Kind extends $Enum<$Holder$Kind> {
        static values(): $Holder$Kind[];
        static valueOf(arg0: string): $Holder$Kind;
        static REFERENCE: $Holder$Kind;
        static DIRECT: $Holder$Kind;
    }
    /**
     * Values that may be interpreted as {@link $Holder$Kind}.
     */
    export type $Holder$Kind_ = "reference" | "direct";
    export class $RegistrySynchronization$PackedRegistryEntry extends $Record {
        data(): ($Tag) | undefined;
        id(): $ResourceLocation;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RegistrySynchronization$PackedRegistryEntry>;
        constructor(arg0: $ResourceLocation_, arg1: ($Tag_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $RegistrySynchronization$PackedRegistryEntry}.
     */
    export type $RegistrySynchronization$PackedRegistryEntry_ = { id?: $ResourceLocation_, data?: ($Tag_) | undefined,  } | [id?: $ResourceLocation_, data?: ($Tag_) | undefined, ];
    export class $RegistryAccess$ImmutableRegistryAccess implements $RegistryAccess {
        /**
         * Get the registry owned by this registry access by the given key. If it doesn't exist, the default registry of registries is queried instead, which contains static registries such as blocks.
         * The returned registry can not guarantee that it is writable here, so the return type is widened to `Registry` instead.
         */
        registry<E>(registryKey: $ResourceKey_<$Registry<E>>): ($Registry<E>) | undefined;
        registries(): $Stream<$RegistryAccess$RegistryEntry<never>>;
        /**
         * A variant of `#registry(ResourceKey)` that throws if the registry does not exist.
         */
        registryOrThrow<E>(registryKey: $ResourceKey_<$Registry<E>>): $Registry<E>;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        allRegistriesLifecycle(): $Lifecycle;
        /**
         * Get the registry owned by this registry access by the given key. If it doesn't exist, the default registry of registries is queried instead, which contains static registries such as blocks.
         * The returned registry can not guarantee that it is writable here, so the return type is widened to `Registry` instead.
         */
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        freeze(): $RegistryAccess$Frozen;
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        asGetterLookup(): $HolderGetter$Provider;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
        /**
         * Get the registry owned by this registry access by the given key. If it doesn't exist, the default registry of registries is queried instead, which contains static registries such as blocks.
         * The returned registry can not guarantee that it is writable here, so the return type is widened to `Registry` instead.
         */
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        constructor(registries: $List_<$Registry<never>>);
        constructor(registries: $Stream<$RegistryAccess$RegistryEntry<never>>);
        constructor(registries: $Map_<$ResourceKey_<$Registry<never>>, $Registry<never>>);
    }
    export class $Cursor3D {
        nextX(): number;
        nextZ(): number;
        nextY(): number;
        advance(): boolean;
        getNextType(): number;
        static TYPE_CORNER: number;
        static TYPE_INSIDE: number;
        static TYPE_FACE: number;
        static TYPE_EDGE: number;
        constructor(originX: number, originY: number, originZ: number, endX: number, endY: number, endZ: number);
        get nextType(): number;
    }
    export class $Direction$Plane extends $Enum<$Direction$Plane> implements $Iterable<$Direction>, $Predicate<$Direction> {
        getRandomDirection(random: $RandomSource): $Direction;
        getRandomAxis(random: $RandomSource): $Direction$Axis;
        shuffledCopy(random: $RandomSource): $List<$Direction>;
        length(): number;
        static values(): $Direction$Plane[];
        test(direction: $Direction_ | null): boolean;
        static valueOf(arg0: string): $Direction$Plane;
        iterator(): $Iterator<$Direction>;
        stream(): $Stream<$Direction>;
        spliterator(): $Spliterator<$Direction>;
        forEach(arg0: $Consumer_<$Direction>): void;
        or(arg0: $Predicate_<$Direction>): $Predicate<$Direction>;
        negate(): $Predicate<$Direction>;
        and(arg0: $Predicate_<$Direction>): $Predicate<$Direction>;
        static VERTICAL: $Direction$Plane;
        static HORIZONTAL: $Direction$Plane;
        [Symbol.iterator](): Iterator<$Direction>
    }
    /**
     * Values that may be interpreted as {@link $Direction$Plane}.
     */
    export type $Direction$Plane_ = "horizontal" | "vertical";
    export class $BlockBox extends $Record implements $Iterable<$BlockPos> {
        aabb(): $AABB;
        sizeY(): number;
        sizeX(): number;
        sizeZ(): number;
        isBlock(): boolean;
        extend(direction: $Direction_, amount: number): $BlockBox;
        min(): $BlockPos;
        max(): $BlockPos;
        iterator(): $Iterator<$BlockPos>;
        static of(pos1: $BlockPos_, pos2: $BlockPos_): $BlockBox;
        static of(pos: $BlockPos_): $BlockBox;
        offset(vector: $Vec3i): $BlockBox;
        contains(pos: $BlockPos_): boolean;
        include(pos: $BlockPos_): $BlockBox;
        move(direction: $Direction_, amount: number): $BlockBox;
        spliterator(): $Spliterator<$BlockPos>;
        forEach(arg0: $Consumer_<$BlockPos>): void;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockBox>;
        constructor(min: $BlockPos_, max: $BlockPos_);
        [Symbol.iterator](): Iterator<$BlockPos>
        get block(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBox}.
     */
    export type $BlockBox_ = { min?: $BlockPos_, max?: $BlockPos_,  } | [min?: $BlockPos_, max?: $BlockPos_, ];
    export class $Holder<T> {
        static direct<T>(value: T): $Holder<T>;
    }
    export interface $Holder<T> extends $IHolderExtension<T> {
        /**
         * Test if a tag matches the object this holder holds.
         */
        isTag(location: $ResourceLocation_): boolean;
        unwrapKey(): ($ResourceKey<T>) | undefined;
        isBound(): boolean;
        getRegisteredName(): string;
        canSerializeIn(owner: $HolderOwner<T>): boolean;
        value(): T;
        kind(): $Holder$Kind;
        unwrap(): $Either<$ResourceKey<T>, T>;
        /**
         * Test if the holder holds an object registered with given resource location.
         */
        is(location: $ResourceLocation_): boolean;
        /**
         * Tests the resource key held by the holder using a predicate.
         */
        test(predicate: $Predicate_<$ResourceKey<T>>): boolean;
        tags(): $Stream<$TagKey<T>>;
        get bound(): boolean;
        get registeredName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Holder}.
     */
    export type $Holder_<T> = RegistryTypes.ResolveObject<T>;
    export class $Rotations {
        /**
         * @return the X axis rotation
         */
        getZ(): number;
        /**
         * @return the X axis rotation
         */
        getX(): number;
        /**
         * @return the X axis rotation
         */
        getWrappedZ(): number;
        /**
         * @return the X axis rotation
         */
        getWrappedX(): number;
        /**
         * @return the X axis rotation
         */
        getWrappedY(): number;
        save(): $ListTag;
        /**
         * @return the X axis rotation
         */
        getY(): number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Rotations>;
        constructor(tag: $ListTag_);
        constructor(x: number, y: number, z: number);
        get z(): number;
        get x(): number;
        get wrappedZ(): number;
        get wrappedX(): number;
        get wrappedY(): number;
        get y(): number;
    }
    export class $HolderLookup<T> {
    }
    export interface $HolderLookup<T> extends $HolderGetter<T> {
        listTagIds(): $Stream<$TagKey<T>>;
        listTags(): $Stream<$HolderSet$Named<T>>;
        listElementIds(): $Stream<$ResourceKey<T>>;
        listElements(): $Stream<$Holder$Reference<T>>;
    }
    export class $HolderOwner<T> {
    }
    export interface $HolderOwner<T> {
        canSerializeIn(owner: $HolderOwner<T>): boolean;
    }
    export class $Cloner<T> {
        clone(object: T, lookupProvider1: $HolderLookup$Provider, lookupProvider2: $HolderLookup$Provider): T;
    }
    export class $HolderLookup$RegistryLookup<T> {
    }
    export interface $HolderLookup$RegistryLookup<T> extends $HolderLookup<T>, $HolderOwner<T> {
        registryLifecycle(): $Lifecycle;
        filterFeatures(enabledFeatures: $FeatureFlagSet): $HolderLookup$RegistryLookup<T>;
        filterElements(predicate: $Predicate_<T>): $HolderLookup$RegistryLookup<T>;
        key(): $ResourceKey<$Registry<T>>;
        getData<A>(arg0: $DataMapType<T, A>, arg1: $ResourceKey_<T>): A;
    }
    export class $RegistrySynchronization {
        static packRegistries(ops: $DynamicOps<$Tag_>, registryAccess: $RegistryAccess, packs: $Set_<$KnownPack_>, packetSender: $BiConsumer_<$ResourceKey<$Registry<never>>, $List<$RegistrySynchronization$PackedRegistryEntry>>): void;
        static networkSafeRegistries(registryAccess: $LayeredRegistryAccess<$RegistryLayer_>): $Stream<$RegistryAccess$RegistryEntry<never>>;
        static networkedRegistries(registryAccess: $LayeredRegistryAccess<$RegistryLayer_>): $Stream<$RegistryAccess$RegistryEntry<never>>;
        static NETWORKABLE_REGISTRIES: $Set<$ResourceKey<$Registry<never>>>;
        constructor();
    }
    /**
     * Used to convert between chunk positions (referred to here as sections, from `LevelChunkSection`), block positions, and quart positions.
     * The latter is used to query biomes from a noise biome source.
     */
    export class $QuartPos {
        static toSection(value: number): number;
        static fromSection(value: number): number;
        static toBlock(value: number): number;
        static fromBlock(value: number): number;
        static quartLocal(value: number): number;
        static SIZE: number;
        static BITS: number;
        static MASK: number;
    }
    export class $SectionPos extends $Vec3i {
        static aroundAndAtBlockPos(pos: number, arg1: $LongConsumer_): void;
        static aroundAndAtBlockPos(x: number, y: number, z: number, consumer: $LongConsumer_): void;
        static aroundAndAtBlockPos(pos: $BlockPos_, consumer: $LongConsumer_): void;
        center(): $BlockPos;
        static asLong(blockPos: $BlockPos_): number;
        asLong(): number;
        static asLong(x: number, y: number, z: number): number;
        static sectionToBlockCoord(blockCoord: number): number;
        static sectionToBlockCoord(pos: number, offset: number): number;
        static blockToSectionCoord(blockCoord: number): number;
        static blockToSectionCoord(coord: number): number;
        static sectionRelative(blockCoord: number): number;
        static aroundChunk(chunkPos: $ChunkPos, x: number, y: number, z: number): $Stream<$SectionPos>;
        relativeToBlockX(x: number): number;
        static blockToSection(levelPos: number): number;
        static sectionRelativePos(pos: $BlockPos_): number;
        static sectionRelativeX(x: number): number;
        static sectionRelativeY(x: number): number;
        static getZeroNode(levelPos: number): number;
        static getZeroNode(x: number, z: number): number;
        relativeToBlockZ(x: number): number;
        static sectionRelativeZ(x: number): number;
        static posToSectionCoord(coord: number): number;
        blocksInside(): $Stream<$BlockPos>;
        relativeToBlockY(x: number): number;
        relativeToBlockPos(pos: number): $BlockPos;
        minBlockX(): number;
        minBlockY(): number;
        maxBlockZ(): number;
        static bottomOf(chunk: $ChunkAccess): $SectionPos;
        minBlockZ(): number;
        maxBlockX(): number;
        maxBlockY(): number;
        static cube(center: $SectionPos, radius: number): $Stream<$SectionPos>;
        static betweenClosedStream(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): $Stream<$SectionPos>;
        static of(chunkPos: $ChunkPos, y: number): $SectionPos;
        static of(pos: $BlockPos_): $SectionPos;
        static of(chunkX: number, chunkY: number, chunkZ: number): $SectionPos;
        static of(packed: number): $SectionPos;
        static of(position: $Position): $SectionPos;
        static of(entity: $EntityAccess): $SectionPos;
        offset(chunkX: number, chunkY: number, chunkZ: number): $SectionPos;
        static offset(packed: number, arg1: number, dx: number, dy: number): number;
        static offset(packed: number, arg1: $Direction_): number;
        static x(packed: number): number;
        x(): number;
        static z(packed: number): number;
        z(): number;
        static y(packed: number): number;
        y(): number;
        origin(): $BlockPos;
        chunk(): $ChunkPos;
        static ZERO: $Vec3i;
        static SECTION_MASK: number;
        static CODEC: $Codec<$Vec3i>;
        static SECTION_SIZE: number;
        static SECTION_HALF_SIZE: number;
        static SECTION_MAX_INDEX: number;
        static SECTION_BITS: number;
    }
    export class $RegistrySetBuilder$EmptyTagLookupWrapper<T> extends $RegistrySetBuilder$EmptyTagRegistryLookup<T> implements $HolderLookup$RegistryLookup$Delegate<T> {
    }
    export class $RegistrySetBuilder$UniversalOwner implements $HolderOwner<$Object> {
        canSerializeIn(arg0: $HolderOwner<$Object>): boolean;
    }
    export class $HolderGetter<T> {
    }
    export interface $HolderGetter<T> {
        getOrThrow(tagKey: $TagKey_<T>): $HolderSet$Named<T>;
        getOrThrow(resourceKey: $ResourceKey_<T>): $Holder$Reference<T>;
        get(tagKey: $TagKey_<T>): ($HolderSet$Named<T>) | undefined;
        get(resourceKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
    }
    export class $GlobalPos extends $Record {
        static of(dimension: $ResourceKey_<$Level>, pos: $BlockPos_): $GlobalPos;
        pos(): $BlockPos;
        dimension(): $ResourceKey<$Level>;
        static CODEC: $Codec<$GlobalPos>;
        static MAP_CODEC: $MapCodec<$GlobalPos>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $GlobalPos>;
        constructor(dimension: $ResourceKey_<$Level>, pos: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $GlobalPos}.
     */
    export type $GlobalPos_ = { dimension?: $ResourceKey_<$Level>, pos?: $BlockPos_,  } | [dimension?: $ResourceKey_<$Level>, pos?: $BlockPos_, ];
    export class $RegistryAccess$1FrozenAccess extends $RegistryAccess$ImmutableRegistryAccess implements $RegistryAccess$Frozen {
    }
    export class $Position {
    }
    export interface $Position {
        x(): number;
        z(): number;
        y(): number;
    }
    export class $HolderSet$ListBacked<T> implements $HolderSet<T> {
        canSerializeIn(arg0: $HolderOwner<T>): boolean;
        getRandomElement(arg0: $RandomSource): ($Holder<T>) | undefined;
        size(): number;
        get(arg0: number): $Holder<T>;
        iterator(): $Iterator<$Holder<T>>;
        stream(): $Stream<$Holder<T>>;
        spliterator(): $Spliterator<$Holder<T>>;
        forEach(arg0: $Consumer_<T>): void;
        serializationType(): $IHolderSetExtension$SerializationType;
        addInvalidationListener(arg0: $Runnable_): void;
        constructor();
        [Symbol.iterator](): Iterator<$Holder<T>>
    }
    export class $RegistrationInfo extends $Record {
        lifecycle(): $Lifecycle;
        knownPackInfo(): ($KnownPack) | undefined;
        static BUILT_IN: $RegistrationInfo;
        constructor(arg0: ($KnownPack_) | undefined, arg1: $Lifecycle);
    }
    /**
     * Values that may be interpreted as {@link $RegistrationInfo}.
     */
    export type $RegistrationInfo_ = { knownPackInfo?: ($KnownPack_) | undefined, lifecycle?: $Lifecycle,  } | [knownPackInfo?: ($KnownPack_) | undefined, lifecycle?: $Lifecycle, ];
    export class $Cloner$Factory {
        cloner<T>(registryKey: $ResourceKey_<$Registry<T>>): $Cloner<T>;
        addCodec<T>(registryKey: $ResourceKey_<$Registry<T>>, codec: $Codec<T>): $Cloner$Factory;
        constructor();
    }
    export class $IdMapper<T> implements $IdMap<T> {
        addMapping(key: T, value: number): void;
        byId(id: number): T;
        size(): number;
        add(key: T): void;
        iterator(): $Iterator<T>;
        contains(id: number): boolean;
        /**
         * @return the integer ID used to identify the given object
         */
        getId(value: T): number;
        byIdOrThrow(id: number): T;
        /**
         * @return the integer ID used to identify the given object
         */
        getIdOrThrow(value: T): number;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        constructor();
        constructor(expectedSize: number);
        [Symbol.iterator](): Iterator<T>
    }
    export class $Direction$AxisDirection extends $Enum<$Direction$AxisDirection> {
        opposite(): $Direction$AxisDirection;
        getName(): string;
        static values(): $Direction$AxisDirection[];
        static valueOf(arg0: string): $Direction$AxisDirection;
        /**
         * @return the offset for this AxisDirection. 1 for POSITIVE, -1 for NEGATIVE
         */
        getStep(): number;
        static POSITIVE: $Direction$AxisDirection;
        static NEGATIVE: $Direction$AxisDirection;
        get step(): number;
    }
    /**
     * Values that may be interpreted as {@link $Direction$AxisDirection}.
     */
    export type $Direction$AxisDirection_ = "positive" | "negative";
    export class $RegistrySetBuilder$PatchedRegistries extends $Record {
        full(): $HolderLookup$Provider;
        patches(): $HolderLookup$Provider;
        constructor(full: $HolderLookup$Provider, patches: $HolderLookup$Provider);
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$PatchedRegistries}.
     */
    export type $RegistrySetBuilder$PatchedRegistries_ = { full?: $HolderLookup$Provider, patches?: $HolderLookup$Provider,  } | [full?: $HolderLookup$Provider, patches?: $HolderLookup$Provider, ];
    export class $Direction extends $Enum<$Direction> implements $StringRepresentable {
        /**
         * @return the index of this horizontal facing (0-3). The order is S-W-N-E
         */
        getZ(): number;
        /**
         * @return the index of this horizontal facing (0-3). The order is S-W-N-E
         */
        getX(): number;
        /**
         * @return the index of this horizontal facing (0-3). The order is S-W-N-E
         */
        getY(): number;
        static getNearest(ois: $Vec3_): $Direction;
        static getNearest(x: number, arg1: number, y: number): $Direction;
        static getNearest(x: number, y: number, z: number): $Direction;
        /**
         * @return the Direction specified by the given name or null if no such Direction exists
         */
        static byName(name: string | null): $Direction;
        /**
         * @return the Direction corresponding to the given horizontal index (0-3). Out of bounds values are wrapped around. The order is S-W-N-E.
         * @see #get2DDataValue
         */
        static from3DDataValue(horizontalIndex: number): $Direction;
        /**
         * Rotate this Direction around the Y axis clockwise (NORTH => EAST => SOUTH => WEST => NORTH)
         */
        getClockWise(): $Direction;
        getClockWise(axis: $Direction$Axis_): $Direction;
        /**
         * @return the Direction corresponding to the given horizontal index (0-3). Out of bounds values are wrapped around. The order is S-W-N-E.
         * @see #get2DDataValue
         */
        static from2DDataValue(horizontalIndex: number): $Direction;
        /**
         * @return the index of this horizontal facing (0-3). The order is S-W-N-E
         */
        getIndex(): number;
        isFacingAngle(degrees: number): boolean;
        static getFacingAxis(entity: $Entity, axis: $Direction$Axis_): $Direction;
        /**
         * @return the index of this horizontal facing (0-3). The order is S-W-N-E
         */
        getHorizontalIndex(): number;
        static allShuffled(random: $RandomSource): $Collection<$Direction>;
        /**
         * Gets the `Direction` values for the provided entity's
         * looking direction. Dependent on yaw and pitch of entity looking.
         */
        static orderedByNearest(entity: $Entity): $Direction[];
        /**
         * @return the angle in degrees corresponding to this Direction.
         * @see #fromYRot
         */
        getPitch(): number;
        /**
         * Rotate this Direction around the Y axis clockwise (NORTH => EAST => SOUTH => WEST => NORTH)
         */
        getOpposite(): $Direction;
        getAxis(): $Direction$Axis;
        getAxisDirection(): $Direction$AxisDirection;
        /**
         * @return the normalized Vector that points in the direction of this Direction.
         */
        getNormal(): $Vec3i;
        static fromAxisAndDirection(axis: $Direction$Axis_, axisDirection: $Direction$AxisDirection_): $Direction;
        getSerializedName(): string;
        getRotation(): $Quaternionf;
        getCounterClockWise(axis: $Direction$Axis_): $Direction;
        /**
         * Rotate this Direction around the Y axis clockwise (NORTH => EAST => SOUTH => WEST => NORTH)
         */
        getCounterClockWise(): $Direction;
        /**
         * @return the angle in degrees corresponding to this Direction.
         * @see #fromYRot
         */
        getYaw(): number;
        static fromDelta(x: number, y: number, z: number): $Direction;
        static getRandom(random: $RandomSource): $Direction;
        getName(): string;
        static get(axisDirection: $Direction$AxisDirection_, axis: $Direction$Axis_): $Direction;
        static values(): $Direction[];
        /**
         * @return the Direction specified by the given name or null if no such Direction exists
         */
        static valueOf(name: string): $Direction;
        static stream(): $Stream<$Direction>;
        step(): $Vector3f;
        static rotate(matrix: $Matrix4f, direction: $Direction_): $Direction;
        /**
         * @return the Direction corresponding to the given angle in degrees (0-360). Out of bounds values are wrapped around. An angle of 0 is SOUTH, an angle of 90 would be WEST.
         */
        static fromYRot(angle: number): $Direction;
        getRemappedEnumConstantName(): string;
        static DOWN: $Direction;
        static CODEC: $StringRepresentable$EnumCodec<$Direction>;
        static NORTH: $Direction;
        static WEST: $Direction;
        static VERTICAL_CODEC: $Codec<$Direction>;
        static BY_ID: $IntFunction<$Direction>;
        static UP: $Direction;
        static SOUTH: $Direction;
        static EAST: $Direction;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Direction>;
        get z(): number;
        get x(): number;
        get y(): number;
        get index(): number;
        get horizontalIndex(): number;
        get pitch(): number;
        get opposite(): $Direction;
        get axis(): $Direction$Axis;
        get axisDirection(): $Direction$AxisDirection;
        get normal(): $Vec3i;
        get serializedName(): string;
        get rotation(): $Quaternionf;
        get yaw(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Direction}.
     */
    export type $Direction_ = "down" | "up" | "north" | "south" | "west" | "east";
    export class $BlockPos$MutableBlockPos extends $BlockPos {
        setZ(x: number): $BlockPos$MutableBlockPos;
        setX(x: number): $BlockPos$MutableBlockPos;
        setY(x: number): $BlockPos$MutableBlockPos;
        setWithOffset(pos: $Vec3i, offset: $Vec3i): $BlockPos$MutableBlockPos;
        setWithOffset(pos: $Vec3i, direction: $Direction_): $BlockPos$MutableBlockPos;
        setWithOffset(vector: $Vec3i, offsetX: number, offsetY: number, offsetZ: number): $BlockPos$MutableBlockPos;
        clamp(axis: $Direction$Axis_, min: number, max: number): $BlockPos$MutableBlockPos;
        set(x: number, arg1: number, y: number): $BlockPos$MutableBlockPos;
        set(offset: $Vec3i): $BlockPos$MutableBlockPos;
        set(x: number, y: number, z: number): $BlockPos$MutableBlockPos;
        set(packedPos: number): $BlockPos$MutableBlockPos;
        set(cycle: $AxisCycle_, x: number, y: number, z: number): $BlockPos$MutableBlockPos;
        move(offset: $Vec3i): $BlockPos$MutableBlockPos;
        move(direction: $Direction_, n: number): $BlockPos$MutableBlockPos;
        move(x: number, y: number, z: number): $BlockPos$MutableBlockPos;
        move(direction: $Direction_): $BlockPos$MutableBlockPos;
        static ZERO: $BlockPos;
        static CODEC: $Codec<$BlockPos>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockPos>;
        static PACKED_Y_LENGTH: number;
        constructor();
        constructor(x: number, y: number, z: number);
        constructor(x: number, arg1: number, y: number);
        set z(value: number);
        set x(value: number);
        set y(value: number);
    }
    export class $RegistrySetBuilder$EmptyTagLookup<T> implements $HolderGetter<T> {
        getOrThrow(tagKey: $TagKey_<T>): $HolderSet$Named<T>;
        getOrThrow(resourceKey: $ResourceKey_<T>): $Holder$Reference<T>;
    }
    export class $DefaultedRegistry<T> {
    }
    export interface $DefaultedRegistry<T> extends $Registry<T> {
        getDefaultKey(): $ResourceLocation;
        byId(arg0: number): T;
        get(arg0: $ResourceLocation_ | null): T;
        getKey(arg0: T): $ResourceLocation;
        get defaultKey(): $ResourceLocation;
    }
    export class $RegistrySetBuilder$LazyHolder<T> extends $Holder$Reference<T> {
        type: $Holder$Reference$Type;
    }
    export class $HolderSet<T> {
        /**
         * @deprecated
         */
        static emptyNamed<T>(owner: $HolderOwner<T>, key: $TagKey_<T>): $HolderSet$Named<T>;
        static empty<T>(): $HolderSet<T>;
        static direct<E, T>(holderFactory: $Function_<E, $Holder<T>>, values: $Collection_<E>): $HolderSet$Direct<T>;
        static direct<E, T>(holderFactory: $Function_<E, $Holder<T>>, ...values: E[]): $HolderSet$Direct<T>;
        static direct<T>(contents: $List_<$Holder_<T>>): $HolderSet$Direct<T>;
        static direct<T>(...contents: $Holder_<T>[]): $HolderSet$Direct<T>;
    }
    export interface $HolderSet<T> extends $Iterable<$Holder<T>>, $IHolderSetExtension<T> {
        unwrapKey(): ($TagKey<$Holder<T>>) | undefined;
        canSerializeIn(owner: $HolderOwner<$Holder_<T>>): boolean;
        getRandomElement(random: $RandomSource): ($Holder<$Holder<T>>) | undefined;
        size(): number;
        get(index: number): $Holder<$Holder<T>>;
        stream(): $Stream<$Holder<$Holder<T>>>;
        contains(holder: $Holder_<$Holder<T>>): boolean;
        unwrap(): $Either<$TagKey<$Holder<T>>, $List<$Holder<$Holder<T>>>>;
    }
    /**
     * Values that may be interpreted as {@link $HolderSet}.
     */
    export type $HolderSet_<T> = RegistryTypes.ResolveObject<T>[];
    export class $RegistrySetBuilder$1Entry<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RegistrySetBuilder$1Entry}.
     */
    export type $RegistrySetBuilder$1Entry_<T> = { lookup?: $HolderLookup$RegistryLookup<any>, opsInfo?: $RegistryOps$RegistryInfo_<any>,  } | [lookup?: $HolderLookup$RegistryLookup<any>, opsInfo?: $RegistryOps$RegistryInfo_<any>, ];
}
