import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/aztech/modern_industrialization/machines/gui" {
    export class $GuiComponentServer$Type<P, D> extends $Record {
        dataCodec(): $StreamCodec<$RegistryFriendlyByteBuf, D>;
        paramsCodec(): $StreamCodec<$RegistryFriendlyByteBuf, P>;
        id(): $ResourceLocation;
        constructor(id: $ResourceLocation_, paramsCodec: $StreamCodec<$RegistryFriendlyByteBuf, P>, dataCodec: $StreamCodec<$RegistryFriendlyByteBuf, D>);
    }
    /**
     * Values that may be interpreted as {@link $GuiComponentServer$Type}.
     */
    export type $GuiComponentServer$Type_<P, D> = { dataCodec?: $StreamCodec<$RegistryFriendlyByteBuf, any>, paramsCodec?: $StreamCodec<$RegistryFriendlyByteBuf, any>, id?: $ResourceLocation_,  } | [dataCodec?: $StreamCodec<$RegistryFriendlyByteBuf, any>, paramsCodec?: $StreamCodec<$RegistryFriendlyByteBuf, any>, id?: $ResourceLocation_, ];
    export class $GuiComponentServer<P, D> {
    }
    export interface $GuiComponentServer<P, D> extends $GuiComponent {
        extractData(): D;
        getType(): $GuiComponentServer$Type<P, D>;
        getParams(): P;
        get type(): $GuiComponentServer$Type<P, D>;
        get params(): P;
    }
    export class $MachineGuiParameters {
        write(arg0: $FriendlyByteBuf): void;
        static read(arg0: $FriendlyByteBuf): $MachineGuiParameters;
        blockId: $ResourceLocation;
        playerInventoryX: number;
        playerInventoryY: number;
        lockButton: boolean;
        backgroundHeight: number;
        backgroundWidth: number;
    }
    export class $GuiComponent {
    }
    export interface $GuiComponent {
        setupMenu(arg0: $GuiComponent$MenuFacade): void;
        set upMenu(value: $GuiComponent$MenuFacade);
    }
}
