import React from "react";
import { connect } from "react-redux";
import User from "./User";

const UserList = ({ contacts, deleteUser, editUser }) => {
  const userList = contacts.map((user) => {
    return (
      <User
        user={contacts}
        key={user.id}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    );
  });
  return <div className="user-list">{userList}</div>;
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps)(UserList);
