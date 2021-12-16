export const TABLE_COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Identity',
    columns: [
      {
        Header: 'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',
      },
      {
        Header: 'Birth Date',
        accessor: 'date_Of_birth',
      },
    ],
  },
  {
    Header: 'Address',
    columns: [
      {
        Header: 'Street',
        accessor: 'street',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'State',
        accessor: 'state',
      },
      {
        Header: 'Zip Code',
        accessor: 'zip_code',
      },
    ],
  },

  {
    Header: 'Infos',
    columns: [
      {
        Header: 'Start Date',
        accessor: 'start_date',
      },
      {
        Header: 'Department',
        accessor: 'department',
      },
    ],
  },
];
