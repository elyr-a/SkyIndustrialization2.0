import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $FeatureConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Feature_ } from "@package/net/minecraft/world/level/levelgen/feature";
import { $Set_, $Collection_, $List } from "@package/java/util";
import { $BlockEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/net/swedz/tesseract/neoforge/event/treegrowth" {
    export class $TrackBlockChangesExtension {
    }
    export interface $TrackBlockChangesExtension {
        stopTrackingBlockChanges(): void;
        startTrackingBlockChanges(arg0: $Set_<$BlockPos_>): void;
    }
    export class $TreeGrowthEvent extends $BlockEvent {
        static shouldPostEventFor(arg0: $Feature_<any>, arg1: $FeatureConfiguration): boolean;
        getPositions(): $List<$BlockPos>;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Collection_<$BlockPos_>);
        get positions(): $List<$BlockPos>;
    }
    export class $TreeGrowthFeatureTestCache {
    }
    export interface $TreeGrowthFeatureTestCache {
        needsToCalculateShouldPostTreeGrowthEvent(): boolean;
        shouldPostTreeGrowthEvent(): boolean;
        setShouldPostTreeGrowthEvent(arg0: boolean): void;
    }
}
