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
      return (
        <h3>Address</h3> &&
        addressContainer.append(item)
        );
    });
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
