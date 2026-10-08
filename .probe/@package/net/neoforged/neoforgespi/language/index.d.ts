import { $VersionRange, $ArtifactVersion } from "@package/org/apache/maven/artifact/versioning";
import { $ElementType, $Annotation, $ElementType_ } from "@package/java/lang/annotation";
import { $Stream } from "@package/java/util/stream";
import { $Type } from "@package/org/objectweb/asm";
import { $URL } from "@package/java/net";
import { $Dist_ } from "@package/net/neoforged/api/distmarker";
import { $List, $Map_, $Map, $Set, $Set_, $Collection_ } from "@package/java/util";
import { $ModuleLayer, $Enum, $Record, $Object, $Class } from "@package/java/lang";
import { $ForgeFeature$Bound, $IModFile } from "@package/net/neoforged/neoforgespi/locating";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $IIssueReporting_ } from "@package/net/neoforged/neoforgespi";

declare module "@package/net/neoforged/neoforgespi/language" {
    export class $IModInfo$DependencyType extends $Enum<$IModInfo$DependencyType> {
        static values(): $IModInfo$DependencyType[];
        static valueOf(arg0: string): $IModInfo$DependencyType;
        static OPTIONAL: $IModInfo$DependencyType;
        static DISCOURAGED: $IModInfo$DependencyType;
        static REQUIRED: $IModInfo$DependencyType;
        static INCOMPATIBLE: $IModInfo$DependencyType;
    }
    /**
     * Values that may be interpreted as {@link $IModInfo$DependencyType}.
     */
    export type $IModInfo$DependencyType_ = "required" | "optional" | "incompatible" | "discouraged";
    export class $ModFileScanData {
        getAnnotatedBy(arg0: $Class<$Annotation>, arg1: $ElementType_): $Stream<$ModFileScanData$AnnotationData>;
        addModFileInfo(arg0: $IModFileInfo): void;
        getIModInfoData(): $List<$IModFileInfo>;
        getClasses(): $Set<$ModFileScanData$ClassData>;
        getAnnotations(): $Set<$ModFileScanData$AnnotationData>;
        constructor();
        get IModInfoData(): $List<$IModFileInfo>;
        get classes(): $Set<$ModFileScanData$ClassData>;
        get annotations(): $Set<$ModFileScanData$AnnotationData>;
    }
    export class $IModInfo$Ordering extends $Enum<$IModInfo$Ordering> {
        static values(): $IModInfo$Ordering[];
        static valueOf(arg0: string): $IModInfo$Ordering;
        static BEFORE: $IModInfo$Ordering;
        static AFTER: $IModInfo$Ordering;
        static NONE: $IModInfo$Ordering;
    }
    /**
     * Values that may be interpreted as {@link $IModInfo$Ordering}.
     */
    export type $IModInfo$Ordering_ = "before" | "after" | "none";
    export class $ModFileScanData$ClassData extends $Record {
        clazz(): $Type;
        parent(): $Type;
        interfaces(): $Set<$Type>;
        constructor(clazz: $Type, parent: $Type, interfaces: $Set_<$Type>);
    }
    /**
     * Values that may be interpreted as {@link $ModFileScanData$ClassData}.
     */
    export type $ModFileScanData$ClassData_ = { parent?: $Type, clazz?: $Type, interfaces?: $Set_<$Type>,  } | [parent?: $Type, clazz?: $Type, interfaces?: $Set_<$Type>, ];
    export class $IModInfo$DependencySide extends $Enum<$IModInfo$DependencySide> {
        isCorrectSide(): boolean;
        isContained(arg0: $Dist_): boolean;
        static values(): $IModInfo$DependencySide[];
        static valueOf(arg0: string): $IModInfo$DependencySide;
        static SERVER: $IModInfo$DependencySide;
        static CLIENT: $IModInfo$DependencySide;
        static BOTH: $IModInfo$DependencySide;
        get correctSide(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IModInfo$DependencySide}.
     */
    export type $IModInfo$DependencySide_ = "client" | "server" | "both";
    export class $IModInfo {
        static UNBOUNDED: $VersionRange;
    }
    export interface $IModInfo {
        getNamespace(): string;
        getConfig(): $IConfigurable;
        getModURL(): ($URL) | undefined;
        getOwningFile(): $IModFileInfo;
        getDependencies(): $List<$IModInfo$ModVersion>;
        getLogoFile(): (string) | undefined;
        getForgeFeatures(): $List<$ForgeFeature$Bound>;
        getLogoBlur(): boolean;
        getUpdateURL(): ($URL) | undefined;
        getModProperties(): $Map<string, $Object>;
        getModId(): string;
        getDisplayName(): string;
        getVersion(): $ArtifactVersion;
        getLoader(): $IModLanguageLoader;
        getDescription(): string;
        get namespace(): string;
        get config(): $IConfigurable;
        get modURL(): ($URL) | undefined;
        get owningFile(): $IModFileInfo;
        get dependencies(): $List<$IModInfo$ModVersion>;
        get logoFile(): (string) | undefined;
        get forgeFeatures(): $List<$ForgeFeature$Bound>;
        get logoBlur(): boolean;
        get updateURL(): ($URL) | undefined;
        get modProperties(): $Map<string, $Object>;
        get modId(): string;
        get displayName(): string;
        get version(): $ArtifactVersion;
        get loader(): $IModLanguageLoader;
        get description(): string;
    }
    export class $IModFileInfo {
    }
    export interface $IModFileInfo {
        getConfig(): $IConfigurable;
        versionString(): string;
        showAsDataPack(): boolean;
        getFileProperties(): $Map<string, $Object>;
        usesServices(): $List<string>;
        showAsResourcePack(): boolean;
        getLicense(): string;
        getMods(): $List<$IModInfo>;
        requiredLanguageLoaders(): $List<$IModFileInfo$LanguageSpec>;
        moduleName(): string;
        getFile(): $IModFile;
        get config(): $IConfigurable;
        get fileProperties(): $Map<string, $Object>;
        get license(): string;
        get mods(): $List<$IModInfo>;
        get file(): $IModFile;
    }
    export class $IModLanguageLoader {
    }
    export interface $IModLanguageLoader {
        loadMod(arg0: $IModInfo, arg1: $ModFileScanData, arg2: $ModuleLayer): $ModContainer;
        name(): string;
        version(): string;
        validate(arg0: $IModFile, arg1: $Collection_<$ModContainer>, arg2: $IIssueReporting_): void;
    }
    export class $IConfigurable {
    }
    export interface $IConfigurable {
        getConfigList(...arg0: string[]): $List<$IConfigurable>;
        getConfigElement<T>(...arg0: string[]): (T) | undefined;
    }
    export class $ModFileScanData$AnnotationData extends $Record {
        clazz(): $Type;
        annotationData(): $Map<string, $Object>;
        annotationType(): $Type;
        targetType(): $ElementType;
        memberName(): string;
        constructor(annotationType: $Type, targetType: $ElementType_, clazz: $Type, memberName: string, annotationData: $Map_<string, $Object>);
    }
    /**
     * Values that may be interpreted as {@link $ModFileScanData$AnnotationData}.
     */
    export type $ModFileScanData$AnnotationData_ = { clazz?: $Type, memberName?: string, targetType?: $ElementType_, annotationType?: $Type, annotationData?: $Map_<string, $Object>,  } | [clazz?: $Type, memberName?: string, targetType?: $ElementType_, annotationType?: $Type, annotationData?: $Map_<string, $Object>, ];
    export class $IModInfo$ModVersion {
    }
    export interface $IModInfo$ModVersion {
        getVersionRange(): $VersionRange;
        getOrdering(): $IModInfo$Ordering;
        getReferralURL(): ($URL) | undefined;
        getModId(): string;
        getSide(): $IModInfo$DependencySide;
        getType(): $IModInfo$DependencyType;
        getOwner(): $IModInfo;
        setOwner(arg0: $IModInfo): void;
        getReason(): (string) | undefined;
        get versionRange(): $VersionRange;
        get ordering(): $IModInfo$Ordering;
        get referralURL(): ($URL) | undefined;
        get modId(): string;
        get side(): $IModInfo$DependencySide;
        get type(): $IModInfo$DependencyType;
        get reason(): (string) | undefined;
    }
    export class $IModFileInfo$LanguageSpec extends $Record {
        acceptedVersions(): $VersionRange;
        languageName(): string;
        constructor(languageName: string, acceptedVersions: $VersionRange);
    }
    /**
     * Values that may be interpreted as {@link $IModFileInfo$LanguageSpec}.
     */
    export type $IModFileInfo$LanguageSpec_ = { languageName?: string, acceptedVersions?: $VersionRange,  } | [languageName?: string, acceptedVersions?: $VersionRange, ];
}
