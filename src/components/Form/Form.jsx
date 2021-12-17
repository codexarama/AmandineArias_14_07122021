import React, { useState } from 'react';
import icoAdd from '../../assets/ico-user-add.svg';
import './form.css';

export default function Form() {
  const initialState = {
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

  const handleChange = (e) => {
    setAddEmployee({ ...addEmployee, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      first_name: addEmployee.firstName,
      last_name: addEmployee.lastName,
      date_Of_birth: addEmployee.dateOfBirth,
      start_date: addEmployee.startDate,
      street: addEmployee.street,
      city: addEmployee.city,
      state: addEmployee.state,
      zip_code: addEmployee.zipCode,
      department: addEmployee.department,
    };

    localStorage.setItem('newEmployee', JSON.stringify(newEmployee));
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
