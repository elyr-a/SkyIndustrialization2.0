import { $DeferredItem, $DeferredRegister$Items, $DeferredBlock, $DeferredRegister$Blocks } from "@package/net/neoforged/neoforge/registries";
import { $Function_ } from "@package/java/util/function";
import { $Item, $Item$Properties } from "@package/net/minecraft/world/item";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/net/swedz/tesseract/neoforge/registry/registerable" {
    export class $ItemRegisterableWrapper<Type extends $Item> extends $RegisterableWrapper<Type, $DeferredItem<Type>, $DeferredRegister$Items, $Item$Properties> {
        constructor(arg0: $DeferredRegister$Items, arg1: $Item$Properties, arg2: $Function_<$Item$Properties, Type>);
    }
    export class $BlockRegisterableWrapper<Type extends $Block> extends $RegisterableWrapper<Type, $DeferredBlock<Type>, $DeferredRegister$Blocks, $BlockBehaviour$Properties> {
        constructor(arg0: $DeferredRegister$Blocks, arg1: $BlockBehaviour$Properties, arg2: $Function_<$BlockBehaviour$Properties, Type>);
    }
}
