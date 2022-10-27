import { Outlet, Link } from "react-router-dom";
import Sidebars from "../../components/Sidebar";
import products from "../../jsons/products.json";


const Modify = () => {
    return (
        <>
            <div className="ContenedorModPadre">
                <Sidebars />
                <div className="ContenedorMod">
                <h3>Productos a modificar </h3>
                
                </div>  
                <Outlet />   

            </div>
             
                
            
            
        </>
    );
}

export default Modify;