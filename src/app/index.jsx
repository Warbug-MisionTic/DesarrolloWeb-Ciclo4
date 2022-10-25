import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Navbars from '../layouts/Navbar';
import Products from '../pages/Products';
import Admin from '../pages/Admin';
import Modify from '../pages/Admin/modify';
import Sales from '../pages/Admin/sales'
import Details from '../pages/Admin/details';  
import Cart from '../pages/Cart/index';
import { CartContext} from '../components/DataContext';


function App() {
  return (
    <CartContext>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbars />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='products' element={<Products />} />
            <Route path='admin' element={<Admin />}> 
              <Route index element={<Products />} />
              <Route path='modify' element={<Modify />}> 
                <Route index element={<div>Vacío</div>} />
                <Route path=':details' element={<Details />} />
              </Route>
              <Route path='sales' element={<Sales />} />
            </Route>
            <Route path='cart' element={<Cart/>}/>
            <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </CartContext>
  );
}

export default App;
