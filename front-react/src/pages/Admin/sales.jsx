import { Row, Col, Table, Button, Fade } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { compose } from "recompose";
import { withRouter } from "../../router/withRouter";

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
                    <th></th>
                    <th>#</th>
                    <th>Fecha</th>
                    <th>IdVenta</th>
                    <th calssName="text-center">Total</th>
                    <th className="text-center">Total Productos</th>
                    <th className="text-center">Precio</th>
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
        <td>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-fade-text"
            aria-expanded={open}
          >
            Toggle text
          </Button>
        </td>


        <td className="text-left">{index + 1}</td>
        <td className="text-left">{item.fecha}</td>
        <td className="text-left">{item.id}</td>
        <td className="text-left">{item.total}</td>
        <td className="text-left">{item.totalProductos}</td>
        <td className="text-left">{item.precio}</td>
      </tr>

      {open && <tr>
        <Fade in={open}>
          <td colspan="7">
            <div id="example-fade-text">
              <Table responsive hover bordered className="m-0 text-center">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
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

