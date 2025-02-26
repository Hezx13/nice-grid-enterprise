import type { AgColumn, BeanCollection, NamedBean } from 'ag-grid-community';
import { BeanStub } from 'ag-grid-community';
export declare class ChartColumnService extends BeanStub implements NamedBean {
    beanName: "chartColSvc";
    private colModel;
    private colNames;
    private valueSvc;
    wireBeans(beans: BeanCollection): void;
    private valueColsWithoutSeriesType;
    postConstruct(): void;
    getColumn(colId: string): AgColumn | null;
    getAllDisplayedColumns(): AgColumn[];
    getColDisplayName(col: AgColumn, includePath?: boolean): string | null;
    getRowGroupColumns(): AgColumn[];
    getGroupDisplayColumns(): AgColumn[];
    isPivotMode(): boolean;
    isPivotActive(): boolean;
    getChartColumns(): {
        dimensionCols: Set<AgColumn>;
        valueCols: Set<AgColumn>;
    };
    private isInferredValueCol;
    private extractLeafData;
    destroy(): void;
}
