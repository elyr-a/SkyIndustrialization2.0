import { $MapCodec_ } from "@package/com/mojang/serialization";
import { $GuiComponentClient } from "@package/aztech/modern_industrialization/client/machines/gui";
import { $ElectricBlastFurnaceBlockEntity$Tier } from "@package/aztech/modern_industrialization/machines/blockentities/multiblocks";
import { $ViewerCategory } from "@package/aztech/modern_industrialization/client/compat/viewer/abstraction";
import { $List } from "@package/java/util";
import { $MachineRecipeType } from "@package/aztech/modern_industrialization/machines/recipe";
import { $MachineCasing } from "@package/aztech/modern_industrialization/machines/models";
import { $MIHook } from "@package/net/swedz/tesseract/neoforge/compat/mi/hook";
import { $MachineBlockEntityWithGuiFactory_, $MachineBlockEntityFactory_ } from "@package/net/swedz/tesseract/neoforge/compat/mi/machine/builder/function";
import { $BiConsumer_, $Supplier_, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GuiComponentServer$Type_ } from "@package/aztech/modern_industrialization/machines/gui";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MachineCasingModelsMIHookDatagenProvider } from "@package/net/swedz/tesseract/neoforge/datagen/mi/client";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MachineProcessCondition } from "@package/aztech/modern_industrialization/machines/recipe/condition";
import { $MIHookContext } from "@package/net/swedz/tesseract/neoforge/compat/mi/hook/context";
import { $HatchMachineBuilder, $SingleBlockCraftingMachineBuilder, $SpecialMachineBuilder } from "@package/net/swedz/tesseract/neoforge/compat/mi/machine/builder";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/swedz/tesseract/neoforge/compat/mi/hook/context/listener" {
    export class $MachineRecipeTypesMIHookContext extends $MIHookContext {
        create(arg0: string): $MachineRecipeType;
        create(arg0: string, arg1: $Function_<$ResourceLocation, $MachineRecipeType>): $MachineRecipeType;
        constructor(arg0: $MIHook);
    }
    export class $ClientGuiComponentsMIHookContext extends $MIHookContext {
        register<P, D>(arg0: $GuiComponentServer$Type_<P, D>, arg1: $BiFunction_<P, D, $GuiComponentClient<P, D>>): void;
        constructor(arg0: $MIHook);
    }
    export class $BlastFurnaceTiersMIHookContext extends $MIHookContext {
        register(arg0: $ResourceLocation_, arg1: number, arg2: string): void;
        getRegisteredTiers(): $List<$ElectricBlastFurnaceBlockEntity$Tier>;
        constructor(arg0: $MIHook);
        get registeredTiers(): $List<$ElectricBlastFurnaceBlockEntity$Tier>;
    }
    export class $MachineProcessConditionsMIHookContext extends $MIHookContext {
        register<T extends $MachineProcessCondition>(arg0: $ResourceLocation_, arg1: $MapCodec_<T>, arg2: $StreamCodec<$RegistryFriendlyByteBuf, T>): void;
        constructor(arg0: $MIHook);
    }
    export class $SingleBlockCraftingMachinesMIHookContext extends $MIHookContext {
        builder(arg0: string, arg1: string, arg2: $MachineRecipeType): $SingleBlockCraftingMachineBuilder;
        constructor(arg0: $MIHook);
    }
    export class $SingleBlockSpecialMachinesMIHookContext extends $MIHookContext {
        builder(arg0: string, arg1: string, arg2: $MachineBlockEntityFactory_): $SpecialMachineBuilder;
        builder(arg0: string, arg1: string, arg2: $MachineBlockEntityWithGuiFactory_): $SpecialMachineBuilder;
        constructor(arg0: $MIHook);
    }
    export class $MachineCasingsMIHookContext extends $MIHookContext {
        register(arg0: string, arg1: string, arg2: $BiConsumer_<$MachineCasing, $MachineCasingModelsMIHookDatagenProvider>): $MachineCasing;
        registerCubeAll(arg0: string, arg1: string, arg2: $ResourceLocation_): $MachineCasing;
        registerImitateBlock(arg0: string, arg1: $Supplier_<$Block>): $MachineCasing;
        registerCubeBottomTop(arg0: string, arg1: string, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_): $MachineCasing;
        constructor(arg0: $MIHook);
    }
    export class $HatchMIHookContext extends $MIHookContext {
        builder(arg0: string, arg1: string): $HatchMachineBuilder;
        constructor(arg0: $MIHook);
    }
    export class $MultiblockMachinesMIHookContext extends $MIHookContext {
        builder(arg0: string, arg1: string, arg2: $MachineBlockEntityFactory_): $SpecialMachineBuilder;
        builder(arg0: string, arg1: string, arg2: $MachineBlockEntityWithGuiFactory_): $SpecialMachineBuilder;
        constructor(arg0: $MIHook);
    }
    export class $ViewerSetupMIHookContext extends $MIHookContext {
        register(arg0: $ViewerCategory<never>): void;
        getRegisteredCategories(): $List<$ViewerCategory<never>>;
        constructor(arg0: $MIHook);
        get registeredCategories(): $List<$ViewerCategory<never>>;
    }
}
