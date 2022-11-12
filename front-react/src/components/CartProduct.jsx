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
import Swal from "sweetalert2";
import { withRouter } from "../router/withRouter";
import { compose } from "recompose";
import { UserContext } from "../context/userContext";

export const CartProduct = (props) => {
  const { dataShopping, clearCart, deleteProduct } = useContext(ShoppingContext);
  const { user } = useContext(UserContext);

  //FUNCION PARA TERMINAR COMPRA Y MANDAR A DB.
  const onSubmitCart = async () => {
    if (user) {
      let date = new Date().toLocaleDateString();
      const respCart = await fetchConToken(
        "carrito",
        dataShopping,
        "POST"
      );
      const body = await respCart.json();
      if (body.ok) {
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Producto ingresado con exito",
        });
        clearCart();
        props.navigate("/home");

      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Inicie sesión primero",
      });
      props.navigate("/login");
    }
  };
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
              <h5>$ {dataShopping.total}</h5>
            </Col>
          </Row>
          <Form className="form-container">
            <Form.Label><h4>Warbug Store</h4></Form.Label>
            <Form.Label className="label-form">Debajo puede observar el total de su compra</Form.Label>
            <hr></hr>
            <Row>
              <Col className="col-6 price-columns">
                <Form.Label>{`$ ${dataShopping.total}`}</Form.Label>
              </Col>
              <Col className="col-6 price-columns">{"Total compra"}</Col>
            </Row>
            <Row>
              <Col className="col-6 btn-container">
                <Button onClick={() => clearCart()} className="b-style">
                  Cancelar compra
                </Button>
              </Col>
              <Col className="col-6 btn-container">
                <Button onClick={onSubmitCart} className="b-style">
                  Finalizar compras
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default compose(withRouter)(CartProduct);
