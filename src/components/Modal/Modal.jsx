import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import icoClose from '../../assets/ico-close.png';
import icoConfirm from '../../assets/ico-user-confirm.svg';

import './modal.css';

export default function Modal ({ show, close, title, msg, sub }) {
  const employeesList = useNavigate();

  function goTo() {
    employeesList(`/employees`);
  }

    // setTimeout(() => {
    //     employeesList(`/employees`)
    //   }, 8000);

  function closeModal() {
    close();
  }

  return createPortal(
    <>
      {show ? (
        <main className="modal">
          <section className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              <img src={icoClose} alt="close icon" />
            </button>
            <img
              className="confirm-employee-ico"
              src={icoConfirm}
              alt="confirm employee icon"
            />
            <header className="modal-header">
              <h2 className="modal-title"> {title} </h2>
            </header>
            <main className="modal-msg">
              <p>{msg}</p>
              <p>{sub}</p>
            </main>
            <footer className="modal-footer">
              <button className="return" onClick={closeModal}>
                Add employee
              </button>
              <button className="result" onClick={goTo}>
                Employees list
              </button>
            </footer>
          </section>
        </main>
      ) : null}
    </>,
    document.body
  );
};

