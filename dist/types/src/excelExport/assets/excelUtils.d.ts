import type { AgColumn, RowHeightCallbackParams, XmlElement } from 'ag-grid-community';
import type { ExcelCalculatedImage } from './excelInterfaces';
export declare const pointsToPixel: (points: number) => number;
export declare const pixelsToEMU: (value: number) => number;
export declare const getFontFamilyId: (name?: string) => number | undefined;
export declare const getHeightFromProperty: (rowIndex: number, height?: number | ((params: RowHeightCallbackParams) => number)) => number | undefined;
export declare const setExcelImageTotalWidth: (image: ExcelCalculatedImage, columnsToExport: AgColumn[]) => void;
export declare const setExcelImageTotalHeight: (image: ExcelCalculatedImage, rowHeight?: number | ((params: RowHeightCallbackParams) => number)) => void;
export declare const createXmlPart: (body: XmlElement, skipHeader?: boolean) => string;
export declare const getExcelColumnName: (colIdx: number) => string;
export declare const replaceInvisibleCharacters: (str: string | null) => string | null;
export declare const buildSharedString: (strMap: Map<string, number>) => XmlElement[];
