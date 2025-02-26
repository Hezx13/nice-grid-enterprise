import type { Component, RichSelectParams } from 'ag-grid-community';
import { VirtualList } from './virtualList';
export type AgRichSelectListEvent = 'fieldPickerValueSelected' | 'richSelectListRowSelected';
export declare class AgRichSelectList<TValue, TEventType extends string = AgRichSelectListEvent> extends VirtualList<Component<TEventType | AgRichSelectListEvent>, TEventType | AgRichSelectListEvent> {
    private readonly params;
    private readonly richSelectWrapper;
    private readonly getSearchString;
    private eLoading;
    private lastRowHovered;
    private currentList;
    private selectedItems;
    constructor(params: RichSelectParams, richSelectWrapper: HTMLElement, getSearchString: () => string);
    postConstruct(): void;
    navigateToPage(key: 'PageUp' | 'PageDown' | 'Home' | 'End'): number | null;
    protected drawVirtualRows(softRefresh?: boolean | undefined): void;
    highlightFilterMatch(searchString: string): void;
    onNavigationKeyDown(key: string, announceItem: () => void): void;
    selectValue(value?: TValue[] | TValue): boolean;
    private selectListItems;
    getCurrentList(): TValue[] | undefined;
    setCurrentList(list: TValue[]): void;
    getSelectedItems(): Set<TValue>;
    getLastItemHovered(): TValue;
    highlightIndex(index: number, preventUnnecessaryScroll?: boolean): void;
    getIndicesForValues(values?: TValue[] | TValue): number[];
    toggleListItemSelection(value: TValue): void;
    private refreshSelectedItems;
    private findItemInSelected;
    private createLoadingElement;
    private createRowComponent;
    private getRowForMouseEvent;
    private onMouseMove;
    private onMouseDown;
    private onMouseOut;
    private onClick;
    private dispatchValueSelected;
    destroy(): void;
}
