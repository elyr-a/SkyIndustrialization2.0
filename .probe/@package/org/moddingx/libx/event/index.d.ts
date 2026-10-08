import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionResult, $InteractionResult_, $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Path_, $Path } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Class } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/org/moddingx/libx/event" {
    export class $ConfigLoadedEvent extends $Event {
        getConfigId(): $ResourceLocation;
        getConfigClass(): $Class<never>;
        isClientConfig(): boolean;
        getConfigPath(): $Path;
        getCurrentPath(): $Path;
        getReason(): $ConfigLoadedEvent$LoadReason;
        constructor(arg0: $ResourceLocation_, arg1: $Class<never>, arg2: $ConfigLoadedEvent$LoadReason_, arg3: boolean, arg4: $Path_, arg5: $Path_ | null);
        get configId(): $ResourceLocation;
        get configClass(): $Class<never>;
        get clientConfig(): boolean;
        get configPath(): $Path;
        get currentPath(): $Path;
        get reason(): $ConfigLoadedEvent$LoadReason;
    }
    export class $ConfigLoadedEvent$LoadReason extends $Enum<$ConfigLoadedEvent$LoadReason> {
        static values(): $ConfigLoadedEvent$LoadReason[];
        static valueOf(arg0: string): $ConfigLoadedEvent$LoadReason;
        static RELOAD: $ConfigLoadedEvent$LoadReason;
        static SHADOW: $ConfigLoadedEvent$LoadReason;
        static INITIAL: $ConfigLoadedEvent$LoadReason;
        static RESTORE: $ConfigLoadedEvent$LoadReason;
        static INGAME_CHANGES: $ConfigLoadedEvent$LoadReason;
        static LOCAL_SHADOW: $ConfigLoadedEvent$LoadReason;
    }
    /**
     * Values that may be interpreted as {@link $ConfigLoadedEvent$LoadReason}.
     */
    export type $ConfigLoadedEvent$LoadReason_ = "initial" | "shadow" | "local_shadow" | "restore" | "reload" | "ingame_changes";
    export class $InteractBlockEmptyHandEvent extends $Event implements $ICancellableEvent {
        getPlayer(): $ServerPlayer;
        getCancellationResult(): $InteractionResult;
        getHit(): $BlockHitResult;
        getLevel(): $Level;
        getHand(): $InteractionHand;
        setCancellationResult(arg0: $InteractionResult_): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ServerPlayer, arg1: $Level_, arg2: $InteractionHand_, arg3: $BlockHitResult);
        get player(): $ServerPlayer;
        get hit(): $BlockHitResult;
        get level(): $Level;
        get hand(): $InteractionHand;
    }
}
