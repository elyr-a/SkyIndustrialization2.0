import { $Object } from "@package/java/lang";
import { $Scriptable } from "@package/dev/latvian/mods/rhino";

declare module "@package/dev/latvian/mods/rhino/regexp" {
    export class $RegExp {
        compileRegExp(arg1: string, arg2: string): $Object;
        wrapRegExp(arg1: $Scriptable, arg2: $Object): $Scriptable;
        isRegExp(arg0: $Scriptable): boolean;
        js_split(arg1: $Scriptable, arg2: string, arg3: $Object[]): $Object;
        action(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[], arg4: number): $Object;
        find_split(arg1: $Scriptable, arg2: string, arg3: string, arg4: $Scriptable, arg5: number[], arg6: number[], arg7: boolean[], arg8: string[][]): number;
        static RA_REPLACE_ALL: number;
        static RA_MATCH: number;
        static RA_REPLACE: number;
        static RA_SEARCH: number;
        constructor();
    }
}
