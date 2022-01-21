import React, { useEffect } from 'react';

import { getElement } from '../../utils/handlers';
import { getElements } from '../../utils/handlers';
import { setAttributes } from '../../utils/handlers';

import Form from '../../components/Form';

/**
 * Home
 * @returns {Reactnode}  jsx injected in DOM
 */
export default function Home() {
  useEffect(() => {
    document.title = 'HRnet | Home';

    // FILLING THE ADDRESS BLOCK WITH THE ADDRESS ITEMS
    getElements('address').map((item) => {
      return <h3>Address</h3> && getElement('addressContainer').append(item);
    });

    // HANDLING MIN / MAX AGE FOR DATE OF BIRTH INPUT
    const age = (n) => {
      let current = new Date();
      current.setFullYear(current.getFullYear() - n);
      current = current.toISOString().split('T')[0];
      return current;
    };

    // SETTING DATE OF BIRTH MIN / MAX ATTRIBUTES
    // choosen values for this context : from 68 to 16 years old
    // replace by any other values as needed
    setAttributes(getElement('dateOfBirth'), {
      min: age(68),
      max: age(16),
    });

    // HANDLING MIN / MAX DATE FOR START DATE INPUT
    const start = (n) => {
      let current = new Date();
      current.setDate(current.getDate() - n);
      current = current.toISOString().split('T')[0];
      return current;
    };

    // SETTING START DATE MIN / MAX ATTRIBUTES
    // choosen values for this context : from the last 30 days to today
    // replace by any other values as needed
    setAttributes(getElement('startDate'), {
      min: start(30),
      max: start(0),
    });
  });

  return (
    <main aria-labelledby="page-title">
      <h2 tabIndex="0" id="page-title">
        Add an employee
      </h2>
      <Form />
    </main>
  );
}
