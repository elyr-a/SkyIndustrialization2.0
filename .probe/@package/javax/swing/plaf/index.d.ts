import { $Point2D, $Rectangle2D } from "@package/java/awt/geom";
import { $MouseEvent } from "@package/java/awt/event";
import { $JTextComponent, $EditorKit, $Position$Bias, $View } from "@package/javax/swing/text";
import { $Point, $Graphics, $Component$BaselineResizeBehavior, $Dimension, $Rectangle } from "@package/java/awt";
import { $Accessible } from "@package/javax/accessibility";
import { $JComponent, $JPopupMenu, $Popup, $JList } from "@package/javax/swing";

declare module "@package/javax/swing/plaf" {
    export class $MenuBarUI extends $ComponentUI {
    }
    export class $RootPaneUI extends $ComponentUI {
    }
    export class $ScrollBarUI extends $ComponentUI {
    }
    export class $ListUI extends $ComponentUI {
        locationToIndex(arg0: $JList<never>, arg1: $Point): number;
        getCellBounds(arg0: $JList<never>, arg1: number, arg2: number): $Rectangle;
        indexToLocation(arg0: $JList<never>, arg1: number): $Point;
    }
    export class $MenuItemUI extends $ButtonUI {
    }
    export class $ButtonUI extends $ComponentUI {
    }
    export class $ScrollPaneUI extends $ComponentUI {
    }
    export class $ViewportUI extends $ComponentUI {
    }
    export class $ComponentUI {
        installUI(arg0: $JComponent): void;
        uninstallUI(arg0: $JComponent): void;
        paint(arg0: $Graphics, arg1: $JComponent): void;
        getMaximumSize(arg0: $JComponent): $Dimension;
        getMinimumSize(arg0: $JComponent): $Dimension;
        getBaseline(arg0: $JComponent, arg1: number, arg2: number): number;
        getBaselineResizeBehavior(arg0: $JComponent): $Component$BaselineResizeBehavior;
        update(arg0: $Graphics, arg1: $JComponent): void;
        contains(arg0: $JComponent, arg1: number, arg2: number): boolean;
        getPreferredSize(arg0: $JComponent): $Dimension;
        static createUI(arg0: $JComponent): $ComponentUI;
        getAccessibleChildrenCount(arg0: $JComponent): number;
        getAccessibleChild(arg0: $JComponent, arg1: number): $Accessible;
        constructor();
    }
    export class $PopupMenuUI extends $ComponentUI {
        isPopupTrigger(arg0: $MouseEvent): boolean;
        getPopup(arg0: $JPopupMenu, arg1: number, arg2: number): $Popup;
    }
    export class $TextUI extends $ComponentUI {
        /**
         * @deprecated
         */
        getToolTipText(arg0: $JTextComponent, arg1: $Point): string;
        getEditorKit(arg0: $JTextComponent): $EditorKit;
        /**
         * @deprecated
         */
        viewToModel(arg0: $JTextComponent, arg1: $Point): number;
        /**
         * @deprecated
         */
        viewToModel(arg0: $JTextComponent, arg1: $Point, arg2: $Position$Bias[]): number;
        /**
         * @deprecated
         */
        modelToView(arg0: $JTextComponent, arg1: number): $Rectangle;
        /**
         * @deprecated
         */
        modelToView(arg0: $JTextComponent, arg1: number, arg2: $Position$Bias): $Rectangle;
        modelToView2D(arg0: $JTextComponent, arg1: number, arg2: $Position$Bias): $Rectangle2D;
        viewToModel2D(arg0: $JTextComponent, arg1: $Point2D, arg2: $Position$Bias[]): number;
        damageRange(arg0: $JTextComponent, arg1: number, arg2: number): void;
        damageRange(arg0: $JTextComponent, arg1: number, arg2: number, arg3: $Position$Bias, arg4: $Position$Bias): void;
        getRootView(arg0: $JTextComponent): $View;
        getToolTipText2D(arg0: $JTextComponent, arg1: $Point2D): string;
        getNextVisualPositionFrom(arg0: $JTextComponent, arg1: number, arg2: $Position$Bias, arg3: number, arg4: $Position$Bias[]): number;
    }
    export class $ToolTipUI extends $ComponentUI {
    }
}
