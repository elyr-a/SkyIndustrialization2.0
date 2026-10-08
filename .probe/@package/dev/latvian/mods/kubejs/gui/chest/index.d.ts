import { $Container } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Slot, $ClickType, $MenuType, $AbstractContainerMenu, $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Record, $Object, $Runnable } from "@package/java/lang";
import { $List, $Map } from "@package/java/util";

declare module "@package/dev/latvian/mods/kubejs/gui/chest" {
    export class $ChestMenuInventoryClickEvent {
        getIndex(): number;
        getItem(): $ItemStack;
        setItem(item: $ItemStack_): void;
        button: number;
        type: $ClickType;
        constructor(slot: $Slot, type: $ClickType_, button: number);
        get index(): number;
    }
    export class $ChestMenuContainerSlot extends $Slot {
        container: $Container;
        _index: number;
        x: number;
        index: number;
        y: number;
        menu: $CustomChestMenu;
        constructor(menu: $CustomChestMenu, index: number, xPosition: number, yPosition: number);
    }
    export class $CustomChestMenu extends $AbstractContainerMenu {
        static TYPES: $MenuType<any>[];
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        data: $ChestMenuData;
        static SLOT_CLICKED_OUTSIDE: number;
        static QUICKCRAFT_HEADER_START: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        constructor(containerId: number, data: $ChestMenuData);
    }
    export class $ChestMenuClickHandler extends $Record {
        button(): number;
        type(): $ClickType;
        test(event: $ChestMenuClickEvent): boolean;
        callback(): $ChestMenuClickEvent$Callback;
        autoHandle(): boolean;
        constructor(type: $ClickType_, button: number, callback: $ChestMenuClickEvent$Callback_, autoHandle: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ChestMenuClickHandler}.
     */
    export type $ChestMenuClickHandler_ = { autoHandle?: boolean, callback?: $ChestMenuClickEvent$Callback_, type?: $ClickType_, button?: number,  } | [autoHandle?: boolean, callback?: $ChestMenuClickEvent$Callback_, type?: $ClickType_, button?: number, ];
    export class $ChestMenuInventoryClickEvent$Callback {
    }
    export interface $ChestMenuInventoryClickEvent$Callback {
        onClick(event: $ChestMenuInventoryClickEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $ChestMenuInventoryClickEvent$Callback}.
     */
    export type $ChestMenuInventoryClickEvent$Callback_ = ((event: $ChestMenuInventoryClickEvent) => void);
    export class $ChestMenuClickEvent$Callback {
    }
    export interface $ChestMenuClickEvent$Callback {
        onClick(event: $ChestMenuClickEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $ChestMenuClickEvent$Callback}.
     */
    export type $ChestMenuClickEvent$Callback_ = ((event: $ChestMenuClickEvent) => void);
    export class $ChestMenuSlot {
        clicked(type: $ClickType_, button: number, callback: $ChestMenuClickEvent$Callback_, autoHandle: boolean): void;
        getItem(): $ItemStack;
        setThrown(callback: $ChestMenuClickEvent$Callback_): void;
        setItem(stack: $ItemStack_): void;
        resetClickHandlers(): void;
        setRightClicked(callback: $ChestMenuClickEvent$Callback_): void;
        setDoubleClicked(callback: $ChestMenuClickEvent$Callback_): void;
        setLeftClicked(callback: $ChestMenuClickEvent$Callback_): void;
        setMiddleClicked(callback: $ChestMenuClickEvent$Callback_): void;
        setSwapped(callback: $ChestMenuClickEvent$Callback_): void;
        setShiftLeftClicked(callback: $ChestMenuClickEvent$Callback_): void;
        setShiftRightClicked(callback: $ChestMenuClickEvent$Callback_): void;
        data: $Map<string, $Object>;
        clickHandlers: $List<$ChestMenuClickHandler>;
        x: number;
        index: number;
        y: number;
        inventorySlot: number;
        gui: $ChestMenuData;
        inventory: $InventoryKJS;
        constructor(gui: $ChestMenuData, index: number);
        set thrown(value: $ChestMenuClickEvent$Callback_);
        set rightClicked(value: $ChestMenuClickEvent$Callback_);
        set doubleClicked(value: $ChestMenuClickEvent$Callback_);
        set leftClicked(value: $ChestMenuClickEvent$Callback_);
        set middleClicked(value: $ChestMenuClickEvent$Callback_);
        set swapped(value: $ChestMenuClickEvent$Callback_);
        set shiftLeftClicked(value: $ChestMenuClickEvent$Callback_);
        set shiftRightClicked(value: $ChestMenuClickEvent$Callback_);
    }
    export class $ChestMenuData {
        button(x: number, y: number, stack: $ItemStack_, displayName: $Component_, leftClicked: $ChestMenuClickEvent$Callback_): void;
        handleClick(index: number, type: $ClickType_, button: number): void;
        getSlot(x: number, y: number): $ChestMenuSlot;
        slot(x0: number, y0: number, x1: number, y1: number, slot: $Consumer_<$ChestMenuSlot>): void;
        slot(x: number, y: number, slot: $Consumer_<$ChestMenuSlot>): void;
        sync(): void;
        capturedInventory: $Container;
        slots: $ChestMenuSlot[];
        mouseItem: $ItemStack;
        anyClicked: $ChestMenuClickEvent$Callback;
        closed: $Runnable;
        inventoryClicked: $ChestMenuInventoryClickEvent$Callback;
        title: $Component;
        rows: number;
        playerSlots: boolean;
        player: $ServerPlayer;
        constructor(player: $ServerPlayer, title: $Component_, rows: number);
    }
    export class $ChestMenuClickEvent {
        setHandled(): void;
        button: number;
        slot: $ChestMenuSlot;
        type: $ClickType;
        constructor(slot: $ChestMenuSlot, type: $ClickType_, button: number);
    }
}
