import { $DataOutput, $DataInput, $InputStream, $OutputStream } from "@package/java/io";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $Encoder_, $DataResult, $DynamicOps, $MapLike, $ListBuilder, $Codec, $RecordBuilder$AbstractStringBuilder, $RecordBuilder, $Decoder_ } from "@package/com/mojang/serialization";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $UUID, $Map_, $UUID_, $List_, $Map, $Set, $AbstractList } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $DelegateDataOutput } from "@package/net/minecraft/util";
import { $BiConsumer, $Consumer, $Function_, $Function } from "@package/java/util/function";
import { $TypeInfo_ } from "@package/dev/latvian/mods/rhino/type";
import { $ReportedException, $CrashReport } from "@package/net/minecraft";
import { $BlockPos, $BlockPos_, $HolderGetter } from "@package/net/minecraft/core";
import { $Dynamic2CommandExceptionType, $DynamicCommandExceptionType, $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $IntStream, $LongStream, $Stream } from "@package/java/util/stream";
import { $Path_ } from "@package/java/nio/file";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SpecialEquality, $CustomJavaToJsWrapper } from "@package/dev/latvian/mods/rhino/util";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Enum, $RuntimeException, $Number, $StringBuilder, $Object } from "@package/java/lang";
import { $Scriptable } from "@package/dev/latvian/mods/rhino";
export * as visitors from "@package/net/minecraft/nbt/visitors";

