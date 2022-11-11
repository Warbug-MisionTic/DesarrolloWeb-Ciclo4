import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "../../router/withRouter";
import { compose } from "recompose";
import { Button, Form, Row } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { fetchConToken, fetchMultipartConToken, fetchSinToken } from "../../helpers/fetch";
import { ShoppingContext } from "../../context/shoppingContext";
import Swal from 'sweetalert2'

const Add = (props) => {
  const { register, setValue, handleSubmit, reset, formState: { errors }, control, watch } = useForm({ mode: 'onBlur' });

  const [image, setImage] = useState('')
  const [fecha, setFecha] = useState()
  const { changeProducts } = useContext(ShoppingContext);

  useEffect(() => {
    const f = new Date();
    const fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    setFecha(fecha)
  }, [])

  const onSubmit = async (data) => {
    const resp = await fetchConToken('productos', { ...data, fecha }, 'POST');
    const body = await resp.json();


    if (body.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: "Producto ingresado con exito",
      })

      const resp = await fetchSinToken('productos', 'GET');
      const body = await resp.json();
      if (body.ok) {
        changeProducts(body.productos)
        props.navigate('/home')
      }
    } else if (body.ok == false) { //POR ARREGLAR
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
      // cropping: true, //add a cropping step
      // showAdvancedOptions: true,  //add advanced options (public_id and tag)
      // sources: [ "local", "url"], // restrict the upload sources to URL and local files
      // multiple: false,  //restrict upload to a single file
      // folder: "user_images", //upload files to the specified folder
      // tags: ["users", "profile"], //add the given tags to the uploaded files
      // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
      // clientAllowedFormats: ["images"], //restrict uploading to image files only
      // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
      // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
      // theme: "purple", //change to a purple theme
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        setImage(result.info.secure_url)
        setValue("image", result.info.secure_url);
      }
    }
  );

  return (
    <div className="ContenedorModPadre">
      <div className="ContenedorMod">
        <h3>Agregar Productos </h3>

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
                    {...register("image", {
                      required: true
                    })}
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