import React from 'react';
import loginImg from './images/logo.png'
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
const FormItem = Form.Item;

const Register = () => {
    return (
        <div>
            <div className="navBar1">
                <a href="/"class="btn" role="button" aria-pressed="true">Volver</a>
            </div>
            <hr />
            <div className={"lContainer"}>
                <div className="lItem">
                        <img src={loginImg} className="logomc"  alt="login" />
                    <div className="registerForm">
                        <h2>Register</h2>
                        <Form onSubmit="" className="register-form">
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    placeholder="Usuario"
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    placeholder="Contraseña"
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    placeholder="Confirmar contraseña"
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    placeholder="Email"
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    placeholder="Telefono"
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    placeholder="DNI"
                                />
                            </FormItem>
                            <FormItem>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="register-form-button"
                                >Register User
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register