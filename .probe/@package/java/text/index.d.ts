import { $Serializable } from "@package/java/io";
import { $RoundingMode, $RoundingMode_ } from "@package/java/math";
import { $Number, $Enum, $Object, $Cloneable, $StringBuffer } from "@package/java/lang";
import { $TimeZone, $Locale, $Map, $Set, $Date, $Set_, $Calendar, $Currency } from "@package/java/util";

declare module "@package/java/text" {
    export class $DateFormat extends $Format {
        format(arg0: $Date): string;
        format(arg0: $Date, arg1: $StringBuffer, arg2: $FieldPosition): $StringBuffer;
        static getInstance(): $DateFormat;
        parse(arg0: string): $Date;
        parse(arg0: string, arg1: $ParsePosition): $Date;
        getTimeZone(): $TimeZone;
        setTimeZone(arg0: $TimeZone): void;
        static getAvailableLocales(): $Locale[];
        static getDateTimeInstance(arg0: number, arg1: number, arg2: $Locale): $DateFormat;
        static getDateTimeInstance(): $DateFormat;
        static getDateTimeInstance(arg0: number, arg1: number): $DateFormat;
        setLenient(arg0: boolean): void;
        static getDateInstance(arg0: number, arg1: $Locale): $DateFormat;
        static getDateInstance(): $DateFormat;
        static getDateInstance(arg0: number): $DateFormat;
        static getTimeInstance(): $DateFormat;
        static getTimeInstance(arg0: number): $DateFormat;
        static getTimeInstance(arg0: number, arg1: $Locale): $DateFormat;
        setCalendar(arg0: $Calendar): void;
        getCalendar(): $Calendar;
        setNumberFormat(arg0: $NumberFormat): void;
        getNumberFormat(): $NumberFormat;
        isLenient(): boolean;
        static DAY_OF_YEAR_FIELD: number;
        static DATE_FIELD: number;
        static MILLISECOND_FIELD: number;
        static MEDIUM: number;
        static YEAR_FIELD: number;
        static DAY_OF_WEEK_IN_MONTH_FIELD: number;
        static MINUTE_FIELD: number;
        static FULL: number;
        static ERA_FIELD: number;
        static AM_PM_FIELD: number;
        static SHORT: number;
        static HOUR_OF_DAY1_FIELD: number;
        static MONTH_FIELD: number;
        static DAY_OF_WEEK_FIELD: number;
        static WEEK_OF_YEAR_FIELD: number;
        static HOUR1_FIELD: number;
        static HOUR_OF_DAY0_FIELD: number;
        static WEEK_OF_MONTH_FIELD: number;
        static TIMEZONE_FIELD: number;
        static HOUR0_FIELD: number;
        static DEFAULT: number;
        static SECOND_FIELD: number;
        static LONG: number;
        static get instance(): $DateFormat;
        static get availableLocales(): $Locale[];
    }
    export class $NumberFormat extends $Format {
        format(arg0: number, arg1: $StringBuffer, arg2: $FieldPosition): $StringBuffer;
        format(arg0: number, arg1: $StringBuffer, arg2: $FieldPosition): $StringBuffer;
        format(arg0: number): string;
        format(arg0: number): string;
        static getInstance(): $NumberFormat;
        static getInstance(arg0: $Locale): $NumberFormat;
        parse(arg0: string): $Number;
        parse(arg0: string, arg1: $ParsePosition): $Number;
        static getAvailableLocales(): $Locale[];
        getRoundingMode(): $RoundingMode;
        static getIntegerInstance(): $NumberFormat;
        static getIntegerInstance(arg0: $Locale): $NumberFormat;
        setGroupingUsed(arg0: boolean): void;
        setMinimumIntegerDigits(arg0: number): void;
        setMaximumIntegerDigits(arg0: number): void;
        isParseIntegerOnly(): boolean;
        setParseIntegerOnly(arg0: boolean): void;
        getMaximumIntegerDigits(): number;
        getMinimumIntegerDigits(): number;
        getMaximumFractionDigits(): number;
        setMaximumFractionDigits(arg0: number): void;
        getMinimumFractionDigits(): number;
        setMinimumFractionDigits(arg0: number): void;
        getCurrency(): $Currency;
        setCurrency(arg0: $Currency): void;
        setRoundingMode(arg0: $RoundingMode_): void;
        static getCurrencyInstance(arg0: $Locale): $NumberFormat;
        static getCurrencyInstance(): $NumberFormat;
        static getPercentInstance(): $NumberFormat;
        static getPercentInstance(arg0: $Locale): $NumberFormat;
        static getCompactNumberInstance(arg0: $Locale, arg1: $NumberFormat$Style_): $NumberFormat;
        static getCompactNumberInstance(): $NumberFormat;
        static getNumberInstance(arg0: $Locale): $NumberFormat;
        static getNumberInstance(): $NumberFormat;
        isGroupingUsed(): boolean;
        static FRACTION_FIELD: number;
        static INTEGER_FIELD: number;
        static get availableLocales(): $Locale[];
    }
    export class $AttributedCharacterIterator$Attribute implements $Serializable {
        static LANGUAGE: $AttributedCharacterIterator$Attribute;
        static INPUT_METHOD_SEGMENT: $AttributedCharacterIterator$Attribute;
        static READING: $AttributedCharacterIterator$Attribute;
    }
    export class $AttributedCharacterIterator {
    }
    export interface $AttributedCharacterIterator extends $CharacterIterator {
        getRunLimit(): number;
        getRunLimit(arg0: $Set_<$AttributedCharacterIterator$Attribute>): number;
        getRunLimit(arg0: $AttributedCharacterIterator$Attribute): number;
        getRunStart(): number;
        getRunStart(arg0: $Set_<$AttributedCharacterIterator$Attribute>): number;
        getRunStart(arg0: $AttributedCharacterIterator$Attribute): number;
        getAttributes(): $Map<$AttributedCharacterIterator$Attribute, $Object>;
        getAttribute(arg0: $AttributedCharacterIterator$Attribute): $Object;
        getAllAttributeKeys(): $Set<$AttributedCharacterIterator$Attribute>;
        get attributes(): $Map<$AttributedCharacterIterator$Attribute, $Object>;
        get allAttributeKeys(): $Set<$AttributedCharacterIterator$Attribute>;
    }
    export class $SimpleDateFormat extends $DateFormat {
        set2DigitYearStart(arg0: $Date): void;
        get2DigitYearStart(): $Date;
        toLocalizedPattern(): string;
        applyPattern(arg0: string): void;
        applyLocalizedPattern(arg0: string): void;
        getDateFormatSymbols(): $DateFormatSymbols;
        setDateFormatSymbols(arg0: $DateFormatSymbols): void;
        toPattern(): string;
        static DAY_OF_YEAR_FIELD: number;
        static DATE_FIELD: number;
        static MILLISECOND_FIELD: number;
        static MEDIUM: number;
        static YEAR_FIELD: number;
        static DAY_OF_WEEK_IN_MONTH_FIELD: number;
        static MINUTE_FIELD: number;
        static FULL: number;
        static ERA_FIELD: number;
        static AM_PM_FIELD: number;
        static SHORT: number;
        static HOUR_OF_DAY1_FIELD: number;
        static MONTH_FIELD: number;
        static DAY_OF_WEEK_FIELD: number;
        static WEEK_OF_YEAR_FIELD: number;
        static HOUR1_FIELD: number;
        static HOUR_OF_DAY0_FIELD: number;
        static WEEK_OF_MONTH_FIELD: number;
        static TIMEZONE_FIELD: number;
        static HOUR0_FIELD: number;
        static DEFAULT: number;
        static SECOND_FIELD: number;
        static LONG: number;
        constructor(arg0: string, arg1: $DateFormatSymbols);
        constructor(arg0: string, arg1: $Locale);
        constructor(arg0: string);
        constructor();
    }
    export class $CharacterIterator {
        static DONE: string;
    }
    export interface $CharacterIterator extends $Cloneable {
        setIndex(arg0: number): string;
        clone(): $Object;
        next(): string;
        last(): string;
        first(): string;
        current(): string;
        getIndex(): number;
        previous(): string;
        getBeginIndex(): number;
        getEndIndex(): number;
        get beginIndex(): number;
        get endIndex(): number;
    }
    export class $MessageFormat extends $Format {
        setFormats(arg0: $Format[]): void;
        getFormatsByArgumentIndex(): $Format[];
        static format(arg0: string, ...arg1: $Object[]): string;
        format(arg0: $Object[], arg1: $StringBuffer, arg2: $FieldPosition): $StringBuffer;
        parse(arg0: string, arg1: $ParsePosition): $Object[];
        parse(arg0: string): $Object[];
        setFormat(arg0: number, arg1: $Format): void;
        applyPattern(arg0: string): void;
        toPattern(): string;
        setLocale(arg0: $Locale): void;
        getFormats(): $Format[];
        getLocale(): $Locale;
        setFormatsByArgumentIndex(arg0: $Format[]): void;
        setFormatByArgumentIndex(arg0: number, arg1: $Format): void;
        constructor(arg0: string);
        constructor(arg0: string, arg1: $Locale);
    }
    export class $DecimalFormatSymbols implements $Cloneable, $Serializable {
        clone(): $Object;
        static getInstance(arg0: $Locale): $DecimalFormatSymbols;
        static getInstance(): $DecimalFormatSymbols;
        static getAvailableLocales(): $Locale[];
        getMinusSign(): string;
        getZeroDigit(): string;
        getCurrency(): $Currency;
        setCurrency(arg0: $Currency): void;
        getInternationalCurrencySymbol(): string;
        getCurrencySymbol(): string;
        setZeroDigit(arg0: string): void;
        setGroupingSeparator(arg0: string): void;
        setDecimalSeparator(arg0: string): void;
        getPerMill(): string;
        setPerMill(arg0: string): void;
        getPercent(): string;
        setPercent(arg0: string): void;
        getDigit(): string;
        setDigit(arg0: string): void;
        getPatternSeparator(): string;
        setPatternSeparator(arg0: string): void;
        getInfinity(): string;
        setInfinity(arg0: string): void;
        getNaN(): string;
        setNaN(arg0: string): void;
        setMinusSign(arg0: string): void;
        setCurrencySymbol(arg0: string): void;
        setInternationalCurrencySymbol(arg0: string): void;
        getMonetaryDecimalSeparator(): string;
        setMonetaryDecimalSeparator(arg0: string): void;
        getExponentSeparator(): string;
        setExponentSeparator(arg0: string): void;
        getMonetaryGroupingSeparator(): string;
        setMonetaryGroupingSeparator(arg0: string): void;
        getLocale(): $Locale;
        getDecimalSeparator(): string;
        getGroupingSeparator(): string;
        constructor();
        constructor(arg0: $Locale);
        static get availableLocales(): $Locale[];
        get locale(): $Locale;
    }
    export class $Format$Field extends $AttributedCharacterIterator$Attribute {
        static LANGUAGE: $AttributedCharacterIterator$Attribute;
        static INPUT_METHOD_SEGMENT: $AttributedCharacterIterator$Attribute;
        static READING: $AttributedCharacterIterator$Attribute;
    }
    export class $DateFormatSymbols implements $Serializable, $Cloneable {
        clone(): $Object;
        static getInstance(): $DateFormatSymbols;
        static getInstance(arg0: $Locale): $DateFormatSymbols;
        getZoneStrings(): string[][];
        static getAvailableLocales(): $Locale[];
        getLocalPatternChars(): string;
        getEras(): string[];
        setEras(arg0: string[]): void;
        getMonths(): string[];
        getShortMonths(): string[];
        getWeekdays(): string[];
        getShortWeekdays(): string[];
        getAmPmStrings(): string[];
        setMonths(arg0: string[]): void;
        setShortMonths(arg0: string[]): void;
        setWeekdays(arg0: string[]): void;
        setShortWeekdays(arg0: string[]): void;
        setAmPmStrings(arg0: string[]): void;
        setZoneStrings(arg0: string[][]): void;
        setLocalPatternChars(arg0: string): void;
        constructor(arg0: $Locale);
        constructor();
        static get availableLocales(): $Locale[];
    }
    export class $DecimalFormat extends $NumberFormat {
        toLocalizedPattern(): string;
        applyPattern(arg0: string): void;
        applyLocalizedPattern(arg0: string): void;
        getDecimalFormatSymbols(): $DecimalFormatSymbols;
        toPattern(): string;
        setDecimalSeparatorAlwaysShown(arg0: boolean): void;
        isParseBigDecimal(): boolean;
        setDecimalFormatSymbols(arg0: $DecimalFormatSymbols): void;
        getPositivePrefix(): string;
        setPositivePrefix(arg0: string): void;
        getNegativePrefix(): string;
        setNegativePrefix(arg0: string): void;
        getPositiveSuffix(): string;
        setPositiveSuffix(arg0: string): void;
        getNegativeSuffix(): string;
        setNegativeSuffix(arg0: string): void;
        getMultiplier(): number;
        setMultiplier(arg0: number): void;
        setGroupingSize(arg0: number): void;
        isDecimalSeparatorAlwaysShown(): boolean;
        setParseBigDecimal(arg0: boolean): void;
        getGroupingSize(): number;
        static FRACTION_FIELD: number;
        static INTEGER_FIELD: number;
        constructor(arg0: string, arg1: $DecimalFormatSymbols);
        constructor(arg0: string);
        constructor();
    }
    export class $FieldPosition {
        getField(): number;
        setBeginIndex(arg0: number): void;
        setEndIndex(arg0: number): void;
        getFieldAttribute(): $Format$Field;
        getBeginIndex(): number;
        getEndIndex(): number;
        constructor(arg0: $Format$Field, arg1: number);
        constructor(arg0: $Format$Field);
        constructor(arg0: number);
        get field(): number;
        get fieldAttribute(): $Format$Field;
    }
    export class $NumberFormat$Style extends $Enum<$NumberFormat$Style> {
        static values(): $NumberFormat$Style[];
        static valueOf(arg0: string): $NumberFormat$Style;
        static SHORT: $NumberFormat$Style;
        static LONG: $NumberFormat$Style;
    }
    /**
     * Values that may be interpreted as {@link $NumberFormat$Style}.
     */
    export type $NumberFormat$Style_ = "short" | "long";
    export class $ParsePosition {
        setIndex(arg0: number): void;
        setErrorIndex(arg0: number): void;
        getIndex(): number;
        getErrorIndex(): number;
        constructor(arg0: number);
    }
    export class $Format implements $Serializable, $Cloneable {
        clone(): $Object;
        format(arg0: $Object, arg1: $StringBuffer, arg2: $FieldPosition): $StringBuffer;
        format(arg0: $Object): string;
        parseObject(arg0: string): $Object;
        parseObject(arg0: string, arg1: $ParsePosition): $Object;
        formatToCharacterIterator(arg0: $Object): $AttributedCharacterIterator;
    }
}
