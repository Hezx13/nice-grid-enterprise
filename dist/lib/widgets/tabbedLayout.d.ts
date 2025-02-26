import type { IAfterGuiAttachedParams } from 'ag-grid-community';
import { TabGuardComp } from 'ag-grid-community';
import type { TabbedItem, TabbedLayoutParams } from './iTabbedLayout';
export declare class TabbedLayout extends TabGuardComp {
    private readonly eHeader;
    private readonly eBody;
    private eTabHeader;
    private eCloseButton?;
    private params;
    private afterAttachedParams;
    private items;
    private activeItem;
    private lastScrollListener;
    private readonly tabbedItemScrollMap;
    constructor(params: TabbedLayoutParams);
    postConstruct(): void;
    private setupHeader;
    private setupCloseButton;
    protected handleKeyDown(e: KeyboardEvent): void;
    protected onTabKeyDown(e: KeyboardEvent): void;
    private focusInnerElement;
    focusHeader(preventScroll?: boolean): void;
    private focusBody;
    setAfterAttachedParams(params: IAfterGuiAttachedParams): void;
    showFirstItem(): void;
    private addItem;
    showItem(tabbedItem: TabbedItem): void;
    private showItemWrapper;
}
