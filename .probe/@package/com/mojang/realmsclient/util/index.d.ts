import { $JsonObject, $JsonObject_ } from "@package/com/google/gson";
import { $Function_ } from "@package/java/util/function";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $UUID_, $Date, $Set_, $UUID, $List, $Set } from "@package/java/util";
import { $ReflectionBasedSerialization } from "@package/com/mojang/realmsclient/dto";
export * as task from "@package/com/mojang/realmsclient/util/task";

declare module "@package/com/mojang/realmsclient/util" {
    export class $RealmsUtil {
        static convertToAgePresentationFromInstant(date: $Date): $Component;
        static renderPlayerFace(guiGraphics: $GuiGraphics, x: number, y: number, size: number, playerUuid: $UUID_): void;
        static convertToAgePresentation(millis: number): $Component;
        constructor();
    }
    export class $JsonUtils {
        static getOptional<T>(key: string, json: $JsonObject_, output: $Function_<$JsonObject, T>): T;
        static getRequired<T>(key: string, json: $JsonObject_, output: $Function_<$JsonObject, T>): T;
        static getIntOr(key: string, json: $JsonObject_, defaultValue: number): number;
        static getRequiredString(key: string, json: $JsonObject_): string;
        static getBooleanOr(key: string, json: $JsonObject_, defaultValue: boolean): boolean;
        static getStringOr(key: string, json: $JsonObject_, defaultValue: string | null): string;
        static getDateOr(key: string, json: $JsonObject_): $Date;
        static getUuidOr(key: string, json: $JsonObject_, defaultValue: $UUID_ | null): $UUID;
        static getLongOr(key: string, json: $JsonObject_, defaultValue: number): number;
        static getRequiredStringOr(key: string, json: $JsonObject_, defaultValue: string): string;
        constructor();
    }
    export class $RealmsTextureManager {
        static worldTemplate(key: string, image: string | null): $ResourceLocation;
        constructor();
    }
    export class $RealmsTextureManager$RealmsTexture extends $Record {
        textureId(): $ResourceLocation;
        image(): string;
        constructor(arg0: string, arg1: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $RealmsTextureManager$RealmsTexture}.
     */
    export type $RealmsTextureManager$RealmsTexture_ = { image?: string, textureId?: $ResourceLocation_,  } | [image?: string, textureId?: $ResourceLocation_, ];
    export class $RealmsPersistence {
        static writeFile(persistenceData: $RealmsPersistence$RealmsPersistenceData): void;
        static readFile(): $RealmsPersistence$RealmsPersistenceData;
        read(): $RealmsPersistence$RealmsPersistenceData;
        save(persistenceData: $RealmsPersistence$RealmsPersistenceData): void;
        constructor();
    }
    export class $TextRenderingUtils$Line {
        segments: $List<$TextRenderingUtils$LineSegment>;
    }
    export class $RealmsPersistence$RealmsPersistenceData implements $ReflectionBasedSerialization {
        hasUnreadNews: boolean;
        newsLink: string;
        constructor();
    }
    export class $UploadTokenCache {
        static get(worldId: number): string;
        static put(worldId: number, arg1: string): void;
        static invalidate(worldId: number): void;
        constructor();
    }
    export class $LevelType extends $Enum<$LevelType> {
        getName(): $Component;
        static values(): $LevelType[];
        static valueOf(arg0: string): $LevelType;
        getDtoIndex(): number;
        static AMPLIFIED: $LevelType;
        static FLAT: $LevelType;
        static LARGE_BIOMES: $LevelType;
        static DEFAULT: $LevelType;
        get dtoIndex(): number;
    }
    /**
     * Values that may be interpreted as {@link $LevelType}.
     */
    export type $LevelType_ = "default" | "flat" | "large_biomes" | "amplified";
    export class $TextRenderingUtils {
        static split(toSplit: string, delimiter: string): $List<string>;
        static decompose(text: string, ...segments: $TextRenderingUtils$LineSegment[]): $List<$TextRenderingUtils$Line>;
    }
    export class $TextRenderingUtils$LineSegment {
        isLink(): boolean;
        getLinkUrl(): string;
        static link(linkTitle: string, linkUrl: string): $TextRenderingUtils$LineSegment;
        renderedText(): string;
        get linkUrl(): string;
    }
    export class $WorldGenerationInfo extends $Record {
        generateStructures(): boolean;
        seed(): string;
        experiments(): $Set<string>;
        levelType(): $LevelType;
        constructor(arg0: string, arg1: $LevelType_, arg2: boolean, arg3: $Set_<string>);
    }
    /**
     * Values that may be interpreted as {@link $WorldGenerationInfo}.
     */
    export type $WorldGenerationInfo_ = { experiments?: $Set_<string>, levelType?: $LevelType_, generateStructures?: boolean, seed?: string,  } | [experiments?: $Set_<string>, levelType?: $LevelType_, generateStructures?: boolean, seed?: string, ];
}
