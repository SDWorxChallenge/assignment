import React, { useEffect, useReducer, useState } from "react"
import './App.css';
import Logo from "./assets/logo";
import TrahsBin from "./assets/trahsBin";
import Decor from "./assets/decor.png"
import Avatar from "./assets/Avatar.png"
import axios from "axios";
import { initialState, reducer } from "./reducer/reducer";
import moment from "moment/moment";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers").then(res => {
      console.log(res)
      setData(res.data)
      dispatch({ type: "ADD", payload: res.data })
    }).catch(err => console.log(err))
  }, [])

  const [state, dispatch] = useReducer(reducer, initialState)

  const deleteHiker = (id) => {
    var bool = window.confirm("Are you sure to delete this row?")
    bool && dispatch({ type: "DELETE", payload: id })
  }

  return (
    <div className="App">
      <div className="navbar d-flex justify-between align-center">
        <Logo />
        <img className="decor" src={Decor} alt="..." />
      </div>
      <div className="wrapper">
        <h2 className="heading">Attendees <span>{state.hikers.length}</span></h2>
        <table cellPadding={0} cellSpacing={0} >
          <thead>
            <tr>
              <th>.</th>
              <th>Name</th>
              <th>Date of birth</th>
              <th>City</th>
              <th>Country</th>
              <th>.</th>
            </tr>
          </thead>
          <tbody>
            {
              state.hikers?.length != 0 && state.hikers.map((item, index) => (
                <tr key={index}>
                  <td className="index">
                    #{item.id}
                  </td>
                  <td className="avatarBox"><img src={item.avatar} alt="..." className="avatar" /></td>
                  <td className="nameBox"><p className="name">{item.name}</p> <p className="d-none mobile-place"> {item.city}</p></td>
                  <td>{moment(item.dateOfBirth).format('L')}</td>
                  <td className="place">{item.city}</td>
                  <td onClick={() => deleteHiker(item.id)} className="pointer"><TrahsBin /></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
