import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import EditUserForm from "./EditUserForm";

const User = ({ user, deleteUser, editUser }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    deleteUser(user.id);
  };
  return (
    <>
      <div className="users">
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
        <h3>{user.number}</h3>
        <Button
          variant="primary onClick={handleShow}>Edit</Button> <br />
           <Button variant="
          secondary
          onClick={handleDelete}
        >
          Delete
        </Button>
        {""}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            user={user}
            editUser={editUser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default User;
