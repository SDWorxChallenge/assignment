
import './pagination.css';

const renderPaginationButton = (pageNumber, isCurrent, setPage) => {
    const classNames = `pagination-button ${isCurrent ? 'currentPage' : ''}`
    return <button className={classNames} onClick={() => setPage(pageNumber)}>
        {pageNumber + 1}
    </button>
};

const renderPaginationButtons = (page, pages, setPage) => {
    const buttonCount = new Array(pages).fill(0);

    return buttonCount.map((_, index) => renderPaginationButton(index, index === page, setPage))
}

function Pagination({page, pages, setPage}) {
    return (
      <div className="pagination">
          {renderPaginationButtons(page, pages, setPage)}
      </div>
    )
}

export default Pagination;
