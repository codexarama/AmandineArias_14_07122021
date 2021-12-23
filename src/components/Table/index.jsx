import React, { useMemo } from 'react';

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table';

import EMPLOYEES_LIST from '../../data/MOCK_DATA.json';

import { TABLE_COLUMNS } from './tableColumns';
import TableFilter from './TableFilter';

import './table.css';

export default function Table() {
  // GET DATA
  let employeesList =
    JSON.parse(window.localStorage.getItem('employeesList')) || EMPLOYEES_LIST;
console.log(employeesList);
  // useMEMO HOOK to avoid re-rendering until the data changes
  const columns = useMemo(() => TABLE_COLUMNS, []);
  const data = useMemo(() => employeesList, []);

  // TABLE INSTANCE
  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // TABLE PROPS to define table instance
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

  // TABLE HEAD content mapping for rendering
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

  // TABLE BODY content mapping for rendering
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

  // handle TABLE STATE for different options
  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <section>
      <h3>{`${employeesList.length} currently employed`}</h3>
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
          <strong>
            Page {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          « First
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          ‹ Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next ›
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          Last »
        </button>
      </div>
    </section>
  );
}
