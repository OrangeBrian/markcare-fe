import React, { useState } from 'react';
import loginImg from '../images/logo.png'
import { Form, Icon, Input, Button, message } from "antd";

const FormItem = Form.Item;


function getStatusUser(usuarioIngresado){
            
    const api = 'https://markcare-be.herokuapp.com/api/customer/find/'
    fetch(api+usuarioIngresado)
    .then(respuesta=> {
            if (respuesta.ok) {
                window.localStorage.setItem('rta','registrado');
            }else{
                window.localStorage.setItem('rta','no registrado');
            }
    })
}

function postDataUser(sendData){

    console.log(sendData);
    console.log(JSON.stringify(sendData));

    const apiPost = 'https://markcare-be.herokuapp.com/api/customer/save';
    fetch(apiPost,{
        method:'POST',
        body: sendData,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    })
        .then(  res => {
            if(res.ok){
                window.localStorage.setItem('rtaRegistro','registrado');
            }else{
                window.localStorage.setItem('rtaRegistro','no registrado');    
            }
        })
        // .catch( error =>{
        //     window.localStorage.setItem('rtaRegistro','no registrado');
        // });
}   


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


    var sendData = {
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


//     Datos de prueba.
//     var sendData = {
//     "username": "ArFel",
//     "name": "Ariel",
//     "lastName": "Feldman",
//     "address": "Av segurola",
//     "email": "ariel@hotmail.com",
//     "password": "1234",
//     "cellphone": 1123,
//     "idLegal": 341231,
//     "country": "Argentina"
//   }

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

        e.preventDefault();//Evita que se procese lo que viene por default en el navegador.
    
        window.localStorage.removeItem('rtaRegistro');
        window.localStorage.removeItem('rta');
        
        getStatusUser(user);
    
        let rta = window.localStorage.getItem('rta');        

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
                message.info('Mail incorrecto',2)
            }, 500);

        }else if(rta==='registrado'){

            setTimeout(() => {
                message.info('Usuario ya registrado.',2)
            }, 500);
        
            
        }else if(password !== confirmpass){

            setTimeout(() => {
                message.info('Contraseña y confirmacion de contraseña distintas, deben ser iguales.',2)
            }, 500);

        }else{
            
            console.log('vino por aca perro');

            try {
                postDataUser(sendData); 
                setTimeout(() => {
                   message.success('Se guarda registro.',2) 
                }, 500);   
            } catch (error) {
                console.log(sendData);
                setTimeout(() => {
                    message.error('No se logra registrar al usuario',2) 
                 }, 500);                   
            }

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