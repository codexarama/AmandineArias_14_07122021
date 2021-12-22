import React, { useState } from 'react';

export default function Dropdown({ id, label, select, handleChange }) {
  const [isVisible, setIsVisible] = useState(false);
  const isOpen = () => setIsVisible(!isVisible);

  return (
    <div className={`input-wrapper ${id}`}>
      <label htmlFor={id}>{label}</label>
      <select
        className="dropdownList"
        id={id}
        onClick={isOpen}
        onChange={handleChange}
        required
      >
        {select.map((data) => (
          <option type="text" value={data.value} key={data.abbrev}>
            {data.value || data.abbrev}
          </option>
        ))}
      </select>{' '}
    </div>
  );
}
