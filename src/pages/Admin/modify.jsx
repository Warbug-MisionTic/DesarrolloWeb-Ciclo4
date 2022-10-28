import Sidebars from "../../components/Sidebar";
import { withRouter } from "../../router/withRouter";
import { compose } from "recompose";
import React, {useState} from "react";
import Form from 'react-bootstrap/Form';

const Modify = (props) => {
    const [titulo, setTitulo] = useState(props.location.state.titulo)
    const [descripcion, setDescripcion] = useState(props.location.state.descripcion)
    const [precio, setPrecio] = useState(props.location.state.precio)
    const [ubicar, setUbicar] = useState(require(`../../assets/img/${props.location.state.ubicar}`))
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          setUbicar(URL.createObjectURL(event.target.files[0]));
        }
       }
  return (
    <div className="ContenedorModPadre">
     

      <div className="ContenedorMod">
        <h3>Modificar Productos </h3>
        
        <div className="contenedor-main">
          <div className="contenedor-product">
            <img className="imagenProducto" src={ubicar} />
            <Form.Group controlId="formFile" className="mb-3" onChange={onImageChange}>
                <Form.Label>Cambiar imagen</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            
          </div>

          <div className="formulario">
            <p className="labelMod">Nombre del producto</p>{" "}
            <input type="text" className="fieldProduct" onChange={event => setTitulo(event.target.value)} value={titulo} /> <br />
            <p className="labelMod">Descripción </p>{" "}
            <input type="text" className="fieldProduct" onChange={event => setDescripcion(event.target.value)} value={descripcion} /> <br />
            <p className="labelMod">Precio</p>{" "}
            <input type="text" className="fieldProduct" onChange={event => setPrecio(event.target.value)} value={precio}/>
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
