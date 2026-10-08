import { $Duration_ } from "@package/java/time";
import { $GameType_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $TelemetryProperty_, $TelemetryPropertyMap$Builder, $TelemetryEventSender_ } from "@package/net/minecraft/client/telemetry";
import { $Record } from "@package/java/lang";
import { $Stopwatch } from "@package/com/google/common/base";

declare module "@package/net/minecraft/client/telemetry/events" {
    export class $GameLoadTimesEvent {
        send(sender: $TelemetryEventSender_): void;
        setBootstrapTime(bootstrapTime: number): void;
        endStep(measurement: $TelemetryProperty_<$GameLoadTimesEvent$Measurement_>): void;
        beginStep(measurement: $TelemetryProperty_<$GameLoadTimesEvent$Measurement_>): void;
        beginStep(measurement: $TelemetryProperty_<$GameLoadTimesEvent$Measurement_>, stopwatch: $Stopwatch): void;
        static INSTANCE: $GameLoadTimesEvent;
        set bootstrapTime(value: number);
    }
    export class $AggregatedTelemetryEvent {
        takeSample(): void;
        start(): void;
        stop(): void;
        tick(sender: $TelemetryEventSender_): void;
        shouldSentEvent(): boolean;
        shouldTakeSample(): boolean;
        sendEvent(sender: $TelemetryEventSender_): void;
        constructor();
    }
    export class $GameLoadTimesEvent$Measurement extends $Record {
        millis(): number;
        static CODEC: $Codec<$GameLoadTimesEvent$Measurement>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $GameLoadTimesEvent$Measurement}.
     */
    export type $GameLoadTimesEvent$Measurement_ = { millis?: number,  } | [millis?: number, ];
    export class $WorldLoadTimesEvent {
        send(sender: $TelemetryEventSender_): void;
        constructor(newWorld: boolean, wordLoadDuration: $Duration_ | null);
    }
    export class $PerformanceMetricsEvent extends $AggregatedTelemetryEvent {
        constructor();
    }
    export class $WorldUnloadEvent {
        send(sender: $TelemetryEventSender_): void;
        onPlayerInfoReceived(): void;
        setTime(time: number): void;
        constructor();
        set time(value: number);
    }
    export class $WorldLoadEvent {
        send(sender: $TelemetryEventSender_): boolean;
        setGameMode(gameMode: $GameType_, isHardcore: boolean): void;
        addProperties(builder: $TelemetryPropertyMap$Builder): void;
        setServerBrand(minigameName: string): void;
        constructor(minigameName: string | null);
        set serverBrand(value: string);
    }
}
