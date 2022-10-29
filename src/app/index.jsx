import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
/* import Contact from '../pages/Contact'; */
import Home from '../pages/Home';
import Navbars from '../layouts/Navbar';
import Products from '../pages/Admin/products'
import Admin from '../pages/Admin';
import Modify from '../pages/Admin/modify';
import Sales from '../pages/Admin/sales'
import Details from '../pages/Admin/details';
import Cart from '../pages/Cart/index';
import { Footer } from '../components/Footer';
import Add from '../pages/Admin/add';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbars />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
{/*             <Route path='contact' element={<Contact />} /> */}
            <Route path='products' element={<Products />} />
            <Route path='admin' element={<Admin />}>
              <Route index element={<Products />} />
              <Route path='add' element={<Add />}/>
              <Route path='modify/:id' element={<Modify />}>
              <Route index element={<div></div>} />
              </Route>
              <Route path='sales' element={<Sales />} />
            </Route>
            <Route path='cart' element={<Cart />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer 
        ubicar = {"github.png"}
      />
    </div>
  );
}

export default App;
