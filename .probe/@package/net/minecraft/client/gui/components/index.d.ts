import { $MultilineTextFieldAccess } from "@package/dev/ftb/mods/ftblibrary/core/mixin/common";
import { $OptionInstance, $GuiMessageTag, $OptionInstance$TooltipSupplier_, $Minecraft, $GuiMessage_, $GuiMessageTag_ } from "@package/net/minecraft/client";
import { $UUID_, $OptionalInt, $List, $Collection_, $List_, $AbstractList } from "@package/java/util";
import { $CheckboxAccessor, $ImageButtonAccessor } from "@package/net/blay09/mods/balm/mixin";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";
import { $FormattedCharSequence, $FormattedCharSequence_, $ArrayListDeque } from "@package/net/minecraft/util";
import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $Supplier_, $Consumer_, $Predicate_, $Predicate, $Consumer, $Function_, $BooleanSupplier, $BiFunction_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $BossEvent, $BossEvent$BossBarOverlay_, $BossEvent$BossBarColor_ } from "@package/net/minecraft/world";
import { $SoundManager, $WeighedSoundEvents, $SoundEventListener } from "@package/net/minecraft/client/sounds";
import { $Tab, $TabManager } from "@package/net/minecraft/client/gui/components/tabs";
import { $IAbstractWidgetExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Enum, $Iterable, $Record, $Runnable_ } from "@package/java/lang";
import { $HeaderAndFooterLayout, $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry$NarrationPriority, $NarrationElementOutput, $NarratableEntry, $NarrationSupplier } from "@package/net/minecraft/client/gui/narration";
import { $MessageSignature_, $MutableComponent, $Component_, $FormattedText, $MutableComponent_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $ScreenRectangle_, $FocusNavigationEvent_, $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $ClientboundBossEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $Duration_ } from "@package/java/time";
import { $LocalSampleLogger, $RemoteDebugSampleType_ } from "@package/net/minecraft/util/debugchart";
import { $AccessEditBox } from "@package/com/blamejared/searchables/mixin";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $PlayerSkin, $PlayerSkin_ } from "@package/net/minecraft/client/resources";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Scoreboard, $Objective } from "@package/net/minecraft/world/scores";
import { $Gui, $Font, $ComponentPath, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $GuiEventListener, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
export * as toasts from "@package/net/minecraft/client/gui/components/toasts";
export * as debugchart from "@package/net/minecraft/client/gui/components/debugchart";
export * as tabs from "@package/net/minecraft/client/gui/components/tabs";
export * as events from "@package/net/minecraft/client/gui/components/events";
export * as spectator from "@package/net/minecraft/client/gui/components/spectator";

declare module "@package/net/minecraft/client/gui/components" {
    export class $MultiLineTextWidget$CacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MultiLineTextWidget$CacheKey}.
     */
    export type $MultiLineTextWidget$CacheKey_ = { maxWidth?: number, message?: $Component_, maxRows?: $OptionalInt,  } | [maxWidth?: number, message?: $Component_, maxRows?: $OptionalInt, ];
    export class $DebugScreenOverlay {
        render(guiGraphics: $GuiGraphics): void;
        showProfilerChart(): boolean;
        showDebugScreen(): boolean;
        logFrameDuration(frameDuration: number): void;
        toggleProfilerChart(): void;
        toggleNetworkCharts(): void;
        toggleFpsCharts(): void;
        toggleOverlay(): void;
        getTickTimeLogger(): $LocalSampleLogger;
        showFpsCharts(): boolean;
        showNetworkCharts(): boolean;
        getPingLogger(): $LocalSampleLogger;
        getBandwidthLogger(): $LocalSampleLogger;
        clearChunkCache(): void;
        logRemoteSample(sample: number[], sampleType: $RemoteDebugSampleType_): void;
        reset(): void;
        constructor(minecraft: $Minecraft);
        get tickTimeLogger(): $LocalSampleLogger;
        get pingLogger(): $LocalSampleLogger;
        get bandwidthLogger(): $LocalSampleLogger;
    }
    export class $Tooltip implements $NarrationSupplier {
        static splitTooltip(minecraft: $Minecraft, message: $Component_): $List<$FormattedCharSequence>;
        /**
         * Updates the narration output with the current narration information.
         */
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        toCharSequence(minecraft: $Minecraft): $List<$FormattedCharSequence>;
        static create(message: $Component_, narration: $Component_ | null): $Tooltip;
        static create(message: $Component_): $Tooltip;
    }
    export class $PopupScreen extends $Screen {
        static MENU_BACKGROUND: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
    }
    export class $CommonButtons {
        static accessibility(width: number, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton;
        static language(width: number, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton;
        constructor();
    }
    export class $WidgetTooltipHolder {
        setDelay(delay: $Duration_): void;
        updateNarration(output: $NarrationElementOutput): void;
        refreshTooltipForNextRenderPass(hovering: boolean, focused: boolean, screenRectangle: $ScreenRectangle_): void;
        get(): $Tooltip;
        set(tooltip: $Tooltip | null): void;
        constructor();
        set delay(value: $Duration_);
    }
    export class $PopupScreen$ButtonOption extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PopupScreen$ButtonOption}.
     */
    export type $PopupScreen$ButtonOption_ = { message?: $Component_, action?: $Consumer_<$PopupScreen>,  } | [message?: $Component_, action?: $Consumer_<$PopupScreen>, ];
    export class $DebugScreenOverlay$AllocationRateCalculator {
    }
    export class $MultilineTextField$StringView extends $Record {
        beginIndex(): number;
        endIndex(): number;
    }
    /**
     * Values that may be interpreted as {@link $MultilineTextField$StringView}.
     */
    export type $MultilineTextField$StringView_ = { endIndex?: number, beginIndex?: number,  } | [endIndex?: number, beginIndex?: number, ];
    export class $EditBox extends $AbstractWidget implements $Renderable, $AccessEditBox {
        /**
         * Returns the current position of the cursor.
         */
        getCursorPosition(): number;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        insertText(textToWrite: string): void;
        setBordered(select: boolean): void;
        setResponder(responder: $Consumer_<string>): void;
        setCanLoseFocus(select: boolean): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setMaxLength(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColor(num: number): void;
        setVisible(select: boolean): void;
        setHint(hint: $Component_): void;
        setTextShadow(select: boolean): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        canConsumeInput(): boolean;
        moveCursorToEnd(select: boolean): void;
        getWordPosition(delta: number): number;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteCharsToPos(num: number): void;
        moveCursorToStart(select: boolean): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setCursorPosition(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteChars(num: number): void;
        moveCursorTo(delta: number, select: boolean): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteWords(num: number): void;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        moveCursor(delta: number, select: boolean): void;
        setEditable(select: boolean): void;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getValue(): string;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setValue(textToWrite: string): void;
        setFormatter(textFormatter: $BiFunction_<string, number, $FormattedCharSequence>): void;
        setFilter(validator: $Predicate_<string>): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isVisible(): boolean;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setSuggestion(textToWrite: string | null): void;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getHighlighted(): string;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getTextShadow(): boolean;
        /**
         * Returns the current position of the cursor.
         */
        getInnerWidth(): number;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setHighlightPos(num: number): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isBordered(): boolean;
        getScreenX(delta: number): number;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColorUneditable(num: number): void;
        searchables$getResponder(): $Consumer<string>;
        searchables$getFilter(): $Predicate<string>;
        static SPRITES: $WidgetSprites;
        canLoseFocus: boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        static BACKWARDS: number;
        x: number;
        y: number;
        active: boolean;
        static FORWARDS: number;
        static DEFAULT_TEXT_COLOR: number;
        constructor(font: $Font, width: number, height: number, message: $Component_);
        constructor(font: $Font, x: number, y: number, width: number, height: number, editBox: $EditBox | null, message: $Component_);
        constructor(font: $Font, x: number, y: number, width: number, height: number, message: $Component_);
        set responder(value: $Consumer_<string>);
        set maxLength(value: number);
        set textColor(value: number);
        set hint(value: $Component_);
        set editable(value: boolean);
        set formatter(value: $BiFunction_<string, number, $FormattedCharSequence>);
        set filter(value: $Predicate_<string>);
        set suggestion(value: string | null);
        get highlighted(): string;
        get innerWidth(): number;
        set highlightPos(value: number);
        set textColorUneditable(value: number);
    }
    export class $TabButton extends $AbstractWidget {
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isSelected(): boolean;
        renderString(guiGraphics: $GuiGraphics, font: $Font, color: number): void;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        tab(): $Tab;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
        constructor(tabManager: $TabManager, tab: $Tab, width: number, height: number);
        get selected(): boolean;
    }
    export class $StringWidget extends $AbstractStringWidget {
        alignLeft(): $StringWidget;
        alignCenter(): $StringWidget;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        setColor(color: number): $StringWidget;
        alignRight(): $StringWidget;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
        constructor(message: $Component_, font: $Font);
        constructor(width: number, height: number, message: $Component_, font: $Font);
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        set color(value: number);
    }
    export class $SubtitleOverlay$Subtitle {
    }
    export class $SplashRenderer {
        render(guiGraphics: $GuiGraphics, screenWidth: number, font: $Font, color: number): void;
        static CHRISTMAS: $SplashRenderer;
        static HALLOWEEN: $SplashRenderer;
        static NEW_YEAR: $SplashRenderer;
        constructor(splash: string);
    }
    export class $AbstractScrollWidget extends $AbstractWidget implements $Renderable, $GuiEventListener {
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        scrollbarWidth(): number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
    }
    export class $Button extends $AbstractButton {
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        static builder(message: $Component_, onPress: $Button$OnPress_): $Button$Builder;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        active: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_WIDTH: number;
        static DEFAULT_SPACING: number;
    }
    export class $SpriteIconButton$CenteredIcon extends $SpriteIconButton {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        active: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_WIDTH: number;
        static DEFAULT_SPACING: number;
    }
    export class $CycleButton$Builder<T> {
        withValues(values: $CycleButton$ValueListSupplier<T>): $CycleButton$Builder<T>;
        withValues(defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$Builder<T>;
        withValues(...values: T[]): $CycleButton$Builder<T>;
        withValues(altListSelector: $BooleanSupplier_, defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$Builder<T>;
        withValues(values: $Collection_<T>): $CycleButton$Builder<T>;
        withTooltip(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>): $CycleButton$Builder<T>;
        withInitialValue(initialValue: T): $CycleButton$Builder<T>;
        displayOnlyValue(): $CycleButton$Builder<T>;
        create(x: number, y: number, width: number, height: number, name: $Component_, onValueChange: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        create(x: number, y: number, width: number, height: number, name: $Component_): $CycleButton<T>;
        create(message: $Component_, onValueChange: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        withCustomNarration(narrationProvider: $Function_<$CycleButton<T>, $MutableComponent>): $CycleButton$Builder<T>;
        constructor(valueStringifier: $Function_<T, $Component>);
    }
    export class $Checkbox$OnValueChange {
        static NOP: $Checkbox$OnValueChange;
    }
    export interface $Checkbox$OnValueChange {
        onValueChange(checkbox: $Checkbox, value: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $Checkbox$OnValueChange}.
     */
    export type $Checkbox$OnValueChange_ = ((arg0: $Checkbox, arg1: boolean) => void);
    export class $FocusableTextWidget extends $MultiLineTextWidget {
        containWithin(width: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
        constructor(maxWidth: number, message: $Component_, font: $Font);
        constructor(maxWidth: number, message: $Component_, font: $Font, alwaysShowBorder: boolean, padding: number);
        constructor(maxWidth: number, message: $Component_, font: $Font, padding: number);
    }
    export class $CycleButton<T> extends $AbstractButton {
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        static booleanBuilder(componentOn: $Component_, componentOff: $Component_): $CycleButton$Builder<boolean>;
        static onOffBuilder(initialValue: boolean): $CycleButton$Builder<boolean>;
        static onOffBuilder(): $CycleButton$Builder<boolean>;
        createDefaultNarrationMessage(): $MutableComponent;
        getValue(): T;
        static builder<T>(valueStringifier: $Function_<T, $Component>): $CycleButton$Builder<T>;
        setValue(value: T): void;
        static DEFAULT_ALT_LIST_SELECTOR: $BooleanSupplier;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        onValueChange: $CycleButton$OnValueChange<T>;
        x: number;
        y: number;
        active: boolean;
    }
    export class $Whence extends $Enum<$Whence> {
        static values(): $Whence[];
        static valueOf(arg0: string): $Whence;
        static ABSOLUTE: $Whence;
        static RELATIVE: $Whence;
        static END: $Whence;
    }
    /**
     * Values that may be interpreted as {@link $Whence}.
     */
    export type $Whence_ = "absolute" | "relative" | "end";
    export class $Button$Builder {
        createNarration(createNarration: $Button$CreateNarration_): $Button$Builder;
        tooltip(tooltip: $Tooltip | null): $Button$Builder;
        size(x: number, y: number): $Button$Builder;
        bounds(x: number, y: number, width: number, height: number): $Button$Builder;
        pos(x: number, y: number): $Button$Builder;
        build(arg0: $Function_<$Button$Builder, $Button>): $Button;
        build(): $Button;
        width(width: number): $Button$Builder;
        constructor(message: $Component_, onPress: $Button$OnPress_);
    }
    export class $FittingMultiLineTextWidget extends $AbstractScrollWidget {
        setColor(color: number): $FittingMultiLineTextWidget;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        showingScrollBar(): boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        set color(value: number);
    }
    export class $Button$OnPress {
    }
    export interface $Button$OnPress {
        onPress(button: $Button): void;
    }
    /**
     * Values that may be interpreted as {@link $Button$OnPress}.
     */
    export type $Button$OnPress_ = ((arg0: $Button) => void);
    export class $MultiLineLabel {
        static create(font: $Font, maxWidth: number, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, maxWidth: number, maxRows: number, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, component: $Component_, maxWidth: number): $MultiLineLabel;
        static EMPTY: $MultiLineLabel;
    }
    export interface $MultiLineLabel {
        getLineCount(): number;
        renderCentered(guiGraphics: $GuiGraphics, x: number, y: number): void;
        renderCentered(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): void;
        getWidth(): number;
        renderLeftAligned(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): void;
        renderLeftAlignedNoShadow(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): number;
        get lineCount(): number;
        get width(): number;
    }
    export class $CommandSuggestions$SuggestionsList {
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        mouseClicked(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseScrolled(delta: number): boolean;
        cycle(change: number): void;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        select(change: number): void;
        useSuggestion(): void;
    }
    export class $LogoRenderer {
        renderLogo(guiGraphics: $GuiGraphics, screenWidth: number, transparency: number, height: number): void;
        renderLogo(guiGraphics: $GuiGraphics, screenWidth: number, transparency: number): void;
        static EASTER_EGG_LOGO: $ResourceLocation;
        static DEFAULT_HEIGHT_OFFSET: number;
        static LOGO_WIDTH: number;
        static LOGO_TEXTURE_WIDTH: number;
        static LOGO_HEIGHT: number;
        static MINECRAFT_LOGO: $ResourceLocation;
        static LOGO_TEXTURE_HEIGHT: number;
        static MINECRAFT_EDITION: $ResourceLocation;
        constructor(keepLogoThroughFade: boolean);
    }
    export class $AbstractOptionSliderButton extends $AbstractSliderButton {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
    }
    export class $ImageWidget extends $AbstractWidget {
        static sprite(width: number, height: number, sprite: $ResourceLocation_): $ImageWidget;
        static texture(width: number, height: number, texture: $ResourceLocation_, textureWidth: number, textureHeight: number): $ImageWidget;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
    }
    export class $ObjectSelectionList<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
        updateWidgetNarration(arg0: $NarrationElementOutput): void;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        x: number;
        y: number;
        active: boolean;
        hovered: E;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $Checkbox$Builder {
        selected(option: $OptionInstance<boolean>): $Checkbox$Builder;
        selected(selected: boolean): $Checkbox$Builder;
        maxWidth(maxWidth: number): $Checkbox$Builder;
        tooltip(tooltip: $Tooltip): $Checkbox$Builder;
        onValueChange(onValueChange: $Checkbox$OnValueChange_): $Checkbox$Builder;
        pos(x: number, y: number): $Checkbox$Builder;
        build(): $Checkbox;
    }
    export class $BossHealthOverlay {
        render(guiGraphics: $GuiGraphics): void;
        shouldPlayMusic(): boolean;
        shouldCreateWorldFog(): boolean;
        shouldDarkenScreen(): boolean;
        reset(): void;
        update(packet: $ClientboundBossEventPacket): void;
        constructor(minecraft: $Minecraft);
    }
    export class $CycleButton$ValueListSupplier<T> {
        static create<T>(altListSelector: $BooleanSupplier_, defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$ValueListSupplier<T>;
        static create<T>(values: $Collection_<T>): $CycleButton$ValueListSupplier<T>;
    }
    export interface $CycleButton$ValueListSupplier<T> {
        getSelectedList(): $List<T>;
        getDefaultList(): $List<T>;
        get selectedList(): $List<T>;
        get defaultList(): $List<T>;
    }
    export class $AbstractStringWidget extends $AbstractWidget {
        setColor(color: number): $AbstractStringWidget;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        set color(value: number);
    }
    export class $PlayerTabOverlay$ScoreDisplayEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerTabOverlay$ScoreDisplayEntry}.
     */
    export type $PlayerTabOverlay$ScoreDisplayEntry_ = { formattedScore?: $Component_, scoreWidth?: number, name?: $Component_, score?: number,  } | [formattedScore?: $Component_, scoreWidth?: number, name?: $Component_, score?: number, ];
    export class $AbstractSelectionList$Entry<E extends $AbstractSelectionList$Entry<E>> implements $GuiEventListener {
        render(guiGraphics: $GuiGraphics, index: number, top: number, left: number, width: number, height: number, mouseX: number, mouseY: number, hovering: boolean, partialTick: number): void;
        /**
         * Checks if the given mouse coordinates are over the GUI element.
         * 
         * @return `true` if the mouse is over the GUI element, `false` otherwise.
         */
        isMouseOver(mouseX: number, arg1: number): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isFocused(): boolean;
        renderBack(guiGraphics: $GuiGraphics, index: number, top: number, left: number, width: number, height: number, mouseX: number, mouseY: number, hovering: boolean, partialTick: number): void;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        /**
         * Called when a mouse button is released within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when a mouse button is released within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        /**
         * Called when the mouse is moved within the GUI element.
         */
        mouseMoved(mouseX: number, arg1: number): void;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        get rectangle(): $ScreenRectangle;
        get currentFocusPath(): $ComponentPath;
        get tabOrderGroup(): number;
    }
    export class $AbstractSelectionList$TrackedList extends $AbstractList<E> {
    }
    export class $ImageWidget$Texture extends $ImageWidget {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
    }
    export class $SpriteIconButton extends $Button {
        static builder(message: $Component_, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton$Builder;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        active: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_WIDTH: number;
        static DEFAULT_SPACING: number;
    }
    export class $CycleButton$OnValueChange<T> {
    }
    export interface $CycleButton$OnValueChange<T> {
        onValueChange(cycleButton: $CycleButton<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CycleButton$OnValueChange}.
     */
    export type $CycleButton$OnValueChange_<T> = ((arg0: $CycleButton<T>, arg1: T) => void);
    export class $LockIconButton$Icon extends $Enum<$LockIconButton$Icon> {
    }
    /**
     * Values that may be interpreted as {@link $LockIconButton$Icon}.
     */
    export type $LockIconButton$Icon_ = "locked" | "locked_hover" | "locked_disabled" | "unlocked" | "unlocked_hover" | "unlocked_disabled";
    export class $AbstractSelectionList<E extends $AbstractSelectionList$Entry<E>> extends $AbstractContainerWidget {
        /**
         * Gets the focused GUI element.
         */
        getSelected(): E;
        setScrollAmount(scroll: number): void;
        setSelected(entry: E | null): void;
        updateSize(width: number, layout: $HeaderAndFooterLayout): void;
        /**
         * Gets the focused GUI element.
         */
        getFocused(): E;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowWidth(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowRight(): number;
        getScrollAmount(): number;
        updateSizeAndPosition(width: number, height: number, y: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowLeft(): number;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        clampScrollAmount(): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getMaxScroll(): number;
        /**
         * Gets the focused GUI element.
         */
        getFirstElement(): E;
        setClampedScrollAmount(scroll: number): void;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        x: number;
        y: number;
        active: boolean;
        hovered: E;
        constructor(minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
        get focused(): E;
        get rowWidth(): number;
        get rowRight(): number;
        get rowLeft(): number;
        get maxScroll(): number;
        get firstElement(): E;
        set clampedScrollAmount(value: number);
    }
    export class $SpriteIconButton$TextAndIcon extends $SpriteIconButton {
        renderWidget(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        active: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_WIDTH: number;
        static DEFAULT_SPACING: number;
    }
    export class $ContainerObjectSelectionList<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        x: number;
        y: number;
        active: boolean;
        hovered: E;
        constructor(minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
    }
    export class $ChatComponent$DelayedMessageDeletion extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatComponent$DelayedMessageDeletion}.
     */
    export type $ChatComponent$DelayedMessageDeletion_ = { deletableAfter?: number, signature?: $MessageSignature_,  } | [deletableAfter?: number, signature?: $MessageSignature_, ];
    export class $AbstractContainerWidget extends $AbstractWidget implements $ContainerEventHandler {
        setDragging(arg0: boolean): void;
        isDragging(): boolean;
        getFocused(): $GuiEventListener;
        setFocused(arg0: $GuiEventListener | null): void;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $LerpingBossEvent extends $BossEvent {
        constructor(id: $UUID_, name: $Component_, progress: number, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_, darkenScreen: boolean, bossMusic: boolean, worldFog: boolean);
    }
    export class $AbstractButton extends $AbstractWidget {
        onPress(): void;
        renderString(guiGraphics: $GuiGraphics, font: $Font, color: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
    }
    export class $MultilineTextField implements $MultilineTextFieldAccess {
        getSelected(): $MultilineTextField$StringView;
        insertText(text: string): void;
        keyPressed(keyCode: number): boolean;
        getLineCount(): number;
        getPreviousWord(): $MultilineTextField$StringView;
        iterateLines(): $Iterable<$MultilineTextField$StringView>;
        getNextWord(): $MultilineTextField$StringView;
        seekCursorToPoint(x: number, arg1: number): void;
        characterLimit(): number;
        hasCharacterLimit(): boolean;
        setCursorListener(cursorListener: $Runnable_): void;
        hasSelection(): boolean;
        setSelecting(selecting: boolean): void;
        getLineAtCursor(): number;
        getLineView(offset: number): $MultilineTextField$StringView;
        seekCursorLine(length: number): void;
        getSelectedText(): string;
        deleteText(length: number): void;
        value(): string;
        setValue(text: string): void;
        cursor(): number;
        setValueListener(valueListener: $Consumer_<string>): void;
        setCharacterLimit(length: number): void;
        seekCursor(whence: $Whence_, position: number): void;
        setSelectCursor(length: number): void;
        static NO_CHARACTER_LIMIT: number;
        constructor(font: $Font, width: number);
        get selected(): $MultilineTextField$StringView;
        get lineCount(): number;
        get previousWord(): $MultilineTextField$StringView;
        get nextWord(): $MultilineTextField$StringView;
        set cursorListener(value: $Runnable_);
        set selecting(value: boolean);
        get lineAtCursor(): number;
        get selectedText(): string;
        set valueListener(value: $Consumer_<string>);
        set selectCursor(value: number);
    }
    export class $ChatComponent$State {
        constructor(messages: $List_<$GuiMessage_>, history: $List_<string>, delayedMessageDeletions: $List_<$ChatComponent$DelayedMessageDeletion_>);
    }
    export class $PlayerSkinWidget extends $AbstractWidget {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
        constructor(width: number, height: number, model: $EntityModelSet, skin: $Supplier_<$PlayerSkin>);
    }
    export class $ContainerObjectSelectionList$Entry<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $ContainerEventHandler {
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        narratables(): $List<$NarratableEntry>;
        /**
         * Sets if the GUI element is dragging or not.
         */
        setDragging(dragging: boolean): void;
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isDragging(): boolean;
        /**
         * Gets the focused GUI element.
         */
        getFocused(): $GuiEventListener;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(listener: $GuiEventListener | null): void;
        focusPathAtIndex(event: $FocusNavigationEvent_, index: number): $ComponentPath;
        /**
         * Returns the first event listener that intersects with the mouse coordinates.
         */
        getChildAt(mouseX: number, arg1: number): ($GuiEventListener) | undefined;
        constructor();
    }
    export class $Checkbox extends $AbstractButton implements $CheckboxAccessor {
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        selected(): boolean;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static builder(message: $Component_, font: $Font): $Checkbox$Builder;
        static getBoxSize(font: $Font): number;
        /**
         * Sets the focus state of the GUI element.
         */
        setSelected(focused: boolean): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
    }
    export class $LoadingDotsWidget extends $AbstractWidget {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
        constructor(font: $Font, message: $Component_);
    }
    export class $OptionsList$OptionEntry extends $OptionsList$Entry {
    }
    export class $SpriteIconButton$Builder {
        narration(narration: $Button$CreateNarration_): $SpriteIconButton$Builder;
        sprite(sprite: $ResourceLocation_, spriteWidth: number, spriteHeight: number): $SpriteIconButton$Builder;
        size(width: number, height: number): $SpriteIconButton$Builder;
        build(): $SpriteIconButton;
        width(width: number): $SpriteIconButton$Builder;
        constructor(message: $Component_, onPress: $Button$OnPress_, iconOnly: boolean);
    }
    export class $MultiLineTextWidget extends $AbstractStringWidget {
        setMaxWidth(color: number): $MultiLineTextWidget;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        setColor(color: number): $MultiLineTextWidget;
        setCentered(centered: boolean): $MultiLineTextWidget;
        setMaxRows(color: number): $MultiLineTextWidget;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
        constructor(message: $Component_, font: $Font);
        constructor(x: number, y: number, message: $Component_, font: $Font);
        set maxWidth(value: number);
        set color(value: number);
        set centered(value: boolean);
        set maxRows(value: number);
    }
    export class $PlainTextButton extends $Button {
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        active: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, onPress: $Button$OnPress_, font: $Font);
    }
    export class $ObjectSelectionList$Entry<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $NarrationSupplier {
        updateNarration(arg0: $NarrationElementOutput): void;
        getNarration(): $Component;
        constructor();
        get narration(): $Component;
    }
    export class $ImageWidget$Sprite extends $ImageWidget {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
    }
    export class $WidgetSprites extends $Record {
        disabled(): $ResourceLocation;
        get(enabled: boolean, focused: boolean): $ResourceLocation;
        enabled(): $ResourceLocation;
        enabledFocused(): $ResourceLocation;
        disabledFocused(): $ResourceLocation;
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_);
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_, enabledFocused: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $WidgetSprites}.
     */
    export type $WidgetSprites_ = { enabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, enabled?: $ResourceLocation_,  } | [enabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, enabled?: $ResourceLocation_, ];
    export class $ImageButton extends $Button implements $ImageButtonAccessor {
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        getSprites(): $WidgetSprites;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        active: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_WIDTH: number;
        sprites: $WidgetSprites;
        static DEFAULT_SPACING: number;
        constructor(x: number, y: number, width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_);
        constructor(width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_, message: $Component_);
        constructor(x: number, y: number, width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_, message: $Component_);
    }
    export class $ComponentRenderUtils {
        static wrapComponents(component: $FormattedText, maxWidth: number, font: $Font): $List<$FormattedCharSequence>;
        constructor();
    }
    export class $PlayerTabOverlay$HealthState {
    }
    export class $StateSwitchingButton extends $AbstractWidget {
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isStateTriggered(): boolean;
        setStateTriggered(triggered: boolean): void;
        initTextureValues(sprites: $WidgetSprites_): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
        constructor(x: number, y: number, width: number, height: number, initialState: boolean);
    }
    export class $CommandSuggestions {
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        getUsageNarration(): $Component;
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        mouseScrolled(delta: number): boolean;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        setAllowHiding(allowHiding: boolean): void;
        updateCommandInfo(): void;
        getNarrationMessage(): $Component;
        hide(): void;
        setAllowSuggestions(allowHiding: boolean): void;
        isVisible(): boolean;
        renderSuggestions(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): boolean;
        renderUsage(guiGraphics: $GuiGraphics): void;
        showSuggestions(allowHiding: boolean): void;
        constructor(minecraft: $Minecraft, screen: $Screen, input: $EditBox, font: $Font, commandsOnly: boolean, onlyShowIfCursorPastError: boolean, lineStartOffset: number, suggestionLineLimit: number, anchorToBottom: boolean, fillColor: number);
        get usageNarration(): $Component;
        set allowHiding(value: boolean);
        get narrationMessage(): $Component;
        set allowSuggestions(value: boolean);
        get visible(): boolean;
    }
    export class $PopupScreen$Builder {
        setMessage(message: $Component_): $PopupScreen$Builder;
        addButton(message: $Component_, action: $Consumer_<$PopupScreen>): $PopupScreen$Builder;
        setWidth(width: number): $PopupScreen$Builder;
        setImage(image: $ResourceLocation_): $PopupScreen$Builder;
        build(): $PopupScreen;
        onClose(onClose: $Runnable_): $PopupScreen$Builder;
        constructor(backgroundScreen: $Screen, title: $Component_);
        set message(value: $Component_);
        set width(value: number);
        set image(value: $ResourceLocation_);
    }
    export class $MultiLineLabel$TextAndWidth extends $Record {
        text(): $FormattedCharSequence;
        width(): number;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $MultiLineLabel$TextAndWidth}.
     */
    export type $MultiLineLabel$TextAndWidth_ = { width?: number, text?: $FormattedCharSequence_,  } | [width?: number, text?: $FormattedCharSequence_, ];
    export class $PlayerSkinWidget$Model extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkinWidget$Model}.
     */
    export type $PlayerSkinWidget$Model_ = { wideModel?: $PlayerModel<never>, slimModel?: $PlayerModel<never>,  } | [wideModel?: $PlayerModel<never>, slimModel?: $PlayerModel<never>, ];
    export class $OptionsList$Entry extends $ContainerObjectSelectionList$Entry<$OptionsList$Entry> {
    }
    export class $ChatComponent {
        render(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean): void;
        addMessage(chatComponent: $Component_, headerSignature: $MessageSignature_ | null, tag: $GuiMessageTag_ | null): void;
        addMessage(chatComponent: $Component_): void;
        storeState(): $ChatComponent$State;
        static defaultUnfocusedPct(): number;
        getScale(): number;
        getRecentChat(): $ArrayListDeque<string>;
        /**
         * Adds this string to the list of sent messages, for recall using the up/down arrow keys
         */
        addRecentChat(message: string): void;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        resetChatScroll(): void;
        getLinesPerPage(): number;
        getMessageTagAt(mouseX: number, arg1: number): $GuiMessageTag;
        restoreState(state: $ChatComponent$State): void;
        /**
         * Returns `true` if the chat GUI is open
         */
        isChatFocused(): boolean;
        deleteMessage(messageSignature: $MessageSignature_): void;
        /**
         * Clears the chat.
         */
        clearMessages(clearSentMsgHistory: boolean): void;
        handleChatQueueClicked(mouseX: number, arg1: number): boolean;
        getClickedComponentStyleAt(mouseX: number, arg1: number): $Style;
        scrollChat(posInc: number): void;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        rescaleChat(): void;
        getWidth(): number;
        static getWidth(height: number): number;
        static getHeight(height: number): number;
        getHeight(): number;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        tick(): void;
        constructor(minecraft: $Minecraft);
        get scale(): number;
        get recentChat(): $ArrayListDeque<string>;
        get linesPerPage(): number;
        get chatFocused(): boolean;
    }
    export class $PlayerTabOverlay {
        render(guiGraphics: $GuiGraphics, width: number, scoreboard: $Scoreboard, objective: $Objective | null): void;
        /**
         * Called by GuiIngame to update the information stored in the playerlist, does not actually render the list, however.
         */
        setVisible(visible: boolean): void;
        getNameForDisplay(playerInfo: $PlayerInfo): $Component;
        setHeader(footer: $Component_ | null): void;
        setFooter(footer: $Component_ | null): void;
        reset(): void;
        static MAX_ROWS_PER_COL: number;
        visible: boolean;
        constructor(minecraft: $Minecraft, gui: $Gui);
        set header(value: $Component_ | null);
        set footer(value: $Component_ | null);
    }
    export class $PlayerFaceRenderer {
        static draw(guiGraphics: $GuiGraphics, atlasLocation: $ResourceLocation_, x: number, y: number, size: number): void;
        static draw(guiGraphics: $GuiGraphics, skin: $PlayerSkin_, x: number, y: number, size: number): void;
        static draw(guiGraphics: $GuiGraphics, atlasLocation: $ResourceLocation_, x: number, y: number, size: number, drawHat: boolean, upsideDown: boolean): void;
        static SKIN_HAT_WIDTH: number;
        static SKIN_HAT_HEIGHT: number;
        static SKIN_HEAD_WIDTH: number;
        static SKIN_HAT_U: number;
        static SKIN_TEX_HEIGHT: number;
        static SKIN_HEAD_HEIGHT: number;
        static SKIN_HEAD_V: number;
        static SKIN_HEAD_U: number;
        static SKIN_HAT_V: number;
        static SKIN_TEX_WIDTH: number;
        constructor();
    }
    export class $SubtitleOverlay$SoundPlayedAt extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SubtitleOverlay$SoundPlayedAt}.
     */
    export type $SubtitleOverlay$SoundPlayedAt_ = { time?: number, location?: $Vec3_,  } | [time?: number, location?: $Vec3_, ];
    export class $TabOrderedElement {
    }
    export interface $TabOrderedElement {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        get tabOrderGroup(): number;
    }
    export class $OptionsList extends $ContainerObjectSelectionList<$OptionsList$Entry> {
        addSmall(options: $List_<$AbstractWidget>): void;
        addSmall(...options: $OptionInstance<never>[]): void;
        addSmall(leftOption: $AbstractWidget, rightOption: $AbstractWidget | null): void;
        applyUnsavedChanges(): void;
        findOption(option: $OptionInstance<never>): $AbstractWidget;
        getMouseOver(mouseX: number, arg1: number): ($GuiEventListener) | undefined;
        addBig(option: $OptionInstance<never>): void;
        static UNSET_FG_COLOR: number;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        static SCROLLER_SPRITE: $ResourceLocation;
        x: number;
        y: number;
        active: boolean;
        hovered: $OptionsList$Entry;
        constructor(minecraft: $Minecraft, width: number, screen: $OptionsSubScreen);
    }
    export class $Renderable {
    }
    export interface $Renderable {
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Renderable}.
     */
    export type $Renderable_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $SubtitleOverlay implements $SoundEventListener {
        render(guiGraphics: $GuiGraphics): void;
        onPlaySound(sound: $SoundInstance, accessor: $WeighedSoundEvents, range: number): void;
        constructor(minecraft: $Minecraft);
    }
    export class $AbstractWidget implements $Renderable, $GuiEventListener, $LayoutElement, $NarratableEntry, $IAbstractWidgetExtension {
        setX(height: number): void;
        setY(height: number): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRight(): number;
        setMessage(message: $Component_): void;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        isMouseOver(mouseX: number, arg1: number): boolean;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        /**
         * @return the narration priority
         */
        narrationPriority(): $NarratableEntry$NarrationPriority;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        setTooltipDelay(tooltipDelay: $Duration_): void;
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHovered(): boolean;
        getTooltip(): $Tooltip;
        /**
         * @deprecated
         */
        onClick(mouseX: number, arg1: number): void;
        setFGColor(height: number): void;
        onRelease(mouseX: number, arg1: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getFGColor(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getBottom(): number;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isFocused(): boolean;
        setTooltip(tooltip: $Tooltip | null): void;
        setWidth(height: number): void;
        setHeight(height: number): void;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, centerX: number, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getX(): number;
        setAlpha(alpha: number): void;
        playDownSound(handler: $SoundManager): void;
        setRectangle(width: number, height: number, x: number, y: number): void;
        setTabOrderGroup(height: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHoveredOrFocused(): boolean;
        clearFGColor(): void;
        static wrapDefaultNarrationMessage(message: $Component_): $MutableComponent;
        getMessage(): $Component;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isActive(): boolean;
        setSize(width: number, height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getY(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getWidth(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getHeight(): number;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        mouseMoved(mouseX: number, arg1: number): void;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        setPosition(width: number, height: number): void;
        /**
         * Handles the logic for when this widget is clicked. Vanilla calls this after `AbstractWidget#mouseClicked(double, double, int)` validates that:
         * 
         * - this widget is active and visible
         * - the button can be handled by this widget
         * - the mouse is over this widget
         */
        onClick(mouseX: number, mouseY: number, button: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
        get right(): number;
        set tooltipDelay(value: $Duration_);
        get hovered(): boolean;
        get bottom(): number;
        set alpha(value: number);
        get hoveredOrFocused(): boolean;
        get currentFocusPath(): $ComponentPath;
    }
    export class $AbstractSliderButton extends $AbstractWidget {
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, value: number);
    }
    export class $LockIconButton extends $Button {
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        setLocked(locked: boolean): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isLocked(): boolean;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        x: number;
        y: number;
        active: boolean;
        static BIG_WIDTH: number;
        static DEFAULT_WIDTH: number;
        static DEFAULT_SPACING: number;
        constructor(x: number, y: number, onPress: $Button$OnPress_);
    }
    export class $MultiLineEditBox extends $AbstractScrollWidget {
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        getValue(): string;
        setValue(fullText: string): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getInnerHeight(): number;
        setValueListener(valueListener: $Consumer_<string>): void;
        setCharacterLimit(characterLimit: number): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        y: number;
        active: boolean;
        constructor(font: $Font, x: number, y: number, width: number, height: number, placeholder: $Component_, message: $Component_);
        get innerHeight(): number;
        set valueListener(value: $Consumer_<string>);
        set characterLimit(value: number);
    }
    export class $Button$CreateNarration {
    }
    export interface $Button$CreateNarration {
        createNarrationMessage(messageSupplier: $Supplier_<$MutableComponent>): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $Button$CreateNarration}.
     */
    export type $Button$CreateNarration_ = ((arg0: $Supplier<$MutableComponent>) => $MutableComponent_);
}
