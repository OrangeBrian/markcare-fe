import React, { useState } from 'react';
import loginImg from '../images/logo.png'
import { Form, Icon, Input, Button, message } from "antd";
import accessApi from '../apimethod/accessApi';
const FormItem = Form.Item;

const Register = () => {

    let [user, setUser] = useState('');
    let [name, setName] = useState('');
    let [lastname, setLastName] = useState('');
    let [password, setPassword] = useState('');
    let [confirmpass, setConfirmpass] = useState('');
    let [email, setEmail] = useState('');
    let [cellphone, setCellPhone] = useState('');
    let [idlegal, setIdLegal] = useState('');
    let [address, setAddress] = useState('');
    let [country, setCountry] = useState('');

    var sendData={
        "username": user,
        "name": name,
        "lastName": lastname,
        "address": address,
        "email": email,
        "password": password,
        "cellphone": cellphone,
        "idLegal": idlegal,
        "country": country
    }

    function validateEmail(correo) {
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido = expReg.test(correo);
        if (esValido===true){
            return true;
        } else {
            return false;
        }
    }    

    function handleRegister(e) {

        e.preventDefault();
    
        if (
            user.length === 0 || email.length === 0 || password.length === 0 || confirmpass.length === 0 || 
            cellphone.length === 0 || idlegal.length === 0 || address.length === 0 || country.length === 0 ||
            name.length===0 || lastname.length===0 ) {

                setTimeout(() => {
                    message.info('Hay campos vacios, por favor ingresar todos los campos.',2)
                }, 500);

        }else if( isNaN(cellphone) ){
                
                setTimeout(() => {
                    message.info('Error en telefono, debe ingresar valores numericos.',2)
                }, 500);
                
        }else if ( (isNaN(idlegal)) ){

            setTimeout(() => {
                message.info('Error en el dni, debe ingresar valores numericos.',2)
            }, 500);

        }else if(validateEmail(email)===false) {

            setTimeout(() => {
                message.info('Mail ingresado incorrecto',2)
            }, 500);

        }else if(password !== confirmpass){

            setTimeout(() => {
                message.info('Contraseña y confirmacion de contraseña distintas, deben ser iguales.',2)
            }, 500);

        }else{
            
            try {
                accessApi.postUserApp(sendData);
                setTimeout((e) => {
                    message.success('Usuario registrado',2);
                }, 500);
                
                window.location.href = '/login';

            } catch (error) {

                setTimeout((e) => {
                    message.error('No se ha podido registrar',2);
                }, 1000);

                document.getElementById('user').value = '';
                document.getElementById('name').value = '';
                document.getElementById('lastname').value = '';
                document.getElementById('password').value = '';
                document.getElementById('confirmpass').value = '';
                document.getElementById('mail').value = '';
                document.getElementById('address').value = '';
                document.getElementById('country').value = '';
                document.getElementById('cellphone').value = '';
                document.getElementById('idlegal').value = '';
            }

        }

    }

    return (
        <div>
            <div className="navBar1">
                <a href="/" className="btn" role="button" aria-pressed="true">Volver</a>
            </div>
            <hr />
            <div className={"lContainer"}>
                <div className="lItem">
                    <div className="registerImage">
                        <img src={loginImg} width="300" alt="register" />
                    </div>
                    <div className="registerForm">
                        <h2>Registro</h2>
                        <Form onSubmit={handleRegister} id="formulario" className="register-form">
                            <FormItem>
                                <Input
                                    prefix={<Icon type="idcard" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    id="user" 
                                    type="user"
                                    placeholder="Usuario"
                                    onChange={({ target }) => setUser(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    id="name"
                                    type="text"
                                    placeholder="Nombre"
                                    onChange={({ target }) => setName(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="text"
                                    id="lastname"
                                    placeholder="Apellido"
                                    onChange={({ target }) => setLastName(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    id="password"
                                    type="password"
                                    placeholder="Contraseña"
                                    onChange={({ target }) => setPassword(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    id="confirmpass"
                                    type="password"
                                    placeholder="Confirmar contraseña"
                                    onChange={({ target }) => setConfirmpass(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    id="mail"
                                    type="text"
                                    placeholder="Email"
                                    onChange={({ target }) => setEmail(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="home" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    id="address"
                                    type="address"
                                    placeholder="Direccion"
                                    onChange={({ target }) => setAddress(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="global" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    id="country"
                                    type="text"
                                    placeholder="Pais"
                                    onChange={({ target }) => setCountry(target.value)}
                                />
                            </FormItem>                        
                            <FormItem>
                                <Input
                                    prefix={<Icon type="shake" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    id = "cellphone"
                                    type="text"
                                    placeholder="Celular"
                                    onChange={({ target }) => setCellPhone(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    id="idlegal"
                                    placeholder="DNI"
                                    type="text"
                                    onChange={({ target }) => setIdLegal(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="register-form-button"
                                >
                                    Registrar usuario
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;