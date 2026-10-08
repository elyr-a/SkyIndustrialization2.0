import { $VersionChecker$Status } from "@package/net/neoforged/fml";

declare module "@package/net/neoforged/neoforge/internal/versions/neoforge" {
    export class $NeoForgeVersion {
        static getStatus(): $VersionChecker$Status;
        static getFmlVersion(): string;
        static getTarget(): string;
        static getVersion(): string;
        static MOD_ID: string;
        constructor();
        static get status(): $VersionChecker$Status;
        static get fmlVersion(): string;
        static get target(): string;
        static get version(): string;
    }
}
