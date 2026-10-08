import { $Difficulty } from "@package/net/minecraft/world";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $HeaderAndFooterLayout } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $CycleButton, $ObjectSelectionList$Entry, $Button$OnPress_, $ObjectSelectionList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $LanguageInfo_, $LanguageManager } from "@package/net/minecraft/client/resources/language";
import { $Minecraft, $Options } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $AccessOptionsSubScreen } from "@package/com/blamejared/controlling/mixin";
export * as controls from "@package/net/minecraft/client/gui/screens/options/controls";

declare module "@package/net/minecraft/client/gui/screens/options" {
    export class $LanguageSelectScreen$LanguageSelectionList extends $ObjectSelectionList<$LanguageSelectScreen$LanguageSelectionList$Entry> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        x: number;
        y: number;
        active: boolean;
        hovered: $LanguageSelectScreen$LanguageSelectionList$Entry;
    }
    export class $ChatOptionsScreen extends $OptionsSubScreen {
        layout: $HeaderAndFooterLayout;
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
        constructor(lastScreen: $Screen, options: $Options);
    }
    export class $UnsupportedGraphicsWarningScreen$ButtonOption {
        constructor(message: $Component_, onPress: $Button$OnPress_);
    }
    export class $UnsupportedGraphicsWarningScreen extends $Screen {
        init(): void;
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
    }
    export class $SoundOptionsScreen extends $OptionsSubScreen {
        layout: $HeaderAndFooterLayout;
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
        constructor(lastScreen: $Screen, options: $Options);
    }
    export class $SkinCustomizationScreen extends $OptionsSubScreen {
        layout: $HeaderAndFooterLayout;
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
        constructor(lastScreen: $Screen, options: $Options);
    }
    export class $OnlineOptionsScreen extends $OptionsSubScreen {
        layout: $HeaderAndFooterLayout;
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
        constructor(lastScreen: $Screen, options: $Options);
    }
    export class $OptionsScreen extends $Screen {
        static createDifficultyButton(x: number, y: number, name: string, minecraft: $Minecraft): $CycleButton<$Difficulty>;
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
        constructor(lastScreen: $Screen, options: $Options);
    }
    export class $OptionsSubScreen extends $Screen implements $AccessOptionsSubScreen {
        controlling$getLastScreen(): $Screen;
        layout: $HeaderAndFooterLayout;
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
        constructor(lastScreen: $Screen, options: $Options, title: $Component_);
    }
    export class $AccessibilityOptionsScreen extends $OptionsSubScreen {
        layout: $HeaderAndFooterLayout;
        static MENU_BACKGROUND: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static TITLE: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        constructor(lastScreen: $Screen, options: $Options);
    }
    export class $MouseSettingsScreen extends $OptionsSubScreen {
        layout: $HeaderAndFooterLayout;
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
        constructor(lastScreen: $Screen, options: $Options);
    }
    export class $LanguageSelectScreen extends $OptionsSubScreen {
        layout: $HeaderAndFooterLayout;
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
        constructor(lastScreen: $Screen, options: $Options, languageManager: $LanguageManager);
    }
    export class $VideoSettingsScreen extends $OptionsSubScreen {
        layout: $HeaderAndFooterLayout;
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
        constructor(lastScreen: $Screen, minecraft: $Minecraft, options: $Options);
    }
    export class $LanguageSelectScreen$LanguageSelectionList$Entry extends $ObjectSelectionList$Entry<$LanguageSelectScreen$LanguageSelectionList$Entry> {
        constructor(code: $LanguageSelectScreen$LanguageSelectionList, languageInfo: string, arg2: $LanguageInfo_);
    }
    export class $FontOptionsScreen extends $OptionsSubScreen {
        layout: $HeaderAndFooterLayout;
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
        constructor(lastScreen: $Screen, options: $Options);
    }
}
