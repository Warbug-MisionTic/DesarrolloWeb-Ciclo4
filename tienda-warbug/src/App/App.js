import '../App/App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//Importamos los componentes creados
import About from '../Pantallas/About/About';
import Contact from '../Pantallas/Contact/Contact';
import { Home } from '../Pantallas/Home/Home';
import Navbars from '../layouts/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Navbars />}>
            <Route index element={ <Home/>} />
            <Route path='About' element={ <About />}/>
            <Route path='Contact' element={ <Contact />}/>
            <Route path='*' element={ <Navigate replace to="/" /> }/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
