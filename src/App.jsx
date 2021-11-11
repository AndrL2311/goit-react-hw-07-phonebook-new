// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

import s from './App.module.css';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className={s.container}>
      <h1 className={s.titlePhonebook}>Phonebook</h1>
      <Form />
      <h2 className={s.titleContacts}>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}

export default App;
