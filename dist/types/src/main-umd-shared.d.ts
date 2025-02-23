import type { GridApi, GridOptions, Params } from 'ag-grid-community';
/**
 * Creates a grid inside the provided HTML element.
 * @param eGridDiv Parent element to contain the grid.
 * @param gridOptions Configuration for the grid.
 * @param params Individually register NICE Grid Modules to this grid.
 * @returns api to be used to interact with the grid.
 */
export declare function createGrid<TData>(eGridDiv: HTMLElement, gridOptions: GridOptions<TData>, params?: Params): GridApi<TData>;
