import { $IModInfo } from "@package/net/neoforged/neoforgespi/language";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractSliderButton, $ObjectSelectionList$Entry, $Button$OnPress_, $Button$CreateNarration_, $Button$Builder, $ObjectSelectionList, $Button, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ModListScreen } from "@package/net/neoforged/neoforge/client/gui";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/neoforged/neoforge/client/gui/widget" {
    /**
     * Custom button subclass to draw an indicator overlay on the button when updates are available.
     */
    export class $ModsButton extends $Button {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        active: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: $Button$Builder);
    }
    export class $ModListWidget$ModEntry extends $ObjectSelectionList$Entry<$ModListWidget$ModEntry> {
        getContainer(): $ModContainer;
        getInfo(): $IModInfo;
        get container(): $ModContainer;
        get info(): $IModInfo;
    }
    /**
     * This class provides a button that shows a string glyph at the beginning. The glyph can be scaled using the glyphScale parameter.
     */
    export class $UnicodeGlyphButton extends $ExtendedButton {
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        glyph: string;
        static UNSET_FG_COLOR: number;
        glyphScale: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: string, arg6: number, arg7: $Button$OnPress_);
    }
    /**
     * Slider widget implementation which allows inputting values in a certain range with optional step size.
     */
    export class $ExtendedSlider extends $AbstractSliderButton {
        getValue(): number;
        setValue(value: number): void;
        getValueString(): string;
        getValueInt(): number;
        getValueLong(): number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
        /**
         * Overload with `stepSize` set to 1, useful for sliders with whole number values.
         */
        constructor(x: number, y: number, width: number, height: number, prefix: $Component_, suffix: $Component_, minValue: number, maxValue: number, currentValue: number, drawString: boolean);
        constructor(x: number, y: number, width: number, height: number, prefix: $Component_, suffix: $Component_, minValue: number, maxValue: number, currentValue: number, stepSize: number, precision: number, drawString: boolean);
        get valueString(): string;
        get valueInt(): number;
        get valueLong(): number;
    }
    export class $ModListWidget extends $ObjectSelectionList<$ModListWidget$ModEntry> {
        refreshList(): void;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        x: number;
        y: number;
        active: boolean;
        hovered: $ModListWidget$ModEntry;
        constructor(parent: $ModListScreen, listWidth: number, top: number, bottom: number);
    }
    /**
     * Abstract scroll panel class.
     */
    export class $ScrollPanel extends $AbstractContainerEventHandler implements $Renderable, $NarratableEntry {
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isActive(): boolean;
        constructor(client: $Minecraft, width: number, height: number, top: number, left: number, border: number);
        constructor(client: $Minecraft, width: number, height: number, top: number, left: number, border: number, barWidth: number);
        /**
         * Base constructor
         */
        constructor(client: $Minecraft, width: number, height: number, top: number, left: number, border: number, barWidth: number, barBgColor: number, barColor: number, barBorderColor: number);
        constructor(client: $Minecraft, width: number, height: number, top: number, left: number);
        get active(): boolean;
    }
    /**
     * This class provides a button that fixes several bugs present in the vanilla GuiButton drawing code.
     * The gist of it is that it allows buttons of any size without gaps in the graphics and with the
     * borders drawn properly. It also prevents button text from extending out of the sides of the button by
     * trimming the end of the string and adding an ellipsis.
     * 
     * The code that handles drawing the button is in GuiUtils.
     */
    export class $ExtendedButton extends $Button {
        /**
         * Draws this button to the screen.
         */
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        active: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Button$OnPress_);
        constructor(builder: $Button$Builder);
        constructor(x: number, y: number, width: number, height: number, message: $Component_, onPress: $Button$OnPress_, createNarration: $Button$CreateNarration_);
    }
}
