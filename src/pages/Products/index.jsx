import { Row, Col, Button, ButtonGroup, Table } from 'react-bootstrap';
import * as Icon from 'react-feather';
import React, { useState } from 'react';
import { compose } from 'recompose';
import { withRouter } from '../../router/withRouter';

const Products = (props) => {
    const [items, setItems] = useState([])
    return (
        <div className='container mt-10'>
            <Row>
                <Col xl={12}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="card-title">Lista de Productos</h5>
                            </div>

                            <Table responsive hover bordered className="m-0 text-center" >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Fecha</th>
                                        <th>Nombre</th>
                                        <th className="text-center">Estado</th>
                                        <th className="text-center">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items && items.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="text-left">{index + 1}</td>
                                                <td className="text-left">{item.Fecha}</td>
                                                <td className="text-left">{item.Nombre}</td>
                                                <td className="text-left">{item.Estados}</td>
                                                <td>
                                                    <ButtonGroup size="sm" aria-label="Basic example">
                                                        <Button onClick={() => console.log('holaa')} variant="outline-secondary"><Icon.Edit3 className="icon wh-15" /></Button>
                                                        <Button variant="outline-secondary" onClick={() => console.log('hola')}><Icon.Trash2 className="icon wh-15" /></Button>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default compose(
    withRouter
)(Products);