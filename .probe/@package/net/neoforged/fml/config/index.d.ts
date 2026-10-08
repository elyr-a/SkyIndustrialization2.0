import { $CommentedConfig, $UnmodifiableCommentedConfig } from "@package/com/electronwill/nightconfig/core";
import { $Path } from "@package/java/nio/file";
import { $Enum } from "@package/java/lang";

declare module "@package/net/neoforged/fml/config" {
    export class $IConfigSpec$ILoadedConfig {
    }
    export interface $IConfigSpec$ILoadedConfig {
        save(): void;
        config(): $CommentedConfig;
    }
    export class $ModConfig$Type extends $Enum<$ModConfig$Type> {
        static values(): $ModConfig$Type[];
        static valueOf(arg0: string): $ModConfig$Type;
        extension(): string;
        static SERVER: $ModConfig$Type;
        static COMMON: $ModConfig$Type;
        static STARTUP: $ModConfig$Type;
        static CLIENT: $ModConfig$Type;
    }
    /**
     * Values that may be interpreted as {@link $ModConfig$Type}.
     */
    export type $ModConfig$Type_ = "common" | "client" | "server" | "startup";
    export class $IConfigSpec {
    }
    export interface $IConfigSpec {
        correct(arg0: $CommentedConfig): void;
        isCorrect(arg0: $UnmodifiableCommentedConfig): boolean;
        acceptConfig(arg0: $IConfigSpec$ILoadedConfig): void;
        validateSpec(arg0: $ModConfig): void;
        isEmpty(): boolean;
        get empty(): boolean;
    }
    export class $ModConfig {
        getLoadedConfig(): $IConfigSpec$ILoadedConfig;
        getModId(): string;
        getFullPath(): $Path;
        getType(): $ModConfig$Type;
        getFileName(): string;
        getSpec(): $IConfigSpec;
        get loadedConfig(): $IConfigSpec$ILoadedConfig;
        get modId(): string;
        get fullPath(): $Path;
        get type(): $ModConfig$Type;
        get fileName(): string;
        get spec(): $IConfigSpec;
    }
}
