import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CloseableResourceManager, $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $AdvancementHolder, $AdvancementProgress, $AdvancementNode, $AdvancementHolder_, $AdvancementTree } from "@package/net/minecraft/advancements";
import { $TickRateManager, $Difficulty_ } from "@package/net/minecraft/world";
import { $CrashReport, $SystemReport } from "@package/net/minecraft";
import { $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $ScheduledEvents$Callback_, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy, $URI } from "@package/java/net";
import { $GameProfile, $GameProfileRepository_, $GameProfileRepository } from "@package/com/mojang/authlib";
import { $Component_, $ChatType$Bound_, $Component, $ChatDecorator } from "@package/net/minecraft/network/chat";
import { $ServerConnectionListener, $TextFilter } from "@package/net/minecraft/server/network";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $WorldData, $LevelStorageSource$LevelStorageAccess, $LevelResource, $CommandStorage } from "@package/net/minecraft/world/level/storage";
import { $RegionStorageInfo_, $ChunkIOErrorReporter } from "@package/net/minecraft/world/level/chunk/storage";
import { $CommandSource, $Commands, $Commands$CommandSelection_, $Commands$CommandSelection, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $RemoteDebugSampleType_ } from "@package/net/minecraft/util/debugchart";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $AtomicLong } from "@package/java/util/concurrent/atomic";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $PlayerSelector_, $ReloadableServerResourcesKJS, $MinecraftServerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService } from "@package/com/mojang/authlib/minecraft";
import { $ServerStatus } from "@package/net/minecraft/network/protocol/status";
import { $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $UUID_, $Map, $Set, $UUID, $List, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $Supplier_, $Consumer_, $Function_, $BooleanSupplier_ } from "@package/java/util/function";
import { $ChunkProgressListenerFactory_ } from "@package/net/minecraft/server/level/progress";
import { $HolderGetter$Provider, $HolderLookup$RegistryLookup, $BlockPos_, $Registry, $Holder$Reference, $HolderLookup$Provider, $RegistryAccess$Frozen, $Holder, $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $ServerPlayerGameMode, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $Enum, $RuntimeException, $Exception, $Iterable, $Thread, $Throwable, $Record, $AutoCloseable, $Runnable_, $Runnable } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $GameType, $WorldDataConfiguration, $GameRules, $GameType_, $ChunkPos, $WorldDataConfiguration_, $LevelSettings, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $PrintStream, $File_, $IOException, $OutputStream } from "@package/java/io";
import { $TagManager } from "@package/net/minecraft/tags";
import { $ProfileResults, $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $GameProfileCache, $PlayerList } from "@package/net/minecraft/server/players";
import { $KeyPair } from "@package/java/security";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $CustomBossEvents } from "@package/net/minecraft/server/bossevents";
import { $ServicesKeySet, $ServicesKeySet_, $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";
import { $DedicatedServerProperties } from "@package/net/minecraft/server/dedicated";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey_, $ResourceKey, $RegistryOps, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Scoreboard, $Objective, $ScoreboardSaveData } from "@package/net/minecraft/world/scores";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as players from "@package/net/minecraft/server/players";
export * as packs from "@package/net/minecraft/server/packs";
export * as level from "@package/net/minecraft/server/level";
export * as network from "@package/net/minecraft/server/network";
export * as commands from "@package/net/minecraft/server/commands";
export * as rcon from "@package/net/minecraft/server/rcon";
export * as advancements from "@package/net/minecraft/server/advancements";
export * as dedicated from "@package/net/minecraft/server/dedicated";
export * as chase from "@package/net/minecraft/server/chase";
export * as gui from "@package/net/minecraft/server/gui";
export * as bossevents from "@package/net/minecraft/server/bossevents";

