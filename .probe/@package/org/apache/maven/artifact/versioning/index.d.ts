import { $List_, $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $Artifact } from "@package/org/apache/maven/artifact";

declare module "@package/org/apache/maven/artifact/versioning" {
    export class $ArtifactVersion {
    }
    export interface $ArtifactVersion extends $Comparable<$ArtifactVersion> {
        getIncrementalVersion(): number;
        parseVersion(arg0: string): void;
        getBuildNumber(): number;
        getQualifier(): string;
        getMinorVersion(): number;
        getMajorVersion(): number;
        get incrementalVersion(): number;
        get buildNumber(): number;
        get qualifier(): string;
        get minorVersion(): number;
        get majorVersion(): number;
    }
    export class $VersionRange {
        getRecommendedVersion(): $ArtifactVersion;
        isSelectedVersionKnown(arg0: $Artifact): boolean;
        static createFromVersionSpec(arg0: string): $VersionRange;
        restrict(arg0: $VersionRange): $VersionRange;
        /**
         * @deprecated
         */
        cloneOf(): $VersionRange;
        matchVersion(arg0: $List_<$ArtifactVersion>): $ArtifactVersion;
        getRestrictions(): $List<$Restriction>;
        getSelectedVersion(arg0: $Artifact): $ArtifactVersion;
        hasRestrictions(): boolean;
        static createFromVersion(arg0: string): $VersionRange;
        containsVersion(arg0: $ArtifactVersion): boolean;
        get recommendedVersion(): $ArtifactVersion;
        get restrictions(): $List<$Restriction>;
    }
    export class $Restriction {
        isLowerBoundInclusive(): boolean;
        isUpperBoundInclusive(): boolean;
        getUpperBound(): $ArtifactVersion;
        containsVersion(arg0: $ArtifactVersion): boolean;
        getLowerBound(): $ArtifactVersion;
        static EVERYTHING: $Restriction;
        constructor(arg0: $ArtifactVersion, arg1: boolean, arg2: $ArtifactVersion, arg3: boolean);
        get lowerBoundInclusive(): boolean;
        get upperBoundInclusive(): boolean;
        get upperBound(): $ArtifactVersion;
        get lowerBound(): $ArtifactVersion;
    }
}
