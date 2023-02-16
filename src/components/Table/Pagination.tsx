import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

const PageButton = styled.button<{ active: boolean }>`
  border: none;
  background: ${(props) => (props.active ? "red" : "none")};
  color: ${(props) => (props.active ? "white" : "black")};
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2px;

  &:hover:not(:disabled) {
    border: 1px solid red;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.75;
  }
`;

function PaginationComponent({
  totalNumberOfItems,
  itemsOnPage,
  currentPage,
  onPageChange,
}: {
  totalNumberOfItems: number;
  itemsOnPage: number;
  currentPage: number;
  onPageChange: (page: number | ((page: number) => number)) => void;
}) {
  const numberOfPages = Math.ceil(totalNumberOfItems / itemsOnPage);
  const pages = Array.from({ length: numberOfPages }, (_, i) => i);
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage >= numberOfPages - 1;

  function goToFirstPage() {
    onPageChange(0);
  }

  function goToPreviousPage() {
    onPageChange((currentPage) => currentPage - 1);
  }

  function goToNextPage() {
    onPageChange((currentPage) => currentPage + 1);
  }

  function goToLastPage() {
    onPageChange(numberOfPages - 1);
  }

  useEffect(() => {
    if (currentPage >= numberOfPages && currentPage > 0) {
      onPageChange(numberOfPages - 1);
    }
  }, [currentPage, numberOfPages, onPageChange]);

  return (
    <Container>
      <PageButton active={false} onClick={goToFirstPage} disabled={isFirstPage}>
        pp
      </PageButton>
      <PageButton
        active={false}
        onClick={goToPreviousPage}
        disabled={isFirstPage}
      >
        p
      </PageButton>
      {pages.map((page) => (
        <PageButton
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page + 1}
        </PageButton>
      ))}
      <PageButton active={false} onClick={goToNextPage} disabled={isLastPage}>
        n
      </PageButton>
      <PageButton active={false} onClick={goToLastPage} disabled={isLastPage}>
        nn
      </PageButton>
    </Container>
  );
}

export default PaginationComponent;