declare module "@package/net/minecraft/nbt" {
    export class $LongArrayTag extends $CollectionTag<$LongTag> {
        getAsLongArray(): number[];
        remove(index: number): $LongTag;
        get(index: number): $LongTag;
        add(index: number, tag: $LongTag): void;
        set(index: number, tag: $LongTag): $LongTag;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $LongArrayTag;
        static TYPE: $TagType<$LongArrayTag>;
        constructor(data: number[]);
        constructor(dataSet: $LongSet);
        constructor(dataList: $List_<number>);
        get asLongArray(): number[];
    }
    export class $NbtAccounter {
        getDepth(): number;
        popDepth(): void;
        pushDepth(): void;
        static unlimitedHeap(): $NbtAccounter;
        accountBytes(bytesPerItem: number, arg1: number): void;
        /**
         * Adds the bytes to the current number of read bytes. If the number of bytes is greater than the stored quota, an exception will occur.
         * @throws RuntimeException if the number of `usage` bytes exceed the number of `quota` bytes
         */
        accountBytes(bytes: number): void;
        static create(quota: number): $NbtAccounter;
        readUTF(arg0: string): string;
        getUsage(): number;
        constructor(quota: number, arg1: number);
        get depth(): number;
        get usage(): number;
    }
    export class $NbtOps$NbtRecordBuilder extends $RecordBuilder$AbstractStringBuilder<$Tag, $CompoundTag> {
    }
    export class $IntTag extends $NumericTag {
        static valueOf(data: number): $IntTag;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $IntTag;
        static TYPE: $TagType<$IntTag>;
    }
    export class $CompoundTag implements $Tag, $CustomJavaToJsWrapper {
        getAllKeys(): $Set<string>;
        getUUID(key: string): $UUID;
        putString(key: string, value: string): void;
        getTagType(key: string): number;
        putUUID(key: string, value: $UUID_): void;
        hasUUID(key: string): boolean;
        getCompound(key: string): $CompoundTag;
        convertJavaToJs(scope: $Scriptable, target: $TypeInfo_): $Scriptable;
        static readNamedTagData(type: $TagType<never>, name: string, input: $DataInput, accounter: $NbtAccounter): $Tag;
        putIntArray(key: string, value: number[]): void;
        putLongArray(key: string, value: number[]): void;
        getLongArray(key: string): number[];
        getByteArray(key: string): number[];
        getIntArray(key: string): number[];
        remove(key: string): void;
        size(): number;
        get(key: string): $Tag;
        put(key: string, value: $Tag_): $Tag;
        getBoolean(key: string): boolean;
        putBoolean(key: string, value: boolean): void;
        getByte(key: string): number;
        putByte(key: string, value: number): void;
        getShort(key: string): number;
        putShort(key: string, value: number): void;
        getInt(key: string): number;
        putInt(key: string, value: number): void;
        getLong(key: string): number;
        putLong(key: string, value: number): void;
        getFloat(key: string): number;
        putFloat(key: string, value: number): void;
        getDouble(key: string): number;
        putDouble(key: string, value: number): void;
        isEmpty(): boolean;
        contains(key: string): boolean;
        /**
         * Returns whether the tag of the specified `key` is a particular `tagType`. If the `tagType` is `99`, all numeric tags will be checked against the type of the stored tag.
         */
        contains(key: string, tagType: number): boolean;
        /**
         * Copies all the tags of `other` into this tag, then returns itself.
         * @see #copy()
         */
        merge(other: $CompoundTag_): $CompoundTag;
        write(output: $DataOutput): void;
        accept(visitor: $TagVisitor): void;
        accept(visitor: $StreamTagVisitor): $StreamTagVisitor$ValueResult;
        getId(): number;
        getType(): $TagType<$CompoundTag>;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $CompoundTag;
        sizeInBytes(): number;
        getString(key: string): string;
        getList(key: string, tagType: number): $ListTag;
        putByteArray(key: string, value: number[]): void;
        acceptAsRoot(visitor: $StreamTagVisitor): void;
        getAsString(): string;
        static CODEC: $Codec<$CompoundTag>;
        static TYPE: $TagType<$CompoundTag>;
        tags: $Map<string, $Tag>;
        constructor();
        constructor(arg0: number);
        get allKeys(): $Set<string>;
        get empty(): boolean;
        get id(): number;
        get type(): $TagType<$CompoundTag>;
        get asString(): string;
    }
    /**
     * Values that may be interpreted as {@link $CompoundTag}.
     */
    export type $CompoundTag_ = object;
    export class $StreamTagVisitor$ValueResult extends $Enum<$StreamTagVisitor$ValueResult> {
        static values(): $StreamTagVisitor$ValueResult[];
        static valueOf(arg0: string): $StreamTagVisitor$ValueResult;
        static CONTINUE: $StreamTagVisitor$ValueResult;
        static HALT: $StreamTagVisitor$ValueResult;
        static BREAK: $StreamTagVisitor$ValueResult;
    }
    /**
     * Values that may be interpreted as {@link $StreamTagVisitor$ValueResult}.
     */
    export type $StreamTagVisitor$ValueResult_ = "continue" | "break" | "halt";
    export class $TextComponentTagVisitor implements $TagVisitor {
        visitString(tag: $StringTag): void;
        visitDouble(tag: $DoubleTag): void;
        visitFloat(tag: $FloatTag): void;
        visitByte(tag: $ByteTag): void;
        visitLong(tag: $LongTag): void;
        visitInt(tag: $IntTag): void;
        visitShort(tag: $ShortTag): void;
        visitCompound(tag: $CompoundTag_): void;
        visitList(tag: $ListTag_): void;
        visitLongArray(tag: $LongArrayTag): void;
        visitIntArray(tag: $IntArrayTag): void;
        visitByteArray(tag: $ByteArrayTag): void;
        visit(tag: $Tag_): $Component;
        visitEnd(tag: $EndTag): void;
        constructor(indentation: string);
    }
    export class $NbtOps implements $DynamicOps<$Tag> {
        getStream(tag: $Tag_): $DataResult<$Stream<$Tag>>;
        createFloat(data: number): $Tag;
        createDouble(data: number): $Tag;
        createList(data: $Stream<$Tag_>): $Tag;
        getStringValue(tag: $Tag_): $DataResult<string>;
        createByte(data: number): $Tag;
        mapBuilder(): $RecordBuilder<$Tag>;
        createInt(data: number): $Tag;
        mergeToMap(map: $Tag_, otherMap: $MapLike<$Tag_>): $DataResult<$Tag>;
        mergeToMap(arg0: $Tag_, arg1: $Map_<$Tag_, $Tag_>): $DataResult<$Tag>;
        mergeToMap(map: $Tag_, key: $Tag_, value: $Tag_): $DataResult<$Tag>;
        convertTo<U>(ops: $DynamicOps<U>, tag: $Tag_): U;
        getNumberValue(tag: $Tag_): $DataResult<$Number>;
        createByteList(data: $ByteBuffer): $Tag;
        createIntList(data: $IntStream): $Tag;
        getLongStream(tag: $Tag_): $DataResult<$LongStream>;
        createLongList(data: $LongStream): $Tag;
        mergeToList(list: $Tag_, tag: $Tag_): $DataResult<$Tag>;
        mergeToList(list: $Tag_, tags: $List_<$Tag_>): $DataResult<$Tag>;
        getIntStream(tag: $Tag_): $DataResult<$IntStream>;
        createBoolean(data: boolean): $Tag;
        createShort(data: number): $Tag;
        createNumeric(data: $Number): $Tag;
        getMapEntries(tag: $Tag_): $DataResult<$Consumer<$BiConsumer<$Tag, $Tag>>>;
        getMapValues(tag: $Tag_): $DataResult<$Stream<$Pair<$Tag, $Tag>>>;
        remove(map: $Tag_, removeKey: string): $Tag;
        empty(): $Tag;
        getByteBuffer(tag: $Tag_): $DataResult<$ByteBuffer>;
        getMap(tag: $Tag_): $DataResult<$MapLike<$Tag>>;
        createLong(data: number): $Tag;
        createString(data: string): $Tag;
        createMap(data: $Stream<$Pair<$Tag_, $Tag_>>): $Tag;
        getList(tag: $Tag_): $DataResult<$Consumer<$Consumer<$Tag>>>;
        getGeneric(arg0: $Tag_, arg1: $Tag_): $DataResult<$Tag>;
        getBooleanValue(arg0: $Tag_): $DataResult<boolean>;
        withParser<E>(arg0: $Decoder_<E>): $Function<$Tag, $DataResult<E>>;
        convertMap<U>(arg0: $DynamicOps<U>, arg1: $Tag_): U;
        getNumberValue(arg0: $Tag_, arg1: $Number): $Number;
        compressMaps(): boolean;
        mergeToPrimitive(arg0: $Tag_, arg1: $Tag_): $DataResult<$Tag>;
        listBuilder(): $ListBuilder<$Tag>;
        withDecoder<E>(arg0: $Decoder_<E>): $Function<$Tag, $DataResult<$Pair<E, $Tag>>>;
        withEncoder<E>(arg0: $Encoder_<E>): $Function<E, $DataResult<$Tag>>;
        updateGeneric(arg0: $Tag_, arg1: $Tag_, arg2: $Function_<$Tag, $Tag>): $Tag;
        convertList<U>(arg0: $DynamicOps<U>, arg1: $Tag_): U;
        get(arg0: $Tag_, arg1: string): $DataResult<$Tag>;
        update(arg0: $Tag_, arg1: string, arg2: $Function_<$Tag, $Tag>): $Tag;
        set(arg0: $Tag_, arg1: string, arg2: $Tag_): $Tag;
        emptyList(): $Tag;
        emptyMap(): $Tag;
        createMap(arg0: $Map_<$Tag_, $Tag_>): $Tag;
        static INSTANCE: $NbtOps;
    }
    export class $ByteTag extends $NumericTag {
        static valueOf(data: boolean): $ByteTag;
        static valueOf(data: number): $ByteTag;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $ByteTag;
        static ZERO: $ByteTag;
        static ONE: $ByteTag;
        static TYPE: $TagType<$ByteTag>;
    }
    export class $LongTag extends $NumericTag {
        static valueOf(data: number): $LongTag;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $LongTag;
        static TYPE: $TagType<$LongTag>;
    }
    export class $TagType$StaticSize<T extends $Tag> {
    }
    export interface $TagType$StaticSize<T extends $Tag> extends $TagType<T> {
        size(): number;
        skip(arg0: $DataInput, arg1: number, arg2: $NbtAccounter): void;
        skip(arg0: $DataInput, arg1: $NbtAccounter): void;
    }
    export class $NbtUtils {
        static compareNbt(tag: $Tag_ | null, other: $Tag_ | null, compareListTag: boolean): boolean;
        static readBlockState(blockGetter: $HolderGetter<$Block_>, tag: $CompoundTag_): $BlockState;
        static writeBlockState(state: $BlockState_): $CompoundTag;
        static writeBlockPos(pos: $BlockPos_): $Tag;
        static readBlockPos(tag: $CompoundTag_, key: string): ($BlockPos) | undefined;
        static addCurrentDataVersion(tag: $CompoundTag_): $CompoundTag;
        static createUUID(uuid: $UUID_): $IntArrayTag;
        static loadUUID(tag: $Tag_): $UUID;
        static snbtToStructure(text: string): $CompoundTag;
        static getDataVersion(tag: $CompoundTag_, defaultValue: number): number;
        static toPrettyComponent(tag: $Tag_): $Component;
        static writeFluidState(state: $FluidState): $CompoundTag;
        static prettyPrint(tag: $Tag_): string;
        static prettyPrint(tag: $Tag_, prettyPrintArray: boolean): string;
        static prettyPrint(stringBuilder: $StringBuilder, tag: $Tag_, indentLevel: number, prettyPrintArray: boolean): $StringBuilder;
        static addDataVersion(tag: $CompoundTag_, dataVersion: number): $CompoundTag;
        static structureToSnbt(tag: $CompoundTag_): string;
        static SNBT_DATA_TAG: string;
    }
    export class $NbtOps$HeterogenousListCollector implements $NbtOps$ListCollector {
    }
    export class $ListTag extends $CollectionTag<$Tag> {
        getCompound(index: number): $CompoundTag;
        getLongArray(index: number): number[];
        getIntArray(index: number): number[];
        get(index: number): $Tag;
        getShort(index: number): number;
        getInt(index: number): number;
        getFloat(index: number): number;
        getDouble(index: number): number;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $ListTag;
        getString(index: number): string;
        getList(index: number): $ListTag;
        static TYPE: $TagType<$ListTag>;
        constructor();
        constructor(arg0: number);
        constructor(list: $List_<$Tag_>, type: number);
    }
    /**
     * Values that may be interpreted as {@link $ListTag}.
     */
    export type $ListTag_ = any[];
    export class $IntTag$Cache {
    }
    export class $NbtException extends $RuntimeException {
        constructor(message: string);
    }
    export class $NbtOps$ByteListCollector implements $NbtOps$ListCollector {
    }
    export class $DoubleTag extends $NumericTag {
        static valueOf(data: number): $DoubleTag;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $DoubleTag;
        static ZERO: $DoubleTag;
        static TYPE: $TagType<$DoubleTag>;
    }
    export class $ByteTag$Cache {
    }
    export class $ByteArrayTag extends $CollectionTag<$ByteTag> {
        getAsByteArray(): number[];
        remove(index: number): $ByteTag;
        get(index: number): $ByteTag;
        add(index: number, tag: $ByteTag): void;
        set(index: number, tag: $ByteTag): $ByteTag;
        static TYPE: $TagType<$ByteArrayTag>;
        constructor(dataList: $List_<number>);
        constructor(data: number[]);
        get asByteArray(): number[];
    }
    export class $NbtOps$InitialListCollector implements $NbtOps$ListCollector {
    }
    export class $ReportedNbtException extends $ReportedException {
        constructor(arg0: $CrashReport);
    }
    export class $TagParser {
        static parseTag(text: string): $CompoundTag;
        readStruct(): $CompoundTag;
        readValue(): $Tag;
        static ERROR_EXPECTED_VALUE: $SimpleCommandExceptionType;
        static ERROR_EXPECTED_KEY: $SimpleCommandExceptionType;
        static ERROR_TRAILING_DATA: $SimpleCommandExceptionType;
        static NAME_VALUE_SEPARATOR: string;
        static AS_CODEC: $Codec<$CompoundTag>;
        static ERROR_INSERT_MIXED_LIST: $Dynamic2CommandExceptionType;
        static ERROR_INSERT_MIXED_ARRAY: $Dynamic2CommandExceptionType;
        static ERROR_INVALID_ARRAY: $DynamicCommandExceptionType;
        static ELEMENT_SEPARATOR: string;
        static LENIENT_CODEC: $Codec<$CompoundTag>;
        constructor(reader: $StringReader);
    }
    export class $FloatTag extends $NumericTag {
        static valueOf(data: number): $FloatTag;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $FloatTag;
        static ZERO: $FloatTag;
        static TYPE: $TagType<$FloatTag>;
    }
    export class $EndTag implements $Tag {
        write(output: $DataOutput): void;
        accept(visitor: $StreamTagVisitor): $StreamTagVisitor$ValueResult;
        accept(visitor: $TagVisitor): void;
        getId(): number;
        getType(): $TagType<$EndTag>;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $EndTag;
        sizeInBytes(): number;
        acceptAsRoot(visitor: $StreamTagVisitor): void;
        getAsString(): string;
        static INSTANCE: $EndTag;
        static TYPE: $TagType<$EndTag>;
        get id(): number;
        get type(): $TagType<$EndTag>;
        get asString(): string;
    }
    export class $ShortTag extends $NumericTag {
        static valueOf(data: number): $ShortTag;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $ShortTag;
        static TYPE: $TagType<$ShortTag>;
    }
    export class $SnbtPrinterTagVisitor implements $TagVisitor {
        visitString(tag: $StringTag): void;
        visitDouble(tag: $DoubleTag): void;
        visitFloat(tag: $FloatTag): void;
        visitByte(tag: $ByteTag): void;
        visitLong(tag: $LongTag): void;
        visitInt(tag: $IntTag): void;
        visitShort(tag: $ShortTag): void;
        visitCompound(tag: $CompoundTag_): void;
        visitList(tag: $ListTag_): void;
        visitLongArray(tag: $LongArrayTag): void;
        visitIntArray(tag: $IntArrayTag): void;
        visitByteArray(tag: $ByteArrayTag): void;
        visit(tag: $Tag_): string;
        visitEnd(tag: $EndTag): void;
        pathString(): string;
        constructor();
        constructor(indentation: string, depth: number, path: $List_<string>);
    }
    export class $NbtOps$IntListCollector implements $NbtOps$ListCollector {
    }
    export class $NbtIo$StringFallbackDataOutput extends $DelegateDataOutput {
        constructor(arg0: $DataOutput);
    }
    export class $TagVisitor {
    }
    export interface $TagVisitor {
        visitString(tag: $StringTag): void;
        visitDouble(tag: $DoubleTag): void;
        visitFloat(tag: $FloatTag): void;
        visitByte(tag: $ByteTag): void;
        visitLong(tag: $LongTag): void;
        visitInt(tag: $IntTag): void;
        visitShort(tag: $ShortTag): void;
        visitCompound(tag: $CompoundTag_): void;
        visitList(tag: $ListTag_): void;
        visitLongArray(tag: $LongArrayTag): void;
        visitIntArray(tag: $IntArrayTag): void;
        visitByteArray(tag: $ByteArrayTag): void;
        visitEnd(tag: $EndTag): void;
    }
    export class $NbtIo {
        static readAnyTag(input: $DataInput, accounter: $NbtAccounter): $Tag;
        static writeAnyTag(tag: $Tag_, output: $DataOutput): void;
        static parseCompressed(path: $Path_, visitor: $StreamTagVisitor, accounter: $NbtAccounter): void;
        static parseCompressed(zippedStream: $InputStream, visitor: $StreamTagVisitor, accounter: $NbtAccounter): void;
        static readCompressed(zippedStream: $InputStream, accounter: $NbtAccounter): $CompoundTag;
        static readCompressed(path: $Path_, accounter: $NbtAccounter): $CompoundTag;
        /**
         * Writes and compresses a compound tag to a GNU zipped file.
         * @see #writeCompressed(CompoundTag, File)
         */
        static writeCompressed(compoundTag: $CompoundTag_, outputStream: $OutputStream): void;
        static writeCompressed(compoundTag: $CompoundTag_, path: $Path_): void;
        static write(compoundTag: $CompoundTag_, path: $Path_): void;
        static write(compoundTag: $CompoundTag_, output: $DataOutput): void;
        /**
         * Reads a compound tag from a file. The size of the file can be infinite.
         */
        static read(input: $DataInput): $CompoundTag;
        /**
         * Reads a compound tag from a file. The size of the file is limited by the `accounter`.
         * @throws RuntimeException if the size of the file is larger than the maximum amount of bytes specified by the `accounter`
         */
        static read(input: $DataInput, accounter: $NbtAccounter): $CompoundTag;
        static read(path: $Path_): $CompoundTag;
        static parse(input: $DataInput, visitor: $StreamTagVisitor, accounter: $NbtAccounter): void;
        static writeUnnamedTag(tag: $Tag_, output: $DataOutput): void;
        static writeUnnamedTagWithFallback(tag: $Tag_, output: $DataOutput): void;
        constructor();
    }
    export class $TagTypes {
        static getType(id: number): $TagType<never>;
        constructor();
    }
    export class $StreamTagVisitor {
    }
    export interface $StreamTagVisitor {
        visitEntry(type: $TagType<never>): $StreamTagVisitor$EntryResult;
        visitEntry(type: $TagType<never>, id: string): $StreamTagVisitor$EntryResult;
        visitElement(type: $TagType<never>, size: number): $StreamTagVisitor$EntryResult;
        visitContainerEnd(): $StreamTagVisitor$ValueResult;
        visitRootEntry(type: $TagType<never>): $StreamTagVisitor$ValueResult;
        visitList(type: $TagType<never>, size: number): $StreamTagVisitor$ValueResult;
        visit(entry: number[]): $StreamTagVisitor$ValueResult;
        visit(entry: number[]): $StreamTagVisitor$ValueResult;
        visit(entry: number[]): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: string): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visitEnd(): $StreamTagVisitor$ValueResult;
    }
    export class $NbtOps$HomogenousListCollector implements $NbtOps$ListCollector {
    }
    export class $ShortTag$Cache {
    }
    export class $Tag {
        static TAG_INT: number;
        static TAG_FLOAT: number;
        static TAG_BYTE_ARRAY: number;
        static MAX_DEPTH: number;
        static OBJECT_HEADER: number;
        static TAG_INT_ARRAY: number;
        static ARRAY_HEADER: number;
        static TAG_DOUBLE: number;
        static TAG_STRING: number;
        static OBJECT_REFERENCE: number;
        static TAG_BYTE: number;
        static TAG_ANY_NUMERIC: number;
        static TAG_COMPOUND: number;
        static TAG_SHORT: number;
        static TAG_END: number;
        static TAG_LIST: number;
        static TAG_LONG_ARRAY: number;
        static STRING_SIZE: number;
        static TAG_LONG: number;
    }
    export interface $Tag {
        acceptAsRoot(visitor: $StreamTagVisitor): void;
        toString(): string;
        write(output: $DataOutput): void;
        accept(visitor: $TagVisitor): void;
        accept(visitor: $StreamTagVisitor): $StreamTagVisitor$ValueResult;
        getId(): number;
        getType(): $TagType<never>;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $Tag;
        sizeInBytes(): number;
        getAsString(): string;
        get id(): number;
        get type(): $TagType<never>;
        get asString(): string;
    }
    /**
     * Values that may be interpreted as {@link $Tag}.
     */
    export type $Tag_ = string | number | boolean | object | any[];
    export class $StreamTagVisitor$EntryResult extends $Enum<$StreamTagVisitor$EntryResult> {
        static values(): $StreamTagVisitor$EntryResult[];
        static valueOf(arg0: string): $StreamTagVisitor$EntryResult;
        static HALT: $StreamTagVisitor$EntryResult;
        static BREAK: $StreamTagVisitor$EntryResult;
        static ENTER: $StreamTagVisitor$EntryResult;
        static SKIP: $StreamTagVisitor$EntryResult;
    }
    /**
     * Values that may be interpreted as {@link $StreamTagVisitor$EntryResult}.
     */
    export type $StreamTagVisitor$EntryResult_ = "enter" | "skip" | "break" | "halt";
    export class $NbtFormatException extends $NbtException {
        constructor(arg0: string);
    }
    export class $LongTag$Cache {
    }
    export class $NbtOps$LongListCollector implements $NbtOps$ListCollector {
    }
    export class $NumericTag implements $Tag, $SpecialEquality {
        getAsByte(): number;
        getAsShort(): number;
        getAsFloat(): number;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getAsDouble(): number;
        getAsNumber(): $Number;
        getAsInt(): number;
        getAsLong(): number;
        acceptAsRoot(arg0: $StreamTagVisitor): void;
        getAsString(): string;
        get asByte(): number;
        get asShort(): number;
        get asFloat(): number;
        get asDouble(): number;
        get asNumber(): $Number;
        get asInt(): number;
        get asLong(): number;
        get asString(): string;
    }
    export class $TagType<T extends $Tag> {
        static createInvalid(id: number): $TagType<$EndTag>;
    }
    export interface $TagType<T extends $Tag> {
        getPrettyName(): string;
        parseRoot(input: $DataInput, visitor: $StreamTagVisitor, nbtAccounter: $NbtAccounter): void;
        getName(): string;
        load(input: $DataInput, accounter: $NbtAccounter): T;
        parse(input: $DataInput, visitor: $StreamTagVisitor, accounter: $NbtAccounter): $StreamTagVisitor$ValueResult;
        skip(input: $DataInput, accounter: $NbtAccounter): void;
        skip(input: $DataInput, entries: number, accounter: $NbtAccounter): void;
        isValue(): boolean;
        get prettyName(): string;
        get name(): string;
        get value(): boolean;
    }
    export class $NbtOps$ListCollector {
    }
    export interface $NbtOps$ListCollector {
    }
    export class $CollectionTag<T extends $Tag> extends $AbstractList<T> implements $Tag, $CustomJavaToJsWrapper {
        setTag(index: number, tag: $Tag_): boolean;
        convertJavaToJs(scope: $Scriptable, target: $TypeInfo_): $Scriptable;
        remove(index: number): T;
        add(index: number, tag: T): void;
        set(index: number, tag: T): T;
        getElementType(): number;
        addTag(index: number, tag: $Tag_): boolean;
        acceptAsRoot(visitor: $StreamTagVisitor): void;
        getAsString(): string;
        constructor();
        get elementType(): number;
        get asString(): string;
    }
    /**
     * Values that may be interpreted as {@link $CollectionTag}.
     */
    export type $CollectionTag_<T> = any[];
    export class $StringTag implements $Tag, $SpecialEquality {
        static quoteAndEscape(text: string): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        static valueOf(data: string): $StringTag;
        write(output: $DataOutput): void;
        accept(visitor: $TagVisitor): void;
        accept(visitor: $StreamTagVisitor): $StreamTagVisitor$ValueResult;
        getId(): number;
        getType(): $TagType<$StringTag>;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $StringTag;
        sizeInBytes(): number;
        getAsString(): string;
        static skipString(input: $DataInput): void;
        acceptAsRoot(visitor: $StreamTagVisitor): void;
        static TYPE: $TagType<$StringTag>;
        get id(): number;
        get type(): $TagType<$StringTag>;
        get asString(): string;
    }
    export class $IntArrayTag extends $CollectionTag<$IntTag> {
        getAsIntArray(): number[];
        remove(index: number): $IntTag;
        get(index: number): $IntTag;
        add(index: number, tag: $IntTag): void;
        set(index: number, tag: $IntTag): $IntTag;
        /**
         * Creates a deep copy of the value held by this tag. Primitive and string tage will return the same tag instance while all other objects will return a new tag instance with the copied data.
         */
        copy(): $IntArrayTag;
        static TYPE: $TagType<$IntArrayTag>;
        constructor(dataList: $List_<number>);
        constructor(data: number[]);
        get asIntArray(): number[];
    }
    export class $NbtAccounterException extends $NbtException {
        constructor(message: string);
    }
    export class $TagType$VariableSize<T extends $Tag> {
    }
    export interface $TagType$VariableSize<T extends $Tag> extends $TagType<T> {
        skip(arg0: $DataInput, arg1: number, arg2: $NbtAccounter): void;
    }
    export class $StringTagVisitor implements $TagVisitor {
        visitString(tag: $StringTag): void;
        visitDouble(tag: $DoubleTag): void;
        visitFloat(tag: $FloatTag): void;
        visitByte(tag: $ByteTag): void;
        visitLong(tag: $LongTag): void;
        visitInt(tag: $IntTag): void;
        visitShort(tag: $ShortTag): void;
        visitCompound(tag: $CompoundTag_): void;
        visitList(tag: $ListTag_): void;
        visitLongArray(tag: $LongArrayTag): void;
        visitIntArray(tag: $IntArrayTag): void;
        visitByteArray(tag: $ByteArrayTag): void;
        visit(tag: $Tag_): string;
        visitEnd(tag: $EndTag): void;
        constructor();
    }
}
