import { withRouter } from "../../router/withRouter";
import { compose } from "recompose";
import React, { useState, useEffect } from "react";
import { Button, Form, Row } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { fetchMultipartConToken } from "../../helpers/fetch";
import Swal from 'sweetalert2'


const Add = (props) => {
  const { register, handleSubmit, reset, control, formState: { errors } } = useForm();

  const [image, setImage] = useState('')
  const [fecha, setFecha] = useState()

  useEffect(() => {
    const f = new Date();
    const fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    setFecha(fecha)
  }, [])

  const onSubmit = async (data) => {
    const resp = await fetchMultipartConToken('productos', { ...data, image: data.Image[0], fecha }, 'POST');
    const body = await resp.json();
    if (body.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: "Producto ingresado con exito",
      })
      props.navigate('/admin')
    }

  };

  const onChangePicture = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="ContenedorModPadre">
      <div className="ContenedorMod">
        <h3>Agregar Productos </h3>

        <Form onSubmit={handleSubmit(onSubmit)}>


          <div className="contenedor-main">

            <div className="contenedor-product">
              <img className="imagenProducto" src={image} />
              <Row>
                <Form.Group controlId="Image" className="mb-3">
                  <Form.Label>Cambiar imagen</Form.Label>
                  <Form.Control
                    type="file"
                    {...register("Image", {
                      required: true,
                      maxLength: 20,
                      onChange: (e) => onChangePicture(e)
                    })}
                    accept="image/png, image/jpeg"
                    className={`${errors.Image && 'is-invalid'} form-control my-2`}

                  />
                </Form.Group>
              </Row>
            </div>

            <Row>
              <Form.Group className="mb-3" controlId="titulo" >
                <Form.Control
                  type="text"
                  name="titulo"
                  placeholder="Ingrese un nombre de producto"
                  {...register("titulo", {
                    required: true,
                    maxLength: 20
                  })}
                  className={`${errors.titulo && 'is-invalid'} form-control my-2`}

                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="descripcion" >
                <Form.Control
                  style={{ height: 'auto' }}
                  rows={3}
                  as="textarea"
                  name="descripcion"
                  placeholder="Ingrese la descripción del producto"
                  {...register("descripcion", {
                    required: true,
                  })}
                  className={`${errors.descripcion && 'is-invalid'} form-control my-2`}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="precio" >
                <Form.Control
                  type="number"
                  name="precio"
                  min="0"
                  placeholder="Ingrese precio de producto"
                  {...register("precio", {
                    required: true,
                    maxLength: 8
                  })}
                  className={`${errors.precio && 'is-invalid'} form-control my-2`}

                />
              </Form.Group>


              <Form.Group className="mb-3" controlId="stock" >
                <Form.Control
                  type="number"
                  name="stock"
                  min="0"
                  placeholder="Ingrese cantidad"
                  {...register("stock", {
                    required: true,
                    maxLength: 3,
                  })}
                  className={`${errors.stock && 'is-invalid'} form-control my-2`}

                />
              </Form.Group>

              <Button className="btn btn-primary" type="submit">Guardar Cambios</Button>
            </Row>
          </div>
        </Form>
      </div >
    </div >

  );
};
export default compose(withRouter)(Add);