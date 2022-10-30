import { useContext } from 'react';
import { Col, Button, Row, Form } from 'react-bootstrap'
import { compose } from "recompose";
import { Controller, useForm } from "react-hook-form";
import Swal from 'sweetalert2'

import { fetchSinToken, fetchConToken } from '../../helpers/fetch';
import { UserContext } from '../../context/userContext';
import { withRouter } from "../../router/withRouter";

const Login = (props) => {
    const { register, handleSubmit, reset, control, formState: { errors } } = useForm();
    const { user, toggleUser } = useContext(UserContext);

    const onSubmit = async (data) => {
        const resp = await fetchSinToken('auth', { email: data.Email, password: data.Password }, 'POST');
        const body = await resp.json();
        if (body.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: "Ingreso con exito",
            })
            if (body.rol == 0) {
                props.navigate('/admin')
                return toggleUser(body)
            } else {
                props.navigate('/')
                return toggleUser(body)
            }
        }
        reset()
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: body.msg,
        })
    }
    return (
        <div className="container mt-10">
            <Row>
                <Col xl={6}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="card-title">Compra productos</h5>
                            </div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam nulla magnam atque ab similique nam, animi voluptas eos minus iste quos, ad corporis officia? Facilis harum adipisci cupiditate repellat!
                        </div>
                    </div>
                </Col >
                <Col xl={6}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card-header mb-2">
                                <h5 className="card-title">Iniciar Session</h5>
                            </div>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3" controlId="Email" >
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control
                                        name="Email"
                                        type="email"
                                        placeholder="Ingrese su correo"
                                        {...register("Email", {
                                            required: true,
                                        })}
                                        className={errors.Email && 'is-invalid'} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Password">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        name="Password"
                                        type="password"
                                        placeholder="Ingrese su contraseña"
                                        {...register("Password", {
                                            required: true,
                                            minLength: 6
                                        })}
                                        className={errors.Password && 'is-invalid'} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Ingresar
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Col >
            </Row >
        </div >
    );
}

export default compose(withRouter)(Login);
