import React, { useState } from 'react';
import icoAdd from '../../assets/ico-user-add.svg';
import Modal from '../Modal/Modal';
// import EMPLOYEES_LIST from '../../data/MOCK_DATA.json';
import './form.css';

export default function Form() {
  const initialState = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    street: '',
    city: '',
    stateAbbrev: '',
    zipCode: '',
    startDate: '',
    department: '',
  };

  const [newEmployee, setNewEmployee] = useState(initialState);
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  // function isDisabled(inputValue) {
  //   return inputValue === '';
  // }
  // console.log(newEmployee.every(isDisabled));
  // newEmployee.every is not a function

  const submit =
    // isDisabled(newEmployee) ? ( // ne fonctionne pas
    // newEmployee !== '' ? ( // reste disabled mm si tous les champs sont remplis

    newEmployee.firstName === '' ||
    newEmployee.lastName === '' ||
    newEmployee.dateOfBirth === '' ||
    newEmployee.street === '' ||
    newEmployee.city === '' ||
    newEmployee.stateAbbrev === '' ||
    newEmployee.zipCode === '' ||
    newEmployee.startDate === '' ||
    newEmployee.department === '' ? (
      <button type="submit" className="add-employee-button" disabled>
        Add an employee
      </button>
    ) : (
      <button type="submit" className="add-employee-button">
        Add an employee
      </button>
    );

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.id]: e.target.value });
  };

  // RECUPERATION DE LA LISTE DES EMPLOYES
  let employeesList =
    JSON.parse(window.localStorage.getItem('employeesList')) || [];

  const handleSubmit = (e) => {
    e.preventDefault();

    // ACTUALISATION LA LISTE DES EMPLOYES ('employeesList')
    employeesList.push(newEmployee);
    newEmployee.id = employeesList.length;

    // ENREGISTREMENT DES DONNEES DANS LE LOCAL STORAGE
    window.localStorage.setItem('employeesList', JSON.stringify(employeesList));

    setNewEmployee(initialState);
    setModal(!modal);
  };

  return (
    <form action="" id="add-employee-form" onSubmit={handleSubmit}>
      <img className="add-employee-ico" src={icoAdd} alt="add employee icon" />

      <div className="input-wrapper">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          value={newEmployee.firstName}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          value={newEmployee.lastName}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          value={newEmployee.dateOfBirth}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={newEmployee.street}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={newEmployee.city}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="stateAbbrev"
          value={newEmployee.stateAbbrev}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          id="zipCode"
          value={newEmployee.zipCode}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          value={newEmployee.startDate}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="department">Department</label>
        <input
          type="text"
          id="department"
          value={newEmployee.department}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      {submit}
      <Modal
        show={modal}
        close={Toggle}
        title={'Confirmation'}
        sub={'New collaborator'}
        msg={'successfully registred'}
      />
    </form>
  );
}
