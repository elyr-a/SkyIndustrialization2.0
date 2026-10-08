import { $IKeyEntry } from "@package/com/blamejared/controlling/api/entries";
import { $Event } from "@package/net/neoforged/bus/api";
import { $List } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/blamejared/controlling/api/events" {
    export class $KeyEntryMouseReleasedEvent extends $Event implements $IKeyEntryMouseReleasedEvent {
        isHandled(): boolean;
        getMouseX(): number;
        getMouseY(): number;
        getEntry(): $IKeyEntry;
        getButtonId(): number;
        setHandled(arg0: boolean): void;
        constructor(arg0: $IKeyEntry, arg1: number, arg2: number, arg3: number);
        get mouseX(): number;
        get mouseY(): number;
        get entry(): $IKeyEntry;
        get buttonId(): number;
    }
    export class $KeyEntryRenderEvent extends $Event implements $IKeyEntryRenderEvent {
        isHovered(): boolean;
        getSlotIndex(): number;
        getX(): number;
        getRowWidth(): number;
        getMouseX(): number;
        getMouseY(): number;
        getRowLeft(): number;
        getGuiGraphics(): $GuiGraphics;
        getPartialTicks(): number;
        getEntry(): $IKeyEntry;
        getY(): number;
        constructor(arg0: $IKeyEntry, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number);
        get hovered(): boolean;
        get slotIndex(): number;
        get x(): number;
        get rowWidth(): number;
        get mouseX(): number;
        get mouseY(): number;
        get rowLeft(): number;
        get guiGraphics(): $GuiGraphics;
        get partialTicks(): number;
        get entry(): $IKeyEntry;
        get y(): number;
    }
    export class $IKeyEntryRenderEvent {
    }
    export interface $IKeyEntryRenderEvent {
        isHovered(): boolean;
        getSlotIndex(): number;
        getX(): number;
        getRowWidth(): number;
        getMouseX(): number;
        getMouseY(): number;
        getRowLeft(): number;
        getGuiGraphics(): $GuiGraphics;
        getPartialTicks(): number;
        getEntry(): $IKeyEntry;
        getY(): number;
        get hovered(): boolean;
        get slotIndex(): number;
        get x(): number;
        get rowWidth(): number;
        get mouseX(): number;
        get mouseY(): number;
        get rowLeft(): number;
        get guiGraphics(): $GuiGraphics;
        get partialTicks(): number;
        get entry(): $IKeyEntry;
        get y(): number;
    }
    export class $IKeyEntryMouseReleasedEvent {
    }
    export interface $IKeyEntryMouseReleasedEvent {
        isHandled(): boolean;
        getMouseX(): number;
        getMouseY(): number;
        getEntry(): $IKeyEntry;
        getButtonId(): number;
        setHandled(arg0: boolean): void;
        get mouseX(): number;
        get mouseY(): number;
        get entry(): $IKeyEntry;
        get buttonId(): number;
    }
    export class $KeyEntryMouseClickedEvent extends $Event implements $IKeyEntryMouseClickedEvent {
        isHandled(): boolean;
        getMouseX(): number;
        getMouseY(): number;
        getEntry(): $IKeyEntry;
        getButtonId(): number;
        setHandled(arg0: boolean): void;
        constructor(arg0: $IKeyEntry, arg1: number, arg2: number, arg3: number);
        get mouseX(): number;
        get mouseY(): number;
        get entry(): $IKeyEntry;
        get buttonId(): number;
    }
    export class $IKeyEntryListenersEvent {
    }
    export interface $IKeyEntryListenersEvent {
        getListeners(): $List<$GuiEventListener>;
        getEntry(): $IKeyEntry;
        get listeners(): $List<$GuiEventListener>;
        get entry(): $IKeyEntry;
    }
    export class $KeyEntryListenersEvent extends $Event implements $IKeyEntryListenersEvent {
        getListeners(): $List<$GuiEventListener>;
        getEntry(): $IKeyEntry;
        constructor(arg0: $IKeyEntry);
        get listeners(): $List<$GuiEventListener>;
        get entry(): $IKeyEntry;
    }
    export class $IKeyEntryMouseClickedEvent {
    }
    export interface $IKeyEntryMouseClickedEvent {
        isHandled(): boolean;
        getMouseX(): number;
        getMouseY(): number;
        getEntry(): $IKeyEntry;
        getButtonId(): number;
        setHandled(arg0: boolean): void;
        get mouseX(): number;
        get mouseY(): number;
        get entry(): $IKeyEntry;
        get buttonId(): number;
    }
}
