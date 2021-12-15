import { useEffect } from 'react';
import Table from '../../components/Table/Table';

export default function Employees() {
  useEffect(() => {
    document.title = 'HRnet | Employees';
  });

  return (
    <main className="employees-list">
      <h1>Employees list</h1>
      <Table />
    </main>
  );
}

// import Table from '../../components/Table/Table';
// import employees from '../../data/MOCK_DATA.json';
// import {title} from '../../data/tableTitles';

// export default function Employees() {
//   console.log(title[0]);
//   return (
//     <main className='employees-list' >
//       <h1>Employees list</h1>
//       {employees.map((employee, index) => (
//         // <Table employee={employee} />
//         <Table title={title[index]} employee={employee} />
//       ))}
//     </main>
//   );
// }
