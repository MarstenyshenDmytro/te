import React, { useState, useEffect } from "react";

import Button from "../Button";

import "./usersList.scss";

const UsersList = ({
  state: { users },
  handlers: { handleUserEdit, handleUserDelete },
}) => {
  if (!users.length) {
    return <p>List is empty</p>;
  }

  return (
    <section className="users-list">
      <table>
        <thead>
          <tr>
            <th>Full name</th>
            <th>Phones</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ name, secondName, phone, email, id }) => (
            <tr key={name}>
              <td>{`${name} ${secondName}`}</td>
              <td>{phone}</td>
              <td>
                <Button
                  onClick={() =>
                    handleUserEdit({ name, secondName, phone, email, id })
                  }
                  label="ed"
                />
                <Button onClick={() => handleUserDelete(id)} label="del" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UsersList;
