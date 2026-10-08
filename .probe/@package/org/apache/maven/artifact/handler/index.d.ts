
declare module "@package/org/apache/maven/artifact/handler" {
    export class $ArtifactHandler {
        static ROLE: string;
    }
    export interface $ArtifactHandler {
        getClassifier(): string;
        getDirectory(): string;
        getLanguage(): string;
        getExtension(): string;
        getPackaging(): string;
        isAddedToClasspath(): boolean;
        isIncludesDependencies(): boolean;
        get classifier(): string;
        get directory(): string;
        get language(): string;
        get extension(): string;
        get packaging(): string;
        get addedToClasspath(): boolean;
        get includesDependencies(): boolean;
    }
}
