// import UserList from "./UserList";
// import Userform from "./Userform";
// import React, { Component } from "react";
// import "./swing.css";

// class ContactsForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       number: "",
//       location: "",
//     };
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     console.log("form-submitted");
//     this.props.addUser(this.state);
//     this.setState({
//       name: "",
//       number: "",
//       location: "",
//     });

//     event.preventDefault();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className="form-box">
//         <label htmlFor="name">
//           <h1 className="ridge">CONTACT FORM</h1>
//           <h3>Name </h3>
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             placeholder="Enter Your Name"
//             required="required"
//           />
//         </label>

//         <label htmlFor="number">
//           <h3>Number</h3>
//           <input
//             type="number"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleChange}
//             placeholder="Enter Your Number"
//             required="required"
//           />
//         </label>

//         <label htmlFor="location">
//           <h3>Location</h3>
//           <input
//             type="text"
//             name="location"
//             value={this.state.location}
//             onChange={this.handleChange}
//             placeholder="Enter Your Location"
//             required="required"
//           />
//         </label>

//         <input className="submit-btn" type="submit" />
//       </form>
//     );
//   }
// }

// export default ContactsForm;

import React, { Component } from "react";

import ContactsForm from "./contactform";
import UserList from "./UserList";

class App extends Component {
  handleAddContact = (newUser) => {
    newUser.id = Math.random().toString();

    this.setState({
      contacts: [...this.state.contacts, newUser],
    });
  };

  handleDelete = (selected_contact_id) => {
    let notDeletedContacts = this.state.contacts.filter(
      (each_contact_id_in_array) => {
        return each_contact_id_in_array.id !== selected_contact_id;
      }
    );
    this.setState({
      contacts: notDeletedContacts,
    });
  };

  handleEdit = (selected_contact_id, Updated_contact_form) => {
    this.setState({
      contacts: this.state.contacts.map((each_contact) => {
        return each_contact.id === selected_contact_id
          ? Updated_contact_form
          : each_contact;
      }),
    });
  };

  render() {
    return (
      <center>
        <ContactsForm addUser={this.handleAddContact} />
        <UserList />
        <br />
      </center>
    );
  }
}

export default App;
