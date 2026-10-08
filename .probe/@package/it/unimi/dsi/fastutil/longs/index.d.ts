import { $Serializable } from "@package/java/io";
import { $Int2ByteFunction_, $Int2ShortFunction, $Int2ObjectFunction_, $Int2CharFunction, $Int2DoubleFunction_, $IntCollection, $Int2ReferenceFunction_, $Int2IntFunction_, $Int2LongFunction_, $IntBinaryOperator_ as $IntBinaryOperator_$1, $Int2CharFunction_, $Int2FloatFunction_, $Int2LongFunction, $Int2IntFunction, $Int2DoubleFunction, $Int2FloatFunction, $Int2ByteFunction, $Int2ObjectFunction, $Int2ReferenceFunction, $Int2BooleanFunction, $Int2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Byte2ReferenceFunction, $Byte2LongFunction_, $Byte2DoubleFunction, $Byte2ShortFunction, $Byte2LongFunction, $Byte2ShortFunction_, $Byte2BooleanFunction, $Byte2ByteFunction, $Byte2IntFunction_, $Byte2ObjectFunction_, $Byte2FloatFunction, $Byte2DoubleFunction_, $Byte2CharFunction, $Byte2ObjectFunction, $Byte2ByteFunction_, $Byte2CharFunction_, $Byte2ReferenceFunction_, $Byte2IntFunction, $Byte2FloatFunction_ } from "@package/it/unimi/dsi/fastutil/bytes";
import { $Hash, $Function } from "@package/it/unimi/dsi/fastutil";
import { $SortedMap, $PrimitiveIterator$OfLong, $Map, $Map$Entry, $ListIterator, $List, $SequencedCollection, $Map_, $Collection_, $Collection, $SequencedSet, $SortedSet, $Comparator, $Spliterator$OfLong, $Set, $Iterator, $AbstractCollection } from "@package/java/util";
import { $Float2LongFunction_, $Float2FloatFunction_, $Float2ShortFunction, $Float2BooleanFunction, $Float2ObjectFunction_, $Float2IntFunction, $Float2ObjectFunction, $Float2ShortFunction_, $Float2CharFunction, $Float2DoubleFunction, $Float2ReferenceFunction_, $Float2FloatFunction, $Float2IntFunction_, $Float2ReferenceFunction, $Float2CharFunction_, $Float2ByteFunction_, $Float2LongFunction, $Float2DoubleFunction_, $Float2ByteFunction } from "@package/it/unimi/dsi/fastutil/floats";
import { $LongToDoubleFunction, $LongConsumer_ as $LongConsumer_$1, $LongToIntFunction, $LongPredicate as $LongPredicate$1, $Function as $Function$1, $UnaryOperator, $LongPredicate_ as $LongPredicate_$1, $LongToIntFunction_, $BiConsumer_, $LongConsumer as $LongConsumer$1, $LongBinaryOperator as $LongBinaryOperator$1, $UnaryOperator_, $LongFunction, $LongBinaryOperator_ as $LongBinaryOperator_$1, $Consumer_, $BinaryOperator, $Predicate_, $LongUnaryOperator_ as $LongUnaryOperator_$1, $Predicate, $Consumer, $LongFunction_, $Function_, $LongUnaryOperator as $LongUnaryOperator$1, $IntBinaryOperator_, $BiFunction_ } from "@package/java/util/function";
import { $Object2LongFunction_, $Reference2ShortFunction, $Reference2FloatFunction_, $Object2ShortFunction, $Object2ObjectFunction_, $Reference2IntFunction_, $Object2ShortFunction_, $ObjectCollection, $Object2ByteFunction_, $Reference2ByteFunction_, $Object2BooleanFunction, $Object2ReferenceFunction_, $Reference2ReferenceFunction, $Reference2ObjectFunction_, $Object2CharFunction_, $Object2FloatFunction, $Reference2CharFunction, $Reference2FloatFunction, $Object2CharFunction, $Reference2DoubleFunction_, $Object2DoubleFunction, $Reference2IntFunction, $Object2IntFunction, $Object2IntFunction_, $Reference2CharFunction_, $Reference2BooleanFunction, $ObjectSortedSet, $Object2DoubleFunction_, $Object2ReferenceFunction, $Reference2DoubleFunction, $ObjectIterator, $Object2LongFunction, $Reference2LongFunction, $Reference2ShortFunction_, $Reference2ObjectFunction, $Object2FloatFunction_, $Object2ByteFunction, $Reference2ByteFunction, $Reference2ReferenceFunction_, $Reference2LongFunction_, $Object2ObjectFunction, $ObjectBidirectionalIterator, $ObjectSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $LongStream, $Stream } from "@package/java/util/stream";
import { $Double2FloatFunction, $Double2IntFunction, $Double2IntFunction_, $Double2ByteFunction_, $Double2ByteFunction, $Double2ReferenceFunction, $Double2ObjectFunction_, $Double2ShortFunction, $Double2FloatFunction_, $Double2LongFunction_, $Double2DoubleFunction_, $Double2LongFunction, $Double2DoubleFunction, $Double2ObjectFunction, $Double2BooleanFunction, $Double2CharFunction_, $Double2CharFunction, $Double2ReferenceFunction_, $Double2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Char2BooleanFunction, $Char2ObjectFunction_, $Char2LongFunction, $Char2ShortFunction_, $Char2FloatFunction, $Char2IntFunction_, $Char2DoubleFunction_, $Char2ObjectFunction, $Char2CharFunction_, $Char2IntFunction, $Char2FloatFunction_, $Char2ByteFunction_, $Char2CharFunction, $Char2ShortFunction, $Char2LongFunction_, $Char2ReferenceFunction_, $Char2DoubleFunction, $Char2ByteFunction, $Char2ReferenceFunction } from "@package/it/unimi/dsi/fastutil/chars";
import { $Boolean2FloatFunction_, $Boolean2ReferenceFunction_, $Boolean2LongFunction_, $Boolean2ShortFunction_, $Boolean2CharFunction_, $Boolean2IntFunction_, $Boolean2ObjectFunction_, $Boolean2ByteFunction_, $Boolean2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Cloneable, $Comparable, $Iterable, $Object } from "@package/java/lang";
import { $Short2IntFunction_, $Short2ReferenceFunction_, $Short2FloatFunction, $Short2ShortFunction, $Short2BooleanFunction, $Short2ByteFunction, $Short2ByteFunction_, $Short2CharFunction_, $Short2ObjectFunction, $Short2IntFunction, $Short2LongFunction, $Short2LongFunction_, $Short2FloatFunction_, $Short2DoubleFunction, $Short2ObjectFunction_, $Short2ReferenceFunction, $Short2ShortFunction_, $Short2DoubleFunction_, $Short2CharFunction } from "@package/it/unimi/dsi/fastutil/shorts";

