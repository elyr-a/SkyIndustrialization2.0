import { $Annotation } from "@package/java/lang/annotation";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $CommandDispatcher, $StringReader } from "@package/com/mojang/brigadier";
import { $EntityType_, $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Set_, $List, $Collection_, $Collection } from "@package/java/util";
import { $Supplier_, $Consumer_, $Predicate_, $Consumer, $IntPredicate_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Vec3i, $Holder_, $Direction_ } from "@package/net/minecraft/core";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Method } from "@package/java/lang/reflect";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $RuntimeException, $Exception, $Comparable, $Thread, $Throwable, $Record, $Class, $Runnable_ } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $File_ } from "@package/java/io";
import { $GameType_, $LevelSettings } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $SampleLogger } from "@package/net/minecraft/util/debugchart";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block, $Rotation_, $Block_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity, $StructureBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/net/minecraft/gametest/framework" {
    export class $TestFunctionArgument implements $ArgumentType<$TestFunction> {
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getTestFunction(context: $CommandContext<$CommandSourceStack>, argument: string): $TestFunction;
        static suggestTestFunction<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static testFunctionArgument(): $TestFunctionArgument;
        parse(reader: $StringReader): $TestFunction;
        parse<S>(arg0: $StringReader, arg1: S): $TestFunction;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $GameTestGenerator implements $Annotation {
    }
    export class $GameTestRunner$Builder {
        build(): $GameTestRunner;
        haltOnError(haltOnError: boolean): $GameTestRunner$Builder;
        static fromBatches(batches: $Collection_<$GameTestBatch_>, level: $ServerLevel): $GameTestRunner$Builder;
        static fromInfo(batches: $Collection_<$GameTestInfo>, level: $ServerLevel): $GameTestRunner$Builder;
        batcher(batcher: $GameTestRunner$GameTestBatcher_): $GameTestRunner$Builder;
        newStructureSpawner(newStructureSpawner: $GameTestRunner$StructureSpawner_): $GameTestRunner$Builder;
        existingStructureSpawner(existingStructureSpawner: $StructureGridSpawner): $GameTestRunner$Builder;
    }
    export class $StructureGridSpawner implements $GameTestRunner$StructureSpawner {
        spawnStructure(gameTestInfo: $GameTestInfo): ($GameTestInfo) | undefined;
        onBatchStart(level: $ServerLevel): void;
        constructor(northTestNorthWestCorner: $BlockPos_, testsPerRow: number, clearOnBatch: boolean);
    }
    /**
     * Annotate a method with this annotation in order to have it run after the specified `#batch()`.
     */
    export class $AfterBatch implements $Annotation {
        batch(): string;
    }
    export class $GlobalTestReporter {
        static finish(): void;
        static replaceWith(testReporter: $TestReporter): void;
        static onTestFailed(testInfo: $GameTestInfo): void;
        static onTestSuccess(testInfo: $GameTestInfo): void;
        constructor();
    }
    export class $TestCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static STRUCTURE_BLOCK_NEARBY_SEARCH_RADIUS: number;
        static STRUCTURE_BLOCK_FULL_SEARCH_RADIUS: number;
        constructor();
    }
    export class $MultipleTestTracker {
        addListener(testListener: $GameTestListener): void;
        getTotalCount(): number;
        remove(testInfo: $GameTestInfo): void;
        isDone(): boolean;
        getProgressBar(): string;
        addFailureListener(onFail: $Consumer_<$GameTestInfo>): void;
        addTestToTrack(testInfo: $GameTestInfo): void;
        getFailedOptional(): $Collection<$GameTestInfo>;
        hasFailedRequired(): boolean;
        hasFailedOptional(): boolean;
        getFailedRequired(): $Collection<$GameTestInfo>;
        getDoneCount(): number;
        getFailedRequiredCount(): number;
        getFailedOptionalCount(): number;
        constructor();
        constructor(testInfos: $Collection_<$GameTestInfo>);
        get totalCount(): number;
        get done(): boolean;
        get progressBar(): string;
        get failedOptional(): $Collection<$GameTestInfo>;
        get failedRequired(): $Collection<$GameTestInfo>;
        get doneCount(): number;
        get failedRequiredCount(): number;
        get failedOptionalCount(): number;
    }
    export class $GameTestRegistry {
        static getTestFunction(testName: string): $TestFunction;
        static findTestFunction(testName: string): ($TestFunction) | undefined;
        static isTestClass(className: string): boolean;
        static getAllTestClassNames(): $Collection<string>;
        static getAllTestFunctions(): $Collection<$TestFunction>;
        /**
         * @deprecated
         */
        static register(testMethod: $Method): void;
        /**
         * @deprecated
         */
        static register(testClass: $Class<never>): void;
        /**
         * @deprecated
         */
        static register(arg0: $Method, arg1: $Set_<string>): void;
        static rememberFailedTest(testFunction: $TestFunction_): void;
        static forgetFailedTests(): void;
        static getLastFailedTests(): $Stream<$TestFunction>;
        static getAfterBatchFunction(functionName: string): $Consumer<$ServerLevel>;
        static getBeforeBatchFunction(functionName: string): $Consumer<$ServerLevel>;
        static getTestFunctionsForClassName(className: string): $Stream<$TestFunction>;
        constructor();
        static get allTestClassNames(): $Collection<string>;
        static get allTestFunctions(): $Collection<$TestFunction>;
        static get lastFailedTests(): $Stream<$TestFunction>;
    }
    export class $StructureUtils {
        static addCommandBlockAndButtonToStartTest(structureBlockPos: $BlockPos_, offset: $BlockPos_, rotation: $Rotation_, serverLevel: $ServerLevel): void;
        static getStructureBounds(structureBlockEntity: $StructureBlockEntity): $AABB;
        static getStructureOrigin(structureBlockEntity: $StructureBlockEntity): $BlockPos;
        static removeBarriers(bounds: $AABB_, level: $ServerLevel): void;
        static encaseStructure(bounds: $AABB_, level: $ServerLevel, placeBarriers: boolean): void;
        static clearSpaceForStructure(boundingBox: $BoundingBox, level: $ServerLevel): void;
        static prepareTestStructure(gameTestInfo: $GameTestInfo, pos: $BlockPos_, rotation: $Rotation_, level: $ServerLevel): $StructureBlockEntity;
        static getStructureBoundingBox(pos: $BlockPos_, offset: $Vec3i, rotation: $Rotation_): $BoundingBox;
        static getStructureBoundingBox(structureBlockEntity: $StructureBlockEntity): $BoundingBox;
        static findStructureBlocks(pos: $BlockPos_, radius: number, level: $ServerLevel): $Stream<$BlockPos>;
        static lookedAtStructureBlockPos(pos: $BlockPos_, entity: $Entity, level: $ServerLevel): $Stream<$BlockPos>;
        static getTransformedFarCorner(pos: $BlockPos_, offset: $Vec3i, rotation: $Rotation_): $BlockPos;
        static findNearestStructureBlock(pos: $BlockPos_, radius: number, level: $ServerLevel): ($BlockPos) | undefined;
        static createNewEmptyStructureBlock(structureName: string, pos: $BlockPos_, size: $Vec3i, rotation: $Rotation_, serverLevel: $ServerLevel): void;
        static findStructureBlockContainingPos(pos: $BlockPos_, radius: number, level: $ServerLevel): ($BlockPos) | undefined;
        static getRotationForRotationSteps(rotationSteps: number): $Rotation;
        static getRotationStepsForRotation(rotation: $Rotation_): number;
        static findStructureByTestFunction(pos: $BlockPos_, radius: number, level: $ServerLevel, testName: string): $Stream<$BlockPos>;
        static DEFAULT_TEST_STRUCTURES_DIR: string;
        static testStructuresDir: string;
        static DEFAULT_Y_SEARCH_RADIUS: number;
        constructor();
    }
    export class $StructureBlockPosFinder {
    }
    export interface $StructureBlockPosFinder {
        findStructureBlockPos(): $Stream<$BlockPos>;
    }
    /**
     * Values that may be interpreted as {@link $StructureBlockPosFinder}.
     */
    export type $StructureBlockPosFinder_ = (() => $Stream<$BlockPos_>);
    export class $GameTestAssertPosException extends $GameTestAssertException {
        getRelativePos(): $BlockPos;
        getAbsolutePos(): $BlockPos;
        getMessageToShowAtBlock(): string;
        constructor(exceptionMessage: string, absolutePos: $BlockPos_, relativePos: $BlockPos_, tick: number);
        get relativePos(): $BlockPos;
        get absolutePos(): $BlockPos;
        get messageToShowAtBlock(): string;
    }
    export class $GameTestBatch extends $Record {
        name(): string;
        gameTestInfos(): $Collection<$GameTestInfo>;
        afterBatchFunction(): $Consumer<$ServerLevel>;
        beforeBatchFunction(): $Consumer<$ServerLevel>;
        static DEFAULT_BATCH_NAME: string;
        constructor(name: string, gameTestInfos: $Collection_<$GameTestInfo>, beforeBatchFunction: $Consumer_<$ServerLevel>, afterBatchFunction: $Consumer_<$ServerLevel>);
    }
    /**
     * Values that may be interpreted as {@link $GameTestBatch}.
     */
    export type $GameTestBatch_ = { afterBatchFunction?: $Consumer_<$ServerLevel>, name?: string, beforeBatchFunction?: $Consumer_<$ServerLevel>, gameTestInfos?: $Collection_<$GameTestInfo>,  } | [afterBatchFunction?: $Consumer_<$ServerLevel>, name?: string, beforeBatchFunction?: $Consumer_<$ServerLevel>, gameTestInfos?: $Collection_<$GameTestInfo>, ];
    export class $TestCommand$TestBatchSummaryDisplayer extends $Record implements $GameTestBatchListener {
    }
    /**
     * Values that may be interpreted as {@link $TestCommand$TestBatchSummaryDisplayer}.
     */
    export type $TestCommand$TestBatchSummaryDisplayer_ = { source?: $CommandSourceStack,  } | [source?: $CommandSourceStack, ];
    export class $GameTestBatchListener {
    }
    export interface $GameTestBatchListener {
        testBatchFinished(batch: $GameTestBatch_): void;
        testBatchStarting(batch: $GameTestBatch_): void;
    }
    export class $RetryOptions extends $Record {
        numberOfTries(): number;
        unlimitedTries(): boolean;
        hasTriesLeft(attempts: number, successes: number): boolean;
        haltOnFailure(): boolean;
        hasRetries(): boolean;
        static noRetries(): $RetryOptions;
        constructor(arg0: number, arg1: boolean);
    }
    /**
     * Values that may be interpreted as {@link $RetryOptions}.
     */
    export type $RetryOptions_ = { haltOnFailure?: boolean, numberOfTries?: number,  } | [haltOnFailure?: boolean, numberOfTries?: number, ];
    export class $GameTestHelper {
        randomTick(pos: $BlockPos_): void;
        relativePos(pos: $BlockPos_): $BlockPos;
        spawnItem(item: $Item_, x: number, y: number, z: number): $ItemEntity;
        spawnItem(item: $Item_, pos: $Vec3_): $ItemEntity;
        spawnItem(item: $Item_, pos: $BlockPos_): $ItemEntity;
        getBlockState(pos: $BlockPos_): $BlockState;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_): T;
        tickPrecipitation(pos: $BlockPos_): void;
        tickPrecipitation(): void;
        findEntities<E extends $Entity>(type: $EntityType_<E>, pos: $Vec3_, radius: number): $List<E>;
        findEntities<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number, radius: number): $List<E>;
        destroyBlock(pos: $BlockPos_): void;
        setBlock(x: number, y: number, z: number, block: $Block_): void;
        setBlock(pos: $BlockPos_, state: $BlockState_): void;
        setBlock(x: number, y: number, z: number, state: $BlockState_): void;
        setBlock(pos: $BlockPos_, block: $Block_): void;
        spawn<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        spawn<E extends $Entity>(type: $EntityType_<E>, pos: $Vec3_): E;
        spawn<E extends $Entity>(type: $EntityType_<E>, pos: $BlockPos_): E;
        spawn<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        getTick(): number;
        placeAt(player: $Player, stack: $ItemStack_, pos: $BlockPos_, direction: $Direction_): void;
        moveTo(mob: $Mob, x: number, y: number, z: number): void;
        useBlock(pos: $BlockPos_, player: $Player, result: $BlockHitResult): void;
        useBlock(pos: $BlockPos_, player: $Player): void;
        useBlock(pos: $BlockPos_): void;
        setDayTime(time: number): void;
        setBiome(biome: $ResourceKey_<$Biome>): void;
        getBounds(): $AABB;
        fail(exceptionMessage: string, entity: $Entity): void;
        fail(exceptionMessage: string): void;
        fail(exceptionMessage: string, pos: $BlockPos_): void;
        getEntities<T extends $Entity>(entityType: $EntityType_<T>, pos: $BlockPos_, radius: number): $List<T>;
        getEntities<T extends $Entity>(entityType: $EntityType_<T>): $List<T>;
        getHeight(heightmapType: $Heightmap$Types_, x: number, z: number): number;
        getLevel(): $ServerLevel;
        walkTo(mob: $Mob, pos: $BlockPos_, speed: number): $GameTestSequence;
        pullLever(x: number, y: number, z: number): void;
        pullLever(pos: $BlockPos_): void;
        setNight(): void;
        succeedIf(criterion: $Runnable_): void;
        succeed(): void;
        onEachTick(criterion: $Runnable_): void;
        failIf(criterion: $Runnable_): void;
        failIfEver(criterion: $Runnable_): void;
        assertTrue(condition: boolean, failureMessage: string): void;
        assertAtTickTimeContainerContains(tickTime: number, arg1: $BlockPos_, pos: $Item_): void;
        assertAtTickTimeContainerEmpty(tickTime: number, arg1: $BlockPos_): void;
        assertEntityInventoryContains<E extends $Entity>(pos: $BlockPos_, entityType: $EntityType_<E>, item: $Item_): void;
        /**
         * @deprecated
         */
        makeMockServerPlayerInLevel(): $ServerPlayer;
        succeedWhenEntityNotPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        succeedWhenEntityNotPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        assertLivingEntityHasMobEffect(entity: $LivingEntity, effect: $Holder_<$MobEffect>, amplifier: number): void;
        assertEntityInstancePresent(entity: $Entity, pos: $BlockPos_): void;
        assertEntityInstancePresent(entity: $Entity, x: number, y: number, z: number): void;
        absolutePos(pos: $BlockPos_): $BlockPos;
        withLowHealth(entity: $LivingEntity): $LivingEntity;
        runAtTickTime(delay: number, arg1: $Runnable_): void;
        getTestRotation(): $Rotation;
        makeAboutToDrown(entity: $LivingEntity): $LivingEntity;
        runAfterDelay(delay: number, arg1: $Runnable_): void;
        assertFalse(condition: boolean, failureMessage: string): void;
        makeMockPlayer(gameType: $GameType_): $Player;
        relativeVec(relativeVec3: $Vec3_): $Vec3;
        startSequence(): $GameTestSequence;
        findClosestEntity<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number, radius: number): E;
        succeedOnTickWhen(tick: number, criterion: $Runnable_): void;
        succeedWhen(criterion: $Runnable_): void;
        findOneEntity<E extends $Entity>(type: $EntityType_<E>): E;
        pressButton(x: number, y: number, z: number): void;
        pressButton(pos: $BlockPos_): void;
        absoluteVec(relativeVec3: $Vec3_): $Vec3;
        assertBlockPresent(block: $Block_, x: number, y: number, z: number): void;
        assertBlockPresent(block: $Block_, pos: $BlockPos_): void;
        assertBlock(pos: $BlockPos_, predicate: $Predicate_<$Block>, exceptionMessage: string): void;
        assertBlock(pos: $BlockPos_, predicate: $Predicate_<$Block>, exceptionMessage: $Supplier_<string>): void;
        killAllEntities(): void;
        assertValueEqual<N>(actual: N, expected: N, valueName: string): void;
        pulseRedstone(pos: $BlockPos_, delay: number): void;
        assertBlockState(pos: $BlockPos_, predicate: $Predicate_<$BlockState>, exceptionMessage: $Supplier_<string>): void;
        assertEntityData<E extends $Entity, T>(pos: $BlockPos_, type: $EntityType_<E>, entityDataGetter: $Function_<E, T>, testEntityData: T | null): void;
        killAllEntitiesOfClass(entityClass: $Class<any>): void;
        assertEntityPresent(type: $EntityType_<never>, from: $Vec3_, to: $Vec3_): void;
        assertEntityPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        assertEntityPresent(type: $EntityType_<never>): void;
        assertEntityPresent(type: $EntityType_<never>, pos: $BlockPos_, expansionAmount: number): void;
        assertEntityPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        assertBlockEntityData<T extends $BlockEntity>(pos: $BlockPos_, predicate: $Predicate_<T>, exceptionMessage: $Supplier_<string>): void;
        assertEntitiesPresent(entityType: $EntityType_<never>, count: number): void;
        assertEntitiesPresent(entityType: $EntityType_<never>, pos: $BlockPos_, count: number, radius: number): void;
        assertItemEntityNotPresent(item: $Item_, pos: $BlockPos_, radius: number): void;
        assertItemEntityNotPresent(item: $Item_): void;
        assertRedstoneSignal(pos: $BlockPos_, direction: $Direction_, signalStrengthPredicate: $IntPredicate_, exceptionMessage: $Supplier_<string>): void;
        assertItemEntityPresent(item: $Item_, pos: $BlockPos_, radius: number): void;
        assertItemEntityPresent(item: $Item_): void;
        assertEntityTouching(type: $EntityType_<never>, x: number, arg2: number, y: number): void;
        assertEntityNotTouching(type: $EntityType_<never>, x: number, arg2: number, y: number): void;
        assertEntityIsHolding<E extends $LivingEntity>(pos: $BlockPos_, entityType: $EntityType_<E>, item: $Item_): void;
        assertContainerContains(pos: $BlockPos_, item: $Item_): void;
        assertSameBlockStates(boundingBox: $BoundingBox, pos: $BlockPos_): void;
        succeedWhenBlockPresent(block: $Block_, x: number, y: number, z: number): void;
        succeedWhenBlockPresent(block: $Block_, pos: $BlockPos_): void;
        assertEntityNotPresent(type: $EntityType_<never>, from: $Vec3_, to: $Vec3_): void;
        assertEntityNotPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        assertEntityNotPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        assertEntityNotPresent(type: $EntityType_<never>): void;
        assertSameBlockState(testPos: $BlockPos_, comparisonPos: $BlockPos_): void;
        assertEntityPosition(entity: $Entity, box: $AABB_, exceptionMessage: string): void;
        assertEntityProperty<E extends $Entity>(entity: E, predicate: $Predicate_<E>, name: string): void;
        assertEntityProperty<E extends $Entity, T>(entity: E, entityPropertyGetter: $Function_<E, T>, valueName: string, testEntityProperty: T): void;
        assertBlockProperty<T extends $Comparable<T>>(pos: $BlockPos_, property: $Property<T>, value: T): void;
        assertBlockProperty<T extends $Comparable<T>>(pos: $BlockPos_, property: $Property<T>, predicate: $Predicate_<T>, exceptionMessage: string): void;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, pos: $BlockPos_): E;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, pos: $Vec3_): E;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        assertBlockNotPresent(block: $Block_, x: number, y: number, z: number): void;
        assertBlockNotPresent(block: $Block_, pos: $BlockPos_): void;
        assertItemEntityCountIs(item: $Item_, pos: $BlockPos_, expansionAmount: number, arg3: number): void;
        assertContainerEmpty(pos: $BlockPos_): void;
        succeedWhenEntityData<E extends $Entity, T>(pos: $BlockPos_, type: $EntityType_<E>, entityDataGetter: $Function_<E, T>, testEntityData: T): void;
        succeedWhenEntityPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        succeedWhenEntityPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        forEveryBlockInStructure(consumer: $Consumer_<$BlockPos>): void;
        testInfo: $GameTestInfo;
        constructor(testInfo: $GameTestInfo);
        get tick(): number;
        set dayTime(value: number);
        set biome(value: $ResourceKey_<$Biome>);
        get bounds(): $AABB;
        get level(): $ServerLevel;
        get testRotation(): $Rotation;
    }
    export class $LogTestReporter implements $TestReporter {
        onTestFailed(arg0: $GameTestInfo): void;
        onTestSuccess(arg0: $GameTestInfo): void;
        finish(): void;
        constructor();
    }
    /**
     * Annotate a method with this annotation in order to have it run before the specified `#batch()`.
     */
    export class $BeforeBatch implements $Annotation {
        batch(): string;
    }
    export class $TestFinder<T> implements $StructureBlockPosFinder, $TestFunctionFinder {
        source(): $CommandSourceStack;
        findTestFunctions(): $Stream<$TestFunction>;
        findStructureBlockPos(): $Stream<$BlockPos>;
    }
    export class $GameTestAssertException extends $RuntimeException {
        constructor(exceptionMessage: string);
    }
    export class $GameTestTicker {
        clear(): void;
        add(testInfo: $GameTestInfo): void;
        setRunner(runner: $GameTestRunner): void;
        tick(): void;
        static SINGLETON: $GameTestTicker;
        set runner(value: $GameTestRunner);
    }
    export class $JUnitLikeTestReporter implements $TestReporter {
        finish(): void;
        save(destination: $File_): void;
        onTestFailed(testInfo: $GameTestInfo): void;
        onTestSuccess(testInfo: $GameTestInfo): void;
        constructor(destination: $File_);
    }
    export class $GameTestServer extends $MinecraftServer {
        /**
         * Initialises the server and starts it.
         */
        initServer(): boolean;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        waitUntilNextTick(): void;
        getTickTimeLogger(): $SampleLogger;
        static create(serverThread: $Thread, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, testBatches: $Collection_<$TestFunction_>, spawnPos: $BlockPos_): $GameTestServer;
        static VANILLA_BRAND: string;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        get tickTimeLogger(): $SampleLogger;
    }
    export class $TestFunctionFinder {
    }
    export interface $TestFunctionFinder {
        findTestFunctions(): $Stream<$TestFunction>;
    }
    /**
     * Values that may be interpreted as {@link $TestFunctionFinder}.
     */
    export type $TestFunctionFinder_ = (() => $Stream<$TestFunction_>);
    export class $GameTestRunner$StructureSpawner {
        static NOT_SET: $GameTestRunner$StructureSpawner;
        static IN_PLACE: $GameTestRunner$StructureSpawner;
    }
    export interface $GameTestRunner$StructureSpawner {
        spawnStructure(gameTestInfo: $GameTestInfo): ($GameTestInfo) | undefined;
        onBatchStart(level: $ServerLevel): void;
    }
    /**
     * Values that may be interpreted as {@link $GameTestRunner$StructureSpawner}.
     */
    export type $GameTestRunner$StructureSpawner_ = ((arg0: $GameTestInfo) => ($GameTestInfo) | undefined);
    export class $GameTest implements $Annotation {
        required(): boolean;
        template(): string;
        batch(): string;
        attempts(): number;
        templateNamespace(): string;
        rotationSteps(): number;
        timeoutTicks(): number;
        requiredSuccesses(): number;
        manualOnly(): boolean;
        skyAccess(): boolean;
        setupTicks(): number;
    }
    export class $GameTestTimeoutException extends $RuntimeException {
        constructor(exceptionMessage: string);
    }
    export class $GameTestSequence {
        thenIdle(tick: number): $GameTestSequence;
        thenTrigger(): $GameTestSequence$Condition;
        thenExecute(task: $Runnable_): $GameTestSequence;
        thenExecuteFor(tick: number, task: $Runnable_): $GameTestSequence;
        tickAndContinue(tick: number): void;
        thenFail(exception: $Supplier_<$Exception>): void;
        thenWaitUntil(task: $Runnable_): $GameTestSequence;
        thenWaitUntil(expectedDelay: number, arg1: $Runnable_): $GameTestSequence;
        thenExecuteAfter(tick: number, task: $Runnable_): $GameTestSequence;
        thenSucceed(): void;
        tickAndFailIfNotComplete(tick: number): void;
        constructor(testInfo: $GameTestInfo);
    }
    export class $GameTestBatchFactory {
        static fromTestFunction(testFunctions: $Collection_<$TestFunction_>, level: $ServerLevel): $Collection<$GameTestBatch>;
        static fromGameTestInfo(): $GameTestRunner$GameTestBatcher;
        static fromGameTestInfo(maxTests: number): $GameTestRunner$GameTestBatcher;
        static toGameTestBatch(gameTestInfos: $Collection_<$GameTestInfo>, functionName: string, index: number): $GameTestBatch;
        static toGameTestInfo(testFunction: $TestFunction_, rotationSteps: number, level: $ServerLevel): $GameTestInfo;
        constructor();
    }
    export class $ExhaustedAttemptsException extends $Throwable {
    }
    export class $GameTestEvent {
    }
    export class $TestCommand$TestSummaryDisplayer extends $Record implements $GameTestListener {
        tracker(): $MultipleTestTracker;
        testStructureLoaded(testInfo: $GameTestInfo): void;
        level(): $ServerLevel;
        testAddedForRerun(oldTest: $GameTestInfo, newTest: $GameTestInfo, runner: $GameTestRunner): void;
        testPassed(test: $GameTestInfo, runner: $GameTestRunner): void;
        testFailed(test: $GameTestInfo, runner: $GameTestRunner): void;
        constructor(level: $ServerLevel, tracker: $MultipleTestTracker);
    }
    /**
     * Values that may be interpreted as {@link $TestCommand$TestSummaryDisplayer}.
     */
    export type $TestCommand$TestSummaryDisplayer_ = { tracker?: $MultipleTestTracker, level?: $ServerLevel,  } | [tracker?: $MultipleTestTracker, level?: $ServerLevel, ];
    export class $TestClassNameArgument implements $ArgumentType<string> {
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getTestClassName(context: $CommandContext<$CommandSourceStack>, argument: string): string;
        static testClassName(): $TestClassNameArgument;
        parse(reader: $StringReader): string;
        parse<S>(arg0: $StringReader, arg1: S): string;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $GameTestRunner {
        addListener(listener: $GameTestBatchListener): void;
        start(): void;
        stop(): void;
        static clearMarkers(serverLevel: $ServerLevel): void;
        getTestInfos(): $List<$GameTestInfo>;
        rerunTest(test: $GameTestInfo): void;
        static DEFAULT_TESTS_PER_ROW: number;
        get testInfos(): $List<$GameTestInfo>;
    }
    export class $GameTestRunner$GameTestBatcher {
    }
    export interface $GameTestRunner$GameTestBatcher {
        batch(infos: $Collection_<$GameTestInfo>): $Collection<$GameTestBatch>;
    }
    /**
     * Values that may be interpreted as {@link $GameTestRunner$GameTestBatcher}.
     */
    export type $GameTestRunner$GameTestBatcher_ = ((arg0: $Collection<$GameTestInfo>) => $Collection_<$GameTestBatch_>);
    export class $TestCommand$Runner {
        locate(): number;
        run(rotationSteps: number, testsPerRow: number): number;
        run(rotationSteps: number): number;
        run(retryOptions: $RetryOptions_, rotationSteps: number): number;
        run(retryOptions: $RetryOptions_): number;
        run(): number;
        run(retryOptions: $RetryOptions_, rotationSteps: number, testsPerRow: number): number;
        reset(): number;
        clear(): number;
        "export"(): number;
        constructor(finder: $TestFinder<$TestCommand$Runner>);
    }
    export class $GameTestSequence$Condition {
        assertTriggeredThisTick(): void;
        constructor(arg0: $GameTestSequence);
    }
    export class $TestReporter {
    }
    export interface $TestReporter {
        finish(): void;
        onTestFailed(testInfo: $GameTestInfo): void;
        onTestSuccess(testInfo: $GameTestInfo): void;
    }
    export class $ReportGameListener implements $GameTestListener {
    }
    export class $TestFinder$Builder<T> {
        radius(context: $CommandContext<$CommandSourceStack>, radius: number): T;
        nearest(context: $CommandContext<$CommandSourceStack>): T;
        failedTests(context: $CommandContext<$CommandSourceStack>, onlyRequired: boolean): T;
        failedTests(context: $CommandContext<$CommandSourceStack>): T;
        allTestsInClass(context: $CommandContext<$CommandSourceStack>, className: string): T;
        locateByName(context: $CommandContext<$CommandSourceStack>, className: string): T;
        createMultipleCopies(count: number): $TestFinder$Builder<T>;
        lookedAt(context: $CommandContext<$CommandSourceStack>): T;
        allNearby(context: $CommandContext<$CommandSourceStack>): T;
        byArgument(context: $CommandContext<$CommandSourceStack>, className: string): T;
        allTests(context: $CommandContext<$CommandSourceStack>): T;
        constructor(contextProvider: $Function_<$TestFinder<T>, T>);
    }
    export class $GameTestListener {
    }
    export interface $GameTestListener {
        testStructureLoaded(testInfo: $GameTestInfo): void;
        testAddedForRerun(oldTest: $GameTestInfo, newTest: $GameTestInfo, runner: $GameTestRunner): void;
        testPassed(test: $GameTestInfo, runner: $GameTestRunner): void;
        testFailed(test: $GameTestInfo, runner: $GameTestRunner): void;
    }
    export class $TestFunction extends $Record {
        required(): boolean;
        structureName(): string;
        rotation(): $Rotation;
        testName(): string;
        batchName(): string;
        run(gameTestHelper: $GameTestHelper): void;
        "function"(): $Consumer<$GameTestHelper>;
        isFlaky(): boolean;
        maxTicks(): number;
        maxAttempts(): number;
        requiredSuccesses(): number;
        manualOnly(): boolean;
        skyAccess(): boolean;
        setupTicks(): number;
        constructor(batchName: string, testName: string, structureName: string, maxTicks: number, setupTicks: number, arg5: boolean, required: $Consumer_<$GameTestHelper>);
        constructor(batchName: string, testName: string, structureName: string, rotation: $Rotation_, maxTicks: number, setupTicks: number, arg6: boolean, required: $Consumer_<$GameTestHelper>);
        constructor(arg0: string, arg1: string, arg2: string, arg3: $Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: number, arg10: boolean, arg11: $Consumer_<$GameTestHelper>);
        get flaky(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TestFunction}.
     */
    export type $TestFunction_ = { maxAttempts?: number, setupTicks?: number, function?: $Consumer_<$GameTestHelper>, required?: boolean, structureName?: string, maxTicks?: number, skyAccess?: boolean, batchName?: string, requiredSuccesses?: number, rotation?: $Rotation_, testName?: string, manualOnly?: boolean,  } | [maxAttempts?: number, setupTicks?: number, function?: $Consumer_<$GameTestHelper>, required?: boolean, structureName?: string, maxTicks?: number, skyAccess?: boolean, batchName?: string, requiredSuccesses?: number, rotation?: $Rotation_, testName?: string, manualOnly?: boolean, ];
    export class $GameTestInfo {
        getListeners(): $Stream<$GameTestListener>;
        addListener(listener: $GameTestListener): void;
        getStructureName(): string;
        isRequired(): boolean;
        placeStructure(): $GameTestInfo;
        getTestFunction(): $TestFunction;
        getError(): $Throwable;
        isOptional(): boolean;
        getRotation(): $Rotation;
        isDone(): boolean;
        fail(error: $Throwable): void;
        getLevel(): $ServerLevel;
        getRunTime(): number;
        tick(runner: $GameTestRunner): void;
        startExecution(delay: number): $GameTestInfo;
        setNorthWestCorner(northWestCorner: $BlockPos_): void;
        getStructureBounds(): $AABB;
        isFlaky(): boolean;
        maxAttempts(): number;
        retryOptions(): $RetryOptions;
        succeed(): void;
        getTestName(): string;
        hasSucceeded(): boolean;
        requiredSuccesses(): number;
        getTimeoutTicks(): number;
        setRunAtTickTime(tickTime: number, arg1: $Runnable_): void;
        copyReset(): $GameTestInfo;
        getStructureBlockPos(): $BlockPos;
        getStructureBlockEntity(): $StructureBlockEntity;
        prepareTestStructure(): $GameTestInfo;
        hasStarted(): boolean;
        hasFailed(): boolean;
        sequences: $Collection<$GameTestSequence>;
        constructor(testFunction: $TestFunction_, rotation: $Rotation_, level: $ServerLevel, retryOptions: $RetryOptions_);
        get listeners(): $Stream<$GameTestListener>;
        get structureName(): string;
        get required(): boolean;
        get testFunction(): $TestFunction;
        get error(): $Throwable;
        get optional(): boolean;
        get rotation(): $Rotation;
        get done(): boolean;
        get level(): $ServerLevel;
        get runTime(): number;
        set northWestCorner(value: $BlockPos_);
        get structureBounds(): $AABB;
        get flaky(): boolean;
        get testName(): string;
        get timeoutTicks(): number;
        get structureBlockPos(): $BlockPos;
        get structureBlockEntity(): $StructureBlockEntity;
    }
}
