/*
    Importo toda la libreria React para utilizar todas sus funciones, etc
*/
import React from 'react';


/* 
    Importamos con el nombre 'loginImg' la imagen que se encuentra 
    en la carpeta actual (./) del LOGO de Markcare.
*/
import logo from "../images/logo.png";
/*
    Kit de interfaz de usuario que contiene mas de 2000 
    componentes de interfaz para aplicaciones web y 
    de escritorioes una libreria del estilo boostrap 
*/
import { Menu, Dropdown } from 'antd';
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';
import FooterComp from './FooterComp';

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="/myshifts">Mis turnos</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="/editprofile">Editar perfil</a>
        </Menu.Item>
        <Menu.Item key="2">
            <a href="/">Cerrar sesion</a>
        </Menu.Item>
    </Menu>
);

const DateConfirm = () => {
    return (
        <div>
            <div className="navBar2">
                <div className="row">
                    <div className="col2">
                        <a href="/" role="button" className="back" aria-pressed="true"><LeftOutlined /></a>
                    </div>
                    <div className="col2">
                        <div className="nav justify-content-end">
                            <Dropdown overlay={menu} trigger={['click']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <MenuOutlined />
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="dateConfirmContainer">
                <img src={logo} className="logo"  alt="login" />
                <div className="txtlocation">
                    <h3>Gracias por elegirnos</h3>
                </div>  
                <div className="txtDateConfirm">
                    <h6>Turno reservado para:</h6>
                    <h6 id="dia">campo para dia:</h6>
                    <h6 id="hora">campo para hora:</h6>
                </div>
                <div className="buttonDateConfirm">
                <a href="/shop" class="btn" role="button" aria-pressed="true">Nuevo turno</a>
                <a href="/" class="btn" role="button" aria-pressed="true">Salir</a>
                </div>
            </div>
                <footer>
                <FooterComp/>
                </footer>
        </div>
    )
}
export default DateConfirm