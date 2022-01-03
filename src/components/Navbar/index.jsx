import { NavLink } from 'react-router-dom';

import logoDesign from '../../assets/HRnet_logo-design.svg';
import logoBrand from '../../assets/HRnet_logo-brand.svg';
import icoList from '../../assets/ico-list.svg';
import icoAdd from '../../assets/ico-user-add.svg';

import './navbar.css';

/**
 * Navbar
 * @returns {Reactnode}  jsx injected in DOM
 */
export default function Navbar() {
  return (
    <>
      <nav aria-labelledby='nav-title'>
        <div aria-label="Wealth Health logo" className="nav-item nav-brand">
          <img
            className="nav-logo--design"
            src={logoDesign}
            alt="Wealth Health logo design"
          />
          <img
            className="nav-logo--brand"
            src={logoBrand}
            alt="Wealth Health logo brand name"
          />
        </div>
        <div role="navigation"  className="nav-item nav-menu">
          <h1 id='nav-title' className="nav-menu--title">HRnet Employees</h1>
          <NavLink to="/employees" className="nav-menu--choice">
            <img
              className="nav-ico"
              src={icoList}
              alt="Wealth Health logo brand name"
            />
            <span>Current</span>
          </NavLink>
          <NavLink to="/" className="nav-menu--choice">
            <img
              className="nav-ico"
              src={icoAdd}
              alt="Wealth Health logo brand name"
            />
            <span>Create</span>
          </NavLink>
        </div>
      </nav>
      <hr className="nav-shadow" />
    </>
  );
}
