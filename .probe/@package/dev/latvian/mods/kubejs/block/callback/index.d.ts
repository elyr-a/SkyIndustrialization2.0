import { $Level, $BlockGetter, $Explosion, $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Map_, $Map, $Collection } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $EnumProperty, $Property, $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Rotation_, $Block_, $Rotation, $Mirror_, $Block, $Mirror } from "@package/net/minecraft/world/level/block";
import { $Comparable_, $Enum, $Comparable } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/dev/latvian/mods/kubejs/block/callback" {
    export class $CanBeReplacedCallback {
        getPlayer(): $Player;
        getClickLocation(): $Vec3;
        getClickedPos(): $BlockPos;
        getClickedFace(): $Direction;
        isSecondaryUseActive(): boolean;
        canBeReplaced(): boolean;
        getRotation(): number;
        isInside(): boolean;
        getItem(): $ItemStack;
        getLevel(): $Level;
        getHand(): $InteractionHand;
        getNearestLookingDirection(): $Direction;
        getHorizontalDirection(): $Direction;
        getNearestLookingDirections(): $Direction[];
        getNearestLookingVerticalDirection(): $Direction;
        isClickedPosIn(fluid: $Fluid_): boolean;
        getClickedBlock(): $LevelBlock;
        getFluidStateAtClickedPos(): $FluidState;
        constructor(blockPlaceContext: $BlockPlaceContext, state: $BlockState_);
        get player(): $Player;
        get clickLocation(): $Vec3;
        get clickedPos(): $BlockPos;
        get clickedFace(): $Direction;
        get secondaryUseActive(): boolean;
        get rotation(): number;
        get inside(): boolean;
        get item(): $ItemStack;
        get level(): $Level;
        get hand(): $InteractionHand;
        get nearestLookingDirection(): $Direction;
        get horizontalDirection(): $Direction;
        get nearestLookingDirections(): $Direction[];
        get nearestLookingVerticalDirection(): $Direction;
        get clickedBlock(): $LevelBlock;
        get fluidStateAtClickedPos(): $FluidState;
    }
    export class $BlockExplodedCallback {
        getRadius(): number;
        getBlockState(): $BlockState;
        getExplosion(): $Explosion;
        getCause(): $Entity;
        getBlock(): $LevelBlock;
        getLevel(): $Level;
        getAffectedPlayers(): $List<$Player>;
        getIgniter(): $LivingEntity;
        constructor(level: $Level_, pos: $BlockPos_, explosion: $Explosion);
        get radius(): number;
        get blockState(): $BlockState;
        get explosion(): $Explosion;
        get cause(): $Entity;
        get block(): $LevelBlock;
        get level(): $Level;
        get affectedPlayers(): $List<$Player>;
        get igniter(): $LivingEntity;
    }
    export class $BlockStateModifyCallback {
        /**
         * Checks if this block has the specified property
         */
        hasProperty<T extends $Comparable<T>>(property: $Property<T>): boolean;
        /**
         * Cycles the property
         */
        cycle<T extends $Comparable<T>>(property: $Property<T>): $BlockStateModifyCallback;
        /**
         * Updates the shape of this block. Mostly used in waterloggable blocks to update the water flow
         */
        updateShape(direction: $Direction_, blockState: $BlockState_, levelAccessor: $LevelAccessor, blockPos: $BlockPos_, blockPos2: $BlockPos_): $BlockStateModifyCallback;
        /**
         * Gets the value of the passed in property as an Optional. If the property does not exist in this block the Optional will be empty
         */
        getOptionalValue<T extends $Comparable<T>>(property: $Property<T>): (T) | undefined;
        populateNeighbours(map: $Map_<$Map_<$Property<never>, $Comparable_<never>>, $BlockState_>): $BlockStateModifyCallback;
        /**
         * Get a map of this blocks properties to it's value
         */
        getValues(): $Map<$Property<never>, $Comparable<never>>;
        /**
         * Gets the value of the pased in property
         */
        get<T extends $Comparable<T>>(property: $Property<T>): T;
        /**
         * Gets the value of the passed in property
         */
        getValue<T extends $Comparable<T>>(property: $Property<T>): T;
        /**
         * Sets the value of the specified enum property
         */
        set<T extends $Enum<T>>(property: $EnumProperty<T>, value: string): $BlockStateModifyCallback;
        /**
         * Sets the value of the specified integer property
         */
        set(property: $IntegerProperty, value: number): $BlockStateModifyCallback;
        /**
         * Sets the value of the specified boolean property
         */
        set(property: $BooleanProperty, value: boolean): $BlockStateModifyCallback;
        /**
         * Get the properties this block has that can be changed
         */
        getProperties(): $Collection<$Property<never>>;
        /**
         * Gets the state. If it has been modified, gets the new state
         */
        getState(): $BlockState;
        /**
         * Sets the value of the specified property
         */
        setValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, comparable: V): $BlockStateModifyCallback;
        /**
         * Rotate the block using the specified Rotation
         */
        rotate(rotation: $Rotation_): $BlockStateModifyCallback;
        /**
         * Mirror the block using the specified Mirror
         */
        mirror(mirror: $Mirror_): $BlockStateModifyCallback;
        constructor(state: $BlockState_);
        get values(): $Map<$Property<never>, $Comparable<never>>;
        get properties(): $Collection<$Property<never>>;
        get state(): $BlockState;
    }
    export class $BlockStateRotateCallback extends $BlockStateModifyCallback {
        /**
         * Get the Rotation that this block is being rotated by
         */
        getRotation(): $Rotation;
        /**
         * Rotates the specified direction
         */
        rotate(dir: $Direction_): $Direction;
        constructor(state: $BlockState_, rotation: $Rotation_);
        get rotation(): $Rotation;
    }
    export class $EntityFallenOnBlockCallback extends $EntityBlockCallback {
        /**
         * Applies fall damage to the entity, multiplier by the multiplier.
         * Note this does not force it, so entities that do not take fall damage are not affected.
         */
        applyFallDamage(multiplier: number): boolean;
        /**
         * Applies fall damage to the entity as if they had fallen from the provided height, and multiplies it by the provided multiplier.
         * Note this does not force it, so entities that do not take fall damage are not affected.
         */
        applyFallDamage(fallHeight: number, multiplier: number): boolean;
        /**
         * Damages the entity using the provided damage source, using the fall height and multiplier to calculate the damage amount.
         * Note this does not force the damage, so entities that do not take fall damage are not affected.
         */
        applyFallDamage(fallHeight: number, multiplier: number, damageSource: $DamageSource_): boolean;
        /**
         * Applies default fall damage to the entity.
         * Note this does not force it, so entities that do not take fall damage are not affected.
         */
        applyFallDamage(): boolean;
        /**
         * Get the height the entity has fallen
         */
        getFallHeight(): number;
        constructor(level: $Level_, entity: $Entity, pos: $BlockPos_, state: $BlockState_, fallHeight: number);
        get fallHeight(): number;
    }
    export class $BlockStateMirrorCallback extends $BlockStateModifyCallback {
        /**
         * Gets the rotation of the direction passed in relative to this mirror
         */
        getRotation(dir: $Direction_): $Rotation;
        /**
         * Mirrors the direction passed in
         */
        mirror(dir: $Direction_): $Direction;
        /**
         * Gets the Mirror
         */
        getMirror(): $Mirror;
        constructor(state: $BlockState_, mirror: $Mirror_);
    }
    export class $BlockStateModifyPlacementCallback extends $BlockStateModifyCallback {
        /**
         * Gets the player placing the block, if available
         */
        getPlayer(): $Player;
        /**
         * Gets the position in the block-space of where it was clicked
         */
        getClickLocation(): $Vec3;
        /**
         * Gets the clicked position in world
         */
        getClickedPos(): $BlockPos;
        /**
         * Gets the facing direction of the clicked block face
         */
        getClickedFace(): $Direction;
        /**
         * Set this block as waterlogged if it is in water
         */
        waterlogged(): $BlockStateModifyPlacementCallback;
        /**
         * Set if this block is waterlogged or not
         */
        waterlogged(waterlogged: boolean): $BlockStateModifyPlacementCallback;
        /**
         * Returns if the player is using the 'secondary' function of this item. Basically checks if they are holding shift
         */
        isSecondaryUseActive(): boolean;
        /**
         * Returns if the block being placed thinks it can be placed here. This is used for replacement checks, like placing blocks in water or tall grass
         */
        canPlace(): boolean;
        /**
         * Get the horizontal rotation of the player
         */
        getRotation(): number;
        /**
         * Returns if the hit posiiton in the block-space is inside the 1x1x1 cube of the block
         */
        isInside(): boolean;
        /**
         * Gets the item being placed
         */
        getItem(): $ItemStack;
        /**
         * Gets the level
         */
        getLevel(): $Level;
        /**
         * Checks if this block is in water
         */
        isInWater(): boolean;
        /**
         * Gets the hand that is placing the block
         */
        getHand(): $InteractionHand;
        /**
         * Gets the direction closes to where the player is currently looking
         */
        getNearestLookingDirection(): $Direction;
        /**
         * Gets the nearest horizontal direction to where the player is looking. NORTH if there is no player
         */
        getHorizontalDirection(): $Direction;
        /**
         * Returns if the block being placed is replacing the block clicked
         */
        replacingClickedOnBlock(): boolean;
        /**
         * Gets an array of all directions, ordered by which the player is looking closest to
         */
        getNearestLookingDirections(): $Direction[];
        /**
         * Gets the vertical direction (UP/DOWN) closest to where the player is currently looking
         */
        getNearestLookingVerticalDirection(): $Direction;
        /**
         * Checks if the block currently occupying the position this is being placed in is the same block type.
         * Used for things like candles, where multiple can be in the same block-space.
         */
        isReplacingSelf(): boolean;
        /**
         * Checks if the position clicked has a specified fluid there
         */
        isClickedPosIn(fluid: $Fluid_): boolean;
        /**
         * Gets the clicked block
         */
        getClickedBlock(): $LevelBlock;
        /**
         * Gets the FluidSate at the clicked position
         */
        getFluidStateAtClickedPos(): $FluidState;
        minecraftBlock: $Block;
        context: $BlockPlaceContext;
        block: $LevelBlock;
        constructor(context: $BlockPlaceContext, block: $Block_);
        get player(): $Player;
        get clickLocation(): $Vec3;
        get clickedPos(): $BlockPos;
        get clickedFace(): $Direction;
        get secondaryUseActive(): boolean;
        get rotation(): number;
        get inside(): boolean;
        get item(): $ItemStack;
        get level(): $Level;
        get inWater(): boolean;
        get hand(): $InteractionHand;
        get nearestLookingDirection(): $Direction;
        get horizontalDirection(): $Direction;
        get nearestLookingDirections(): $Direction[];
        get nearestLookingVerticalDirection(): $Direction;
        get replacingSelf(): boolean;
        get clickedBlock(): $LevelBlock;
        get fluidStateAtClickedPos(): $FluidState;
    }
    export class $RandomTickCallback {
        getServer(): $MinecraftServer;
        getLevel(): $Level;
        random: $RandomSource;
        block: $LevelBlock;
        constructor(block: $LevelBlock, random: $RandomSource);
        get server(): $MinecraftServer;
        get level(): $Level;
    }
    export class $EntityBlockCallback {
        /**
         * Returns the entity
         */
        getEntity(): $Entity;
        /**
         * Returns if the entity is suppressing bouncing (for players this is true if the player is crouching)
         */
        isSuppressingBounce(): boolean;
        /**
         * Returns the block's position
         */
        getPos(): $BlockPos;
        /**
         * Returns the BlockState
         */
        getState(): $BlockState;
        /**
         * Returns the block
         */
        getBlock(): $LevelBlock;
        /**
         * Returns the level
         */
        getLevel(): $Level;
        constructor(level: $Level_, entity: $Entity, pos: $BlockPos_, state: $BlockState_);
        get entity(): $Entity;
        get suppressingBounce(): boolean;
        get pos(): $BlockPos;
        get state(): $BlockState;
        get block(): $LevelBlock;
        get level(): $Level;
    }
    export class $AfterEntityFallenOnBlockCallback extends $EntityBlockCallback {
        /**
         * Returns the Vec3 of the entity's velocity. Use .x, .y and .z to get the respective components of that
         */
        getVelocity(): $Vec3;
        /**
         * Bounce the entity upwards by bounciness * their fall velocity.
         * Do not make bounciness negative, as that is a recipe for a long and laggy trip to the void
         */
        bounce(bounciness: number): void;
        /**
         * Sets the entity's velocity
         */
        setVelocity(x: number, y: number, z: number): void;
        /**
         * Sets the entity's velocity
         */
        setVelocity(vec: $Vec3_): void;
        constructor(blockGetter: $BlockGetter, entity: $Entity);
    }
}
