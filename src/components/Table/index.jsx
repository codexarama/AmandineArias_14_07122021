import React, { useEffect, useState, useMemo } from 'react';

import {
  useTable,
  useAbsoluteLayout,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table';

import EMPLOYEES_LIST from '../../data/MOCK_DATA.json';

import { TABLE_COLUMNS } from './tableColumns';
import TableFilter from './TableFilter';

import './table.css';

  // GET DATA
  let employeesList =
    JSON.parse(window.localStorage.getItem('employeesList')) || EMPLOYEES_LIST;
  // console.log(employeesList);


// Create an editable cell renderer
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateData,
}) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  // Update the external data when the input is blurred
  const onBlur = () => {
    updateData(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <input
      className="table-main--edit"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

// Set editable cell renderer as the default Cell renderer
const defaultColumn = {
  Cell: EditableCell,
};

/**
 * Table
 * @returns {Reactnode}  jsx injected in DOM
 */
function Table({ columns, data, updateData, skipPageReset }) {
  // const defaultColumn = React.useMemo(
  //   () => ({
  //     width: 100,
  //     Cell: EditableCell,
  //   }),
  //   []
  // )

  // TABLE INSTANCE
  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
      // use the skipPageReset option to disable page resetting temporarily
      autoResetPage: !skipPageReset,
      // updateData isn't part of the API, but
      // anything we put into these options will
      // automatically be available on the instance.
      // That way we can call this function from
      // cell renderer
      updateData,
    },
    // useAbsoluteLayout,
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
            <button
              tabIndex="0"
              aria-label="sort by ascent order"
              className="table-main--arrowUp"
            >
              ▴
            </button>
            <button
              tabIndex="0"
              aria-label="sort by descent order"
              className="table-main--arrowDown"
            >
              ▾
            </button>
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
        >{`currently ${data.length} employees`}</h3>
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

export default function EditTable() {
  // // GET DATA
  // let employeesList =
  //   JSON.parse(window.localStorage.getItem('employeesList')) || EMPLOYEES_LIST;
  // // console.log(employeesList);

  // useMEMO HOOK to avoid re-rendering until the data changes
  const columns = useMemo(() => TABLE_COLUMNS, []);

  const [data, setData] = useState(employeesList);
  const [skipPageReset, setSkipPageReset] = useState(false);
  // const [originalData] = useState(data)

  // Keep the table from resetting the pageIndex when update data.
  // So can keep track of that flag with a ref.

  // When cell renderer calls updateData,
  // the rowIndex, columnId and new value are used
  // to update the original data
  const updateData = (rowIndex, columnId, value) => {
    // Also turn on the flag to not reset the page
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  // After data changes, turn the flag back off
  // so that if data actually changes when we're not editing it,
  // the page is reset
  useEffect(() => {
    setSkipPageReset(false);
  }, [data]);

  // // Data resetter/randomizer to help illustrate that flow...
  // const resetData = () => setData(originalData)

  return (
    <>
      <Table
        columns={columns}
        data={data}
        updateData={updateData}
        skipPageReset={skipPageReset}
      />
      {/* <button onClick={resetData}>Reset Data</button> */}
    </>
  );
}
