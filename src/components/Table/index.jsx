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

/**
 * Table
 * @returns {Reactnode}  jsx injected in DOM
 */
export default function Table() {
  // GET DATA
  let employeesList =
    JSON.parse(window.localStorage.getItem('employeesList')) || EMPLOYEES_LIST;
  // console.log(employeesList);

  // useMEMO HOOK to avoid re-rendering until the data changes
  const columns = useMemo(() => TABLE_COLUMNS, []);
  const data = useMemo(
    () => employeesList,
    // eslint-disable-next-line
    []
  );

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
          <th
            tabIndex="0"
            {...column.getHeaderProps(column.getSortByToggleProps())}
          >
            {column.render('Header')}
            <span>
              {column.isSorted ? (column.isSortedDesc ? ' ▾' : ' ▴') : ''}
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
          return (
            <td tabIndex="0" {...cell.getCellProps()}>
              {cell.render('Cell')}
            </td>
          );
        })}
      </tr>
    );
  });

  // handle TABLE STATE for different options
  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <header className="table-header">
        <label htmlFor="show-entries" className="table-header--entries">
          Show
          <select
            tabIndex="0"
            id="show-entries"
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
        </label>
        <h3
          tabIndex="0"
          className="table-header--title"
        >{`currently ${employeesList.length} employees`}</h3>
        <TableFilter
          className="table-header--search"
          id="search"
          filter={globalFilter}
          setFilter={setGlobalFilter}
        />
      </header>
      <main className="table-main">
        <table className="table-main--list" {...getTableProps()}>
          <thead>{theadContent}</thead>
          <tbody {...getTableBodyProps()}>{tbodyContent}</tbody>
        </table>
      </main>
      <footer className="table-footer">
        <span tabIndex="0" className="table-footer--pageIndex">
          <strong>
            Page {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span className="table-footer--nav">
          <button
            className="table-nav--btn"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            « First
          </button>
          <button
            className="table-nav--btn"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            ‹ Previous
          </button>
          <button
            className="table-nav--btn"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next ›
          </button>
          <button
            className="table-nav--btn"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            Last »
          </button>
        </span>
      </footer>
    </>
  );
}
