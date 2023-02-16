import { Component, OnInit } from '@angular/core';
import { TableSortDirection, TableSorting, TableStore } from './table.store';
import { map } from 'rxjs';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    protected data$ = this.tableStore.preparedData$;
    protected pageCount$ = this.tableStore.pageCount$.pipe(map((count) => Array(count)));
    protected pageIndex$ = this.tableStore.pageIndex$;
    protected sorting$ = this.tableStore.sorting$;
    constructor(protected readonly tableStore: TableStore) {}

    ngOnInit() {
        this.tableStore.loadData();
    }

    protected updatePageIndex(event: any) {
        this.tableStore.updatePageIndex(event.target.value - 1);
    }

    protected updateSorting(sortColumn: string, sortDirection?: TableSortDirection) {
        sortDirection = sortDirection === TableSortDirection.asc ? TableSortDirection.desc : TableSortDirection.asc;
        this.tableStore.updateSorting({ sortColumn, sortDirection });
    }
}
