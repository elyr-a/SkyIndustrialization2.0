import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Message_, $Message } from "@package/com/mojang/brigadier";
import { $List_, $Collection_, $List } from "@package/java/util";
import { $StringRange, $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Comparable } from "@package/java/lang";

declare module "@package/com/mojang/brigadier/suggestion" {
    export class $Suggestion implements $Comparable<$Suggestion> {
        getText(): string;
        getTooltip(): $Message;
        expand(arg0: string, arg1: $StringRange): $Suggestion;
        compareTo(arg0: $Suggestion): number;
        apply(arg0: string): string;
        compareToIgnoreCase(arg0: $Suggestion): number;
        getRange(): $StringRange;
        constructor(arg0: $StringRange, arg1: string);
        constructor(arg0: $StringRange, arg1: string, arg2: $Message_);
        get text(): string;
        get tooltip(): $Message;
        get range(): $StringRange;
    }
    export class $SuggestionsBuilder {
        getStart(): number;
        buildFuture(): $CompletableFuture<$Suggestions>;
        createOffset(arg0: number): $SuggestionsBuilder;
        getRemainingLowerCase(): string;
        suggest(arg0: string): $SuggestionsBuilder;
        suggest(arg0: string, arg1: $Message_): $SuggestionsBuilder;
        suggest(arg0: number): $SuggestionsBuilder;
        suggest(arg0: number, arg1: $Message_): $SuggestionsBuilder;
        add(arg0: $SuggestionsBuilder): $SuggestionsBuilder;
        build(): $Suggestions;
        getInput(): string;
        getRemaining(): string;
        restart(): $SuggestionsBuilder;
        constructor(arg0: string, arg1: number);
        constructor(arg0: string, arg1: string, arg2: number);
        get start(): number;
        get remainingLowerCase(): string;
        get input(): string;
        get remaining(): string;
    }
    export class $Suggestions {
        isEmpty(): boolean;
        static merge(arg0: string, arg1: $Collection_<$Suggestions>): $Suggestions;
        static empty(): $CompletableFuture<$Suggestions>;
        static create(arg0: string, arg1: $Collection_<$Suggestion>): $Suggestions;
        getList(): $List<$Suggestion>;
        getRange(): $StringRange;
        constructor(arg0: $StringRange, arg1: $List_<$Suggestion>);
        get list(): $List<$Suggestion>;
        get range(): $StringRange;
    }
    export class $SuggestionProvider<S> {
    }
    export interface $SuggestionProvider<S> {
        getSuggestions(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
    }
    /**
     * Values that may be interpreted as {@link $SuggestionProvider}.
     */
    export type $SuggestionProvider_<S> = ((arg0: $CommandContext<S>, arg1: $SuggestionsBuilder) => $CompletableFuture<$Suggestions>);
}
