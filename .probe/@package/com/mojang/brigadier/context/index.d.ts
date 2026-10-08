import { $Command_, $Command, $CommandDispatcher, $RedirectModifier, $RedirectModifier_, $ImmutableStringReader, $ResultConsumer_ } from "@package/com/mojang/brigadier";
import { $Enum, $Class } from "@package/java/lang";
import { $List, $List_, $Map_, $Map, $Collection } from "@package/java/util";
import { $CommandNode } from "@package/com/mojang/brigadier/tree";

declare module "@package/com/mojang/brigadier/context" {
    export class $ContextChain$Stage extends $Enum<$ContextChain$Stage> {
        static values(): $ContextChain$Stage[];
        static valueOf(arg0: string): $ContextChain$Stage;
        static EXECUTE: $ContextChain$Stage;
        static MODIFY: $ContextChain$Stage;
    }
    /**
     * Values that may be interpreted as {@link $ContextChain$Stage}.
     */
    export type $ContextChain$Stage_ = "modify" | "execute";
    export class $CommandContextBuilder<S> {
        getCommand(): $Command<S>;
        getDispatcher(): $CommandDispatcher<S>;
        withNode(arg0: $CommandNode<S>, arg1: $StringRange): $CommandContextBuilder<S>;
        withArgument(arg0: string, arg1: $ParsedArgument<S, never>): $CommandContextBuilder<S>;
        findSuggestionContext(arg0: number): $SuggestionContext<S>;
        withChild(arg0: $CommandContextBuilder<S>): $CommandContextBuilder<S>;
        getNodes(): $List<$ParsedCommandNode<S>>;
        withSource(arg0: S): $CommandContextBuilder<S>;
        withCommand(arg0: $Command_<S>): $CommandContextBuilder<S>;
        copy(): $CommandContextBuilder<S>;
        build(arg0: string): $CommandContext<S>;
        getLastChild(): $CommandContextBuilder<S>;
        getArguments(): $Map<string, $ParsedArgument<S, never>>;
        getSource(): S;
        getChild(): $CommandContextBuilder<S>;
        getRootNode(): $CommandNode<S>;
        getRange(): $StringRange;
        constructor(arg0: $CommandDispatcher<S>, arg1: S, arg2: $CommandNode<S>, arg3: number);
        get command(): $Command<S>;
        get dispatcher(): $CommandDispatcher<S>;
        get nodes(): $List<$ParsedCommandNode<S>>;
        get lastChild(): $CommandContextBuilder<S>;
        get arguments(): $Map<string, $ParsedArgument<S, never>>;
        get source(): S;
        get child(): $CommandContextBuilder<S>;
        get rootNode(): $CommandNode<S>;
        get range(): $StringRange;
    }
    export class $ContextChain<S> {
        static runModifier<S>(arg0: $CommandContext<S>, arg1: S, arg2: $ResultConsumer_<S>, arg3: boolean): $Collection<S>;
        static runExecutable<S>(arg0: $CommandContext<S>, arg1: S, arg2: $ResultConsumer_<S>, arg3: boolean): number;
        getStage(): $ContextChain$Stage;
        getTopContext(): $CommandContext<S>;
        executeAll(arg0: S, arg1: $ResultConsumer_<S>): number;
        static tryFlatten<S>(arg0: $CommandContext<S>): ($ContextChain<S>) | undefined;
        nextStage(): $ContextChain<S>;
        constructor(arg0: $List_<$CommandContext<S>>, arg1: $CommandContext<S>);
        get stage(): $ContextChain$Stage;
        get topContext(): $CommandContext<S>;
    }
    export class $ParsedArgument<S, T> {
        getResult(): T;
        getRange(): $StringRange;
        constructor(arg0: number, arg1: number, arg2: T);
        get result(): T;
        get range(): $StringRange;
    }
    export class $SuggestionContext<S> {
        parent: $CommandNode<S>;
        startPos: number;
        constructor(arg0: $CommandNode<S>, arg1: number);
    }
    export class $CommandContext<S> {
        getCommand(): $Command<S>;
        getArgument<V>(arg0: string, arg1: $Class<V>): V;
        copyFor(arg0: S): $CommandContext<S>;
        getNodes(): $List<$ParsedCommandNode<S>>;
        getRedirectModifier(): $RedirectModifier<S>;
        getInput(): string;
        getLastChild(): $CommandContext<S>;
        getSource(): S;
        getChild(): $CommandContext<S>;
        getRootNode(): $CommandNode<S>;
        isForked(): boolean;
        hasNodes(): boolean;
        getRange(): $StringRange;
        constructor(arg0: S, arg1: string, arg2: $Map_<string, $ParsedArgument<S, never>>, arg3: $Command_<S>, arg4: $CommandNode<S>, arg5: $List_<$ParsedCommandNode<S>>, arg6: $StringRange, arg7: $CommandContext<S>, arg8: $RedirectModifier_<S>, arg9: boolean);
        get command(): $Command<S>;
        get nodes(): $List<$ParsedCommandNode<S>>;
        get redirectModifier(): $RedirectModifier<S>;
        get input(): string;
        get lastChild(): $CommandContext<S>;
        get source(): S;
        get child(): $CommandContext<S>;
        get rootNode(): $CommandNode<S>;
        get forked(): boolean;
        get range(): $StringRange;
    }
    export class $ParsedCommandNode<S> {
        getNode(): $CommandNode<S>;
        getRange(): $StringRange;
        constructor(arg0: $CommandNode<S>, arg1: $StringRange);
        get node(): $CommandNode<S>;
        get range(): $StringRange;
    }
    export class $StringRange {
        getStart(): number;
        get(arg0: string): string;
        get(arg0: $ImmutableStringReader): string;
        getLength(): number;
        isEmpty(): boolean;
        static at(arg0: number): $StringRange;
        static between(arg0: number, arg1: number): $StringRange;
        getEnd(): number;
        static encompassing(arg0: $StringRange, arg1: $StringRange): $StringRange;
        constructor(arg0: number, arg1: number);
        get start(): number;
        get length(): number;
        get empty(): boolean;
        get end(): number;
    }
}
