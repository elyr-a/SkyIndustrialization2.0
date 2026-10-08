import { $Serializable } from "@package/java/io";
import { $IntBinaryOperator_, $BinaryOperator_, $UnaryOperator_, $LongUnaryOperator_, $IntUnaryOperator_, $LongBinaryOperator_ } from "@package/java/util/function";
import { $Number } from "@package/java/lang";

declare module "@package/java/util/concurrent/atomic" {
    export class $AtomicInteger extends $Number implements $Serializable {
        get(): number;
        set(arg0: number): void;
        getOpaque(): number;
        setOpaque(arg0: number): void;
        getAcquire(): number;
        setRelease(arg0: number): void;
        compareAndSet(arg0: number, arg1: number): boolean;
        compareAndExchange(arg0: number, arg1: number): number;
        compareAndExchangeAcquire(arg0: number, arg1: number): number;
        compareAndExchangeRelease(arg0: number, arg1: number): number;
        weakCompareAndSetPlain(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        weakCompareAndSet(arg0: number, arg1: number): boolean;
        weakCompareAndSetAcquire(arg0: number, arg1: number): boolean;
        weakCompareAndSetRelease(arg0: number, arg1: number): boolean;
        getAndSet(arg0: number): number;
        getAndAdd(arg0: number): number;
        lazySet(arg0: number): void;
        incrementAndGet(): number;
        weakCompareAndSetVolatile(arg0: number, arg1: number): boolean;
        getAndIncrement(): number;
        getAndDecrement(): number;
        decrementAndGet(): number;
        addAndGet(arg0: number): number;
        getAndUpdate(arg0: $IntUnaryOperator_): number;
        updateAndGet(arg0: $IntUnaryOperator_): number;
        getAndAccumulate(arg0: number, arg1: $IntBinaryOperator_): number;
        accumulateAndGet(arg0: number, arg1: $IntBinaryOperator_): number;
        getPlain(): number;
        setPlain(arg0: number): void;
        constructor(arg0: number);
        constructor();
        get acquire(): number;
        set release(value: number);
        get andIncrement(): number;
        get andDecrement(): number;
    }
    export class $AtomicReference<V> implements $Serializable {
        get(): V;
        set(arg0: V): void;
        getOpaque(): V;
        setOpaque(arg0: V): void;
        getAcquire(): V;
        setRelease(arg0: V): void;
        compareAndSet(arg0: V, arg1: V): boolean;
        compareAndExchange(arg0: V, arg1: V): V;
        compareAndExchangeAcquire(arg0: V, arg1: V): V;
        compareAndExchangeRelease(arg0: V, arg1: V): V;
        weakCompareAndSetPlain(arg0: V, arg1: V): boolean;
        /**
         * @deprecated
         */
        weakCompareAndSet(arg0: V, arg1: V): boolean;
        weakCompareAndSetAcquire(arg0: V, arg1: V): boolean;
        weakCompareAndSetRelease(arg0: V, arg1: V): boolean;
        getAndSet(arg0: V): V;
        lazySet(arg0: V): void;
        weakCompareAndSetVolatile(arg0: V, arg1: V): boolean;
        getAndUpdate(arg0: $UnaryOperator_<V>): V;
        updateAndGet(arg0: $UnaryOperator_<V>): V;
        getAndAccumulate(arg0: V, arg1: $BinaryOperator_<V>): V;
        accumulateAndGet(arg0: V, arg1: $BinaryOperator_<V>): V;
        getPlain(): V;
        setPlain(arg0: V): void;
        constructor(arg0: V);
        constructor();
        get acquire(): V;
        set release(value: V);
    }
    export class $AtomicLong extends $Number implements $Serializable {
        get(): number;
        set(arg0: number): void;
        getOpaque(): number;
        setOpaque(arg0: number): void;
        getAcquire(): number;
        setRelease(arg0: number): void;
        compareAndSet(arg0: number, arg1: number): boolean;
        compareAndExchange(arg0: number, arg1: number): number;
        compareAndExchangeAcquire(arg0: number, arg1: number): number;
        compareAndExchangeRelease(arg0: number, arg1: number): number;
        weakCompareAndSetPlain(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        weakCompareAndSet(arg0: number, arg1: number): boolean;
        weakCompareAndSetAcquire(arg0: number, arg1: number): boolean;
        weakCompareAndSetRelease(arg0: number, arg1: number): boolean;
        getAndSet(arg0: number): number;
        getAndAdd(arg0: number): number;
        lazySet(arg0: number): void;
        incrementAndGet(): number;
        weakCompareAndSetVolatile(arg0: number, arg1: number): boolean;
        getAndIncrement(): number;
        getAndDecrement(): number;
        decrementAndGet(): number;
        addAndGet(arg0: number): number;
        getAndUpdate(arg0: $LongUnaryOperator_): number;
        updateAndGet(arg0: $LongUnaryOperator_): number;
        getAndAccumulate(arg0: number, arg1: $LongBinaryOperator_): number;
        accumulateAndGet(arg0: number, arg1: $LongBinaryOperator_): number;
        getPlain(): number;
        setPlain(arg0: number): void;
        constructor();
        constructor(arg0: number);
        get acquire(): number;
        set release(value: number);
        get andIncrement(): number;
        get andDecrement(): number;
    }
}
