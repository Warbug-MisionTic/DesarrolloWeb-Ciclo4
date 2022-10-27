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
                    <form action="">
                        <image>   </image>
                        <button> Cambiar imagen</button>
                        <div className="formulario">
                            <p className="labelMod">Nombre del producto</p>  <input type="text" className="fieldProduct" /> <br /> 
                            <p className="labelMod">Descripción </p> <input type="text" className="fieldProduct" /> <br />
                            <p className="labelMod">Precio</p> <input type="text" className="fieldProduct"/><br />
                        </div>
                    <button> Guardar cambios </button>
                    </form>
                </div>  
                <Outlet />   

            </div>
        </>
    );
}

export default Modify;