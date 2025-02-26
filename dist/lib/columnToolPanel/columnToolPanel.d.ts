import type { BeanCollection, ColDef, ColGroupDef, ColumnToolPanelState, IColumnToolPanel, IToolPanelColumnCompParams, IToolPanelComp, IToolPanelParams } from 'ag-grid-community';
import { Component } from 'ag-grid-community';
export interface ToolPanelColumnCompParams<TData = any, TContext = any> extends IToolPanelParams<TData, TContext, ColumnToolPanelState>, IToolPanelColumnCompParams {
}
export declare class ColumnToolPanel extends Component implements IColumnToolPanel, IToolPanelComp {
    private initialised;
    private params;
    private childDestroyFuncs;
    private pivotModePanel?;
    private primaryColsPanel;
    private rowGroupDropZonePanel?;
    private valuesDropZonePanel?;
    private pivotDropZonePanel?;
    private colToolPanelFactory?;
    constructor();
    wireBeans(beans: BeanCollection): void;
    setVisible(visible: boolean): void;
    init(params: ToolPanelColumnCompParams): void;
    setPivotModeSectionVisible(visible: boolean): void;
    setRowGroupsSectionVisible(visible: boolean): void;
    setValuesSectionVisible(visible: boolean): void;
    setPivotSectionVisible(visible: boolean): void;
    private setResizers;
    private setLastVisible;
    private resetChildrenHeight;
    expandColumnGroups(groupIds?: string[]): void;
    collapseColumnGroups(groupIds?: string[]): void;
    setColumnLayout(colDefs: (ColDef | ColGroupDef)[]): void;
    syncLayoutWithGrid(): void;
    destroyChildren(): void;
    refresh(params: ToolPanelColumnCompParams): boolean;
    getState(): ColumnToolPanelState;
    destroy(): void;
}
