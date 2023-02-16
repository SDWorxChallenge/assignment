import {createColumnHelper} from '@tanstack/react-table';
import styled from 'styled-components';
import * as dateFns from 'date-fns';

import {Candidate} from '../../types/candidate';
import DeleteSVG from '../../assets/delete.svg';
import EditSVG from '../../assets/edit.svg';

type ExtendedCandidate = Candidate & {icons?: string};

const columnHelper = createColumnHelper<ExtendedCandidate>();

const TableCell = styled.div`
  color: #303642;
  display: flex;
  flex-direction: row;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

const DeleteIcon = styled.img.attrs({src: DeleteSVG})`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const EditIcon = styled(DeleteIcon).attrs({src: EditSVG})`
  margin-right: 20px;
`;

const createColumns = (onDelete: (candidate: ExtendedCandidate) => void) => [
  columnHelper.accessor('id', {
    header: '',
    cell: (info) => <TableCell>{info.getValue()}</TableCell>,
    enableSorting: false,
  }),
  columnHelper.accessor('avatar', {
    header: '',
    cell: (info) => <Avatar src={info.getValue()} />,
    enableSorting: false,
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => <TableCell>{info.getValue()}</TableCell>,
  }),
  columnHelper.accessor('dateOfBirth', {
    header: 'Date of Birth',
    cell: (info) => (
      <TableCell>
        {dateFns.format(new Date(info.getValue()), 'd/MM/yyyy')}
      </TableCell>
    ),
  }),
  columnHelper.accessor('city', {
    header: 'City',
    cell: (info) => <TableCell>{info.getValue()}</TableCell>,
  }),
  columnHelper.accessor('country', {
    header: 'Country',
    cell: (info) => <TableCell>{info.getValue()}</TableCell>,
  }),
  columnHelper.accessor('icons', {
    header: '',
    cell: (info) => (
      <TableCell>
        <EditIcon />
        <DeleteIcon onClick={() => onDelete(info.row.original)} />
      </TableCell>
    ),
    enableSorting: false,
  }),
];

export default createColumns;
