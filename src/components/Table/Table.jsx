import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import React, { useMemo } from 'react';

import { TABLE_COLUMNS } from './tableColumns';
import EMPLOYEE_LIST from '../../data/MOCK_DATA.json';

import TableFilter from './TableFilter';

import './table.css';

export default function Table() {
  // useMemo hook to avoid re-rendering until the data changes
  const columns = useMemo(() => TABLE_COLUMNS, []);
  const data = useMemo(() => EMPLOYEE_LIST, []);

  // table instance
  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useGlobalFilter,
    useSortBy
  );

  // table props to define table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  // table head content mapping for rendering
  const theadContent = headerGroups.map((headerGroup) => {
    return (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
          <th {...column.getHeaderProps(column.getSortByToggleProps())}>
            {column.render('Header')}
            <span>
              {column.isSorted ? (column.isSortedDesc ? ' ▾' : ' ▴') : ''}{' '}
            </span>
          </th>
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

  // handle table state for filtering data with search bar component
  const { globalFilter } = state;

  return (
    <section>
      <h3>{`${EMPLOYEE_LIST.length} currently employed`}</h3>
      <TableFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table id="employees" {...getTableProps()}>
        <thead>{theadContent}</thead>
        <tbody {...getTableBodyProps()}>{tbodyContent}</tbody>
      </table>
    </section>
  );
}
