import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ImageButton, $ObjectSelectionList$Entry, $WidgetSprites, $Renderable, $SpriteIconButton$CenteredIcon } from "@package/net/minecraft/client/gui/components";
import { $Enum, $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $RealmsServiceException } from "@package/com/mojang/realmsclient/exception";
import { $RealmsServer } from "@package/com/mojang/realmsclient/dto";
import { $RealmsScreen, $RealmsObjectSelectionList } from "@package/net/minecraft/realms";
export * as gui from "@package/com/mojang/realmsclient/gui";
export * as dto from "@package/com/mojang/realmsclient/dto";
export * as util from "@package/com/mojang/realmsclient/util";
export * as exception from "@package/com/mojang/realmsclient/exception";
export * as client from "@package/com/mojang/realmsclient/client";

declare module "@package/com/mojang/realmsclient" {
    export class $RealmsMainScreen$AvailableSnapshotEntry extends $RealmsMainScreen$Entry {
    }
    export class $RealmsAvailability$Type extends $Enum<$RealmsAvailability$Type> {
        static values(): $RealmsAvailability$Type[];
        static valueOf(arg0: string): $RealmsAvailability$Type;
        static SUCCESS: $RealmsAvailability$Type;
        static AUTHENTICATION_ERROR: $RealmsAvailability$Type;
        static NEEDS_PARENTAL_CONSENT: $RealmsAvailability$Type;
        static INCOMPATIBLE_CLIENT: $RealmsAvailability$Type;
        static UNEXPECTED_ERROR: $RealmsAvailability$Type;
    }
    /**
     * Values that may be interpreted as {@link $RealmsAvailability$Type}.
     */
    export type $RealmsAvailability$Type_ = "success" | "incompatible_client" | "needs_parental_consent" | "authentication_error" | "unexpected_error";
    export class $RealmsMainScreen$EmptyEntry extends $RealmsMainScreen$Entry {
    }
    export class $RealmsMainScreen$NotificationMessageEntry extends $RealmsMainScreen$Entry {
    }
    export class $RealmsMainScreen$ButtonEntry extends $RealmsMainScreen$Entry {
    }
    export class $RealmsAvailability$Result extends $Record {
        createErrorScreen(lastScreen: $Screen): $Screen;
        type(): $RealmsAvailability$Type;
        exception(): $RealmsServiceException;
        constructor(type: $RealmsAvailability$Type_);
        constructor(arg0: $RealmsAvailability$Type_, arg1: $RealmsServiceException | null);
        constructor(exception: $RealmsServiceException);
    }
    /**
     * Values that may be interpreted as {@link $RealmsAvailability$Result}.
     */
    export type $RealmsAvailability$Result_ = { exception?: $RealmsServiceException, type?: $RealmsAvailability$Type_,  } | [exception?: $RealmsServiceException, type?: $RealmsAvailability$Type_, ];
    export class $RealmsMainScreen$RealmsCall<T> {
    }
    export interface $RealmsMainScreen$RealmsCall<T> {
    }
    /**
     * Values that may be interpreted as {@link $RealmsMainScreen$RealmsCall}.
     */
    export type $RealmsMainScreen$RealmsCall_<T> = (() => void);
    export class $Unit extends $Enum<$Unit> {
        static convertTo(bytes: number, arg1: $Unit_): number;
        static values(): $Unit[];
        static valueOf(arg0: string): $Unit;
        static humanReadable(bytes: number, arg1: $Unit_): string;
        static humanReadable(bytes: number): string;
        static getLargest(bytes: number): $Unit;
        static B: $Unit;
        static MB: $Unit;
        static KB: $Unit;
        static GB: $Unit;
    }
    /**
     * Values that may be interpreted as {@link $Unit}.
     */
    export type $Unit_ = "b" | "kb" | "mb" | "gb";
    export class $RealmsAvailability {
        static get(): $CompletableFuture<$RealmsAvailability$Result>;
        constructor();
    }
    export class $RealmsMainScreen$LayoutState extends $Enum<$RealmsMainScreen$LayoutState> {
    }
    /**
     * Values that may be interpreted as {@link $RealmsMainScreen$LayoutState}.
     */
    export type $RealmsMainScreen$LayoutState_ = "loading" | "no_realms" | "list";
    export class $RealmsMainScreen$NotificationButton extends $SpriteIconButton$CenteredIcon {
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
    }
    export class $RealmsMainScreen extends $RealmsScreen {
        resetScreen(): void;
        static refreshServerList(): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        static isSnapshot(): boolean;
        static play(realmsServer: $RealmsServer | null, lastScreen: $Screen): void;
        static play(realmsServer: $RealmsServer | null, lastScreen: $Screen, allowSnapshots: boolean): void;
        static refreshPendingInvites(): void;
        static getVersionComponent(version: string, compatible: boolean): $Component;
        static getVersionComponent(version: string, color: number): $Component;
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
        constructor(lastScreen: $Screen);
        static get snapshot(): boolean;
    }
    export class $RealmsMainScreen$ServerEntry extends $RealmsMainScreen$Entry {
    }
    export class $RealmsMainScreen$CrossButton extends $ImageButton {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        active: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_WIDTH: number;
        sprites: $WidgetSprites;
        static DEFAULT_SPACING: number;
    }
    export class $RealmsMainScreen$ParentEntry extends $RealmsMainScreen$Entry {
    }
    export class $RealmsMainScreen$RealmSelectionList extends $RealmsObjectSelectionList<$RealmsMainScreen$Entry> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        x: number;
        y: number;
        active: boolean;
        hovered: $RealmsMainScreen$Entry;
    }
    export class $RealmsMainScreen$Entry extends $ObjectSelectionList$Entry<$RealmsMainScreen$Entry> {
    }
}
