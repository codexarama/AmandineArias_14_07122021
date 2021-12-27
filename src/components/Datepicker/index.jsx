import DatePicker from 'react-datepicker';
import { getMonth, getYear } from 'date-fns';
import range from 'lodash/range';

import PropTypes from 'prop-types';

import './datepicker.css';

/**
 * Datepicker
 *
 * @param   {object}      props
 * @param   {string}      props.id              [label "html for" identifiant]
 * @param   {string}      props.label           [label name]
 * @param   {string}      props.type            [type of content]
 * @param   {string}      props.startDate       [default selected date (today)]
 * @param   {function}    props.setStartDate    [chosen date]
 *
 * @returns {Reactnode}   jsx injected in DOM
 */
export default function Datepicker({
  id,
  label,
  type,
  startDate,
  setStartDate,
}) {
  const handleChange = (date) => setStartDate(date);
  const years = range(1955, getYear(new Date()) + 1, 1);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div className={`input-wrapper ${id}`}>
      <label htmlFor={id}>{label}</label>
      <DatePicker
        type={type}
        id={id}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {'<'}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {'>'}
            </button>
          </div>
        )}
        showPopperArrow={false}
        // dateFormat="yyyy/MM/dd" // ne fonctionne pas
        selected={startDate}
        onChange={handleChange}
        // withPortal
        required
      />
    </div>
  );
}

/**
 * Datepicker PROPTYPES
 */
Datepicker.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
