import Sidebars from "../../components/Sidebar";
import { withRouter } from "../../router/withRouter";
import { compose } from "recompose";
import React, {useState} from "react";

const Modify = (props) => {
    console.log(props)
    const [product, setProduct] = useState(props.location.state);
    console.log(product)
  return (
    <div className="ContenedorModPadre">
      <Sidebars />

      <div className="ContenedorMod">
        <h3>Productos a modificar </h3>
        
        <div className="contenedor-main">
          <div className="contenedor-product">
            <img className="imagenProducto" src="https://user-images.githubusercontent.com/106354407/197634271-c22fd33e-8d6b-496c-9ea6-75f29c77a81a.png" />
            <button className="botoncambiarimg"> Cambiar imagen</button>
          </div>

          <div className="formulario">
            <p className="labelMod">Nombre del producto</p>{" "}
            <input type="text" className="fieldProduct" onChange={event => setProduct(event.target.product)} /> <br />
            <p className="labelMod">Descripción </p>{" "}
            <input type="text" className="fieldProduct" /> <br />
            <p className="labelMod">Precio</p>{" "}
            <input type="text" className="fieldProduct" />
            <br />
            <button className="botoncambiarimg"> Guardar cambios </button>
          </div>

        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};
export default compose(withRouter)(Modify);
