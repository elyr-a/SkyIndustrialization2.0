import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $MachineCasing } from "@package/aztech/modern_industrialization/machines/models";

declare module "@package/aztech/modern_industrialization/api/energy" {
    export class $CableTier implements $Comparable<$CableTier> {
        static getTier(arg0: string): $CableTier;
        compareTo(arg0: $CableTier): number;
        longEnglishKey(): string;
        getMaxTransfer(): number;
        shortEnglishName(): $MutableComponent;
        longEnglishName(): $MutableComponent;
        shortEnglishKey(): string;
        static allTiers(): $List<$CableTier>;
        getEu(): number;
        static addTier(arg0: $CableTier): void;
        eu: number;
        static EV: $CableTier;
        casing: $MachineCasing;
        static SUPERCONDUCTOR: $CableTier;
        builtin: boolean;
        name: string;
        static MV: $CableTier;
        static LV: $CableTier;
        static HV: $CableTier;
        itemKey: $ResourceLocation;
        constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: $ResourceLocation_, arg5: boolean);
        get maxTransfer(): number;
    }
}
