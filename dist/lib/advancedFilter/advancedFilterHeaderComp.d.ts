import type { BeanCollection } from 'ag-grid-community';
import { Component } from 'ag-grid-community';
export declare class AdvancedFilterHeaderComp extends Component {
    private enabled;
    private colModel;
    private focusSvc;
    private ctrlsSvc;
    wireBeans(beans: BeanCollection): void;
    private eAdvancedFilter;
    private height;
    constructor(enabled: boolean);
    postConstruct(): void;
    getFocusableElement(): HTMLElement;
    setEnabled(enabled: boolean): void;
    refresh(): void;
    getHeight(): number;
    setInputDisabled(disabled: boolean): void;
    private setupAdvancedFilter;
    private setEnabledHeight;
    private setAriaColumnCount;
    private setAriaRowIndex;
    private onGridColumnsChanged;
    private onKeyDown;
    private navigateUpDown;
    private navigateLeftRight;
    private hasFocus;
}
