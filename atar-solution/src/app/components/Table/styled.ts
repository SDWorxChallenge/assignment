import styled from 'styled-components';

export const TableDataRow = styled.tr<{header?: boolean}>`
  font-size: 22;
  color: white;
  ${({theme, header}) => !header && `border-bottom: 1pt solid gray`};
  background-clip: padding-box;
  td,
  th {
    padding: 12px 0;
  }
  td:first-of-type,
  th:first-of-type {
    padding-left: 12px;
  }
  td:last-of-type,
  th:last-of-type {
    padding-left: 12px;
  }
`;
