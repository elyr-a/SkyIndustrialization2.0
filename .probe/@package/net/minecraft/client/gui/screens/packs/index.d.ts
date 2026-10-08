import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $PackRepository, $PackSource, $Pack, $PackCompatibility } from "@package/net/minecraft/server/packs/repository";
import { $Stream } from "@package/java/util/stream";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Path_ } from "@package/java/nio/file";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ObjectSelectionList, $ObjectSelectionList$Entry, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Runnable_, $AutoCloseable } from "@package/java/lang";
import { $List } from "@package/java/util";

declare module "@package/net/minecraft/client/gui/screens/packs" {
    export class $PackSelectionScreen$Watcher implements $AutoCloseable {
    }
    export class $PackSelectionModel {
        getSelected(): $Stream<$PackSelectionModel$Entry>;
        commit(): void;
        getUnselected(): $Stream<$PackSelectionModel$Entry>;
        findNewPacks(): void;
        constructor(onListChanged: $Runnable_, iconGetter: $Function_<$Pack, $ResourceLocation>, repository: $PackRepository, output: $Consumer_<$PackRepository>);
        get selected(): $Stream<$PackSelectionModel$Entry>;
        get unselected(): $Stream<$PackSelectionModel$Entry>;
    }
    export class $TransferableSelectionList extends $ObjectSelectionList<$TransferableSelectionList$PackEntry> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        x: number;
        y: number;
        active: boolean;
        hovered: $TransferableSelectionList$PackEntry;
        constructor(minecraft: $Minecraft, screen: $PackSelectionScreen, width: number, height: number, title: $Component_);
    }
    export class $PackSelectionModel$SelectedPackEntry extends $PackSelectionModel$EntryBase {
    }
    export class $PackSelectionModel$UnselectedPackEntry extends $PackSelectionModel$EntryBase {
    }
    export class $PackSelectionModel$EntryBase implements $PackSelectionModel$Entry {
        getExtendedDescription(): $Component;
        canSelect(): boolean;
        canUnselect(): boolean;
        get extendedDescription(): $Component;
    }
    export class $PackSelectionScreen extends $Screen {
        updateFocus(selection: $TransferableSelectionList): void;
        clearSelected(): void;
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
        constructor(repository: $PackRepository, output: $Consumer_<$PackRepository>, packDir: $Path_, title: $Component_);
    }
    export class $TransferableSelectionList$PackEntry extends $ObjectSelectionList$Entry<$TransferableSelectionList$PackEntry> {
        keyboardSelection(): void;
        getPackId(): string;
        constructor(minecraft: $Minecraft, parent: $TransferableSelectionList, pack: $PackSelectionModel$Entry);
        get packId(): string;
    }
    export class $PackSelectionModel$Entry {
    }
    export interface $PackSelectionModel$Entry {
        getTitle(): $Component;
        isSelected(): boolean;
        isRequired(): boolean;
        getCompatibility(): $PackCompatibility;
        isFixedPosition(): boolean;
        getExtendedDescription(): $Component;
        getPackSource(): $PackSource;
        getId(): string;
        getDescription(): $Component;
        select(): void;
        moveUp(): void;
        moveDown(): void;
        canSelect(): boolean;
        canUnselect(): boolean;
        getIconTexture(): $ResourceLocation;
        canMoveDown(): boolean;
        canMoveUp(): boolean;
        unselect(): void;
        get title(): $Component;
        get selected(): boolean;
        get required(): boolean;
        get compatibility(): $PackCompatibility;
        get fixedPosition(): boolean;
        get extendedDescription(): $Component;
        get packSource(): $PackSource;
        get id(): string;
        get description(): $Component;
        get iconTexture(): $ResourceLocation;
    }
}
