import { useTable } from 'react-table';
import React, { useMemo } from 'react';

import { TABLE_COLUMNS } from './tableColumns';
import EMPLOYEE_LIST from '../../data/MOCK_DATA.json';

import './table.css';

export default function Table() {
  // useMemo hook to avoid re-rendering until the data changes
  const columns = useMemo(() => TABLE_COLUMNS, []);
  const data = useMemo(() => EMPLOYEE_LIST, []);

  // table instance
  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  // table props to define table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  // table head content mapping for rendering
  const theadContent = headerGroups.map((headerGroup) => {
    return (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
          <th {...column.getHeaderProps()}>{column.render('Header')}</th>
        ))}
      </tr>
    );
  });

  // table body content mapping for rendering
  const tbodyContent = rows.map((row) => {
    prepareRow(row);
    return (
      <tr {...row.getRowProps()}>
        {row.cells.map((cell) => {
          return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
        })}
      </tr>
    );
  });

  return (
    <section>
      <h3>{`${EMPLOYEE_LIST.length} currently employed`}</h3>
      {/* <h3>{`${employees.length} currently employed`}</h3> */}
      <table id="employees" {...getTableProps()}>
        <thead>{theadContent}</thead>
        <tbody {...getTableBodyProps()}>{tbodyContent}</tbody>
      </table>
    </section>
  );
}
