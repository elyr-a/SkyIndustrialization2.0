import { $SpriteContentsAnimatedTextureAccessor, $SpriteContentsTickerAccessor as $SpriteContentsTickerAccessor$1, $SpriteContentsAccessor as $SpriteContentsAccessor$1, $TextureAtlasAccessor as $TextureAtlasAccessor$1, $SimpleTextureAccessor, $SpriteContentsFrameInfoAccessor as $SpriteContentsFrameInfoAccessor$2 } from "@package/net/irisshaders/iris/mixin/texture";
import { $TextureAtlasSpriteExtension, $SpriteContentsExtension as $SpriteContentsExtension$3 } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline";
import { $TextureMetadataSection } from "@package/net/minecraft/client/resources/metadata/texture";
import { $FrameSize_ } from "@package/net/minecraft/client/resources/metadata/animation";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SpriteContentsFrameInfoAccessor, $AnimatedTextureAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/tracking";
import { $ResourceManager, $ResourceMetadata_, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_, $ResourceMetadata } from "@package/net/minecraft/server/packs/resources";
import { $SpriteContentsInvoker } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures";
import { $List, $Map_, $Collection_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $SpriteResourceLoader, $SpriteResourceLoader_ } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Function_ } from "@package/java/util/function";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $SpriteContentsFrameInfoAccessor as $SpriteContentsFrameInfoAccessor$1, $SpriteContentsTickerAccessor, $SpriteContentsAccessor, $SpriteContentsAnimatedTextureAccessor as $SpriteContentsAnimatedTextureAccessor$1 } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/upload";
import { $PBRSpriteHolder, $SpriteContentsExtension, $PBRAtlasHolder, $TextureAtlasExtension } from "@package/net/irisshaders/iris/pbr/texture";
import { $Record, $RuntimeException, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $IOException, $File_, $Closeable } from "@package/java/io";
import { $SpriteContentsExtension as $SpriteContentsExtension$2 } from "@package/net/irisshaders/iris/pbr";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $SpriteFinderImpl$SpriteFinderAccess as $SpriteFinderImpl$SpriteFinderAccess$1, $SpriteFinderImpl } from "@package/net/fabricmc/fabric/impl/renderer";
import { $IntStream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $SpriteContentsExtension as $SpriteContentsExtension$1 } from "@package/net/caffeinemc/mods/sodium/client/render/texture";
import { $TextureAtlasAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/core/render/texture";
import { $SpriteFinderImpl$SpriteFinderAccess } from "@package/dev/technici4n/moderndynamics/thirdparty/fabric";
export * as atlas from "@package/net/minecraft/client/renderer/texture/atlas";

declare module "@package/net/minecraft/client/renderer/texture" {
    export class $StitcherException extends $RuntimeException {
        getAllSprites(): $Collection<$Stitcher$Entry>;
        constructor(entry: $Stitcher$Entry, allSprites: $Collection_<$Stitcher$Entry>);
        get allSprites(): $Collection<$Stitcher$Entry>;
    }
    export class $Stitcher<T extends $Stitcher$Entry> {
        registerSprite(stitcherEntry: T): void;
        getWidth(): number;
        getHeight(): number;
        gatherSprites(loader: $Stitcher$SpriteLoader_<T>): void;
        stitch(): void;
        constructor(maxWidth: number, maxHeight: number, mipLevel: number);
        get width(): number;
        get height(): number;
    }
    export class $PreloadedTexture extends $SimpleTexture {
        getFuture(): $CompletableFuture<void>;
        static NOT_ASSIGNED: number;
        constructor(resourceManager: $ResourceManager, location: $ResourceLocation_, backgroundExecutor: $Executor_);
        get future(): $CompletableFuture<void>;
    }
    export class $SpriteTicker {
    }
    export interface $SpriteTicker extends $AutoCloseable {
        tickAndUpload(x: number, y: number): void;
        close(): void;
    }
    export class $AbstractTexture implements $AutoCloseable {
        setBlurMipmap(blur: boolean, mipmap: boolean): void;
        releaseId(): void;
        restoreLastBlurMipmap(): void;
        reset(textureManager: $TextureManager, resourceManager: $ResourceManager, path: $ResourceLocation_, executor: $Executor_): void;
        load(resourceManager: $ResourceManager): void;
        getId(): number;
        close(): void;
        bind(): void;
        setFilter(blur: boolean, mipmap: boolean): void;
        static NOT_ASSIGNED: number;
        constructor();
        get id(): number;
    }
    export class $SpriteContents$Ticker implements $SpriteTicker, $SpriteContentsTickerAccessor$1, $SpriteContentsTickerAccessor {
        tickAndUpload(x: number, y: number): void;
        close(): void;
        handler$bcf000$sodium$assignParent(arg0: $SpriteContents, arg1: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData, arg3: $CallbackInfo): void;
        getFrameIndex(): number;
        getFrame(): number;
        getSubFrame(): number;
        setSubFrame(arg0: number): void;
        getFrameTicks(): number;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        setFrame(arg0: number): void;
        get frameIndex(): number;
        get frameTicks(): number;
        get animationInfo(): $SpriteContents$AnimatedTexture;
    }
    export class $OverlayTexture implements $AutoCloseable {
        teardownOverlayColor(): void;
        static pack(u: number, v: number): number;
        static pack(u: number, hurt: boolean): number;
        setupOverlayColor(): void;
        static v(hurt: boolean): number;
        close(): void;
        static u(u: number): number;
        static NO_WHITE_U: number;
        static WHITE_OVERLAY_V: number;
        static NO_OVERLAY: number;
        static RED_OVERLAY_V: number;
        constructor();
    }
    export class $SpriteContents implements $Stitcher$Entry, $AutoCloseable, $SpriteContentsExtension$2, $SpriteContentsAccessor$1, $SpriteContentsExtension, $SpriteContentsInvoker, $SpriteContentsExtension$1, $SpriteContentsAccessor, $SpriteContentsExtension$3 {
        createTicker(): $SpriteTicker;
        isTransparent(frame: number, x: number, y: number): boolean;
        getFrameCount(): number;
        getOrCreatePBRHolder(): $PBRSpriteHolder;
        getPBRHolder(): $PBRSpriteHolder;
        uploadFirstFrame(x: number, y: number): void;
        getCreatedTicker(): $SpriteContents$Ticker;
        sodium$setActive(arg0: boolean): void;
        sodium$isActive(): boolean;
        name(): $ResourceLocation;
        close(): void;
        height(): number;
        width(): number;
        metadata(): $ResourceMetadata;
        getOriginalImage(): $NativeImage;
        getUniqueFrames(): $IntStream;
        increaseMipLevel(mipLevel: number): void;
        sodium$hasAnimation(): boolean;
        sodium$hasTranslucentPixels(): boolean;
        sodium$hasTransparentPixels(): boolean;
        getImages(): $NativeImage[];
        invokeUpload(x: number, y: number, frameX: number, frameY: number, atlasData: $NativeImage[]): void;
        getAnimatedTexture(): $SpriteContents$AnimatedTexture;
        animatedTexture: $SpriteContents$AnimatedTexture;
        byMipLevel: $NativeImage[];
        originalImage: $NativeImage;
        constructor(name: $ResourceLocation_, frameSize: $FrameSize_, originalImage: $NativeImage, metadata: $ResourceMetadata_);
        get frameCount(): number;
        get orCreatePBRHolder(): $PBRSpriteHolder;
        get PBRHolder(): $PBRSpriteHolder;
        get createdTicker(): $SpriteContents$Ticker;
        get uniqueFrames(): $IntStream;
        get images(): $NativeImage[];
    }
    export class $Dumpable {
    }
    export interface $Dumpable {
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
    }
    /**
     * Values that may be interpreted as {@link $Dumpable}.
     */
    export type $Dumpable_ = ((arg0: $ResourceLocation, arg1: $Path) => void);
    export class $DynamicTexture extends $AbstractTexture implements $Dumpable {
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        upload(): void;
        getPixels(): $NativeImage;
        setPixels(pixels: $NativeImage): void;
        static NOT_ASSIGNED: number;
        constructor(pixels: $NativeImage);
        constructor(width: number, height: number, useCalloc: boolean);
    }
    export class $SpriteContents$AnimatedTexture implements $SpriteContentsAnimatedTextureAccessor, $AnimatedTextureAccessor, $SpriteContentsAnimatedTextureAccessor$1 {
        createTicker(): $SpriteTicker;
        uploadFrame(x: number, y: number, frameIndex: number): void;
        uploadFirstFrame(x: number, y: number): void;
        getUniqueFrames(): $IntStream;
        getFrames(): $List<$SpriteContents$FrameInfo>;
        getFrameRowSize(): number;
        invokeUploadFrame(x: number, y: number, frameIndex: number): void;
        frames: $List<$SpriteContents$FrameInfo>;
        frameRowSize: number;
        interpolateFrames: boolean;
        get uniqueFrames(): $IntStream;
    }
    export class $HttpTexture extends $SimpleTexture {
        static NOT_ASSIGNED: number;
        constructor(file: $File_ | null, urlString: string, location: $ResourceLocation_, processLegacySkin: boolean, onDownloaded: $Runnable_ | null);
    }
    export class $SpriteContents$InterpolationData implements $AutoCloseable {
        close(): void;
        handler$bcj000$sodium$assignParent(arg0: $SpriteContents, arg1: $CallbackInfo): void;
    }
    export class $SpriteLoader$Preparations extends $Record {
        missing(): $TextureAtlasSprite;
        mipLevel(): number;
        waitForUpload(): $CompletableFuture<$SpriteLoader$Preparations>;
        readyForUpload(): $CompletableFuture<void>;
        height(): number;
        width(): number;
        regions(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        constructor(width: number, height: number, mipLevel: number, missing: $TextureAtlasSprite, regions: $Map_<$ResourceLocation_, $TextureAtlasSprite>, readyForUpload: $CompletableFuture<void>);
    }
    /**
     * Values that may be interpreted as {@link $SpriteLoader$Preparations}.
     */
    export type $SpriteLoader$Preparations_ = { height?: number, missing?: $TextureAtlasSprite, width?: number, readyForUpload?: $CompletableFuture<void>, mipLevel?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>,  } | [height?: number, missing?: $TextureAtlasSprite, width?: number, readyForUpload?: $CompletableFuture<void>, mipLevel?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, ];
    export class $Tickable {
    }
    export interface $Tickable {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $Tickable}.
     */
    export type $Tickable_ = (() => void);
    export class $TextureAtlas extends $AbstractTexture implements $Dumpable, $Tickable, $SpriteFinderImpl$SpriteFinderAccess$1, $TextureAtlasAccessor$1, $TextureAtlasExtension, $TextureAtlasAccessor, $SpriteFinderImpl$SpriteFinderAccess {
        maxSupportedTextureSize(): number;
        getTextures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        getSprite(name: $ResourceLocation_): $TextureAtlasSprite;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        upload(preparations: $SpriteLoader$Preparations_): void;
        cycleAnimationFrames(): void;
        getOrCreatePBRHolder(): $PBRAtlasHolder;
        fabric_spriteFinder(): $SpriteFinderImpl;
        getPBRHolder(): $PBRAtlasHolder;
        updateFilter(preparations: $SpriteLoader$Preparations_): void;
        clearTextureData(): void;
        location(): $ResourceLocation;
        getWidth(): number;
        getHeight(): number;
        tick(): void;
        sodium$getWidth(): number;
        sodium$getHeight(): number;
        getTexturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        callGetWidth(): number;
        callGetHeight(): number;
        getMipLevel(): number;
        static NOT_ASSIGNED: number;
        /**
         * @deprecated
         */
        static LOCATION_BLOCKS: $ResourceLocation;
        /**
         * @deprecated
         */
        static LOCATION_PARTICLES: $ResourceLocation;
        texturesByName: $Map<$ResourceLocation, $TextureAtlasSprite>;
        width: number;
        sprites: $List<$SpriteContents>;
        height: number;
        constructor(location: $ResourceLocation_);
        get textures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get orCreatePBRHolder(): $PBRAtlasHolder;
        get PBRHolder(): $PBRAtlasHolder;
        get mipLevel(): number;
    }
    export class $Stitcher$Holder<T extends $Stitcher$Entry> extends $Record {
        entry(): T;
        height(): number;
        width(): number;
        constructor(entry: T, mipLevel: number);
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$Holder}.
     */
    export type $Stitcher$Holder_<T> = { width?: number, entry?: $Stitcher$Entry, height?: number,  } | [width?: number, entry?: $Stitcher$Entry, height?: number, ];
    export class $Stitcher$Region<T extends $Stitcher$Entry> {
        getX(): number;
        walk(spriteLoader: $Stitcher$SpriteLoader_<T>): void;
        add(holder: $Stitcher$Holder_<T>): boolean;
        getY(): number;
        constructor(originX: number, originY: number, width: number, height: number);
        get x(): number;
        get y(): number;
    }
    export class $SimpleTexture extends $AbstractTexture implements $SimpleTextureAccessor {
        getLocation(): $ResourceLocation;
        static NOT_ASSIGNED: number;
        constructor(location: $ResourceLocation_);
        get location(): $ResourceLocation;
    }
    export class $SpriteLoader {
        loadAndStitch(resouceManager: $ResourceManager, location: $ResourceLocation_, mipLevel: number, executor: $Executor_): $CompletableFuture<$SpriteLoader$Preparations>;
        loadAndStitch(resourceManager: $ResourceManager, location: $ResourceLocation_, mipLevel: number, executor: $Executor_, sectionSerializers: $Collection_<$MetadataSectionSerializer<never>>): $CompletableFuture<$SpriteLoader$Preparations>;
        static create(atlas: $TextureAtlas): $SpriteLoader;
        static runSpriteSuppliers(spriteResourceLoader: $SpriteResourceLoader_, factories: $List_<$Function_<$SpriteResourceLoader, $SpriteContents>>, executor: $Executor_): $CompletableFuture<$List<$SpriteContents>>;
        stitch(contents: $List_<$SpriteContents>, mipLevel: number, executor: $Executor_): $SpriteLoader$Preparations;
        static DEFAULT_METADATA_SECTIONS: $Set<$MetadataSectionSerializer<never>>;
        constructor(location: $ResourceLocation_, maxSupportedTextureSize: number, minWidth: number, minHeight: number);
    }
    export class $TextureManager implements $PreparableReloadListener, $Tickable, $AutoCloseable {
        getTexture(path: $ResourceLocation_, defaultTexture: $AbstractTexture): $AbstractTexture;
        getTexture(path: $ResourceLocation_): $AbstractTexture;
        preload(path: $ResourceLocation_, backgroundExecutor: $Executor_): $CompletableFuture<void>;
        dumpAllSheets(path: $Path_): void;
        register(name: string, texture: $DynamicTexture): $ResourceLocation;
        register(path: $ResourceLocation_, texture: $AbstractTexture): void;
        close(): void;
        release(path: $ResourceLocation_): void;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        tick(): void;
        bindForSetup(path: $ResourceLocation_): void;
        getName(): string;
        byPath: $Map<$ResourceLocation, $AbstractTexture>;
        static INTENTIONAL_MISSING_TEXTURE: $ResourceLocation;
        constructor(resourceManager: $ResourceManager);
        get name(): string;
    }
    export class $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
    }
    export interface $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
        load(entry: T, x: number, y: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$SpriteLoader}.
     */
    export type $Stitcher$SpriteLoader_<T> = ((arg0: T, arg1: number, arg2: number) => void);
    export class $MissingTextureAtlasSprite {
        static getTexture(): $DynamicTexture;
        static getLocation(): $ResourceLocation;
        static create(): $SpriteContents;
        constructor();
        static get texture(): $DynamicTexture;
        static get location(): $ResourceLocation;
    }
    export class $TextureAtlasSprite implements $TextureAtlasSpriteExtension {
        createTicker(): $TextureAtlasSprite$Ticker;
        atlasLocation(): $ResourceLocation;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV1(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU1(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV0(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU0(): number;
        getV(u: number): number;
        getU(u: number): number;
        getX(): number;
        sodium$hasUnknownImageContents(): boolean;
        getPixelRGBA(arg0: number, arg1: number, arg2: number): number;
        getUOffset(u: number): number;
        getVOffset(u: number): number;
        uploadFirstFrame(): void;
        wrap(consumer: $VertexConsumer): $VertexConsumer;
        getY(): number;
        contents(): $SpriteContents;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        uvShrinkRatio(): number;
        x: number;
        y: number;
        get v1(): number;
        get u1(): number;
        get v0(): number;
        get u0(): number;
    }
    export class $SpriteContents$FrameInfo implements $SpriteContentsFrameInfoAccessor$2, $SpriteContentsFrameInfoAccessor, $SpriteContentsFrameInfoAccessor$1 {
        getIndex(): number;
        getTime(): number;
        index: number;
        time: number;
    }
    export class $SimpleTexture$TextureImage implements $Closeable {
        throwIfError(): void;
        getTextureMetadata(): $TextureMetadataSection;
        static load(resourceManager: $ResourceManager, location: $ResourceLocation_): $SimpleTexture$TextureImage;
        close(): void;
        getImage(): $NativeImage;
        constructor(exception: $IOException);
        constructor(metadata: $TextureMetadataSection | null, image: $NativeImage);
        get textureMetadata(): $TextureMetadataSection;
        get image(): $NativeImage;
    }
    export class $MipmapGenerator {
        static generateMipLevels(images: $NativeImage[], mipLevel: number): $NativeImage[];
    }
    export class $TextureAtlasSprite$Ticker {
    }
    export interface $TextureAtlasSprite$Ticker extends $AutoCloseable {
        tickAndUpload(): void;
        close(): void;
    }
    export class $Stitcher$Entry {
    }
    export interface $Stitcher$Entry {
        name(): $ResourceLocation;
        height(): number;
        width(): number;
    }
}
