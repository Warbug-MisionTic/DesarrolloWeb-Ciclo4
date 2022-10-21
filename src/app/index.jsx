import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Navbars from '../layouts/Navbar';
import Products from '../pages/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbars />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='products' element={<Products />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
