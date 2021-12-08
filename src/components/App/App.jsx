import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Home from '../../pages/Home/Home';
import Employees from '../../pages/Employees/Employees';
import Error from '../../pages/Error/Error';

import './App.css';

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
