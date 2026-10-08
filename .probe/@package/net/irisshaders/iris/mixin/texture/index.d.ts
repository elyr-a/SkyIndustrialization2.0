import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite, $SpriteContents$FrameInfo, $SpriteContents$AnimatedTexture } from "@package/net/minecraft/client/renderer/texture";
import { $Map, $List } from "@package/java/util";

declare module "@package/net/irisshaders/iris/mixin/texture" {
    export class $SimpleTextureAccessor {
    }
    export interface $SimpleTextureAccessor {
        getLocation(): $ResourceLocation;
        get location(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $SimpleTextureAccessor}.
     */
    export type $SimpleTextureAccessor_ = (() => $ResourceLocation_);
    export class $AnimationMetadataSectionAccessor {
    }
    export interface $AnimationMetadataSectionAccessor {
        getFrameHeight(): number;
        setFrameWidth(arg0: number): void;
        getFrameWidth(): number;
        setFrameHeight(arg0: number): void;
    }
    export class $SpriteContentsAccessor {
    }
    export interface $SpriteContentsAccessor {
        getAnimatedTexture(): $SpriteContents$AnimatedTexture;
        get animatedTexture(): $SpriteContents$AnimatedTexture;
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsAccessor}.
     */
    export type $SpriteContentsAccessor_ = (() => $SpriteContents$AnimatedTexture);
    export class $SpriteContentsAnimatedTextureAccessor {
    }
    export interface $SpriteContentsAnimatedTextureAccessor {
        getFrames(): $List<$SpriteContents$FrameInfo>;
        invokeUploadFrame(arg0: number, arg1: number, arg2: number): void;
        get frames(): $List<$SpriteContents$FrameInfo>;
    }
    export class $TextureAtlasAccessor {
    }
    export interface $TextureAtlasAccessor {
        getTexturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        callGetWidth(): number;
        callGetHeight(): number;
        getMipLevel(): number;
        get texturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get mipLevel(): number;
    }
    export class $SpriteContentsTickerAccessor {
    }
    export interface $SpriteContentsTickerAccessor {
        getFrame(): number;
        getSubFrame(): number;
        setSubFrame(arg0: number): void;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        setFrame(arg0: number): void;
        get animationInfo(): $SpriteContents$AnimatedTexture;
    }
    export class $SpriteContentsFrameInfoAccessor {
    }
    export interface $SpriteContentsFrameInfoAccessor {
        getIndex(): number;
        getTime(): number;
        get index(): number;
        get time(): number;
    }
}
