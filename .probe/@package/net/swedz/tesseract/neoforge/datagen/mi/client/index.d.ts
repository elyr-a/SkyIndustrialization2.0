import { $ExistingFileHelper, $ExistingFileHelper$ResourceType } from "@package/net/neoforged/neoforge/common/data";
import { $GatherDataEvent } from "@package/net/neoforged/neoforge/data/event";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";
import { $BlockModelBuilder, $ModelProvider } from "@package/net/neoforged/neoforge/client/model/generators";
import { $MachineCasing } from "@package/aztech/modern_industrialization/machines/models";

declare module "@package/net/swedz/tesseract/neoforge/datagen/mi/client" {
    export class $MachineCasingModelsMIHookDatagenProvider extends $ModelProvider<$BlockModelBuilder> {
        cubeBottomTop(arg0: $MachineCasing, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): void;
        cubeAll(arg0: $MachineCasing, arg1: $ResourceLocation_): void;
        imitateBlock(arg0: $MachineCasing, arg1: $Block_): void;
        static TEXTURE: $ExistingFileHelper$ResourceType;
        static ITEM_FOLDER: string;
        generatedModels: $Map<$ResourceLocation, $BlockModelBuilder>;
        existingFileHelper: $ExistingFileHelper;
        static BLOCK_FOLDER: string;
        constructor(arg0: $GatherDataEvent, arg1: string);
    }
}
