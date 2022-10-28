import { Outlet, Link } from "react-router-dom";
import Sidebars from "../../components/Sidebar";
import products from "../../jsons/products.json";





const Modify = () => {
    return (
            <div className="ContenedorModPadre">
                <Sidebars />
                
                <div className="ContenedorMod">
                    <h3>Productos a modificar </h3>
                    <div className="contenedor-main">
                        <div className="contenedor-product">
                            <img className="imagenProducto" src="#" />
                            <button className="botoncambiarimg"> Cambiar imagen</button>
                        </div>

                        <div className="formulario">
                            <p className="labelMod">Nombre del producto</p>  <input type="text" className="fieldProduct" /> <br /> 
                            <p className="labelMod">Descripción </p> <input type="text" className="fieldProduct" /> <br />
                            <p className="labelMod">Precio</p> <input type="text" className="fieldProduct"/><br />
                        </div>
                        <button> Guardar cambios </button>

                    </div>
                   
                        
                    
                </div>  
                {/* <Outlet /> */}   
            </div>
    );
}

export default Modify;