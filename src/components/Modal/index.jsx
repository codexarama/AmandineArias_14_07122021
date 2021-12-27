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
  msgL1,
  msgL2,
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
            <button className="modal-content--close" onClick={close}>
              <img src={icoClose} alt="close icon" />
            </button>
            <img
              className="modal-content--icon"
              src={icoConfirm}
              alt="confirm employee icon"
            />
            <header className="modal-header">
              <h2 className="modal-header--title"> {title} </h2>
            </header>
            <main className="modal-main--msg">
              <p className="modal-main--msgL1">{msgL1}< br className="modal-main--msgL2"/>{msgL2}</p>
            </main>
            <footer className="modal-footer">
              <button className={`modal-footer--btn1 ${btn1ClassName}`} onClick={close}>
                {btn1}
              </button>
              <button
                className={`modal-footer--btn2 ${btn2ClassName}`}
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
