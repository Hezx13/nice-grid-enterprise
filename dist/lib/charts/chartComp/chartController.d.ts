import type { AgCartesianAxisType, AgChartThemeOverrides, AgChartThemePalette, IChartTheme } from 'ag-charts-types';
import type { BeanCollection, ChartModel, ChartType, IAggFunc, SeriesChartType, SeriesGroupType, UpdateChartParams } from 'ag-grid-community';
import { BeanStub } from 'ag-grid-community';
import type { ChartProxy, UpdateParams } from './chartProxies/chartProxy';
import type { ChartDataModel, ColState } from './model/chartDataModel';
import type { ChartSeriesType } from './utils/seriesTypeMapper';
export declare const DEFAULT_THEMES: string[];
export type ChartControllerEvent = 'chartUpdated' | 'chartApiUpdate' | 'chartModelUpdate' | 'chartTypeChanged' | 'chartSeriesChartTypeChanged' | 'chartLinkedChanged';
export declare class ChartController extends BeanStub<ChartControllerEvent> {
    private readonly model;
    private rangeSvc;
    private agChartsExports;
    wireBeans(beans: BeanCollection): void;
    private chartProxy;
    constructor(model: ChartDataModel);
    postConstruct(): void;
    update(params: UpdateChartParams): boolean;
    private applyValidatedChartParams;
    updateForGridChange(params?: {
        maintainColState?: boolean;
        setColsFromRange?: boolean;
    }): void;
    updateForDataChange(): void;
    updateForRangeChange(): void;
    updateForPanelChange(params: {
        updatedColState: ColState;
        resetOrder?: boolean;
        skipAnimation?: boolean;
    }): void;
    updateThemeOverrides(updatedOverrides: AgChartThemeOverrides): void;
    getChartUpdateParams(updatedOverrides?: AgChartThemeOverrides): UpdateParams;
    private invertCategorySeriesParams;
    getChartModel(): ChartModel;
    getChartId(): string;
    getChartData(): any[];
    getChartType(): ChartType;
    setChartType(chartType: ChartType): void;
    isCategorySeriesSwitched(): boolean;
    switchCategorySeries(inverted: boolean): void;
    getAggFunc(): string | IAggFunc | undefined;
    setAggFunc(value: string | IAggFunc | undefined, silent?: boolean): void;
    private updateMultiSeriesAndCategory;
    setChartThemeName(chartThemeName: string, silent?: boolean): void;
    getChartThemeName(): string;
    isPivotChart(): boolean;
    isPivotMode(): boolean;
    isGrouping(): boolean;
    isCrossFilterChart(): boolean;
    getThemeNames(): string[];
    getThemes(): IChartTheme[];
    getPalettes(): AgChartThemePalette[];
    getThemeTemplateParameters(): Map<any, any>[];
    getValueColState(): ColState[];
    getSelectedValueColState(): {
        colId: string;
        displayName: string | null;
    }[];
    getSelectedDimensions(): ColState[];
    private displayNameMapper;
    getColStateForMenu(): {
        dimensionCols: ColState[];
        valueCols: ColState[];
    };
    setChartRange(silent?: boolean): void;
    detachChartRange(): void;
    setChartProxy(chartProxy: ChartProxy): void;
    getChartProxy(): ChartProxy;
    isActiveXYChart(): boolean;
    isChartLinked(): boolean;
    customComboExists(): boolean;
    getSeriesChartTypes(): SeriesChartType[];
    isComboChart(chartType?: ChartType): boolean;
    updateSeriesChartType(colId: string, chartType?: ChartType, secondaryAxis?: boolean): void;
    getActiveSeriesChartTypes(): SeriesChartType[];
    getChartSeriesTypes(chartType?: ChartType): ChartSeriesType[];
    getChartSeriesType(): ChartSeriesType;
    isEnterprise: () => boolean;
    private getCellRanges;
    private createCellRange;
    private validUpdateType;
    private getCellRangeParams;
    setCategoryAxisType(categoryAxisType?: AgCartesianAxisType): void;
    getSeriesGroupType(): SeriesGroupType | undefined;
    setSeriesGroupType(seriesGroupType?: SeriesGroupType): void;
    raiseChartModelUpdateEvent(): void;
    raiseChartUpdatedEvent(): void;
    raiseChartApiUpdateEvent(): void;
    private raiseChartOptionsChangedEvent;
    private raiseChartRangeSelectionChangedEvent;
    destroy(): void;
}
