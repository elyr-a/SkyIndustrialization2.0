import { $Function_, $Function } from "@package/java/util/function";
import { $DynamicOps, $Dynamic, $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $NamedEntityFix } from "@package/net/minecraft/util/datafix/fixes";
import { $Enum } from "@package/java/lang";
import { $Schema } from "@package/com/mojang/datafixers/schemas";
import { $Set_, $Set } from "@package/java/util";
import { $DataFixer, $Typed, $DSL$TypeReference_, $DSL$TypeReference } from "@package/com/mojang/datafixers";
import { $Type } from "@package/com/mojang/datafixers/types";
export * as schemas from "@package/net/minecraft/util/datafix/schemas";
export * as fixes from "@package/net/minecraft/util/datafix/fixes";

declare module "@package/net/minecraft/util/datafix" {
    export class $DataFixTypes extends $Enum<$DataFixTypes> {
        updateToCurrentVersion<T>(fixer: $DataFixer, input: $Dynamic<T>, version: number): $Dynamic<T>;
        updateToCurrentVersion(fixer: $DataFixer, tag: $CompoundTag_, version: number): $CompoundTag;
        wrapCodec<A>(codec: $Codec<A>, dataFixer: $DataFixer, dataVersion: number): $Codec<A>;
        static values(): $DataFixTypes[];
        update<T>(fixer: $DataFixer, input: $Dynamic<T>, version: number, newVersion: number): $Dynamic<T>;
        update(fixer: $DataFixer, tag: $CompoundTag_, version: number, newVersion: number): $CompoundTag;
        static valueOf(arg0: string): $DataFixTypes;
        static SAVED_DATA_MAP_DATA: $DataFixTypes;
        static WORLD_GEN_SETTINGS: $DataFixTypes;
        static SAVED_DATA_MAP_INDEX: $DataFixTypes;
        static STRUCTURE: $DataFixTypes;
        static STATS: $DataFixTypes;
        static LEVEL: $DataFixTypes;
        static OPTIONS: $DataFixTypes;
        static ADVANCEMENTS: $DataFixTypes;
        static POI_CHUNK: $DataFixTypes;
        static SAVED_DATA_COMMAND_STORAGE: $DataFixTypes;
        static PLAYER: $DataFixTypes;
        static SAVED_DATA_FORCED_CHUNKS: $DataFixTypes;
        static TYPES_FOR_LEVEL_LIST: $Set<$DSL$TypeReference>;
        static SAVED_DATA_RANDOM_SEQUENCES: $DataFixTypes;
        static SAVED_DATA_RAIDS: $DataFixTypes;
        static SAVED_DATA_SCOREBOARD: $DataFixTypes;
        static SAVED_DATA_STRUCTURE_FEATURE_INDICES: $DataFixTypes;
        static ENTITY_CHUNK: $DataFixTypes;
        static HOTBAR: $DataFixTypes;
        static CHUNK: $DataFixTypes;
    }
    /**
     * Values that may be interpreted as {@link $DataFixTypes}.
     */
    export type $DataFixTypes_ = "level" | "player" | "chunk" | "hotbar" | "options" | "structure" | "stats" | "saved_data_command_storage" | "saved_data_forced_chunks" | "saved_data_map_data" | "saved_data_map_index" | "saved_data_raids" | "saved_data_random_sequences" | "saved_data_scoreboard" | "saved_data_structure_feature_indices" | "advancements" | "poi_chunk" | "world_gen_settings" | "entity_chunk";
    export class $ComponentDataFixUtils {
        static createEmptyComponent<T>(ops: $DynamicOps<T>): $Dynamic<T>;
        static extractTranslationString(data: string): (string) | undefined;
        static createPlainTextComponent<T>(ops: $DynamicOps<T>, text: string): $Dynamic<T>;
        static wrapLiteralStringAsComponent<T>(dynamic: $Dynamic<T>): $Dynamic<T>;
        static createTranslatableComponent<T>(ops: $DynamicOps<T>, text: string): $Dynamic<T>;
        static rewriteFromLenient(dynamic: $Dynamic<never>): $Dynamic<never>;
        constructor();
    }
    export class $ExtraDataFixUtils {
        static fixBlockPos(data: $Dynamic<never>): $Dynamic<never>;
        static chainAllFilters<T>(...filters: $Function_<$Typed<never>, $Typed<never>>[]): $Function<$Typed<never>, $Typed<never>>;
        static cast<T, R>(type: $Type<R>, data: $Typed<T>): $Typed<R>;
        constructor();
    }
    export class $FixWolfHealth extends $NamedEntityFix {
        constructor(outputSchema: $Schema);
    }
    export class $PackedBitStorage {
        getBits(): number;
        getRaw(): number[];
        get(index: number): number;
        set(bits: number, size: number): void;
        constructor(bits: number, size: number);
        constructor(bits: number, size: number, data: number[]);
        get bits(): number;
        get raw(): number[];
    }
    export class $DataFixers {
        static getDataFixer(): $DataFixer;
        static optimize(references: $Set_<$DSL$TypeReference_>): $CompletableFuture<never>;
        static BLENDING_VERSION: number;
        static get dataFixer(): $DataFixer;
    }
}
