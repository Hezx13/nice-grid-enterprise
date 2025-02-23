import type { BeanCollection, ColDef, ColGroupDef, Column } from 'ag-grid-community';
export declare function isPivotMode(beans: BeanCollection): boolean;
export declare function getPivotResultColumn<TValue = any, TData = any>(beans: BeanCollection, pivotKeys: string[], valueColKey: string | ColDef<TData, TValue> | Column<TValue>): Column<TValue> | null;
export declare function setValueColumns(beans: BeanCollection, colKeys: (string | ColDef | Column)[]): void;
export declare function getValueColumns(beans: BeanCollection): Column[];
export declare function removeValueColumns(beans: BeanCollection, colKeys: (string | ColDef | Column)[]): void;
export declare function addValueColumns(beans: BeanCollection, colKeys: (string | ColDef | Column)[]): void;
export declare function setPivotColumns(beans: BeanCollection, colKeys: (string | ColDef | Column)[]): void;
export declare function removePivotColumns(beans: BeanCollection, colKeys: (string | ColDef | Column)[]): void;
export declare function addPivotColumns(beans: BeanCollection, colKeys: (string | ColDef | Column)[]): void;
export declare function getPivotColumns(beans: BeanCollection): Column[];
export declare function setPivotResultColumns(beans: BeanCollection, colDefs: (ColDef | ColGroupDef)[] | null): void;
export declare function getPivotResultColumns(beans: BeanCollection): Column[] | null;
