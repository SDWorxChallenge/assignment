import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Person } from '../../models/person';
import { Observable, switchMap, tap } from 'rxjs';
import { Data } from '@angular/router';
import { DataService } from '../../services/data.service';
export enum TableSortDirection {
    asc = 'asc',
    desc = 'desc',
}

export interface TableSorting {
    sortColumn: string;
    sortDirection: TableSortDirection;
}

export const PAGE_SIZE = 10;

interface TableStoreState {
    data: Person[];
    sorting?: TableSorting;
    pageIndex: number;
    pageCount: number;
}

const initialState: TableStoreState = {
    data: [],
    pageIndex: 0,
    pageCount: 0,
};

@Injectable()
export class TableStore extends ComponentStore<TableStoreState> {
    private readonly data$ = this.select(({ data }) => data);
    readonly sorting$ = this.select(({ sorting }) => sorting);
    readonly pageIndex$ = this.select(({ pageIndex }) => pageIndex);

    readonly pageCount$ = this.select(({ pageCount }) => pageCount);
    readonly preparedData$: Observable<Person[]> = this.select(this.data$, this.pageIndex$, this.sorting$, (data, pageIndex, sorting) => {
        let sortedData;
        if (sorting) {
            sortedData = data.sort((a: Person, b: Person) => {
                let sortingResult = 0;
                // TODO: Fix later
                // @ts-ignore
                if (a[sorting.sortColumn] < b[sorting.sortColumn]) {
                    sortingResult = -1;
                }
                // @ts-ignore
                if (a[sorting.sortColumn] > b[sorting.sortColumn]) {
                    sortingResult = 1;
                }
                if (sorting.sortDirection === TableSortDirection.desc) {
                    sortingResult = sortingResult * -1;
                }

                return sortingResult;
            });
        } else {
            sortedData = data;
        }

        const startIndex = PAGE_SIZE * pageIndex;
        return sortedData.slice(startIndex, startIndex + PAGE_SIZE);
    });
    constructor(private readonly dataService: DataService) {
        super(initialState);
    }

    readonly loadData = this.effect((load$) =>
        load$.pipe(
            switchMap(() => this.dataService.getData()),
            tap((data: Person[]) => this.patchState({ data })),
            tap((data:Person[]) => this.patchState({ pageCount:  Math.ceil(data.length / PAGE_SIZE)}))
        )
    );

    readonly resetPageIndex = this.updater((state) => ({ ...state, pageIndex: 0 }));
    readonly incrementPageIndex = this.updater((state) => ({
        ...state,
        pageIndex: state.pageIndex === state.pageCount - 1 ? state.pageIndex : state.pageIndex + 1,
    }));

    readonly setMaxPageIndex = this.updater((state) => ({...state, pageIndex: state.pageCount - 1}));

    readonly decrementPageIndex = this.updater((state) => ({
        ...state,
        pageIndex: !state.pageIndex ? state.pageIndex : state.pageIndex - 1,
    }));
    readonly updatePageIndex = this.updater((state, pageIndex: number) => ({
        ...state,
        pageIndex,
    }));
    readonly updateSorting = this.updater((state, sorting: TableSorting) => ({
        ...state,
        sorting,
    }));
}
