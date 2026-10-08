import { $Supplier_ } from "@package/java/util/function";
import { $Marker } from "@package/org/slf4j";
import { $Throwable, $Object } from "@package/java/lang";

declare module "@package/org/slf4j/spi" {
    export class $LoggingEventBuilder {
    }
    export interface $LoggingEventBuilder {
        addMarker(arg0: $Marker): $LoggingEventBuilder;
        addKeyValue(arg0: string, arg1: $Object): $LoggingEventBuilder;
        addKeyValue(arg0: string, arg1: $Supplier_<$Object>): $LoggingEventBuilder;
        addArgument(arg0: $Supplier_<never>): $LoggingEventBuilder;
        addArgument(arg0: $Object): $LoggingEventBuilder;
        setMessage(arg0: string): $LoggingEventBuilder;
        setMessage(arg0: $Supplier_<string>): $LoggingEventBuilder;
        log(arg0: string, arg1: $Object): void;
        log(arg0: string, arg1: $Object, arg2: $Object): void;
        log(arg0: string, ...arg1: $Object[]): void;
        log(arg0: $Supplier_<string>): void;
        log(): void;
        log(arg0: string): void;
        setCause(arg0: $Throwable): $LoggingEventBuilder;
        set cause(value: $Throwable);
    }
}
