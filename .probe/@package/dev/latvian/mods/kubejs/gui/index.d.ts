import { $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $IContainerFactory } from "@package/net/neoforged/neoforge/network";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $Supplier } from "@package/java/util/function";
import { $SimpleContainer, $Container } from "@package/net/minecraft/world";
import { $NonNullList } from "@package/net/minecraft/core";
import { $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $MenuAccess, $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Slot, $AbstractContainerMenu, $MenuType } from "@package/net/minecraft/world/inventory";
import { $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
export * as chest from "@package/dev/latvian/mods/kubejs/gui/chest";

declare module "@package/dev/latvian/mods/kubejs/gui" {
    export class $KubeJSScreen extends $AbstractContainerScreen<$KubeJSMenu> implements $MenuAccess<$KubeJSMenu> {
        static MENU_BACKGROUND: $ResourceLocation;
        containerColumns: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        containerRows: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        constructor(menu: $KubeJSMenu, inventory: $Inventory, component: $Component_);
    }
    export class $InventoryKJSSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        inventory: $InventoryKJS;
        invIndex: number;
        constructor(inventory: $InventoryKJS, invIndex: number, xPosition: number, yPosition: number);
    }
    export class $KubeJSGUI {
        setInventory(inv: $InventoryKJS): void;
        write(buf: $FriendlyByteBuf): void;
        playerSlotsY: number;
        playerSlotsX: number;
        inventoryHeight: number;
        width: number;
        inventoryLabelY: number;
        inventoryWidth: number;
        inventoryLabelX: number;
        title: $Component;
        inventory: $InventoryKJS;
        static EMPTY_CONTAINER: $SimpleContainer;
        height: number;
        constructor(buf: $FriendlyByteBuf);
        constructor();
    }
    export class $KubeJSMenus {
        static MENU: $Supplier<$MenuType<$KubeJSMenu>>;
        static REGISTRY: $DeferredRegister<$MenuType<never>>;
    }
    export interface $KubeJSMenus {
    }
    export class $KubeJSMenu extends $AbstractContainerMenu {
        static QUICKCRAFT_HEADER_START: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        guiData: $KubeJSGUI;
        static FACTORY: $IContainerFactory<$KubeJSMenu>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(id: number, inventory: $Inventory, guiData: $KubeJSGUI);
        constructor(id: number, inventory: $Inventory, buf: $FriendlyByteBuf);
    }
}
