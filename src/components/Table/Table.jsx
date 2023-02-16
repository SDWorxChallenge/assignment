
import './table.css';

import bin from './bin.svg';
import edit from './edit.png';
import {useCallback, useState} from "react";

const Row = ({row: {id, avatar, name, dateOfBirth, city, country}, removeRow, updateRow}) => {
    const [isEdited, setIsEdited] = useState(false);

    const [nameVal, setNameVal] = useState(name);
    const [dateOfBirthVal, setDateOfBirthVal] = useState(dateOfBirth);
    const [cityVal, setCityVal] = useState(city);
    const [countryVal, setCountryVal] = useState(country);

    const editRow = useCallback(() => {
        if(isEdited) {
            updateRow({
                id: id,
                name: nameVal,
                dateOfBirth: dateOfBirthVal,
                city: cityVal,
                country: countryVal,
            });

            return setIsEdited(false);
        }

        setIsEdited(true);
    });

    return <tr key={id} className={isEdited ? 'editMode' : ''}>
        <td className="table-column table-column-id">
            <div className="id-wrapper">#{id}</div>
        </td>
        <td className="table-column table-column-avatar">
            <img src={avatar} alt={`Avatar of ${name}`}/>
        </td>
        <td className="table-column table-column-name">
            <span className="valueWrapper">{name}</span>
            <span className="inputWrapper">
                <input value={nameVal} onChange={ (event) => setNameVal(event.target.value)}/>
            </span>
        </td>
        <td className="table-column table-column-date">
            <span className="valueWrapper">{dateOfBirth}</span>
            <span className="inputWrapper">
                <input value={dateOfBirthVal} onChange={ (event) => setDateOfBirthVal(event.target.value)} /></span>
        </td>
        <td className="table-column table-column-city">
            <span className="valueWrapper">{city}</span>
            <span className="inputWrapper">
                <input value={cityVal} onChange={ (event) => setCityVal(event.target.value)} /></span>
        </td>
        <td className="table-column table-column-country">
            <span className="valueWrapper">{country}</span>
            <span className="inputWrapper">
                <input value={countryVal} onChange={ (event) => setCountryVal(event.target.value)} /></span>
        </td>
        <td className="table-column table-column-actions">
            <button>
                <img src={edit} onClick={() => editRow(id)}/>
            </button>
            <button>
                <img src={bin} onClick={() => removeRow(id)}/>
            </button>
        </td>
    </tr>
}

function Table({data, removeRow, updateRow}) {
    return (
      <div className="table">
          <table>
              <thead>
                <th className="table-column table-column-id"></th>
                <th className="table-column table-column-avatar"></th>
                <th className="table-column table-column-name">Name</th>
                <th className="table-column table-column-date">Date of birth</th>
                <th className="table-column table-column-city">City</th>
                <th className="table-column table-column-country">Country</th>
                <th className="table-column table-column-actions"></th>
              </thead>

              <tbody>
              {data.map((row) => <Row row={row} removeRow={removeRow} updateRow={updateRow}/>)}

              </tbody>
          </table>
      </div>
    )
}

export default Table;
