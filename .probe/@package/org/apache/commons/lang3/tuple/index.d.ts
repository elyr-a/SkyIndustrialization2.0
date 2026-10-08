import { $Serializable } from "@package/java/io";
import { $Map$Entry } from "@package/java/util";
import { $Throwable, $Comparable } from "@package/java/lang";
import { $FailableBiFunction_, $FailableBiConsumer_ } from "@package/org/apache/commons/lang3/function";

declare module "@package/org/apache/commons/lang3/tuple" {
    export class $Pair<L, R> implements $Map$Entry<L, R>, $Comparable<$Pair<L, R>>, $Serializable {
        getLeft(): L;
        getRight(): R;
        static ofNonNull<L, R>(arg0: L, arg1: R): $Pair<L, R>;
        toString(arg0: string): string;
        compareTo(arg0: $Pair<L, R>): number;
        getValue(): R;
        apply<V, E extends $Throwable>(arg0: $FailableBiFunction_<L, R, V, E>): V;
        static of<L, R>(arg0: L, arg1: R): $Pair<L, R>;
        static of<L, R>(arg0: $Map$Entry<L, R>): $Pair<L, R>;
        getKey(): L;
        accept<E extends $Throwable>(arg0: $FailableBiConsumer_<L, R, E>): void;
        static emptyArray<L, R>(): $Pair<L, R>[];
        static EMPTY_ARRAY: $Pair<never, never>[];
        constructor();
        get left(): L;
        get right(): R;
        get value(): R;
        get key(): L;
    }
    export class $Triple<L, M, R> implements $Comparable<$Triple<L, M, R>>, $Serializable {
        getLeft(): L;
        getRight(): R;
        static ofNonNull<L, M, R>(arg0: L, arg1: M, arg2: R): $Triple<L, M, R>;
        getMiddle(): M;
        toString(arg0: string): string;
        compareTo(arg0: $Triple<L, M, R>): number;
        static of<L, M, R>(arg0: L, arg1: M, arg2: R): $Triple<L, M, R>;
        static emptyArray<L, M, R>(): $Triple<L, M, R>[];
        static EMPTY_ARRAY: $Triple<never, never, never>[];
        constructor();
        get left(): L;
        get right(): R;
        get middle(): M;
    }
}
