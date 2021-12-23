// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import icoClose from '../../assets/ico-close.png';
import icoConfirm from '../../assets/ico-user-confirm.svg';

import './modal.css';

export default function Modal({
  show,
  close,
  title,
  sub,
  msg,
  btn1,
  btn1ClassName,
  btn2,
  btn2ClassName,
  redirect,
}) {

  return createPortal(
    <>
      {show ? (
        <main className="modal">
          <section className="modal-content">
            <button className="modal-close" onClick={close}>
              <img src={icoClose} alt="close icon" />
            </button>
            <img
              className="modal-icon"
              src={icoConfirm}
              alt="confirm employee icon"
            />
            <header className="modal-header">
              <h2 className="modal-title"> {title} </h2>
            </header>
            <main className="modal-msg">
              <p>{sub}</p>
              <p>{msg}</p>
            </main>
            <footer className="modal-footer">
              <button className={`modal-btn1 ${btn1ClassName}`} onClick={close}>
                {btn1}
              </button>
              <button
                className={`modal-btn2 ${btn2ClassName}`}
                onClick={redirect}
              >
                {btn2}
              </button>
            </footer>
          </section>
        </main>
      ) : null}
    </>,
    document.body
  );
}
