// import React, { useState, useEffect } from 'react';
import icoAdd from '../../assets/ico-user-add.svg';

import './form.css';

export default function Form() {
  return (
    <form
      action=""
      id="add-employee-form"
      // onSubmit={handleSubmit}
    >
      <img
        className="add-employee-ico"
        src={icoAdd}
        alt="Health Wealth logo brand name"
      />

      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          //   value={email}
          //   onChange={handleChangeEmail}
          autoComplete="username"
        />
        {/* {noEmail && <small>Email is required</small>} */}
        {/* {submitted && !email && <small>Email is required</small>} */}
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          //   value={password}
          //   onChange={handleChangePassword}
          autoComplete="current-password"
        />
        {/* {noPassword && <small>Password is required</small>} */}
        {/* {submitted && !password && <small>Password is required</small>} */}
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          //   checked={rememberMe}
          //   onChange={handleChangeRememberMe}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <input
        type="submit"
        value="Add employee"
        className="add-employee-button"
      />
      <section className="input-alert">
        {/* {wrongEntries &&
            (
              <small className="input-alert--msg">
                Wrong email or password, please check
              </small>
            )} */}
      </section>
    </form>
  );
}
