import { $AtlasPBRLoader$PBRTextureAtlasSprite } from "@package/net/irisshaders/iris/pbr/loader";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SpriteContents$Ticker, $Dumpable, $TextureAtlasSprite, $AbstractTexture, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum } from "@package/java/lang";

declare module "@package/net/irisshaders/iris/pbr/texture" {
    export class $PBRAtlasHolder {
        cycleAnimationFrames(): void;
        getNormalAtlas(): $PBRAtlasTexture;
        getSpecularAtlas(): $PBRAtlasTexture;
        setSpecularAtlas(arg0: $PBRAtlasTexture): void;
        setNormalAtlas(arg0: $PBRAtlasTexture): void;
        constructor();
    }
    export class $PBRSpriteHolder {
        getNormalSprite(): $TextureAtlasSprite;
        getSpecularSprite(): $TextureAtlasSprite;
        close(): void;
        setNormalSprite(arg0: $TextureAtlasSprite): void;
        setSpecularSprite(arg0: $TextureAtlasSprite): void;
        constructor();
    }
    export class $PBRAtlasTexture extends $AbstractTexture implements $PBRDumpable {
        addSprite(arg0: $AtlasPBRLoader$PBRTextureAtlasSprite): void;
        getSprite(arg0: $ResourceLocation_): $AtlasPBRLoader$PBRTextureAtlasSprite;
        getAtlasId(): $ResourceLocation;
        dumpContents(arg0: $ResourceLocation_, arg1: $Path_): void;
        getDefaultDumpLocation(): $ResourceLocation;
        upload(arg0: number, arg1: number, arg2: number): void;
        cycleAnimationFrames(): void;
        clear(): void;
        getType(): $PBRType;
        tryUpload(arg0: number, arg1: number, arg2: number): boolean;
        static syncAnimation(arg0: $SpriteContents$Ticker, arg1: $SpriteContents$Ticker): void;
        static NOT_ASSIGNED: number;
        constructor(arg0: $TextureAtlas, arg1: $PBRType_);
        get atlasId(): $ResourceLocation;
        get defaultDumpLocation(): $ResourceLocation;
        get type(): $PBRType;
    }
    export class $SpriteContentsExtension {
    }
    export interface $SpriteContentsExtension {
        getOrCreatePBRHolder(): $PBRSpriteHolder;
        getPBRHolder(): $PBRSpriteHolder;
        get orCreatePBRHolder(): $PBRSpriteHolder;
        get PBRHolder(): $PBRSpriteHolder;
    }
    export class $TextureAtlasExtension {
    }
    export interface $TextureAtlasExtension {
        getOrCreatePBRHolder(): $PBRAtlasHolder;
        getPBRHolder(): $PBRAtlasHolder;
        get orCreatePBRHolder(): $PBRAtlasHolder;
        get PBRHolder(): $PBRAtlasHolder;
    }
    export class $PBRType extends $Enum<$PBRType> {
        static fromFileLocation(arg0: string): $PBRType;
        getDefaultValue(): number;
        static values(): $PBRType[];
        static valueOf(arg0: string): $PBRType;
        appendSuffix(arg0: string): string;
        static removeSuffix(arg0: string): string;
        getSuffix(): string;
        static SPECULAR: $PBRType;
        static NORMAL: $PBRType;
        get defaultValue(): number;
        get suffix(): string;
    }
    /**
     * Values that may be interpreted as {@link $PBRType}.
     */
    export type $PBRType_ = "normal" | "specular";
    export class $PBRDumpable {
    }
    export interface $PBRDumpable extends $Dumpable {
        getDefaultDumpLocation(): $ResourceLocation;
        get defaultDumpLocation(): $ResourceLocation;
    }
}
