import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $HolderGetter } from "@package/net/minecraft/core";
import { $Biome, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $ConfiguredWorldCarver_ } from "@package/net/minecraft/world/level/levelgen/carver";
import { $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";

declare module "@package/net/minecraft/data/worldgen/biome" {
    export class $EndBiomes {
        static theEnd(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static endBarrens(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static endHighlands(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static smallEndIslands(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static endMidlands(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        constructor();
    }
    export class $BiomeData {
        static bootstrap(context: $BootstrapContext<$Biome_>): void;
        constructor();
    }
    export class $NetherBiomes {
        static netherWastes(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static warpedForest(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static crimsonForest(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static soulSandValley(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static basaltDeltas(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        constructor();
    }
    export class $OverworldBiomes {
        static plains(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>, isBirchForest: boolean, tallBirchTrees: boolean, isFlowerForest: boolean): $Biome;
        static forest(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>, isBirchForest: boolean, tallBirchTrees: boolean, isFlowerForest: boolean): $Biome;
        static river(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>, trees: boolean): $Biome;
        static beach(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>, isCold: boolean, isStony: boolean): $Biome;
        static grove(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static ocean(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>, trees: boolean): $Biome;
        static badlands(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>, trees: boolean): $Biome;
        static savanna(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>, isCold: boolean, isStony: boolean): $Biome;
        static taiga(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>, trees: boolean): $Biome;
        static desert(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static swamp(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static jungle(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static stonyPeaks(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static darkForest(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static warmOcean(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static deepDark(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static lushCaves(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static coldOcean(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>, trees: boolean): $Biome;
        static theVoid(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static calculateSkyColor(temperature: number): number;
        static snowySlopes(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static jaggedPeaks(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static dripstoneCaves(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static mushroomFields(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static windsweptHills(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>, trees: boolean): $Biome;
        static mangroveSwamp(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static oldGrowthTaiga(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>, trees: boolean): $Biome;
        static sparseJungle(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static bambooJungle(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static frozenPeaks(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>): $Biome;
        static lukeWarmOcean(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>, trees: boolean): $Biome;
        static frozenOcean(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>, trees: boolean): $Biome;
        static meadowOrCherryGrove(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>, trees: boolean): $Biome;
        static SWAMP_SKELETON_WEIGHT: number;
        constructor();
    }
}
