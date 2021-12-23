import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import icoAdd from '../../assets/ico-user-add.svg';
import EMPLOYEES_LIST from '../../data/MOCK_DATA.json';
import INPUT_DATA from '../../data/INPUT_DATA.json';
import DROPDOWN_DATA from '../../data/DROPDOWN_DATA.json';

import Input from '../Input';
import Dropdown from '../Dropdown';
import Modal from '../Modal';

import './form.css';

export default function Form() {
  // MODAL MODULE SETTINGS
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const redirectTo = useNavigate();
  function goTo() {
    redirectTo(`/employees`);
  }
  useEffect(() => {
    if (modal) {
      setTimeout(() => {
        redirectTo(`/employees`);
      }, 8000);
    }
  }, [modal, redirectTo]);

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

  // CONDITIONS TO ENABLE SUBMIT (ELSE = DISABLE)
  const submit =
    !newEmployee.firstName ||
    !newEmployee.lastName ||
    !newEmployee.dateOfBirth ||
    !newEmployee.street ||
    !newEmployee.city ||
    !newEmployee.zipCode ||
    !newEmployee.stateAbbrev ||
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
        {INPUT_DATA.map((data, index) => (
          <Input
            className={data.id}
            key={index}
            htmlFor={data.id}
            label={data.label}
            type={data.type}
            id={data.id}
            value={newEmployee[index]}
            handleChange={handleChange}
            autoComplete="off"
          />
        ))}

        {DROPDOWN_DATA.map((data, index) => (
          <Dropdown
            className={data.id}
            key={index}
            htmlFor={data.id}
            label={data.label}
            type={data.type}
            id={data.id}
            select={data.select}
            handleChange={handleChange}
          />
        ))}
      </section>

      {submit}

      <Modal
        show={modal}
        close={toggle}
        title={'Confirmation'}
        sub={'New collaborator'}
        msg={'successfully registred'}
        btn1={'Add employee'}
        btn1ClassName={'return'}
        btn2={'Employees list'}
        btn2ClassName={'redirect'}
        redirect={goTo}
      />
    </form>
  );
}
