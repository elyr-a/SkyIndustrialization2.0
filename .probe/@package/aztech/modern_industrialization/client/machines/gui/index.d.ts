import { $GuiComponent$MenuFacade, $GuiComponent } from "@package/aztech/modern_industrialization/machines/gui";
import { $Object } from "@package/java/lang";
import { $GuiComponentClientAccessor } from "@package/net/swedz/mi_tweaks/mixin/client/accessor";

declare module "@package/aztech/modern_industrialization/client/machines/gui" {
    export class $GuiComponentClient<P, D> implements $GuiComponent, $GuiComponentClientAccessor {
        createRenderer(arg0: $MachineScreen): $ClientComponentRenderer;
        setupMenu(arg0: $GuiComponent$MenuFacade): void;
        getData(): $Object;
        set upMenu(value: $GuiComponent$MenuFacade);
        get data(): $Object;
    }
}
