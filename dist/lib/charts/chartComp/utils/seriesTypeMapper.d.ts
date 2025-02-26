import type { AgChartThemeOverrides } from 'ag-charts-types';
import type { ChartType, ChartTypeExCombo, SeriesGroupType } from 'ag-grid-community';
import type { ChartTranslationKey } from '../services/chartTranslationService';
declare const CHART_TYPE_TO_SERIES_TYPE: Record<ChartTypeExCombo, string>;
export declare const SERIES_GROUP_TYPES: SeriesGroupType[];
export type ChartSeriesType = (typeof CHART_TYPE_TO_SERIES_TYPE)[keyof typeof CHART_TYPE_TO_SERIES_TYPE] & keyof AgChartThemeOverrides;
export type ChartThemeOverridesSeriesType = keyof AgChartThemeOverrides & (ChartSeriesType | 'common');
export declare function isSeriesType(seriesType: ChartSeriesType): boolean;
export declare function isComboChart(chartType: ChartType): boolean;
export declare function isEnterpriseChartType(chartType: ChartType): boolean;
export declare function isStacked(chartType: ChartType): boolean;
export declare function isCartesian(seriesType: ChartSeriesType): boolean;
export declare function isFunnel(seriesType: ChartSeriesType): boolean;
export declare function isPolar(seriesType: ChartSeriesType): boolean;
export declare function isRadial(seriesType: ChartSeriesType): boolean;
export declare function isHierarchical(seriesType: ChartSeriesType): boolean;
export declare function getCanonicalChartType(chartType: ChartType): Exclude<ChartType, 'doughnut'>;
export declare function getSeriesTypeIfExists(chartType: ChartType): ChartSeriesType | undefined;
export declare function getSeriesType(chartType: ChartType): ChartSeriesType;
export declare function isPieChartSeries(seriesType: ChartSeriesType): boolean;
export declare function getMaxNumCategories(chartType: ChartType): number | undefined;
export declare function getMaxNumSeries(chartType: ChartType): number | undefined;
export declare function supportsInvertedCategorySeries(chartType: ChartType): boolean;
export declare function canSwitchDirection(chartType: ChartType): boolean;
export declare function getFullChartNameTranslationKey(chartType: ChartType): ChartTranslationKey;
export {};
