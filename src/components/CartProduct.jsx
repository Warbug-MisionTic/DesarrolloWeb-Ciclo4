import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { ShoppingContext } from "../context/shoppingContext";
import RowProduct from "./RowProduct";

export const CartProduct = ({}) => {
  const { dataShopping , clearCart, deleteProduct} = useContext(ShoppingContext);
  const [total, setTotal] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // AGREGA EL PRECIO A LA VISTA DE CARRITO
  useEffect(() => {
    let totalSuma = 0;
    let quantity;
    dataShopping.map((producto) => {
      totalSuma += parseInt(producto.precio);
      quantity = producto.quantity;
    });
    setTotal(totalSuma);
    setProductQuantity(quantity);
  }, []);
  
  // AGREGAR EL PRECIO TOTAL DESPUES DE SELECCIONAR EL METODO DE PAGO
 
  function addPrice(price) {
    let priceShip;
    priceShip = total + price;
    console.log(priceShip)
    setTotalPrice(priceShip)
  }
  
  return (
    <div className="card-container">
      <Row className="cart-container aling-items-center">
        <Col md={7} xs={12} className="cart">
          <h4 className="tittle">
            <b>Productos</b>
          </h4>
          {dataShopping.map((product) => {
            return (
              <RowProduct
                key={product.id}
                precio={product.precio}
                ubicar={product.ubicar}
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
              <h5>Productos : {productQuantity}</h5>
            </Col>
            <Col className="col-6">
              <h5>$ {total}</h5>
            </Col>
          </Row>
          <Form className="form-container">
            <Form.Label>Tipo de envio</Form.Label>
            <Form.Select onChange={(e)=> addPrice(parseInt(e.target.value))} className="select-form">
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
                <Form.Label>{totalPrice}</Form.Label>
              </Col>
              <Col className="col-6 price-columns">{"$"}</Col>
            </Row>
            <Row>
              <Col className="col-6 btn-container">
                <Button onClick={() => clearCart()} className="b-style">Cancelar compra</Button>
              </Col>
              <Col className="col-6 btn-container">
                <Button className="b-style">Finalizar compras</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
