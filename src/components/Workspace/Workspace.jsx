
import './workspace.css';
import {useState, useEffect, useCallback} from "react";
import Table from '../Table/Table';
import Pagination from '../Pagination/Pagination';

const API_URL = 'https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers';
const PAGE_SIZE = 10;

const paginate = (data, page) => {
    return data.slice(page * PAGE_SIZE, (page+1) * PAGE_SIZE);
}

function Workspace() {
    const [hikers, setHikers] = useState([]);
    const [hikersToShow, setHikersToShow] = useState([]);
    const [hikersCount, setHikersCount] = useState(0);
    const [page, setPage] = useState(0);

    const changePage = useCallback((newPage) => {
        setPage(newPage);
        setHikersToShow(paginate(hikers, newPage));
    })

    const removeRow = useCallback((idToRemove) => {
        setHikers(hikers.filter(({id}) => id !== idToRemove));
    });

    const updateRow = useCallback(({id, name, dateOfBirth, city, country}) => {
        const tempHikers = [...hikers];
       for(let i=0; i< hikersCount; i++) {
           if(tempHikers[i].id === id) {
               tempHikers[i] = {
                   ...hikers[i],
                   name,
                   dateOfBirth,
                   city,
                   country,
               };

               setHikers(tempHikers);
           }
       }
    });

    useEffect(() => {
        setHikersToShow(paginate(hikers, page));
    }, [hikers])

    useEffect(() => {
        setHikersCount(hikers.length);
    }, [hikers])

    useEffect(() => {
        fetch(API_URL).then(response => response.json()).then(data => {
            setHikers(data, page);
        })
    }, []);

    return (
      <div className="workspace">
          <h4>Attendees ({hikersCount})</h4>
          <Table data={hikersToShow} removeRow={removeRow} updateRow={updateRow}/>
          <Pagination page={page} pages={Math.ceil(hikersCount / PAGE_SIZE)} setPage={changePage} />
      </div>
    )
}

export default Workspace;
