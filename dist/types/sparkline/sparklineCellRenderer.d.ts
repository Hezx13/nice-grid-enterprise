import type { ICellRenderer, ISparklineCellRendererParams } from 'ag-grid-community';
import { Component } from 'ag-grid-community';
export declare const DEFAULT_THEMES: string[];
export declare class SparklineCellRenderer extends Component implements ICellRenderer {
    private readonly eSparkline;
    private sparklineInstance?;
    private sparklineOptions;
    private params;
    private cachedWidth;
    private cachedHeight;
    constructor();
    postConstruct(): void;
    init(params: ISparklineCellRendererParams): void;
    private getThemeName;
    refresh(params?: ISparklineCellRendererParams): boolean;
    private updateTheme;
    private processData;
    private createContext;
    private getDefaultTooltipRenderer;
    private wrapItemStyler;
    private wrapTooltipRenderer;
    destroy(): void;
}
