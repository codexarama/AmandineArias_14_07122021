import { useEffect } from 'react';
import Form from '../../components/Form';

export default function Home() {
  useEffect(() => {
    document.title = 'HRnet | Home';
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
