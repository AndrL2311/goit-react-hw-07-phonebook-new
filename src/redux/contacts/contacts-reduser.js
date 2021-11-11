import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContact,
} from "./contacts-actions";

const itemsReducer = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

// if (state.find(contact => contact.name === payload.name)) {
//   return alert(`${payload.name} is alredy in contacts`);
// } else {
//   return [...state, payload];
// }

const filterReduser = createReducer("", {
  [filterContact]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const counterReducer = combineReducers({
  items: itemsReducer,
  filter: filterReduser,
  loading,
});

export default counterReducer;
