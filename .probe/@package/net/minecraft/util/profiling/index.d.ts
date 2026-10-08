import { $Supplier_, $IntSupplier_, $LongSupplier_ } from "@package/java/util/function";
import { $Object2LongMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $MetricCategory_, $MetricCategory } from "@package/net/minecraft/util/profiling/metrics";
import { $Path_ } from "@package/java/nio/file";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $List, $Map_, $Set } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
export * as jfr from "@package/net/minecraft/util/profiling/jfr";
export * as metrics from "@package/net/minecraft/util/profiling/metrics";

declare module "@package/net/minecraft/util/profiling" {
    export class $ResultField implements $Comparable<$ResultField> {
        getColor(): number;
        compareTo(arg0: $ResultField): number;
        globalPercentage: number;
        percentage: number;
        count: number;
        name: string;
        constructor(name: string, percentage: number, arg2: number, globalPercentage: number);
        get color(): number;
    }
    export class $EmptyProfileResults implements $ProfileResults {
        getTimes(sectionPath: string): $List<$ResultField>;
        getStartTimeTicks(): number;
        saveResults(path: $Path_): boolean;
        getProfilerResults(): string;
        getEndTimeTicks(): number;
        getEndTimeNano(): number;
        getStartTimeNano(): number;
        getNanoDuration(): number;
        getTickDuration(): number;
        static EMPTY: $EmptyProfileResults;
        get startTimeTicks(): number;
        get profilerResults(): string;
        get endTimeTicks(): number;
        get endTimeNano(): number;
        get startTimeNano(): number;
        get nanoDuration(): number;
        get tickDuration(): number;
    }
    export class $ActiveProfiler implements $ProfileCollector {
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        incrementCounter(counterName: string, increment: number): void;
        /**
         * End section
         */
        startTick(): void;
        /**
         * End section
         */
        endTick(): void;
        popPush(name: string): void;
        popPush(nameSupplier: $Supplier_<string>): void;
        getResults(): $ProfileResults;
        markForCharting(category: $MetricCategory_): void;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        push(name: string): void;
        push(nameSupplier: $Supplier_<string>): void;
        /**
         * End section
         */
        pop(): void;
        getEntry(entryId: string): $ActiveProfiler$PathEntry;
        incrementCounter(name: string): void;
        incrementCounter(nameSupplier: $Supplier_<string>): void;
        constructor(startTimeNano: $LongSupplier_, startTimeTicks: $IntSupplier_, warn: boolean);
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $InactiveProfiler implements $ProfileCollector {
        incrementCounter(counterName: string, increment: number): void;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        /**
         * End section
         */
        startTick(): void;
        /**
         * End section
         */
        endTick(): void;
        popPush(nameSupplier: $Supplier_<string>): void;
        popPush(name: string): void;
        getResults(): $ProfileResults;
        markForCharting(category: $MetricCategory_): void;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        push(name: string): void;
        push(nameSupplier: $Supplier_<string>): void;
        /**
         * End section
         */
        pop(): void;
        getEntry(entryId: string): $ActiveProfiler$PathEntry;
        incrementCounter(name: string): void;
        incrementCounter(nameSupplier: $Supplier_<string>): void;
        static INSTANCE: $InactiveProfiler;
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $FilledProfileResults implements $ProfileResults {
        getTickDuration(): number;
        getTimes(sectionPath: string): $List<$ResultField>;
        getStartTimeTicks(): number;
        saveResults(path: $Path_): boolean;
        getProfilerResults(): string;
        getEndTimeTicks(): number;
        getEndTimeNano(): number;
        getStartTimeNano(): number;
        getNanoDuration(): number;
        constructor(entries: $Map_<string, $ProfilerPathEntry>, startTimeNano: number, arg2: number, startTimeTicks: number, endTimeNano: number);
        get tickDuration(): number;
        get startTimeTicks(): number;
        get profilerResults(): string;
        get endTimeTicks(): number;
        get endTimeNano(): number;
        get startTimeNano(): number;
        get nanoDuration(): number;
    }
    export class $ActiveProfiler$PathEntry implements $ProfilerPathEntry {
        getMaxDuration(): number;
        getCount(): number;
        getDuration(): number;
        getCounters(): $Object2LongMap<string>;
        constructor();
        get maxDuration(): number;
        get count(): number;
        get duration(): number;
        get counters(): $Object2LongMap<string>;
    }
    export class $ProfilerFiller {
        static tee(first: $ProfilerFiller, second: $ProfilerFiller): $ProfilerFiller;
        static ROOT: string;
    }
    export interface $ProfilerFiller {
        incrementCounter(counterName: string, increment: number): void;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        incrementCounter(entryId: string): void;
        incrementCounter(entryIdSupplier: $Supplier_<string>): void;
        /**
         * End section
         */
        startTick(): void;
        /**
         * End section
         */
        endTick(): void;
        popPush(entryIdSupplier: $Supplier_<string>): void;
        popPush(entryId: string): void;
        markForCharting(category: $MetricCategory_): void;
        push(entryId: string): void;
        push(entryIdSupplier: $Supplier_<string>): void;
        /**
         * End section
         */
        pop(): void;
    }
    export class $ProfileResults {
        static demanglePath(path: string): string;
        static PATH_SEPARATOR: string;
    }
    export interface $ProfileResults {
        getNanoDuration(): number;
        getTickDuration(): number;
        getTimes(sectionPath: string): $List<$ResultField>;
        getStartTimeTicks(): number;
        saveResults(path: $Path_): boolean;
        getProfilerResults(): string;
        getEndTimeTicks(): number;
        getEndTimeNano(): number;
        getStartTimeNano(): number;
        get nanoDuration(): number;
        get tickDuration(): number;
        get startTimeTicks(): number;
        get profilerResults(): string;
        get endTimeTicks(): number;
        get endTimeNano(): number;
        get startTimeNano(): number;
    }
    export class $ProfileCollector {
    }
    export interface $ProfileCollector extends $ProfilerFiller {
        getResults(): $ProfileResults;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        getEntry(entryId: string): $ActiveProfiler$PathEntry;
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $ContinuousProfiler {
        disable(): void;
        getFiller(): $ProfilerFiller;
        getResults(): $ProfileResults;
        isEnabled(): boolean;
        enable(): void;
        constructor(realTime: $LongSupplier_, tickCount: $IntSupplier_);
        get filler(): $ProfilerFiller;
        get results(): $ProfileResults;
        get enabled(): boolean;
    }
    export class $FilledProfileResults$CounterCollector {
    }
    export class $ProfilerPathEntry {
    }
    export interface $ProfilerPathEntry {
        getMaxDuration(): number;
        getCount(): number;
        getDuration(): number;
        getCounters(): $Object2LongMap<string>;
        get maxDuration(): number;
        get count(): number;
        get duration(): number;
        get counters(): $Object2LongMap<string>;
    }
    export class $SingleTickProfiler {
        static createTickProfiler(name: string): $SingleTickProfiler;
        static decorateFiller(profiler: $ProfilerFiller, singleTickProfiler: $SingleTickProfiler | null): $ProfilerFiller;
        startTick(): $ProfilerFiller;
        endTick(): void;
        constructor(realTime: $LongSupplier_, location: string, saveThreshold: number);
    }
}
