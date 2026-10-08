import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractWidget, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Enum } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List } from "@package/java/util";

declare module "@package/net/minecraft/client/gui/screens/debug" {
    export class $GameModeSwitcherScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        constructor();
    }
    export class $GameModeSwitcherScreen$GameModeIcon extends $Enum<$GameModeSwitcherScreen$GameModeIcon> {
    }
    /**
     * Values that may be interpreted as {@link $GameModeSwitcherScreen$GameModeIcon}.
     */
    export type $GameModeSwitcherScreen$GameModeIcon_ = "creative" | "survival" | "adventure" | "spectator";
    export class $GameModeSwitcherScreen$GameModeSlot extends $AbstractWidget {
        setSelected(isSelected: boolean): void;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
        constructor(icon: $GameModeSwitcherScreen, x: $GameModeSwitcherScreen$GameModeIcon_, y: number, arg3: number);
        set selected(value: boolean);
    }
}
