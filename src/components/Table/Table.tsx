import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: lightgray;
`;

const Tr = styled.tr`
  text-align: left;
`;

const Th = styled.th`
  padding: 10px 0;
  border-bottom: 1px solid gray;
`;

const Td = styled.td`
  padding: 10px 0;
  border-bottom: 1px solid gray;
`;

const SortButton = styled.button<{ active: boolean }>`
  border: none;
  background: none;
  width: 30px;
  height: 30px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
`;

interface Column<T> {
  key: keyof T;
  displayName: string;
  displayRow?: (item: T) => React.ReactNode;
  sortable?: boolean;
}

interface SortKey<T> {
  key: keyof T;
  direction: "ascending" | "descending";
}

function TableComponent<T extends { id: string }>({
  columns,
  data,
}: {
  columns: Column<T>[];
  data: T[];
}) {
  const [sortKeys, setSortKeys] = useState<SortKey<T>[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsOnPage = 10;
  const sortedData = data.slice().sort((a, b) => {
    for (const sortKey of sortKeys) {
      if (a[sortKey.key] === b[sortKey.key]) {
        continue;
      }
      const multiplier = sortKey.direction === "ascending" ? 1 : -1;
      return (
        multiplier *
        String(a[sortKey.key]).localeCompare(String(b[sortKey.key]))
      );
    }
    return 0;
  });

  const dataOnPage = sortedData.slice(
    currentPage * itemsOnPage,
    (currentPage + 1) * itemsOnPage
  );

  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th />
            {columns.map((column) => {
              const sortKey = sortKeys.find((s) => s.key === column.key);
              const sortDirection =
                !sortKey?.direction || sortKey.direction === "ascending"
                  ? "ascending"
                  : "descending";

              function onToggleSort() {
                if (!sortKey) {
                  setSortKeys([{ key: column.key, direction: "ascending" }]);
                } else if (sortKey.direction === "ascending") {
                  setSortKeys([{ key: column.key, direction: "descending" }]);
                } else {
                  setSortKeys([]);
                }
              }

              return (
                <Th key={String(column.key)}>
                  {column.displayName}{" "}
                  {column.sortable && (
                    <SortButton active={!!sortKey} onClick={onToggleSort}>
                      {sortDirection === "ascending" ? "asc" : "desc"}
                    </SortButton>
                  )}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <tbody>
          {dataOnPage.map((item, index) => (
            <Tr key={item.id}>
              <Td>{index + 1}</Td>
              {columns.map((column) => (
                <Td key={String(column.key)}>
                  {column.displayRow
                    ? column.displayRow(item)
                    : String(item[column.key])}
                </Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        totalNumberOfItems={data.length}
        itemsOnPage={itemsOnPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default TableComponent;
