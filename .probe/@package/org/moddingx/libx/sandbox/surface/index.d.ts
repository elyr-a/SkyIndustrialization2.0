import { $Holder_, $Holder, $Registry } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Biome, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $Record } from "@package/java/lang";
import { $Set_ } from "@package/java/util";
import { $NoiseGeneratorSettings_, $SurfaceRules$RuleSource } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/org/moddingx/libx/sandbox/surface" {
    export class $SurfaceRuleSet extends $Record {
        beforeBiomes(): $SurfaceRules$RuleSource;
        afterBiomes(): $SurfaceRules$RuleSource;
        build(arg0: $Registry<$Biome_>, arg1: $Registry<$BiomeSurface_>, arg2: $Set_<$Holder_<$Biome>>, arg3: $NoiseGeneratorSettings_): $SurfaceRules$RuleSource;
        useDefaultNoiseSurface(): boolean;
        defaultBiomeSurface(): $SurfaceRules$RuleSource;
        static CODEC: $Codec<$Holder<$SurfaceRuleSet>>;
        static DIRECT_CODEC: $Codec<$SurfaceRuleSet>;
        constructor(useDefaultNoiseSurface: boolean, beforeBiomes: $SurfaceRules$RuleSource, afterBiomes: $SurfaceRules$RuleSource, defaultBiomeSurface: $SurfaceRules$RuleSource);
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRuleSet}.
     */
    export type $SurfaceRuleSet_ = RegistryTypes.LibxSurfaceRuleSet | { afterBiomes?: $SurfaceRules$RuleSource, defaultBiomeSurface?: $SurfaceRules$RuleSource, useDefaultNoiseSurface?: boolean, beforeBiomes?: $SurfaceRules$RuleSource,  } | [afterBiomes?: $SurfaceRules$RuleSource, defaultBiomeSurface?: $SurfaceRules$RuleSource, useDefaultNoiseSurface?: boolean, beforeBiomes?: $SurfaceRules$RuleSource, ];
    export interface $BiomeSurface extends RegistryMarked<RegistryTypes.LibxBiomeSurfaceTag, RegistryTypes.LibxBiomeSurface> {}
    export class $BiomeSurface extends $Record {
        rule(): $SurfaceRules$RuleSource;
        static CODEC: $Codec<$Holder<$BiomeSurface>>;
        static DIRECT_CODEC: $Codec<$BiomeSurface>;
        constructor(rule: $SurfaceRules$RuleSource);
    }
    /**
     * Values that may be interpreted as {@link $BiomeSurface}.
     */
    export type $BiomeSurface_ = RegistryTypes.LibxBiomeSurface | { rule?: $SurfaceRules$RuleSource,  } | [rule?: $SurfaceRules$RuleSource, ];
    export interface $SurfaceRuleSet extends RegistryMarked<RegistryTypes.LibxSurfaceRuleSetTag, RegistryTypes.LibxSurfaceRuleSet> {}
}
