import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $JsonObject_ } from "@package/com/google/gson";
import { $EntityRenderDispatcher } from "@package/net/minecraft/client/renderer/entity";
import { $RenderBuffers, $LightTexture } from "@package/net/minecraft/client/renderer";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $FireworkExplosion_ } from "@package/net/minecraft/world/item/component";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $DustParticleOptions, $ParticleType_, $SculkChargeParticleOptions_, $ParticleGroup, $SculkChargeParticleOptions, $VibrationParticleOption, $ParticleOptions_, $BlockParticleOption, $ParticleOptions, $DustColorTransitionOptions, $ColorParticleOption, $ItemParticleOption, $SimpleParticleType, $ShriekParticleOption, $ScalableParticleOptionsBase } from "@package/net/minecraft/core/particles";
import { $Camera } from "@package/net/minecraft/client";
import { $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $List_ } from "@package/java/util";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BufferBuilder, $VertexConsumer, $Tesselator } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Record } from "@package/java/lang";
import { $AABB_, $Vec3, $AABB, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $Quaternionf } from "@package/org/joml";

declare module "@package/net/minecraft/client/particle" {
    export class $BubbleParticle extends $TextureSheetParticle {
    }
    export class $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> {
    }
    export interface $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> {
        create(sprites: $SpriteSet): $ParticleProvider<T>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngine$SpriteParticleRegistration}.
     */
    export type $ParticleEngine$SpriteParticleRegistration_<T> = ((arg0: $SpriteSet) => $ParticleProvider<T>);
    export class $SoulParticle extends $RisingParticle {
        getLightColor(partialTick: number): number;
    }
    export class $PortalParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $DripParticle$FallingParticle extends $DripParticle {
    }
    export class $ItemPickupParticle extends $Particle {
        constructor(entityRenderDispatcher: $EntityRenderDispatcher, buffers: $RenderBuffers, level: $ClientLevel, itemEntity: $Entity, target: $Entity);
    }
    export class $GlowParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
    }
    export class $FireworkParticles$SparkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FallingDustParticle extends $TextureSheetParticle {
    }
    export class $DustPlumeParticle extends $BaseAshSmokeParticle {
    }
    export class $BlockMarker$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(arg0: $BlockParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $DustParticleBase<T extends $ScalableParticleOptionsBase> extends $TextureSheetParticle {
    }
    export class $MobAppearanceParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $VibrationSignalParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
    }
    export class $DragonBreathParticle extends $TextureSheetParticle {
    }
    export class $FlyStraightTowardsParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
    }
    export class $ParticleProvider<T extends $ParticleOptions> {
    }
    export interface $ParticleProvider<T extends $ParticleOptions> {
        createParticle(type: T, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProvider}.
     */
    export type $ParticleProvider_<T> = ((arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => $Particle);
    export class $SpitParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $LavaParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TotemParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $WaterCurrentDownParticle extends $TextureSheetParticle {
    }
    export class $GustParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FireworkParticles$Starter extends $NoRenderParticle {
        createParticle(x: number, arg1: number, y: number, arg3: number, z: number, arg5: number, xSpeed: $IntList, arg7: $IntList, ySpeed: boolean, arg9: boolean): void;
        createParticleShape(speed: number, arg1: number[][], coords: $IntList, colors: $IntList, fadeColors: boolean, trail: boolean, twinkle: boolean): void;
        createParticleBurst(colors: $IntList, fadeColors: $IntList, trail: boolean, twinkle: boolean): void;
        createParticleBall(speed: number, arg1: number, radius: $IntList, colors: $IntList, fadeColors: boolean, trail: boolean): void;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xd: $ParticleEngine, arg8: $List_<$FireworkExplosion_>);
    }
    export class $CampfireSmokeParticle$CosyProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $HugeExplosionSeedParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $EndRodParticle extends $SimpleAnimatedParticle {
    }
    export class $TrialSpawnerDetectionParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
    }
    export class $ExplodeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle$CoolingDripHangParticle extends $DripParticle$DripHangParticle {
    }
    export class $WaterCurrentDownParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TerrainParticle$DustPillarProvider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(arg0: $BlockParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $HeartParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $AshParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TotemParticle extends $SimpleAnimatedParticle {
    }
    export class $BubbleColumnUpParticle extends $TextureSheetParticle {
    }
    export class $BreakingItemParticle extends $TextureSheetParticle {
    }
    export class $WhiteSmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SpellParticle$MobEffectProvider implements $ParticleProvider<$ColorParticleOption> {
        createParticle(type: $ColorParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $SquidInkParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $CritParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SingleQuadParticle$FacingCameraMode {
        static LOOKAT_Y: $SingleQuadParticle$FacingCameraMode;
        static LOOKAT_XYZ: $SingleQuadParticle$FacingCameraMode;
    }
    export interface $SingleQuadParticle$FacingCameraMode {
        setRotation(quaternion: $Quaternionf, camera: $Camera, partialTick: number): void;
    }
    /**
     * Values that may be interpreted as {@link $SingleQuadParticle$FacingCameraMode}.
     */
    export type $SingleQuadParticle$FacingCameraMode_ = ((arg0: $Quaternionf, arg1: $Camera, arg2: number) => void);
    export class $CampfireSmokeParticle$SignalProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TrackingEmitter extends $NoRenderParticle {
        constructor(level: $ClientLevel, entity: $Entity, particleType: $ParticleOptions_, lifetime: number);
        constructor(level: $ClientLevel, entity: $Entity, particleType: $ParticleOptions_);
    }
    export class $SplashParticle extends $WaterDropParticle {
    }
    export class $SpellParticle extends $TextureSheetParticle {
    }
    export class $NoteParticle extends $TextureSheetParticle {
    }
    export class $GustParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
    }
    export class $TerrainParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        updateSprite(arg0: $BlockState_, arg1: $BlockPos_): $TerrainParticle;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $BlockState_);
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $BlockState_, arg8: $BlockPos_);
    }
    export class $HeartParticle$AngryVillagerProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DustParticle$Provider implements $ParticleProvider<$DustParticleOptions> {
        createParticle(type: $DustParticleOptions, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SculkChargePopParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
    }
    export class $WhiteSmokeParticle extends $BaseAshSmokeParticle {
    }
    export class $PortalParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
    }
    export class $DripParticle$DripstoneFallAndLandParticle extends $DripParticle$FallAndLandParticle {
    }
    export class $SpellParticle$WitchProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $WaterDropParticle extends $TextureSheetParticle {
    }
    export class $SimpleAnimatedParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        setColor(color: number): void;
        setFadeColor(color: number): void;
        set color(value: number);
        set fadeColor(value: number);
    }
    export class $DustPlumeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $ParticleEngine$1ParticleDefinition extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngine$1ParticleDefinition}.
     */
    export type $ParticleEngine$1ParticleDefinition_ = { id?: $ResourceLocation_, sprites?: ($List_<$ResourceLocation_>) | undefined,  } | [id?: $ResourceLocation_, sprites?: ($List_<$ResourceLocation_>) | undefined, ];
    export class $SmokeParticle extends $BaseAshSmokeParticle {
    }
    export class $FlameParticle extends $RisingParticle {
        getLightColor(partialTick: number): number;
    }
    export class $SpitParticle extends $ExplodeParticle {
    }
    export class $SuspendedTownParticle$HappyVillagerProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BubbleColumnUpParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $ReversePortalParticle extends $PortalParticle {
    }
    export class $GlowParticle$WaxOffProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedTownParticle extends $TextureSheetParticle {
    }
    export class $BubblePopParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SonicBoomParticle extends $HugeExplosionParticle {
    }
    export class $LargeSmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $CritParticle extends $TextureSheetParticle {
    }
    export class $Particle {
        render(buffer: $VertexConsumer, camera: $Camera, partialTicks: number): void;
        getBoundingBox(): $AABB;
        setBoundingBox(bb: $AABB_): void;
        getRenderType(): $ParticleRenderType;
        getPos(): $Vec3;
        setParticleSpeed(x: number, arg1: number, y: number): void;
        getParticleGroup(): ($ParticleGroup) | undefined;
        getLifetime(): number;
        setLifetime(particleLifeTime: number): void;
        getRenderBoundingBox(arg0: number): $AABB;
        setPower(scale: number): $Particle;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        remove(): void;
        scale(scale: number): $Particle;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        isAlive(): boolean;
        setColor(particleRed: number, particleGreen: number, particleBlue: number): void;
        move(x: number, arg1: number, y: number): void;
        setPos(x: number, arg1: number, y: number): void;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        tick(): void;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
        get renderType(): $ParticleRenderType;
        get particleGroup(): ($ParticleGroup) | undefined;
        set power(value: number);
        get alive(): boolean;
    }
    export class $FlyTowardsPositionParticle$EnchantProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $PlayerCloudParticle$SneezeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DustParticle extends $DustParticleBase<$DustParticleOptions> {
    }
    export class $SpellParticle$InstantProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $WhiteAshParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $LavaParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
    }
    export class $DustColorTransitionParticle extends $DustParticleBase<$DustColorTransitionOptions> {
    }
    export class $FallingDustParticle$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(type: $BlockParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BreakingItemParticle$SnowballProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $ReversePortalParticle$ReversePortalProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FlameParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $GustSeedParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(scale: number, arg1: number, lifetime: number);
    }
    export class $SquidInkParticle$GlowInkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SingleQuadParticle extends $Particle {
        getQuadSize(scaleFactor: number): number;
        getFacingCameraMode(): $SingleQuadParticle$FacingCameraMode;
        get facingCameraMode(): $SingleQuadParticle$FacingCameraMode;
    }
    export class $Particle$LifetimeAlpha extends $Record {
        endAtNormalizedAge(): number;
        startAtNormalizedAge(): number;
        isOpaque(): boolean;
        currentAlphaForAge(age: number, lifetime: number, partialTick: number): number;
        startAlpha(): number;
        endAlpha(): number;
        static ALWAYS_OPAQUE: $Particle$LifetimeAlpha;
        constructor(startAlpha: number, endAlpha: number, startAtNormalizedAge: number, endAtNormalizedAge: number);
        get opaque(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Particle$LifetimeAlpha}.
     */
    export type $Particle$LifetimeAlpha_ = { startAlpha?: number, endAlpha?: number, startAtNormalizedAge?: number, endAtNormalizedAge?: number,  } | [startAlpha?: number, endAlpha?: number, startAtNormalizedAge?: number, endAtNormalizedAge?: number, ];
    export class $SpellParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedParticle$UnderwaterProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BlockMarker extends $TextureSheetParticle {
    }
    export class $SuspendedParticle$WarpedSporeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $ParticleRenderType {
        static NO_RENDER: $ParticleRenderType;
        static TERRAIN_SHEET: $ParticleRenderType;
        static PARTICLE_SHEET_LIT: $ParticleRenderType;
        static PARTICLE_SHEET_OPAQUE: $ParticleRenderType;
        static PARTICLE_SHEET_TRANSLUCENT: $ParticleRenderType;
        static CUSTOM: $ParticleRenderType;
    }
    export interface $ParticleRenderType {
        isTranslucent(): boolean;
        begin(tesselator: $Tesselator, textureManager: $TextureManager): $BufferBuilder;
        get translucent(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ParticleRenderType}.
     */
    export type $ParticleRenderType_ = ((arg0: $Tesselator, arg1: $TextureManager) => $BufferBuilder);
    export class $SpriteSet {
    }
    export interface $SpriteSet {
        get(age: number, lifetime: number): $TextureAtlasSprite;
        get(random: $RandomSource): $TextureAtlasSprite;
    }
    export class $SuspendedTownParticle$DolphinSpeedProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $EndRodParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $CritParticle$MagicProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $GustParticle$SmallProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FlyStraightTowardsParticle$OminousSpawnProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $ParticleDescription {
        getTextures(): $List<$ResourceLocation>;
        static fromJson(json: $JsonObject_): $ParticleDescription;
        get textures(): $List<$ResourceLocation>;
    }
    export class $BubblePopParticle extends $TextureSheetParticle {
    }
    export class $SuspendedParticle$SporeBlossomAirProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BubbleParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SoulParticle$EmissiveProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $SuspendedParticle extends $TextureSheetParticle {
    }
    export class $FlyTowardsPositionParticle$VaultConnectionProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $WaterDropParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SplashParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BaseAshSmokeParticle extends $TextureSheetParticle {
    }
    export class $FlameParticle$SmallFlameProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $LargeSmokeParticle extends $SmokeParticle {
    }
    export class $GustSeedParticle extends $NoRenderParticle {
    }
    export class $WhiteAshParticle extends $BaseAshSmokeParticle {
    }
    export class $NoteParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $ParticleEngine implements $PreparableReloadListener {
        /**
         * @deprecated
         */
        render(lightTexture: $LightTexture, camera: $Camera, partialTick: number): void;
        render(arg0: $LightTexture, arg1: $Camera, arg2: number, arg3: $Frustum | null, arg4: $Predicate_<$ParticleRenderType>): void;
        createParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): $Particle;
        addBlockHitEffects(arg0: $BlockPos_, arg1: $BlockHitResult): void;
        /**
         * Adds block hit particles for the specified block
         */
        crack(pos: $BlockPos_, side: $Direction_): void;
        createTrackingEmitter(entity: $Entity, particleData: $ParticleOptions_): void;
        createTrackingEmitter(entity: $Entity, data: $ParticleOptions_, lifetime: number): void;
        iterateParticles(arg0: $Consumer_<$Particle>): void;
        countParticles(): string;
        add(effect: $Particle): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, particleFactory: $ParticleProvider_<T>): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, particleMetaFactory: $ParticleEngine$SpriteParticleRegistration_<T>): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, sprite: $ParticleProvider$Sprite_<T>): void;
        destroy(pos: $BlockPos_, state: $BlockState_): void;
        close(): void;
        setLevel(level: $ClientLevel | null): void;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        tick(): void;
        getName(): string;
        textureAtlas: $TextureAtlas;
        constructor(level: $ClientLevel, textureManager: $TextureManager);
        set level(value: $ClientLevel | null);
        get name(): string;
    }
    export class $CherryParticle extends $TextureSheetParticle {
    }
    export class $DripParticle$DripLandParticle extends $DripParticle {
    }
    export class $AshParticle extends $BaseAshSmokeParticle {
    }
    export class $TrialSpawnerDetectionParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $RisingParticle extends $TextureSheetParticle {
    }
    export class $FlyTowardsPositionParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
    }
    export class $SnowflakeParticle extends $TextureSheetParticle {
    }
    export class $FireworkParticles$SparkParticle extends $SimpleAnimatedParticle {
    }
    export class $SonicBoomParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FlyTowardsPositionParticle$NautilusProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $MobAppearanceParticle extends $Particle {
    }
    export class $CritParticle$DamageIndicatorProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $HugeExplosionParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
    }
    export class $VibrationSignalParticle$Provider implements $ParticleProvider<$VibrationParticleOption> {
        createParticle(type: $VibrationParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BreakingItemParticle$CobwebProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $SuspendedTownParticle$EggCrackProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $DragonBreathParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SquidInkParticle extends $SimpleAnimatedParticle {
    }
    export class $ShriekParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
    }
    export class $SculkChargeParticle$Provider extends $Record implements $ParticleProvider<$SculkChargeParticleOptions> {
        createParticle(arg0: $SculkChargeParticleOptions_, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        sprite(): $SpriteSet;
        constructor(arg0: $SpriteSet);
    }
    /**
     * Values that may be interpreted as {@link $SculkChargeParticle$Provider}.
     */
    export type $SculkChargeParticle$Provider_ = { sprite?: $SpriteSet,  } | [sprite?: $SpriteSet, ];
    export class $HugeExplosionSeedParticle extends $NoRenderParticle {
    }
    export class $HugeExplosionParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        static createSporeBlossomFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createObsidianTearLandParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createObsidianTearFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createDripstoneLavaHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createDripstoneLavaFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createDripstoneWaterFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createDripstoneWaterHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createObsidianTearHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createHoneyLandParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createLavaHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createHoneyHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createLavaFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createNectarFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createWaterFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createHoneyFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createLavaLandParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createWaterHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
    }
    export class $CampfireSmokeParticle extends $TextureSheetParticle {
    }
    export class $BreakingItemParticle$Provider implements $ParticleProvider<$ItemParticleOption> {
        createParticle(type: $ItemParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $WakeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $PlayerCloudParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FireworkParticles {
        constructor();
    }
    export class $ParticleEngine$MutableSpriteSet implements $SpriteSet {
        get(random: $RandomSource): $TextureAtlasSprite;
        get(particleAge: number, particleMaxAge: number): $TextureAtlasSprite;
        rebind(sprites: $List_<$TextureAtlasSprite>): void;
        sprites: $List<$TextureAtlasSprite>;
    }
    export class $TextureSheetParticle extends $SingleQuadParticle {
        pickSprite(sprite: $SpriteSet): void;
        setSpriteFromAge(sprite: $SpriteSet): void;
        set spriteFromAge(value: $SpriteSet);
    }
    export class $DustColorTransitionParticle$Provider implements $ParticleProvider<$DustColorTransitionOptions> {
        createParticle(type: $DustColorTransitionOptions, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $AttackSweepParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $GlowParticle$WaxOnProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $GlowParticle$GlowSquidProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle$DripHangParticle extends $DripParticle {
    }
    export class $ParticleProvider$Sprite<T extends $ParticleOptions> {
    }
    export interface $ParticleProvider$Sprite<T extends $ParticleOptions> {
        createParticle(type: T, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProvider$Sprite}.
     */
    export type $ParticleProvider$Sprite_<T> = ((arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => $TextureSheetParticle);
    export class $SculkChargeParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
    }
    export class $GlowParticle$ScrapeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedTownParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SnowflakeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FireworkParticles$FlashProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedParticle$CrimsonSporeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle$FallAndLandParticle extends $DripParticle$FallingParticle {
    }
    export class $TerrainParticle$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(type: $BlockParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $BreakingItemParticle$SlimeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $SmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $PlayerCloudParticle extends $TextureSheetParticle {
    }
    export class $FireworkParticles$OverlayParticle extends $TextureSheetParticle {
    }
    export class $GlowParticle$ElectricSparkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SoulParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle$HoneyFallAndLandParticle extends $DripParticle$FallAndLandParticle {
    }
    export class $AttackSweepParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
    }
    export class $WakeParticle extends $TextureSheetParticle {
    }
    export class $HeartParticle extends $TextureSheetParticle {
    }
    export class $ShriekParticle$Provider implements $ParticleProvider<$ShriekParticleOption> {
        createParticle(type: $ShriekParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $ExplodeParticle extends $TextureSheetParticle {
    }
    export class $SculkChargePopParticle$Provider extends $Record implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        sprite(): $SpriteSet;
        constructor(arg0: $SpriteSet);
    }
    /**
     * Values that may be interpreted as {@link $SculkChargePopParticle$Provider}.
     */
    export type $SculkChargePopParticle$Provider_ = { sprite?: $SpriteSet,  } | [sprite?: $SpriteSet, ];
    export class $SuspendedTownParticle$ComposterFillProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $NoRenderParticle extends $Particle {
    }
}
