import { withRouter } from "../../router/withRouter";
import { compose } from "recompose";
import React, { useState, useEffect, useContext } from "react";
import { Button, Form, Row } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { fetchConToken, fetchSinToken } from "../../helpers/fetch";
import { ShoppingContext } from "../../context/shoppingContext";
import Swal from 'sweetalert2'

const Add = (props) => {
  const { register, setValue, handleSubmit, reset, formState: { errors }, control, watch } = useForm({ mode: 'onBlur' });
  const { changeProducts } = useContext(ShoppingContext);
  const [image, setImage] = useState(props.location.state.image)
  const [fecha, setFecha] = useState()
  const [id, setId] = useState(props.location.state.id)
  setValue("titulo", props.location.state.titulo);
  setValue("descripcion", props.location.state.descripcion);
  setValue("precio", props.location.state.precio);
  setValue("stock", props.location.state.stock);

  useEffect(() => {
    const f = new Date();
    const fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    setFecha(fecha)
  }, [])

  const onSubmit = async (data) => {
    const resp = await fetchConToken('productos/' + id, { ...data, image: image, fecha }, 'PUT');
    const body = await resp.json();
    if (body.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: "Producto actualizado con exito",
      })
      const resp = await fetchSinToken('productos', 'GET');
      const body = await resp.json();
      if (body.ok) {
        changeProducts(body.productos)
        props.navigate('/home')
      }
    } else if (body.ok === false) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "Inicie sesion primero",
      })
    }
  };

  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "ddvu3ivbw",
      uploadPreset: "sddyekzy"
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        setImage(result.info.secure_url)
      }
    }
  );
  return (
    <div className="ContenedorModPadre">
      <div className="ContenedorMod">
        <h3>Modificar Productos </h3>

        <Form onSubmit={handleSubmit(onSubmit)}>


          <div className="contenedor-main">

            <div className="contenedor-product">
              <img className="imagenProducto" src={image} />
              <Row>
                <Form.Group controlId="image" className="mb-3">
                  <Form.Label>Imagen</Form.Label>
                  <Form.Control
                    type="text"
                    name="image"
                    disabled
                    placeholder="Imagen"
                    value={image}
                    className={`${errors.image && 'is-invalid'} form-control my-2`}

                  />
                  <Button className="cloudinary-button" onClick={() => myWidget.open()}>
                    Subir Imagen
                  </Button>
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
                    maxLength: 20,
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