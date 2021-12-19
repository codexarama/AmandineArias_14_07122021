import { useEffect } from 'react';
import Table from '../../components/Table/Table';

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
