import { $InputStream } from "@package/java/io";
import { $BiConsumer_ } from "@package/java/util/function";
import { $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $List_, $Map, $List } from "@package/java/util";
import { $FormattedCharSequence } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/locale" {
    export class $Language {
        static inject(instance: $Language): void;
        getComponent(arg0: string): $Component;
        isDefaultRightToLeft(): boolean;
        static loadFromJson(stream: $InputStream, output: $BiConsumer_<string, string>): void;
        static loadFromJson(arg0: $InputStream, arg1: $BiConsumer_<string, string>, arg2: $BiConsumer_<string, $Component>): void;
        getVisualOrder(text: $List_<$FormattedText>): $List<$FormattedCharSequence>;
        getVisualOrder(text: $FormattedText): $FormattedCharSequence;
        getLanguageData(): $Map<string, string>;
        /**
         * Return the StringTranslate singleton instance
         */
        static getInstance(): $Language;
        getOrDefault(id: string): string;
        getOrDefault(key: string, defaultValue: string): string;
        has(id: string): boolean;
        static DEFAULT: string;
        constructor();
        get defaultRightToLeft(): boolean;
        get languageData(): $Map<string, string>;
        static get instance(): $Language;
    }
}
