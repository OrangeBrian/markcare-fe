import React, { useState } from 'react';
import loginImg from '../images/logo.png'
import { Form, Icon, Input, Button, message } from "antd";
import accessApi from '../apimethod/accessApi';
const FormItem = Form.Item;


const Editprofile = () => {

    const dataUserByEmail = JSON.parse(localStorage.getItem('dataUserByEmail'));
    
    function handleRegister(e) {

        e.preventDefault();
        
        let dataUserChange={
            "username": dataUserByEmail.username,
            "name": document.getElementById("name").value,
            "lastName": document.getElementById("lastName").value,
            "address": document.getElementById("address").value,
            "email": dataUserByEmail.email,
            "password": document.getElementById("password").value,
            "cellphone": document.getElementById("cellphone").value,
            "idLegal": dataUserByEmail.idLegal,
            "country": document.getElementById("country").value
        }

        let confirmPass = document.getElementById("confirmPassword").value;

        console.log(dataUserChange);

        if (    
                dataUserByEmail.name === dataUserChange.name &
                dataUserByEmail.lastName === dataUserChange.lastName &
                dataUserByEmail.address === dataUserChange.address &
                dataUserByEmail.password === dataUserChange.password &
                dataUserByEmail.cellphone === dataUserChange.cellphone &
                dataUserByEmail.country === dataUserChange.country
            ){

            setTimeout((e) => {
                message.info('No se realizo ninguna modificacion.', 2)
            }, 500);

        }else if(
                    dataUserChange.name.length ===0 || 
                    dataUserChange.lastName.length ===0 || 
                    dataUserChange.cellphone.length ===0 || 
                    dataUserChange.address.length ===0 || 
                    dataUserChange.country.length ===0 || 
                    dataUserChange.address.length ===0 ||
                    dataUserChange.password.length ===0 || 
                    dataUserChange.idLegal.length ===0 || 
                    dataUserChange.email.length ===0
                ) {
            
            setTimeout((e) => {
                message.info('Debe tener todos los campos completos', 2)
            }, 500);

        } else if ( dataUserChange.password !== confirmPass ) {

            setTimeout((e) => {
                message.error('La contraseña y su confirmacion son distintas, por favor ingrese la misma.', 2)
            }, 500);
        } else {
            
            console.log(dataUserChange);
            
            try {

                accessApi.postUserApp(dataUserChange);

                setTimeout((e) => {
                    message.success('Cambios Realizados', 1)
                }, 100);
                
                setTimeout((e) => {
                    //window.location.href = '/shop';                    
                }, 1000);


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
                                    id="username"
                                    value={dataUserByEmail.username}
                                    disabled
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="text"
                                    id="name"
                                    defaultValue={dataUserByEmail.name}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="text"
                                    id="lastName"
                                    defaultValue={dataUserByEmail.lastName}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="password"
                                    id="password"
                                    defaultValue={dataUserByEmail.password}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    type="password"
                                    id="confirmPassword"
                                    defaultValue={dataUserByEmail.password}
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
                                    id="address"
                                    defaultValue={dataUserByEmail.address}
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="global" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    defaultValue={dataUserByEmail.country}
                                    id="country"
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    prefix={<Icon type="shake" style={{ color: "rgba(0,0,0,.25)" }} />}
                                    defaultValue={dataUserByEmail.cellphone}
                                    type="number"
                                    id="cellphone"
                                    minLength="10"
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
