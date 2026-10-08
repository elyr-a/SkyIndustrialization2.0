import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Climate$ParameterList, $Climate$ParameterPoint_, $Climate$ParameterPoint, $Biome } from "@package/net/minecraft/world/level/biome";
import { $Record } from "@package/java/lang";
import { $DensityFunction_, $DensityFunction } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/org/moddingx/libx/sandbox/generator" {
    export interface $BiomeLayer extends RegistryMarked<RegistryTypes.LibxBiomeLayerTag, RegistryTypes.LibxBiomeLayer> {}
    export class $BiomeLayer extends $Record {
        biomes(): $Climate$ParameterList<$Holder<$Biome>>;
        density(): $DensityFunction;
        range(): $Climate$ParameterPoint;
        static FULL_RANGE: $Climate$ParameterPoint;
        static CODEC: $Codec<$Holder<$BiomeLayer>>;
        static DIRECT_CODEC: $Codec<$BiomeLayer>;
        constructor(arg0: $DensityFunction_, arg1: $Climate$ParameterList<$Holder_<$Biome>>);
        constructor(range: $Climate$ParameterPoint_, density: $DensityFunction_, biomes: $Climate$ParameterList<$Holder_<$Biome>>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeLayer}.
     */
    export type $BiomeLayer_ = RegistryTypes.LibxBiomeLayer | { biomes?: $Climate$ParameterList<$Holder_<$Biome>>, range?: $Climate$ParameterPoint_, density?: $DensityFunction_,  } | [biomes?: $Climate$ParameterList<$Holder_<$Biome>>, range?: $Climate$ParameterPoint_, density?: $DensityFunction_, ];
}
