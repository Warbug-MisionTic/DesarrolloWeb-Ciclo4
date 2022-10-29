import { Row, Col, Button, ButtonGroup, Table } from "react-bootstrap";
import * as Icon from "react-feather";
import React, { useState } from "react";
import { compose } from "recompose";
import { withRouter } from "../../router/withRouter";
import productsLista from "../../jsons/products.json";

const Sales = (props) => {
  const [items, setItems] = useState([]);

  let total = 0;
  productsLista.forEach(function (obj) {
    total += parseInt(obj.precio);
  });

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
                    <th calssName="text-center">Nombre</th>
                    <th className="text-center">Descripcion</th>
                    <th className="text-center">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {productsLista &&
                    productsLista.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className="text-left">{index + 1}</td>
                          <td className="text-left">{item.fecha}</td>
                          <td className="text-left">{item.idVenta}</td>
                          <td className="text-left">{item.titulo}</td>
                          <td className="text-left">{item.descripcion}</td>
                          <td className="text-left">{item.precio}</td>
                        </tr>
                      );
                    })}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <th scope="row">TOTAL</th>
                    <td>
                      <strong>$ {total}</strong>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default compose(withRouter)(Sales);

