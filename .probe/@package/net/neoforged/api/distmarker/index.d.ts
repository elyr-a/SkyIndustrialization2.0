import { $Enum } from "@package/java/lang";

declare module "@package/net/neoforged/api/distmarker" {
    export class $Dist extends $Enum<$Dist> {
        isDedicatedServer(): boolean;
        static values(): $Dist[];
        static valueOf(arg0: string): $Dist;
        isClient(): boolean;
        static DEDICATED_SERVER: $Dist;
        static CLIENT: $Dist;
        get dedicatedServer(): boolean;
        get client(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Dist}.
     */
    export type $Dist_ = "client" | "dedicated_server";
}
