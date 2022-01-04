import React, { useState } from 'react';

import icoAdd from '../../assets/ico-user-add.svg';

import EMPLOYEES_LIST from '../../data/MOCK_DATA.json';
import INPUT_DATA from '../../data/INPUT_DATA.json';
import DROPDOWN_DATA from '../../data/DROPDOWN_DATA.json';

import Input from '../Input';
import Dropdown from '../Dropdown';

import './form.css';

import { useNavigate } from 'react-router-dom';
import { Modal, useModal } from 'codexarama-modal';
import confirm from '../../assets/ico-user-confirm.svg';
import close from '../../assets/ico-close.svg';
// import 'codexarama-modal/dist/styles/modal.css';

/**
 * Form
 * @returns {Reactnode}  jsx injected in DOM
 */
export default function Form() {
  // FORM SETTINGS
  const initialState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    street: '',
    city: '',
    zipCode: '',
    stateAbbrev: '',
    startDate: '',
    department: '',
  };

  const [newEmployee, setNewEmployee] = useState(initialState);

  // DISABLE / ENABLE SUBMIT BUTTON
  const submit =
    !newEmployee.firstName ||
    !newEmployee.lastName ||
    !newEmployee.dateOfBirth ||
    !newEmployee.street ||
    !newEmployee.city ||
    !newEmployee.zipCode ||
    !newEmployee.startDate ||
    !newEmployee.stateAbbrev ||
    !newEmployee.department ? (
      <button
        type="submit"
        className="submit form-newEmployee--submit"
        aria-disabled="true"
        disabled
      >
        Save
      </button>
    ) : (
      <button
        type="submit"
        className="submit form-newEmployee--submit"
        aria-disabled="false"
      >
        Save
      </button>
    );

  // ON CHANGE
  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.id]: e.target.value.trim() });
  };

  // GET DATA
  let employeesList =
    JSON.parse(window.localStorage.getItem('employeesList')) || EMPLOYEES_LIST;

  // MODAL FEATURES
  const { isOpen, toggle } = useModal();

  const redirectTo = useNavigate();
  function goTo() {
    redirectTo('/employees');
  }

  // ON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // UPDATE DATA
    employeesList.push(newEmployee);

    // COMPLETE / CORRECT DATA
    newEmployee.id = employeesList.length;
    newEmployee.dateOfBirth = newEmployee.dateOfBirth.replace(/-/g, '/');
    newEmployee.startDate = newEmployee.startDate.replace(/-/g, '/');

    // STORE DATA
    window.localStorage.setItem('employeesList', JSON.stringify(employeesList));

    // RESET FORM
    setNewEmployee({ ...newEmployee }, e.target.reset());
    setNewEmployee(initialState);

    // OPEN MODAL
    ///////////////////////////
  };

  return (
    <form action="" className="form-newEmployee" onSubmit={handleSubmit}>
      <img
        className="form-newEmployee--ico"
        src={icoAdd}
        alt="add employee icon"
      />

      {INPUT_DATA.map((data, index) => (
        <Input
          key={index}
          type={data.type}
          className={data.className}
          htmlFor={data.id}
          label={data.label}
          id={data.id}
          value={newEmployee[index]}
          handleChange={handleChange}
          autoComplete="off"
        />
      ))}

      <fieldset
        id="address-container"
        className="form-newEmployee--addressContainer"
      >
        <legend className="form-newEmployee--addressGroup">Address</legend>
      </fieldset>

      {DROPDOWN_DATA.map((data, index) => (
        <Dropdown
          key={index}
          type={data.type}
          className={data.className}
          htmlFor={data.id}
          label={data.label}
          id={data.id}
          select={data.select}
          handleChange={handleChange}
        />
      ))}

      {submit}

      <Modal
        modal={isOpen}
        close={toggle}
        x={close}
        icon={confirm}
        title="Confirmation"
        msgL1="New collaborator"
        msgL2="successfully registred"
        btn1="Add an employee"
        btn2="Employees list"
        redirect={goTo}
      />
    </form>
  );
}
