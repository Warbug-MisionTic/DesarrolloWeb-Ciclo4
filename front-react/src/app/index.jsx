import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Navbars from '../layouts/Navbar';
import Products from '../pages/Admin/products'
import Admin from '../pages/Admin';
import Modify from '../pages/Admin/modify';
import Sales from '../pages/Admin/sales'
import Cart from '../pages/Cart/index';
import { Footer } from '../components/Footer';
import Add from '../pages/Admin/add';
import Login from '../pages/Login';
import PrivateRoutes from '../hook/PrivateRoutes';
import { useContext } from "react";
import { UserContext } from '../context/userContext';

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbars />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            {/*             <Route path='contact' element={<Contact />} /> */}
            <Route path='products' element={<Products />} />

            <Route element={<PrivateRoutes user={user} />}>
              <Route path='admin' element={<Admin />}>
                <Route index element={<Products />} />
                <Route path='add' element={<Add />} />
                <Route path='modify/:id' element={<Modify />}>
                  <Route index element={<div></div>} />
                </Route>
                <Route path='sales' element={<Sales />} />
              </Route>
            </Route>
            <Route path='cart' element={<Cart />} />
            <Route path='*' element={<Navigate replace to="/" />} />

            <Route path='login' element={<Login />} >

            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer
        ubicar={"github.png"}
      />
    </div >
  );
}

export default App;
