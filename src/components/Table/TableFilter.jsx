import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

import searchIcon from '../../assets/ico-search.svg';

import PropTypes from 'prop-types';

/**
 * TableFilter
 *
 * @param   {object}      props
 * @param   {string}      props.filter        [initial value]
 * @param   {function}    props.setFilter     [new value || undefined]
 * @param   {string}      props.className     [span wrapper className]
 * @param   {string}      props.id            [label "html for" identifiant]
 *
 * @returns {Reactnode}   jsx injected in DOM
 */
export default function TableFilter({ filter, setFilter, className, id }) {
  const [value, setValue] = useState(filter);

  const handleChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 500);

  return (
    <span className={className}>
      <img src={searchIcon} alt="search icon" />
      <label htmlFor={id}>Search</label>
      <input
        id={id}
        type="search"
        role="searchbox"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          handleChange(e.target.value);
        }}
      />
    </span>
  );
}

/**
 * TableFilter PROPTYPES
 */
TableFilter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
