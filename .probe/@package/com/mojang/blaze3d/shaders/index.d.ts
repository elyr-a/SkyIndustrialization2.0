import { $InputStream } from "@package/java/io";
import { $GlslPreprocessor } from "@package/com/mojang/blaze3d/preprocessor";
import { $Map } from "@package/java/util";
import { $AutoCloseable, $CharSequence, $Enum } from "@package/java/lang";
import { $FloatBuffer, $IntBuffer } from "@package/java/nio";
import { $ProgramTypeAccessor } from "@package/net/irisshaders/iris/mixin";
import { $Matrix4f, $Vector4f, $Matrix3f, $Vector3f } from "@package/org/joml";

declare module "@package/com/mojang/blaze3d/shaders" {
    export class $Effect {
    }
    export interface $Effect extends $Shader {
    }
    export class $Program$Type extends $Enum<$Program$Type> implements $ProgramTypeAccessor {
        getPrograms(): $Map<string, $Program>;
        getName(): string;
        static values(): $Program$Type[];
        static valueOf(arg0: string): $Program$Type;
        getExtension(): string;
        static createProgramType$iris_$md$d6362b$0(arg0: string, arg1: number, arg2: string, arg3: string, arg4: number): $Program$Type;
        static VERTEX: $Program$Type;
        static FRAGMENT: $Program$Type;
        get programs(): $Map<string, $Program>;
        get extension(): string;
    }
    /**
     * Values that may be interpreted as {@link $Program$Type}.
     */
    export type $Program$Type_ = "vertex" | "fragment" | "geometry" | "tess_control" | "tess_eval";
    export class $EffectProgram extends $Program {
        static compileShader(type: $Program$Type_, name: string, shaderData: $InputStream, sourceName: string): $EffectProgram;
        attachToEffect(effect: $Effect): void;
    }
    export class $Program {
        static compileShader(type: $Program$Type_, name: string, shaderData: $InputStream, sourceName: string, preprocessor: $GlslPreprocessor): $Program;
        attachToShader(shader: $Shader): void;
        getName(): string;
        getId(): number;
        close(): void;
        get name(): string;
        get id(): number;
    }
    export class $Uniform extends $AbstractUniform implements $AutoCloseable {
        setLocation(x: number): void;
        static uploadInteger(x: number, y: number): void;
        static getTypeFromString(typeName: string): number;
        getIntBuffer(): $IntBuffer;
        getFloatBuffer(): $FloatBuffer;
        static glBindAttribLocation(program: number, index: number, name: $CharSequence): void;
        static glGetAttribLocation(program: number, name: $CharSequence): number;
        static glGetUniformLocation(program: number, name: $CharSequence): number;
        upload(): void;
        getName(): string;
        getLocation(): number;
        set(index: number, value: number): void;
        getCount(): number;
        close(): void;
        getType(): number;
        static UT_INT4: number;
        static UT_INT3: number;
        static UT_MAT4: number;
        static UT_FLOAT2: number;
        static UT_MAT3: number;
        static UT_FLOAT3: number;
        static UT_MAT2: number;
        static UT_INT2: number;
        static UT_INT1: number;
        static UT_FLOAT1: number;
        static UT_FLOAT4: number;
        constructor(name: string, type: number, count: number, parent: $Shader);
        get intBuffer(): $IntBuffer;
        get floatBuffer(): $FloatBuffer;
        get name(): string;
        get count(): number;
        get type(): number;
    }
    export class $FogShape extends $Enum<$FogShape> {
        static values(): $FogShape[];
        static valueOf(arg0: string): $FogShape;
        getIndex(): number;
        static CYLINDER: $FogShape;
        static SPHERE: $FogShape;
        get index(): number;
    }
    /**
     * Values that may be interpreted as {@link $FogShape}.
     */
    export type $FogShape_ = "sphere" | "cylinder";
    export class $ProgramManager {
        static linkShader(shader: $Shader): void;
        static createProgram(): number;
        static releaseProgram(shader: $Shader): void;
        static glUseProgram(program: number): void;
        constructor();
    }
    export class $Shader {
    }
    export interface $Shader {
        markDirty(): void;
        getFragmentProgram(): $Program;
        getVertexProgram(): $Program;
        attachToProgram(): void;
        getId(): number;
        get fragmentProgram(): $Program;
        get vertexProgram(): $Program;
        get id(): number;
    }
    export class $AbstractUniform {
        setSafe(x: number, y: number, z: number, w: number): void;
        setSafe(x: number, y: number, z: number, w: number): void;
        set(matrix: $Matrix3f): void;
        set(valueArray: number[]): void;
        set(x: number, y: number, z: number, w: number): void;
        set(x: number, y: number, z: number): void;
        set(matrix: $Matrix4f): void;
        set(vector: $Vector3f): void;
        set(vector: $Vector4f): void;
        set(x: number, y: number): void;
        set(x: number): void;
        set(x: number, y: number, z: number): void;
        set(x: number, y: number): void;
        set(x: number): void;
        set(x: number, y: number, z: number, w: number): void;
        setMat2x2(x: number, y: number, z: number, w: number): void;
        setMat2x4(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number): void;
        setMat2x3(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number): void;
        setMat4x2(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number): void;
        setMat3x3(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): void;
        setMat4x3(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number): void;
        setMat3x2(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number): void;
        setMat4x4(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): void;
        setMat3x4(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number): void;
        constructor();
    }
    export class $BlendMode {
        apply(): void;
        isOpaque(): boolean;
        static stringToBlendFunc(factorName: string): number;
        static stringToBlendFactor(factorName: string): number;
        constructor(srcColorFactor: number, dstColorFactor: number, srcAlphaFactor: number, dstAlphaFactor: number, blendFunc: number);
        constructor(srcFactor: number, dstFactor: number, blendFunc: number);
        constructor();
        get opaque(): boolean;
    }
}
