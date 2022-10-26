import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { ShoppingContext } from "../context/shoppingContext";
import RowProduct from "./RowProduct";
import products from '../jsons/products.json'

export const CartProduct = ({ precio, ubicar, titulo, descripcion, data }) => {
  const { dataShopping } = useContext(ShoppingContext);
  console.log(dataShopping);
  return (
    <div className="card-container">
      <Row className="cart-container aling-items-center">
        <Col className="col-7 cart">
          <h4 className="tittle">
            <b>Productos</b>
          </h4>
          { products.map((product) =>{
            return <RowProduct key={product.id} precio={product.precio} ubicar={product.ubicar} titulo={product.titulo} descripcion={product.descripcion}/>
          })}
          {/* <Row className="row-product">
            <Row>
              <Row className="row">
                <Col className="col-3">
                  <img
                    alt="/"
                    className="img-fluid"
                    src={require(`../assets/img/${ubicar}`)}
                  ></img>
                </Col>
                <Col className="col-3">
                  <Row>{titulo}</Row>
                  <Row>{descripcion}</Row>
                </Col>
                <ItemCount />
                <Col className="col-1">
                  {precio}
                  <a className="close">x</a>
                </Col>
              </Row>
            </Row>
          </Row> */}
        </Col>
        <Col lg={true} className="col-5 summary">
          <h5 className="tittle">
            <b>RESUMEN</b>
          </h5>
          <hr></hr>
          <Row>
            <Col className="col-6">ITEMS 3</Col>
            <Col className="col-6"> $130.3</Col>
          </Row>
          <Form className="form-container">
            <Form.Label>Tipo de envio</Form.Label>
            <Form.Select className="select-form">
              <option>Envio estandar - 9COP</option>
              <option>Envio rapido - 15COP</option>
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
                <Form.Label>TOTAL</Form.Label>
              </Col>
              <Col className="col-6 price-columns">{"$"}</Col>
            </Row>
            <Row>
              <Col className="col-6 btn-container">
                <Button className="b-style">Cancelar compra</Button>
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
