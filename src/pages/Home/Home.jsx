import { useEffect } from 'react';
import Form from '../../components/Form/Form';

export default function Home() {
  useEffect(() => {
    document.title = 'HRnet | Home';
  });

  return (
    <main className="add-employee">
      <section className="add-employee-content">
        <h1>Add an employee</h1>
        <Form />
      </section>
    </main>
  );
}
