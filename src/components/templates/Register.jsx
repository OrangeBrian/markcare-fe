import React, { useState } from 'react';
import loginImg from '../images/logo.png'
import { Form, Icon, Input, Button, message } from "antd";

const FormItem = Form.Item;

/*
    CONST: Es una constante la cual NO cambiara su valor en ningún momento en el futuro. 
    VAR: Es una variable que SI puede cambiar su valor y su scope (alcance) es local. 
    LET: Es una variable que también podra cambiar su valor, pero solo vivirá(Funcionara) en el bloque donde fue declarada.
*/

//Funcion que mediante el usuario va a la api a buscar una respuesta.
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

//Funcion que envia a la api los datos del nuevo usuario.
function postDataUser(user, sendData){
    const api = ''
    fetch(api+user,{
        method:'POST',
        body: sendData
    })
        .then(  res => res.json())
        .then(  data => console.log(data))
        .catch( error =>{
            console.error(error);
            setTimeout((e) => {
                message.error('No pudo registrarse') 
             }, 500);
        });
}


const Register = () => {

    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirmpass] = useState('');
    const [email, setEmail] = useState('');
    const [cellphone, setCellPhone] = useState('');
    const [idlegal, setIdLegal] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');


    var sendData = {
        sendUser:user,
        sendname:name,
        sendlastname:lastname,
        sendpassword:password,
        sendemail:email,
        sendcellphone:cellphone,
        sendidlegal:idlegal,
        sendaddress:address,
        sendcountry:country,
    }


    //getStatusUser('borange')
    //var datostodos = JSON.parse(window.localStorage.getItem('datos'));
    //console.log(datostodos.username);

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
        
        window.localStorage.removeItem('rta');
        getStatusUser(user);

        let rta = window.localStorage.getItem('rta');

        if (
            user.length == 0 || email.length == 0 || password.length == 0 || confirmpass.length == 0 || 
            cellphone.length == 0 || idlegal.length == 0 || address.length == 0 || country.length == 0 ||
            name.length==0 || lastname.length==0 ) {

                setTimeout(() => {
                    message.info('Hay campos vacios, por favor ingresar todos los campos.',2)
                }, 500);

        }else if( isNaN(cellphone) ){
                
                setTimeout(() => {
                    message.info('Error en telefono, debe ingresar valores numericos y hasta 15 digitos',2)
                }, 500);
                
        }else if ( (isNaN(idlegal)) ){

            setTimeout(() => {
                message.info('Error en el dni, debe ingresar valores numericos y 10 digitos',2)
            }, 500);

        }else if(validateEmail(email)==false) {

            setTimeout(() => {
                message.info('mail incorrecto.',2)
            }, 500);

        }else if(rta=='registrado'){

            setTimeout(() => {
                message.info('Usuario ya registrado.',2)
            }, 500);
        
            
        }else if(password !== confirmpass){

            setTimeout(() => {
                message.info('Contraseña y confirmacion de contraseña distintas, deben ser iguales.',2)
            }, 500);

        }else{
            
            console.log('vino por aca perro');

            postDataUser(sendData);
        }
           //window.location.href = './login'
    }

    return (
        <div>
            <div className="navBar1">
                <a href="/" class="btn" role="button" aria-pressed="true">Volver</a>
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
                                    type="user"
                                    placeholder="Usuario"
                                    onChange={({ target }) => setUser(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="text"
                                    placeholder="Nombre"
                                    onChange={({ target }) => setName(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="text"
                                    placeholder="Apellido"
                                    onChange={({ target }) => setLastName(target.value)}
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
                                <Input
                                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="password"
                                    placeholder="Confirmar contraseña"
                                    onChange={({ target }) => setConfirmpass(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="text"
                                    placeholder="Email"
                                    onChange={({ target }) => setEmail(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="home" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="address"
                                    placeholder="Direccion"
                                    onChange={({ target }) => setAddress(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="global" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="text"
                                    placeholder="Pais"
                                    onChange={({ target }) => setCountry(target.value)}
                                />
                            </FormItem>                        
                            <FormItem>
                                <Input
                                    prefix={<Icon type="shake" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="text"
                                    placeholder="Celular"
                                    onChange={({ target }) => setCellPhone(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
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

export default Register