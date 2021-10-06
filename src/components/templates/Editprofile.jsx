import React, { useState } from 'react';
import loginImg from '../images/logo.png'
import { Form, Icon, Input, Button, message } from "antd";
import accessApi from '../apimethod/accessApi';
const FormItem = Form.Item;


const Editprofile = () => {

    let [name,setName] = useState('');
    let [lastname,setLastName] = useState('');
    let [password,setPassword] = useState('');
    let [confirmpass,setConfirmpass] = useState('');
    let [cellphone, setCellPhone] = useState('');
    let [address,setAddress] = useState('');
    let [country,setCountry] = useState('');

    const dataUserByEmail = JSON.parse(localStorage.getItem('dataUserByEmail'));
    
    function handleRegister(e) {

        e.preventDefault();
        
        let dataUserChange={
            "username": dataUserByEmail.username,
            "name": name,
            "lastName": lastname,
            "address": address,
            "email": dataUserByEmail.email,
            "password": password,
            "cellphone": cellphone,
            "idLegal": dataUserByEmail.idLegal,
            "country": country
        }

        console.log(dataUserChange);

        if (    
                dataUserByEmail.name===dataUserChange.name &
                dataUserByEmail.lastName===dataUserChange.lastName &
                dataUserByEmail.address===dataUserChange.address &
                dataUserByEmail.password===dataUserChange.password &
                dataUserByEmail.cellphone===dataUserChange.cellphone &
                dataUserByEmail.country===dataUserChange.country
            ){

            setTimeout((e) => {
                message.info('No se realizo ninguna modificacion.', 2)
            }, 500);

        }else if(
                    !setPassword || !setConfirmpass || !setCellPhone || 
                    !setAddress || !setCountry || !setName || !setLastName
                ) {
            
            setTimeout((e) => {
                message.info('Borro datos que debe modificar, todos los campos no grisados deben estar completos', 2)
            }, 500);

        } else if (setPassword !== setConfirmpass) {
            console.log(setPassword);
            console.log(setConfirmpass);
            setTimeout((e) => {
                message.error('La contraseña y su confirmacion son distintas, por favor ingrese la misma.', 2)
            }, 500);
        } else {
            
            console.log(dataUserChange);
            
            try {
                accessApi.postUserApp(dataUserChange);

                setTimeout((e) => {
                    message.success('Cambios Realizados', 1)
                }, 500);

                window.location.href = '/shop';

            } catch (error) {
                setTimeout((e) => {
                    message.success('No se han podido realizar los cambios.', 1)
                }, 500);
            }

        }

    }

    return (
        <div>
            <div className="navBar1">
                <a href="/shop" className="btn btn-primary btn-sm" role="button" aria-pressed="true">Volver</a>
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
                                    value={dataUserByEmail.username}
                                    disabled
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="text"
                                    defaultValue={dataUserByEmail.name}
                                    onChange={({ target }) => setName(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="text"
                                    defaultValue={dataUserByEmail.lastName}
                                    onChange={({ target }) => setLastName(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="password"
                                    defaultValue={dataUserByEmail.password}
                                    onChange={({ target }) => setPassword(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="password"
                                    defaultValue={dataUserByEmail.password}
                                    onChange={({ target }) => setConfirmpass(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="Email"
                                    defaultValue={dataUserByEmail.email}
                                    disabled
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="home" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="address"
                                    defaultValue={dataUserByEmail.address}
                                    onChange={({ target }) => setAddress(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="global" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    defaultValue={dataUserByEmail.country}
                                    onChange={({ target }) => setCountry(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="shake" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    defaultValue={dataUserByEmail.cellphone}
                                    type="number"
                                    minLength="10"
                                    onChange={({ target }) => setCellPhone(target.value)}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="number"
                                    defaultValue={dataUserByEmail.idLegal}
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
            </div>
        </div>
    )
}

export default Editprofile;
