import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

import search from '../../assets/ico-search.svg';

export default function TableFilter({ filter, setFilter }) {

const [value, setValue] = useState(filter)

const handleChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
}, 500)

  return (
    <span className="search">
      <img src={search} alt="search icon" className='search-icon' /> Search{' '}
      <input type="text" value={value || ''} onChange={(e) => {
          setValue(e.target.value)
          handleChange(e.target.value)
      }} />
    </span>
  );
}
