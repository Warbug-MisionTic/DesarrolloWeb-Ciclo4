import React from 'react'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ItemCount from './ItemCount';

const RowProduct = ({ precio, ubicar, titulo, descripcion, data }) => {
  return (
    <>
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
    </>
  )
}
export default RowProduct
