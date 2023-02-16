import React from "react";
import Person from "../../types/Person";

interface RowProps extends Person {}

const Row = ({id, dateOfBirth, name, avatar, country, city}: RowProps): JSX.Element => {
    return <tr>
        <td className="id-wrapper">
            <div className="id">{`#${id}`}</div>
        </td>
        <td className="avatar"><img src={avatar} /></td>
        <td className="name">{name}</td>
        <td>{dateOfBirth}</td>
        <td>{city}</td>
        <td>{country}</td>
        <td>
            <button>modify</button>
            <button>remove</button>
        </td>
    </tr>
}

export default Row;