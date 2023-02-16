import React from "react";

interface PaginationProps {
    total: number;
    limit: number;
    page: number;
}

// const Button = ({page, setPage}): JSX.Element => {
//     const onClick = () => {
//         setPage(page);
//     }
//     return <div onClick={onClick}>{page}</div>
// }

// const Row = ({total, limit, setPage}: PaginationProps): JSX.Element => {
//     const pageCount = Math.ceil(total / limit);

//     return <Button {} />
// }

// export default Row;