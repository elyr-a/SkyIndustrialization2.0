import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Instrument, $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Component_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";
import { $Map_, $Set } from "@package/java/util";
import { $ItemTooltipEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Registry } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record, $Comparable } from "@package/java/lang";
import { $BannerPattern } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/dev/latvian/mods/betteradvancedtooltips" {
    export class $ItemTagIconsEvent extends $Event {
        getParentEvent(): $ItemTooltipEvent;
        append<T>(type: $TooltipTagType_<T>, tags: $Stream<$TagKey_<T>>): void;
        getItem(): $ItemStack;
        constructor(parentEvent: $ItemTooltipEvent, map: $Map_<$ResourceLocation_, $TagInstance>);
        get parentEvent(): $ItemTooltipEvent;
        get item(): $ItemStack;
    }
    export class $TooltipTagType<T> extends $Record {
        registryKey(): $ResourceKey<$Registry<T>>;
        component(): $Component;
        static INSTRUMENT: $TooltipTagType<$Instrument>;
        static PAINTING_VARIANT: $TooltipTagType<$PaintingVariant>;
        static BANNER_PATTERN: $TooltipTagType<$BannerPattern>;
        static ITEM: $TooltipTagType<$Item>;
        static ENCHANTMENT: $TooltipTagType<$Enchantment>;
        static FLUID: $TooltipTagType<$Fluid>;
        static BLOCK: $TooltipTagType<$Block>;
        static ENTITY_TYPE: $TooltipTagType<$EntityType<never>>;
        constructor(registryKey: $ResourceKey_<$Registry<T>>, component: $Component_);
        constructor(registryKey: $ResourceKey_<$Registry<T>>, style: $Style, symbol: string);
    }
    /**
     * Values that may be interpreted as {@link $TooltipTagType}.
     */
    export type $TooltipTagType_<T> = { registryKey?: $ResourceKey_<$Registry<any>>, component?: $Component_,  } | [registryKey?: $ResourceKey_<$Registry<any>>, component?: $Component_, ];
    export class $TagInstance implements $Comparable<$TagInstance> {
        toText(): $Component;
        compareTo(o: $TagInstance): number;
        tag: $ResourceLocation;
        registries: $Set<$TooltipTagType<never>>;
        constructor(tag: $ResourceLocation_);
    }
}
