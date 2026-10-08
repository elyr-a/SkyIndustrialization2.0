import { $Proxy } from "@package/org/apache/maven/repository";
import { $ArtifactRepositoryLayout } from "@package/org/apache/maven/artifact/repository/layout";
import { $Date, $List_, $List } from "@package/java/util";
import { $Artifact } from "@package/org/apache/maven/artifact";
import { $ArtifactMetadata } from "@package/org/apache/maven/artifact/metadata";
export * as layout from "@package/org/apache/maven/artifact/repository/layout";

declare module "@package/org/apache/maven/artifact/repository" {
    export class $ArtifactRepositoryPolicy {
        setEnabled(arg0: boolean): void;
        isEnabled(): boolean;
        merge(arg0: $ArtifactRepositoryPolicy): void;
        setChecksumPolicy(arg0: string): void;
        getChecksumPolicy(): string;
        checkOutOfDate(arg0: $Date): boolean;
        setUpdatePolicy(arg0: string): void;
        getUpdatePolicy(): string;
        static CHECKSUM_POLICY_IGNORE: string;
        static UPDATE_POLICY_DAILY: string;
        static CHECKSUM_POLICY_FAIL: string;
        static UPDATE_POLICY_NEVER: string;
        static CHECKSUM_POLICY_WARN: string;
        static UPDATE_POLICY_INTERVAL: string;
        static UPDATE_POLICY_ALWAYS: string;
        constructor();
        constructor(arg0: boolean, arg1: string, arg2: string);
        constructor(arg0: $ArtifactRepositoryPolicy);
    }
    export class $Authentication {
        setPassword(arg0: string): void;
        getPassword(): string;
        getUsername(): string;
        getPrivateKey(): string;
        setUsername(arg0: string): void;
        setPassphrase(arg0: string): void;
        setPrivateKey(arg0: string): void;
        getPassphrase(): string;
        constructor(arg0: string, arg1: string);
    }
    export class $ArtifactRepository {
    }
    export interface $ArtifactRepository {
        setLayout(arg0: $ArtifactRepositoryLayout): void;
        setId(arg0: string): void;
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        getReleases(): $ArtifactRepositoryPolicy;
        getSnapshots(): $ArtifactRepositoryPolicy;
        isBlocked(): boolean;
        getProxy(): $Proxy;
        setBlocked(arg0: boolean): void;
        /**
         * @deprecated
         */
        isBlacklisted(): boolean;
        getKey(): string;
        find(arg0: $Artifact): $Artifact;
        getId(): string;
        getProtocol(): string;
        getUrl(): string;
        getLayout(): $ArtifactRepositoryLayout;
        setUrl(arg0: string): void;
        findVersions(arg0: $Artifact): $List<string>;
        isProjectAware(): boolean;
        /**
         * @deprecated
         */
        isUniqueVersion(): boolean;
        setAuthentication(arg0: $Authentication): void;
        getAuthentication(): $Authentication;
        /**
         * @deprecated
         */
        setBlacklisted(arg0: boolean): void;
        getMirroredRepositories(): $List<$ArtifactRepository>;
        setReleaseUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        setMirroredRepositories(arg0: $List_<$ArtifactRepository>): void;
        setSnapshotUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        setProxy(arg0: $Proxy): void;
        getBasedir(): string;
        pathOf(arg0: $Artifact): string;
        get releases(): $ArtifactRepositoryPolicy;
        get snapshots(): $ArtifactRepositoryPolicy;
        get key(): string;
        get protocol(): string;
        get projectAware(): boolean;
        get uniqueVersion(): boolean;
        set releaseUpdatePolicy(value: $ArtifactRepositoryPolicy);
        set snapshotUpdatePolicy(value: $ArtifactRepositoryPolicy);
        get basedir(): string;
    }
}
