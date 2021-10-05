/*
    Importo toda la libreria React para utilizar todas sus funciones, etc
*/
import React from 'react';
/* 
    Importamos con el nombre 'loginImg' la imagen que se encuentra 
    en la carpeta actual (./) del LOGO de Markcare.
*/
import logoargendev from '../images/logoArgendev.png';
import locationStoreImg from '../images/locationStore.png';
import userLocationImg from '../images/userLocation.png';
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

const Location = () => {
    return (
        <div>
            <div className="navBar2">
                <div className="row">
                    <div className="col2">
                        <a href="/location" role="button" className="back" aria-pressed="true"><LeftOutlined /></a>
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
            <div className="locationContainer">
                <div className="locationCol">
                    <div className="txtLocation">
                        <h3>Selecciona tu ubicación</h3>
                    </div>
                    <div className="registeraddress">
                        <img src={locationStoreImg} alt="Register Address" />
                        <a href="/shop" class="btn" role="button" aria-pressed="true">Direccion registrada</a>
                    </div>
                    <div className="currentlocation">
                        <img src={userLocationImg} alt="Current Location" />
                        <a href="/shop" class="btn" role="button" aria-pressed="true" style={{ width: "60%" }}>Ubicación actual</a>
                    </div>
                </div>
            </div>
                <footer>
                    <FooterComp/>
                </footer>
        </div>
    )
}
export default Location;