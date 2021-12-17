import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import React, { useState, useMemo } from 'react';

import { TABLE_COLUMNS } from './tableColumns';
import EMPLOYEES_LIST from '../../data/MOCK_DATA.json';
import TableFilter from './TableFilter';

import './table.css';

export default function Table() {
  // useMemo hook to avoid re-rendering until the data changes
  const columns = useMemo(() => TABLE_COLUMNS, []);
  const data = useMemo(() => EMPLOYEES_LIST, []);

  // // update table with new employee data from local storage
  // const [employees, setEmployees] = useState(data);
  // const newEmployee = JSON.parse(localStorage.getItem('newEmployee'));
  // if (localStorage.length > 0) {
  //   newEmployee.id = `${EMPLOYEES_LIST.length}`;
  //   setEmployees({...employees, newEmployee});
  // // Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
  // // localStorage.clear();
  // }

  // update table with new employee data from local storage
  const newEmployee = JSON.parse(localStorage.getItem('newEmployee'));
  if (localStorage.length > 0) {
    EMPLOYEES_LIST.push(newEmployee);
    newEmployee.id = `${EMPLOYEES_LIST.length}`;
    localStorage.clear();
  }

  // table instance
  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // table props to define table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
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
  const tbodyContent = page.map((row) => {
    prepareRow(row);
    return (
      <tr {...row.getRowProps()}>
        {row.cells.map((cell) => {
          return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
        })}
      </tr>
    );
  });

  // handle table state for different options
  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <section>
      <h3>{`${EMPLOYEES_LIST.length} currently employed`}</h3>
      <TableFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table id="employees" {...getTableProps()}>
        <thead>{theadContent}</thead>
        <tbody {...getTableBodyProps()}>{tbodyContent}</tbody>
      </table>
      <div className="table-navigation">
        Show
        <select
          id="showEntries"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        entries
        <span>
          <strong>∣</strong> Go to page{' '}
          <input
            type="number"
            className="go-to-page"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value ? Number(e.target.value) : 0;
              gotoPage(pageNumber);
            }}
          />
        </span>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {/* « First */}
          ⏮ First
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {/* ‹ Previous */}
          ⯇ Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {/* Next › */}
          Next ⯈
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {/* Last » */}
          Last ⏭
        </button>
      </div>
    </section>
  );
}
