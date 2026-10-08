import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $List } from "@package/java/util";

declare module "@package/dev/latvian/mods/kubejs/client/editor" {
    export class $SelectItemStackScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        callback: $EditorCallback<$ItemStack>;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
    }
    export class $EditorCallback<T> {
    }
    export interface $EditorCallback<T> {
        callback(value: T, success: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $EditorCallback}.
     */
    export type $EditorCallback_<T> = ((value: T, success: boolean) => void);
}
