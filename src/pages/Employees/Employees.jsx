import { useEffect } from 'react';
import Table from '../../components/Table/Table';
import EMPLOYEES_LIST from '../../data/MOCK_DATA.json';

let employeesList = window.localStorage.setItem(
  'employeesList',
  JSON.stringify(EMPLOYEES_LIST) || []
);
console.log(employeesList);

export default function Employees() {
  useEffect(() => {
    document.title = 'HRnet | Employees';
  });

  return (
    <main className="employees-list">
      <h2>Employees list</h2>
      <Table />
    </main>
  );
}
