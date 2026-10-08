import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerBossEvent } from "@package/net/minecraft/server/level";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $UUID_, $Collection_, $Collection } from "@package/java/util";

declare module "@package/net/minecraft/server/bossevents" {
    export class $CustomBossEvent extends $ServerBossEvent {
        getMax(): number;
        addOfflinePlayer(player: $UUID_): void;
        setMax(max: number): void;
        getTextId(): $ResourceLocation;
        static load(tag: $CompoundTag_, id: $ResourceLocation_, levelRegistry: $HolderLookup$Provider): $CustomBossEvent;
        getValue(): number;
        save(levelRegistry: $HolderLookup$Provider): $CompoundTag;
        setValue(max: number): void;
        getDisplayName(): $Component;
        /**
         * Makes the boss visible to the given player.
         */
        onPlayerConnect(player: $ServerPlayer): void;
        /**
         * Makes the boss visible to the given player.
         */
        onPlayerDisconnect(player: $ServerPlayer): void;
        setPlayers(serverPlayerList: $Collection_<$ServerPlayer>): boolean;
        constructor(id: $ResourceLocation_, name: $Component_);
        get textId(): $ResourceLocation;
        get displayName(): $Component;
        set players(value: $Collection_<$ServerPlayer>);
    }
    export class $CustomBossEvents {
        getEvents(): $Collection<$CustomBossEvent>;
        getIds(): $Collection<$ResourceLocation>;
        remove(bossbar: $CustomBossEvent): void;
        get(id: $ResourceLocation_): $CustomBossEvent;
        load(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        save(levelRegistry: $HolderLookup$Provider): $CompoundTag;
        create(id: $ResourceLocation_, name: $Component_): $CustomBossEvent;
        onPlayerConnect(player: $ServerPlayer): void;
        onPlayerDisconnect(player: $ServerPlayer): void;
        constructor();
        get events(): $Collection<$CustomBossEvent>;
        get ids(): $Collection<$ResourceLocation>;
    }
}
