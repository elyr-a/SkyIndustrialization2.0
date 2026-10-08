import { $BiFunction_, $BiFunction } from "@package/java/util/function";
import { $BlockPos } from "@package/net/minecraft/core";
import { $BlockWithItemHolder } from "@package/net/swedz/tesseract/neoforge/registry/holder";
import { $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $MachineBlockEntity, $MachineBlock, $BEP_, $BEP } from "@package/aztech/modern_industrialization/machines";
import { $MachineRecipe } from "@package/aztech/modern_industrialization/machines/recipe";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $MachineGuiConfiguration } from "@package/net/swedz/tesseract/neoforge/compat/mi/machine/builder";

declare module "@package/net/swedz/tesseract/neoforge/compat/mi/machine/builder/function" {
    export class $MachineBlockHolderModifier {
    }
    export interface $MachineBlockHolderModifier {
        modify(arg0: $BlockWithItemHolder<never, never>): void;
    }
    /**
     * Values that may be interpreted as {@link $MachineBlockHolderModifier}.
     */
    export type $MachineBlockHolderModifier_ = ((arg0: $BlockWithItemHolder<never, never>) => void);
    export class $MachineBlockFactory {
    }
    export interface $MachineBlockFactory {
        create(arg0: $BiFunction_<$BlockPos, $BlockState, $MachineBlockEntity>, arg1: $BlockBehaviour$Properties): $MachineBlock;
    }
    /**
     * Values that may be interpreted as {@link $MachineBlockFactory}.
     */
    export type $MachineBlockFactory_ = ((arg0: $BiFunction<$BlockPos, $BlockState, $MachineBlockEntity>, arg1: $BlockBehaviour$Properties) => $MachineBlock);
    export class $MachineRecipePredicate {
    }
    export interface $MachineRecipePredicate {
        test(arg0: $MachineRecipe): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MachineRecipePredicate}.
     */
    export type $MachineRecipePredicate_ = ((arg0: $MachineRecipe) => boolean);
    export class $MachineGuiConfigurator {
    }
    export interface $MachineGuiConfigurator {
        configure(arg0: $MachineGuiConfiguration): void;
    }
    /**
     * Values that may be interpreted as {@link $MachineGuiConfigurator}.
     */
    export type $MachineGuiConfigurator_ = ((arg0: $MachineGuiConfiguration) => void);
    export class $MachineBlockPropertiesModifier {
    }
    export interface $MachineBlockPropertiesModifier {
        modify(arg0: $BlockBehaviour$Properties): void;
    }
    /**
     * Values that may be interpreted as {@link $MachineBlockPropertiesModifier}.
     */
    export type $MachineBlockPropertiesModifier_ = ((arg0: $BlockBehaviour$Properties) => void);
    export class $MachineBlockRegistrators {
    }
    export interface $MachineBlockRegistrators {
        apply(arg0: $BlockEntityType_<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $MachineBlockRegistrators}.
     */
    export type $MachineBlockRegistrators_ = ((arg0: $BlockEntityType<never>) => void);
    export class $MachineBlockEntityWithGuiFactory {
    }
    export interface $MachineBlockEntityWithGuiFactory {
        create(arg0: $BEP_, arg1: $MachineGuiConfiguration): $MachineBlockEntity;
    }
    /**
     * Values that may be interpreted as {@link $MachineBlockEntityWithGuiFactory}.
     */
    export type $MachineBlockEntityWithGuiFactory_ = ((arg0: $BEP, arg1: $MachineGuiConfiguration) => $MachineBlockEntity);
    export class $MachineBlockEntityFactory {
    }
    export interface $MachineBlockEntityFactory {
        create(arg0: $BEP_): $MachineBlockEntity;
    }
    /**
     * Values that may be interpreted as {@link $MachineBlockEntityFactory}.
     */
    export type $MachineBlockEntityFactory_ = ((arg0: $BEP) => $MachineBlockEntity);
}
