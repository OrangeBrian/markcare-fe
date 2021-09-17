import React from 'react';
import loginImg from './images/logo.png'
import { Form, Icon, Input, Button, Checkbox } from "antd";
const FormItem = Form.Item;

const Login = () => {
    return (
        <div>
            <div className="navBar1">
                <a href="/" class="btn" role="button" aria-pressed="true">Volver</a>
            </div>
            <hr />
            <div className={"lContainer"}>
                <div className="lItem">
                        <img src={loginImg} className="logomc"  alt="login" />
                    <div className="loginForm">
                        <h2>Login</h2>
                        <Form onSubmit='' className="login-form">
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    placeholder="Username"
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </FormItem>
                            <FormItem>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                >
                                    Login
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login