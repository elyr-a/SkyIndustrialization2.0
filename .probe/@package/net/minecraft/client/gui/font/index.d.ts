import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $GlyphProviderDefinition$Conditional_, $GlyphProviderDefinition$Conditional } from "@package/net/minecraft/client/gui/font/providers";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $Minecraft, $Options } from "@package/net/minecraft/client";
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $Set_, $List_, $Map } from "@package/java/util";
import { $StringRepresentable, $DependencySorter$Entry } from "@package/net/minecraft/util";
import { $SheetGlyphInfo, $GlyphProvider$Conditional, $GlyphProvider, $GlyphInfo, $GlyphProvider_, $GlyphProvider$Conditional_ } from "@package/com/mojang/blaze3d/font";
import { $Consumer, $IntFunction_, $Supplier_, $Consumer_, $Predicate_, $Supplier } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Dumpable, $AbstractTexture, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
import { $Font, $Font$DisplayMode_ } from "@package/net/minecraft/client/gui";
export * as providers from "@package/net/minecraft/client/gui/font/providers";
export * as glyphs from "@package/net/minecraft/client/gui/font/glyphs";

declare module "@package/net/minecraft/client/gui/font" {
    export class $FontOption extends $Enum<$FontOption> implements $StringRepresentable {
        getSerializedName(): string;
        static values(): $FontOption[];
        static valueOf(arg0: string): $FontOption;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$FontOption>;
        static UNIFORM: $FontOption;
        static JAPANESE_VARIANTS: $FontOption;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FontOption}.
     */
    export type $FontOption_ = "uniform" | "jp";
    export class $FontTexture extends $AbstractTexture implements $Dumpable {
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        add(glyphInfo: $SheetGlyphInfo): $BakedGlyph;
        static NOT_ASSIGNED: number;
        constructor(renderTypes: $GlyphRenderTypes_, colored: boolean);
    }
    export class $FontSet$GlyphInfoFilter extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FontSet$GlyphInfoFilter}.
     */
    export type $FontSet$GlyphInfoFilter_ = { glyphInfo?: $GlyphInfo, glyphInfoNotFishy?: $GlyphInfo,  } | [glyphInfo?: $GlyphInfo, glyphInfoNotFishy?: $GlyphInfo, ];
    export class $CodepointMap$Output<T> {
    }
    export interface $CodepointMap$Output<T> {
        accept(index: number, object: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CodepointMap$Output}.
     */
    export type $CodepointMap$Output_<T> = ((arg0: number, arg1: T) => void);
    export class $FontTexture$Node {
    }
    export class $TextFieldHelper$CursorStep extends $Enum<$TextFieldHelper$CursorStep> {
        static values(): $TextFieldHelper$CursorStep[];
        static valueOf(arg0: string): $TextFieldHelper$CursorStep;
        static WORD: $TextFieldHelper$CursorStep;
        static CHARACTER: $TextFieldHelper$CursorStep;
    }
    /**
     * Values that may be interpreted as {@link $TextFieldHelper$CursorStep}.
     */
    export type $TextFieldHelper$CursorStep_ = "character" | "word";
    export class $CodepointMap<T> {
        remove(index: number): T;
        get(index: number): T;
        put(index: number, value: T): T;
        clear(): void;
        forEach(output: $CodepointMap$Output_<T>): void;
        computeIfAbsent(index: number, valueIfAbsentGetter: $IntFunction_<T>): T;
        keySet(): $IntSet;
        constructor(blockConstructor: $IntFunction_<T[]>, blockMapConstructor: $IntFunction_<T[][]>);
    }
    export class $FontOption$Filter {
        apply(options: $Set_<$FontOption_>): boolean;
        merge(filter: $FontOption$Filter): $FontOption$Filter;
        static CODEC: $Codec<$FontOption$Filter>;
        static ALWAYS_PASS: $FontOption$Filter;
        constructor(values: $Map_<$FontOption_, boolean>);
    }
    export class $FontManager$UnresolvedBuilderBundle extends $Record implements $DependencySorter$Entry<$ResourceLocation> {
    }
    /**
     * Values that may be interpreted as {@link $FontManager$UnresolvedBuilderBundle}.
     */
    export type $FontManager$UnresolvedBuilderBundle_ = { builders?: $List_<$FontManager$BuilderResult_>, dependencies?: $Set_<$ResourceLocation_>, fontId?: $ResourceLocation_,  } | [builders?: $List_<$FontManager$BuilderResult_>, dependencies?: $Set_<$ResourceLocation_>, fontId?: $ResourceLocation_, ];
    export class $FontManager$FontDefinitionFile extends $Record {
        providers(): $List<$GlyphProviderDefinition$Conditional>;
        static CODEC: $Codec<$FontManager$FontDefinitionFile>;
        constructor(arg0: $List_<$GlyphProviderDefinition$Conditional_>);
    }
    /**
     * Values that may be interpreted as {@link $FontManager$FontDefinitionFile}.
     */
    export type $FontManager$FontDefinitionFile_ = { providers?: $List_<$GlyphProviderDefinition$Conditional_>,  } | [providers?: $List_<$GlyphProviderDefinition$Conditional_>, ];
    export class $TextFieldHelper {
        insertText(text: string): void;
        keyPressed(key: number): boolean;
        charTyped(character: string): boolean;
        cut(): void;
        moveByChars(direction: number, keepSelection: boolean): void;
        moveByChars(direction: number): void;
        moveByWords(direction: number): void;
        moveByWords(direction: number, keepSelection: boolean): void;
        moveBy(direction: number, keepSelection: boolean, cursorStep: $TextFieldHelper$CursorStep_): void;
        static createClipboardGetter(minecraft: $Minecraft): $Supplier<string>;
        removeCharsFromCursor(direction: number): void;
        static setClipboardContents(text: $Minecraft, arg1: string): void;
        static getClipboardContents(minecraft: $Minecraft): string;
        static createClipboardSetter(minecraft: $Minecraft): $Consumer<string>;
        getCursorPos(): number;
        setSelectionPos(direction: number): void;
        setCursorPos(direction: number): void;
        setCursorPos(direction: number, keepSelection: boolean): void;
        paste(): void;
        selectAll(): void;
        copy(): void;
        setCursorToEnd(): void;
        setCursorToEnd(keepSelection: boolean): void;
        setCursorToStart(): void;
        setCursorToStart(keepSelection: boolean): void;
        removeFromCursor(direction: number, step: $TextFieldHelper$CursorStep_): void;
        getSelectionPos(): number;
        isSelecting(): boolean;
        setSelectionRange(selectionStart: number, selectionEnd: number): void;
        removeWordsFromCursor(direction: number): void;
        constructor(getMessage: $Supplier_<string>, setMessage: $Consumer_<string>, getClipboard: $Supplier_<string>, setClipboard: $Consumer_<string>, stringValidator: $Predicate_<string>);
        get selecting(): boolean;
    }
    export class $GlyphRenderTypes extends $Record {
        polygonOffset(): $RenderType;
        normal(): $RenderType;
        select(displayMode: $Font$DisplayMode_): $RenderType;
        seeThrough(): $RenderType;
        static createForColorTexture(id: $ResourceLocation_): $GlyphRenderTypes;
        static createForIntensityTexture(id: $ResourceLocation_): $GlyphRenderTypes;
        constructor(arg0: $RenderType, arg1: $RenderType, arg2: $RenderType);
    }
    /**
     * Values that may be interpreted as {@link $GlyphRenderTypes}.
     */
    export type $GlyphRenderTypes_ = { polygonOffset?: $RenderType, normal?: $RenderType, seeThrough?: $RenderType,  } | [polygonOffset?: $RenderType, normal?: $RenderType, seeThrough?: $RenderType, ];
    export class $FontManager implements $PreparableReloadListener, $AutoCloseable {
        updateOptions(options: $Options): void;
        createFont(): $Font;
        createFontFilterFishy(): $Font;
        close(): void;
        prepare(resourceManager: $ResourceManager, executor: $Executor_): $CompletableFuture<$FontManager$Preparation>;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        static MISSING_FONT: $ResourceLocation;
        constructor(textureManager: $TextureManager);
        get name(): string;
    }
    export class $FontManager$Preparation extends $Record {
        fontSets(): $Map<$ResourceLocation, $List<$GlyphProvider$Conditional>>;
        allProviders(): $List<$GlyphProvider>;
    }
    /**
     * Values that may be interpreted as {@link $FontManager$Preparation}.
     */
    export type $FontManager$Preparation_ = { allProviders?: $List_<$GlyphProvider_>, fontSets?: $Map_<$ResourceLocation_, $List_<$GlyphProvider$Conditional_>>,  } | [allProviders?: $List_<$GlyphProvider_>, fontSets?: $Map_<$ResourceLocation_, $List_<$GlyphProvider$Conditional_>>, ];
    export class $AllMissingGlyphProvider implements $GlyphProvider {
        getGlyph(arg0: number): $GlyphInfo;
        getSupportedGlyphs(): $IntSet;
        close(): void;
        constructor();
        get supportedGlyphs(): $IntSet;
    }
    export class $FontManager$BuilderId extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FontManager$BuilderId}.
     */
    export type $FontManager$BuilderId_ = { index?: number, fontId?: $ResourceLocation_, pack?: string,  } | [index?: number, fontId?: $ResourceLocation_, pack?: string, ];
    export class $FontManager$BuilderResult extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FontManager$BuilderResult}.
     */
    export type $FontManager$BuilderResult_ = { id?: $FontManager$BuilderId_, result?: $Either<$CompletableFuture<($GlyphProvider_) | undefined>, $ResourceLocation_>, filter?: $FontOption$Filter,  } | [id?: $FontManager$BuilderId_, result?: $Either<$CompletableFuture<($GlyphProvider_) | undefined>, $ResourceLocation_>, filter?: $FontOption$Filter, ];
    export class $FontSet implements $AutoCloseable {
        getGlyph(character: number): $BakedGlyph;
        name(): $ResourceLocation;
        close(): void;
        reload(options: $Set_<$FontOption_>): void;
        reload(allProviders: $List_<$GlyphProvider$Conditional_>, options: $Set_<$FontOption_>): void;
        getRandomGlyph(glyph: $GlyphInfo): $BakedGlyph;
        getGlyphInfo(character: number, filterFishyGlyphs: boolean): $GlyphInfo;
        whiteGlyph(): $BakedGlyph;
        constructor(textureManager: $TextureManager, name: $ResourceLocation_);
    }
}
