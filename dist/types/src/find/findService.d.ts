import type { ColDef, Column, FindCellValueParams, FindMatch, FindPart, IFindService, IRowNode, NamedBean } from 'ag-grid-community';
import { BeanStub } from 'ag-grid-community';
export declare class FindService extends BeanStub implements NamedBean, IFindService {
    beanName: "findSvc";
    /**
     * Is find currently active (e.g. non-empty search value).
     * Used for performance when checking matches (part of cell rendering)
     */
    private active;
    /** pinned top matches. values are column and corresponding number of matches in the cell for that column */
    private topMatches;
    /** same nodes as keys in `topMatches`, but kept separate for performance when moving backwards and forwards through the matches */
    private topNodes;
    /** total number of matches in pinned top */
    private topNumMatches;
    private centerMatches;
    private centerNodes;
    private centerNumMatches;
    private bottomMatches;
    private bottomNodes;
    /** switches based on grid options */
    private caseFormat;
    /** cached version that has been trimmed and potentially case converted */
    private findSearchValue;
    totalMatches: number;
    activeMatch: FindMatch | undefined;
    postConstruct(): void;
    next(): void;
    previous(): void;
    goTo(match: number): void;
    isMatch(node: IRowNode, column: Column): boolean;
    getNumMatches(node: IRowNode, column: Column): number;
    /**
     * Get detail for cell renderer. Splits up the cell value into strings depending on
     * whether they don't match, match, or are the active match
     */
    getParts(params: FindCellValueParams): FindPart[];
    setupGroupCol(colDef: ColDef): void;
    private refresh;
    private resetActiveMatch;
    private refreshRows;
    private findAcrossContainers;
    private findInContainer;
    private dispatchFindChanged;
    private setActive;
    private refreshAndScrollToActive;
    private goToInContainer;
    private getMatches;
    private getRowNodes;
    private getActiveMatchNum;
    destroy(): void;
}
