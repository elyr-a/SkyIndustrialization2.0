import { $Duration } from "@package/java/time";
import { $Predicate as $Predicate$1, $Predicate_, $Supplier as $Supplier$1, $Function as $Function$1 } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $TimeUnit_ } from "@package/java/util/concurrent";
import { $List, $Map } from "@package/java/util";
import { $Pattern } from "@package/java/util/regex";
import { $Object, $Iterable, $CharSequence } from "@package/java/lang";

declare module "@package/com/google/common/base" {
    export class $Predicate<T> {
    }
    export interface $Predicate<T> extends $Predicate$1<T> {
        equals(object: $Object): boolean;
        test(input: T): boolean;
        apply(input: T): boolean;
    }
    export class $Splitter {
        withKeyValueSeparator(separator: string): $Splitter$MapSplitter;
        withKeyValueSeparator(separator: string): $Splitter$MapSplitter;
        withKeyValueSeparator(keyValueSplitter: $Splitter): $Splitter$MapSplitter;
        omitEmptyStrings(): $Splitter;
        splitToStream(sequence: $CharSequence): $Stream<string>;
        static fixedLength(length: number): $Splitter;
        trimResults(trimmer: $CharMatcher): $Splitter;
        trimResults(): $Splitter;
        splitToList(sequence: $CharSequence): $List<string>;
        static onPattern(separatorPattern: string): $Splitter;
        split(sequence: $CharSequence): $Iterable<string>;
        limit(maxItems: number): $Splitter;
        static on(separatorMatcher: $CharMatcher): $Splitter;
        static on(separator: string): $Splitter;
        static on(separatorPattern: $Pattern): $Splitter;
        static on(separator: string): $Splitter;
    }
    export class $Ticker {
        static systemTicker(): $Ticker;
        read(): number;
    }
    export class $Supplier<T> {
    }
    export interface $Supplier<T> extends $Supplier$1<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $Supplier}.
     */
    export type $Supplier_<T> = (() => T);
    export class $Function<F, T> {
    }
    export interface $Function<F, T> extends $Function$1<F, T> {
        equals(object: $Object): boolean;
        apply(input: F): F;
    }
    export class $Stopwatch {
        isRunning(): boolean;
        static createUnstarted(): $Stopwatch;
        static createUnstarted(ticker: $Ticker): $Stopwatch;
        static createStarted(): $Stopwatch;
        static createStarted(ticker: $Ticker): $Stopwatch;
        reset(): $Stopwatch;
        start(): $Stopwatch;
        stop(): $Stopwatch;
        elapsed(): $Duration;
        elapsed(desiredUnit: $TimeUnit_): number;
        get running(): boolean;
    }
    export class $Splitter$MapSplitter {
        split(sequence: $CharSequence): $Map<string, string>;
    }
    export class $CharMatcher implements $Predicate<string> {
        retainFrom(sequence: $CharSequence): string;
        removeFrom(sequence: $CharSequence): string;
        matchesNoneOf(sequence: $CharSequence): boolean;
        precomputed(): $CharMatcher;
        trimTrailingFrom(sequence: $CharSequence): string;
        trimLeadingFrom(sequence: $CharSequence): string;
        collapseFrom(sequence: $CharSequence, replacement: string): string;
        matchesAnyOf(sequence: $CharSequence): boolean;
        replaceFrom(sequence: $CharSequence, replacement: $CharSequence): string;
        replaceFrom(sequence: $CharSequence, replacement: string): string;
        static javaIsoControl(): $CharMatcher;
        static forPredicate(predicate: $Predicate<string>): $CharMatcher;
        matchesAllOf(sequence: $CharSequence): boolean;
        /**
         * @deprecated
         */
        static singleWidth(): $CharMatcher;
        lastIndexIn(sequence: $CharSequence): number;
        static breakingWhitespace(): $CharMatcher;
        /**
         * @deprecated
         */
        static invisible(): $CharMatcher;
        trimAndCollapseFrom(sequence: $CharSequence, replacement: string): string;
        static isNot(match: string): $CharMatcher;
        trimFrom(sequence: $CharSequence): string;
        indexIn(sequence: $CharSequence): number;
        indexIn(sequence: $CharSequence, start: number): number;
        countIn(sequence: $CharSequence): number;
        static noneOf(sequence: $CharSequence): $CharMatcher;
        matches(c: string): boolean;
        /**
         * @deprecated
         */
        apply(character: string): boolean;
        static ascii(): $CharMatcher;
        static is(match: string): $CharMatcher;
        /**
         * @deprecated
         */
        static digit(): $CharMatcher;
        or(other: $CharMatcher): $CharMatcher;
        static any(): $CharMatcher;
        static inRange(startInclusive: string, endInclusive: string): $CharMatcher;
        negate(): $CharMatcher;
        and(other: $CharMatcher): $CharMatcher;
        static none(): $CharMatcher;
        static anyOf(sequence: $CharSequence): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLowerCase(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaUpperCase(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaDigit(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLetter(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLetterOrDigit(): $CharMatcher;
        static whitespace(): $CharMatcher;
        test(input: string): boolean;
        or(arg0: $Predicate_<string>): $Predicate$1<string>;
        and(arg0: $Predicate_<string>): $Predicate$1<string>;
    }
}
