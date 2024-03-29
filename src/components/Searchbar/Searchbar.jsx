import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import search from '../../search.svg';

const INITIAL_FORM_STATE = {
  searchValue: '',
};

const Searchbar = ({ onSubmit }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(formData.searchValue);
    setFormData({ searchValue: '' });
  };

  const handleSearchTermChange = ({ target: { value, name } }) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form className={css.search_form} onSubmit={handleSubmit}>
        <button type="submit" className={css.search_button}>
          <img src={search} alt="search img" />
        </button>

        <input
          onChange={handleSearchTermChange}
          type="text"
          autoComplete="off"
          autoFocus
          name="searchValue"
          value={formData.searchValue}
          placeholder="Search movies..."
          className={css.input_item}
        />
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
