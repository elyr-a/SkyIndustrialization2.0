import { $Level_ } from "@package/net/minecraft/world/level";
import { $FluidVariant } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/fluid";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ConfigurableStackAccessor } from "@package/net/swedz/tesseract/neoforge/compat/mi/mixin/accessor";
import { $TransactionContext_, $SnapshotJournal } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/transaction";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Spliterator, $Iterator, $List, $Map_, $List_, $ArrayList } from "@package/java/util";
import { $ResourceAmount_, $ResourceAmount } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/storage/base";
import { $Simulation_ } from "@package/aztech/modern_industrialization/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $TransferVariant, $StorageView, $Storage } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/storage";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $FluidAccess, $ItemAccess } from "@package/aztech/modern_industrialization/api/machine/component";
import { $MachineComponent } from "@package/aztech/modern_industrialization/machines";
import { $Object, $Iterable } from "@package/java/lang";
import { $ItemVariant } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/item";

declare module "@package/aztech/modern_industrialization/inventory" {
    export class $ConfigurableFluidStack extends $AbstractConfigurableStack<$Fluid, $FluidVariant> implements $FluidAccess {
        setCapacity(arg0: number): void;
        static lockedInputSlot(arg0: number, arg1: $Fluid_): $ConfigurableFluidStack;
        static standardInputSlot(arg0: number): $ConfigurableFluidStack;
        static standardOutputSlot(arg0: number): $ConfigurableFluidStack;
        getVariant(): $FluidVariant;
        static copyList(arg0: $List_<$ConfigurableFluidStack>): $ArrayList<$ConfigurableFluidStack>;
        getRemainingSpace(): number;
        static lockedOutputSlot(arg0: number, arg1: $Fluid_): $ConfigurableFluidStack;
        static standardIOSlot(arg0: number, arg1: boolean): $ConfigurableFluidStack;
        getTotalCapacityFor(arg0: $Fluid_): number;
        toStack(): $FluidStack;
        constructor(arg0: number);
        constructor(arg0: $CompoundTag_, arg1: $HolderLookup$Provider);
        constructor(arg0: $ConfigurableFluidStack);
        set capacity(value: number);
        get variant(): $FluidVariant;
        get remainingSpace(): number;
    }
    export class $SlotPositions$Builder {
        addSlot(arg0: number, arg1: number): $SlotPositions$Builder;
        addSlots(arg0: number, arg1: number, arg2: number, arg3: number): $SlotPositions$Builder;
        buildWithConsumer(arg0: $Consumer_<$SlotPositions$Builder>): $SlotPositions;
        build(): $SlotPositions;
        constructor();
    }
    export class $MIStorage<T, K extends $TransferVariant<T>, S extends $AbstractConfigurableStack<T, K>> implements $Storage<K> {
        extract(arg0: K, arg1: number, arg2: $TransactionContext_, arg3: $Predicate_<S>): number;
        extract(arg0: K, arg1: number, arg2: $TransactionContext_): number;
        insert(arg0: K, arg1: number, arg2: $TransactionContext_, arg3: $Predicate_<S>, arg4: boolean): number;
        insert(arg0: K, arg1: number, arg2: $TransactionContext_): number;
        iterator(): $Iterator<$StorageView<K>>;
        extractAllSlot(arg0: K, arg1: number, arg2: $TransactionContext_): number;
        extractAllSlot(arg0: K, arg1: number, arg2: $TransactionContext_, arg3: $Predicate_<S>): number;
        insertAllSlot(arg0: K, arg1: number, arg2: $TransactionContext_): number;
        nonEmptyIterator(): $Iterator<$StorageView<K>>;
        supportsExtraction(): boolean;
        supportsInsertion(): boolean;
        nonEmptyViews(): $Iterable<$StorageView<K>>;
        getVersion(): number;
        spliterator(): $Spliterator<K>;
        forEach(arg0: $Consumer_<K>): void;
        [Symbol.iterator](): Iterator<$StorageView<K>>
        get version(): number;
    }
    export class $MIFluidStorage extends $MIStorage<$Fluid, $FluidVariant, $ConfigurableFluidStack> {
        fluidHandler: $IFluidHandler;
        constructor(arg0: $List_<$ConfigurableFluidStack>);
    }
    export class $ConfigurableSlot {
    }
    export interface $ConfigurableSlot {
        getConfig(): $SlotConfig;
        get config(): $SlotConfig;
    }
    /**
     * Values that may be interpreted as {@link $ConfigurableSlot}.
     */
    export type $ConfigurableSlot_ = (() => $SlotConfig);
    export class $ChangeListener {
        static notify(arg0: $Map_<$ChangeListener, $Object>): void;
        listenAll(arg0: $List_<$AbstractConfigurableStack<never, never>>, arg1: $Object): void;
        constructor();
    }
    export class $MIItemStorage extends $MIStorage<$Item, $ItemVariant, $ConfigurableItemStack> {
        itemHandler: $IItemHandler;
        constructor(arg0: $List_<$ConfigurableItemStack>);
    }
    export class $ConfigurableItemStack extends $AbstractConfigurableStack<$Item, $ItemVariant> implements $ItemAccess {
        toStack(): $ItemStack;
        static lockedInputSlot(arg0: $Item_): $ConfigurableItemStack;
        static standardInputSlot(): $ConfigurableItemStack;
        static standardOutputSlot(): $ConfigurableItemStack;
        getVariant(): $ItemVariant;
        isValid(arg0: $ItemStack_): boolean;
        setKey(arg0: $ItemVariant): void;
        static copyList(arg0: $List_<$ConfigurableItemStack>): $ArrayList<$ConfigurableItemStack>;
        getAdjustedCapacity(): number;
        static standardIOSlot(arg0: boolean): $ConfigurableItemStack;
        getTotalCapacityFor(arg0: $Item_): number;
        getRemainingCapacityFor(arg0: $ItemVariant): number;
        adjustCapacity(arg0: boolean, arg1: boolean): void;
        constructor();
        constructor(arg0: $CompoundTag_, arg1: $HolderLookup$Provider);
        constructor(arg0: $ConfigurableItemStack);
        get variant(): $ItemVariant;
        set key(value: $ItemVariant);
        get adjustedCapacity(): number;
    }
    export class $SlotPositions {
        getX(arg0: number): number;
        toBuilder(): $SlotPositions$Builder;
        size(): number;
        static empty(): $SlotPositions;
        write(arg0: $FriendlyByteBuf): void;
        static read(arg0: $FriendlyByteBuf): $SlotPositions;
        getY(arg0: number): number;
        sublist(arg0: number, arg1: number): $SlotPositions;
    }
    export class $SlotConfig {
        static readSlotList<T extends $ConfigurableSlot>(arg0: $List_<T>, arg1: $List_<T>): void;
    }
    export class $AbstractConfigurableStack<T, K extends $TransferVariant<T>> extends $SnapshotJournal<$ResourceAmount<K>> implements $StorageView<K>, $ConfigurableSlot, $ConfigurableStackAccessor<any> {
        removeListener(arg0: $ChangeListener): void;
        addListener(arg0: $ChangeListener, arg1: $Object): void;
        getConfig(): $SlotConfig;
        toNbt(arg0: $HolderLookup$Provider): $CompoundTag;
        setAmount(arg0: number): void;
        isResourceBlank(): boolean;
        togglePlayerLock(): void;
        togglePlayerLock(arg0: K): void;
        extract(arg0: K, arg1: number, arg2: $TransactionContext_): number;
        isEmpty(): boolean;
        getResource(): K;
        empty(): void;
        increment(arg0: number): void;
        decrement(arg0: number): void;
        getAmount(): number;
        setKey(arg0: K): void;
        playerLock(arg0: K, arg1: $Simulation_): boolean;
        enableMachineLock(arg0: K): void;
        revertToSnapshot(arg0: $ResourceAmount_<K>): void;
        extractDirect(arg0: K, arg1: number, arg2: $TransactionContext_): number;
        canPlayerLock(): boolean;
        createSnapshot(): $ResourceAmount<K>;
        canPlayerInsert(): boolean;
        disableMachineLock(): void;
        canPipesInsert(): boolean;
        canPipesExtract(): boolean;
        isResourceAllowedByLock(arg0: K): boolean;
        isResourceAllowedByLock(arg0: K): boolean;
        getTotalCapacityFor(arg0: K): number;
        static playerLockNoOverride<T, K extends $TransferVariant<T>>(arg0: T, arg1: number, arg2: $List_<$AbstractConfigurableStack<T, K>>): void;
        isPlayerLocked(): boolean;
        isMachineLocked(): boolean;
        getLockedInstance(): K;
        canPlayerExtract(): boolean;
        isLockedTo(arg0: K): boolean;
        getUnderlyingView(): $StorageView<K>;
        setPipesExtract(arg0: boolean): void;
        setLockedInstance(arg0: K): void;
        setPlayerExtract(arg0: boolean): void;
        setPlayerLocked(arg0: boolean): void;
        setMachineLocked(arg0: boolean): void;
        setPlayerLockable(arg0: boolean): void;
        setPlayerInsert(arg0: boolean): void;
        setPipesInsert(arg0: boolean): void;
        constructor();
        constructor(arg0: $CompoundTag_, arg1: $HolderLookup$Provider);
        constructor(arg0: $AbstractConfigurableStack<K, K>);
        get config(): $SlotConfig;
        get resourceBlank(): boolean;
        get resource(): K;
        set key(value: K);
        get underlyingView(): $StorageView<K>;
        set pipesExtract(value: boolean);
        set playerExtract(value: boolean);
        set playerLockable(value: boolean);
        set playerInsert(value: boolean);
        set pipesInsert(value: boolean);
    }
    export class $MIInventory implements $MachineComponent {
        addListener(arg0: $ChangeListener, arg1: $Object): void;
        getItemStacks(): $List<$ConfigurableItemStack>;
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        autoExtractItems(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): void;
        autoExtractFluids(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): void;
        getFluidStacks(): $List<$ConfigurableFluidStack>;
        autoInsertFluids(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): void;
        autoInsertItems(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): void;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        fluidStorage: $MIFluidStorage;
        itemStorage: $MIItemStorage;
        fluidPositions: $SlotPositions;
        itemPositions: $SlotPositions;
        static EMPTY: $MIInventory;
        constructor(arg0: $List_<$ConfigurableItemStack>, arg1: $List_<$ConfigurableFluidStack>, arg2: $SlotPositions, arg3: $SlotPositions);
        get itemStacks(): $List<$ConfigurableItemStack>;
        get fluidStacks(): $List<$ConfigurableFluidStack>;
    }
}
