import { Row, Col, Button, ButtonGroup, Table } from "react-bootstrap";
import * as Icon from "react-feather";
import React, { useState } from "react";
import { compose } from "recompose";
import { withRouter } from "../../router/withRouter";
import productsLista from "../../jsons/products.json";
import { Link } from "react-router-dom";

const Products = (props) => {
    return (
    <div className="container mt-10">
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">Lista de Productos</h5>
                <div className="btnAdd"><Button as={Link} to= "/admin/add">
                    +
                </Button>
                </div>
              </div>

              <Table responsive hover bordered className="m-0 text-center">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th className="text-center">Precio</th>
                    <th className="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productsLista &&
                    productsLista.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className="text-left">{index + 1}</td>
                          <td className="text-left">
                            {" "}
                            <img
                              alt="/"
                              className="img-fluid"
                              src={require(`../../assets/img/${item.ubicar}`)}
                            ></img>
                          </td>
                          <td className="text-left">{item.titulo}</td>
                          <td className="text-left">{item.descripcion}</td>
                          <td className="text-left">{item.precio}</td>
                          <td>
                            <ButtonGroup size="sm" aria-label="Basic example">
                              <Button
                                onClick={() => props.navigate(`/admin/modify/${item.id}`, { state: item })}
                                variant="outline-secondary"
                              >
                                <Icon.Edit3 className="icon wh-15" />
                              </Button>
                              <Button
                                variant="outline-secondary"
                                onClick={() => console.log("hola")}
                              >
                                <Icon.Trash2 className="icon wh-15" />
                              </Button>
                            </ButtonGroup>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default compose(withRouter)(Products);
