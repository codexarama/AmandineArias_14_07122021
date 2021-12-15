// import React from 'react';
// import titles from '../../data/tableTitles.json';
// import TableHead from './TableHead';
// import employeeList from '../../data/MOCK_DATA.json';
// import TableBody from './TableBody';
// import './table.css';

// export default function Table() {
//   return (
//     <table id="employees">
//       {titles.map((title) => (
//         <TableHead title={title} />
//       ))}
//       {employeeList.map((employee) => (
//         <TableBody employee={employee} />
//       ))}
//     </table>
//   );
// }

import React from 'react';
import employeeList from '../../data/MOCK_DATA.json';
import titles from '../../data/tableTitles.json';
import './table.css';

export default function Table() {
  // const newEmployee = localStorage.getItem('newEmployee');
  const newEmployee = JSON.parse(localStorage.getItem('newEmployee'));
  console.log(newEmployee);
  employeeList.push((newEmployee));
  
  return (
    <table id="employees">
      <thead>
        {titles.map((title, index) => (
          <tr key={index}>
            <th>{title.firstName}</th>
            <th>{title.lastName}</th>
            <th>{title.dateOfBirth}</th>
            <th>{title.startDate}</th>
            <th colSpan="4">{title.address}</th>
            <th>{title.department}</th>
          </tr>
        ))}
      </thead>
      <tbody>
        {employeeList.map((employee, index) => (
          <tr key={index}>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.date_of_birth}</td>
            <td>{employee.start_date}</td>
            <td>{employee.street}</td>
            <td>{employee.city}</td>
            <td>{employee.state}</td>
            <td>{employee.zip_code}</td>
            {/* <td>{`${employee.street}, ${employee.city}, ${employee.state} | ${employee.zip_code}`}</td> */}
            <td>{employee.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// import React, { useState } from 'react';
// import data from '../../data/MOCK_DATA.json';
// import titles from '../../data/tableTitles.json';
// import './table.css';

// export default function Table() {
//   // let [employees, setEmployees] = useState(data);
//   const [employees, setEmployees] = useState(data);
//   const newEmployee = JSON.parse(localStorage.getItem('newEmployee'));

//   // console.log(newEmployee);

//   // employees = [...employees, newEmployee];
//   // setEmployees(employees);

//   // const newEmployees = [...employees, newEmployee];
//   // setEmployees(newEmployees);

//   // const updateEmployees = employees.push(newEmployee)
//   // console.log(updateEmployees);
//   // setEmployees(updateEmployees)

//   employees.push(newEmployee)

//   return (
//     <table id="employees">
//       <thead>
//       {titles.map((title, index) => (
//           <tr>
//             <th>{title.firstName}</th>
//             <th>{title.lastName}</th>
//             <th>{title.dateOfBirth}</th>
//             <th>{title.startDate}</th>
//             <th colSpan="4">{title.address}</th>
//             <th>{title.department}</th>
//           </tr>
//         ))}
//       </thead>
//       <tbody>
//         {employees.map((employee, key) => (
//   <tr>
//     <td>{employee.first_name}</td>
//     <td>{employee.last_name}</td>
//     <td>{employee.date_of_birth}</td>
//     <td>{employee.start_date}</td>
//     <td>{employee.street}</td>
//     <td>{employee.city}</td>
//     <td>{employee.state}</td>
//     <td>{employee.zip_code}</td>
//     {/* <td>{`${employee.street}, ${employee.city}, ${employee.state} | ${employee.zip_code}`}</td> */}
//     <td>{employee.department}</td>
//   </tr>
// ))}
//       </tbody>
//     </table>
//   );
// }
