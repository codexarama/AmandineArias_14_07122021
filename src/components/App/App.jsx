import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from '../Navbar';
import Home from '../../pages/Home';
import Employees from '../../pages/Employees';
import Error from '../../pages/Error';

import './App.css';

/**
 * App
 * Handling web app routes
 * @returns routes
 */
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/employees" element={<Employees />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
