import { $JsonObject_ } from "@package/com/google/gson";
import { $CommandBuildContext } from "@package/net/minecraft/commands";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ArgumentTypeInfo, $ArgumentTypeInfo$Template } from "@package/net/minecraft/commands/synchronization";
import { $DoubleArgumentType, $FloatArgumentType, $StringArgumentType, $StringArgumentType$StringType_, $LongArgumentType, $IntegerArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/net/minecraft/commands/synchronization/brigadier" {
    export class $LongArgumentInfo$Template implements $ArgumentTypeInfo$Template<$LongArgumentType> {
        type(): $ArgumentTypeInfo<$LongArgumentType, never>;
        instantiate(context: $CommandBuildContext): $LongArgumentType;
    }
    export class $StringArgumentSerializer$Template implements $ArgumentTypeInfo$Template<$StringArgumentType> {
        type(): $ArgumentTypeInfo<$StringArgumentType, never>;
        instantiate(context: $CommandBuildContext): $StringArgumentType;
        constructor(type: $StringArgumentSerializer, arg1: $StringArgumentType$StringType_);
    }
    export class $IntegerArgumentInfo$Template implements $ArgumentTypeInfo$Template<$IntegerArgumentType> {
        type(): $ArgumentTypeInfo<$IntegerArgumentType, never>;
        instantiate(context: $CommandBuildContext): $IntegerArgumentType;
    }
    export class $FloatArgumentInfo implements $ArgumentTypeInfo<$FloatArgumentType, $FloatArgumentInfo$Template> {
        unpack(argument: $FloatArgumentType): $FloatArgumentInfo$Template;
        serializeToJson(template: $FloatArgumentInfo$Template, json: $JsonObject_): void;
        serializeToNetwork(template: $FloatArgumentInfo$Template, buffer: $FriendlyByteBuf): void;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $FloatArgumentInfo$Template;
        constructor();
    }
    export class $DoubleArgumentInfo implements $ArgumentTypeInfo<$DoubleArgumentType, $DoubleArgumentInfo$Template> {
        unpack(argument: $DoubleArgumentType): $DoubleArgumentInfo$Template;
        serializeToJson(template: $DoubleArgumentInfo$Template, json: $JsonObject_): void;
        serializeToNetwork(template: $DoubleArgumentInfo$Template, buffer: $FriendlyByteBuf): void;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $DoubleArgumentInfo$Template;
        constructor();
    }
    export class $LongArgumentInfo implements $ArgumentTypeInfo<$LongArgumentType, $LongArgumentInfo$Template> {
        unpack(argument: $LongArgumentType): $LongArgumentInfo$Template;
        serializeToJson(template: $LongArgumentInfo$Template, json: $JsonObject_): void;
        serializeToNetwork(template: $LongArgumentInfo$Template, buffer: $FriendlyByteBuf): void;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $LongArgumentInfo$Template;
        constructor();
    }
    export class $IntegerArgumentInfo implements $ArgumentTypeInfo<$IntegerArgumentType, $IntegerArgumentInfo$Template> {
        unpack(argument: $IntegerArgumentType): $IntegerArgumentInfo$Template;
        serializeToJson(template: $IntegerArgumentInfo$Template, json: $JsonObject_): void;
        serializeToNetwork(template: $IntegerArgumentInfo$Template, buffer: $FriendlyByteBuf): void;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $IntegerArgumentInfo$Template;
        constructor();
    }
    export class $StringArgumentSerializer implements $ArgumentTypeInfo<$StringArgumentType, $StringArgumentSerializer$Template> {
        unpack(argument: $StringArgumentType): $StringArgumentSerializer$Template;
        serializeToJson(template: $StringArgumentSerializer$Template, json: $JsonObject_): void;
        serializeToNetwork(template: $StringArgumentSerializer$Template, buffer: $FriendlyByteBuf): void;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): $StringArgumentSerializer$Template;
        constructor();
    }
    export class $DoubleArgumentInfo$Template implements $ArgumentTypeInfo$Template<$DoubleArgumentType> {
        type(): $ArgumentTypeInfo<$DoubleArgumentType, never>;
        instantiate(context: $CommandBuildContext): $DoubleArgumentType;
    }
    export class $FloatArgumentInfo$Template implements $ArgumentTypeInfo$Template<$FloatArgumentType> {
        type(): $ArgumentTypeInfo<$FloatArgumentType, never>;
        instantiate(context: $CommandBuildContext): $FloatArgumentType;
    }
}
