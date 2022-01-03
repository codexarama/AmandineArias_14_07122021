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
    // console.log(addressContainer);
    const addressItems = [...document.getElementsByClassName('address')];
    // console.log(addressItems);
    addressItems.map((item) => {
      // console.log(item);
      return <h3>Address</h3> && addressContainer.append(item);
    });

    // HANDLE MIN / MAX AGE FOR DATE OF BIRTH INPUT
    let minAge; // younger than 68 years old
    minAge = new Date();
    minAge.setFullYear(minAge.getFullYear() - 68);
    minAge = minAge.toISOString().split('T')[0];
    // console.log(minAge);
    document.getElementById('dateOfBirth').setAttribute('min', minAge);

    let maxAge; // elder than 16 years old
    maxAge = new Date();
    maxAge.setFullYear(maxAge.getFullYear() - 16);
    maxAge = maxAge.toISOString().split('T')[0];
    // console.log(maxAge);
    document.getElementById('dateOfBirth').setAttribute('max', maxAge);

    // HANDLE MIN / MAX DATE FOR START DATE INPUT
    let minStartDate; // first day of the current month
    minStartDate = new Date();
    minStartDate.setMonth(minStartDate.getMonth() - 1);
    minStartDate = new Date(minStartDate);
    minStartDate = minStartDate.toISOString().split('T')[0];
    // console.log(minStartDate); // ok : yyyy-mm-dd
    document.getElementById('startDate').setAttribute('min', minStartDate);

    let maxStartDate // current day
    maxStartDate = new Date();
    maxStartDate.setDate(maxStartDate.getDate());
    maxStartDate = maxStartDate.toISOString().split('T')[0];
    // console.log(maxStartDate); // ok : yyyy-mm-dd
    document.getElementById('startDate').setAttribute('max', maxStartDate);
  });

  return (
    <main className="add-employee">
      <section className="add-employee-content">
        <h2>Add an employee</h2>
        <Form />
      </section>
    </main>
  );
}
