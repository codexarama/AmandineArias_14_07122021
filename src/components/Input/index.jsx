import React from 'react';

export default function Input({ className, id, label, type, value, index, handleChange }) {
  return (
    <div className={`input-wrapper ${className}`} key={index}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        autoComplete="off"
        required
      />
    </div>
  );
}
