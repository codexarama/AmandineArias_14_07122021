import React, { useState } from 'react';

import icoAdd from '../../assets/ico-user-add.svg';

// import EMPLOYEES_LIST from '../../data/MOCK_DATA.json';
import states from '../../data/MOCK_STATES.json';
import departments from '../../data/MOCK_DEPARTEMENTS.json';

import Modal from '../Modal/Modal';
import Dropdown from '../Dropdown/Dropdown';

import './form.css';

export default function Form() {
  const initialState = {
    // id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    street: '',
    city: '',
    abbrev: '',
    zipCode: '',
    startDate: '',
    department: '',
  };

  // const [disable, setDisable] = useState(true);
  const [newEmployee, setNewEmployee] = useState(initialState);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const submit =
    !newEmployee.firstName ||
    !newEmployee.lastName ||
    !newEmployee.dateOfBirth ||
    !newEmployee.street ||
    !newEmployee.city ||
    !newEmployee.abbrev ||
    !newEmployee.zipCode ||
    !newEmployee.startDate ||
    !newEmployee.department ? (
      <button type="submit" className="add-employee-button" disabled>
        Add an employee
      </button>
    ) : (
      <button type="submit" className="add-employee-button">
        Add an employee
      </button>
    );

  const handleChange = (e) => {
    // HANDLE DISABLE ATTRIBUTE FOR SUBMIT BUTTON
    // OK : le state de chaque champ passe à FALSE si saisie
    // MAIS : le bouton reste DISABLED MEME SI tous les STATUTS sont à FALSE
    // setDisable({ ...newEmployee, [e.target.id]: e.target.value.trim() === '' }); // tous les champs
    // setDisable(e.target.value.trim() === ''); // 1 seul champ
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
      <Dropdown
        label="States"
        id="state"
        select={states}
        handleChange={handleChange}
      />
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
      <Dropdown
        label="Departments"
        id="department"
        select={departments}
        handleChange={handleChange}
      />
      {/* <button type="submit" className="add-employee-button" disabled={!newEmployee.value}> */}
      {/* <button type="submit" className="add-employee-button" disabled={disable}> */}
      {/* Add an employee
      </button> */}
      {submit}
      <Modal
        show={modal}
        close={toggle}
        title={'Confirmation'}
        sub={'New collaborator'}
        msg={'successfully registred'}
      />
    </form>
  );
}
