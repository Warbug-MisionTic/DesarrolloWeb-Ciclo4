import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ItemCount from "./ItemCount";
import products from "../jsons/products.json";
import { CartProduct } from "./CartProduct";
import FormLabel from "react-bootstrap/FormLabel";

const RowProduct = ({ precio, ubicar, titulo, descripcion, data, quantity }) => {
  
  return (
    <>
      <Row className="row-product">
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
            <Col className="col-3">
              <FormLabel> {quantity} </FormLabel>
            </Col>

            <Col className="col-1"> $
              {precio}
              <a className="close">x</a>
            </Col>
          </Row>
        </Row>
      </Row>
    </>
  );
};
export default RowProduct;
