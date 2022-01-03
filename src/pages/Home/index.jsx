import React, { useEffect } from 'react';
import Form from '../../components/Form';

/**
 * Home
 * @returns {Reactnode}  jsx injected in DOM
 */
export default function Home() {
  useEffect(() => {
    document.title = 'HRnet | Home';

    // FILLING THE ADDRESS BLOCK WITH THE ADDRESS ITEMS
    const addressContainer = document.getElementById('addressContainer');
    const addressItems = [...document.getElementsByClassName('address')];
    addressItems.map((item) => {
      return <h3>Address</h3> && addressContainer.append(item);
    });

    // HANDLE MIN / MAX AGE FOR DATE OF BIRTH INPUT
    let minAge; // younger than 68 years old
    minAge = new Date();
    minAge.setFullYear(minAge.getFullYear() - 68);
    minAge = minAge.toISOString().split('T')[0];
    document.getElementById('dateOfBirth').setAttribute('min', minAge);

    let maxAge; // elder than 16 years old
    maxAge = new Date();
    maxAge.setFullYear(maxAge.getFullYear() - 16);
    maxAge = maxAge.toISOString().split('T')[0];
    document.getElementById('dateOfBirth').setAttribute('max', maxAge);

    // HANDLE MIN / MAX DATE FOR START DATE INPUT
    let minStartDate; // first day of the current month
    minStartDate = new Date();
    minStartDate.setMonth(minStartDate.getMonth() - 1);
    minStartDate = minStartDate.toISOString().split('T')[0];
    document.getElementById('startDate').setAttribute('min', minStartDate);

    let maxStartDate; // current day
    maxStartDate = new Date();
    maxStartDate.setDate(maxStartDate.getDate());
    maxStartDate = maxStartDate.toISOString().split('T')[0];
    document.getElementById('startDate').setAttribute('max', maxStartDate);
  });

  return (
    <main aria-labelledby="title">
      <h2 id="title">Add an employee</h2>
      <Form />
    </main>
  );
}
