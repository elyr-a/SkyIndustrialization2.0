import { $Direction } from "@package/net/minecraft/core";
import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
export * as properties from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";

declare module "@package/net/caffeinemc/mods/sodium/client/model/quad" {
    export class $BakedQuadView {
    }
    export interface $BakedQuadView extends $ModelQuadView {
        getFaceNormal(): number;
        getNormalFace(): $ModelQuadFacing;
        hasAO(): boolean;
        hasShade(): boolean;
        get faceNormal(): number;
        get normalFace(): $ModelQuadFacing;
    }
    export class $ModelQuadView {
    }
    export interface $ModelQuadView {
        hasColor(): boolean;
        getColor(arg0: number): number;
        getSprite(): $TextureAtlasSprite;
        getZ(arg0: number): number;
        getX(arg0: number): number;
        getLight(arg0: number): number;
        getFaceNormal(): number;
        getLightFace(): $Direction;
        getColorIndex(): number;
        getAccurateNormal(arg0: number): number;
        getVertexNormal(arg0: number): number;
        calculateNormal(): number;
        getFlags(): number;
        getY(arg0: number): number;
        getTexU(arg0: number): number;
        getTexV(arg0: number): number;
        get sprite(): $TextureAtlasSprite;
        get faceNormal(): number;
        get lightFace(): $Direction;
        get colorIndex(): number;
        get flags(): number;
    }
}
