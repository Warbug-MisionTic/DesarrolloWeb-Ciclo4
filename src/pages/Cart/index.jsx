import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Cart = () => {
  return (
    <body>
      <div className="card-container">
        <Row className="cart-container aling-items-center">
          <Col className="col-7 cart">
            <h4 className="tittle">
              <b>Productos</b>
            </h4>
            <Row className="row-product">
              <Row>
                <Row className="row">
                  <Col className="col-3">
                    <img
                      alt="/"
                      className="img-fluid"
                      src="https://i.imgur.com/pHQ3xT3.jpg"
                    ></img>
                  </Col>
                  <Col className="col-3">
                    <Row>Type Product</Row>
                    <Row>Name Product</Row>
                  </Col>
                  <Col className="col-3">
                    <a className="a" href="#">
                      -
                    </a>
                    <a className="a" href="#" class="border">
                      1
                    </a>
                    <a className="a" href="#">
                      +
                    </a>
                  </Col>
                  <Col className="col-1">
                    {"Price"}
                    <a className="close">x</a>
                  </Col>
                </Row>
              </Row>
              <Row>
                <Row className="row">
                  <Col className="col-3">
                    <img
                      alt="/"
                      className="img-fluid"
                      src="https://i.imgur.com/1GrakTl.jpg"
                    ></img>
                  </Col>
                  <Col className="col-3">
                    <Row>Type Product</Row>
                    <Row>Name Product</Row>
                  </Col>
                  <Col className="col-3">
                    <a className="a" href="#">
                      -
                    </a>
                    <a className="a" href="#" class="border">
                      1
                    </a>
                    <a className="a" href="#">
                      +
                    </a>
                  </Col>
                  <Col className="col-1">
                    {"Price"}
                    <a className="close">x</a>
                  </Col>
                </Row>
              </Row>
              <Row>
                <Row className="row">
                  <Col className="col-3">
                    <img
                      alt="/"
                      className="img-fluid"
                      src="https://i.imgur.com/ba3tvGm.jpg"
                    ></img>
                  </Col>
                  <Col className="col-3">
                    <Row>Type Product</Row>
                    <Row>Name Product</Row>
                  </Col>
                  <Col className="col-3">
                    <a className="a" href="#">
                      -
                    </a>
                    <a className="a" href="#" class="border">
                      1
                    </a>
                    <a className="a" href="#">
                      +
                    </a>
                  </Col>
                  <Col className="col-1">
                    {"Price"}
                    <a className="close">x</a>
                  </Col>
                </Row>
              </Row>
            </Row>
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
              <Form.Label >Tipo de envio</Form.Label>
              <Form.Select className="select-form">
                <option>Envio estandar - 9COP</option>
                <option>Envio rapido - 15COP</option>
              </Form.Select>
              <Form.Label className="label-form">Cupon de descuento</Form.Label>
              <Form.Control className="control-form"
                placeholder="Ingrese su codigo"
                id="code"
              ></Form.Control>
              <hr></hr>
              <Row>
                <Col class="col-6" className="price-columns">
                  <Form.Label>TOTAL</Form.Label>
                </Col>
                <Col class="col-6" className="price-columns">{"$"}</Col>
              </Row>
              <Row>
                <Col class="col-6" className="btn-container">
                  <Button className="b-style">Cancelar compra</Button>
                </Col>
                <Col class="col-6" className="btn-container">
                  <Button className="b-style">Finalizar compras</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </body>
  );
};

export default Cart;
