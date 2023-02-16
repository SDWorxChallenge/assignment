import React, { useState } from 'react';
import { useEffect } from 'react';
import Row from './Row';
import Person from "../../types/Person";

interface TableProps {
    data: Person[] | undefined;
}


const Table = (): JSX.Element => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch(`https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers`)
        .then((response) => response.json())
        .then((data) => {
            setCount(data.length);
        });
    }, []);

    useEffect(() => {
        fetch(`https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers?p=${page}&l=${limit}`)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        });
    }, [page, limit]);

    return (
        <>
            <h1>Attendees {count}</h1>
            <table>
                <thead>
                    <td></td>
                    <td></td>
                    <td>NAME</td>
                    <td>DATE OF BIRTH</td>
                    <td>CITY</td>
                    <td>COUNTRY</td>
                    <td></td>
                </thead>
                {data.map((d: Person) => <Row key={d.id} {...d} /> )}
            </table>
        </>
    );
}
export default Table;