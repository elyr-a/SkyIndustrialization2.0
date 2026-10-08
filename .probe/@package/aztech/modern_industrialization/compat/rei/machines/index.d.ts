import { $Enum } from "@package/java/lang";

declare module "@package/aztech/modern_industrialization/compat/rei/machines" {
    export class $SteamMode extends $Enum<$SteamMode> {
        static values(): $SteamMode[];
        static valueOf(arg0: string): $SteamMode;
        static NEITHER: $SteamMode;
        static STEAM_ONLY: $SteamMode;
        static ELECTRIC_ONLY: $SteamMode;
        electric: boolean;
        steam: boolean;
        static BOTH: $SteamMode;
    }
    /**
     * Values that may be interpreted as {@link $SteamMode}.
     */
    export type $SteamMode_ = "steam_only" | "electric_only" | "both" | "neither";
}
