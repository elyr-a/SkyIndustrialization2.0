import { $Function_, $ToLongFunction_, $ToIntFunction_, $ToDoubleFunction_ } from "@package/java/util/function";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ObjectSelectionList$Entry, $ObjectSelectionList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Comparator, $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $StatsCounter } from "@package/net/minecraft/stats";

declare module "@package/net/minecraft/client/gui/screens/achievement" {
    export class $StatsScreen$ItemStatisticsList$ItemRow extends $ObjectSelectionList$Entry<$StatsScreen$ItemStatisticsList$ItemRow> {
    }
    export class $StatsScreen extends $Screen {
        setActiveList(activeList: $ObjectSelectionList<never> | null): void;
        initButtons(): void;
        onStatsUpdated(): void;
        initLists(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        constructor(lastScreen: $Screen, stats: $StatsCounter);
        set activeList(value: $ObjectSelectionList<never> | null);
    }
    export class $StatsScreen$ItemStatisticsList extends $ObjectSelectionList<$StatsScreen$ItemStatisticsList$ItemRow> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        x: number;
        y: number;
        active: boolean;
        hovered: $StatsScreen$ItemStatisticsList$ItemRow;
    }
    export class $StatsScreen$GeneralStatisticsList extends $ObjectSelectionList<$StatsScreen$GeneralStatisticsList$Entry> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        x: number;
        y: number;
        active: boolean;
        hovered: $StatsScreen$GeneralStatisticsList$Entry;
    }
    export class $StatsScreen$MobsStatisticsList$MobRow extends $ObjectSelectionList$Entry<$StatsScreen$MobsStatisticsList$MobRow> {
    }
    export class $StatsScreen$ItemStatisticsList$ItemRowComparator implements $Comparator<$StatsScreen$ItemStatisticsList$ItemRow> {
        reversed(): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparing<U>(arg0: $Function_<$StatsScreen$ItemStatisticsList$ItemRow, U>, arg1: $Comparator<U>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparing(arg0: $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparing<U extends $Comparable<U>>(arg0: $Function_<$StatsScreen$ItemStatisticsList$ItemRow, U>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparingInt(arg0: $ToIntFunction_<$StatsScreen$ItemStatisticsList$ItemRow>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparingLong(arg0: $ToLongFunction_<$StatsScreen$ItemStatisticsList$ItemRow>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
        thenComparingDouble(arg0: $ToDoubleFunction_<$StatsScreen$ItemStatisticsList$ItemRow>): $Comparator<$StatsScreen$ItemStatisticsList$ItemRow>;
    }
    export class $StatsScreen$MobsStatisticsList extends $ObjectSelectionList<$StatsScreen$MobsStatisticsList$MobRow> {
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        x: number;
        y: number;
        active: boolean;
        hovered: $StatsScreen$MobsStatisticsList$MobRow;
    }
    export class $StatsScreen$GeneralStatisticsList$Entry extends $ObjectSelectionList$Entry<$StatsScreen$GeneralStatisticsList$Entry> {
    }
}
