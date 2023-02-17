import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AttendeesTable.css";

const AttendeesTable = () => {
  const [users, setUsers] = useState([]);
  const [editableUser, setEditableUser] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  useEffect(() => {
    axios
      .get("https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers")
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  const handleDelete = (id) => {
    setDeleteConfirmation(id);
  };

  const handleDeleteConfirmation = () => {
    const updatedUsers = users.filter((user) => user.id !== deleteConfirmation);
    setUsers(updatedUsers);
    setDeleteConfirmation(null);
  };

  const handleEdit = (user) => {
    setEditableUser(user);
  };

  const handleSave = (id, name, city, country) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, name, city, country };
      }
      return user;
    });
    setUsers(updatedUsers);
    setEditableUser(null);
  };

  return (
    <div className="hero">
      <h2 className="attendees"> Attendees ({users.length})</h2>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>First name</th>
              <th>Date of birth</th>
              <th>City</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <img src={user.avatar} alt="avatar" />
                </td>
                <td>
                  {editableUser?.id === user.id ? (
                    <input
                      type="text"
                      value={editableUser.name}
                      onChange={(e) =>
                        setEditableUser({
                          ...editableUser,
                          name: e.target.value,
                        })
                      }
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {new Date(user.dateOfBirth).toLocaleDateString("en-US")}
                </td>
                <td>
                  {editableUser?.id === user.id ? (
                    <input
                      type="text"
                      value={editableUser.city}
                      onChange={(e) =>
                        setEditableUser({
                          ...editableUser,
                          city: e.target.value,
                        })
                      }
                    />
                  ) : (
                    user.city
                  )}
                </td>
                <td>
                  {editableUser?.id === user.id ? (
                    <input
                      type="text"
                      value={editableUser.country}
                      onChange={(e) =>
                        setEditableUser({
                          ...editableUser,
                          country: e.target.value,
                        })
                      }
                    />
                  ) : (
                    user.country
                  )}
                </td>
                <td>
                  {editableUser?.id === user.id ? (
                    <button
                      onClick={() =>
                        handleSave(
                          user.id,
                          editableUser.name,
                          editableUser.city,
                          editableUser.country
                        )
                      }
                    >
                      Save
                    </button>
                  ) : (
                    <button onClick={() => handleEdit(user)}>Edit</button>
                  )}
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                  {deleteConfirmation === user.id && (
                    <div className="delete-confirmation">
                      <p>Are you sure you want to delete this user?</p>
                      <button onClick={() => handleDeleteConfirmation()}>
                        Yes
                      </button>
                      <button onClick={() => setDeleteConfirmation(null)}>
                        No
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendeesTable;
