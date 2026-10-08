import { $Function_ } from "@package/java/util/function";
import { $LoadedConfig } from "@package/net/blay09/mods/balm/api/config";
import { $ConfigPropertyBuilder, $ConfigCategory, $ConfigCategoryBuilder } from "@package/net/blay09/mods/balm/api/config/schema/builder";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $Collection } from "@package/java/util";
import { $ConfiguredProperty, $BalmConfigSchema, $ConfigSchemaBuilder } from "@package/net/blay09/mods/balm/api/config/schema";

declare module "@package/net/blay09/mods/balm/api/config/schema/impl" {
    export class $ConfigSchemaImpl implements $BalmConfigSchema, $ConfigSchemaBuilder {
        findProperty(arg0: string, arg1: string): $ConfiguredProperty<never>;
        rootProperties(): $Collection<$ConfiguredProperty<never>>;
        findRootProperty(arg0: string): $ConfiguredProperty<never>;
        addAndReturn<T extends $ConfiguredProperty<never>>(arg0: T): T;
        property(arg0: string): $ConfigPropertyBuilder;
        defaults(): $LoadedConfig;
        category(arg0: string): $ConfigCategoryBuilder;
        identifier(): $ResourceLocation;
        categories(): $Collection<$ConfigCategory>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $ConfigCategoryImpl implements $ConfigCategoryBuilder, $ConfigCategory {
        parentSchema(): $BalmConfigSchema;
        via<T>(arg0: $Function_<$ConfigCategoryBuilder, T>): T;
        property(arg0: string): $ConfigPropertyBuilder;
        name(): string;
        properties(): $List<$ConfiguredProperty<never>>;
        comment(): string;
        comment(arg0: string): $ConfigCategoryImpl;
        addProperty<T extends $ConfiguredProperty<never>>(arg0: T): void;
        constructor(arg0: $ConfigSchemaImpl, arg1: string);
    }
}
