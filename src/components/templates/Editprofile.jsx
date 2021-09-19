import React, { useState } from 'react';
import loginImg from '../images/logo.png'
import { Form, Icon, Input, Button, message } from "antd";
const FormItem = Form.Item;


const Editprofile = () => {

    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirmpass] = useState('');
    const [email, setEmail] = useState('');
    const [cellphone, setCellPhone] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');


    //Obtenemos los datos de local storage, luego cambiara a la api.
    const getUserName = window.localStorage.getItem("user").replace(/"/g, "");
    const getName = window.localStorage.getItem("name").replace(/"/g, "");
    const getLastName = window.localStorage.getItem("lastname").replace(/"/g, "");
    const getPassword = window.localStorage.getItem("password").replace(/"/g, "");
    const getConfirmpass = window.localStorage.getItem("confirmPass").replace(/"/g, "");
    const getEmail = window.localStorage.getItem("email").replace(/"/g, "");
    const getCellPhone = window.localStorage.getItem("cellphone").replace(/"/g, "");
    const getIdLegal = window.localStorage.getItem("idlegal").replace(/"/g, "");
    const getAddress = window.localStorage.getItem("address").replace(/"/g, "");
    const getCountry = window.localStorage.getItem("country").replace(/"/g, "");

    //Expresiones regulares para darle validacion a los input.
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^[a-zA-Z0-9\_\-]{4}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        dni: /^\d{5,7}$/ // 5 a 7 numeros.
    };

    // Accion luego de que toca el boton Editar.
    function handleRegister(e) {

        e.preventDefault();

        if (!setPassword || !setConfirmpass || !setEmail || !setCellPhone || !setAddress || !setCountry || !setName || !setLastName) {
            setTimeout((e) => {
                message.info('Borro datos que debe modificar, todos los campos no grisados deben estar completos', 2)
            }, 500);
        } else if (setPassword !== setConfirmpass) {
            setTimeout((e) => {
                message.error('La contraseña y su confirmacion son distintas, por favor ingrese la misma.', 2)
            }, 500);
        } else {
            setTimeout((e) => {
                message.success('Cambios Realizados', 1)
            }, 0);
            /*
                Aca deberia enviar todos los datos a la BD ya que..
                Los registros no estan vacios, cumples con sus largos, y tipo de entrada, y a su vez el Usuario no esta en la BD.
            */
            window.localStorage.setItem("name", JSON.stringify(setName));
            window.localStorage.setItem("lastname", JSON.stringify(setLastName));
            window.localStorage.setItem("email", JSON.stringify(setEmail));
            window.localStorage.setItem("cellphone", JSON.stringify(setCellPhone));
            window.localStorage.setItem("password", JSON.stringify(setPassword));
            window.localStorage.setItem("confirmPass", JSON.stringify(setConfirmpass));
            window.localStorage.setItem("address", JSON.stringify(setAddress));
            window.localStorage.setItem("country", JSON.stringify(setCountry));
            window.location.href = '/shop'
        }

    }

    return (
        <div>
            <div className="navBar1">
                <a href="/shop" class="btn btn-primary btn-sm" role="button" aria-pressed="true">Volver</a>
            </div>
            <hr />
            <div className={"lContainer"}>
                <div className="lItem">
                    <div className="registerImage">
                        <img src={loginImg} width="300" alt="register" />
                    </div>
                    <div className="registerForm">
                        <h2>Editar Perfil</h2>
                        <Form onSubmit={handleRegister} id="formulario" className="register-form">
                            <FormItem>
                                <Input
                                    prefix={<Icon type="idcard" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="text"
                                    value={getUserName}
                                    disabled
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="text"
                                    defaultValue={getName}
                                    //pattern={expresiones.password}
                                    //maxLength="20"
                                    onChange={({ target }) => setName(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="text"
                                    defaultValue={getLastName}
                                    //pattern={expresiones.password}
                                    //maxLength="20"
                                    onChange={({ target }) => setLastName(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="password"
                                    defaultValue={getPassword}
                                    //pattern={expresiones.password}
                                    //minLength="4"
                                    onChange={({ target }) => setPassword(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="password"
                                    defaultValue={getConfirmpass}
                                    //minLength="4"
                                    //pattern={expresiones.password}
                                    onChange={({ target }) => setConfirmpass(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="Email"
                                    defaultValue={getEmail}
                                    onChange={({ target }) => setEmail(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="home" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="address"
                                    defaultValue={getAddress}
                                    //pattern={expresiones.usuario}
                                    onChange={({ target }) => setAddress(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="global" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    defaultValue={getCountry}
                                    //pattern={expresiones.usuario}
                                    onChange={({ target }) => setCountry(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="shake" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    defaultValue={getCellPhone}
                                    type="number"
                                    minLength="10"
                                    //onKeyPress={expresiones.dni}
                                    onChange={({ target }) => setCellPhone(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="number"
                                    defaultValue={getIdLegal}
                                    disabled
                                />
                            </FormItem>
                            <FormItem>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="register-form-button"
                                >
                                    Confirmar Cambios
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

export default Editprofile
