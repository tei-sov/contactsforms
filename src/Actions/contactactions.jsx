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

export const editContact = (updatedContact) => {
  console.log(updatedContact);
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contact")
      .doc(updatedContact.id)
      .set(updatedContact)
      .then(() => {});
  };
};

export const getAllcontacts = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contacts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        let contacts = [];
        snapshot.forEach((doc) => {
          contacts.push(doc.data());
          console.log(contacts, doc);
        });

        dispatch({
          type: "SET_ALL_CONTACTS",
          payload: contacts,
        });
      });
  };
};

// export const getAllUsers = () => {
//   return(dispatch,state,{getFirestore}) => {
//     getFirestore().collection().onSnapshot((Snapshot) => {
//       let users=[];
//       snapshot.forEach() =>{
//         users.push((doc.data())
//       })

//       dispatch({
//         type:'SET_ALL_USERS',
//         payload:users
//       })
//     })
//   };

// };

// export const getAllcontacts = () => {
//   return (dispatch, state, { getFirestore }) => {
//     getFirestore()
//       .collection("contacts")
//       .orderBy("timestamp", "desc")
//       .onSnapshot((snapshot) => {
//         let contacts = [];
//         snapshot.forEach((doc) => {
//           users.push(doc.data());
//           console.log(users, doc);
//         });

//         dispatch({
//           type: "SET_ALL_CONTACTS",
//           payload: users,
//         });
//       });
//   };
// };
// }
