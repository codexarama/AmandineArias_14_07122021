import React from 'react';

export default function TableHead({ title }) {
  return (
    <thead>
      <tr>
        <th>{title}</th>
      </tr>
    </thead>
  );
}
