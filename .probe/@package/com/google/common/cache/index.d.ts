import { $ConcurrentMap, $Callable_, $Executor_ } from "@package/java/util/concurrent";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $ListenableFuture } from "@package/com/google/common/util/concurrent";
import { $Map_, $Map } from "@package/java/util";
import { $Function, $Supplier_ } from "@package/com/google/common/base";
import { $Object, $Iterable_ } from "@package/java/lang";

declare module "@package/com/google/common/cache" {
    export class $CacheLoader<K, V> {
        static asyncReloading<K, V>(loader: $CacheLoader<K, V>, executor: $Executor_): $CacheLoader<K, V>;
        load(key: K): V;
        static from<K, V>(arg0: $Function<K, V>): $CacheLoader<K, V>;
        static from<V>(supplier: $Supplier_<V>): $CacheLoader<$Object, V>;
        reload(key: K, oldValue: V): $ListenableFuture<V>;
        loadAll(keys: $Iterable_<K>): $Map<K, V>;
    }
    export class $LoadingCache<K, V> {
    }
    export interface $LoadingCache<K, V> extends $Cache<K, V>, $Function<K, V> {
        asMap(): $ConcurrentMap<K, V>;
        get(key: K): V;
        /**
         * @deprecated
         */
        apply(key: K): V;
        getUnchecked(key: K): V;
        refresh(key: K): void;
        getAll(keys: $Iterable_<K>): $ImmutableMap<K, V>;
    }
    export class $CacheStats {
        loadExceptionRate(): number;
        loadExceptionCount(): number;
        loadSuccessCount(): number;
        averageLoadPenalty(): number;
        totalLoadTime(): number;
        requestCount(): number;
        evictionCount(): number;
        missCount(): number;
        hitCount(): number;
        hitRate(): number;
        missRate(): number;
        loadCount(): number;
        plus(other: $CacheStats): $CacheStats;
        minus(other: $CacheStats): $CacheStats;
        constructor(hitCount: number, missCount: number, loadSuccessCount: number, loadExceptionCount: number, totalLoadTime: number, evictionCount: number);
    }
    export class $Cache<K, V> {
    }
    export interface $Cache<K, V> {
        asMap(): $ConcurrentMap<K, V>;
        getIfPresent(key: $Object): V;
        getAllPresent(keys: $Iterable_<never>): $ImmutableMap<K, V>;
        cleanUp(): void;
        invalidateAll(): void;
        invalidateAll(keys: $Iterable_<never>): void;
        stats(): $CacheStats;
        size(): number;
        get(key: K, loader: $Callable_<V>): V;
        put(key: K, value: V): void;
        putAll(m: $Map_<K, V>): void;
        invalidate(key: $Object): void;
    }
}
