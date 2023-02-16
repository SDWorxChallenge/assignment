import React from 'react';
import {
  SortingState,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  getPaginationRowModel,
  Column,
  ColumnDef,
} from '@tanstack/react-table';
import styled from 'styled-components';

import {Candidate} from '../../types/candidate';
import TableHeader from './TableHeader';
import {TableDataRow} from './styled';

type TableProps = {
  data: Candidate[];
  columns: ColumnDef<Candidate, string>[];
};

const TableContainer = styled.div`
  overflow: auto;
  position: relative;
  width: calc(100% - 148px);
  background-color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const _Table = styled.table`
  width: 100%;
  table-layout: fixed;
  box-sizing: content-box;
  border-spacing: 0;
  border-collapse: collapse;
`;

const Title = styled.p`
  color: #303642;
  font-size: 24px;
  font-weight: bold;
`;

const PaginationRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
`;

const Table = ({data, columns, ...rest}: TableProps) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {sorting},
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const {rows} = table.getRowModel();

  return (
    <>
      <TableContainer {...rest}>
        <Title>Attendees ({data.length})</Title>
        <_Table>
          <colgroup>
            {table
              .getHeaderGroups()
              .map((headerGroup) =>
                headerGroup.headers.map((header) => (
                  <col className={`${header.id}-col`} key={header.id} />
                ))
              )}
          </colgroup>
          <TableHeader headerGroups={table.getHeaderGroups()} />
          <tbody>
            {rows.map((row) => {
              return (
                <TableDataRow
                  onClick={row.getToggleSelectedHandler()}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      id={`${cell.column.id}-cell`}
                      data-testid={cell.id}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </TableDataRow>
              );
            })}
          </tbody>
        </_Table>
        <PaginationRoot>
          <button
            className='border rounded p-1'
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {'<<'}
          </button>
          <button
            className='border rounded p-1'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>
          <span className='flex items-center gap-1'>
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </strong>
          </span>
          <button
            className='border rounded p-1'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
          <button
            className='border rounded p-1'
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {'>>'}
          </button>
        </PaginationRoot>
      </TableContainer>
    </>
  );
};

export default Table;
