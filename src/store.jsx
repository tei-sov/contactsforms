import { createStore } from "redux";
import usersReducer from "./usersReducers";

const Store = createStore(usersReducer);

export default Store;
