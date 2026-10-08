import { $ServerInterface } from "@package/net/minecraft/server";
import { $Runnable } from "@package/java/lang";

declare module "@package/net/minecraft/server/rcon/thread" {
    export class $GenericThread implements $Runnable {
        /**
         * Returns `true` if the Thread is running, `false` otherwise.
         */
        isRunning(): boolean;
        /**
         * Returns `true` if the Thread is running, `false` otherwise.
         */
        start(): boolean;
        stop(): void;
        get running(): boolean;
    }
    export class $QueryThreadGs4$RequestChallenge {
    }
    export class $RconThread extends $GenericThread {
        static create(serverInterface: $ServerInterface): $RconThread;
    }
    export class $RconClient extends $GenericThread {
    }
    export class $QueryThreadGs4 extends $GenericThread {
        static create(serverInterface: $ServerInterface): $QueryThreadGs4;
    }
}
