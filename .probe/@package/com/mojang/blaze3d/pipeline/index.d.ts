import { $ConcurrentLinkedQueue } from "@package/java/util/concurrent";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Blaze3dRenderTargetExt } from "@package/net/irisshaders/iris/targets";
import { $Enum } from "@package/java/lang";

declare module "@package/com/mojang/blaze3d/pipeline" {
    export class $MainTarget$Dimension {
    }
    export class $MainTarget$AttachmentState extends $Enum<$MainTarget$AttachmentState> {
    }
    /**
     * Values that may be interpreted as {@link $MainTarget$AttachmentState}.
     */
    export type $MainTarget$AttachmentState_ = "none" | "color" | "depth" | "color_depth";
    export class $RenderCall {
    }
    export interface $RenderCall {
        execute(): void;
    }
    /**
     * Values that may be interpreted as {@link $RenderCall}.
     */
    export type $RenderCall_ = (() => void);
    export class $RenderTarget implements $Blaze3dRenderTargetExt {
        checkStatus(): void;
        setClearColor(red: number, green: number, blue: number, alpha: number): void;
        blitToScreen(width: number, height: number): void;
        blitToScreen(width: number, height: number, disableBlend: boolean): void;
        unbindWrite(): void;
        destroyBuffers(): void;
        bindWrite(useDepth: boolean): void;
        createBuffers(width: number, height: number, disableBlend: boolean): void;
        copyDepthFrom(otherTarget: $RenderTarget): void;
        getDepthTextureId(): number;
        enableStencil(): void;
        getColorTextureId(): number;
        setFilterMode(filterMode: number): void;
        isStencilEnabled(): boolean;
        iris$getDepthBufferVersion(): number;
        iris$getColorBufferVersion(): number;
        bindRead(): void;
        unbindRead(): void;
        handler$bbd000$sodium$blitToScreen(arg0: number, arg1: number, arg2: boolean, arg3: $CallbackInfo): void;
        clear(useDepth: boolean): void;
        resize(width: number, height: number, disableBlend: boolean): void;
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(useDepth: boolean);
        get depthTextureId(): number;
        get colorTextureId(): number;
        get stencilEnabled(): boolean;
    }
    export class $MainTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        static DEFAULT_HEIGHT: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        static DEFAULT_WIDTH: number;
        height: number;
        constructor(width: number, height: number);
    }
    export class $RenderPipeline {
        recordRenderCall(renderCall: $RenderCall_): void;
        processRecordedQueue(): void;
        beginRecording(): boolean;
        endRecording(): void;
        getRecordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        getProcessedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        endProcessing(): void;
        beginProcessing(): boolean;
        canBeginProcessing(): boolean;
        canBeginRecording(): boolean;
        startRendering(): $ConcurrentLinkedQueue<$RenderCall>;
        constructor();
        get recordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        get processedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
    }
    export class $TextureTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(width: number, height: number, useDepth: boolean, clearError: boolean);
    }
}
