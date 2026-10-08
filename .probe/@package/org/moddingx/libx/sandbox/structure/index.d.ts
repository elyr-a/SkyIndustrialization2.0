import { $StructurePoolElement, $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $List_, $List } from "@package/java/util";

declare module "@package/org/moddingx/libx/sandbox/structure" {
    export class $PoolExtension {
        required(): boolean;
        elements(): $List<$Pair<$StructurePoolElement, number>>;
        pool(): $ResourceKey<$StructureTemplatePool>;
        static CODEC: $Codec<$Holder<$PoolExtension>>;
        static DIRECT_CODEC: $Codec<$PoolExtension>;
        constructor(arg0: $ResourceKey_<$StructureTemplatePool>, arg1: boolean, arg2: $List_<$Pair<$StructurePoolElement, number>>);
        constructor(arg0: $ResourceKey_<$StructureTemplatePool>, arg1: $List_<$Pair<$StructurePoolElement, number>>);
    }
    /**
     * Values that may be interpreted as {@link $PoolExtension}.
     */
    export type $PoolExtension_ = RegistryTypes.LibxTemplatePoolExtension;
    export interface $PoolExtension extends RegistryMarked<RegistryTypes.LibxTemplatePoolExtensionTag, RegistryTypes.LibxTemplatePoolExtension> {}
}
