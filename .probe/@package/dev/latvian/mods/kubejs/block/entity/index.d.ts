import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Tag_, $Tag, $ListTag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $EnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $LevelBlock, $KubeLevelEvent } from "@package/dev/latvian/mods/kubejs/level";
import { $UUID, $List, $EnumSet, $Set_, $Map } from "@package/java/util";
import { $ItemPredicate_, $ItemPredicate } from "@package/dev/latvian/mods/kubejs/item";
import { $FluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Supplier_, $Predicate_, $Supplier } from "@package/java/util/function";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos_, $Direction_, $RegistryAccess, $Registry, $NonNullList, $Direction } from "@package/net/minecraft/core";
import { $Lazy } from "@package/dev/latvian/mods/kubejs/util";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Record, $Class, $Object } from "@package/java/lang";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $Level } from "@package/net/minecraft/world/level";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/dev/latvian/mods/kubejs/block/entity" {
    export class $InventoryAttachment implements $BlockEntityAttachment {
        onRemove(level: $ServerLevel, blockEntity: $KubeBlockEntity, newState: $BlockState_): void;
        serialize(registries: $HolderLookup$Provider): $ListTag;
        deserialize(registries: $HolderLookup$Provider, tag: $Tag_): void;
        getCapability<CAP, SRC>(capability: $BlockCapability<CAP, SRC>): CAP;
        getWrappedObject(): $Object;
        serverTick(): void;
        inputFilter: $ItemPredicate;
        blockEntity: $KubeBlockEntity;
        width: number;
        inventory: $InventoryAttachment$Wrapped;
        static TYPE: $BlockEntityAttachmentType;
        height: number;
        constructor(blockEntity: $KubeBlockEntity, width: number, height: number, inputFilter: $ItemPredicate_);
        get wrappedObject(): $Object;
    }
    export class $BlockEntityAttachmentHandler {
    }
    export interface $BlockEntityAttachmentHandler {
        inventory(id: string, directions: $Set_<$Direction_>, width: number, height: number): void;
        inventory(id: string, directions: $Set_<$Direction_>, width: number, height: number, inputFilter: $ItemPredicate_): void;
        energyStorage(id: string, directions: $Set_<$Direction_>, capacity: number, maxReceive: number, maxExtract: number, autoOutput: number): void;
        fluidTank(id: string, directions: $Set_<$Direction_>, capacity: number, inputFilter: $FluidIngredient_): void;
        fluidTank(id: string, directions: $Set_<$Direction_>, capacity: number): void;
        attach(id: string, type: $ResourceLocation_, directions: $Set_<$Direction_>, args: $Object): void;
        attachCustomCapability(id: string, directions: $Set_<$Direction_>, capability: $BlockCapability<never, never>, dataFactory: $Supplier_<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityAttachmentHandler}.
     */
    export type $BlockEntityAttachmentHandler_ = (() => void);
    export class $EnergyStorageAttachment$Wrapped extends $EnergyStorage {
        removeEnergy(remove: number, simulate: boolean): number;
        setEnergyStored(energy: number): void;
        addEnergy(add: number, simulate: boolean): number;
        useEnergy(use: number, simulate: boolean): boolean;
        constructor(attachment: $EnergyStorageAttachment, capacity: number, maxReceive: number, maxExtract: number);
        set energyStored(value: number);
    }
    export class $BlockEntityInfo implements $BlockEntityAttachmentHandler {
        eventHandler(eventId: number, callback: $BlockEntityEventCallback_): void;
        clientTicking(): void;
        initialData(data: $CompoundTag_): void;
        serverTicking(): void;
        tickFrequency(frequency: number): void;
        ticking(): void;
        enableSync(): void;
        tickOffset(offset: number): void;
        rightClickFillsTank(id: string): void;
        rightClickOpensInventory(id: string): void;
        inventory(id: string, directions: $Set_<$Direction_>, width: number, height: number): void;
        inventory(id: string, directions: $Set_<$Direction_>, width: number, height: number, inputFilter: $ItemPredicate_): void;
        energyStorage(id: string, directions: $Set_<$Direction_>, capacity: number, maxReceive: number, maxExtract: number, autoOutput: number): void;
        fluidTank(id: string, directions: $Set_<$Direction_>, capacity: number, inputFilter: $FluidIngredient_): void;
        fluidTank(id: string, directions: $Set_<$Direction_>, capacity: number): void;
        attach(id: string, type: $ResourceLocation_, directions: $Set_<$Direction_>, args: $Object): void;
        attachCustomCapability(id: string, directions: $Set_<$Direction_>, capability: $BlockCapability<never, never>, dataFactory: $Supplier_<never>): void;
        constructor(blockBuilder: $BlockBuilder);
    }
    export class $KubeBlockEntity extends $BlockEntity {
        loadAdditional(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        save(): void;
        sync(): void;
        getBlock(): $LevelBlock;
        sendEvent(eventId: number, data: number): void;
        getPlacer(): $Entity;
        blockState: $BlockState;
        attachments: $Map<string, $Object>;
        data: $CompoundTag;
        static ATTACHMENTS_NBT_KEY: string;
        tick: number;
        placerId: $UUID;
        cycle: number;
        blockKey: $ResourceKey<$Block>;
        static TICKER: $BlockEntityTicker<$KubeBlockEntity>;
        x: number;
        y: number;
        z: number;
        info: $BlockEntityInfo;
        constructor(blockPos: $BlockPos_, blockState: $BlockState_, entityInfo: $BlockEntityInfo);
        get block(): $LevelBlock;
        get placer(): $Entity;
    }
    export class $BlockEntityAttachment {
    }
    export interface $BlockEntityAttachment {
        onRemove(level: $ServerLevel, blockEntity: $KubeBlockEntity, newState: $BlockState_): void;
        serverTick(): void;
        serialize(registries: $HolderLookup$Provider): $Tag;
        deserialize(registries: $HolderLookup$Provider, tag: $Tag_): void;
        getCapability<CAP, SRC>(capability: $BlockCapability<CAP, SRC>): CAP;
        getWrappedObject(): $Object;
        get wrappedObject(): $Object;
    }
    export class $BlockEntityBuilder extends $BuilderBase<$BlockEntityType<never>> {
        registryKey: $ResourceKey<$Registry<$BlockEntityType<never>>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        info: $BlockEntityInfo;
        constructor(i: $ResourceLocation_, info: $BlockEntityInfo);
    }
    export class $CustomCapabilityAttachment extends $Record implements $BlockEntityAttachment {
        data(): $Object;
        capability(): $BlockCapability<never, never>;
        getCapability<CAP, SRC>(c: $BlockCapability<CAP, SRC>): CAP;
        getWrappedObject(): $Object;
        onRemove(level: $ServerLevel, blockEntity: $KubeBlockEntity, newState: $BlockState_): void;
        serverTick(): void;
        serialize(registries: $HolderLookup$Provider): $Tag;
        deserialize(registries: $HolderLookup$Provider, tag: $Tag_): void;
        static TYPE: $BlockEntityAttachmentType;
        constructor(capability: $BlockCapability<never, never>, data: $Object);
        get wrappedObject(): $Object;
    }
    /**
     * Values that may be interpreted as {@link $CustomCapabilityAttachment}.
     */
    export type $CustomCapabilityAttachment_ = { data?: $Object, capability?: $BlockCapability<never, never>,  } | [data?: $Object, capability?: $BlockCapability<never, never>, ];
    export class $BlockEntityAttachmentInfo extends $Record {
        directions(): $EnumSet<$Direction>;
        index(): number;
        type(): $BlockEntityAttachmentType;
        factory(): $BlockEntityAttachmentFactory;
        id(): string;
        constructor(id: string, type: $BlockEntityAttachmentType_, index: number, directions: $EnumSet<$Direction_>, factory: $BlockEntityAttachmentFactory_);
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityAttachmentInfo}.
     */
    export type $BlockEntityAttachmentInfo_ = { type?: $BlockEntityAttachmentType_, directions?: $EnumSet<$Direction_>, factory?: $BlockEntityAttachmentFactory_, index?: number, id?: string,  } | [type?: $BlockEntityAttachmentType_, directions?: $EnumSet<$Direction_>, factory?: $BlockEntityAttachmentFactory_, index?: number, id?: string, ];
    export class $BlockEntityEventCallback {
    }
    export interface $BlockEntityEventCallback {
        accept(entity: $KubeBlockEntity, data: number): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityEventCallback}.
     */
    export type $BlockEntityEventCallback_ = ((entity: $KubeBlockEntity, data: number) => void);
    export class $FluidTankAttachment$Factory extends $Record implements $BlockEntityAttachmentFactory {
        inputFilter(): ($FluidIngredient) | undefined;
        create(info: $BlockEntityAttachmentInfo_, entity: $KubeBlockEntity): $BlockEntityAttachment;
        capacity(): number;
        getCapabilities(): $List<$BlockCapability<never, never>>;
        isTicking(): boolean;
        constructor(capacity: number, inputFilter: ($FluidIngredient_) | undefined);
        get capabilities(): $List<$BlockCapability<never, never>>;
        get ticking(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FluidTankAttachment$Factory}.
     */
    export type $FluidTankAttachment$Factory_ = { capacity?: number, inputFilter?: ($FluidIngredient_) | undefined,  } | [capacity?: number, inputFilter?: ($FluidIngredient_) | undefined, ];
    export class $EnergyStorageAttachment$Factory extends $Record implements $BlockEntityAttachmentFactory {
        isTicking(): boolean;
        create(info: $BlockEntityAttachmentInfo_, entity: $KubeBlockEntity): $BlockEntityAttachment;
        capacity(): number;
        getCapabilities(): $List<$BlockCapability<never, never>>;
        maxReceive(): (number) | undefined;
        maxExtract(): (number) | undefined;
        autoOutput(): (number) | undefined;
        constructor(capacity: number, maxReceive: (number) | undefined, maxExtract: (number) | undefined, autoOutput: (number) | undefined);
        get ticking(): boolean;
        get capabilities(): $List<$BlockCapability<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $EnergyStorageAttachment$Factory}.
     */
    export type $EnergyStorageAttachment$Factory_ = { autoOutput?: (number) | undefined, maxReceive?: (number) | undefined, maxExtract?: (number) | undefined, capacity?: number,  } | [autoOutput?: (number) | undefined, maxReceive?: (number) | undefined, maxExtract?: (number) | undefined, capacity?: number, ];
    export class $BlockEntityAttachmentRegistry {
    }
    export interface $BlockEntityAttachmentRegistry {
        register(id: $ResourceLocation_, factory: $Class<$BlockEntityAttachmentFactory_>): void;
        register(type: $BlockEntityAttachmentType_): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityAttachmentRegistry}.
     */
    export type $BlockEntityAttachmentRegistry_ = ((type: $BlockEntityAttachmentType) => void);
    export class $FluidTankAttachment$Wrapped extends $FluidTank {
        constructor(attachment: $FluidTankAttachment, capacity: number, inputFilter: $Predicate_<$FluidStack>);
    }
    export class $EnergyStorageAttachment implements $BlockEntityAttachment {
        serverTick(): void;
        getCapability<CAP, SRC>(capability: $BlockCapability<CAP, SRC>): CAP;
        getWrappedObject(): $Object;
        onRemove(level: $ServerLevel, blockEntity: $KubeBlockEntity, newState: $BlockState_): void;
        serialize(registries: $HolderLookup$Provider): $Tag;
        deserialize(registries: $HolderLookup$Provider, tag: $Tag_): void;
        autoOutputDirections: $Direction[];
        energyStorage: $EnergyStorageAttachment$Wrapped;
        autoOutput: number;
        static TYPE: $BlockEntityAttachmentType;
        constructor(entity: $KubeBlockEntity, capacity: number, maxReceive: number, maxExtract: number, autoOutput: number, autoOutputDirections: $Direction_[]);
        get wrappedObject(): $Object;
    }
    export class $CustomCapabilityAttachment$Factory extends $Record implements $BlockEntityAttachmentFactory {
        dataFactory(): $Supplier<never>;
        type(): $BlockCapability<never, never>;
        create(info: $BlockEntityAttachmentInfo_, entity: $KubeBlockEntity): $BlockEntityAttachment;
        getCapabilities(): $List<$BlockCapability<never, never>>;
        isTicking(): boolean;
        constructor(type: $BlockCapability<never, never>, dataFactory: $Supplier_<never>);
        get capabilities(): $List<$BlockCapability<never, never>>;
        get ticking(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CustomCapabilityAttachment$Factory}.
     */
    export type $CustomCapabilityAttachment$Factory_ = { type?: $BlockCapability<never, never>, dataFactory?: $Supplier_<never>,  } | [type?: $BlockCapability<never, never>, dataFactory?: $Supplier_<never>, ];
    export class $FluidTankAttachment implements $BlockEntityAttachment {
        serialize(registries: $HolderLookup$Provider): $Tag;
        deserialize(registries: $HolderLookup$Provider, tag: $Tag_): void;
        getCapability<CAP, SRC>(capability: $BlockCapability<CAP, SRC>): CAP;
        getWrappedObject(): $Object;
        onRemove(level: $ServerLevel, blockEntity: $KubeBlockEntity, newState: $BlockState_): void;
        serverTick(): void;
        fluidTank: $FluidTankAttachment$Wrapped;
        static TYPE: $BlockEntityAttachmentType;
        entity: $KubeBlockEntity;
        constructor(entity: $KubeBlockEntity, capacity: number, filter: $Predicate_<$FluidStack>);
        get wrappedObject(): $Object;
    }
    export class $BlockEntityTickKubeEvent implements $KubeLevelEvent {
        getTick(): number;
        getBlock(): $LevelBlock;
        getLevel(): $Level;
        getCycle(): number;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(entity: $KubeBlockEntity);
        get tick(): number;
        get block(): $LevelBlock;
        get level(): $Level;
        get cycle(): number;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
    export class $InventoryAttachment$Wrapped extends $ItemStackHandler implements $InventoryKJS {
        stacks(): $NonNullList<$ItemStack>;
        constructor(attachment: $InventoryAttachment);
    }
    export class $BlockEntityAttachmentType extends $Record {
        typeInfo(): $TypeInfo;
        id(): $ResourceLocation;
        static ALL: $Lazy<$Map<$ResourceLocation, $BlockEntityAttachmentType>>;
        constructor(id: $ResourceLocation_, type: $Class<never>);
        constructor(id: $ResourceLocation_, typeInfo: $TypeInfo_);
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityAttachmentType}.
     */
    export type $BlockEntityAttachmentType_ = { id?: $ResourceLocation_, typeInfo?: $TypeInfo_,  } | [id?: $ResourceLocation_, typeInfo?: $TypeInfo_, ];
    export class $InventoryAttachment$Factory extends $Record implements $BlockEntityAttachmentFactory {
        inputFilter(): ($ItemPredicate) | undefined;
        create(info: $BlockEntityAttachmentInfo_, entity: $KubeBlockEntity): $BlockEntityAttachment;
        height(): number;
        width(): number;
        getCapabilities(): $List<$BlockCapability<never, never>>;
        isTicking(): boolean;
        constructor(width: number, height: number, inputFilter: ($ItemPredicate_) | undefined);
        get capabilities(): $List<$BlockCapability<never, never>>;
        get ticking(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InventoryAttachment$Factory}.
     */
    export type $InventoryAttachment$Factory_ = { height?: number, width?: number, inputFilter?: ($ItemPredicate_) | undefined,  } | [height?: number, width?: number, inputFilter?: ($ItemPredicate_) | undefined, ];
    export class $BlockEntityAttachmentFactory {
    }
    export interface $BlockEntityAttachmentFactory {
        isTicking(): boolean;
        create(info: $BlockEntityAttachmentInfo_, entity: $KubeBlockEntity): $BlockEntityAttachment;
        getCapabilities(): $List<$BlockCapability<never, never>>;
        get ticking(): boolean;
        get capabilities(): $List<$BlockCapability<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityAttachmentFactory}.
     */
    export type $BlockEntityAttachmentFactory_ = ((info: $BlockEntityAttachmentInfo, entity: $KubeBlockEntity) => $BlockEntityAttachment);
    export class $BlockEntityAttachmentHolder extends $Record {
        info(): $BlockEntityAttachmentInfo;
        attachment(): $BlockEntityAttachment;
        static EMPTY_ARRAY: $BlockEntityAttachmentHolder[];
        constructor(info: $BlockEntityAttachmentInfo_, attachment: $BlockEntityAttachment);
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityAttachmentHolder}.
     */
    export type $BlockEntityAttachmentHolder_ = { attachment?: $BlockEntityAttachment, info?: $BlockEntityAttachmentInfo_,  } | [attachment?: $BlockEntityAttachment, info?: $BlockEntityAttachmentInfo_, ];
}
