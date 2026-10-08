import { $ArtifactRepository } from "@package/org/apache/maven/artifact/repository";
import { $Object } from "@package/java/lang";

declare module "@package/org/apache/maven/repository/legacy/metadata" {
    export class $ArtifactMetadata {
    }
    export interface $ArtifactMetadata {
        storedInArtifactVersionDirectory(): boolean;
        getGroupId(): string;
        getArtifactId(): string;
        merge(arg0: $ArtifactMetadata): void;
        getKey(): $Object;
        getBaseVersion(): string;
        getRemoteFilename(): string;
        getLocalFilename(arg0: $ArtifactRepository): string;
        extendedToString(): string;
        storedInGroupDirectory(): boolean;
        storeInLocalRepository(arg0: $ArtifactRepository, arg1: $ArtifactRepository): void;
        get groupId(): string;
        get artifactId(): string;
        get key(): $Object;
        get baseVersion(): string;
        get remoteFilename(): string;
    }
}
