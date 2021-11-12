import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { filterContact } from "./contacts-actions";

import contactsOperations from "./contacts-operations";

const { fetchContacts, addContact, deleteContact } = contactsOperations;

const itemsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filterReduser = createReducer("", {
  [filterContact]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const counterReducer = combineReducers({
  items: itemsReducer,
  filter: filterReduser,
  loading,
});

export default counterReducer;
