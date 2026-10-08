import { $MinecraftServer, $ReloadableServerResources } from "@package/net/minecraft/server";
import { $BalmEvent } from "@package/net/blay09/mods/balm/api/event";

declare module "@package/net/blay09/mods/balm/api/event/server" {
    export class $ServerStartingEvent extends $BalmEvent {
        getServer(): $MinecraftServer;
        constructor(arg0: $MinecraftServer);
        get server(): $MinecraftServer;
    }
    export class $ServerReloadedEvent extends $BalmEvent {
        getServer(): $MinecraftServer;
        getResources(): $ReloadableServerResources;
        constructor(arg0: $ReloadableServerResources);
        get server(): $MinecraftServer;
        get resources(): $ReloadableServerResources;
    }
    export class $ServerReloadFinishedEvent extends $BalmEvent {
        getServer(): $MinecraftServer;
        constructor(arg0: $MinecraftServer);
        get server(): $MinecraftServer;
    }
    export class $ServerStartedEvent extends $BalmEvent {
        getServer(): $MinecraftServer;
        constructor(arg0: $MinecraftServer);
        get server(): $MinecraftServer;
    }
}
