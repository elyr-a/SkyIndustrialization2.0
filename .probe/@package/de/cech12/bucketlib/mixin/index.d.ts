import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $EntityType, $EntityType_ } from "@package/net/minecraft/world/entity";

declare module "@package/de/cech12/bucketlib/mixin" {
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        bucketlib_spawnItemParticles(arg0: $ItemStack_, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityAccessor}.
     */
    export type $LivingEntityAccessor_ = ((arg0: $ItemStack, arg1: number) => void);
    export class $MobBucketItemAccessor {
    }
    export interface $MobBucketItemAccessor {
        bucketlib_getEntityType(): $EntityType<never>;
    }
    /**
     * Values that may be interpreted as {@link $MobBucketItemAccessor}.
     */
    export type $MobBucketItemAccessor_ = (() => $EntityType_<never>);
}
