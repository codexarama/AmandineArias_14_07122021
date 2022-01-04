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
    <main aria-labelledby="page-title" className="employees-list">
      <h2 tabIndex="0" id="page-title">Employees list</h2>
      <Table />
    </main>
  );
}
