import { $Writer, $Reader, $Flushable, $Closeable } from "@package/java/io";
import { $Number, $Enum } from "@package/java/lang";

declare module "@package/com/google/gson/stream" {
    export class $JsonToken extends $Enum<$JsonToken> {
        static values(): $JsonToken[];
        static valueOf(arg0: string): $JsonToken;
        static NUMBER: $JsonToken;
        static NULL: $JsonToken;
        static END_DOCUMENT: $JsonToken;
        static BEGIN_OBJECT: $JsonToken;
        static END_ARRAY: $JsonToken;
        static STRING: $JsonToken;
        static END_OBJECT: $JsonToken;
        static BEGIN_ARRAY: $JsonToken;
        static BOOLEAN: $JsonToken;
        static NAME: $JsonToken;
    }
    /**
     * Values that may be interpreted as {@link $JsonToken}.
     */
    export type $JsonToken_ = "begin_array" | "end_array" | "begin_object" | "end_object" | "name" | "string" | "number" | "boolean" | "null" | "end_document";
    export class $JsonWriter implements $Closeable, $Flushable {
        jsonValue(arg0: string): $JsonWriter;
        setIndent(arg0: string): void;
        name(arg0: string): $JsonWriter;
        value(arg0: string): $JsonWriter;
        value(arg0: number): $JsonWriter;
        value(arg0: $Number): $JsonWriter;
        value(arg0: number): $JsonWriter;
        value(arg0: boolean): $JsonWriter;
        value(arg0: boolean): $JsonWriter;
        value(arg0: number): $JsonWriter;
        flush(): void;
        close(): void;
        setLenient(arg0: boolean): void;
        isLenient(): boolean;
        nullValue(): $JsonWriter;
        isHtmlSafe(): boolean;
        getSerializeNulls(): boolean;
        setHtmlSafe(arg0: boolean): void;
        setSerializeNulls(arg0: boolean): void;
        beginObject(): $JsonWriter;
        beginArray(): $JsonWriter;
        endArray(): $JsonWriter;
        endObject(): $JsonWriter;
        constructor(arg0: $Writer);
        set indent(value: string);
    }
    export class $JsonReader implements $Closeable {
        hasNext(): boolean;
        close(): void;
        getPath(): string;
        peek(): $JsonToken;
        nextDouble(): number;
        nextInt(): number;
        setLenient(arg0: boolean): void;
        nextNull(): void;
        nextString(): string;
        isLenient(): boolean;
        nextLong(): number;
        skipValue(): void;
        getPreviousPath(): string;
        beginObject(): void;
        beginArray(): void;
        endArray(): void;
        endObject(): void;
        nextName(): string;
        nextBoolean(): boolean;
        constructor(arg0: $Reader);
        get path(): string;
        get previousPath(): string;
    }
}
