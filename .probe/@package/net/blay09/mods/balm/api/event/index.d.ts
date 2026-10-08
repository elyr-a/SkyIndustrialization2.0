import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ParseResults } from "@package/com/mojang/brigadier";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BalmConfigSchema } from "@package/net/blay09/mods/balm/api/config/schema";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $InteractionResult, $InteractionResult_, $InteractionHand, $Container, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as client from "@package/net/blay09/mods/balm/api/event/client";
export * as server from "@package/net/blay09/mods/balm/api/event/server";

declare module "@package/net/blay09/mods/balm/api/event" {
    export class $LivingDeathEvent extends $BalmEvent {
        getEntity(): $LivingEntity;
        getDamageSource(): $DamageSource;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_);
        get entity(): $LivingEntity;
        get damageSource(): $DamageSource;
    }
    export class $DigSpeedEvent extends $BalmEvent {
        getPlayer(): $Player;
        setSpeedOverride(arg0: number): void;
        getSpeedOverride(): number;
        getState(): $BlockState;
        getSpeed(): number;
        constructor(arg0: $Player, arg1: $BlockState_, arg2: number);
        get player(): $Player;
        get state(): $BlockState;
        get speed(): number;
    }
    export class $TossItemEvent extends $BalmEvent {
        getPlayer(): $Player;
        getItemStack(): $ItemStack;
        constructor(arg0: $Player, arg1: $ItemStack_);
        get player(): $Player;
        get itemStack(): $ItemStack;
    }
    export class $LivingFallEvent extends $BalmEvent {
        getEntity(): $LivingEntity;
        setFallDamageOverride(arg0: number): void;
        getFallDamageOverride(): number;
        constructor(arg0: $LivingEntity);
        get entity(): $LivingEntity;
    }
    export class $CommandEvent extends $BalmEvent {
        getParseResults(): $ParseResults<$CommandSourceStack>;
        constructor(arg0: $ParseResults<$CommandSourceStack>);
        get parseResults(): $ParseResults<$CommandSourceStack>;
    }
    export class $ConfigReloadedEvent extends $BalmEvent {
        getSchema(): $BalmConfigSchema;
        constructor();
        constructor(arg0: $BalmConfigSchema);
        get schema(): $BalmConfigSchema;
    }
    export class $BalmEvent extends $Event implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor();
    }
    export class $CropGrowEvent$Post extends $CropGrowEvent {
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $CropGrowEvent extends $BalmEvent {
        getPos(): $BlockPos;
        getState(): $BlockState;
        getLevel(): $Level;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_);
        get pos(): $BlockPos;
        get state(): $BlockState;
        get level(): $Level;
    }
    export class $ConfigLoadedEvent extends $BalmEvent {
        getSchema(): $BalmConfigSchema;
        constructor(arg0: $BalmConfigSchema);
        get schema(): $BalmConfigSchema;
    }
    export class $UseItemEvent extends $BalmEvent {
        getPlayer(): $Player;
        getInteractionResult(): $InteractionResult;
        setResult(arg0: $InteractionResult_): void;
        getLevel(): $Level;
        getHand(): $InteractionHand;
        constructor(arg0: $Player, arg1: $Level_, arg2: $InteractionHand_);
        get player(): $Player;
        get interactionResult(): $InteractionResult;
        set result(value: $InteractionResult_);
        get level(): $Level;
        get hand(): $InteractionHand;
    }
    export class $BreakBlockEvent extends $BalmEvent {
        getPlayer(): $Player;
        getBlockEntity(): $BlockEntity;
        getPos(): $BlockPos;
        getState(): $BlockState;
        getLevel(): $Level;
        constructor(arg0: $Level_, arg1: $Player, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockEntity);
        get player(): $Player;
        get blockEntity(): $BlockEntity;
        get pos(): $BlockPos;
        get state(): $BlockState;
        get level(): $Level;
    }
    export class $LivingHealEvent extends $BalmEvent {
        getEntity(): $LivingEntity;
        getAmount(): number;
        constructor(arg0: $LivingEntity, arg1: number);
        get entity(): $LivingEntity;
        get amount(): number;
    }
    export class $CropGrowEvent$Pre extends $CropGrowEvent {
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $LivingDamageEvent extends $BalmEvent {
        getEntity(): $LivingEntity;
        setDamageAmount(arg0: number): void;
        getDamageSource(): $DamageSource;
        getDamageAmount(): number;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_, arg2: number);
        get entity(): $LivingEntity;
        get damageSource(): $DamageSource;
    }
    export class $PlayerRespawnEvent extends $BalmEvent {
        getNewPlayer(): $ServerPlayer;
        getOldPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer, arg1: $ServerPlayer);
        get newPlayer(): $ServerPlayer;
        get oldPlayer(): $ServerPlayer;
    }
    export class $PlayerChangedDimensionEvent extends $BalmEvent {
        getPlayer(): $ServerPlayer;
        getFromDim(): $ResourceKey<$Level>;
        getToDim(): $ResourceKey<$Level>;
        constructor(arg0: $ServerPlayer, arg1: $ResourceKey_<$Level>, arg2: $ResourceKey_<$Level>);
        get player(): $ServerPlayer;
        get fromDim(): $ResourceKey<$Level>;
        get toDim(): $ResourceKey<$Level>;
    }
    export class $PlayerAttackEvent extends $BalmEvent {
        getPlayer(): $Player;
        getTarget(): $Entity;
        constructor(arg0: $Player, arg1: $Entity);
        get player(): $Player;
        get target(): $Entity;
    }
    export class $PlayerConnectedEvent extends $BalmEvent {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get player(): $ServerPlayer;
    }
    export class $ItemCraftedEvent extends $BalmEvent {
        getPlayer(): $Player;
        getItemStack(): $ItemStack;
        getCraftMatrix(): $Container;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $Container);
        get player(): $Player;
        get itemStack(): $ItemStack;
        get craftMatrix(): $Container;
    }
    export class $UseBlockEvent extends $BalmEvent {
        getPlayer(): $Player;
        getHitResult(): $BlockHitResult;
        getInteractionResult(): $InteractionResult;
        setResult(arg0: $InteractionResult_): void;
        getLevel(): $Level;
        getHand(): $InteractionHand;
        constructor(arg0: $Player, arg1: $Level_, arg2: $InteractionHand_, arg3: $BlockHitResult);
        get player(): $Player;
        get hitResult(): $BlockHitResult;
        get interactionResult(): $InteractionResult;
        set result(value: $InteractionResult_);
        get level(): $Level;
        get hand(): $InteractionHand;
    }
    export class $PlayerLogoutEvent extends $BalmEvent {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get player(): $ServerPlayer;
    }
    export class $PlayerLoginEvent extends $BalmEvent {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get player(): $ServerPlayer;
    }
    export class $EntityAddedEvent extends $BalmEvent {
        getEntity(): $Entity;
        getLevel(): $Level;
        constructor(arg0: $Entity, arg1: $Level_);
        get entity(): $Entity;
        get level(): $Level;
    }
    export class $PlayerOpenMenuEvent extends $BalmEvent {
        getPlayer(): $ServerPlayer;
        getMenu(): $AbstractContainerMenu;
        constructor(arg0: $ServerPlayer, arg1: $AbstractContainerMenu);
        get player(): $ServerPlayer;
        get menu(): $AbstractContainerMenu;
    }
}
