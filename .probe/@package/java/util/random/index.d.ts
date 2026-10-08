import { $IntStream, $DoubleStream, $LongStream } from "@package/java/util/stream";

declare module "@package/java/util/random" {
    export class $RandomGenerator {
        static getDefault(): $RandomGenerator;
        static of(arg0: string): $RandomGenerator;
        static get default(): $RandomGenerator;
    }
    export interface $RandomGenerator {
        nextDouble(arg0: number): number;
        nextDouble(): number;
        nextDouble(arg0: number, arg1: number): number;
        nextInt(arg0: number): number;
        nextInt(arg0: number, arg1: number): number;
        nextInt(): number;
        longs(arg0: number): $LongStream;
        longs(): $LongStream;
        longs(arg0: number, arg1: number, arg2: number): $LongStream;
        longs(arg0: number, arg1: number): $LongStream;
        nextBytes(arg0: number[]): void;
        nextLong(): number;
        nextLong(arg0: number): number;
        nextLong(arg0: number, arg1: number): number;
        nextBoolean(): boolean;
        ints(arg0: number, arg1: number): $IntStream;
        ints(): $IntStream;
        ints(arg0: number, arg1: number, arg2: number): $IntStream;
        ints(arg0: number): $IntStream;
        doubles(): $DoubleStream;
        doubles(arg0: number, arg1: number, arg2: number): $DoubleStream;
        doubles(arg0: number, arg1: number): $DoubleStream;
        doubles(arg0: number): $DoubleStream;
        nextFloat(): number;
        nextFloat(arg0: number): number;
        nextFloat(arg0: number, arg1: number): number;
        nextGaussian(arg0: number, arg1: number): number;
        nextGaussian(): number;
        isDeprecated(): boolean;
        nextExponential(): number;
        get deprecated(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RandomGenerator}.
     */
    export type $RandomGenerator_ = (() => number);
}
