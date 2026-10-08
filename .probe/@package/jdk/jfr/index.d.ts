import { $Annotation } from "@package/java/lang/annotation";
import { $Event as $Event$1 } from "@package/jdk/internal/event";
import { $List_, $Map_, $List } from "@package/java/util";
import { $Object, $Class } from "@package/java/lang";
export * as consumer from "@package/jdk/jfr/consumer";

declare module "@package/jdk/jfr" {
    export class $SettingDescriptor {
        getTypeId(): number;
        getDefaultValue(): string;
        getName(): string;
        getTypeName(): string;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getContentType(): string;
        getDescription(): string;
        getLabel(): string;
        getAnnotationElements(): $List<$AnnotationElement>;
        get typeId(): number;
        get defaultValue(): string;
        get name(): string;
        get typeName(): string;
        get contentType(): string;
        get description(): string;
        get label(): string;
        get annotationElements(): $List<$AnnotationElement>;
    }
    export class $Event extends $Event$1 {
    }
    export class $AnnotationElement {
        getValueDescriptors(): $List<$ValueDescriptor>;
        getValues(): $List<$Object>;
        getTypeId(): number;
        getValue(arg0: string): $Object;
        getTypeName(): string;
        getAnnotation<A>(arg0: $Class<$Annotation>): A;
        hasValue(arg0: string): boolean;
        getAnnotationElements(): $List<$AnnotationElement>;
        constructor(arg0: $Class<$Annotation>);
        constructor(arg0: $Class<$Annotation>, arg1: $Map_<string, $Object>);
        constructor(arg0: $Class<$Annotation>, arg1: $Object);
        get valueDescriptors(): $List<$ValueDescriptor>;
        get values(): $List<$Object>;
        get typeId(): number;
        get typeName(): string;
        get annotationElements(): $List<$AnnotationElement>;
    }
    export class $ValueDescriptor {
        getTypeId(): number;
        getName(): string;
        isArray(): boolean;
        getTypeName(): string;
        getFields(): $List<$ValueDescriptor>;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getContentType(): string;
        getDescription(): string;
        getLabel(): string;
        getAnnotationElements(): $List<$AnnotationElement>;
        constructor(arg0: $Class<never>, arg1: string);
        constructor(arg0: $Class<never>, arg1: string, arg2: $List_<$AnnotationElement>);
        get typeId(): number;
        get name(): string;
        get array(): boolean;
        get typeName(): string;
        get fields(): $List<$ValueDescriptor>;
        get contentType(): string;
        get description(): string;
        get label(): string;
        get annotationElements(): $List<$AnnotationElement>;
    }
    export class $EventType {
        getCategoryNames(): $List<string>;
        getName(): string;
        isEnabled(): boolean;
        getFields(): $List<$ValueDescriptor>;
        getField(arg0: string): $ValueDescriptor;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getId(): number;
        getDescription(): string;
        getSettingDescriptors(): $List<$SettingDescriptor>;
        getLabel(): string;
        getAnnotationElements(): $List<$AnnotationElement>;
        static getEventType(arg0: $Class<$Event>): $EventType;
        get categoryNames(): $List<string>;
        get name(): string;
        get enabled(): boolean;
        get fields(): $List<$ValueDescriptor>;
        get id(): number;
        get description(): string;
        get settingDescriptors(): $List<$SettingDescriptor>;
        get label(): string;
        get annotationElements(): $List<$AnnotationElement>;
    }
}
