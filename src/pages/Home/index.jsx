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
      return <h3>Address</h3> && getElement('address-container').append(item);
    });

    // HANDLING MIN / MAX AGE FOR DATE OF BIRTH INPUT
    let minAge; // younger than 68 years old
    minAge = new Date();
    minAge.setFullYear(minAge.getFullYear() - 68);
    minAge = minAge.toISOString().split('T')[0];

    let maxAge; // elder than 16 years old
    maxAge = new Date();
    maxAge.setFullYear(maxAge.getFullYear() - 16);
    maxAge = maxAge.toISOString().split('T')[0];

    // SETTING DATE OF BIRTH MIN / MAX ATTRIBUTES
    setAttributes(getElement('date-of-birth'), {
      min: minAge,
      max: maxAge,
    });

    // HANDLING MIN / MAX DATE FOR START DATE INPUT
    let minStartDate; // the last 28|30|31 days
    minStartDate = new Date();
    minStartDate.setMonth(minStartDate.getMonth() - 1);
    minStartDate = minStartDate.toISOString().split('T')[0];

    let maxStartDate; // current day
    maxStartDate = new Date();
    maxStartDate.setDate(maxStartDate.getDate());
    maxStartDate = maxStartDate.toISOString().split('T')[0];

    // SETTING START DATE MIN / MAX ATTRIBUTES
    setAttributes(getElement('start-date'), {
      min: minStartDate,
      max: maxStartDate,
    });
  });

  return (
    <main aria-labelledby="page-title">
      <h2 id="page-title">Add an employee</h2>
      <Form />
    </main>
  );
}
