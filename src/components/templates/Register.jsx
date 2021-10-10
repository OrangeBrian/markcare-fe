import React, { useState } from 'react';
import loginImg from '../images/logo.png'
import { Form, Icon, Input, Button, message } from "antd";
import accessApi from '../apimethod/accessApi';
import { setTwoToneColor } from 'antd/lib/icon/twoTonePrimaryColor';
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

        accessApi.postUserApp(sendData);

        setTimeout((e) => {

            const statusCode = localStorage.getItem('status');

            if (
                user.length === 0 || email.length === 0 || password.length === 0 || confirmpass.length === 0 || 
                cellphone.length === 0 || idlegal.length === 0 || address.length === 0 || country.length === 0 ||
                name.length===0 || lastname.length===0 ) {
    
                setTimeout((e) => {
                    message.info('Hay campos vacios, por favor ingresar todos los campos.',2)
                }, 200);
    
            }else if( isNaN(cellphone) ){
                    
                setTimeout((e) => {
                    message.info('Error en telefono, debe ingresar valores numericos.',2)
                }, 200);
                    
            }else if ( (isNaN(idlegal)) ){
    
                setTimeout((e) => {
                    message.info('Error en el dni, debe ingresar valores numericos.',2)
                }, 200);
    
            }else if(validateEmail(email)===false) {
    
                setTimeout((e) => {
                    message.info('Mail ingresado incorrecto',2)
                }, 200);
    
            }else if(password !== confirmpass){
    
                setTimeout((e) => {
                    message.info('Contraseña y confirmacion de contraseña distintas, deben ser iguales.',2)
                }, 200);
    
            }else if(statusCode=='error'){
    
                setTimeout((e) => {
                    message.error('Usuario ya registrado',2);
                }, 200);
    
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
                localStorage.clear();
    
            }else{
    
                    setTimeout((e) => {
                        message.success('Usuario registrado exitosamente',1);
                    }, 100);
                    
                    console.log(sendData);

                    setTimeout((e) => {
                        window.location.href = '/login';    
                    }, 1500);
                    
    
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
        }, 1500);


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