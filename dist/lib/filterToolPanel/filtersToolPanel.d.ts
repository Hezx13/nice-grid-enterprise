import type { ColDef, ColGroupDef, FiltersToolPanelState, IFiltersToolPanel, IToolPanelComp, IToolPanelFiltersCompParams, IToolPanelParams } from 'ag-grid-community';
import { Component } from 'ag-grid-community';
export interface ToolPanelFiltersCompParams<TData = any, TContext = any> extends IToolPanelParams<TData, TContext, FiltersToolPanelState>, IToolPanelFiltersCompParams {
}
export declare class FiltersToolPanel extends Component implements IFiltersToolPanel, IToolPanelComp {
    private readonly filtersToolPanelHeaderPanel;
    private readonly filtersToolPanelListPanel;
    private initialised;
    private params;
    private listenerDestroyFuncs;
    constructor();
    init(params: ToolPanelFiltersCompParams): void;
    setVisible(visible: boolean): void;
    setFilterLayout(colDefs: (ColDef | ColGroupDef)[]): void;
    expandFilterGroups(groupIds?: string[]): void;
    collapseFilterGroups(groupIds?: string[]): void;
    expandFilters(colIds?: string[]): void;
    collapseFilters(colIds?: string[]): void;
    syncLayoutWithGrid(): void;
    refresh(params: ToolPanelFiltersCompParams): boolean;
    getState(): FiltersToolPanelState;
}