declare module "@package/net/minecraft/server" {
    export class $LoggedPrintStream extends $PrintStream {
        constructor(name: string, out: $OutputStream);
    }
    export class $Bootstrap {
        static realStdoutPrintln(message: string): void;
        /**
         * Registers blocks, items, stats, etc.
         */
        static bootStrap(): void;
        static checkBootstrapCalled(callSite: $Supplier_<string>): void;
        static getMissingTranslations(): $Set<string>;
        /**
         * Registers blocks, items, stats, etc.
         */
        static validate(): void;
        static STDOUT: $PrintStream;
        static bootstrapDuration: $AtomicLong;
        constructor();
        static get missingTranslations(): $Set<string>;
    }
    export class $PlayerAdvancements {
        award(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        revoke(advancement: $AdvancementHolder_, criterionKey: string): boolean;
        setSelectedTab(advancement: $AdvancementHolder_ | null): void;
        flushDirty(serverPlayer: $ServerPlayer): void;
        getOrStartProgress(advancement: $AdvancementHolder_): $AdvancementProgress;
        save(): void;
        reload(manager: $ServerAdvancementManager): void;
        stopListening(): void;
        setPlayer(serverPlayer: $ServerPlayer): void;
        constructor(dataFixer: $DataFixer, playerList: $PlayerList, manager: $ServerAdvancementManager, playerSavePath: $Path_, player: $ServerPlayer);
        set selectedTab(value: $AdvancementHolder_ | null);
        set player(value: $ServerPlayer);
    }
    export class $WorldLoader$DataLoadOutput<D> extends $Record {
        cookie(): D;
        finalDimensions(): $RegistryAccess$Frozen;
        constructor(cookie: D, finalDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadOutput}.
     */
    export type $WorldLoader$DataLoadOutput_<D> = { finalDimensions?: $RegistryAccess$Frozen, cookie?: any,  } | [finalDimensions?: $RegistryAccess$Frozen, cookie?: any, ];
    export class $ChainedJsonException extends $IOException {
        prependJsonKey(message: string): void;
        static forException(exception: $Exception): $ChainedJsonException;
        setFilenameAndFlush(message: string): void;
        constructor(message: string);
        constructor(message: string, cause: $Throwable);
        set filenameAndFlush(value: string);
    }
    export class $WorldLoader$ResultFactory<D, R> {
    }
    export interface $WorldLoader$ResultFactory<D, R> {
        create(manager: $CloseableResourceManager, resources: $ReloadableServerResources, registryAccess: $LayeredRegistryAccess<$RegistryLayer_>, cookie: D): R;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$ResultFactory}.
     */
    export type $WorldLoader$ResultFactory_<D, R> = ((arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer>, arg3: D) => R);
    export class $MinecraftServer$TimeProfiler {
    }
    export class $RegistryLayer extends $Enum<$RegistryLayer> {
        static createRegistryAccess(): $LayeredRegistryAccess<$RegistryLayer>;
        static values(): $RegistryLayer[];
        static valueOf(arg0: string): $RegistryLayer;
        static WORLDGEN: $RegistryLayer;
        static DIMENSIONS: $RegistryLayer;
        static RELOADABLE: $RegistryLayer;
        static STATIC: $RegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $RegistryLayer}.
     */
    export type $RegistryLayer_ = "static" | "worldgen" | "dimensions" | "reloadable";
    export class $ConsoleInput {
        msg: string;
        source: $CommandSourceStack;
        constructor(msg: string, source: $CommandSourceStack);
    }
    export class $ReloadableServerResources$ConfigurableRegistryLookup implements $HolderLookup$Provider {
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        asGetterLookup(): $HolderGetter$Provider;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
    }
    export class $Eula {
        hasAgreedToEULA(): boolean;
        constructor(file: $Path_);
    }
    export class $WorldLoader {
        static load<D, R>(initConfig: $WorldLoader$InitConfig_, worldDataSupplier: $WorldLoader$WorldDataSupplier_<D>, resultFactory: $WorldLoader$ResultFactory_<D, R>, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<R>;
        constructor();
    }
    export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable {
        resourceManager(): $CloseableResourceManager;
        close(): void;
        managers(): $ReloadableServerResources;
        constructor(resourceManager: $CloseableResourceManager, managers: $ReloadableServerResources);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ReloadableResources}.
     */
    export type $MinecraftServer$ReloadableResources_ = { resourceManager?: $CloseableResourceManager, managers?: $ReloadableServerResources,  } | [resourceManager?: $CloseableResourceManager, managers?: $ReloadableServerResources, ];
    export class $ReloadableServerRegistries$Holder {
        getLootTable(lootTableKey: $ResourceKey_<$LootTable>): $LootTable;
        get(): $RegistryAccess$Frozen;
        lookup(): $HolderGetter$Provider;
        getKeys(registryKey: $ResourceKey_<$Registry<never>>): $Collection<$ResourceLocation>;
        constructor(registries: $RegistryAccess$Frozen);
    }
    export class $WorldLoader$DataLoadContext extends $Record {
        resources(): $ResourceManager;
        datapackWorldgen(): $RegistryAccess$Frozen;
        datapackDimensions(): $RegistryAccess$Frozen;
        dataConfiguration(): $WorldDataConfiguration;
        constructor(resources: $ResourceManager, dataConfiguration: $WorldDataConfiguration_, datapackWorldgen: $RegistryAccess$Frozen, datapackDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadContext}.
     */
    export type $WorldLoader$DataLoadContext_ = { datapackDimensions?: $RegistryAccess$Frozen, resources?: $ResourceManager, dataConfiguration?: $WorldDataConfiguration_, datapackWorldgen?: $RegistryAccess$Frozen,  } | [datapackDimensions?: $RegistryAccess$Frozen, resources?: $ResourceManager, dataConfiguration?: $WorldDataConfiguration_, datapackWorldgen?: $RegistryAccess$Frozen, ];
    export class $ServerInterface {
    }
    export interface $ServerInterface extends $ServerInfo {
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        getProperties(): $DedicatedServerProperties;
        /**
         * Handle a command received by an RCon instance
         */
        runCommand(command: string): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerName(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getLevelIdName(): string;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getPluginNames(): string;
        /**
         * Never used, but "getServerPort" is already taken.
         */
        getServerPort(): number;
        /**
         * Used by RCon's Query in the form of "MajorServerMod 1.2.3: MyPlugin 1.3" AnotherPlugin 2.1" AndSoForth 1.0".
         */
        getServerIp(): string;
        get playerNames(): string[];
        get properties(): $DedicatedServerProperties;
        get serverName(): string;
        get levelIdName(): string;
        get pluginNames(): string;
        get serverPort(): number;
        get serverIp(): string;
    }
    export class $ServerFunctionLibrary implements $PreparableReloadListener {
        getFunctions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        getFunction(location: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getTag(location: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        getAvailableTags(): $Iterable<$ResourceLocation>;
        getName(): string;
        static TYPE_KEY: $ResourceKey<$Registry<$CommandFunction<$CommandSourceStack>>>;
        constructor(functionCompilationLevel: number, dispatcher: $CommandDispatcher<$CommandSourceStack>);
        get functions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        get availableTags(): $Iterable<$ResourceLocation>;
        get name(): string;
    }
    export class $MinecraftServer extends $ReentrantBlockableEventLoop<$TickTask> implements $ServerInfo, $ChunkIOErrorReporter, $CommandSource, $AutoCloseable, $MinecraftServerKJS {
        /**
         * Initialises the server and starts it.
         */
        isRunning(): boolean;
        getStatus(): $ServerStatus;
        /**
         * Initialises the server and starts it.
         */
        isDedicated(): boolean;
        setPort(idleTimeout: number): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getTickCount(): number;
        getFunctions(): $ServerFunctionManager;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickServer(isDone: $BooleanSupplier_): void;
        /**
         * Initialises the server and starts it.
         */
        isCommandBlockEnabled(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isPublished(): boolean;
        getWorldData(): $WorldData;
        fillSystemReport(report: $SystemReport): $SystemReport;
        tickRateManager(): $ServerTickRateManager;
        getAdvancements(): $ServerAdvancementManager;
        /**
         * Initialises the server and starts it.
         */
        isSingleplayer(): boolean;
        getResourceManager(): $ResourceManager;
        registryAccess(): $RegistryAccess$Frozen;
        getRunningThread(): $Thread;
        getRecipeManager(): $RecipeManager;
        getFixerUpper(): $DataFixer;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getLocalIp(): string;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stop(): void;
        setLocalIp(serverId: string): void;
        getData(): $AttachedData<any>;
        getPlayerList(): $PlayerList;
        potionBrewing(): $PotionBrewing;
        /**
         * Initialises the server and starts it.
         */
        areNpcsEnabled(): boolean;
        getDefaultGameType(): $GameType;
        /**
         * Initialises the server and starts it.
         */
        isSpawningAnimals(): boolean;
        getSpawnRadius(level: $ServerLevel | null): number;
        /**
         * Initialises the server and starts it.
         */
        isPvpAllowed(): boolean;
        /**
         * Initialises the server and starts it.
         */
        logIPs(): boolean;
        getProfiler(): $ProfilerFiller;
        getCommandStorage(): $CommandStorage;
        getProfileCache(): $GameProfileCache;
        getChatDecorator(): $ChatDecorator;
        getAllLevels(): $Iterable<$ServerLevel>;
        isLevelEnabled(level: $Level_): boolean;
        /**
         * Initialises the server and starts it.
         */
        acceptsFailure(): boolean;
        getScoreboard(): $ServerScoreboard;
        /**
         * Initialises the server and starts it.
         */
        acceptsSuccess(): boolean;
        /**
         * Initialises the server and starts it.
         */
        shouldInformAdmins(): boolean;
        sendSystemMessage(component: $Component_): void;
        getCommands(): $Commands;
        /**
         * Initialises the server and starts it.
         */
        isHardcore(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isDemo(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isReady(): boolean;
        static spin<S extends $MinecraftServer>(threadFunction: $Function_<$Thread, S>): S;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        /**
         * Initialises the server and starts it.
         */
        isPaused(): boolean;
        doRunTask(task: $TickTask): void;
        createCommandSourceStack(): $CommandSourceStack;
        getPersistentData(): $CompoundTag;
        /**
         * Initialises the server and starts it.
         */
        forceSynchronousWrites(): boolean;
        isUnderSpawnProtection(level: $ServerLevel, pos: $BlockPos_, player: $Player): boolean;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getAbsoluteMaxWorldSize(): number;
        getStructureManager(): $StructureTemplateManager;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        forceTimeSynchronization(): void;
        /**
         * Initialises the server and starts it.
         */
        hasGui(): boolean;
        setMotd(serverId: string): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDemo(waitForServer: boolean): void;
        getProfileKeySignatureValidator(): $SignatureValidator;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setUsesAuthentication(waitForServer: boolean): void;
        getProxy(): $Proxy;
        getGameRules(): $GameRules;
        getScheduledEvents(): $ScheduledEvents;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        finishRecordingMetrics(): void;
        startRecordingMetrics(output: $Consumer_<$ProfileResults>, onMetricsRecordingFinished: $Consumer_<$Path>): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        cancelRecordingMetrics(): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setDifficultyLocked(waitForServer: boolean): void;
        getCustomBossEvents(): $CustomBossEvents;
        logChatMessage(content: $Component_, boundChatType: $ChatType$Bound_, header: string | null): void;
        serverLinks(): $ServerLinks;
        setDifficulty(difficulty: $Difficulty_, forced: boolean): void;
        reportChunkSaveFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        endMetricsRecordingTick(): void;
        /**
         * Initialises the server and starts it.
         */
        isTickTimeLoggingEnabled(): boolean;
        /**
         * Initialises the server and starts it.
         */
        shouldRconBroadcast(): boolean;
        isSingleplayerOwner(profile: $GameProfile): boolean;
        getServerResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        /**
         * Initialises the server and starts it.
         */
        isResourcePackRequired(): boolean;
        /**
         * Initialises the server and starts it.
         */
        getPreventProxyConnections(): boolean;
        getAverageTickTimeNanos(): number;
        /**
         * Initialises the server and starts it.
         */
        static throwIfFatalException(): boolean;
        /**
         * Initialises the server and starts it.
         */
        enforceSecureProfile(): boolean;
        fillServerSystemReport(report: $SystemReport): $SystemReport;
        getScaledTrackingDistance(trackingDistance: number): number;
        static configurePackRepository(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, initMode: boolean, safeMode: boolean): $WorldDataConfiguration;
        getProfileRepository(): $GameProfileRepository;
        getSingleplayerProfile(): $GameProfile;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getCompressionThreshold(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerIdleTimeout(): number;
        kickUnlistedPlayers(commandSource: $CommandSourceStack): void;
        dumpServerProperties(path: $Path_): void;
        getCurrentSmoothedTickTime(): number;
        setSingleplayerProfile(singleplayerProfile: $GameProfile | null): void;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getSpawnProtectionRadius(): number;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        stopRecordingMetrics(): void;
        /**
         * Initialises the server and starts it.
         */
        isTimeProfilerRunning(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setEnforceWhitelist(waitForServer: boolean): void;
        subscribeToDebugSample(player: $ServerPlayer, sampleType: $RemoteDebugSampleType_): void;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPreventProxyConnections(waitForServer: boolean): void;
        setPlayerIdleTimeout(idleTimeout: number): void;
        reportChunkLoadFailure(throwable: $Throwable, regionStorageInfo: $RegionStorageInfo_, chunkPos: $ChunkPos): void;
        getServerResources(): $MinecraftServer$ReloadableResources;
        createGameModeForPlayer(player: $ServerPlayer): $ServerPlayerGameMode;
        createTextFilterForPlayer(player: $ServerPlayer): $TextFilter;
        getProfilePermissions(profile: $GameProfile): number;
        restoreInventories(): $Map<any, any>;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getMotd(): string;
        getForcedGameType(): $GameType;
        reloadableRegistries(): $ReloadableServerRegistries$Holder;
        overworld(): $ServerLevel;
        /**
         * Gets KeyPair instanced in MinecraftServer.
         */
        getKeyPair(): $KeyPair;
        getWorldPath(levelResource: $LevelResource): $Path;
        getWorldScreenshotFile(): ($Path) | undefined;
        getModdedStatus(): $ModCheck;
        saveAllChunks(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        saveEverything(suppressLog: boolean, flush: boolean, forced: boolean): boolean;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerModName(): string;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxPlayers(): number;
        /**
         * Initialises the server and starts it.
         */
        usesAuthentication(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setPvpAllowed(waitForServer: boolean): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onServerExit(): void;
        getServerDirectory(): $Path;
        static setFatalException(fatalException: $RuntimeException): void;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getServerVersion(): string;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPlayerCount(): number;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        onTickRateChanged(): void;
        /**
         * Initialises the server and starts it.
         */
        isSpawningMonsters(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isEpollEnabled(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isFlightAllowed(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        setFlightAllowed(waitForServer: boolean): void;
        setPlayerList(list: $PlayerList): void;
        /**
         * Sets the game type for all worlds.
         */
        setDefaultGameType(gameMode: $GameType_): void;
        publishServer(gameMode: $GameType_ | null, commands: boolean, port: number): boolean;
        /**
         * Initialises the server and starts it.
         */
        repliesToStatus(): boolean;
        getSessionService(): $MinecraftSessionService;
        /**
         * Initialises the server and starts it.
         */
        hidesOnlinePlayers(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        invalidateStatus(): void;
        getNextTickTime(): number;
        /**
         * Replaces currently selected list of datapacks, reloads them, and sends new data to players.
         */
        reloadResources(selectedIds: $Collection_<string>): $CompletableFuture<void>;
        /**
         * "getHostname" is already taken, but both return the hostname.
         */
        getStatusJson(): string;
        /**
         * Called on exit from the main run() loop.
         */
        onServerCrash(report: $CrashReport): void;
        addTickable(tickable: $Runnable_): void;
        /**
         * Drive the executor until the given BooleanSupplier returns true
         */
        tickChildren(isDone: $BooleanSupplier_): void;
        /**
         * @deprecated
         */
        forgeGetWorldMap(): $Map<$ResourceKey<$Level>, $ServerLevel>;
        /**
         * Initialises the server and starts it.
         */
        acceptsTransfers(): boolean;
        getTickTimesNanos(): number[];
        /**
         * @deprecated
         * Directly calls System.exit(0), instantly killing the program.
         */
        markWorldsDirty(): void;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        startTimeProfiler(): void;
        getOverworld(): $ServerLevel;
        stopTimeProfiler(): $ProfileResults;
        getTickTime(arg0: $ResourceKey_<$Level>): number[];
        /**
         * Initialises the server and starts it.
         */
        isEnforceWhitelist(): boolean;
        getPackRepository(): $PackRepository;
        /**
         * Initialises the server and starts it.
         */
        isRecordingMetrics(): boolean;
        /**
         * Initialises the server and starts it.
         */
        isCurrentlySaving(): boolean;
        levelKeys(): $Set<$ResourceKey<$Level>>;
        /**
         * Returns an array of the usernames of all the connected players.
         */
        getPlayerNames(): string[];
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getOperatorUserPermissionLevel(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getFunctionCompilationLevel(): number;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getRateLimitPacketsPerSecond(): number;
        getFile(path: string): $Path;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getPort(): number;
        /**
         * Initialises the server and starts it.
         */
        isShutdown(): boolean;
        /**
         * Sets the serverRunning variable to false, in order to get the server to shut down.
         */
        halt(waitForServer: boolean): void;
        getConnection(): $ServerConnectionListener;
        /**
         * Gets the worldServer by the given dimension.
         */
        getLevel(dimension: $ResourceKey_<$Level>): $ServerLevel;
        /**
         * The compression threshold. If the packet is larger than the specified amount of bytes, it will be compressed
         */
        getMaxChainedNeighborUpdates(): number;
        /**
         * Initialises the server and starts it.
         */
        isStopped(): boolean;
        reportMisplacedChunk(pos: $ChunkPos, expectedPos: $ChunkPos, regionStorageInfo: $RegionStorageInfo_): void;
        /**
         * Initialises the server and starts it.
         */
        alwaysAccepts(): boolean;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(serverId: string): void;
        getName(): $Component;
        sendData(channel: string, data: $CompoundTag_): void;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        getMcEntities(): $Iterable<$Entity>;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        tell(component: $Component_): void;
        self(): $MinecraftServer;
        getEntityByNetworkID(id: number): $Entity;
        getEntityByUUID(id: $UUID_): $Entity;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(serverId: string): void;
        setStatusMessage(component: $Component_): void;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        sendData(serverId: string): void;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getEntities(): $EntityArrayList;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getDisplayName(): $Component;
        static VANILLA_BRAND: string;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        constructor(serverThread: $Thread, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, proxy: $Proxy, fixerUpper: $DataFixer, services: $Services_, progressListenerFactory: $ChunkProgressListenerFactory_);
        get running(): boolean;
        get status(): $ServerStatus;
        get dedicated(): boolean;
        get tickCount(): number;
        get functions(): $ServerFunctionManager;
        get commandBlockEnabled(): boolean;
        get published(): boolean;
        get worldData(): $WorldData;
        get advancements(): $ServerAdvancementManager;
        get singleplayer(): boolean;
        get resourceManager(): $ResourceManager;
        get runningThread(): $Thread;
        get recipeManager(): $RecipeManager;
        get fixerUpper(): $DataFixer;
        get data(): $AttachedData<any>;
        get spawningAnimals(): boolean;
        get profiler(): $ProfilerFiller;
        get commandStorage(): $CommandStorage;
        get profileCache(): $GameProfileCache;
        get chatDecorator(): $ChatDecorator;
        get allLevels(): $Iterable<$ServerLevel>;
        get scoreboard(): $ServerScoreboard;
        get commands(): $Commands;
        get hardcore(): boolean;
        get ready(): boolean;
        get paused(): boolean;
        get persistentData(): $CompoundTag;
        get absoluteMaxWorldSize(): number;
        get structureManager(): $StructureTemplateManager;
        get profileKeySignatureValidator(): $SignatureValidator;
        get proxy(): $Proxy;
        get gameRules(): $GameRules;
        get scheduledEvents(): $ScheduledEvents;
        set difficultyLocked(value: boolean);
        get customBossEvents(): $CustomBossEvents;
        get tickTimeLoggingEnabled(): boolean;
        get serverResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        get resourcePackRequired(): boolean;
        get averageTickTimeNanos(): number;
        get profileRepository(): $GameProfileRepository;
        get compressionThreshold(): number;
        get currentSmoothedTickTime(): number;
        get spawnProtectionRadius(): number;
        get timeProfilerRunning(): boolean;
        get serverResources(): $MinecraftServer$ReloadableResources;
        get forcedGameType(): $GameType;
        get keyPair(): $KeyPair;
        get worldScreenshotFile(): ($Path) | undefined;
        get moddedStatus(): $ModCheck;
        get serverModName(): string;
        get maxPlayers(): number;
        get serverDirectory(): $Path;
        static set fatalException(value: $RuntimeException);
        get serverVersion(): string;
        get playerCount(): number;
        get spawningMonsters(): boolean;
        get epollEnabled(): boolean;
        get sessionService(): $MinecraftSessionService;
        get nextTickTime(): number;
        get statusJson(): string;
        get tickTimesNanos(): number[];
        get packRepository(): $PackRepository;
        get recordingMetrics(): boolean;
        get currentlySaving(): boolean;
        get playerNames(): string[];
        get operatorUserPermissionLevel(): number;
        get functionCompilationLevel(): number;
        get rateLimitPacketsPerSecond(): number;
        get shutdown(): boolean;
        get connection(): $ServerConnectionListener;
        get maxChainedNeighborUpdates(): number;
        get stopped(): boolean;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get mcEntities(): $Iterable<$Entity>;
        set activePostShader(value: $ResourceLocation_);
        set statusMessage(value: $Component_);
        get entities(): $EntityArrayList;
        get displayName(): $Component;
    }
    export class $WorldStem extends $Record implements $AutoCloseable {
        resourceManager(): $CloseableResourceManager;
        worldData(): $WorldData;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        dataPackResources(): $ReloadableServerResources;
        close(): void;
        constructor(arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: $WorldData);
    }
    /**
     * Values that may be interpreted as {@link $WorldStem}.
     */
    export type $WorldStem_ = { resourceManager?: $CloseableResourceManager, worldData?: $WorldData, registries?: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources?: $ReloadableServerResources,  } | [resourceManager?: $CloseableResourceManager, worldData?: $WorldData, registries?: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources?: $ReloadableServerResources, ];
    export class $ServerScoreboard extends $Scoreboard {
        getStopTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        stopTrackingObjective(objective: $Objective): void;
        getStartTrackingPackets(objective: $Objective): $List<$Packet<never>>;
        startTrackingObjective(objective: $Objective): void;
        dataFactory(): $SavedData$Factory<$ScoreboardSaveData>;
        addDirtyListener(runnable: $Runnable_): void;
        getObjectiveDisplaySlotCount(objective: $Objective): number;
        static HIDDEN_SCORE_PREFIX: string;
        constructor(server: $MinecraftServer);
    }
    export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener {
        getAllAdvancements(): $Collection<$AdvancementHolder>;
        get(location: $ResourceLocation_): $AdvancementHolder;
        tree(): $AdvancementTree;
        constructor(registries: $HolderLookup$Provider);
        get allAdvancements(): $Collection<$AdvancementHolder>;
    }
    export class $ServerInfo {
    }
    export interface $ServerInfo {
        getMotd(): string;
        getMaxPlayers(): number;
        getServerVersion(): string;
        getPlayerCount(): number;
        get motd(): string;
        get maxPlayers(): number;
        get serverVersion(): string;
        get playerCount(): number;
    }
    export class $ServerLinks$KnownLinkType extends $Enum<$ServerLinks$KnownLinkType> {
        static values(): $ServerLinks$KnownLinkType[];
        static valueOf(arg0: string): $ServerLinks$KnownLinkType;
        create(uri: $URI): $ServerLinks$Entry;
        static SUPPORT: $ServerLinks$KnownLinkType;
        static FORUMS: $ServerLinks$KnownLinkType;
        static STATUS: $ServerLinks$KnownLinkType;
        static ANNOUNCEMENTS: $ServerLinks$KnownLinkType;
        static COMMUNITY: $ServerLinks$KnownLinkType;
        static BUG_REPORT: $ServerLinks$KnownLinkType;
        static NEWS: $ServerLinks$KnownLinkType;
        static COMMUNITY_GUIDELINES: $ServerLinks$KnownLinkType;
        static FEEDBACK: $ServerLinks$KnownLinkType;
        static WEBSITE: $ServerLinks$KnownLinkType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$KnownLinkType>;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$KnownLinkType}.
     */
    export type $ServerLinks$KnownLinkType_ = "bug_report" | "community_guidelines" | "support" | "status" | "feedback" | "community" | "website" | "forums" | "news" | "announcements";
    export class $ReloadableServerResources implements $ReloadableServerResourcesKJS {
        getAdvancements(): $ServerAdvancementManager;
        getRecipeManager(): $RecipeManager;
        getCommands(): $Commands;
        getRegistryLookup(): $HolderLookup$Provider;
        kjs$getServerScriptManager(): $ServerScriptManager;
        getFunctionLibrary(): $ServerFunctionLibrary;
        fullRegistries(): $ReloadableServerRegistries$Holder;
        updateRegistryTags(): void;
        static loadResources(resourceManager: $ResourceManager, registries: $LayeredRegistryAccess<$RegistryLayer_>, enabledFeatures: $FeatureFlagSet, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<$ReloadableServerResources>;
        getConditionContext(): $ICondition$IContext;
        listeners(): $List<$PreparableReloadListener>;
        kjs$getTagManager(): $TagManager;
        get advancements(): $ServerAdvancementManager;
        get recipeManager(): $RecipeManager;
        get commands(): $Commands;
        get registryLookup(): $HolderLookup$Provider;
        get functionLibrary(): $ServerFunctionLibrary;
        get conditionContext(): $ICondition$IContext;
    }
    export class $ReloadableServerResources$MissingTagAccessPolicy extends $Enum<$ReloadableServerResources$MissingTagAccessPolicy> {
    }
    /**
     * Values that may be interpreted as {@link $ReloadableServerResources$MissingTagAccessPolicy}.
     */
    export type $ReloadableServerResources$MissingTagAccessPolicy_ = "create_new" | "fail";
    export class $ServerTickRateManager extends $TickRateManager {
        isSprinting(): boolean;
        checkShouldSprintThisTick(): boolean;
        endTickWork(): void;
        stopStepping(): boolean;
        stopSprinting(): boolean;
        stepGameIfPaused(sprintTime: number): boolean;
        updateJoiningPlayer(player: $ServerPlayer): void;
        requestGameToSprint(sprintTime: number): boolean;
        static MIN_TICKRATE: number;
        constructor(server: $MinecraftServer);
        get sprinting(): boolean;
    }
    export class $PlayerAdvancements$Data extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerAdvancements$Data}.
     */
    export type $PlayerAdvancements$Data_ = { map?: $Map_<$ResourceLocation_, $AdvancementProgress>,  } | [map?: $Map_<$ResourceLocation_, $AdvancementProgress>, ];
    export class $WorldLoader$InitConfig extends $Record {
        commandSelection(): $Commands$CommandSelection;
        functionCompilationLevel(): number;
        packConfig(): $WorldLoader$PackConfig;
        constructor(packConfig: $WorldLoader$PackConfig_, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$InitConfig}.
     */
    export type $WorldLoader$InitConfig_ = { packConfig?: $WorldLoader$PackConfig_, functionCompilationLevel?: number, commandSelection?: $Commands$CommandSelection_,  } | [packConfig?: $WorldLoader$PackConfig_, functionCompilationLevel?: number, commandSelection?: $Commands$CommandSelection_, ];
    export class $ServerLinks extends $Record {
        isEmpty(): boolean;
        entries(): $List<$ServerLinks$Entry>;
        findKnownType(type: $ServerLinks$KnownLinkType_): ($ServerLinks$Entry) | undefined;
        untrust(): $List<$ServerLinks$UntrustedEntry>;
        static UNTRUSTED_LINKS_STREAM_CODEC: $StreamCodec<$ByteBuf, $List<$ServerLinks$UntrustedEntry>>;
        static TYPE_STREAM_CODEC: $StreamCodec<$ByteBuf, $Either<$ServerLinks$KnownLinkType, $Component>>;
        static EMPTY: $ServerLinks;
        constructor(arg0: $List_<$ServerLinks$Entry_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks}.
     */
    export type $ServerLinks_ = { entries?: $List_<$ServerLinks$Entry_>,  } | [entries?: $List_<$ServerLinks$Entry_>, ];
    export class $TickTask implements $Runnable {
        /**
         * Get the server time when this task was scheduled
         */
        getTick(): number;
        run(): void;
        constructor(tick: number, runnable: $Runnable_);
        get tick(): number;
    }
    export class $ServerLinks$Entry extends $Record {
        static knownType(type: $ServerLinks$KnownLinkType_, link: $URI): $ServerLinks$Entry;
        static custom(type: $Component_, link: $URI): $ServerLinks$Entry;
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        displayName(): $Component;
        link(): $URI;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: $URI);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$Entry}.
     */
    export type $ServerLinks$Entry_ = { type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: $URI,  } | [type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: $URI, ];
    export class $DebugLoggedPrintStream extends $LoggedPrintStream {
        constructor(name: string, out: $OutputStream);
    }
    export class $WorldLoader$PackConfig extends $Record {
        packRepository(): $PackRepository;
        createResourceManager(): $Pair<$WorldDataConfiguration, $CloseableResourceManager>;
        initialDataConfig(): $WorldDataConfiguration;
        safeMode(): boolean;
        initMode(): boolean;
        constructor(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, safeMode: boolean, initMode: boolean);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$PackConfig}.
     */
    export type $WorldLoader$PackConfig_ = { safeMode?: boolean, initMode?: boolean, packRepository?: $PackRepository, initialDataConfig?: $WorldDataConfiguration_,  } | [safeMode?: boolean, initMode?: boolean, packRepository?: $PackRepository, initialDataConfig?: $WorldDataConfiguration_, ];
    export class $ChainedJsonException$Entry {
        getFilename(): string;
        getJsonKeys(): string;
        get filename(): string;
        get jsonKeys(): string;
    }
    export class $RunningOnDifferentThreadException extends $RuntimeException {
        static RUNNING_ON_DIFFERENT_THREAD: $RunningOnDifferentThreadException;
    }
    export class $ServerScoreboard$Method extends $Enum<$ServerScoreboard$Method> {
        static values(): $ServerScoreboard$Method[];
        static valueOf(arg0: string): $ServerScoreboard$Method;
        static REMOVE: $ServerScoreboard$Method;
        static CHANGE: $ServerScoreboard$Method;
    }
    /**
     * Values that may be interpreted as {@link $ServerScoreboard$Method}.
     */
    export type $ServerScoreboard$Method_ = "change" | "remove";
    export class $MinecraftServer$ServerResourcePackInfo extends $Record {
        isRequired(): boolean;
        hash(): string;
        url(): string;
        id(): $UUID;
        prompt(): $Component;
        constructor(id: $UUID_, url: string, hash: string, isRequired: boolean, prompt: $Component_ | null);
        get required(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ServerResourcePackInfo}.
     */
    export type $MinecraftServer$ServerResourcePackInfo_ = { url?: string, isRequired?: boolean, prompt?: $Component_, id?: $UUID_, hash?: string,  } | [url?: string, isRequired?: boolean, prompt?: $Component_, id?: $UUID_, hash?: string, ];
    export class $ReloadableServerRegistries {
        static reload(registries: $LayeredRegistryAccess<$RegistryLayer_>, resourceManager: $ResourceManager, backgroundExecutor: $Executor_): $CompletableFuture<$LayeredRegistryAccess<$RegistryLayer>>;
        constructor();
    }
    export class $Main {
        static main(args: string[]): void;
        constructor();
    }
    export class $ReloadableServerRegistries$EmptyTagLookupWrapper implements $HolderLookup$Provider {
        createSerializationContext<V>(ops: $DynamicOps<V>): $RegistryOps<V>;
        asGetterLookup(): $HolderGetter$Provider;
        lookupOrThrow<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
        holder<T>(registryKey: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
    }
    export class $ServerLinks$UntrustedEntry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        link(): string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$UntrustedEntry>;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$UntrustedEntry}.
     */
    export type $ServerLinks$UntrustedEntry_ = { type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: string,  } | [type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, link?: string, ];
    export class $Services extends $Record {
        profileCache(): $GameProfileCache;
        servicesKeySet(): $ServicesKeySet;
        canValidateProfileKeys(): boolean;
        sessionService(): $MinecraftSessionService;
        profileRepository(): $GameProfileRepository;
        profileKeySignatureValidator(): $SignatureValidator;
        static create(authenticationService: $YggdrasilAuthenticationService, profileRepository: $File_): $Services;
        constructor(arg0: $MinecraftSessionService, arg1: $ServicesKeySet_, arg2: $GameProfileRepository_, arg3: $GameProfileCache);
    }
    /**
     * Values that may be interpreted as {@link $Services}.
     */
    export type $Services_ = { sessionService?: $MinecraftSessionService, profileRepository?: $GameProfileRepository_, profileCache?: $GameProfileCache, servicesKeySet?: $ServicesKeySet_,  } | [sessionService?: $MinecraftSessionService, profileRepository?: $GameProfileRepository_, profileCache?: $GameProfileCache, servicesKeySet?: $ServicesKeySet_, ];
    export class $ServerFunctionManager {
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        getFunctionNames(): $Iterable<$ResourceLocation>;
        getTagNames(): $Iterable<$ResourceLocation>;
        replaceLibrary(reloader: $ServerFunctionLibrary): void;
        get(functionIdentifier: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        execute(_function: $CommandFunction<$CommandSourceStack>, source: $CommandSourceStack): void;
        getTag(functionTagIdentifier: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        tick(): void;
        getGameLoopSender(): $CommandSourceStack;
        constructor(server: $MinecraftServer, library: $ServerFunctionLibrary);
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        get functionNames(): $Iterable<$ResourceLocation>;
        get tagNames(): $Iterable<$ResourceLocation>;
        get gameLoopSender(): $CommandSourceStack;
    }
    export class $WorldLoader$WorldDataSupplier<D> {
    }
    export interface $WorldLoader$WorldDataSupplier<D> {
        get(context: $WorldLoader$DataLoadContext_): $WorldLoader$DataLoadOutput<D>;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$WorldDataSupplier}.
     */
    export type $WorldLoader$WorldDataSupplier_<D> = ((arg0: $WorldLoader$DataLoadContext) => $WorldLoader$DataLoadOutput_<D>);
}
