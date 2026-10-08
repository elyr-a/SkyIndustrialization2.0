import { $CommandSyntaxException } from "@package/com/mojang/brigadier/exceptions";
import { $Suggestions } from "@package/com/mojang/brigadier/suggestion";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $LiteralArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $CommandContextBuilder, $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Collection_, $Map_, $Map, $Collection } from "@package/java/util";
import { $RootCommandNode, $LiteralCommandNode, $CommandNode } from "@package/com/mojang/brigadier/tree";
export * as exceptions from "@package/com/mojang/brigadier/exceptions";
export * as builder from "@package/com/mojang/brigadier/builder";
export * as tree from "@package/com/mojang/brigadier/tree";
export * as context from "@package/com/mojang/brigadier/context";
export * as suggestion from "@package/com/mojang/brigadier/suggestion";
export * as arguments from "@package/com/mojang/brigadier/arguments";

declare module "@package/com/mojang/brigadier" {
    export class $Command<S> {
        static SINGLE_SUCCESS: number;
    }
    export interface $Command<S> {
        run(arg0: $CommandContext<S>): number;
    }
    /**
     * Values that may be interpreted as {@link $Command}.
     */
    export type $Command_<S> = ((arg0: $CommandContext<S>) => number);
    export class $SingleRedirectModifier<S> {
    }
    export interface $SingleRedirectModifier<S> {
        apply(arg0: $CommandContext<S>): S;
    }
    /**
     * Values that may be interpreted as {@link $SingleRedirectModifier}.
     */
    export type $SingleRedirectModifier_<S> = ((arg0: $CommandContext<S>) => S);
    export class $AmbiguityConsumer<S> {
    }
    export interface $AmbiguityConsumer<S> {
        ambiguous(arg0: $CommandNode<S>, arg1: $CommandNode<S>, arg2: $CommandNode<S>, arg3: $Collection_<string>): void;
    }
    /**
     * Values that may be interpreted as {@link $AmbiguityConsumer}.
     */
    export type $AmbiguityConsumer_<S> = ((arg0: $CommandNode<S>, arg1: $CommandNode<S>, arg2: $CommandNode<S>, arg3: $Collection<string>) => void);
    export class $RedirectModifier<S> {
    }
    export interface $RedirectModifier<S> {
        apply(arg0: $CommandContext<S>): $Collection<S>;
    }
    /**
     * Values that may be interpreted as {@link $RedirectModifier}.
     */
    export type $RedirectModifier_<S> = ((arg0: $CommandContext<S>) => $Collection_<S>);
    export class $Message {
    }
    export interface $Message {
        getString(): string;
        get string(): string;
    }
    /**
     * Values that may be interpreted as {@link $Message}.
     */
    export type $Message_ = (() => string);
    export class $ImmutableStringReader {
    }
    export interface $ImmutableStringReader {
        getCursor(): number;
        getRead(): string;
        getRemainingLength(): number;
        getTotalLength(): number;
        canRead(arg0: number): boolean;
        canRead(): boolean;
        peek(): string;
        peek(arg0: number): string;
        getString(): string;
        getRemaining(): string;
        get cursor(): number;
        get read(): string;
        get remainingLength(): number;
        get totalLength(): number;
        get string(): string;
        get remaining(): string;
    }
    export class $CommandDispatcher<S> {
        setConsumer(arg0: $ResultConsumer_<S>): void;
        getCompletionSuggestions(arg0: $ParseResults<S>): $CompletableFuture<$Suggestions>;
        getCompletionSuggestions(arg0: $ParseResults<S>, arg1: number): $CompletableFuture<$Suggestions>;
        findAmbiguities(arg0: $AmbiguityConsumer_<S>): void;
        getAllUsage(arg0: $CommandNode<S>, arg1: S, arg2: boolean): string[];
        getSmartUsage(arg0: $CommandNode<S>, arg1: S): $Map<$CommandNode<S>, string>;
        register(arg0: $LiteralArgumentBuilder<S>): $LiteralCommandNode<S>;
        execute(arg0: string, arg1: S): number;
        execute(arg0: $ParseResults<S>): number;
        execute(arg0: $StringReader, arg1: S): number;
        parse(arg0: $StringReader, arg1: S): $ParseResults<S>;
        parse(arg0: string, arg1: S): $ParseResults<S>;
        getRoot(): $RootCommandNode<S>;
        getPath(arg0: $CommandNode<S>): $Collection<string>;
        findNode(arg0: $Collection_<string>): $CommandNode<S>;
        static ARGUMENT_SEPARATOR: string;
        static ARGUMENT_SEPARATOR_CHAR: string;
        constructor(arg0: $RootCommandNode<S>);
        constructor();
        set consumer(value: $ResultConsumer_<S>);
        get root(): $RootCommandNode<S>;
    }
    export class $StringReader implements $ImmutableStringReader {
        skipWhitespace(): void;
        getCursor(): number;
        readQuotedString(): string;
        readUnquotedString(): string;
        static isAllowedNumber(arg0: string): boolean;
        readStringUntil(arg0: string): string;
        setCursor(arg0: number): void;
        getRead(): string;
        static isAllowedInUnquotedString(arg0: string): boolean;
        static isQuotedStringStart(arg0: string): boolean;
        getRemainingLength(): number;
        getTotalLength(): number;
        read(): string;
        readInt(): number;
        canRead(): boolean;
        canRead(arg0: number): boolean;
        peek(): string;
        peek(arg0: number): string;
        skip(): void;
        readFloat(): number;
        expect(arg0: string): void;
        readString(): string;
        readBoolean(): boolean;
        readLong(): number;
        readDouble(): number;
        getString(): string;
        getRemaining(): string;
        constructor(arg0: string);
        constructor(arg0: $StringReader);
        get remainingLength(): number;
        get totalLength(): number;
        get string(): string;
        get remaining(): string;
    }
    export class $ParseResults<S> {
        getReader(): $ImmutableStringReader;
        getExceptions(): $Map<$CommandNode<S>, $CommandSyntaxException>;
        getContext(): $CommandContextBuilder<S>;
        constructor(arg0: $CommandContextBuilder<S>, arg1: $ImmutableStringReader, arg2: $Map_<$CommandNode<S>, $CommandSyntaxException>);
        constructor(arg0: $CommandContextBuilder<S>);
        get reader(): $ImmutableStringReader;
        get exceptions(): $Map<$CommandNode<S>, $CommandSyntaxException>;
        get context(): $CommandContextBuilder<S>;
    }
    export class $ResultConsumer<S> {
    }
    export interface $ResultConsumer<S> {
        onCommandComplete(arg0: $CommandContext<S>, arg1: boolean, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ResultConsumer}.
     */
    export type $ResultConsumer_<S> = ((arg0: $CommandContext<S>, arg1: boolean, arg2: number) => void);
}
