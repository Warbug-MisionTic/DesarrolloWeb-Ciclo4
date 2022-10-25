import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ItemCount from "../../components/ItemCount";

const Cart = () => {

  return (
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
                    src="https://user-images.githubusercontent.com/106354407/197634271-c22fd33e-8d6b-496c-9ea6-75f29c77a81a.png"
                  ></img>
                </Col>
                <Col className="col-3">
                  <Row>Equipo Portatil</Row>
                  <Row>Portatil Hp</Row>
                </Col>
                <ItemCount />
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
                    src="https://user-images.githubusercontent.com/106354407/197634419-8d651d56-5236-4757-95e9-f07a4600930d.png"
                  ></img>
                </Col>
                <Col className="col-3">
                  <Row>Equipo Portatil</Row>
                  <Row>Portatil Acer</Row>
                </Col>
                <ItemCount />
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
                    src="https://user-images.githubusercontent.com/106354407/197634555-ea5dc7d3-e61c-4903-ba0b-fa74017c2998.png"
                  ></img>
                </Col>
                <Col className="col-3">
                  <Row>Equipo Portatil</Row>
                  <Row>Portatil Asus</Row>
                </Col>
                <ItemCount />
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
              <Col className="col-6 price-columns" >
                <Form.Label>TOTAL</Form.Label>
              </Col>
              <Col className="col-6 price-columns">
                {"$"}
              </Col>
            </Row>
            <Row>
              <Col className="col-6 btn-container" >
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

export default Cart;
