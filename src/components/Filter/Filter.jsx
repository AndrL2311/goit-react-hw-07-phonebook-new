import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { filterContact } from '../../redux/contacts/contacts-actions';

function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      Find contacts by name{' '}
      <input
        type="text"
        className={s.input}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispachToProps = dispatch => ({
  onChange: event => dispatch(filterContact(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispachToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
