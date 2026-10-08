import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LivingEntity, $Entity, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $ItemTossEvent } from "@package/net/neoforged/neoforge/event/entity/item";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $KubeStartupEvent, $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ClampedItemPropertyFunction_ } from "@package/net/minecraft/client/renderer/item";
import { $Unit_ } from "@package/net/minecraft/util";
import { $InteractionHand, $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $TickDuration_, $Lazy } from "@package/dev/latvian/mods/kubejs/util";
import { DataComponentTypes } from "@special/types";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $DataComponentType_, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $ItemAbility } from "@package/net/neoforged/neoforge/common";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $Item_, $Item, $UseAnim_, $Item$Properties, $Rarity_, $JukeboxSong, $TooltipFlag, $ArmorMaterial, $DyeColor_, $Tier_, $ItemStack_, $ItemStack, $Instrument, $ArmorItem$Type_, $Tier, $ArmorMaterial$Layer } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MobEffectInstance, $MobEffect_ } from "@package/net/minecraft/world/effect";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $InventoryKJS, $IngredientSupplierKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $TooltipRequirements_, $ItemTooltipData } from "@package/dev/latvian/mods/kubejs/text/tooltip";
import { $AttributeModifier, $AttributeModifier_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID_, $Map, $Set, $Spliterator, $Iterator, $List, $Map_, $List_, $Collection } from "@package/java/util";
import { $KubePlayerEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $PlayerInteractEvent$RightClickItem, $PlayerEvent$ItemSmeltedEvent, $PlayerInteractEvent$LeftClickEmpty, $PlayerInteractEvent$EntityInteract, $PlayerDestroyItemEvent, $PlayerEvent$ItemCraftedEvent, $ItemEntityPickupEvent$Post, $ItemEntityPickupEvent$Pre } from "@package/net/neoforged/neoforge/event/entity/player";
import { $TextActionBuilder } from "@package/dev/latvian/mods/kubejs/text/action";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Supplier_, $ToIntBiFunction_, $Consumer_, $Predicate_, $Predicate, $Function_, $UnaryOperator_, $BiPredicate_, $BiFunction_, $Supplier, $ToIntFunction_ } from "@package/java/util/function";
import { $RegistryAccess, $Registry, $Holder_ } from "@package/net/minecraft/core";
import { $EnchantmentInstance, $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { $Iterable, $Record, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemAttributeModifiers, $Fireworks_, $Tool_, $Tool, $FireworkExplosion_, $ItemAttributeModifiers$Entry_ } from "@package/net/minecraft/world/item/component";
import { $KubeColor, $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $Interner } from "@package/com/google/common/collect";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $KubeRayTraceResult, $KubeEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $Stream } from "@package/java/util/stream";
import { $FoodProperties, $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $PotionContents_, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ModelledBuilderBase, $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ComponentFunctions, $ItemComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $DamageType, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as custom from "@package/dev/latvian/mods/kubejs/item/custom";
export * as creativetab from "@package/dev/latvian/mods/kubejs/item/creativetab";

declare module "@package/dev/latvian/mods/kubejs/item" {
    export class $ItemClickedKubeEvent implements $KubePlayerEvent {
        /**
         * The player that clicked with the item.
         */
        getEntity(): $Player;
        /**
         * The ray trace result of the click.
         */
        getTarget(): $KubeRayTraceResult;
        /**
         * The item that was clicked with.
         */
        getItem(): $ItemStack;
        /**
         * The hand that the item was clicked with.
         */
        getHand(): $InteractionHand;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(player: $Player, hand: $InteractionHand_, item: $ItemStack_);
        get entity(): $Player;
        get target(): $KubeRayTraceResult;
        get item(): $ItemStack;
        get hand(): $InteractionHand;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $MutableToolTier implements $Tier {
        getUses(): number;
        getAttackDamageBonus(): number;
        getIncorrectBlocksForDrops(): $TagKey<$Block>;
        getVanillaRepairIngredient(): $Ingredient;
        getEnchantmentValue(): number;
        setIncorrectBlocksForDropsTag(tag: $ResourceLocation_): void;
        getIncorrectBlocksForDropsTag(): $ResourceLocation;
        setSpeed(f: number): void;
        getSpeed(): number;
        setAttackDamageBonus(f: number): void;
        setUses(i: number): void;
        setEnchantmentValue(i: number): void;
        setRepairIngredient(arg0: $Ingredient_): void;
        createToolProperties(arg0: $TagKey_<$Block>): $Tool;
        parent: $Tier;
        constructor(p: $Tier_);
        get incorrectBlocksForDrops(): $TagKey<$Block>;
        get vanillaRepairIngredient(): $Ingredient;
        set repairIngredient(value: $Ingredient_);
    }
    export class $FoodBuilder {
        /**
         * Sets seconds it takes to eat the food.
         */
        eatSeconds(seconds: number): $FoodBuilder;
        /**
         * Sets the saturation modifier. Note that the saturation restored is hunger * saturation.
         */
        saturation(s: number): $FoodBuilder;
        usingConvertsTo(stack: $ItemStack_): $FoodBuilder;
        /**
         * Removes an effect from the food.
         */
        removeEffect(mobEffect: $MobEffect_): $FoodBuilder;
        /**
         * Adds an effect to the food. Note that the effect duration is in ticks (20 ticks = 1 second).
         * 
         * @param mobEffectId The id of the effect. Can be either a string or a ResourceLocation.
         * @param duration The duration of the effect in ticks.
         * @param amplifier The amplifier of the effect. 0 means level 1, 1 means level 2, etc.
         * @param probability The probability of the effect being applied. 1 = 100%.
         */
        effect(mobEffectId: $ResourceLocation_, duration: number, amplifier: number, probability: number): $FoodBuilder;
        /**
         * Sets the hunger restored.
         */
        nutrition(h: number): $FoodBuilder;
        /**
         * Sets whether the food is always edible.
         */
        alwaysEdible(flag: boolean): $FoodBuilder;
        /**
         * Sets the food is always edible.
         */
        alwaysEdible(): $FoodBuilder;
        build(): $FoodProperties;
        /**
         * Sets a callback that is called when the food is eaten.
         * 
         * Note: This is currently not having effect in `ItemEvents.modification`,
         * as firing this callback requires an `ItemBuilder` instance in the `Item`.
         */
        eaten(e: $Consumer_<$FoodEatenKubeEvent>): $FoodBuilder;
        /**
         * Sets the food is fast to eat (having half of the eating time).
         */
        fastToEat(): $FoodBuilder;
        constructor(properties: $FoodProperties_);
        constructor();
    }
    export class $ItemModificationKubeEvent implements $KubeEvent {
        /**
         * Modifies items matching the given ingredient.
         * 
         * **NOTE**: tag ingredients are not supported at this time.
         */
        modify(arg0: $ItemPredicate_, c: $Consumer_<$ItemModificationKubeEvent$ItemModifications>): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
    }
    export class $ItemBehavior$EndermanMaskTest {
    }
    export interface $ItemBehavior$EndermanMaskTest {
        test(stack: $ItemStack_, player: $Player, endermanEntity: $LivingEntity): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemBehavior$EndermanMaskTest}.
     */
    export type $ItemBehavior$EndermanMaskTest_ = ((stack: $ItemStack, player: $Player, endermanEntity: $LivingEntity) => boolean);
    export class $ItemHandlerUtils {
        static giveItemToPlayer(player: $Player, stack: $ItemStack_, preferredSlot: number): void;
        static insertItem(dest: $InventoryKJS, stack: $ItemStack_, simulate: boolean): $ItemStack;
        static insertItemStacked(inventory: $InventoryKJS, stack: $ItemStack_, simulate: boolean): $ItemStack;
        constructor();
    }
    export class $KubeJSItemStackData {
        chance: number;
        constructor();
    }
    export class $ItemCraftedKubeEvent implements $KubePlayerEvent {
        /**
         * The player that crafted the item.
         */
        getEntity(): $Player;
        /**
         * The inventory that the item was crafted in.
         */
        getInventory(): $InventoryKJS;
        /**
         * The item that was crafted.
         */
        getItem(): $ItemStack;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(player: $Player, crafted: $ItemStack_, container: $Container);
        get entity(): $Player;
        get inventory(): $InventoryKJS;
        get item(): $ItemStack;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $ItemBehaviorFunctions {
    }
    export interface $ItemBehaviorFunctions {
        /**
         * Determines if the item entity will be immune to listed damages types.
         * 
         * All other damages will be treated as normal. Passing [] will have no effect.
         */
        immuneTo(damageTypes: $List_<$ResourceKey_<$DamageType>>): this;
        canElytraFly(canElytraFly: boolean): this;
        /**
         * Determines if the item allows player to do elytra flying when equipped in the chest slot.
         */
        canElytraFly(canElytraFly: $BiPredicate_<$ItemStack, $LivingEntity>): this;
        /**
         * When players did not finish using the item but released the right mouse button halfway through.
         * 
         * An example is the bow, where the arrow is shot when the player releases the right mouse button.
         * 
         * To ensure the bow won't finish using, Minecraft sets the `useDuration` to a very high number (1h).
         */
        releaseUsing(releaseUsing: $ItemBehavior$ReleaseUsingCallback_): this;
        /**
         * Called every tick when the player is flying with elytra with this item equipped in the chest slot.
         * 
         * Returning false will stop the player from flying.
         */
        elytraFlightTick(elytraFlightTick: $ItemBehavior$ElytraFlightTickCallback_): this;
        /**
         * Determines the lifespan in ticks of the item when it's dropped on the ground as an entity.
         * 
         * Used for items like Fluix Seeds to prevent them from despawning.
         */
        getEntityLifespan(getEntityLifespan: $ToIntBiFunction_<$ItemStack, $Level>): this;
        getEntityLifespan(lifespan: number): this;
        /**
         * Determines if the item entity will be destroyed by the damage source.
         * 
         * For example, netherite items will not be destroyed by lava.
         */
        canBeHurtBy(canBeHurtBy: $BiPredicate_<$ItemStack, $DamageSource>): this;
        /**
         * Determines the width of the item's durability bar. Defaulted to vanilla behavior.
         * 
         * The function should return a value between 0 and 13 (max width of the bar).
         */
        barWidth(barWidth: $ToIntFunction_<$ItemStack>): this;
        /**
         * Determines the color of the item's durability bar. Defaulted to vanilla behavior.
         */
        barColor(barColor: $Function_<$ItemStack, $KubeColor>): this;
        /**
         * Adds a tooltip to the item.
         */
        tooltip(component: $Component_): this;
        /**
         * When players finish using the item.
         * 
         * This is called only when `useDuration` ticks have passed.
         * 
         * For example, when eating food, this is called when the player has finished eating the food, so hunger is restored.
         */
        finishUsing(finishUsing: $ItemBehavior$FinishUsingCallback_): this;
        /**
         * Determines if the item can perform corresponding action. E.g. shearing sheep, stripping logs, etc.
         */
        canPerformAction(canPerformAction: $BiPredicate_<$ItemStack, $ItemAbility>): this;
        canDisableShield(canDisableShield: boolean): this;
        /**
         * Determines if the item can disable shield when attacking like axe does.
         */
        canDisableShield(canDisableShield: $ItemBehavior$DisableShieldTest_): this;
        /**
         * Returns the enchanted item stack after applying enchantments to the item.
         * 
         * For example, books will be transformed into enchanted books by using this.
         */
        applyEnchantments(applyEnchantments: $BiFunction_<$ItemStack, $List<$EnchantmentInstance>, $ItemStack>): this;
        /**
         * The duration when the item is used.
         * 
         * For example, when eating food, this is the time it takes to eat the food.
         * This can change the eating speed, or be used for other things (like making a custom bow).
         */
        useDuration(useDuration: $ToIntBiFunction_<$ItemStack, $LivingEntity>): this;
        isPiglinCurrency(isPiglinCurrency: boolean): this;
        /**
         * Determines if piglins will give an item or something in exchange for the item.
         */
        isPiglinCurrency(isPiglinCurrency: $Predicate_<$ItemStack>): this;
        /**
         * Whether this item can be used to hide player head for enderman
         */
        isEnderMask(isEnderMask: $ItemBehavior$EndermanMaskTest_): this;
        isEnderMask(isEnderMask: boolean): this;
        /**
         * Makes the item glow like enchanted, even if it's not enchanted.
         */
        glow(glow: boolean): this;
        /**
         * Returns the item that remains in the crafting grid (or furnace fuel) after crafting with this item programatically.
         * 
         * Returning an empty stack or null will make the item be consumed as normal.
         * 
         * An example would be durability-consuming items, e.g. hammers or wrenches.
         */
        craftingRemainingItem(craftingRemainingItem: $UnaryOperator_<$ItemStack>): this;
        /**
         * Determines if piglins will be neutral to the wearer of the item and will not attack on sight.
         * 
         * However, this does not prevent piglins from being hostile due to other actions, or make piglins
         * stop being hostile if they are already hostile.
         */
        makesPiglinsNeutral(makesPiglinsNeutral: $BiPredicate_<$ItemStack, $LivingEntity>): this;
        makesPiglinsNeutral(makesPiglinsNeutral: boolean): this;
        /**
         * Determines the animation of the item when used, e.g. eating food.
         */
        useAnimation(anim: $UseAnim_): this;
        /**
         * Sets the item's name dynamically.
         */
        name(name: $ItemBehavior$NameCallback_): this;
        /**
         * Determines if player will start using the item.
         * 
         * For example, when eating food, returning true will make the player start eating the food.
         */
        use(use: $ItemBehavior$UseCallback_): this;
        /**
         * Gets called when the item is used to hurt an entity.
         * 
         * For example, when using a sword to hit a mob, this is called.
         */
        hurtEnemy(hurtEnemy: $Predicate_<$ItemBehavior$HurtEnemyContext>): this;
        /**
         * Determines if the player can walk on powdered snow with this item worn in the feet slot.
         */
        canWalkOnPowderedSnow(canWalkOnPowderedSnow: $BiPredicate_<$ItemStack, $LivingEntity>): this;
        canWalkOnPowderedSnow(canWalkOnPowderedSnow: boolean): this;
        /**
         * Determines if the item entity will be destroyed by listed damages types.
         * 
         * All other damages will be treated as normal. Passing [] will make the item immune to all damage.
         */
        onlyHurtBy(damageTypes: $List_<$ResourceKey_<$DamageType>>): this;
    }
    /**
     * Values that may be interpreted as {@link $ItemBehaviorFunctions}.
     */
    export type $ItemBehaviorFunctions_ = (() => void);
    export class $ItemBehavior$HurtEnemyContext extends $Record {
        getTarget(): $LivingEntity;
        getItem(): $ItemStack;
        getAttacker(): $LivingEntity;
        constructor(getItem: $ItemStack_, getTarget: $LivingEntity, getAttacker: $LivingEntity);
        get target(): $LivingEntity;
        get item(): $ItemStack;
        get attacker(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $ItemBehavior$HurtEnemyContext}.
     */
    export type $ItemBehavior$HurtEnemyContext_ = { getAttacker?: $LivingEntity, getTarget?: $LivingEntity, getItem?: $ItemStack_,  } | [getAttacker?: $LivingEntity, getTarget?: $LivingEntity, getItem?: $ItemStack_, ];
    export class $ModifyItemTooltipsKubeEvent implements $KubeEvent {
        modify(filter: $Ingredient_, consumer: $Consumer_<$TextActionBuilder>): void;
        modify(filter: $Ingredient_, requirements: $TooltipRequirements_, consumer: $Consumer_<$TextActionBuilder>): void;
        add(filter: $Ingredient_, requirements: $TooltipRequirements_, text: $List_<$Component_>): void;
        add(filter: $Ingredient_, text: $List_<$Component_>): void;
        modifyAll(requirements: $TooltipRequirements_, consumer: $Consumer_<$TextActionBuilder>): void;
        modifyAll(consumer: $Consumer_<$TextActionBuilder>): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(callback: $Consumer_<$ItemTooltipData>);
    }
    export class $JukeboxSongBuilder extends $BuilderBase<$JukeboxSong> {
        comparatorOutput(comparatorOutput: number): this;
        song(sound: $Holder_<$SoundEvent>, length: number): this;
        description(description: $Component_): this;
        registryKey: $ResourceKey<$Registry<$JukeboxSong>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $ItemDestroyedKubeEvent implements $KubePlayerEvent {
        getEntity(): $Player;
        getItem(): $ItemStack;
        getHand(): $InteractionHand;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(e: $PlayerDestroyItemEvent);
        get entity(): $Player;
        get item(): $ItemStack;
        get hand(): $InteractionHand;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $ItemEntityInteractedKubeEvent implements $KubePlayerEvent {
        /**
         * The player that interacted with the entity.
         */
        getEntity(): $Player;
        /**
         * The entity that was interacted with.
         */
        getTarget(): $Entity;
        /**
         * The item that was used to interact with the entity.
         */
        getItem(): $ItemStack;
        /**
         * The hand that was used to interact with the entity.
         */
        getHand(): $InteractionHand;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(player: $Player, entity: $Entity, hand: $InteractionHand_, item: $ItemStack_);
        get entity(): $Player;
        get target(): $Entity;
        get item(): $ItemStack;
        get hand(): $InteractionHand;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $DynamicItemTooltipsKubeEvent implements $KubeEvent {
        add(text: $List_<$Component_>): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        item: $ItemStack;
        advanced: boolean;
        ctrl: boolean;
        startup: boolean;
        shift: boolean;
        alt: boolean;
        lines: $List<$Component>;
        creative: boolean;
        constructor(item: $ItemStack_, flags: $TooltipFlag, lines: $List_<$Component_>, startup: boolean);
    }
    export class $ItemStackKey {
        static of(stack: $ItemStack_): $ItemStackKey;
        patch: $DataComponentPatch;
        item: $Item;
        static EMPTY: $ItemStackKey;
        constructor(item: $Item_, patch: $DataComponentPatch_);
    }
    export class $ItemModelPropertiesKubeEvent implements $KubeStartupEvent {
        /**
         * Register a model property for all items.
         */
        registerAll(overwriteId: $ResourceLocation_, callback: $ClampedItemPropertyFunction_): void;
        /**
         * Register a model property for an item. Model properties are used to change the appearance of an item in the world.
         * 
         * More about model properties: https://minecraft.wiki/w/Tutorials/Models#Item_predicates
         */
        register(ingredient: $Ingredient_, overwriteId: $ResourceLocation_, callback: $ClampedItemPropertyFunction_): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
    }
    export class $ItemEnchantmentsWrapper {
        static wrap(from: $Object): $ItemEnchantments;
        static MAP_TYPE: $TypeInfo;
        constructor();
    }
    export class $ItemBuilder extends $ModelledBuilderBase<$Item> implements $ItemBehaviorFunctions {
        jukeboxPlayable(song: $ResourceKey_<$JukeboxSong>): this;
        jukeboxPlayable(song: $ResourceKey_<$JukeboxSong>, showInTooltip: boolean): this;
        /**
         * Set the food nutrition and saturation of the item.
         */
        food(nutrition: number, saturation: number): this;
        /**
         * Set the food properties of the item.
         */
        food(b: $Consumer_<$FoodBuilder>): this;
        /**
         * Sets the item's max damage. Default is 0 (No durability).
         */
        maxDamage(v: number): this;
        /**
         * Sets the item's burn time. Default is 0 (Not a fuel).
         */
        burnTime(v: $TickDuration_): this;
        /**
         * Makes the item fire resistant like netherite tools (or not).
         */
        fireResistant(isFireResistant: boolean): this;
        /**
         * Makes the item fire resistant like netherite tools.
         */
        fireResistant(): this;
        /**
         * Sets the item's rarity.
         */
        rarity(v: $Rarity_): this;
        /**
         * Sets the item's container item, e.g. a bucket for a milk bucket.
         */
        containerItem(id: $ResourceLocation_): this;
        transformObject(obj: $Item_): $Item;
        /**
         * Makes the item not stackable, equivalent to setting the item's max stack size to 1.
         */
        unstackable(): this;
        disableRepair(): this;
        /**
         * @deprecated
         */
        group(g: string): this;
        /**
         * Colorizes item's texture of the given index. Index is used when you have multiple layers, e.g. a crushed ore (of rock + ore).
         */
        color(index: number, color: $ItemTintFunction_): this;
        /**
         * Colorizes item's texture of the given index. Useful for coloring items, like GT ores ore dusts.
         */
        color(callback: $ItemTintFunction_): this;
        /**
         * Sets the item's max stack size. Default is 64.
         */
        maxStackSize(v: number): this;
        /**
         * Adds subtypes to the item. The function should return a collection of item stacks, each with a different subtype.
         * 
         * Each subtype will appear as a separate item in JEI and the creative inventory.
         */
        subtypes(fn: $Function_<$ItemStack, $Collection<$ItemStack>>): this;
        createItemProperties(): $Item$Properties;
        /**
         * Determines if the item entity will be immune to listed damages types.
         * 
         * All other damages will be treated as normal. Passing [] will have no effect.
         */
        immuneTo(damageTypes: $List_<$ResourceKey_<$DamageType>>): $ItemBehaviorFunctions;
        canElytraFly(canElytraFly: boolean): $ItemBehaviorFunctions;
        /**
         * Determines if the item allows player to do elytra flying when equipped in the chest slot.
         */
        canElytraFly(canElytraFly: $BiPredicate_<$ItemStack, $LivingEntity>): $ItemBehaviorFunctions;
        /**
         * When players did not finish using the item but released the right mouse button halfway through.
         * 
         * An example is the bow, where the arrow is shot when the player releases the right mouse button.
         * 
         * To ensure the bow won't finish using, Minecraft sets the `useDuration` to a very high number (1h).
         */
        releaseUsing(releaseUsing: $ItemBehavior$ReleaseUsingCallback_): $ItemBehaviorFunctions;
        /**
         * Called every tick when the player is flying with elytra with this item equipped in the chest slot.
         * 
         * Returning false will stop the player from flying.
         */
        elytraFlightTick(elytraFlightTick: $ItemBehavior$ElytraFlightTickCallback_): $ItemBehaviorFunctions;
        /**
         * Determines the lifespan in ticks of the item when it's dropped on the ground as an entity.
         * 
         * Used for items like Fluix Seeds to prevent them from despawning.
         */
        getEntityLifespan(getEntityLifespan: $ToIntBiFunction_<$ItemStack, $Level>): $ItemBehaviorFunctions;
        getEntityLifespan(lifespan: number): $ItemBehaviorFunctions;
        /**
         * Determines if the item entity will be destroyed by the damage source.
         * 
         * For example, netherite items will not be destroyed by lava.
         */
        canBeHurtBy(canBeHurtBy: $BiPredicate_<$ItemStack, $DamageSource>): $ItemBehaviorFunctions;
        /**
         * Determines the width of the item's durability bar. Defaulted to vanilla behavior.
         * 
         * The function should return a value between 0 and 13 (max width of the bar).
         */
        barWidth(barWidth: $ToIntFunction_<$ItemStack>): $ItemBehaviorFunctions;
        /**
         * Determines the color of the item's durability bar. Defaulted to vanilla behavior.
         */
        barColor(barColor: $Function_<$ItemStack, $KubeColor>): $ItemBehaviorFunctions;
        /**
         * Adds a tooltip to the item.
         */
        tooltip(component: $Component_): $ItemBehaviorFunctions;
        /**
         * When players finish using the item.
         * 
         * This is called only when `useDuration` ticks have passed.
         * 
         * For example, when eating food, this is called when the player has finished eating the food, so hunger is restored.
         */
        finishUsing(finishUsing: $ItemBehavior$FinishUsingCallback_): $ItemBehaviorFunctions;
        /**
         * Determines if the item can perform corresponding action. E.g. shearing sheep, stripping logs, etc.
         */
        canPerformAction(canPerformAction: $BiPredicate_<$ItemStack, $ItemAbility>): $ItemBehaviorFunctions;
        canDisableShield(canDisableShield: boolean): $ItemBehaviorFunctions;
        /**
         * Determines if the item can disable shield when attacking like axe does.
         */
        canDisableShield(canDisableShield: $ItemBehavior$DisableShieldTest_): $ItemBehaviorFunctions;
        /**
         * Returns the enchanted item stack after applying enchantments to the item.
         * 
         * For example, books will be transformed into enchanted books by using this.
         */
        applyEnchantments(applyEnchantments: $BiFunction_<$ItemStack, $List<$EnchantmentInstance>, $ItemStack>): $ItemBehaviorFunctions;
        /**
         * The duration when the item is used.
         * 
         * For example, when eating food, this is the time it takes to eat the food.
         * This can change the eating speed, or be used for other things (like making a custom bow).
         */
        useDuration(useDuration: $ToIntBiFunction_<$ItemStack, $LivingEntity>): $ItemBehaviorFunctions;
        isPiglinCurrency(isPiglinCurrency: boolean): $ItemBehaviorFunctions;
        /**
         * Determines if piglins will give an item or something in exchange for the item.
         */
        isPiglinCurrency(isPiglinCurrency: $Predicate_<$ItemStack>): $ItemBehaviorFunctions;
        /**
         * Whether this item can be used to hide player head for enderman
         */
        isEnderMask(isEnderMask: $ItemBehavior$EndermanMaskTest_): $ItemBehaviorFunctions;
        isEnderMask(isEnderMask: boolean): $ItemBehaviorFunctions;
        /**
         * Makes the item glow like enchanted, even if it's not enchanted.
         */
        glow(glow: boolean): $ItemBehaviorFunctions;
        /**
         * Returns the item that remains in the crafting grid (or furnace fuel) after crafting with this item programatically.
         * 
         * Returning an empty stack or null will make the item be consumed as normal.
         * 
         * An example would be durability-consuming items, e.g. hammers or wrenches.
         */
        craftingRemainingItem(craftingRemainingItem: $UnaryOperator_<$ItemStack>): $ItemBehaviorFunctions;
        /**
         * Determines if piglins will be neutral to the wearer of the item and will not attack on sight.
         * 
         * However, this does not prevent piglins from being hostile due to other actions, or make piglins
         * stop being hostile if they are already hostile.
         */
        makesPiglinsNeutral(makesPiglinsNeutral: $BiPredicate_<$ItemStack, $LivingEntity>): $ItemBehaviorFunctions;
        makesPiglinsNeutral(makesPiglinsNeutral: boolean): $ItemBehaviorFunctions;
        /**
         * Determines the animation of the item when used, e.g. eating food.
         */
        useAnimation(anim: $UseAnim_): $ItemBehaviorFunctions;
        /**
         * Sets the item's name dynamically.
         */
        name(name: $ItemBehavior$NameCallback_): $ItemBehaviorFunctions;
        /**
         * Determines if player will start using the item.
         * 
         * For example, when eating food, returning true will make the player start eating the food.
         */
        use(use: $ItemBehavior$UseCallback_): $ItemBehaviorFunctions;
        /**
         * Gets called when the item is used to hurt an entity.
         * 
         * For example, when using a sword to hit a mob, this is called.
         */
        hurtEnemy(hurtEnemy: $Predicate_<$ItemBehavior$HurtEnemyContext>): $ItemBehaviorFunctions;
        /**
         * Determines if the player can walk on powdered snow with this item worn in the feet slot.
         */
        canWalkOnPowderedSnow(canWalkOnPowderedSnow: $BiPredicate_<$ItemStack, $LivingEntity>): $ItemBehaviorFunctions;
        canWalkOnPowderedSnow(canWalkOnPowderedSnow: boolean): $ItemBehaviorFunctions;
        /**
         * Determines if the item entity will be destroyed by listed damages types.
         * 
         * All other damages will be treated as normal. Passing [] will make the item immune to all damage.
         */
        onlyHurtBy(damageTypes: $List_<$ResourceKey_<$DamageType>>): $ItemBehaviorFunctions;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(id: $ResourceLocation_);
        /**
         * Add a default component to the item. Can be used for attribute modifiers, default enchantments... and so on.
         */
        component<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export class $ItemPickedUpKubeEvent implements $KubePlayerEvent {
        /**
         * The player that picked up the item.
         */
        getEntity(): $Player;
        /**
         * The item entity that was picked up.
         */
        getItemEntity(): $ItemEntity;
        /**
         * The item that was picked up.
         */
        getItem(): $ItemStack;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(player: $Player, entity: $ItemEntity, stack: $ItemStack_);
        get entity(): $Player;
        get itemEntity(): $ItemEntity;
        get item(): $ItemStack;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $PlayerMainInvWrapper extends $RangedWrapper {
        getInventoryPlayer(): $Inventory;
        constructor(inv: $Inventory);
        get inventoryPlayer(): $Inventory;
    }
    export class $ItemModificationKubeEvent$ItemModifications extends $Record implements $ItemComponentFunctions, $ItemBehaviorFunctions {
        setBurnTime(i: $TickDuration_): void;
        getComponentMap(): $DataComponentMap;
        setNameKey(key: string): void;
        disableRepair(): void;
        item(): $Item;
        setCraftingRemainder(item: $Item_): void;
        setTier(builder: $Consumer_<$MutableToolTier>): void;
        setUnbreakable(): void;
        setRepairCost(repairCost: number): void;
        setItemName(component: $Component_): void;
        setFood(nutrition: number, saturation: number): void;
        setFood(foodProperties: $FoodProperties_): void;
        modifyFood(foodBuilder: $Consumer_<$FoodBuilder>): void;
        setTool(tool: $Tool_): void;
        setInstrument(instrument: $Holder_<$Instrument>): void;
        setFireworks(fireworks: $Fireworks_): void;
        setMaxDamage(maxDamage: number): void;
        setDamage(damage: number): void;
        setMapItemColor(color: $KubeColor_): void;
        setFireworkExplosion(explosion: $FireworkExplosion_): void;
        setBundleContents(items: $List_<$ItemStack_>): void;
        setMaxStackSize(size: number): void;
        setChargedProjectiles(items: $List_<$ItemStack_>): void;
        setBucketEntityData(tag: $CompoundTag_): void;
        setBlockEntityData(tag: $CompoundTag_): void;
        setNoteBlockSound(id: $ResourceLocation_): void;
        getAttributeModifiers(): $ItemAttributeModifiers;
        setFireResistant(): void;
        setUnbreakableWithTooltip(): void;
        /**
         * Determines if the item entity will be immune to listed damages types.
         * 
         * All other damages will be treated as normal. Passing [] will have no effect.
         */
        immuneTo(damageTypes: $List_<$ResourceKey_<$DamageType>>): $ItemBehaviorFunctions;
        canElytraFly(canElytraFly: boolean): $ItemBehaviorFunctions;
        /**
         * Determines if the item allows player to do elytra flying when equipped in the chest slot.
         */
        canElytraFly(canElytraFly: $BiPredicate_<$ItemStack, $LivingEntity>): $ItemBehaviorFunctions;
        /**
         * When players did not finish using the item but released the right mouse button halfway through.
         * 
         * An example is the bow, where the arrow is shot when the player releases the right mouse button.
         * 
         * To ensure the bow won't finish using, Minecraft sets the `useDuration` to a very high number (1h).
         */
        releaseUsing(releaseUsing: $ItemBehavior$ReleaseUsingCallback_): $ItemBehaviorFunctions;
        /**
         * Called every tick when the player is flying with elytra with this item equipped in the chest slot.
         * 
         * Returning false will stop the player from flying.
         */
        elytraFlightTick(elytraFlightTick: $ItemBehavior$ElytraFlightTickCallback_): $ItemBehaviorFunctions;
        /**
         * Determines the lifespan in ticks of the item when it's dropped on the ground as an entity.
         * 
         * Used for items like Fluix Seeds to prevent them from despawning.
         */
        getEntityLifespan(getEntityLifespan: $ToIntBiFunction_<$ItemStack, $Level>): $ItemBehaviorFunctions;
        getEntityLifespan(lifespan: number): $ItemBehaviorFunctions;
        /**
         * Determines if the item entity will be destroyed by the damage source.
         * 
         * For example, netherite items will not be destroyed by lava.
         */
        canBeHurtBy(canBeHurtBy: $BiPredicate_<$ItemStack, $DamageSource>): $ItemBehaviorFunctions;
        /**
         * Determines the width of the item's durability bar. Defaulted to vanilla behavior.
         * 
         * The function should return a value between 0 and 13 (max width of the bar).
         */
        barWidth(barWidth: $ToIntFunction_<$ItemStack>): $ItemBehaviorFunctions;
        /**
         * Determines the color of the item's durability bar. Defaulted to vanilla behavior.
         */
        barColor(barColor: $Function_<$ItemStack, $KubeColor>): $ItemBehaviorFunctions;
        /**
         * Adds a tooltip to the item.
         */
        tooltip(component: $Component_): $ItemBehaviorFunctions;
        /**
         * When players finish using the item.
         * 
         * This is called only when `useDuration` ticks have passed.
         * 
         * For example, when eating food, this is called when the player has finished eating the food, so hunger is restored.
         */
        finishUsing(finishUsing: $ItemBehavior$FinishUsingCallback_): $ItemBehaviorFunctions;
        /**
         * Determines if the item can perform corresponding action. E.g. shearing sheep, stripping logs, etc.
         */
        canPerformAction(canPerformAction: $BiPredicate_<$ItemStack, $ItemAbility>): $ItemBehaviorFunctions;
        canDisableShield(canDisableShield: boolean): $ItemBehaviorFunctions;
        /**
         * Determines if the item can disable shield when attacking like axe does.
         */
        canDisableShield(canDisableShield: $ItemBehavior$DisableShieldTest_): $ItemBehaviorFunctions;
        /**
         * Returns the enchanted item stack after applying enchantments to the item.
         * 
         * For example, books will be transformed into enchanted books by using this.
         */
        applyEnchantments(applyEnchantments: $BiFunction_<$ItemStack, $List<$EnchantmentInstance>, $ItemStack>): $ItemBehaviorFunctions;
        /**
         * The duration when the item is used.
         * 
         * For example, when eating food, this is the time it takes to eat the food.
         * This can change the eating speed, or be used for other things (like making a custom bow).
         */
        useDuration(useDuration: $ToIntBiFunction_<$ItemStack, $LivingEntity>): $ItemBehaviorFunctions;
        isPiglinCurrency(isPiglinCurrency: boolean): $ItemBehaviorFunctions;
        /**
         * Determines if piglins will give an item or something in exchange for the item.
         */
        isPiglinCurrency(isPiglinCurrency: $Predicate_<$ItemStack>): $ItemBehaviorFunctions;
        /**
         * Whether this item can be used to hide player head for enderman
         */
        isEnderMask(isEnderMask: $ItemBehavior$EndermanMaskTest_): $ItemBehaviorFunctions;
        isEnderMask(isEnderMask: boolean): $ItemBehaviorFunctions;
        /**
         * Makes the item glow like enchanted, even if it's not enchanted.
         */
        glow(glow: boolean): $ItemBehaviorFunctions;
        /**
         * Returns the item that remains in the crafting grid (or furnace fuel) after crafting with this item programatically.
         * 
         * Returning an empty stack or null will make the item be consumed as normal.
         * 
         * An example would be durability-consuming items, e.g. hammers or wrenches.
         */
        craftingRemainingItem(craftingRemainingItem: $UnaryOperator_<$ItemStack>): $ItemBehaviorFunctions;
        /**
         * Determines if piglins will be neutral to the wearer of the item and will not attack on sight.
         * 
         * However, this does not prevent piglins from being hostile due to other actions, or make piglins
         * stop being hostile if they are already hostile.
         */
        makesPiglinsNeutral(makesPiglinsNeutral: $BiPredicate_<$ItemStack, $LivingEntity>): $ItemBehaviorFunctions;
        makesPiglinsNeutral(makesPiglinsNeutral: boolean): $ItemBehaviorFunctions;
        /**
         * Determines the animation of the item when used, e.g. eating food.
         */
        useAnimation(anim: $UseAnim_): $ItemBehaviorFunctions;
        /**
         * Sets the item's name dynamically.
         */
        name(name: $ItemBehavior$NameCallback_): $ItemBehaviorFunctions;
        /**
         * Determines if player will start using the item.
         * 
         * For example, when eating food, returning true will make the player start eating the food.
         */
        use(use: $ItemBehavior$UseCallback_): $ItemBehaviorFunctions;
        /**
         * Gets called when the item is used to hurt an entity.
         * 
         * For example, when using a sword to hit a mob, this is called.
         */
        hurtEnemy(hurtEnemy: $Predicate_<$ItemBehavior$HurtEnemyContext>): $ItemBehaviorFunctions;
        /**
         * Determines if the player can walk on powdered snow with this item worn in the feet slot.
         */
        canWalkOnPowderedSnow(canWalkOnPowderedSnow: $BiPredicate_<$ItemStack, $LivingEntity>): $ItemBehaviorFunctions;
        canWalkOnPowderedSnow(canWalkOnPowderedSnow: boolean): $ItemBehaviorFunctions;
        /**
         * Determines if the item entity will be destroyed by listed damages types.
         * 
         * All other damages will be treated as normal. Passing [] will make the item immune to all damage.
         */
        onlyHurtBy(damageTypes: $List_<$ResourceKey_<$DamageType>>): $ItemBehaviorFunctions;
        setGlintOverride(override: boolean): void;
        remove(type: $DataComponentType_<never>): $ComponentFunctions;
        patch(components: $DataComponentPatch_): $ComponentFunctions;
        resetComponents(): $ComponentFunctions;
        getComponentString(): string;
        setCustomModelData(data: number): void;
        setTooltipHidden(): void;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>): void;
        setUnit(component: $DataComponentType_<$Unit_>): $ComponentFunctions;
        setPotionId(potion: $Holder_<$Potion>): void;
        setProfile(name: string, uuid: $UUID_): void;
        setProfile(profile: $GameProfile): void;
        setBaseColor(color: $DyeColor_): void;
        setLockCode(lock: string): void;
        getCustomData(): $CompoundTag;
        getCustomName(): $Component;
        setDyedColor(color: $KubeColor_): void;
        setEntityData(tag: $CompoundTag_): void;
        setCustomData(tag: $CompoundTag_): void;
        setRarity(rarity: $Rarity_): void;
        setCustomName(name: $Component_): void;
        setPotionContents(contents: $PotionContents_): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        setAdditionalTooltipHidden(): void;
        setAttributeModifiersWithTooltip(modifiers: $List_<$ItemAttributeModifiers$Entry_>): void;
        getAttackSpeed(): number;
        /**
         * Sets the attack speed of this item to the given value, **removing** all other modifiers to attack speed.
         * Note that players have a default attack speed of 4.0, so this modifier is added on top of that.
         * (Example: Swords have an attack speed of -2.4, leading to a total value of 1.6 without any other changes.)
         */
        setAttackSpeed(speed: number): void;
        getBaseAttackDamage(): number;
        addAttributeModifier(attribute: $Holder_<$Attribute>, mod: $AttributeModifier_, slot: $EquipmentSlotGroup_): void;
        /**
         * Overrides the *base* attack damage of this item to be the given value, keeping other modifiers intact.
         * Note that since players have a default attack damage of 1.0, total damage will be (dmg + 1.0) before other modifiers.
         */
        setBaseAttackDamage(dmg: number): void;
        /**
         * Overrides the *base* attack speed of this item to be the given value, keeping other modifiers intact.
         * Note that players have a default attack speed of 4.0, so this modifier is added on top of that.
         */
        setBaseAttackSpeed(speed: number): void;
        /**
         * Sets the attack damage of this item to the given value, **removing** all other modifiers to attack damage.
         * Note that since players have a default attack damage of 1.0, total damage will be (dmg + 1.0) before other modifiers.
         * (In practice, this simply means that most weapons have this value set to 1 less than what you might think.)
         */
        setAttackDamage(dmg: number): void;
        getBaseAttackSpeed(): number;
        setAttributeModifiers(modifiers: $List_<$ItemAttributeModifiers$Entry_>): void;
        getAttackDamage(): number;
        hasAttributeModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): boolean;
        getAttributeModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): $AttributeModifier;
        constructor(item: $Item_);
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        set burnTime(value: $TickDuration_);
        get componentMap(): $DataComponentMap;
        set nameKey(value: string);
        set craftingRemainder(value: $Item_);
        set tier(value: $Consumer_<$MutableToolTier>);
        set repairCost(value: number);
        set itemName(value: $Component_);
        set tool(value: $Tool_);
        set instrument(value: $Holder_<$Instrument>);
        set fireworks(value: $Fireworks_);
        set maxDamage(value: number);
        set damage(value: number);
        set mapItemColor(value: $KubeColor_);
        set fireworkExplosion(value: $FireworkExplosion_);
        set bundleContents(value: $List_<$ItemStack_>);
        set maxStackSize(value: number);
        set chargedProjectiles(value: $List_<$ItemStack_>);
        set bucketEntityData(value: $CompoundTag_);
        set blockEntityData(value: $CompoundTag_);
        set noteBlockSound(value: $ResourceLocation_);
        set glintOverride(value: boolean);
        get componentString(): string;
        set customModelData(value: number);
        set unit(value: $DataComponentType_<$Unit_>);
        set potionId(value: $Holder_<$Potion>);
        set baseColor(value: $DyeColor_);
        set lockCode(value: string);
        set dyedColor(value: $KubeColor_);
        set entityData(value: $CompoundTag_);
        set rarity(value: $Rarity_);
        set potionContents(value: $PotionContents_);
        set blockStateProperties(value: $Map_<string, string>);
        set dyedColorWithTooltip(value: $KubeColor_);
        set attributeModifiersWithTooltip(value: $List_<$ItemAttributeModifiers$Entry_>);
    }
    /**
     * Values that may be interpreted as {@link $ItemModificationKubeEvent$ItemModifications}.
     */
    export type $ItemModificationKubeEvent$ItemModifications_ = { item?: $Item_,  } | [item?: $Item_, ];
    export class $ItemPredicate {
        static wrap(from: $Object): $ItemPredicate;
        static ALL: $ItemPredicate;
        static TYPE_INFO: $TypeInfo;
        static NONE: $ItemPredicate;
    }
    export interface $ItemPredicate extends $Predicate<$ItemStack>, $IngredientSupplierKJS {
        canBeUsedForMatching(): boolean;
        getDisplayStacks(): $ItemStackSet;
        isWildcard(): boolean;
        getFirst(): $ItemStack;
        getStackArray(): $ItemStack[];
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        getItemIds(): $Set<string>;
        getStacks(): $ItemStackSet;
        testItem(item: $Item_): boolean;
        asIngredient(): $Ingredient;
        test(itemStack: $ItemStack_): boolean;
        get displayStacks(): $ItemStackSet;
        get wildcard(): boolean;
        get first(): $ItemStack;
        get stackArray(): $ItemStack[];
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
        get itemIds(): $Set<string>;
        get stacks(): $ItemStackSet;
    }
    /**
     * Values that may be interpreted as {@link $ItemPredicate}.
     */
    export type $ItemPredicate_ = $Ingredient_ | "*" | "-" | ((item: $Item) => boolean) | ((itemStack: $ItemStack) => boolean);
    export class $ItemDroppedKubeEvent implements $KubePlayerEvent {
        /**
         * The player that dropped the item.
         */
        getEntity(): $Player;
        /**
         * The item entity that was spawned when dropping.
         */
        getItemEntity(): $ItemEntity;
        /**
         * The item that was dropped.
         */
        getItem(): $ItemStack;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(player: $Player, entity: $ItemEntity);
        get entity(): $Player;
        get itemEntity(): $ItemEntity;
        get item(): $ItemStack;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $ItemSmeltedKubeEvent implements $KubePlayerEvent {
        /**
         * The player that smelted the item.
         */
        getEntity(): $Player;
        /**
         * The item that was smelted.
         */
        getItem(): $ItemStack;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(player: $Player, smelted: $ItemStack_);
        get entity(): $Player;
        get item(): $ItemStack;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $ArmorMaterialBuilder extends $BuilderBase<$ArmorMaterial> {
        toughness(v: number): this;
        equipSound(sound: $Holder_<$SoundEvent>): this;
        repairIngredient(v: $Supplier_<$Ingredient>): this;
        enchantmentValue(v: number): this;
        defense(v: $Map_<$ArmorItem$Type_, number>): this;
        knockbackResistance(v: number): this;
        layers(v: $ArmorMaterial$Layer[]): this;
        registryKey: $ResourceKey<$Registry<$ArmorMaterial>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $RangedWrapper implements $InventoryKJS {
        kjs$isItemValid(slot: number, stack: $ItemStack_): boolean;
        kjs$getSlotLimit(slot: number): number;
        kjs$isMutable(): boolean;
        kjs$getSlots(): number;
        kjs$getStackInSlot(slot: number): $ItemStack;
        kjs$insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        kjs$extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        asContainer(): $Container;
        getHeight(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        getWidth(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        setChanged(): void;
        getBlock(level: $Level_): $LevelBlock;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        count(): number;
        clear(match: $ItemPredicate_): void;
        clear(): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        constructor(compose: $InventoryKJS, minSlot: number, maxSlotExclusive: number);
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get width(): number;
        get empty(): boolean;
    }
    export class $KubeJSItemProperties extends $Item$Properties {
        itemBuilder: $ItemBuilder;
        static COMPONENT_INTERNER: $Interner<$DataComponentMap>;
        constructor(itemBuilder: $ItemBuilder);
    }
    export class $ItemTintFunction$Fixed extends $Record implements $ItemTintFunction {
        getColor(stack: $ItemStack_, index: number): $KubeColor;
        color(): $KubeColor;
        constructor(color: $KubeColor_);
    }
    /**
     * Values that may be interpreted as {@link $ItemTintFunction$Fixed}.
     */
    export type $ItemTintFunction$Fixed_ = { color?: $KubeColor_,  } | [color?: $KubeColor_, ];
    export class $ItemBehavior$DisableShieldTest {
    }
    export interface $ItemBehavior$DisableShieldTest {
        test(stack: $ItemStack_, shield: $ItemStack_, attacker: $LivingEntity): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemBehavior$DisableShieldTest}.
     */
    export type $ItemBehavior$DisableShieldTest_ = ((stack: $ItemStack, shield: $ItemStack, attacker: $LivingEntity) => boolean);
    export class $ItemBehavior {
        constructor();
    }
    export class $ItemBehavior$UseCallback {
    }
    export interface $ItemBehavior$UseCallback {
        use(level: $Level_, player: $Player, interactionHand: $InteractionHand_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemBehavior$UseCallback}.
     */
    export type $ItemBehavior$UseCallback_ = ((level: $Level, player: $Player, interactionHand: $InteractionHand) => boolean);
    export class $ItemBehavior$FinishUsingCallback {
    }
    export interface $ItemBehavior$FinishUsingCallback {
        finishUsingItem(itemStack: $ItemStack_, level: $Level_, livingEntity: $LivingEntity): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $ItemBehavior$FinishUsingCallback}.
     */
    export type $ItemBehavior$FinishUsingCallback_ = ((itemStack: $ItemStack, level: $Level, livingEntity: $LivingEntity) => $ItemStack_);
    export class $ItemBehavior$NameCallback {
    }
    export interface $ItemBehavior$NameCallback {
        apply(itemStack: $ItemStack_): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ItemBehavior$NameCallback}.
     */
    export type $ItemBehavior$NameCallback_ = ((itemStack: $ItemStack) => $Component_);
    export class $ItemToolTiers {
        static wrap(o: $Object): $Tier;
        static ALL: $Lazy<$Map<string, $Tier>>;
        constructor();
    }
    export class $ItemBehavior$ReleaseUsingCallback {
    }
    export interface $ItemBehavior$ReleaseUsingCallback {
        releaseUsing(itemStack: $ItemStack_, level: $Level_, user: $LivingEntity, tick: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ItemBehavior$ReleaseUsingCallback}.
     */
    export type $ItemBehavior$ReleaseUsingCallback_ = ((itemStack: $ItemStack, level: $Level, user: $LivingEntity, tick: number) => void);
    export class $ItemStackSet implements $Iterable<$ItemStack> {
        remove(stack: $ItemStack_): void;
        size(): number;
        isEmpty(): boolean;
        add(stack: $ItemStack_): void;
        toArray(): $ItemStack[];
        iterator(): $Iterator<$ItemStack>;
        toList(): $List<$ItemStack>;
        stream(): $Stream<$ItemStack>;
        contains(stack: $ItemStack_): boolean;
        addAll(other: $ItemStackSet): void;
        static merge(first: $ItemStackSet, second: $ItemStackSet): $ItemStackSet;
        forEach(action: $Consumer_<$ItemStack>): void;
        getFirst(): $ItemStack;
        addItem(item: $Item_): void;
        spliterator(): $Spliterator<$ItemStack>;
        constructor(...items: $ItemStack_[]);
        constructor();
        constructor(initialSize: number);
        [Symbol.iterator](): Iterator<$ItemStack>
        get empty(): boolean;
        get first(): $ItemStack;
    }
    export class $FoodBuilder$EffectSupplier implements $Supplier<$MobEffectInstance> {
    }
    export class $ItemTintFunction {
        static wrap(o: $Object): $ItemTintFunction;
        static POTION: $ItemTintFunction;
        static TYPE_INFO: $TypeInfo;
        static BLOCK: $ItemTintFunction;
        static DISPLAY_COLOR_NBT: $ItemTintFunction;
        static MAP: $ItemTintFunction;
    }
    export interface $ItemTintFunction {
        getColor(stack: $ItemStack_, index: number): $KubeColor;
    }
    /**
     * Values that may be interpreted as {@link $ItemTintFunction}.
     */
    export type $ItemTintFunction_ = $ItemTintFunction_[] | string | ((stack: $ItemStack, index: number) => $KubeColor_);
    export class $FoodEatenKubeEvent implements $KubeEntityEvent {
        /**
         * The entity that ate the food.
         */
        getEntity(): $Entity;
        /**
         * The food that was eaten.
         */
        getItem(): $ItemStack;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(e: $LivingEntity, is: $ItemStack_);
        get entity(): $Entity;
        get item(): $ItemStack;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $ItemBehavior$ElytraFlightTickCallback {
    }
    export interface $ItemBehavior$ElytraFlightTickCallback {
        flightTick(stack: $ItemStack_, wearer: $LivingEntity, flightTicks: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemBehavior$ElytraFlightTickCallback}.
     */
    export type $ItemBehavior$ElytraFlightTickCallback_ = ((stack: $ItemStack, wearer: $LivingEntity, flightTicks: number) => boolean);
    export class $KubeJSItemEventHandler {
        static smelted(event: $PlayerEvent$ItemSmeltedEvent): void;
        static crafted(event: $PlayerEvent$ItemCraftedEvent): void;
        static itemDestroyed(event: $PlayerDestroyItemEvent): void;
        static leftClickEmpty(event: $PlayerInteractEvent$LeftClickEmpty): void;
        static itemPickupPre(event: $ItemEntityPickupEvent$Pre): void;
        static itemPickupPost(event: $ItemEntityPickupEvent$Post): void;
        static entityInteract(event: $PlayerInteractEvent$EntityInteract): void;
        static itemDrop(event: $ItemTossEvent): void;
        static rightClick(event: $PlayerInteractEvent$RightClickItem): void;
        constructor();
    }
    export class $ItemTintFunction$Mapped implements $ItemTintFunction {
        getColor(stack: $ItemStack_, index: number): $KubeColor;
        map: $Int2ObjectMap<$ItemTintFunction>;
        constructor();
    }
}
