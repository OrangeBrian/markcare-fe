import React from 'react';
import loginImg from './images/logo.png'
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
const FormItem = Form.Item;

const Register = () => {
    return (
        <div>
            <div className="RegisterNavBar">
                <a href="/"class="btn btn-primary btn-sm" role="button" aria-pressed="true">Volver</a>
            </div>
            <hr />
            <div className={"lContainer"}>
                <div className="lItem">
                    <div className="registerImage">
                        <img src={loginImg} width="300"  alt="register" />
                    </div>
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
                                >
                                    Register User
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
                <div className="footer">
                    <a href="" target="_blank" rel="noopener noreferrer" className="footerLink">Powered by React</a>
                </div>
            </div>
        </div>
    )
}

export default Register