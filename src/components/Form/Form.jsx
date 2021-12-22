import React, { useState } from 'react';

import icoAdd from '../../assets/ico-user-add.svg';
import EMPLOYEES_LIST from '../../data/MOCK_DATA.json';
import FORM_DATA from '../../data/FORM_DATA.json';
import STATES from '../../data/MOCK_STATES.json';
import DEPARTMENTS from '../../data/MOCK_DEPARTEMENTS.json';

import Field from '../Field/Field';
import Dropdown from '../Dropdown/Dropdown';
import Modal from '../Modal/Modal';

import './form.css';

export default function Form() {
  const initialState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    startDate: '',
    department: '',
  };

  const [newEmployee, setNewEmployee] = useState(initialState);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const submit =
    !newEmployee.firstName ||
    !newEmployee.lastName ||
    !newEmployee.dateOfBirth ||
    !newEmployee.street ||
    !newEmployee.city ||
    !newEmployee.state ||
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

  // ON CHANGE
  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.id]: e.target.value.trim() });
  };

  // GET DATA
  let employeesList =
    JSON.parse(window.localStorage.getItem('employeesList')) || EMPLOYEES_LIST;

  // ON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // UPDATE DATA
    employeesList.push(newEmployee);

    // COMPLETE / CORRECT DATA
    newEmployee.id = employeesList.length;
    newEmployee.state = employeesList.abbrev;

    // STORE DATA
    window.localStorage.setItem('employeesList', JSON.stringify(employeesList));

    // RESET FORM
    setNewEmployee(initialState);

    // OPEN MODAL
    setModal(!modal);
  };

  return (
    <form action="" id="add-employee-form" onSubmit={handleSubmit}>
      <img className="add-employee-ico" src={icoAdd} alt="add employee icon" />
      <section className="form-data">
        {FORM_DATA.map((data, index) => (
          <Field
            className={data.id}
            key={index}
            htmlFor={data.id}
            label={data.name}
            type={data.type}
            id={data.id}
            value={newEmployee[index]}
            handleChange={handleChange}
            autoComplete="off"
          />
        ))}

        <Dropdown
          className="state"
          label="State"
          id="state"
          select={STATES}
          handleChange={handleChange}
        />

        <Dropdown
          label="Department"
          id="department"
          select={DEPARTMENTS}
          handleChange={handleChange}
        />
      </section>

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
