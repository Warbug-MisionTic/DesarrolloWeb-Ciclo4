import { Row, Col, Table, Button, Fade } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { compose } from "recompose";
import { withRouter } from "../../router/withRouter";
import * as Icon from "react-feather";

import { fetchConToken } from '../../helpers/fetch';

const Sales = (props) => {
  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const fetchCarrito = async () => {
      const resp = await fetchConToken('carrito');
      const body = await resp.json();

      if (body.ok) {
        setCarrito(body.carrito)
        let totalCarrito = 0;
        body.carrito.map((item => totalCarrito += item.total))
        setTotal(totalCarrito)
      }
    }
    fetchCarrito()
  }, [])
  console.log(carrito)
  return (
    <div className="container mt-10">
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">Lista de Ventas</h5>
              </div>

              <Table responsive hover bordered className="m-0 text-center">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Fecha</th>
                    <th>IdVenta</th>
                    <th className="text-center">Total</th>
                    <th className="text-center">Total Productos</th>
                    <th className="text-center">Productos</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito &&
                    carrito.map((item, index) => {
                      return (
                        <TableTd
                          key={index}
                          item={item}
                          index={index}
                        />

                      );
                    })}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <th scope="row">TOTAL</th>
                    <td>
                      <strong>${total}</strong>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
    </div >
  );
};

const TableTd = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <tr>
        <td className="text-left">{index + 1}</td>
        <td className="text-left">{item.fecha}</td>
        <td className="text-left">{item.id}</td>
        <td className="text-left">{item.total}</td>
        <td className="text-left">{item.totalProductos}</td>
        <td>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-fade-text"
            aria-expanded={open}
          >   <Icon.Eye className="icon wh-15" />
          </Button>
        </td>
      </tr>

      {open && <tr>
        <Fade in={open}>
          <td colspan="7">
            <div id="example-fade-text">
              <Table responsive hover bordered className="m-0 text-center" variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th className="text-center">Precio</th>
                    <th>Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {item.productos && item.productos.map((item, index) => {
                    console.log(item)
                    return (
                      <tr key={index}>
                        <td className="text-left">{index + 1}</td>
                        <td className="text-left">
                          <img
                            alt="/"
                            className="img-fluid"
                            src={item.image}
                          ></img>
                        </td>
                        <td className="text-left">{item.titulo}</td>
                        <td className="text-left">{item.descripcion}</td>
                        <td className="text-left">{item.precio/item.quantity}</td>
                        <td className="text-left">{item.quantity}</td>
                      </tr>
                    )
                  })
                  }
                </tbody>

              </Table>
            </div>

          </td>
        </Fade>
      </tr>}
    </>
  )
}
export default compose(withRouter)(Sales);

