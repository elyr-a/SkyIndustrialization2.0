import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $KubeRecipe } from "@package/dev/latvian/mods/kubejs/recipe";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CookingBookCategory_, $Ingredient_, $CraftingBookCategory_ } from "@package/net/minecraft/world/item/crafting";
import { $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $MachineProcessCondition } from "@package/aztech/modern_industrialization/machines/recipe/condition";
import { $MachineKubeRecipe } from "@package/aztech/modern_industrialization/compat/kubejs/recipe";
import { $Map_, $List_ } from "@package/java/util";
import { $SizedIngredient_ } from "@package/net/neoforged/neoforge/common/crafting";

declare module "@side-only/server/events/recipes" {
    export class ModernIndustrialization$ChemicalReactor extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$Assembler extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class DocumentedRecipes {
        minecraft: {
            smithing_trim(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTrim;
            smelting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smelting;
            smoking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smoking;
            blasting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Blasting;
            stonecutting(result: $ItemStack_, ingredient: $Ingredient_): Minecraft$Stonecutting;
            campfire_cooking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$CampfireCooking;
            crafting_shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Minecraft$CraftingShaped;
            smithing_transform(result: $ItemStack_, template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTransform;
            crafting_shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Minecraft$CraftingShapeless;
        }
        kubejs: {
            shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Kubejs$Shapeless;
            shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Kubejs$Shaped;
        }
        exdeorum: {
            sieve(result: $ItemStack_, ingredient: $Ingredient_): Exdeorum$Sieve;
        }
        modern_industrialization: {
            mixer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Mixer;
            wiremill(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Wiremill;
            implosion_compressor(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$ImplosionCompressor;
            unpacker(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Unpacker;
            assembler(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Assembler;
            chemical_reactor(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$ChemicalReactor;
            polarizer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Polarizer;
            blast_furnace(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$BlastFurnace;
            hand_crusher(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$HandCrusher;
            crucible(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Crucible;
            oil_drilling_rig(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$OilDrillingRig;
            coke_oven(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$CokeOven;
            vacuum_freezer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$VacuumFreezer;
            compressor(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Compressor;
            electrolyzer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Electrolyzer;
            fusion_reactor(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$FusionReactor;
            packer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Packer;
            distillery(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Distillery;
            cobble_generator(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$CobbleGenerator;
            distillation_tower(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$DistillationTower;
            cutting_machine(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$CuttingMachine;
            furnace(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Furnace;
            quarry(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Quarry;
            centrifuge(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Centrifuge;
            pressurizer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Pressurizer;
            macerator(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Macerator;
            forge_hammer(result: $ItemStack_, ingredient: $Ingredient_, damage?: number, count?: number): ModernIndustrialization$ForgeHammer;
            leaf_press(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$LeafPress;
            sieve(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Sieve;
            heat_exchanger(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$HeatExchanger;
        }
    }
    export class ModernIndustrialization$CuttingMachine extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$LeafPress extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Minecraft$Stonecutting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
    }
    export class ModernIndustrialization$CokeOven extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Minecraft$CampfireCooking extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class ModernIndustrialization$DistillationTower extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$Mixer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Minecraft$Smelting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class ModernIndustrialization$ImplosionCompressor extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$Unpacker extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Kubejs$Shaped extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class ModernIndustrialization$Pressurizer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$CobbleGenerator extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$Furnace extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Minecraft$CraftingShapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class ModernIndustrialization$BlastFurnace extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$HandCrusher extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$Quarry extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$VacuumFreezer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$Wiremill extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Minecraft$Smoking extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Minecraft$Blasting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Exdeorum$Sieve extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
    }
    export class ModernIndustrialization$Polarizer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Minecraft$SmithingTransform extends $KubeRecipe {
        result(result: $ItemStack_): this;
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class ModernIndustrialization$Packer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$Sieve extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$FusionReactor extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Kubejs$Shapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class Minecraft$SmithingTrim extends $KubeRecipe {
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class ModernIndustrialization$Distillery extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$OilDrillingRig extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$Macerator extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$ForgeHammer extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        damage(damage: number): this;
        count(count: number): this;
    }
    export class ModernIndustrialization$Compressor extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$Centrifuge extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$Electrolyzer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$HeatExchanger extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Minecraft$CraftingShaped extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class ModernIndustrialization$Crucible extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
}
