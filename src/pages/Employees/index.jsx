import { useEffect } from 'react';
import Table from '../../components/Table';

/**
 * Employees
 * @returns {Reactnode}  jsx injected in DOM
 */
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
