import React from 'react';
import loginImg from './images/logo.png'
import { Form, Icon, Input, Button, Checkbox} from "antd";
const FormItem = Form.Item;

const Login = () => {
    return (
        <div>
            <div className="RegisterNavBar">
                <a href="/" class="btn btn-primary btn-sm" role="button" aria-pressed="true">Volver</a>
            </div>
            <hr />
            <div className={"lContainer"}>
                <div className="lItem">
                    <div className="loginImage">
                        <img src={loginImg} width="300" alt="login" />
                    </div>
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
                                <Checkbox>Remember me</Checkbox>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                >
                                    Log in
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

export default Login