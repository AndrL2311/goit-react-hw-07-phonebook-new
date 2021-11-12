import axios from "axios";
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
} from "./contacts-actions";

// axios.defaults.baseURL = 'http://localhost:4040';
axios.defaults.baseURL = "https://618d6851fe09aa001744073a.mockapi.io/";

// const fetchContacts = () => (dispatch) => {
//   dispatch(fetchContactRequest());

//   axios
//     .get("/contacts")
//     .then(({ data }) => dispatch(fetchContactSuccess(data)))
//     .catch((error) => dispatch(fetchContactError(error)));
// };

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

// const addContact = (contact) => (dispatch) => {
//   const item = { name: contact.name, number: contact.number };

//   dispatch(addContactRequest());
//   axios
//     .post("/contacts", item)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch((error) => dispatch(addContactError(error)));
// };

const addContact = (contact) => async (dispatch) => {
  const item = { name: contact.name, number: contact.number };

  dispatch(addContactRequest());

  try {
    const { data } = await axios.post("/contacts", item);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

// const deleteContact = (contactId) => (dispatch) => {
//   dispatch(deleteContactRequest());
//   axios
//     .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(deleteContactSuccess(contactId)))
//     .catch((error) => dispatch(deleteContactError(error)));
// };

const deleteContact = (contactId) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

// deleteContactSuccess,
// deleteContactError,

const contactsOperations = { fetchContacts, addContact, deleteContact };

export default contactsOperations;
