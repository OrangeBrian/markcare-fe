import React, { useState } from 'react';
import loginImg from '../images/logo.png'
import { Form, Icon, Input, Button, message } from "antd";
import accessApi from '../apimethod/accessApi';
const FormItem = Form.Item;


const Login = () => {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    let loginUser ={
        emailLogin: email,
        passwordLogin: password
    };

    function handleLogin(e) {

        e.preventDefault();

        accessApi.getUserByMail(email);

        window.localStorage.setItem('loguinUser',JSON.stringify(loginUser));
        
        const dataApiUser = JSON.parse(window.localStorage.getItem('dataUserByEmail'));

        if ((dataApiUser.email !== loginUser.emailLogin
            || dataApiUser.email.length===0)) {

            setTimeout((e) => {
                message.error('Email no registrado.');
            }, 0);
            
            document.getElementById('email').value ='';
            document.getElementById('password').value ='';

        } else if ((dataApiUser.password !== loginUser.passwordLogin)){

            setTimeout((e) => {
                message.error('Contraseña incorrecta');
            }, 0);

            document.getElementById('password').value ='';

        } else {
            setTimeout((e) => {
                message.error('Usuario logueado exitosamente.')
            }, 0);
            window.location.href = './shop'
        }
    }

    return (
        <div>
                    <div>
                        <div className="navBar1">
                            <a href="/" className="btn" role="button" aria-pressed="true">Volver</a>
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
                                                prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
                                                id="email"
                                                placeholder="Email"
                                                onChange={({ target }) => setEmail(target.value)}
                                            />
                                        </FormItem>
                                        <FormItem>
                                            <Input
                                                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                                type="password"
                                                id="password"
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
        </div>
    )
}

export default Login;