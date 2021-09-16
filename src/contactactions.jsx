export const ADD_CONTACT = "ADD_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export const addContact = (contact) => {
  contact.id = Math.random().toString();
  return (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    db.collection("contact")
      .add(contact)
      .then((docs) => {
        console.log("called");
      })
      .catch((err) => console.log(err));

    // type: "ADD_CONTACT",
    // payload: contact,
  };
};

export const EditContact = (contact_id, updatedContact) => {
  updatedContact.id = Math.random().toString();

  return {
    type: EDIT_CONTACT,
    contact_id: contact_id,
    updatedContact: updatedContact,
  };
};

export const DeleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};
