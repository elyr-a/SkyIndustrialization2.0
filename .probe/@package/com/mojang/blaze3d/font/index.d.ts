import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $Function_ } from "@package/java/util/function";
import { $GlyphProviderDefinition, $GlyphProviderType, $GlyphProviderDefinition$Reference, $GlyphProviderDefinition$Loader } from "@package/net/minecraft/client/gui/font/providers";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $FT_Face } from "@package/org/lwjgl/util/freetype";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $FontOption$Filter } from "@package/net/minecraft/client/gui/font";
import { $Map_, $Map } from "@package/java/util";
import { $AutoCloseable, $Record } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/com/mojang/blaze3d/font" {
    export class $GlyphInfo$SpaceGlyphInfo {
    }
    export interface $GlyphInfo$SpaceGlyphInfo extends $GlyphInfo {
        bake(arg0: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
    }
    /**
     * Values that may be interpreted as {@link $GlyphInfo$SpaceGlyphInfo}.
     */
    export type $GlyphInfo$SpaceGlyphInfo_ = (() => void);
    export class $TrueTypeGlyphProvider$Glyph implements $GlyphInfo {
        getAdvance(bold: boolean): number;
        getBoldOffset(): number;
        getShadowOffset(): number;
        get boldOffset(): number;
        get shadowOffset(): number;
    }
    export class $SpaceProvider implements $GlyphProvider {
        getGlyph(character: number): $GlyphInfo;
        getSupportedGlyphs(): $IntSet;
        close(): void;
        constructor(glyphs: $Map_<number, number>);
        get supportedGlyphs(): $IntSet;
    }
    export class $SheetGlyphInfo {
    }
    export interface $SheetGlyphInfo {
        getLeft(): number;
        getRight(): number;
        getBottom(): number;
        upload(xOffset: number, yOffset: number): void;
        getTop(): number;
        getBearingLeft(): number;
        getPixelWidth(): number;
        getOversample(): number;
        getBearingTop(): number;
        getPixelHeight(): number;
        isColored(): boolean;
        get left(): number;
        get right(): number;
        get bottom(): number;
        get top(): number;
        get bearingLeft(): number;
        get pixelWidth(): number;
        get oversample(): number;
        get bearingTop(): number;
        get pixelHeight(): number;
        get colored(): boolean;
    }
    export class $GlyphProvider$Conditional extends $Record implements $AutoCloseable {
        filter(): $FontOption$Filter;
        provider(): $GlyphProvider;
        close(): void;
        constructor(arg0: $GlyphProvider_, arg1: $FontOption$Filter);
    }
    /**
     * Values that may be interpreted as {@link $GlyphProvider$Conditional}.
     */
    export type $GlyphProvider$Conditional_ = { provider?: $GlyphProvider_, filter?: $FontOption$Filter,  } | [provider?: $GlyphProvider_, filter?: $FontOption$Filter, ];
    export class $GlyphInfo {
    }
    export interface $GlyphInfo {
        getAdvance(): number;
        getAdvance(bold: boolean): number;
        bake(glyphProvider: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
        getBoldOffset(): number;
        getShadowOffset(): number;
        get boldOffset(): number;
        get shadowOffset(): number;
    }
    export class $GlyphProvider {
        static BASELINE: number;
    }
    export interface $GlyphProvider extends $AutoCloseable {
        getGlyph(character: number): $GlyphInfo;
        close(): void;
        getSupportedGlyphs(): $IntSet;
        get supportedGlyphs(): $IntSet;
    }
    /**
     * Values that may be interpreted as {@link $GlyphProvider}.
     */
    export type $GlyphProvider_ = (() => $IntSet);
    export class $TrueTypeGlyphProvider implements $GlyphProvider {
        getGlyph(character: number): $GlyphInfo;
        close(): void;
        getSupportedGlyphs(): $IntSet;
        constructor(fontMemory: $ByteBuffer, face: $FT_Face, size: number, oversample: number, shiftX: number, shiftY: number, skip: string);
        get supportedGlyphs(): $IntSet;
    }
    export class $SpaceProvider$Definition extends $Record implements $GlyphProviderDefinition {
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
        type(): $GlyphProviderType;
        advances(): $Map<number, number>;
        static CODEC: $MapCodec<$SpaceProvider$Definition>;
        constructor(arg0: $Map_<number, number>);
    }
    /**
     * Values that may be interpreted as {@link $SpaceProvider$Definition}.
     */
    export type $SpaceProvider$Definition_ = { advances?: $Map_<number, number>,  } | [advances?: $Map_<number, number>, ];
}
