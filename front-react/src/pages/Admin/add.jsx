import { withRouter } from "../../router/withRouter";
import { compose } from "recompose";
import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

const Add = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="ContenedorModPadre">
      <div className="ContenedorMod">
        <h3>Agregar Productos </h3>

        <div className="contenedor-main">
          <div className="contenedor-product">
            <img className="imagenProducto" />
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Cambiar imagen</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="nombreP"
              className="form-control my-2"
              placeholder="Ingrese un nombre de producto"
              {...register("nombreP", {
                required: true,
                maxLength: 20,
                message: "Campo requerido", 
              })}
            />

            <textarea
              type="text"
              name="descripcion"
              className="form-control my-2"
              placeholder="Ingrese la descripción del producto"
              {...register("descripcion", {
                required: true,
                maxLength: 30,
                message: "Campo requerido",
              })}
            />

            <input
              type="number"
              name="precio"
              className="form-control my-2"
              placeholder="Ingrese el valor del producto"
              {...register("precio", {
                required: true,
                maxLength: 8,
                message: "Campo requerido",               })}
            />

            <input
              type="number"
              name="cantidad"
              className="form-control my-2"
              placeholder="Ingrese cantidad"
              {...register("cantidad", {
                required: true,
                maxLength: 3,
                message: "Campo requerido",
              })}
            />

            <span className="text-danger text-small d-block mb-2">
              {errors?.titulo?.message}
            </span>

            <button className="btn btn-primary">Guardar Cambios</button>
          </form>
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};
export default compose(withRouter)(Add);