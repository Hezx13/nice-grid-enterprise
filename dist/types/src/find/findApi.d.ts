import type { BeanCollection, FindCellParams, FindCellValueParams, FindMatch, FindPart } from 'ag-grid-community';
export declare function findNext(beans: BeanCollection): void;
export declare function findPrevious(beans: BeanCollection): void;
export declare function findGetTotalMatches(beans: BeanCollection): number;
export declare function findGoTo(beans: BeanCollection, match: number): void;
export declare function findGetActiveMatch(beans: BeanCollection): FindMatch | undefined;
export declare function findGetNumMatches(beans: BeanCollection, params: FindCellParams): number;
export declare function findGetParts(beans: BeanCollection, params: FindCellValueParams): FindPart[];
