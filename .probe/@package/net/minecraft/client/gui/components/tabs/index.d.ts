import { $Consumer_ } from "@package/java/util/function";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/minecraft/client/gui/components/tabs" {
    export class $Tab {
    }
    export interface $Tab {
        visitChildren(consumer: $Consumer_<$AbstractWidget>): void;
        getTabTitle(): $Component;
        doLayout(rectangle: $ScreenRectangle_): void;
        get tabTitle(): $Component;
    }
    /**
     * Builder class for creating a TabNavigationBar instance.
     */
    export class $TabNavigationBar$Builder {
        /**
         * Builds and returns a new TabNavigationBar instance.
         * 
         * @return a new TabNavigationBar instance.
         */
        build(): $TabNavigationBar;
        /**
         * Adds multiple tabs to the TabNavigationBar.
         * 
         * @return the `Builder` instance.
         */
        addTabs(...tabs: $Tab[]): $TabNavigationBar$Builder;
    }
    export class $GridLayoutTab implements $Tab {
        visitChildren(consumer: $Consumer_<$AbstractWidget>): void;
        getTabTitle(): $Component;
        doLayout(rectangle: $ScreenRectangle_): void;
        constructor(title: $Component_);
        get tabTitle(): $Component;
    }
    export class $TabManager {
        getCurrentTab(): $Tab;
        setTabArea(tabArea: $ScreenRectangle_): void;
        setCurrentTab(tab: $Tab, playClickSound: boolean): void;
        constructor(addWidget: $Consumer_<$AbstractWidget>, removeWidget: $Consumer_<$AbstractWidget>);
        set tabArea(value: $ScreenRectangle_);
    }
    export class $TabNavigationBar extends $AbstractContainerEventHandler implements $Renderable, $NarratableEntry {
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * @return the narration priority
         */
        narrationPriority(): $NarratableEntry$NarrationPriority;
        /**
         * Updates the narration output with the current narration information.
         */
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * Arranges the elements within the tabbed layout.
         */
        arrangeElements(): void;
        /**
         * Handles key pressed events.
         * 
         * @return `true` if the key press was handled, `false` otherwise.
         */
        keyPressed(keycode: number): boolean;
        setWidth(width: number): void;
        static builder(tabManager: $TabManager, width: number): $TabNavigationBar$Builder;
        /**
         * Selects the tab at the specified index.
         */
        selectTab(index: number, playClickSound: boolean): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isActive(): boolean;
        set width(value: number);
        get active(): boolean;
    }
}
