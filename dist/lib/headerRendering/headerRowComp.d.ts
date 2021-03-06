// Type definitions for ag-grid v7.2.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { Component } from "../widgets/component";
import { IRenderedHeaderElement } from "./iRenderedHeaderElement";
import { DropTarget } from "../dragAndDrop/dragAndDropService";
export declare class HeaderRowComp extends Component {
    private gridOptionsWrapper;
    private columnController;
    private context;
    private eventService;
    private dept;
    private pinned;
    private headerElements;
    private eRoot;
    private dropTarget;
    private showingGroups;
    constructor(dept: number, showingGroups: boolean, pinned: string, eRoot: HTMLElement, dropTarget: DropTarget);
    forEachHeaderElement(callback: (renderedHeaderElement: IRenderedHeaderElement) => void): void;
    destroy(): void;
    private removeAndDestroyChildComponents(idsToDestroy);
    private onRowHeightChanged();
    private init();
    private onColumnResized();
    private setWidth();
    private onDisplayedColumnsChanged();
    private onVirtualColumnsChanged();
    private createHeaderElement(columnGroupChild);
}
