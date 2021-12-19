import React, { useState } from 'react';
import icoAdd from '../../assets/ico-user-add.svg';
import EMPLOYEES_LIST from '../../data/MOCK_DATA.json';
import './form.css';

export default function Form() {
  // STOCKAGE DE LA LISTE INITIALE DES EMPLOYEES (i=99)
  // QUAND J'AFFECTE LES DONNES AU LOCAL STORAGE ET QUE JE VEUX L'INCREMENTER AVEC
  // LES DONNEES DU NOUVEL EMPLOYE LORS SUR "setAddEmployee"
  // LA VARIABLE EST BIEN MISE A JOUR (console log de verification OK)
  // MAIS PAS LE LOCAL STORAGE

  // let employeesList = localStorage.setItem(
  //   'employeesList',
  //   JSON.stringify(EMPLOYEES_LIST) || []
  // );

  // employeesList = JSON.parse(localStorage.getItem('employeesList')) || [];
  // const [updateList, setUpdateList] = useState(employeesList);

  const initialState = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  };

  const [addEmployee, setAddEmployee] = useState(initialState);

  // function isDisabled(inputValue) {
  //   return inputValue === '';
  // }
  // console.log(addEmployee.every(isDisabled));
  // addEmployee.every is not a function

  const {
    firstName,
    lastName,
    dateOfBirth,
    street,
    city,
    state,
    zipCode,
    startDate,
    department,
  } = addEmployee;

  const btn =
    // isDisabled(addEmployee) ? ( // ne fonctionne pas
    // addEmployee !== '' ? ( // reste disabled mm si tous les champs sont remplis

    firstName === '' ||
    lastName === '' ||
    dateOfBirth === '' ||
    street === '' ||
    city === '' ||
    state === '' ||
    zipCode === '' ||
    startDate === '' ||
    department === '' ? (
      <button type="submit" className="add-employee-button" disabled>
        Add an employee
      </button>
    ) : (
      <button type="submit" className="add-employee-button">
        Add an employee
      </button>
    );

  // STOCKAGE - RECUPERATION - ACTUALISATION DE LA LISTE DES EMPLOYEES
  const handleChange = (e) => {
    setAddEmployee({ ...addEmployee, [e.target.id]: e.target.value });
  };

  // // IMPOSSIBLE D'ACTUALISER LA LISTE INITIALE DES EMPLOYES
  // // TEST 1 ///////////////////////////////////////////////////////////
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newEmployee = {
  //     id:'',
  //     first_name: addEmployee.firstName,
  //     last_name: addEmployee.lastName,
  //     date_Of_birth: addEmployee.dateOfBirth,
  //     start_date: addEmployee.startDate,
  //     street: addEmployee.street,
  //     city: addEmployee.city,
  //     state: addEmployee.state,
  //     zip_code: addEmployee.zipCode,
  //     department: addEmployee.department,
  //   };
  //   console.log('NEW employee : ', newEmployee);
  //   employeesList = JSON.parse(localStorage.getItem('employeesList')) || [];
  //   employeesList.push(newEmployee);
  //   // localStorage.setItem('employeesList', JSON.stringify(employeesList));
  //   localStorage.setItem('updatedList', JSON.stringify(employeesList));
  //   console.log('UPDATE employees list : ', employeesList);
  //   setAddEmployee(initialState);
  // };

  // // TEST 2 ///////////////////////////////////////////////////////////
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const newEmployee = {
  //     id: '',
  //     // id: updateList.length + 1,
  //     first_name: addEmployee.firstName,
  //     last_name: addEmployee.lastName,
  //     date_Of_birth: addEmployee.dateOfBirth,
  //     start_date: addEmployee.startDate,
  //     street: addEmployee.street,
  //     city: addEmployee.city,
  //     state_abbrev: addEmployee.state,
  //     zip_code: addEmployee.zipCode,
  //     department: addEmployee.department,
  //   };

  //   updateList.push(newEmployee);
  //   setUpdateList(
  //     localStorage.setItem('employeesList', JSON.stringify(updateList))
  //   );
  // };

  // // TEST 3 ///////////////////////////////////////////////////////////
  // OK SI ON PART D'UN LOCAL STORAGE VIDE (i=0) :
  // A CHAQUE ENVOI DU FORMULAIRE LE LOCAL STORAGE S'INCREMENTE (i++)
  // AVEC LES DONNEES DU NOUVEL EMPLOYEE
  //////////////////////////////////////////////////////////////////////
  // OK SI DONNEES ENVOYEES DANS LE LOCAL STORAGE
  // AU MOMENT DU MONTAGE DE LA NAVBAR
  // PAS DE PERTE PENDANT LA NAVIGATION D'UN COMPOSANT A L'AUTRE
  //////////////////////////////////////////////////////////////////////
  // MAIS RETOUR A LA LISTE INITIALE DANS LE LOCAL STORAGE
  // SI RAFRAICHISSEMENT DE LA PAGE

    let employeesList = JSON.parse(localStorage.getItem('employeesList')) || [];
  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: employeesList.length + 1,
      first_name: addEmployee.firstName,
      last_name: addEmployee.lastName,
      date_Of_birth: addEmployee.dateOfBirth,
      start_date: addEmployee.startDate,
      street: addEmployee.street,
      city: addEmployee.city,
      state_abbrev: addEmployee.state,
      zip_code: addEmployee.zipCode,
      department: addEmployee.department,
    };

    employeesList.push(newEmployee);
    localStorage.setItem('employeesList', JSON.stringify(employeesList));
    setAddEmployee(initialState);
  };

  return (
    <form action="" id="add-employee-form" onSubmit={handleSubmit}>
      <img
        className="add-employee-ico"
        src={icoAdd}
        alt="Health Wealth logo brand name"
      />

      <div className="input-wrapper">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          value={state}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="department">Department</label>
        <input
          type="text"
          id="department"
          value={department}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      {btn}
    </form>
  );
}
