import type { ExcelOOXMLTemplate } from 'ag-grid-community';
declare const borderFactory: ExcelOOXMLTemplate;
export default borderFactory;
export interface ExcelCellStyle {
    builtinId: number;
    name: string;
    xfId: number;
}
