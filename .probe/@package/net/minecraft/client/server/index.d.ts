import { $File } from "@package/java/io";
import { $LevelSettings } from "@package/net/minecraft/world/level";
import { $RegistryLayer_, $WorldStem_, $MinecraftServer, $Services_ } from "@package/net/minecraft/server";
import { $Component } from "@package/net/minecraft/network/chat";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $Minecraft } from "@package/net/minecraft/client";
import { $PlayerDataStorage, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $UUID_, $List } from "@package/java/util";
import { $ChunkProgressListenerFactory_ } from "@package/net/minecraft/server/level/progress";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $InetAddress } from "@package/java/net";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Thread } from "@package/java/lang";

declare module "@package/net/minecraft/client/server" {
    export class $IntegratedPlayerList extends $PlayerList {
        getServer(): $IntegratedServer;
        static WHITELIST_FILE: $File;
        static USERBANLIST_FILE: $File;
        static IPBANLIST_FILE: $File;
        static OPLIST_FILE: $File;
        static CHAT_FILTERED_FULL: $Component;
        static DUPLICATE_LOGIN_DISCONNECT_MESSAGE: $Component;
        constructor(server: $IntegratedServer, registries: $LayeredRegistryAccess<$RegistryLayer_>, playerIo: $PlayerDataStorage);
        get server(): $IntegratedServer;
    }
    export class $LanServerDetection {
        constructor();
    }
    export class $LanServerDetection$LanServerList {
        takeDirtyServers(): $List<$LanServer>;
        addServer(pingResponse: string, ipAddress: $InetAddress): void;
        constructor();
    }
    export class $IntegratedServer extends $MinecraftServer {
        /**
         * Initialises the server and starts it.
         */
        initServer(): boolean;
        setUUID(uuid: $UUID_): void;
        static VANILLA_BRAND: string;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        constructor(serverThread: $Thread, minecraft: $Minecraft, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, services: $Services_, progressListenerFactory: $ChunkProgressListenerFactory_);
        set UUID(value: $UUID_);
    }
    export class $LanServer {
        /**
         * Updates the time this LanServer was last seen.
         */
        updatePingTime(): void;
        getMotd(): string;
        getAddress(): string;
        constructor(motd: string, address: string);
        get motd(): string;
        get address(): string;
    }
    export class $LanServerPinger extends $Thread {
        static parseAddress(pingResponse: string): string;
        static createPingString(motdMessage: string, adMessage: string): string;
        static parseMotd(pingResponse: string): string;
        static MULTICAST_GROUP: string;
        static PING_PORT: number;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(motd: string, serverAddress: string);
    }
    export class $LanServerDetection$LanServerDetector extends $Thread {
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(serverList: $LanServerDetection$LanServerList);
    }
}
