import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $IModInfo } from "@package/net/neoforged/neoforgespi/language";
import { $IEventBus, $Event, $EventPriority_ } from "@package/net/neoforged/bus/api";
import { $Path_, $Path } from "@package/java/nio/file";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Throwable, $Runnable_, $Enum, $Record, $Object, $Class } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $IModFile } from "@package/net/neoforged/neoforgespi/locating";
import { $ModConfig$Type_, $IConfigSpec } from "@package/net/neoforged/fml/config";
export * as event from "@package/net/neoforged/fml/event";
export * as earlydisplay from "@package/net/neoforged/fml/earlydisplay";
export * as config from "@package/net/neoforged/fml/config";
export * as common from "@package/net/neoforged/fml/common";

declare module "@package/net/neoforged/fml" {
    export class $IExtensionPoint {
    }
    export interface $IExtensionPoint {
    }
    export class $ModContainer {
        getModInfo(): $IModInfo;
        getNamespace(): string;
        registerExtensionPoint<T extends $IExtensionPoint>(arg0: $Class<T>, arg1: T): void;
        registerExtensionPoint<T extends $IExtensionPoint>(arg0: $Class<T>, arg1: $Supplier_<T>): void;
        registerConfig(arg0: $ModConfig$Type_, arg1: $IConfigSpec): void;
        registerConfig(arg0: $ModConfig$Type_, arg1: $IConfigSpec, arg2: string): void;
        getModId(): string;
        getCustomExtension<T extends $IExtensionPoint>(arg0: $Class<T>): (T) | undefined;
        acceptEvent<T extends $Event>(arg0: $EventPriority_, arg1: T): void;
        acceptEvent<T extends $Event>(arg0: T): void;
        getEventBus(): $IEventBus;
        constructor(arg0: $IModInfo);
        get modInfo(): $IModInfo;
        get namespace(): string;
        get modId(): string;
        get eventBus(): $IEventBus;
    }
    export class $IBindingsProvider {
    }
    export interface $IBindingsProvider {
        getGameBus(): $IEventBus;
        get gameBus(): $IEventBus;
    }
    /**
     * Values that may be interpreted as {@link $IBindingsProvider}.
     */
    export type $IBindingsProvider_ = (() => $IEventBus);
    export class $ModLoadingIssue extends $Record {
        withCause(arg0: $Throwable): $ModLoadingIssue;
        withAffectedMod(arg0: $IModInfo): $ModLoadingIssue;
        translationKey(): string;
        affectedModFile(): $IModFile;
        affectedMod(): $IModInfo;
        affectedPath(): $Path;
        translationArgs(): $List<$Object>;
        withAffectedPath(arg0: $Path_): $ModLoadingIssue;
        withSeverity(arg0: $ModLoadingIssue$Severity_): $ModLoadingIssue;
        withAffectedModFile(arg0: $IModFile): $ModLoadingIssue;
        cause(): $Throwable;
        static error(arg0: string, ...arg1: $Object[]): $ModLoadingIssue;
        static warning(arg0: string, ...arg1: $Object[]): $ModLoadingIssue;
        severity(): $ModLoadingIssue$Severity;
        constructor(severity: $ModLoadingIssue$Severity_, translationKey: string, translationArgs: $List_<$Object>, cause: $Throwable, affectedPath: $Path_, affectedModFile: $IModFile, affectedMod: $IModInfo);
        constructor(arg0: $ModLoadingIssue$Severity_, arg1: string, arg2: $List_<$Object>);
    }
    /**
     * Values that may be interpreted as {@link $ModLoadingIssue}.
     */
    export type $ModLoadingIssue_ = { affectedPath?: $Path_, affectedMod?: $IModInfo, cause?: $Throwable, translationKey?: string, translationArgs?: $List_<$Object>, severity?: $ModLoadingIssue$Severity_, affectedModFile?: $IModFile,  } | [affectedPath?: $Path_, affectedMod?: $IModInfo, cause?: $Throwable, translationKey?: string, translationArgs?: $List_<$Object>, severity?: $ModLoadingIssue$Severity_, affectedModFile?: $IModFile, ];
    export class $VersionChecker$Status extends $Enum<$VersionChecker$Status> {
        shouldDraw(): boolean;
        getSheetOffset(): number;
        static values(): $VersionChecker$Status[];
        static valueOf(arg0: string): $VersionChecker$Status;
        isAnimated(): boolean;
        static FAILED: $VersionChecker$Status;
        static AHEAD: $VersionChecker$Status;
        static BETA_OUTDATED: $VersionChecker$Status;
        static UP_TO_DATE: $VersionChecker$Status;
        static OUTDATED: $VersionChecker$Status;
        static PENDING: $VersionChecker$Status;
        static BETA: $VersionChecker$Status;
        get sheetOffset(): number;
        get animated(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $VersionChecker$Status}.
     */
    export type $VersionChecker$Status_ = "pending" | "failed" | "up_to_date" | "outdated" | "ahead" | "beta" | "beta_outdated";
    export class $ModLoadingIssue$Severity extends $Enum<$ModLoadingIssue$Severity> {
        static values(): $ModLoadingIssue$Severity[];
        static valueOf(arg0: string): $ModLoadingIssue$Severity;
        static ERROR: $ModLoadingIssue$Severity;
        static WARNING: $ModLoadingIssue$Severity;
    }
    /**
     * Values that may be interpreted as {@link $ModLoadingIssue$Severity}.
     */
    export type $ModLoadingIssue$Severity_ = "warning" | "error";
    export class $DeferredWorkQueue {
        runTasks(): void;
        enqueueWork(arg0: $ModContainer, arg1: $Runnable_): $CompletableFuture<void>;
        enqueueWork<T>(arg0: $ModContainer, arg1: $Supplier_<T>): $CompletableFuture<T>;
        constructor(arg0: string);
    }
    export class $InterModComms$IMCMessage extends $Record {
        modId(): string;
        senderModId(): string;
        /**
         * @deprecated
         */
        getModId(): string;
        /**
         * @deprecated
         */
        getSenderModId(): string;
        /**
         * @deprecated
         */
        getMessageSupplier<T>(): $Supplier<T>;
        method(): string;
        /**
         * @deprecated
         */
        getMethod(): string;
        messageSupplier(): $Supplier<never>;
        constructor(senderModId: string, modId: string, method: string, messageSupplier: $Supplier_<never>);
    }
    /**
     * Values that may be interpreted as {@link $InterModComms$IMCMessage}.
     */
    export type $InterModComms$IMCMessage_ = { senderModId?: string, modId?: string, messageSupplier?: $Supplier_<never>, method?: string,  } | [senderModId?: string, modId?: string, messageSupplier?: $Supplier_<never>, method?: string, ];
    export class $LogicalSide extends $Enum<$LogicalSide> {
        isServer(): boolean;
        static values(): $LogicalSide[];
        static valueOf(arg0: string): $LogicalSide;
        isClient(): boolean;
        static SERVER: $LogicalSide;
        static CLIENT: $LogicalSide;
        get server(): boolean;
        get client(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LogicalSide}.
     */
    export type $LogicalSide_ = "client" | "server";
}
