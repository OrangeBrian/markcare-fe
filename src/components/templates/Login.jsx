import React, { useState } from 'react';
import loginImg from '../images/logo.png'
import Location from './Location';
import { Form, Icon, Input, Button, message } from "antd";
const FormItem = Form.Item;

function getDataUser(usuarioIngresado){
    
    window.localStorage.removeItem('rta');

    const api = 'https://markcare-be.herokuapp.com/api/customer/find/'
    fetch(api+usuarioIngresado)
        .then(respuesta=> {
                if (respuesta.ok) {
                    window.localStorage.setItem('rta','registrado');
                    return respuesta.json();
                }else{
                    window.localStorage.setItem('rta','no registrado');
                }
        })
            .then(data=>{
                window.localStorage.setItem('dataUser',JSON.stringify(data));
            })
}

const Login = () => {

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    let loginUser ={
        username1: username,
        password1: password
    };

    const [location, setLocation] = useState(true)

    function handleLogin(e) {

        e.preventDefault();

        getDataUser(username);

        window.localStorage.setItem('loguinUser',JSON.stringify(loginUser));
        
        const dataApiUser = JSON.parse(window.localStorage.getItem('dataUser'));

        setTimeout((e)=>{
            console.log('esperando');
        }, 1500);

        if ((dataApiUser.username !== loginUser.username1)) {

            setTimeout((e) => {
                message.error('Usuario no registrado.');
            }, 0);
            
            document.getElementById('user').value ='';
            document.getElementById('password').value ='';

        } else if ((dataApiUser.password !== loginUser.password1)){

            setTimeout((e) => {
                message.error('Contraseña incorrecta');
            }, 0);

            document.getElementById('user').value ='';
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
                                                id="user"
                                                placeholder="Usuario"
                                                onChange={({ target }) => setUsername(target.value)}
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
                    : <Location />
            }
        </div>
    )
}

export default Login;