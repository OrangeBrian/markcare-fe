import React from 'react';
import loginImg from '../images/logo.png'
import { Form, Icon, Input, Button, message } from "antd";
import accessApi from '../apimethod/accessApi';
const FormItem = Form.Item;

const Login = () => {

    accessApi.getShops();

    function handleLogin(e) {

        e.preventDefault();

        let loginUser ={
            emailLogin: document.getElementById('email').value,
            passwordLogin: document.getElementById('password').value
        };

        console.log(loginUser.emailLogin);
        console.log(loginUser.passwordLogin);

        accessApi.getUserByMail(loginUser.emailLogin)
            .then(result =>{

                const dataApiUser = JSON.parse(window.localStorage.getItem('dataUserByEmail'));
                result = dataApiUser;
                return result
            })
            .then(dataApiUser=>{

                    if ( loginUser.emailLogin.length===0 ) {
            
                        setTimeout((e) => {
                            message.error('Email vacio, por favor ingrese el email para el acceso',1);
                        }, 100);
                        
                        document.getElementById('email').value ='';
                        document.getElementById('email').focus()                        
            
                    } else if(dataApiUser=== null){

                        setTimeout((e) => {
                            message.error('Usuario no registrado',1);
                        }, 100);
                        
                        document.getElementById('email').value ='';
                        document.getElementById('password').value ='';
                        document.getElementById('email').focus()                        

                    } else if(loginUser.passwordLogin.length===0){

                        setTimeout((e) => {
                            message.error('Contraseña vacia',1);
                        }, 100);
                        
                        document.getElementById('password').value ='';
                        localStorage.removeItem('dataUserByEmail');
                        console.log(dataApiUser);
                        dataApiUser=null;
                        console.log(dataApiUser);                        
                        document.getElementById('password').focus()
                        
                    } else if ( dataApiUser['password'] !== loginUser.passwordLogin){
            
                        setTimeout((e) => {
                            message.error('Contraseña incorrecta',1);
                        }, 100);
            
                        document.getElementById('password').value ='';
                        localStorage.removeItem('dataUserByEmail');
                        console.log(dataApiUser);
                        dataApiUser=null;
                        console.log(dataApiUser);
                        document.getElementById('password').focus();
            
                    } else {
                        setTimeout((e) => {
                            message.success('Usuario logueado exitosamente.',1)
                        }, 10);
                        setTimeout((e) => {
                            window.location.href = './shop'    
                        }, 500);
                    }
            })
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
                                    />
                                </FormItem>
                                <FormItem>
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                        type="password"
                                        id="password"
                                        placeholder="Contraseña"
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