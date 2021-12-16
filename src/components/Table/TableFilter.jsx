import React from 'react';

export default function TableFilter({ filter, setFilter }) {
  const handleChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };
  return (
    <span className="search">
      🔎 Search{' '}
      <input
        type="text"
        value={filter || ''}
        onChange={handleChange}
      />
    </span>
  );
}
