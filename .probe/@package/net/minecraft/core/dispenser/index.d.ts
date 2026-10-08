import { $Level_ } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Position } from "@package/net/minecraft/core";
import { $ItemStack, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Logger } from "@package/org/slf4j";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Record } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $Boat$Type_ } from "@package/net/minecraft/world/entity/vehicle";
import { $DispenserBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/core/dispenser" {
    export class $DefaultDispenseItemBehavior implements $DispenseItemBehavior {
        static spawnItem(level: $Level_, stack: $ItemStack_, speed: number, facing: $Direction_, position: $Position): void;
        dispense(blockSource: $BlockSource_, item: $ItemStack_): $ItemStack;
        constructor();
    }
    export class $ShulkerBoxDispenseBehavior extends $OptionalDispenseItemBehavior {
        constructor();
    }
    export class $BlockSource extends $Record {
        center(): $Vec3;
        blockEntity(): $DispenserBlockEntity;
        state(): $BlockState;
        pos(): $BlockPos;
        level(): $ServerLevel;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $DispenserBlockEntity);
    }
    /**
     * Values that may be interpreted as {@link $BlockSource}.
     */
    export type $BlockSource_ = { blockEntity?: $DispenserBlockEntity, pos?: $BlockPos_, level?: $ServerLevel, state?: $BlockState_,  } | [blockEntity?: $DispenserBlockEntity, pos?: $BlockPos_, level?: $ServerLevel, state?: $BlockState_, ];
    export class $BoatDispenseItemBehavior extends $DefaultDispenseItemBehavior {
        execute(blockSource: $BlockSource_, item: $ItemStack_): $ItemStack;
        constructor(type: $Boat$Type_);
        constructor(type: $Boat$Type_, isChestBoat: boolean);
    }
    export class $ShearsDispenseItemBehavior extends $OptionalDispenseItemBehavior {
        constructor();
    }
    export class $OptionalDispenseItemBehavior extends $DefaultDispenseItemBehavior {
        isSuccess(): boolean;
        setSuccess(success: boolean): void;
        constructor();
    }
    export class $DispenseItemBehavior {
        static bootStrap(): void;
        static NOOP: $DispenseItemBehavior;
        static LOGGER: $Logger;
    }
    export interface $DispenseItemBehavior {
        dispense(blockSource: $BlockSource_, item: $ItemStack_): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $DispenseItemBehavior}.
     */
    export type $DispenseItemBehavior_ = ((arg0: $BlockSource, arg1: $ItemStack) => $ItemStack_);
    export class $ProjectileDispenseBehavior extends $DefaultDispenseItemBehavior {
        execute(blockSource: $BlockSource_, item: $ItemStack_): $ItemStack;
        constructor(projectile: $Item_);
    }
}
