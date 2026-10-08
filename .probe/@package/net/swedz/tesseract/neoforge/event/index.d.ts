import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Inventory, $Player } from "@package/net/minecraft/world/entity/player";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $BlockEvent } from "@package/net/neoforged/neoforge/event/level";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";
export * as treegrowth from "@package/net/swedz/tesseract/neoforge/event/treegrowth";

declare module "@package/net/swedz/tesseract/neoforge/event" {
    export class $ItemHurtEvent extends $LivingEvent implements $ICancellableEvent {
        getItemStack(): $ItemStack;
        getDamageAmount(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number);
        get itemStack(): $ItemStack;
        get damageAmount(): number;
    }
    export class $FarmlandLoseMoistureEvent extends $BlockEvent implements $ICancellableEvent {
        getMoistureAfter(): number;
        getMoistureBefore(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: number, arg4: number);
        get moistureAfter(): number;
        get moistureBefore(): number;
    }
    export class $PlayerInventoryChangeEvent extends $PlayerEvent {
        getInventory(): $Inventory;
        getStack(): $ItemStack;
        constructor(arg0: $Player, arg1: $Inventory, arg2: $ItemStack_);
        get inventory(): $Inventory;
        get stack(): $ItemStack;
    }
}
