import {flexRender, HeaderGroup, SortDirection} from '@tanstack/react-table';
import styled from 'styled-components';

import SortingIconSVG from '../../assets/sort.svg';
import {TableDataRow} from './styled';

type TableHeaderProps<TData> = {
  headerGroups: HeaderGroup<TData>[];
};

const Root = styled.thead`
  position: sticky;
  background-color: #f1f4f8;
  background-clip: padding-box;
  top: 0;
`;

const TableColumnCell = styled.th`
  font-weight: bold;
  font-size: 26;
  color: #555d71;
  cursor: pointer;
  text-align: start;
  position: relative;
  :last-of-type svg {
    right: 0;
  }
  :not(:last-of-type):after {
    content: '';
    position: absolute;
    width: 1px;
    height: 80%;
    top: 50%;
    right: 8px;
    background-color: white;
    opacity: 0.5;
    transform: translate(-50%, -50%);
  }
  :nth-last-of-type(2) {
    :after {
      right: 0;
    }
    svg {
      right: 8px;
    }
  }
`;

const _SortingColumn = styled.img.attrs({src: SortingIconSVG})<{
  $sortDirection?: SortDirection | false;
}>`
  position: absolute;
  top: 50%;
  right: 16px;
  opacity: ${({$sortDirection}) => (!!$sortDirection ? 1 : 0.5)};
  transform: ${({$sortDirection}) => {
    const ascending = $sortDirection === 'asc';
    return `rotate(${ascending ? 180 : 0}deg) translate(${
      ascending ? 50 : -50
    }%, ${ascending ? 50 : -50}%);`;
  }};
`;

const TableHeader = <TData,>({headerGroups}: TableHeaderProps<TData>) => {
  return (
    <Root>
      {headerGroups.map((headerGroup) => (
        <TableDataRow header key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableColumnCell
              onClick={header.column.getToggleSortingHandler()}
              key={header.id}
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              {header.column.getCanSort() && (
                <_SortingColumn $sortDirection={header.column.getIsSorted()} />
              )}
            </TableColumnCell>
          ))}
        </TableDataRow>
      ))}
    </Root>
  );
};

export default TableHeader;
