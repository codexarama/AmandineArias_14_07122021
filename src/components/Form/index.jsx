import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import icoAdd from '../../assets/ico-user-add.svg';

import EMPLOYEES_LIST from '../../data/MOCK_DATA.json';
import INPUT_DATA from '../../data/INPUT_DATA.json';
import DROPDOWN_DATA from '../../data/DROPDOWN_DATA.json';
// import DATEPICKER_DATA from '../../data/DATEPICKER_DATA.json';

import Input from '../Input';
import Dropdown from '../Dropdown';
// import Datepicker from '../Datepicker';
import Modal from '../Modal';

import './form.css';

/**
 * Form
 * @returns {Reactnode}  jsx injected in DOM
 */
export default function Form() {
  // MODAL MODULE SETTINGS
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const redirectTo = useNavigate();

  function goTo() {
    redirectTo('/employees');
  }

  useEffect(() => {
    if (modal) {
      setTimeout(() => {
        redirectTo('/employees');
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
  // const disable = {...newEmployee};
  // const disable = [...newEmployee];
  // console.log(disable);
  // disable.every((element) => console.log(element)); // newEmployee is not iterable
  // newEmployee.every((element) => console.log(element)); // newEmployee.every is not a function

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
      <button type="submit" className="form-newEmployee--submit" disabled>
        Save
      </button>
    ) : (
      <button type="submit" className="form-newEmployee--submit">
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

  // ON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // UPDATE DATA
    employeesList.push(newEmployee);

    // COMPLETE / CORRECT DATA
    newEmployee.id = employeesList.length;
    newEmployee.dateOfBirth = newEmployee.dateOfBirth.replace(/-/g, '/');

    // STORE DATA
    window.localStorage.setItem('employeesList', JSON.stringify(employeesList));

    // RESET FORM
    setNewEmployee(initialState);

    // OPEN MODAL
    setModal(!modal);
  };

  return (
    <form action="" className="form-newEmployee" onSubmit={handleSubmit}>
      <img
        className="form-newEmployee--ico"
        src={icoAdd}
        alt="add employee icon"
      />

      <section className="form-newEmployee--data">
        <fieldset
          id="addressContainer"
          className="form-newEmployee--addressContainer"
        >
          <legend className="form-newEmployee--addressGroup">Address</legend>
        </fieldset>

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

        {/* {DATEPICKER_DATA.map((data, index) => (
          <Datepicker
            key={index}
            type={data.type}
            className={data.id}
            htmlFor={data.id}
            label={data.label}
            id={data.id}
            startDate={newEmployee[index]}
            setStartDate={(date) => setNewEmployee({ ...newEmployee, [data.id]: date })}
          />
        ))} */}

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
      </section>

      {submit}

      <Modal
        show={modal}
        close={toggle}
        title={'Confirmation'}
        msgL1={'New collaborator'}
        msgL2={'successfully registred'}
        btn1={'Add employee'}
        btn1ClassName={'return'}
        btn2={'Employees list'}
        btn2ClassName={'redirect'}
        redirect={goTo}
      />
    </form>
  );
}
