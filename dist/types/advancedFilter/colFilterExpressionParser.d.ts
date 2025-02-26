import type { AdvancedFilterModel } from 'ag-grid-community';
import type { AutocompleteEntry, AutocompleteListParams } from './autocomplete/autocompleteParams';
import type { AutocompleteUpdate, FilterExpressionFunction, FilterExpressionFunctionParams, FilterExpressionParserParams, FilterExpressionValidationError } from './filterExpressionUtils';
export declare const COL_FILTER_EXPRESSION_START_CHAR = "[";
export declare const COL_FILTER_EXPRESSION_END_CHAR = "]";
export declare class ColFilterExpressionParser {
    private params;
    readonly startPosition: number;
    private endPosition;
    private isAwaiting;
    private parser;
    private columnParser;
    private operatorParser;
    private operandParser;
    constructor(params: FilterExpressionParserParams, startPosition: number);
    parseExpression(): number;
    isValid(): boolean;
    getValidationError(): FilterExpressionValidationError | null;
    getFunctionString(params: FilterExpressionFunctionParams): string;
    getFunctionParsed(params: FilterExpressionFunctionParams): FilterExpressionFunction;
    getAutocompleteListParams(position: number): AutocompleteListParams | undefined;
    updateExpression(position: number, updateEntry: AutocompleteEntry, type?: string): AutocompleteUpdate | null;
    getModel(): AdvancedFilterModel;
    private getFunctionCommon;
    private getOperandValue;
    private isComplete;
    private isColumnPosition;
    private isOperatorPosition;
    private isBeyondEndPosition;
    private returnEndPosition;
    private getColumnAutocompleteListParams;
    private getColumnSearchString;
    private getOperatorAutocompleteListParams;
    private getBaseCellDataTypeFromOperatorAutocompleteType;
    private hasOperand;
    private doesOperandNeedQuotes;
    private addToListAndGetIndex;
}
