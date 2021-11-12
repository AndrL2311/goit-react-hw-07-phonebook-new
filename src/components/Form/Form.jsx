import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import contactsOperations from '../../redux/contacts/contacts-operations';

import s from './Form.module.css';



function Form({ onSubmit, contacts }) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleChangeName = event => {
    const { value } = event.currentTarget;
    setName(value);
  };

  const handleChangeNumber = event => {
    const { value } = event.currentTarget;
    setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = { name, number };

    // Проверка есть ли такое имя в базе
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is alredy in contacts`);
      // Сбрасываем имя и номер
      reset();
    } else {
      onSubmit(data);
        // Сбрасываем имя и номер
      reset();
    } 
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.formBox} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={nameInputId}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          id={nameInputId}
          value={name}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.label} htmlFor={numberInputId}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          id={numberInputId}
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add Contact
      </button>
    </form>
  );
}

const mapStateToProps = (state) => ({
    contacts: state.contacts.items,
  });

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => dispatch(contactsOperations.addContact(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
