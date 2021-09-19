import React, { useState } from 'react';
import loginImg from '../images/logo.png'
import Location from './Location';
import { Form, Icon, Input, Button, message } from "antd";
const FormItem = Form.Item;

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [location, setLocation] = useState(true)

    function handleLogin(e) {
        e.preventDefault();

        /* Aca deberia ir a buscar al usuario y su contasena a la Api*/
        let passSave = window.localStorage.getItem('password').replace(/"/g, "");
        let userSave = window.localStorage.getItem('user').replace(/"/g, "");
        // .replace(/"/g,"") se usa para separar las comillas dobles de la cadena

        if ((password !== passSave) || (username !== userSave)) {
            setTimeout((e) => {
                message.error('Usuario o contraseña incorrectos.')
            }, 0);
        } else {
            //alert('ingresaste perro');
            //Aca nos lleva a alguna pagina luego de ingresar a la app.
            //setLocation(!location);
            window.location.href = './location'
        }
    }

    return (
        <div>
            {
                location ?
                    <div>
                        <div className="navBar1">
                            <a href="/" class="btn" role="button" aria-pressed="true">Volver</a>
                        </div>
                        <hr />
                        <div className={"lContainer"}>
                            <div className="lItem">
                                <img src={loginImg} className="logomc" alt="login" />
                                <div className="loginForm">
                                    <h2>Login</h2>
                                    <Form onSubmit={handleLogin} className="login-form">
                                        <FormItem>
                                            <Input
                                                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                                placeholder="Usuario"
                                                onChange={({ target }) => setUsername(target.value)}
                                            />
                                        </FormItem>
                                        <FormItem>
                                            <Input
                                                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                                type="password"
                                                placeholder="Contraseña"
                                                onChange={({ target }) => setPassword(target.value)}
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
                    : <Location />
            }
        </div>
    )
}

export default Login