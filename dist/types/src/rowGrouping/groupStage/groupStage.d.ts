import type { BeanCollection, ClientSideRowModelStage, GridOptions, IRowNodeStage, NamedBean, StageExecuteParams } from 'ag-grid-community';
import { BeanStub } from 'ag-grid-community';
export declare class GroupStage extends BeanStub implements NamedBean, IRowNodeStage {
    beanName: "groupStage";
    refreshProps: Set<keyof GridOptions<any>>;
    step: ClientSideRowModelStage;
    private colModel;
    private rowGroupColsSvc?;
    private valueSvc;
    private selectionSvc?;
    private showRowGroupCols;
    wireBeans(beans: BeanCollection): void;
    private oldGroupingDetails;
    private oldGroupDisplayColIds;
    execute(params: StageExecuteParams): void;
    private positionLeafsAndGroups;
    private createGroupingDetails;
    private handleDeltaUpdate;
    private sortChildren;
    private orderGroups;
    private getExistingPathForNode;
    private moveNodeInWrongPath;
    private moveNode;
    private removeNodes;
    private forEachParentGroup;
    private removeNodesFromParents;
    private removeEmptyGroups;
    private removeFromParent;
    /**
     * This is idempotent, but relies on the `key` field being the same throughout a RowNode's lifetime
     */
    private addToParent;
    private areGroupColsEqual;
    private checkAllGroupDataAfterColsChanged;
    private shotgunResetEverything;
    private noChangeInGroupingColumns;
    private insertNodes;
    private insertOneNode;
    private findParentForNode;
    private getOrCreateNextNode;
    private createGroup;
    private createGroupId;
    private setGroupData;
    private getChildrenMappedKey;
    private setExpandedInitialValue;
    private getGroupInfo;
}
