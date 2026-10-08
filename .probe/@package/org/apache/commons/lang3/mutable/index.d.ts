import { $Serializable } from "@package/java/io";
import { $Number, $Comparable } from "@package/java/lang";

declare module "@package/org/apache/commons/lang3/mutable" {
    export class $Mutable<T> {
    }
    export interface $Mutable<T> {
        getValue(): T;
        setValue(arg0: T): void;
    }
    export class $MutableObject<T> implements $Mutable<T>, $Serializable {
        getValue(): T;
        setValue(arg0: T): void;
        constructor();
        constructor(arg0: T);
    }
    export class $MutableFloat extends $Number implements $Comparable<$MutableFloat>, $Mutable<$Number> {
        toFloat(): number;
        isInfinite(): boolean;
        compareTo(arg0: $MutableFloat): number;
        getValue(): number;
        add(arg0: number): void;
        add(arg0: $Number): void;
        increment(): void;
        isNaN(): boolean;
        setValue(arg0: $Number): void;
        setValue(arg0: number): void;
        getAndAdd(arg0: $Number): number;
        getAndAdd(arg0: number): number;
        incrementAndGet(): number;
        getAndIncrement(): number;
        getAndDecrement(): number;
        decrementAndGet(): number;
        addAndGet(arg0: $Number): number;
        addAndGet(arg0: number): number;
        decrement(): void;
        subtract(arg0: number): void;
        subtract(arg0: $Number): void;
        constructor();
        constructor(arg0: string);
        constructor(arg0: number);
        constructor(arg0: $Number);
        get infinite(): boolean;
        get naN(): boolean;
        get andIncrement(): number;
        get andDecrement(): number;
    }
    export class $MutableBoolean implements $Mutable<boolean>, $Serializable, $Comparable<$MutableBoolean> {
        isFalse(): boolean;
        setFalse(): void;
        setTrue(): void;
        compareTo(arg0: $MutableBoolean): number;
        booleanValue(): boolean;
        getValue(): boolean;
        setValue(arg0: boolean): void;
        setValue(arg0: boolean): void;
        toBoolean(): boolean;
        isTrue(): boolean;
        constructor();
        constructor(arg0: boolean);
        constructor(arg0: boolean);
    }
}
