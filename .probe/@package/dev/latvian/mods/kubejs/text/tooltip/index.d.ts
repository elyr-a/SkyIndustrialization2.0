import { $TextAction } from "@package/dev/latvian/mods/kubejs/text/action";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Tristate_, $Tristate } from "@package/dev/latvian/mods/kubejs/util";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $List, $List_, $Map_, $Map } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/text/tooltip" {
    export class $TooltipRequirements extends $Record {
        ctrl(): $Tristate;
        alt(): $Tristate;
        advanced(): $Tristate;
        creative(): $Tristate;
        shift(): $Tristate;
        stages(): $Map<string, $Tristate>;
        static DEFAULT: $TooltipRequirements;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TooltipRequirements>;
        constructor(shift: $Tristate_, ctrl: $Tristate_, alt: $Tristate_, advanced: $Tristate_, creative: $Tristate_, stages: $Map_<string, $Tristate_>);
    }
    /**
     * Values that may be interpreted as {@link $TooltipRequirements}.
     */
    export type $TooltipRequirements_ = { ctrl?: $Tristate_, alt?: $Tristate_, creative?: $Tristate_, shift?: $Tristate_, advanced?: $Tristate_, stages?: $Map_<string, $Tristate_>,  } | [ctrl?: $Tristate_, alt?: $Tristate_, creative?: $Tristate_, shift?: $Tristate_, advanced?: $Tristate_, stages?: $Map_<string, $Tristate_>, ];
    export class $ItemTooltipData extends $Record {
        requirements(): ($TooltipRequirements) | undefined;
        filter(): ($Ingredient) | undefined;
        actions(): $List<$TextAction>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemTooltipData>;
        constructor(filter: ($Ingredient_) | undefined, requirements: ($TooltipRequirements_) | undefined, actions: $List_<$TextAction>);
    }
    /**
     * Values that may be interpreted as {@link $ItemTooltipData}.
     */
    export type $ItemTooltipData_ = { actions?: $List_<$TextAction>, requirements?: ($TooltipRequirements_) | undefined, filter?: ($Ingredient_) | undefined,  } | [actions?: $List_<$TextAction>, requirements?: ($TooltipRequirements_) | undefined, filter?: ($Ingredient_) | undefined, ];
}
