import { $JsonElement_ } from "@package/com/google/gson";
import { $MinecraftServer, $ReloadableServerResources } from "@package/net/minecraft/server";
import { $Callable_, $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ParseResults } from "@package/com/mojang/brigadier";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $List_, $Map, $Set } from "@package/java/util";
import { $SyncServerDataPayload } from "@package/dev/latvian/mods/kubejs/net";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ItemEntityPickupEvent$Pre } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ScheduledEvents$ScheduledEvent, $ScheduledEvents } from "@package/dev/latvian/mods/kubejs/util";
import { $PackResources } from "@package/net/minecraft/server/packs";
import { $RecipeSchemaStorage } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $Throwable, $Record, $Object } from "@package/java/lang";
import { $LevelEvent$Save, $LevelEvent$Load } from "@package/net/neoforged/neoforge/event/level";
import { $KubeJSContextFactory, $ScriptManager, $ScriptType, $SourceLine_, $ScriptPack } from "@package/dev/latvian/mods/kubejs/script";
import { $Level } from "@package/net/minecraft/world/level";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $PreTagKubeEvent } from "@package/dev/latvian/mods/kubejs/server/tag";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $RegisterCommandsEvent, $CommandEvent, $AddReloadListenerEvent } from "@package/net/neoforged/neoforge/event";
import { $KubeEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $VirtualDataPack, $GeneratedDataStage } from "@package/dev/latvian/mods/kubejs/script/data";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $AdditionalObjectRegistry, $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ServerAboutToStartEvent, $ServerStoppingEvent, $ServerStoppedEvent, $ServerStartingEvent } from "@package/net/neoforged/neoforge/event/server";
export * as tag from "@package/dev/latvian/mods/kubejs/server/tag";

declare module "@package/dev/latvian/mods/kubejs/server" {
    export class $KubeJSReloadListener extends $Record implements $ResourceManagerReloadListener {
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        resources(): $ReloadableServerResources;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        constructor(resources: $ReloadableServerResources);
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $KubeJSReloadListener}.
     */
    export type $KubeJSReloadListener_ = { resources?: $ReloadableServerResources,  } | [resources?: $ReloadableServerResources, ];
    export class $DataExport {
        static exportData(): void;
        addString(path: string, data: string): void;
        addJson(path: string, json: $JsonElement_): void;
        add(path: string, data: $Callable_<number[]>): void;
        source: $CommandSourceStack;
        constructor();
    }
    export class $ChangesForChat {
        static print(out: $Consumer_<$Component>): void;
        static recipesModified: number;
        static recipesRemoved: number;
        static recipesMs: number;
        static recipesAdded: number;
        constructor();
    }
    export class $ServerScriptManager$AdditionalServerRegistryHandler extends $Record implements $AdditionalObjectRegistry {
    }
    /**
     * Values that may be interpreted as {@link $ServerScriptManager$AdditionalServerRegistryHandler}.
     */
    export type $ServerScriptManager$AdditionalServerRegistryHandler_ = { sourceLine?: $SourceLine_, builders?: $List_<$BuilderBase<never>>,  } | [sourceLine?: $SourceLine_, builders?: $List_<$BuilderBase<never>>, ];
    export class $ServerScriptManager extends $ScriptManager {
        static createPackResources(original: $List_<$PackResources>): $List<$PackResources>;
        static release(): $ServerScriptManager;
        static createForDataGen(): $ServerScriptManager;
        reloadAndCapture(): void;
        virtualPacks: $Map<$GeneratedDataStage, $VirtualDataPack>;
        scriptType: $ScriptType;
        registriesDataPack: $VirtualDataPack;
        serverRegistryTags: $Map<$ResourceLocation, $Set<$ResourceLocation>>;
        internalDataPack: $VirtualDataPack;
        canListenEvents: boolean;
        recipeSchemaStorage: $RecipeSchemaStorage;
        firstLoad: boolean;
        packs: $Map<string, $ScriptPack>;
        preTagEvents: $Map<$ResourceKey<never>, $PreTagKubeEvent>;
        serverData: $SyncServerDataPayload;
        contextFactory: $KubeJSContextFactory;
    }
    export class $CommandKubeEvent extends $ServerKubeEvent {
        setParseResults(parse: $ParseResults<$CommandSourceStack>): void;
        getParseResults(): $ParseResults<$CommandSourceStack>;
        getCommandName(): string;
        getException(): $Throwable;
        getInput(): string;
        setException(exception: $Throwable): void;
        server: $MinecraftServer;
        constructor(event: $CommandEvent);
        get commandName(): string;
        get input(): string;
    }
    export class $BasicCommandKubeEvent implements $KubeEntityEvent {
        getPlayer(): $ServerPlayer;
        getEntity(): $Entity;
        getId(): string;
        getBlock(): $LevelBlock;
        getLevel(): $Level;
        respondLazily(text: $Supplier_<$Component>, informAdmins: boolean): void;
        respond(text: $Component_): void;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        input: string;
        id: string;
        constructor(source: $CommandSourceStack, id: string, input: string);
        get player(): $ServerPlayer;
        get entity(): $Entity;
        get block(): $LevelBlock;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $ServerKubeEvent implements $KubeEvent {
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        server: $MinecraftServer;
        constructor(s: $MinecraftServer);
    }
    export class $KubeJSServerEventHandler {
        static registerCommands(event: $RegisterCommandsEvent): void;
        static serverStarting(event: $ServerStartingEvent): void;
        static serverStopping(event: $ServerStoppingEvent): void;
        static serverStopped(event: $ServerStoppedEvent): void;
        static addReloadListeners(event: $AddReloadListenerEvent): void;
        static serverBeforeStart(event: $ServerAboutToStartEvent): void;
        static serverLevelLoaded(event: $LevelEvent$Load): void;
        static serverLevelSaved(event: $LevelEvent$Save): void;
        static preventPickupDuringChestGUI(event: $ItemEntityPickupEvent$Pre): void;
        static command(event: $CommandEvent): void;
        constructor();
    }
    export class $ScheduledServerEvent extends $ScheduledEvents$ScheduledEvent {
        getServer(): $MinecraftServer;
        timer: number;
        static EVENTS: $ScheduledEvents;
        repeating: boolean;
        scheduledEvents: $ScheduledEvents;
        id: number;
        endTime: number;
        ofTicks: boolean;
        constructor();
        get server(): $MinecraftServer;
    }
}
