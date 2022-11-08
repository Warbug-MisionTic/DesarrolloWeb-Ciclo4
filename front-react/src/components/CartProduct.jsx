import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { ShoppingContext } from "../context/shoppingContext";
import RowProduct from "./RowProduct";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { user, UserContext } from "../context/userContext";
import Swal from 'sweetalert2';
import { withRouter} from "../router/withRouter";
import { compose } from "recompose";


export const CartProduct = (props) => {
  const { dataShopping, clearCart, deleteProduct } = useContext(ShoppingContext);
  const [total, setTotal] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const {user} = useContext(UserContext);
  const [date, setDate] = useState('');

  // AGREGA EL PRECIO A LA VISTA DE CARRITO

  // AGREGAR EL PRECIO TOTAL DESPUES DE SELECCIONAR EL METODO DE ENVIO
  
  useEffect(() => {
    let totalBeforeShipping = dataShopping.total+ dataShopping.total;
    setTotal(totalBeforeShipping);
  }, [])

  function addPrice(price) {
    let priceShip;
    priceShip = dataShopping.total + price;
    setTotalPrice(priceShip)
  }
  
  
  console.log(dataShopping)
  //FUNCION PARA TERMINAR COMPRA Y MANDAR A DB.
  const onSubmitCart = async () =>{
    let date = new Date().toLocaleDateString();
    const respCart = await fetchConToken('carrito', {fecha:date , total:totalPrice , totalProductos:dataShopping.totalProductos , productos:dataShopping.productos}, 'POST');
    const body = await respCart.json();
    if (body.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: "Producto ingresado con exito",
      })
      props.navigate('/home')
    }
  }

  return (
    <div className="card-container">
      <Row className="cart-container aling-items-center">
        <Col md={7} xs={12} className="cart">
          <h4 className="tittle">
            <b>Productos</b>
          </h4>
          {dataShopping.productos.map((product) => {
            return (
              <RowProduct
                key={product.id}
                precio={product.precio}
                ubicar={product.image}
                titulo={product.titulo}
                descripcion={product.descripcion}
                quantity={product.quantity}
                id={product.id}
              />
            );
          })}
        </Col>
        <Col md={5} xs={12} className="cart2">
          <h5 className="tittle">
            <b>RESUMEN</b>
          </h5>
          <hr></hr>
          <Row>
            <Col className="col-6">
              {" "}
              <h5>Productos : {dataShopping.totalProductos}</h5>
            </Col>
            <Col className="col-6">
              <h5>$ {total}</h5>
            </Col>
          </Row>
          <Form className="form-container">
            <Form.Label>Tipo de envio</Form.Label>
            <Form.Select onChange={(e) => addPrice(parseInt(e.target.value))} className="select-form">
              <option>Seleccione tipo de envio</option>
              <option value={9000}>Envio estandar - 9000COP</option>
              <option value={15000}>Envio rapido - 15000COP</option>
            </Form.Select>
            <Form.Label className="label-form">Cupon de descuento</Form.Label>
            <Form.Control
              className="control-form"
              placeholder="Ingrese su codigo"
              id="code"
            ></Form.Control>
            <hr></hr>
            <Row>
              <Col className="col-6 price-columns">
                <Form.Label>{total}</Form.Label>
              </Col>
              <Col className="col-6 price-columns">{"$"}</Col>
            </Row>
            <Row>
              <Col className="col-6 btn-container">
                <Button onClick={() => clearCart()} className="b-style">Cancelar compra</Button>
              </Col>
              <Col className="col-6 btn-container">
                <Button onClick={onSubmitCart} className="b-style">Finalizar compras</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default compose(withRouter)(CartProduct);