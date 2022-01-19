export const TABLE_COLUMNS = [
  {
    Header: 'Identity',
    columns: [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Birth Date',
        accessor: 'dateOfBirth',
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
        accessor: 'stateAbbrev',
      },
      {
        Header: 'Zip Code',
        accessor: 'zipCode',
      },
    ],
  },

  {
    Header: 'Informations',
    columns: [
      {
        Header: 'Start Date',
        accessor: 'startDate',
      },
      {
        Header: 'Department',
        accessor: 'department',
      },
    ],
  },

  // {
  //   Header : 'Actions',
  //   columns: [
  //     {
  //       Header: 'm'
  //     },
  //     {
  //       Header: 'x'
  //     }
  //   ]
  // }
];