declare module "@package/it/unimi/dsi/fastutil/longs" {
    export class $LongPredicate {
    }
    export interface $LongPredicate extends $Predicate<number>, $LongPredicate$1 {
        /**
         * @deprecated
         */
        test(arg0: number): boolean;
        /**
         * @deprecated
         */
        or(arg0: $Predicate_<number>): $Predicate<number>;
        or(arg0: $LongPredicate_$1): $LongPredicate;
        or(arg0: $LongPredicate_): $LongPredicate;
        negate(): $LongPredicate;
        and(arg0: $LongPredicate_$1): $LongPredicate;
        and(arg0: $LongPredicate_): $LongPredicate;
        /**
         * @deprecated
         */
        and(arg0: $Predicate_<number>): $Predicate<number>;
    }
    /**
     * Values that may be interpreted as {@link $LongPredicate}.
     */
    export type $LongPredicate_ = (() => void);
    export class $AbstractLongSet extends $AbstractLongCollection implements $Cloneable, $LongSet {
        remove(arg0: number): boolean;
    }
    export class $LongCollection {
    }
    export interface $LongCollection extends $Collection<number>, $LongIterable {
        longSpliterator(): $LongSpliterator;
        longIterator(): $LongIterator;
        longParallelStream(): $LongStream;
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        add(arg0: number): boolean;
        add(arg0: number): boolean;
        toArray(arg0: number[]): number[];
        iterator(): $LongIterator;
        /**
         * @deprecated
         */
        stream(): $Stream<number>;
        /**
         * @deprecated
         */
        contains(arg0: $Object): boolean;
        contains(arg0: number): boolean;
        spliterator(): $LongSpliterator;
        addAll(arg0: $LongCollection): boolean;
        removeAll(arg0: $LongCollection): boolean;
        retainAll(arg0: $LongCollection): boolean;
        containsAll(arg0: $LongCollection): boolean;
        /**
         * @deprecated
         */
        parallelStream(): $Stream<number>;
        rem(arg0: number): boolean;
        removeIf(arg0: $LongPredicate_$1): boolean;
        /**
         * @deprecated
         */
        removeIf(arg0: $Predicate_<number>): boolean;
        removeIf(arg0: $LongPredicate_): boolean;
        longStream(): $LongStream;
        /**
         * @deprecated
         */
        toLongArray(arg0: number[]): number[];
        toLongArray(): number[];
    }
    export class $AbstractLongCollection extends $AbstractCollection<number> implements $LongCollection {
        /**
         * @deprecated
         */
        add(arg0: number): boolean;
        add(arg0: number): boolean;
        toArray(arg0: number[]): number[];
        iterator(): $LongIterator;
        contains(arg0: number): boolean;
        addAll(arg0: $LongCollection): boolean;
        forEach(arg0: $LongConsumer_): void;
        removeAll(arg0: $LongCollection): boolean;
        retainAll(arg0: $LongCollection): boolean;
        containsAll(arg0: $LongCollection): boolean;
        rem(arg0: number): boolean;
        removeIf(arg0: $LongPredicate_): boolean;
        toLongArray(): number[];
        /**
         * @deprecated
         */
        toLongArray(arg0: number[]): number[];
        longSpliterator(): $LongSpliterator;
        longIterator(): $LongIterator;
        longParallelStream(): $LongStream;
        spliterator(): $LongSpliterator;
        removeIf(arg0: $LongPredicate_$1): boolean;
        longStream(): $LongStream;
        forEach(arg0: $LongConsumer_$1): void;
    }
    export class $Long2LongSortedMap$FastSortedEntrySet {
    }
    export interface $Long2LongSortedMap$FastSortedEntrySet extends $ObjectSortedSet<$Long2LongMap$Entry>, $Long2LongMap$FastEntrySet {
        fastIterator(): $ObjectBidirectionalIterator<$Long2LongMap$Entry>;
        fastIterator(arg0: $Long2LongMap$Entry): $ObjectBidirectionalIterator<$Long2LongMap$Entry>;
    }
    export class $AbstractLong2ObjectMap<V> extends $AbstractLong2ObjectFunction<V> implements $Long2ObjectMap<V>, $Serializable {
        values(): $ObjectCollection<V>;
        isEmpty(): boolean;
        putAll(arg0: $Map_<number, V>): void;
        keySet(): $LongSet;
        containsValue(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        computeIfAbsentPartial(arg0: number, arg1: $Long2ObjectFunction_<V>): V;
        remove(arg0: number, arg1: $Object): boolean;
        replace(arg0: number, arg1: V): V;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        merge(arg0: number, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        /**
         * @deprecated
         */
        entrySet(): $ObjectSet<$Map$Entry<number, V>>;
        putIfAbsent(arg0: number, arg1: V): V;
        compute(arg0: number, arg1: $BiFunction_<number, V, V>): V;
        forEach(arg0: $BiConsumer_<number, V>): void;
        computeIfAbsent(arg0: number, arg1: $LongFunction_<V>): V;
        computeIfAbsent(arg0: number, arg1: $Long2ObjectFunction_<V>): V;
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, V, V>): V;
        remove(arg0: $Object, arg1: $Object): boolean;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        replace(arg0: number, arg1: V): V;
        replaceAll(arg0: $BiFunction_<number, V, V>): void;
        merge(arg0: number, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        putIfAbsent(arg0: number, arg1: V): V;
        compute(arg0: number, arg1: $BiFunction_<number, V, V>): V;
        computeIfAbsent(arg0: number, arg1: $Function_<number, V>): V;
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, V, V>): V;
        get empty(): boolean;
    }
    export class $AbstractLong2LongSortedMap extends $AbstractLong2LongMap implements $Long2LongSortedMap {
        keySet(): $LongSortedSet;
        /**
         * @deprecated
         */
        entrySet(): $ObjectSortedSet<$Map$Entry<number, number>>;
        /**
         * @deprecated
         */
        headMap(arg0: number): $Long2LongSortedMap;
        /**
         * @deprecated
         */
        tailMap(arg0: number): $Long2LongSortedMap;
        /**
         * @deprecated
         */
        lastKey(): number;
        /**
         * @deprecated
         */
        firstKey(): number;
        /**
         * @deprecated
         */
        subMap(arg0: number, arg1: number): $Long2LongSortedMap;
        reversed(): $SortedMap<number, number>;
        putFirst(arg0: number, arg1: number): number;
        putLast(arg0: number, arg1: number): number;
        sequencedKeySet(): $SequencedSet<number>;
        sequencedValues(): $SequencedCollection<number>;
        sequencedEntrySet(): $SequencedSet<$Map$Entry<number, number>>;
        firstEntry(): $Map$Entry<number, number>;
        lastEntry(): $Map$Entry<number, number>;
        pollFirstEntry(): $Map$Entry<number, number>;
        pollLastEntry(): $Map$Entry<number, number>;
    }
    export class $Long2ObjectMap<V> {
    }
    export interface $Long2ObjectMap<V> extends $Long2ObjectFunction<V>, $Map<number, V> {
        /**
         * @deprecated
         */
        computeIfAbsentPartial(arg0: number, arg1: $Long2ObjectFunction_<V>): V;
        long2ObjectEntrySet(): $ObjectSet<$Long2ObjectMap$Entry<V>>;
        defaultReturnValue(): V;
        defaultReturnValue(arg0: V): void;
        remove(arg0: number, arg1: $Object): boolean;
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        size(): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): V;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: V): V;
        values(): $ObjectCollection<V>;
        clear(): void;
        replace(arg0: number, arg1: V): V;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        merge(arg0: number, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        /**
         * @deprecated
         */
        entrySet(): $ObjectSet<$Map$Entry<number, V>>;
        putIfAbsent(arg0: number, arg1: V): V;
        compute(arg0: number, arg1: $BiFunction_<number, V, V>): V;
        forEach(arg0: $BiConsumer_<number, V>): void;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: number, arg1: $LongFunction_<V>): V;
        computeIfAbsent(arg0: number, arg1: $Long2ObjectFunction_<V>): V;
        keySet(): $LongSet;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, V, V>): V;
    }
    export class $Long2DoubleFunction {
    }
    export interface $Long2DoubleFunction extends $Function<number, number>, $LongToDoubleFunction {
        composeInt(arg0: $Int2LongFunction_): $Int2DoubleFunction;
        andThenInt(arg0: $Double2IntFunction_): $Long2IntFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2DoubleFunction<T>;
        andThenByte(arg0: $Double2ByteFunction_): $Long2ByteFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2DoubleFunction;
        andThenLong(arg0: $Double2LongFunction_): $Long2LongFunction;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        composeLong(arg0: $Long2LongFunction_): $Long2DoubleFunction;
        andThenDouble(arg0: $Double2DoubleFunction_): $Long2DoubleFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2DoubleFunction;
        andThenChar(arg0: $Double2CharFunction_): $Long2CharFunction;
        andThenObject<T>(arg0: $Double2ObjectFunction_<T>): $Long2ObjectFunction<T>;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2DoubleFunction<T>;
        andThenShort(arg0: $Double2ShortFunction_): $Long2ShortFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2DoubleFunction;
        composeByte(arg0: $Byte2LongFunction_): $Byte2DoubleFunction;
        andThenFloat(arg0: $Double2FloatFunction_): $Long2FloatFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2DoubleFunction;
        andThenReference<T>(arg0: $Double2ReferenceFunction_<T>): $Long2ReferenceFunction<T>;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsDouble(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
    }
    /**
     * Values that may be interpreted as {@link $Long2DoubleFunction}.
     */
    export type $Long2DoubleFunction_ = ((arg0: number) => number);
    export class $LongLinkedOpenHashSet extends $AbstractLongSortedSet implements $Serializable, $Cloneable, $Hash {
        removeFirstLong(): number;
        removeLastLong(): number;
        static toSetWithExpectedSize(arg0: $LongStream, arg1: number): $LongLinkedOpenHashSet;
        addAndMoveToFirst(arg0: number): boolean;
        addAndMoveToLast(arg0: number): boolean;
        clone(): $LongLinkedOpenHashSet;
        iterator(): $LongListIterator;
        iterator(arg0: number): $LongListIterator;
        trim(arg0: number): boolean;
        trim(): boolean;
        static of(arg0: number, arg1: number): $LongLinkedOpenHashSet;
        static of(...arg0: number[]): $LongLinkedOpenHashSet;
        static of(): $LongLinkedOpenHashSet;
        static of(arg0: number): $LongLinkedOpenHashSet;
        static of(arg0: number, arg1: number, arg2: number): $LongLinkedOpenHashSet;
        static toSet(arg0: $LongStream): $LongLinkedOpenHashSet;
        ensureCapacity(arg0: number): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $Iterator<never>);
        constructor(arg0: number[], arg1: number, arg2: number, arg3: number);
        constructor(arg0: number[], arg1: number, arg2: number);
        constructor(arg0: number[], arg1: number);
        constructor(arg0: $LongCollection);
        constructor(arg0: $LongIterator, arg1: number);
        constructor(arg0: $LongIterator);
        constructor(arg0: $Iterator<never>, arg1: number);
        constructor(arg0: number);
        constructor(arg0: $LongCollection, arg1: number);
        constructor(arg0: number[]);
        constructor(arg0: $Collection_<number>, arg1: number);
        constructor(arg0: $Collection_<number>);
        constructor();
    }
    export class $Long2LongMap$FastEntrySet {
    }
    export interface $Long2LongMap$FastEntrySet extends $ObjectSet<$Long2LongMap$Entry> {
        fastIterator(): $ObjectIterator<$Long2LongMap$Entry>;
        fastForEach(arg0: $Consumer_<$Long2LongMap$Entry>): void;
    }
    export class $Long2LongMap$Entry {
    }
    export interface $Long2LongMap$Entry extends $Map$Entry<number, number> {
        getLongValue(): number;
        getLongKey(): number;
        /**
         * @deprecated
         */
        getValue(): number;
        /**
         * @deprecated
         */
        getKey(): number;
        setValue(arg0: number): number;
        /**
         * @deprecated
         */
        setValue(arg0: number): number;
        get longValue(): number;
        get longKey(): number;
        get key(): number;
    }
    export class $AbstractLong2ObjectSortedMap<V> extends $AbstractLong2ObjectMap<V> implements $Long2ObjectSortedMap<V> {
        keySet(): $LongSortedSet;
        /**
         * @deprecated
         */
        entrySet(): $ObjectSortedSet<$Map$Entry<number, V>>;
        /**
         * @deprecated
         */
        headMap(arg0: number): $Long2ObjectSortedMap<V>;
        /**
         * @deprecated
         */
        tailMap(arg0: number): $Long2ObjectSortedMap<V>;
        /**
         * @deprecated
         */
        lastKey(): number;
        /**
         * @deprecated
         */
        firstKey(): number;
        /**
         * @deprecated
         */
        subMap(arg0: number, arg1: number): $Long2ObjectSortedMap<V>;
        reversed(): $SortedMap<number, V>;
        putFirst(arg0: number, arg1: V): V;
        putLast(arg0: number, arg1: V): V;
        sequencedKeySet(): $SequencedSet<number>;
        sequencedValues(): $SequencedCollection<V>;
        sequencedEntrySet(): $SequencedSet<$Map$Entry<number, V>>;
        firstEntry(): $Map$Entry<number, V>;
        lastEntry(): $Map$Entry<number, V>;
        pollFirstEntry(): $Map$Entry<number, V>;
        pollLastEntry(): $Map$Entry<number, V>;
    }
    export class $LongConsumer {
    }
    export interface $LongConsumer extends $Consumer<number>, $LongConsumer$1 {
        /**
         * @deprecated
         */
        accept(arg0: number): void;
        andThen(arg0: $LongConsumer_$1): $LongConsumer;
        /**
         * @deprecated
         */
        andThen(arg0: $Consumer_<number>): $Consumer<number>;
        andThen(arg0: $LongConsumer_): $LongConsumer;
    }
    /**
     * Values that may be interpreted as {@link $LongConsumer}.
     */
    export type $LongConsumer_ = (() => void);
    export class $LongComparator {
    }
    export interface $LongComparator extends $Comparator<number> {
        /**
         * @deprecated
         */
        compare(arg0: number, arg1: number): number;
        compare(arg0: number, arg1: number): number;
        reversed(): $LongComparator;
        thenComparing(arg0: $Comparator<number>): $Comparator<number>;
        thenComparing(arg0: $LongComparator): $LongComparator;
    }
    export class $Long2ByteFunction {
    }
    export interface $Long2ByteFunction extends $Function<number, number>, $LongToIntFunction {
        composeInt(arg0: $Int2LongFunction_): $Int2ByteFunction;
        andThenInt(arg0: $Byte2IntFunction_): $Long2IntFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2ByteFunction<T>;
        andThenByte(arg0: $Byte2ByteFunction_): $Long2ByteFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2ByteFunction;
        andThenLong(arg0: $Byte2LongFunction_): $Long2LongFunction;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        composeLong(arg0: $Long2LongFunction_): $Long2ByteFunction;
        andThenDouble(arg0: $Byte2DoubleFunction_): $Long2DoubleFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2ByteFunction;
        andThenChar(arg0: $Byte2CharFunction_): $Long2CharFunction;
        andThenObject<T>(arg0: $Byte2ObjectFunction_<T>): $Long2ObjectFunction<T>;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2ByteFunction<T>;
        andThenShort(arg0: $Byte2ShortFunction_): $Long2ShortFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2ByteFunction;
        composeByte(arg0: $Byte2LongFunction_): $Byte2ByteFunction;
        andThenFloat(arg0: $Byte2FloatFunction_): $Long2FloatFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2ByteFunction;
        andThenReference<T>(arg0: $Byte2ReferenceFunction_<T>): $Long2ReferenceFunction<T>;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
    }
    /**
     * Values that may be interpreted as {@link $Long2ByteFunction}.
     */
    export type $Long2ByteFunction_ = ((arg0: number) => number);
    export class $LongUnaryOperator {
        static negation(): $LongUnaryOperator;
        static identity(): $LongUnaryOperator;
    }
    export interface $LongUnaryOperator extends $UnaryOperator<number>, $LongUnaryOperator$1 {
        /**
         * @deprecated
         */
        apply(arg0: number): number;
        apply(arg0: number): number;
        /**
         * @deprecated
         */
        applyAsLong(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LongUnaryOperator}.
     */
    export type $LongUnaryOperator_ = ((arg0: number) => number);
    export class $AbstractLong2LongMap extends $AbstractLong2LongFunction implements $Long2LongMap, $Serializable {
        mergeLong(arg0: number, arg1: number, arg2: $LongBinaryOperator_): number;
        values(): $LongCollection;
        isEmpty(): boolean;
        putAll(arg0: $Map_<number, number>): void;
        keySet(): $LongSet;
        containsValue(arg0: number): boolean;
        /**
         * @deprecated
         */
        computeIfAbsentPartial(arg0: number, arg1: $Long2LongFunction_): number;
        mergeLong(arg0: number, arg1: number, arg2: $LongBinaryOperator_$1): number;
        computeIfAbsentNullable(arg0: number, arg1: $LongFunction_<number>): number;
        remove(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        remove(arg0: $Object, arg1: $Object): boolean;
        replace(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        replace(arg0: number, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        replace(arg0: number, arg1: number): number;
        replace(arg0: number, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        merge(arg0: number, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        merge(arg0: number, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        /**
         * @deprecated
         */
        entrySet(): $ObjectSet<$Map$Entry<number, number>>;
        /**
         * @deprecated
         */
        putIfAbsent(arg0: number, arg1: number): number;
        putIfAbsent(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        compute(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        compute(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        forEach(arg0: $BiConsumer_<number, number>): void;
        computeIfAbsent(arg0: number, arg1: $LongUnaryOperator_$1): number;
        /**
         * @deprecated
         */
        computeIfAbsent(arg0: number, arg1: $Function_<number, number>): number;
        computeIfAbsent(arg0: number, arg1: $Long2LongFunction_): number;
        /**
         * @deprecated
         */
        containsValue(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        replaceAll(arg0: $BiFunction_<number, number, number>): void;
        get empty(): boolean;
    }
    export class $LongSet {
        static of(arg0: number, arg1: number): $LongSet;
        static of(): $LongSet;
        static of(...arg0: number[]): $LongSet;
        static of(arg0: number): $LongSet;
        static of(arg0: number, arg1: number, arg2: number): $LongSet;
    }
    export interface $LongSet extends $LongCollection, $Set<number> {
        remove(arg0: number): boolean;
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        add(arg0: number): boolean;
        iterator(): $LongIterator;
        /**
         * @deprecated
         */
        contains(arg0: $Object): boolean;
        spliterator(): $LongSpliterator;
        /**
         * @deprecated
         */
        rem(arg0: number): boolean;
    }
    export class $Long2ObjectMap$Entry<V> {
    }
    export interface $Long2ObjectMap$Entry<V> extends $Map$Entry<number, V> {
        getLongKey(): number;
        /**
         * @deprecated
         */
        getKey(): number;
        get longKey(): number;
        get key(): number;
    }
    export class $Long2BooleanFunction {
    }
    export interface $Long2BooleanFunction extends $Function<number, boolean>, $LongPredicate$1 {
        composeInt(arg0: $Int2LongFunction_): $Int2BooleanFunction;
        andThenInt(arg0: $Boolean2IntFunction_): $Long2IntFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2BooleanFunction<T>;
        andThenByte(arg0: $Boolean2ByteFunction_): $Long2ByteFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2BooleanFunction;
        andThenLong(arg0: $Boolean2LongFunction_): $Long2LongFunction;
        defaultReturnValue(arg0: boolean): void;
        defaultReturnValue(): boolean;
        composeLong(arg0: $Long2LongFunction_): $Long2BooleanFunction;
        andThenDouble(arg0: $Boolean2DoubleFunction_): $Long2DoubleFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2BooleanFunction;
        andThenChar(arg0: $Boolean2CharFunction_): $Long2CharFunction;
        andThenObject<T>(arg0: $Boolean2ObjectFunction_<T>): $Long2ObjectFunction<T>;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2BooleanFunction<T>;
        andThenShort(arg0: $Boolean2ShortFunction_): $Long2ShortFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2BooleanFunction;
        composeByte(arg0: $Byte2LongFunction_): $Byte2BooleanFunction;
        andThenFloat(arg0: $Boolean2FloatFunction_): $Long2FloatFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2BooleanFunction;
        andThenReference<T>(arg0: $Boolean2ReferenceFunction_<T>): $Long2ReferenceFunction<T>;
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        remove(arg0: number): boolean;
        /**
         * @deprecated
         */
        get(arg0: $Object): boolean;
        get(arg0: number): boolean;
        put(arg0: number, arg1: boolean): boolean;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: boolean): boolean;
        test(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: boolean): boolean;
        getOrDefault(arg0: number, arg1: boolean): boolean;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, boolean>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<boolean, T>): $Function$1<number, T>;
    }
    /**
     * Values that may be interpreted as {@link $Long2BooleanFunction}.
     */
    export type $Long2BooleanFunction_ = ((arg0: number) => boolean);
    export class $LongIterable {
    }
    export interface $LongIterable extends $Iterable<number> {
        longSpliterator(): $LongSpliterator;
        longIterator(): $LongIterator;
        iterator(): $LongIterator;
        spliterator(): $LongSpliterator;
        forEach(arg0: $LongConsumer_$1): void;
        /**
         * @deprecated
         */
        forEach(arg0: $Consumer_<number>): void;
        forEach(arg0: $LongConsumer_): void;
    }
    /**
     * Values that may be interpreted as {@link $LongIterable}.
     */
    export type $LongIterable_ = (() => $LongIterator);
    export class $Long2LongMap {
    }
    export interface $Long2LongMap extends $Long2LongFunction, $Map<number, number> {
        long2LongEntrySet(): $ObjectSet<$Long2LongMap$Entry>;
        /**
         * @deprecated
         */
        computeIfAbsentPartial(arg0: number, arg1: $Long2LongFunction_): number;
        mergeLong(arg0: number, arg1: number, arg2: $LongBinaryOperator_): number;
        mergeLong(arg0: number, arg1: number, arg2: $LongBinaryOperator_$1): number;
        computeIfAbsentNullable(arg0: number, arg1: $LongFunction_<number>): number;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        remove(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        remove(arg0: $Object, arg1: $Object): boolean;
        size(): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        values(): $LongCollection;
        clear(): void;
        replace(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        replace(arg0: number, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        replace(arg0: number, arg1: number): number;
        replace(arg0: number, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        merge(arg0: number, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        merge(arg0: number, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        /**
         * @deprecated
         */
        entrySet(): $ObjectSet<$Map$Entry<number, number>>;
        /**
         * @deprecated
         */
        putIfAbsent(arg0: number, arg1: number): number;
        putIfAbsent(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        compute(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        compute(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        forEach(arg0: $BiConsumer_<number, number>): void;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        computeIfAbsent(arg0: number, arg1: $LongUnaryOperator_$1): number;
        /**
         * @deprecated
         */
        computeIfAbsent(arg0: number, arg1: $Function_<number, number>): number;
        computeIfAbsent(arg0: number, arg1: $Long2LongFunction_): number;
        keySet(): $LongSet;
        /**
         * @deprecated
         */
        containsValue(arg0: $Object): boolean;
        containsValue(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, number, number>): number;
    }
    export class $Long2ObjectSortedMap<V> {
    }
    export interface $Long2ObjectSortedMap<V> extends $Long2ObjectMap<V>, $SortedMap<number, V> {
        firstLongKey(): number;
        lastLongKey(): number;
        long2ObjectEntrySet(): $ObjectSortedSet<$Long2ObjectMap$Entry<V>>;
        values(): $ObjectCollection<V>;
        /**
         * @deprecated
         */
        entrySet(): $ObjectSortedSet<$Map$Entry<number, V>>;
        keySet(): $LongSortedSet;
        comparator(): $LongComparator;
        /**
         * @deprecated
         */
        headMap(arg0: number): $Long2ObjectSortedMap<V>;
        headMap(arg0: number): $Long2ObjectSortedMap<V>;
        tailMap(arg0: number): $Long2ObjectSortedMap<V>;
        /**
         * @deprecated
         */
        tailMap(arg0: number): $Long2ObjectSortedMap<V>;
        /**
         * @deprecated
         */
        lastKey(): number;
        /**
         * @deprecated
         */
        firstKey(): number;
        subMap(arg0: number, arg1: number): $Long2ObjectSortedMap<V>;
        /**
         * @deprecated
         */
        subMap(arg0: number, arg1: number): $Long2ObjectSortedMap<V>;
    }
    export class $LongIterator {
    }
    export interface $LongIterator extends $PrimitiveIterator$OfLong {
        /**
         * @deprecated
         */
        forEachRemaining(arg0: $Consumer_<number>): void;
        forEachRemaining(arg0: $LongConsumer_): void;
        /**
         * @deprecated
         */
        next(): number;
        skip(arg0: number): number;
        nextLong(): number;
    }
    export class $Long2LongFunction {
        static identity(): $Long2LongFunction;
    }
    export interface $Long2LongFunction extends $Function<number, number>, $LongUnaryOperator$1 {
        composeInt(arg0: $Int2LongFunction_): $Int2LongFunction;
        andThenInt(arg0: $Long2IntFunction_): $Long2IntFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2LongFunction<T>;
        andThenByte(arg0: $Long2ByteFunction_): $Long2ByteFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2LongFunction;
        andThenLong(arg0: $Long2LongFunction_): $Long2LongFunction;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        composeLong(arg0: $Long2LongFunction_): $Long2LongFunction;
        andThenDouble(arg0: $Long2DoubleFunction_): $Long2DoubleFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2LongFunction;
        andThenChar(arg0: $Long2CharFunction_): $Long2CharFunction;
        andThenObject<T>(arg0: $Long2ObjectFunction_<T>): $Long2ObjectFunction<T>;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2LongFunction<T>;
        andThenShort(arg0: $Long2ShortFunction_): $Long2ShortFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2LongFunction;
        composeByte(arg0: $Byte2LongFunction_): $Byte2LongFunction;
        andThenFloat(arg0: $Long2FloatFunction_): $Long2FloatFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2LongFunction;
        andThenReference<T>(arg0: $Long2ReferenceFunction_<T>): $Long2ReferenceFunction<T>;
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        applyAsLong(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
    }
    /**
     * Values that may be interpreted as {@link $Long2LongFunction}.
     */
    export type $Long2LongFunction_ = ((arg0: number) => number);
    export class $Long2ShortFunction {
    }
    export interface $Long2ShortFunction extends $Function<number, number>, $LongToIntFunction {
        composeInt(arg0: $Int2LongFunction_): $Int2ShortFunction;
        andThenInt(arg0: $Short2IntFunction_): $Long2IntFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2ShortFunction<T>;
        andThenByte(arg0: $Short2ByteFunction_): $Long2ByteFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2ShortFunction;
        andThenLong(arg0: $Short2LongFunction_): $Long2LongFunction;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        composeLong(arg0: $Long2LongFunction_): $Long2ShortFunction;
        andThenDouble(arg0: $Short2DoubleFunction_): $Long2DoubleFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2ShortFunction;
        andThenChar(arg0: $Short2CharFunction_): $Long2CharFunction;
        andThenObject<T>(arg0: $Short2ObjectFunction_<T>): $Long2ObjectFunction<T>;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2ShortFunction<T>;
        andThenShort(arg0: $Short2ShortFunction_): $Long2ShortFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2ShortFunction;
        composeByte(arg0: $Byte2LongFunction_): $Byte2ShortFunction;
        andThenFloat(arg0: $Short2FloatFunction_): $Long2FloatFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2ShortFunction;
        andThenReference<T>(arg0: $Short2ReferenceFunction_<T>): $Long2ReferenceFunction<T>;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
    }
    /**
     * Values that may be interpreted as {@link $Long2ShortFunction}.
     */
    export type $Long2ShortFunction_ = ((arg0: number) => number);
    export class $LongList {
        static of(arg0: number, arg1: number): $LongList;
        static of(arg0: number, arg1: number, arg2: number): $LongList;
        static of(...arg0: number[]): $LongList;
        static of(arg0: number): $LongList;
        static of(): $LongList;
    }
    export interface $LongList extends $List<number>, $Comparable<$List<number>>, $LongCollection {
        setElements(arg0: number, arg1: number[]): void;
        setElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        setElements(arg0: number[]): void;
        removeLong(arg0: number): number;
        unstableSort(arg0: $LongComparator): void;
        /**
         * @deprecated
         */
        unstableSort(arg0: $Comparator<number>): void;
        addElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        addElements(arg0: number, arg1: number[]): void;
        removeElements(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        remove(arg0: number): number;
        size(arg0: number): void;
        /**
         * @deprecated
         */
        get(arg0: number): number;
        indexOf(arg0: number): number;
        /**
         * @deprecated
         */
        indexOf(arg0: $Object): number;
        getLong(arg0: number): number;
        lastIndexOf(arg0: number): number;
        /**
         * @deprecated
         */
        lastIndexOf(arg0: $Object): number;
        replaceAll(arg0: $LongUnaryOperator_): void;
        replaceAll(arg0: $LongUnaryOperator_$1): void;
        /**
         * @deprecated
         */
        replaceAll(arg0: $UnaryOperator_<number>): void;
        add(arg0: number): boolean;
        /**
         * @deprecated
         */
        add(arg0: number): boolean;
        /**
         * @deprecated
         */
        add(arg0: number, arg1: number): void;
        add(arg0: number, arg1: number): void;
        subList(arg0: number, arg1: number): $LongList;
        iterator(): $LongListIterator;
        /**
         * @deprecated
         */
        contains(arg0: $Object): boolean;
        spliterator(): $LongSpliterator;
        addAll(arg0: $LongList): boolean;
        addAll(arg0: number, arg1: $LongCollection): boolean;
        addAll(arg0: number, arg1: $LongList): boolean;
        set(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        set(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        sort(arg0: $Comparator<number>): void;
        sort(arg0: $LongComparator): void;
        listIterator(): $LongListIterator;
        listIterator(arg0: number): $LongListIterator;
        getElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    }
    export class $LongSortedSet {
    }
    export interface $LongSortedSet extends $LongSet, $SortedSet<number>, $LongBidirectionalIterable {
        firstLong(): number;
        lastLong(): number;
        iterator(arg0: number): $LongBidirectionalIterator;
        iterator(): $LongBidirectionalIterator;
        /**
         * @deprecated
         */
        last(): number;
        spliterator(): $LongSpliterator;
        /**
         * @deprecated
         */
        first(): number;
        comparator(): $LongComparator;
        subSet(arg0: number, arg1: number): $LongSortedSet;
        /**
         * @deprecated
         */
        subSet(arg0: number, arg1: number): $LongSortedSet;
        headSet(arg0: number): $LongSortedSet;
        /**
         * @deprecated
         */
        headSet(arg0: number): $LongSortedSet;
        /**
         * @deprecated
         */
        tailSet(arg0: number): $LongSortedSet;
        tailSet(arg0: number): $LongSortedSet;
    }
    export class $LongBinaryOperator {
    }
    export interface $LongBinaryOperator extends $BinaryOperator<number>, $LongBinaryOperator$1 {
        /**
         * @deprecated
         */
        apply(arg0: number, arg1: number): number;
        apply(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        applyAsLong(arg0: number, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LongBinaryOperator}.
     */
    export type $LongBinaryOperator_ = ((arg0: number, arg1: number) => number);
    export class $LongBidirectionalIterable {
    }
    export interface $LongBidirectionalIterable extends $LongIterable {
        iterator(): $LongBidirectionalIterator;
    }
    /**
     * Values that may be interpreted as {@link $LongBidirectionalIterable}.
     */
    export type $LongBidirectionalIterable_ = (() => $LongBidirectionalIterator);
    export class $Long2CharFunction {
    }
    export interface $Long2CharFunction extends $Function<number, string>, $LongToIntFunction {
        composeInt(arg0: $Int2LongFunction_): $Int2CharFunction;
        andThenInt(arg0: $Char2IntFunction_): $Long2IntFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2CharFunction<T>;
        andThenByte(arg0: $Char2ByteFunction_): $Long2ByteFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2CharFunction;
        andThenLong(arg0: $Char2LongFunction_): $Long2LongFunction;
        defaultReturnValue(arg0: string): void;
        defaultReturnValue(): string;
        composeLong(arg0: $Long2LongFunction_): $Long2CharFunction;
        andThenDouble(arg0: $Char2DoubleFunction_): $Long2DoubleFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2CharFunction;
        andThenChar(arg0: $Char2CharFunction_): $Long2CharFunction;
        andThenObject<T>(arg0: $Char2ObjectFunction_<T>): $Long2ObjectFunction<T>;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2CharFunction<T>;
        andThenShort(arg0: $Char2ShortFunction_): $Long2ShortFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2CharFunction;
        composeByte(arg0: $Byte2LongFunction_): $Byte2CharFunction;
        andThenFloat(arg0: $Char2FloatFunction_): $Long2FloatFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2CharFunction;
        andThenReference<T>(arg0: $Char2ReferenceFunction_<T>): $Long2ReferenceFunction<T>;
        /**
         * @deprecated
         */
        remove(arg0: $Object): string;
        remove(arg0: number): string;
        /**
         * @deprecated
         */
        get(arg0: $Object): string;
        get(arg0: number): string;
        put(arg0: number, arg1: string): string;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: string): string;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: string): string;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: string): string;
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, string>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<string, T>): $Function$1<number, T>;
    }
    /**
     * Values that may be interpreted as {@link $Long2CharFunction}.
     */
    export type $Long2CharFunction_ = ((arg0: number) => string);
    export class $Long2LongLinkedOpenHashMap extends $AbstractLong2LongSortedMap implements $Serializable, $Cloneable, $Hash {
        removeFirstLong(): number;
        removeLastLong(): number;
        getAndMoveToLast(arg0: number): number;
        putAndMoveToLast(arg0: number, arg1: number): number;
        long2LongEntrySet(): $Long2LongSortedMap$FastSortedEntrySet;
        putAndMoveToFirst(arg0: number, arg1: number): number;
        getAndMoveToFirst(arg0: number): number;
        clone(): $Long2LongLinkedOpenHashMap;
        trim(arg0: number): boolean;
        trim(): boolean;
        ensureCapacity(arg0: number): void;
        addTo(arg0: number, arg1: number): number;
        constructor(arg0: $Long2LongMap, arg1: number);
        constructor(arg0: $Map_<number, number>);
        constructor(arg0: $Long2LongMap);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number);
        constructor();
        constructor(arg0: $Map_<number, number>, arg1: number);
        constructor(arg0: number[], arg1: number[], arg2: number);
        constructor(arg0: number[], arg1: number[]);
    }
    export class $Long2ReferenceFunction<V> {
    }
    export interface $Long2ReferenceFunction<V> extends $Function<number, V>, $LongFunction<V> {
        composeInt(arg0: $Int2LongFunction_): $Int2ReferenceFunction<V>;
        andThenInt(arg0: $Reference2IntFunction_<V>): $Long2IntFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2ReferenceFunction<T, V>;
        andThenByte(arg0: $Reference2ByteFunction_<V>): $Long2ByteFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2ReferenceFunction<V>;
        andThenLong(arg0: $Reference2LongFunction_<V>): $Long2LongFunction;
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        composeLong(arg0: $Long2LongFunction_): $Long2ReferenceFunction<V>;
        andThenDouble(arg0: $Reference2DoubleFunction_<V>): $Long2DoubleFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2ReferenceFunction<V>;
        andThenChar(arg0: $Reference2CharFunction_<V>): $Long2CharFunction;
        andThenObject<T>(arg0: $Reference2ObjectFunction_<V, T>): $Long2ObjectFunction<T>;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2ReferenceFunction<T, V>;
        andThenShort(arg0: $Reference2ShortFunction_<V>): $Long2ShortFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2ReferenceFunction<V>;
        composeByte(arg0: $Byte2LongFunction_): $Byte2ReferenceFunction<V>;
        andThenFloat(arg0: $Reference2FloatFunction_<V>): $Long2FloatFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2ReferenceFunction<V>;
        andThenReference<T>(arg0: $Reference2ReferenceFunction_<V, T>): $Long2ReferenceFunction<T>;
        remove(arg0: number): V;
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        /**
         * @deprecated
         */
        get(arg0: $Object): V;
        get(arg0: number): V;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: V): V;
        put(arg0: number, arg1: V): V;
        apply(arg0: number): V;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, V>;
    }
    /**
     * Values that may be interpreted as {@link $Long2ReferenceFunction}.
     */
    export type $Long2ReferenceFunction_<V> = ((arg0: number) => V);
    export class $LongBidirectionalIterator {
    }
    export interface $LongBidirectionalIterator extends $LongIterator, $ObjectBidirectionalIterator<number> {
        previousLong(): number;
        skip(arg0: number): number;
        /**
         * @deprecated
         */
        previous(): number;
        back(arg0: number): number;
    }
    export class $Long2LongSortedMap {
    }
    export interface $Long2LongSortedMap extends $Long2LongMap, $SortedMap<number, number> {
        long2LongEntrySet(): $ObjectSortedSet<$Long2LongMap$Entry>;
        firstLongKey(): number;
        lastLongKey(): number;
        values(): $LongCollection;
        /**
         * @deprecated
         */
        entrySet(): $ObjectSortedSet<$Map$Entry<number, number>>;
        keySet(): $LongSortedSet;
        comparator(): $LongComparator;
        /**
         * @deprecated
         */
        headMap(arg0: number): $Long2LongSortedMap;
        headMap(arg0: number): $Long2LongSortedMap;
        tailMap(arg0: number): $Long2LongSortedMap;
        /**
         * @deprecated
         */
        tailMap(arg0: number): $Long2LongSortedMap;
        /**
         * @deprecated
         */
        lastKey(): number;
        /**
         * @deprecated
         */
        firstKey(): number;
        subMap(arg0: number, arg1: number): $Long2LongSortedMap;
        /**
         * @deprecated
         */
        subMap(arg0: number, arg1: number): $Long2LongSortedMap;
    }
    export class $Long2IntMap {
    }
    export interface $Long2IntMap extends $Long2IntFunction, $Map<number, number> {
        mergeInt(arg0: number, arg1: number, arg2: $IntBinaryOperator_$1): number;
        mergeInt(arg0: number, arg1: number, arg2: $IntBinaryOperator_): number;
        /**
         * @deprecated
         */
        computeIfAbsentPartial(arg0: number, arg1: $Long2IntFunction_): number;
        computeIfAbsentNullable(arg0: number, arg1: $LongFunction_<number>): number;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        long2IntEntrySet(): $ObjectSet<$Long2IntMap$Entry>;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        remove(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        remove(arg0: $Object, arg1: $Object): boolean;
        size(): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        values(): $IntCollection;
        clear(): void;
        replace(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        replace(arg0: number, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        replace(arg0: number, arg1: number): number;
        replace(arg0: number, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        merge(arg0: number, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        merge(arg0: number, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        /**
         * @deprecated
         */
        entrySet(): $ObjectSet<$Map$Entry<number, number>>;
        /**
         * @deprecated
         */
        putIfAbsent(arg0: number, arg1: number): number;
        putIfAbsent(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        compute(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        compute(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        forEach(arg0: $BiConsumer_<number, number>): void;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        computeIfAbsent(arg0: number, arg1: $LongToIntFunction_): number;
        /**
         * @deprecated
         */
        computeIfAbsent(arg0: number, arg1: $Function_<number, number>): number;
        computeIfAbsent(arg0: number, arg1: $Long2IntFunction_): number;
        keySet(): $LongSet;
        /**
         * @deprecated
         */
        containsValue(arg0: $Object): boolean;
        containsValue(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, number, number>): number;
    }
    export class $AbstractLong2ObjectFunction<V> implements $Long2ObjectFunction<V>, $Serializable {
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        composeInt(arg0: $Int2LongFunction_): $Int2ObjectFunction<V>;
        andThenInt(arg0: $Object2IntFunction_<V>): $Long2IntFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2ObjectFunction<T, V>;
        andThenByte(arg0: $Object2ByteFunction_<V>): $Long2ByteFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2ObjectFunction<V>;
        andThenLong(arg0: $Object2LongFunction_<V>): $Long2LongFunction;
        composeLong(arg0: $Long2LongFunction_): $Long2ObjectFunction<V>;
        andThenDouble(arg0: $Object2DoubleFunction_<V>): $Long2DoubleFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2ObjectFunction<V>;
        andThenChar(arg0: $Object2CharFunction_<V>): $Long2CharFunction;
        andThenObject<T>(arg0: $Object2ObjectFunction_<V, T>): $Long2ObjectFunction<T>;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2ObjectFunction<T, V>;
        andThenShort(arg0: $Object2ShortFunction_<V>): $Long2ShortFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2ObjectFunction<V>;
        composeByte(arg0: $Byte2LongFunction_): $Byte2ObjectFunction<V>;
        andThenFloat(arg0: $Object2FloatFunction_<V>): $Long2FloatFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2ObjectFunction<V>;
        andThenReference<T>(arg0: $Object2ReferenceFunction_<V, T>): $Long2ReferenceFunction<T>;
        remove(arg0: number): V;
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        /**
         * @deprecated
         */
        get(arg0: $Object): V;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: V): V;
        put(arg0: number, arg1: V): V;
        apply(arg0: number): V;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, V>;
        size(): number;
        clear(): void;
        apply(arg0: number): V;
        andThen<V>(arg0: $Function_<V, V>): $Function$1<number, V>;
    }
    export class $Long2ObjectSortedMap$FastSortedEntrySet<V> {
    }
    export interface $Long2ObjectSortedMap$FastSortedEntrySet<V> extends $ObjectSortedSet<$Long2ObjectMap$Entry<V>>, $Long2ObjectMap$FastEntrySet<V> {
        fastIterator(): $ObjectBidirectionalIterator<$Long2ObjectMap$Entry<V>>;
        fastIterator(arg0: $Long2ObjectMap$Entry<V>): $ObjectBidirectionalIterator<$Long2ObjectMap$Entry<V>>;
    }
    export class $Long2ObjectMap$FastEntrySet<V> {
    }
    export interface $Long2ObjectMap$FastEntrySet<V> extends $ObjectSet<$Long2ObjectMap$Entry<V>> {
        fastIterator(): $ObjectIterator<$Long2ObjectMap$Entry<V>>;
        fastForEach(arg0: $Consumer_<$Long2ObjectMap$Entry<V>>): void;
    }
    export class $Long2ObjectFunction<V> {
    }
    export interface $Long2ObjectFunction<V> extends $Function<number, V>, $LongFunction<V> {
        composeInt(arg0: $Int2LongFunction_): $Int2ObjectFunction<V>;
        andThenInt(arg0: $Object2IntFunction_<V>): $Long2IntFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2ObjectFunction<T, V>;
        andThenByte(arg0: $Object2ByteFunction_<V>): $Long2ByteFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2ObjectFunction<V>;
        andThenLong(arg0: $Object2LongFunction_<V>): $Long2LongFunction;
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        composeLong(arg0: $Long2LongFunction_): $Long2ObjectFunction<V>;
        andThenDouble(arg0: $Object2DoubleFunction_<V>): $Long2DoubleFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2ObjectFunction<V>;
        andThenChar(arg0: $Object2CharFunction_<V>): $Long2CharFunction;
        andThenObject<T>(arg0: $Object2ObjectFunction_<V, T>): $Long2ObjectFunction<T>;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2ObjectFunction<T, V>;
        andThenShort(arg0: $Object2ShortFunction_<V>): $Long2ShortFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2ObjectFunction<V>;
        composeByte(arg0: $Byte2LongFunction_): $Byte2ObjectFunction<V>;
        andThenFloat(arg0: $Object2FloatFunction_<V>): $Long2FloatFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2ObjectFunction<V>;
        andThenReference<T>(arg0: $Object2ReferenceFunction_<V, T>): $Long2ReferenceFunction<T>;
        remove(arg0: number): V;
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        /**
         * @deprecated
         */
        get(arg0: $Object): V;
        get(arg0: number): V;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: V): V;
        put(arg0: number, arg1: V): V;
        apply(arg0: number): V;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, V>;
    }
    /**
     * Values that may be interpreted as {@link $Long2ObjectFunction}.
     */
    export type $Long2ObjectFunction_<V> = ((arg0: number) => V);
    export class $Long2IntFunction {
    }
    export interface $Long2IntFunction extends $Function<number, number>, $LongToIntFunction {
        composeInt(arg0: $Int2LongFunction_): $Int2IntFunction;
        andThenInt(arg0: $Int2IntFunction_): $Long2IntFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2IntFunction<T>;
        andThenByte(arg0: $Int2ByteFunction_): $Long2ByteFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2IntFunction;
        andThenLong(arg0: $Int2LongFunction_): $Long2LongFunction;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        composeLong(arg0: $Long2LongFunction_): $Long2IntFunction;
        andThenDouble(arg0: $Int2DoubleFunction_): $Long2DoubleFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2IntFunction;
        andThenChar(arg0: $Int2CharFunction_): $Long2CharFunction;
        andThenObject<T>(arg0: $Int2ObjectFunction_<T>): $Long2ObjectFunction<T>;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2IntFunction<T>;
        andThenShort(arg0: $Int2ShortFunction_): $Long2ShortFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2IntFunction;
        composeByte(arg0: $Byte2LongFunction_): $Byte2IntFunction;
        andThenFloat(arg0: $Int2FloatFunction_): $Long2FloatFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2IntFunction;
        andThenReference<T>(arg0: $Int2ReferenceFunction_<T>): $Long2ReferenceFunction<T>;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
    }
    /**
     * Values that may be interpreted as {@link $Long2IntFunction}.
     */
    export type $Long2IntFunction_ = ((arg0: number) => number);
    export class $Long2IntMap$Entry {
    }
    export interface $Long2IntMap$Entry extends $Map$Entry<number, number> {
        getIntValue(): number;
        getLongKey(): number;
        /**
         * @deprecated
         */
        getValue(): number;
        /**
         * @deprecated
         */
        getKey(): number;
        setValue(arg0: number): number;
        /**
         * @deprecated
         */
        setValue(arg0: number): number;
        get intValue(): number;
        get longKey(): number;
        get key(): number;
    }
    export class $Long2ObjectLinkedOpenHashMap<V> extends $AbstractLong2ObjectSortedMap<V> implements $Serializable, $Cloneable, $Hash {
        getAndMoveToLast(arg0: number): V;
        putAndMoveToLast(arg0: number, arg1: V): V;
        putAndMoveToFirst(arg0: number, arg1: V): V;
        getAndMoveToFirst(arg0: number): V;
        long2ObjectEntrySet(): $Long2ObjectSortedMap$FastSortedEntrySet<V>;
        clone(): $Long2ObjectLinkedOpenHashMap<V>;
        trim(): boolean;
        trim(arg0: number): boolean;
        ensureCapacity(arg0: number): void;
        removeFirst(): V;
        removeLast(): V;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $Long2ObjectMap<V>, arg1: number);
        constructor(arg0: $Map_<number, V>);
        constructor(arg0: number[], arg1: V[]);
        constructor(arg0: number[], arg1: V[], arg2: number);
        constructor(arg0: $Long2ObjectMap<V>);
        constructor(arg0: number);
        constructor();
        constructor(arg0: $Map_<number, V>, arg1: number);
    }
    export class $AbstractLongSortedSet extends $AbstractLongSet implements $LongSortedSet {
        iterator(): $LongBidirectionalIterator;
        /**
         * @deprecated
         */
        last(): number;
        /**
         * @deprecated
         */
        first(): number;
        /**
         * @deprecated
         */
        subSet(arg0: number, arg1: number): $LongSortedSet;
        /**
         * @deprecated
         */
        headSet(arg0: number): $LongSortedSet;
        /**
         * @deprecated
         */
        tailSet(arg0: number): $LongSortedSet;
        reversed(): $SortedSet<number>;
        getFirst(): number;
        getLast(): number;
        addFirst(arg0: number): void;
        addLast(arg0: number): void;
        removeFirst(): number;
        removeLast(): number;
    }
    export class $LongSpliterator {
    }
    export interface $LongSpliterator extends $Spliterator$OfLong {
        forEachRemaining(arg0: $LongConsumer_): void;
        /**
         * @deprecated
         */
        forEachRemaining(arg0: $Consumer_<number>): void;
        skip(arg0: number): number;
        /**
         * @deprecated
         */
        tryAdvance(arg0: $Consumer_<number>): boolean;
        tryAdvance(arg0: $LongConsumer_): boolean;
        trySplit(): $LongSpliterator;
        getComparator(): $LongComparator;
        get comparator(): $LongComparator;
    }
    export class $Long2FloatFunction {
    }
    export interface $Long2FloatFunction extends $Function<number, number>, $LongToDoubleFunction {
        composeInt(arg0: $Int2LongFunction_): $Int2FloatFunction;
        andThenInt(arg0: $Float2IntFunction_): $Long2IntFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2FloatFunction<T>;
        andThenByte(arg0: $Float2ByteFunction_): $Long2ByteFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2FloatFunction;
        andThenLong(arg0: $Float2LongFunction_): $Long2LongFunction;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        composeLong(arg0: $Long2LongFunction_): $Long2FloatFunction;
        andThenDouble(arg0: $Float2DoubleFunction_): $Long2DoubleFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2FloatFunction;
        andThenChar(arg0: $Float2CharFunction_): $Long2CharFunction;
        andThenObject<T>(arg0: $Float2ObjectFunction_<T>): $Long2ObjectFunction<T>;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2FloatFunction<T>;
        andThenShort(arg0: $Float2ShortFunction_): $Long2ShortFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2FloatFunction;
        composeByte(arg0: $Byte2LongFunction_): $Byte2FloatFunction;
        andThenFloat(arg0: $Float2FloatFunction_): $Long2FloatFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2FloatFunction;
        andThenReference<T>(arg0: $Float2ReferenceFunction_<T>): $Long2ReferenceFunction<T>;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        applyAsDouble(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
    }
    /**
     * Values that may be interpreted as {@link $Long2FloatFunction}.
     */
    export type $Long2FloatFunction_ = ((arg0: number) => number);
    export class $LongListIterator {
    }
    export interface $LongListIterator extends $LongBidirectionalIterator, $ListIterator<number> {
        remove(): void;
        /**
         * @deprecated
         */
        add(arg0: number): void;
        add(arg0: number): void;
        /**
         * @deprecated
         */
        next(): number;
        /**
         * @deprecated
         */
        set(arg0: number): void;
        set(arg0: number): void;
        /**
         * @deprecated
         */
        previous(): number;
    }
    export class $AbstractLong2LongFunction implements $Long2LongFunction, $Serializable {
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        composeInt(arg0: $Int2LongFunction_): $Int2LongFunction;
        andThenInt(arg0: $Long2IntFunction_): $Long2IntFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2LongFunction<T>;
        andThenByte(arg0: $Long2ByteFunction_): $Long2ByteFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2LongFunction;
        andThenLong(arg0: $Long2LongFunction_): $Long2LongFunction;
        composeLong(arg0: $Long2LongFunction_): $Long2LongFunction;
        andThenDouble(arg0: $Long2DoubleFunction_): $Long2DoubleFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2LongFunction;
        andThenChar(arg0: $Long2CharFunction_): $Long2CharFunction;
        andThenObject<T>(arg0: $Long2ObjectFunction_<T>): $Long2ObjectFunction<T>;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2LongFunction<T>;
        andThenShort(arg0: $Long2ShortFunction_): $Long2ShortFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2LongFunction;
        composeByte(arg0: $Byte2LongFunction_): $Byte2LongFunction;
        andThenFloat(arg0: $Long2FloatFunction_): $Long2FloatFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2LongFunction;
        andThenReference<T>(arg0: $Long2ReferenceFunction_<T>): $Long2ReferenceFunction<T>;
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        applyAsLong(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        size(): number;
        clear(): void;
        apply(arg0: number): number;
        compose(arg0: $LongUnaryOperator_$1): $LongUnaryOperator$1;
        andThen(arg0: $LongUnaryOperator_$1): $LongUnaryOperator$1;
    }
}
