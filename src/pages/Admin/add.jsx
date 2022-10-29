import { withRouter } from "../../router/withRouter";
import { compose } from "recompose";
import React, {useState} from "react";
import Form from 'react-bootstrap/Form';

const Add = () => {
   
  return (
    <div className="ContenedorModPadre">
     

      <div className="ContenedorMod">
        <h3>Agregar Productos </h3>
        
        <div className="contenedor-main">
          <div className="contenedor-product">
            <img className="imagenProducto"  />
            <Form.Group controlId="formFile" className="mb-3" >
                <Form.Label>Cambiar imagen</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            
          </div>

          <div className="formulario">
            <p className="labelMod">Nombre del producto</p>{" "}
            <input type="text" className="fieldProduct"  /> <br />
            <p className="labelMod">Descripción </p>{" "}
            <input type="text" className="fieldProduct"  /> <br />
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
export default compose(withRouter)(Add);
