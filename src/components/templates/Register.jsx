import React, { useState } from 'react';
import loginImg from '../images/logo.png'
import { Form, Icon, Input, Button, message } from "antd";
const FormItem = Form.Item;

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

    //Expresiones regulares para darle validacion a los input.
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^[a-zA-Z0-9\_\-]{4}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        dni: /^\d{5,7}$/ // 5 a 7 numeros.
    };

    // Accion luego de que toca el boton Registrar.
    function handleRegister(e) {

        e.preventDefault();

        //esto lo puse para pruebas
        //let usuarioLocalStorage = window.localStorage.getItem("user").replace(/"/g, "");
        let usuarioLocalStorage = "ari";


        if (!user || !email || !password || !confirmpass || !cellphone || !idlegal || !address || !country) {
            setTimeout((e) => {
                message.info('Falta ingresar datos, no es posible registrar al usuario.', 2)
            }, 500);
        } else if (user === usuarioLocalStorage) {
            setTimeout((e) => {
                message.info('Usuario ya registrado', 2)
            }, 500);
        } else if (password !== confirmpass) {
            setTimeout((e) => {
                message.error('No coinciden la contraseña y la confirmacion de la misma, no es posible registrar al usuario.', 3)
            }, 500);
        } else {
            setTimeout((e) => {
                message.success('Usuario registrado', 1)
            }, 0);
            /*
                Aca deberia enviar todos los datos a la BD ya que..
                Los registros no estan vacios, cumples con sus largos, y tipo de entrada, y a su vez el Usuario no esta en la BD.
            */
            window.localStorage.setItem("user", JSON.stringify(user));
            window.localStorage.setItem("name", JSON.stringify(name));
            window.localStorage.setItem("lastname", JSON.stringify(lastname));
            window.localStorage.setItem("email", JSON.stringify(email));
            window.localStorage.setItem("cellphone", JSON.stringify(cellphone));
            window.localStorage.setItem("idlegal", JSON.stringify(idlegal));
            window.localStorage.setItem("password", JSON.stringify(password));
            window.localStorage.setItem("confirmPass", JSON.stringify(confirmpass));
            window.localStorage.setItem("address", JSON.stringify(address));
            window.localStorage.setItem("country", JSON.stringify(country));
            window.location.href = './login'
        }
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
                                    //minLength="1"
                                    //pattern={expresiones.usuario}
                                    onChange={({ target }) => setUser(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="text"
                                    placeholder="Nombre"
                                    //pattern={expresiones.password}
                                    //maxLength="20"
                                    onChange={({ target }) => setName(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="text"
                                    placeholder="Apellido"
                                    //pattern={expresiones.password}
                                    //maxLength="20"
                                    onChange={({ target }) => setLastName(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="password"
                                    placeholder="Contraseña"
                                    //pattern={expresiones.password}
                                    //minLength="4"
                                    onChange={({ target }) => setPassword(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="password"
                                    placeholder="Confirmar contraseña"
                                    //minLength="4"
                                    //pattern={expresiones.password}
                                    onChange={({ target }) => setConfirmpass(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="Email"
                                    placeholder="Email"
                                    onChange={({ target }) => setEmail(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="home" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="address"
                                    placeholder="Direccion"
                                    //pattern={expresiones.usuario}
                                    onChange={({ target }) => setAddress(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="global" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="text"
                                    placeholder="Pais"
                                    //pattern={expresiones.usuario}
                                    onChange={({ target }) => setCountry(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="shake" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="text"
                                    placeholder="Celular"
                                    //minLength="10"
                                    //pattern={expresiones.dni}
                                    //onKeyPress={expresiones.dni}
                                    onChange={({ target }) => setCellPhone(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    placeholder="DNI"
                                    type="number"
                                    //pattern={expresiones.dni}
                                    onKeyPress={expresiones.dni}
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