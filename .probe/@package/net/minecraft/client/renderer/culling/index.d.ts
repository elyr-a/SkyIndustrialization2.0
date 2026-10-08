import { $ViewportProvider, $Viewport } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/minecraft/client/renderer/culling" {
    export class $Frustum implements $ViewportProvider {
        sodium$createViewport(): $Viewport;
        offsetToFullyIncludeCameraCube(offset: number): $Frustum;
        prepare(camX: number, arg1: number, camY: number): void;
        isVisible(aabb: $AABB_): boolean;
        static OFFSET_STEP: number;
        constructor(frustum: $Matrix4f, projection: $Matrix4f);
        constructor(other: $Frustum);
    }
}
