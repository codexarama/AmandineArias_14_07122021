import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './modal.css'

/**
 * Modal
 *
 * @param   {object}     props
 * @param   {boolean}    props.show             [display Modal || null]
 * @param   {function}   props.close            [handling Modal close when click]
 * @param   {string}     props.x                [image source]
 * @param   {string}     props.icon             [image source]
 * @param   {boolean}    props.hideIcon         [add || remove 'hide' attribute on its className]
 * @param   {string}     props.title            [title of message]
 * @param   {boolean}    props.hideTitle        [add || remove 'hide' attribute on its className]
 * @param   {string}     props.msgL1            [body of message, Line 1]
 * @param   {string}     props.msgL2            [body of message, Line 2]
 * @param   {boolean}    props.hideMsgL2        [add || remove 'hide' attribute on its className]
 * @param   {string}     props.btn1             [label for btn1]
 * @param   {boolean}    props.disableBtn1      [add || remove 'disabled' attribute on its className]
 * @param   {boolean}    props.hideBtn1         [add || remove 'hide' attribute on its className]
 * @param   {string}     props.btn2             [label for btn2]
 * @param   {boolean}    props.disableBtn2      [add || remove 'disabled' attribute on its className]
 * @param   {boolean}    props.hideBtn2         [add || remove 'hide' attribute on its className]
 * @param   {function}   props.redirect         [handling redirect to another page when click]
 * @param   {boolean}    props.hideHeader       [add || remove 'hide' attribute on its className]
 * @param   {boolean}    props.hideFooter       [add || remove 'hide' attribute on its className]
 *
 * @returns {Reactnode}  jsx injected in DOM
 */
export default function Modal({
  show,
  close,
  x,
  icon,
  hideIcon = '',
  title,
  hideTitle = '',
  msgL1,
  msgL2,
  hideMsgL2 = '',
  btn1,
  disableBtn1 = '',
  hideBtn1 = '',
  btn2,
  disableBtn2 = '',
  hideBtn2 = '',
  redirect,
  link,
  hideHeader = '',
  hideFooter = '',
}) {
  if (disableBtn1) disableBtn1 = 'disabled';
  if (disableBtn2) disableBtn2 = 'disabled';

  if (hideIcon) hideIcon = 'hide';
  if (hideTitle) hideTitle = 'hide';
  if (hideMsgL2) hideMsgL2 = 'hide';
  if (hideBtn1) hideBtn1 = 'hide';
  if (hideBtn2) hideBtn2 = 'hide';
  if (hideHeader) hideHeader = 'hide';
  if (hideFooter) hideFooter = 'hide';

  return createPortal(
    <>
      {show ? (
        <main className="modal">
          <section className="modal-container">
            <button className="modal-container--close" onClick={close}>
              <img src={x} alt="close icon" />
            </button>
            <header className={`modal-header ${hideHeader}`}>
              <img
                className={`modal-header--icon ${hideIcon}`}
                src={icon}
                alt="confirm employee icon"
              />
              <h2 className={`modal-header--title ${hideTitle}`}> {title} </h2>
            </header>
            <hr className={`modal-header--separator ${hideHeader}`} />
            <main className="modal-main--msg">
              <p className="modal-main--msgL1">{msgL1}</p>
              <p className={`modal-main--msgL2 ${hideMsgL2}`}>{msgL2}</p>
            </main>
            <hr className={`modal-footer--separator ${hideFooter}`} />
            <footer className={`modal-footer ${hideFooter}`}>
              <button
                className={`modal-footer--btn1 ${hideBtn1} ${disableBtn1}`}
                onClick={close}
              >
                {btn1}
              </button>
              <button
                className={`modal-footer--btn2 ${hideBtn2} ${disableBtn2}`}
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

/**
 * Modal PROPTYPES
 */
Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  x: PropTypes.string,
  icon: PropTypes.string,
  hideIcon: PropTypes.bool,
  title: PropTypes.string,
  hideTitle: PropTypes.bool,
  msgL1: PropTypes.string.isRequired,
  msgL2: PropTypes.string,
  hideMsgL2: PropTypes.bool,
  btn1: PropTypes.string,
  disableBtn1: PropTypes.bool,
  hideBtn1: PropTypes.bool,
  btn2: PropTypes.string,
  redirect: PropTypes.func,
  disableBtn2: PropTypes.bool,
  hideBtn2: PropTypes.bool,
  hideHeader: PropTypes.bool,
  hideFooter: PropTypes.bool,
};
