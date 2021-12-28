import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import './modal.css';

/**
 * Modal
 *
 * @param   {object}     props
 * @param   {boolean}    props.show             [display Modal || null]
 * @param   {function}   props.close            [handling Modal close]
 * @param   {string}     props.title            [title of message]
 * @param   {string}     props.msgL1            [body of message, Line 1]
 * @param   {string}     props.msgL2            [body of message, Line 2]
 * @param   {string}     props.btn1ClassName    [specific className for btn1]
 * @param   {string}     props.btn1             [label for btn1]
 * @param   {string}     props.btn2ClassName    [specific className for btn2]
 * @param   {string}     props.btn2             [label for btn2]
 * @param   {function}   props.redirect         [handling redirection to another page]
 *
 * @returns {Reactnode}  jsx injected in DOM
 */
export default function Modal({
  show,
  close,
  x,
  icon,
  title,
  msgL1,
  msgL2,
  btn1ClassName,
  btn1,
  btn2ClassName,
  btn2,
  redirect,
}) {
  return createPortal(
    <>
      {show ? (
        <main className="modal">
          <section className="modal-content">
            <button className="modal-content--close" onClick={close}>
              <img src={x} alt="close icon" />
            </button>
            <img
              className="modal-content--icon"
              src={icon}
              alt="confirm employee icon"
            />
            <header className="modal-header">
              <h2 className="modal-header--title"> {title} </h2>
            </header>
            <main className="modal-main--msg">
              <p className="modal-main--msgL1">
                {msgL1}
                <br className="modal-main--msgL2" />
                {msgL2}
              </p>
            </main>
            <footer className="modal-footer">
              <button
                className={`modal-footer--btn1 ${btn1ClassName}`}
                onClick={close}
              >
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
    // PORTAL : display Modal on a specific node under body instead of "#root" div
    document.body
  );
}

/**
 * Modal PROPTYPES
 */
Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  msgL1: PropTypes.string.isRequired,
  msgL2: PropTypes.string.isRequired,
  btn1ClassName: PropTypes.string.isRequired,
  btn1: PropTypes.string.isRequired,
  btn2ClassName: PropTypes.string.isRequired,
  btn2: PropTypes.string.isRequired,
  redirect: PropTypes.func.isRequired,
};
