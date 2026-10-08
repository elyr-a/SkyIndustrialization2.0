import { $SpectatorMenu, $SpectatorMenuListener } from "@package/net/minecraft/client/gui/spectator";
import { $Minecraft } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/components/spectator" {
    export class $SpectatorGui implements $SpectatorMenuListener {
        renderTooltip(guiGraphics: $GuiGraphics): void;
        onHotbarSelected(slot: number): void;
        onSpectatorMenuClosed(menu: $SpectatorMenu): void;
        isMenuActive(): boolean;
        onMouseMiddleClick(): void;
        onMouseScrolled(slot: number): void;
        renderHotbar(guiGraphics: $GuiGraphics): void;
        constructor(minecraft: $Minecraft);
        get menuActive(): boolean;
    }
}
