import type { ICellEditor, RichCellEditorParams } from 'ag-grid-community';
import { PopupComponent } from 'ag-grid-community';
export declare class RichSelectCellEditor<TData = any, TValue = any> extends PopupComponent implements ICellEditor<TValue> {
    private params;
    private focusAfterAttached;
    private richSelect;
    private isAsync;
    constructor();
    init(params: RichCellEditorParams<TData, TValue>): void;
    private onEditorPickerValueSelected;
    private buildRichSelectParams;
    private getSearchStringCallback;
    afterGuiAttached(): void;
    private processEventKey;
    focusIn(): void;
    getValue(): any;
    isPopup(): boolean;
}
