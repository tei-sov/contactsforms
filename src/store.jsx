import { createStore, compose, applyMiddleware } from "redux";
import ContactReducer from "./reducers/contactreducer";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "./config";
import firestore from "./config";

const Store = createStore(
  ContactReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase),
    reduxFirestore(firestore)
  )
);

export default Store;
