import type { AgCartesianAxesTheme, AgCartesianAxisOptions, AgChartOptions, AgChartThemeOverrides, AgPolarAxesTheme } from 'ag-charts-types';
import type { ChartType } from 'ag-grid-community';
import { BeanStub } from 'ag-grid-community';
import type { ChartController } from '../chartController';
import type { AgChartActual, AgChartAxisType } from '../utils/integration';
import type { ChartSeriesType } from '../utils/seriesTypeMapper';
export interface ChartOptionsProxy {
    getValue<T = string>(expression: string, calculated?: boolean): T;
    setValue<T = string>(expression: string, value: T): void;
    setValues<T = string>(properties: {
        expression: string;
        value: T;
    }[]): void;
}
type ChartAxis = NonNullable<AgChartActual['axes']>[number];
type AgPolarAxisThemeOverrides = NonNullable<AgPolarAxesTheme[keyof AgPolarAxesTheme]>;
type AgCartesianAxisThemeOverrides = NonNullable<AgCartesianAxesTheme[keyof AgCartesianAxesTheme]>;
type AgChartAxisThemeOverrides = AgCartesianAxisThemeOverrides | AgPolarAxisThemeOverrides;
export declare class ChartOptionsService extends BeanStub {
    private readonly chartController;
    constructor(chartController: ChartController);
    getChartThemeOverridesProxy(): ChartOptionsProxy;
    getAxisThemeOverridesProxy(): ChartOptionsProxy;
    getCartesianAxisOptionsProxy(axisType: 'xAxis' | 'yAxis'): ChartOptionsProxy;
    getCartesianAxisThemeOverridesProxy(axisType: 'xAxis' | 'yAxis'): ChartOptionsProxy;
    getCartesianAxisAppliedThemeOverridesProxy(axisType: 'xAxis' | 'yAxis'): ChartOptionsProxy;
    getSeriesOptionsProxy(getSelectedSeries: () => ChartSeriesType): ChartOptionsProxy;
    /**
     * Determine the set of theme overrides that should be retained when transitioning from one chart type to another.
     */
    getPersistedChartThemeOverrides(existingChartOptions: AgChartOptions, existingAxes: ChartAxis[] | undefined, existingChartType: ChartType, targetChartType: ChartType): AgChartThemeOverrides;
    assignPersistedAxisOverrides(params: {
        existingAxes: ChartAxis[];
        retainedChartAxisThemeOverrideKeys: {
            expression: keyof AgChartAxisThemeOverrides | string;
            targetAxisTypes: AgChartAxisType[];
        }[];
        existingChartOptions: AgChartOptions;
        targetChartOptions: AgChartOptions;
        existingChartType: ChartType;
        targetChartType: ChartType;
    }): void;
    private getRetainedChartThemeOverrideKeys;
    private getRetainedChartAxisThemeOverrideKeys;
    private getRetainedCartesianAxisThemeOverrideKeys;
    private getChartOption;
    private setChartThemeOverrides;
    private applyChartOptions;
    awaitChartOptionUpdate(func: () => void): void;
    private getAxisProperty;
    private setAxisThemeOverrides;
    private getCartesianAxisProperty;
    private getCartesianAxisThemeOverride;
    private setCartesianAxisThemeOverrides;
    private setCartesianAxisOptions;
    private updateCartesianAxisOptions;
    setCartesianCategoryAxisType(axisType: 'xAxis' | 'yAxis', value: AgCartesianAxisOptions['type']): void;
    private getCartesianAxis;
    private getSeriesOption;
    private setSeriesOptions;
    getPairedMode(): boolean;
    setPairedMode(paired: boolean): void;
    private getChartAxes;
    private retrieveChartAxisThemeOverride;
    private assignChartAxisThemeOverride;
    private isValidAxisType;
    getChartType(): ChartType;
    private getChart;
    private updateChart;
    private createChartOptions;
    private retrieveChartOptionsThemeOverride;
    private assignChartOptionsThemeOverride;
    private retrieveChartOptionsSeriesThemeOverride;
    private assignChartOptionsSeriesThemeOverride;
    private getChartThemeOverridesSeriesTypeKeys;
    private retrieveChartOption;
    private assignChartOption;
    private raiseChartOptionsChangedEvent;
}
export {};
