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
import logfacebook from "../images/fb.png";
import logtwitter from "../images/tw.png";
import loginstagram from "../images/ig.png";
import logyoutube from "../images/yt.png";

/*
    Kit de interfaz de usuario que contiene mas de 2000 
    componentes de interfaz para aplicaciones web y 
    de escritorioes una libreria del estilo boostrap 
*/
import { Menu, Dropdown } from 'antd';
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';


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
                        <a href="/registeraddress" class="btn" role="button" aria-pressed="true">Direccion registrada</a>
                    </div>
                    <div className="currentlocation">
                        <img src={userLocationImg} alt="Current Location" />
                        <a href="currentlocation" class="btn" role="button" aria-pressed="true" style={{ width: "60%" }}>Ubicación actual</a>
                    </div>
                </div>
            </div>
            <div className="footer">
                <footer>
                    <div class="contenedor">
                        <div class="parrafo">
                            <p>© 2021 ArgenDev. <br />Todos los derechos reservados.</p>
                        </div>
                        <div className="logoArgenDevFooter">
                            <img src={logoargendev} alt="logoArgenDev" />
                        </div>
                        <div class="redes">
                            <a href="https://www.facebook.com/charly.faluotico"><img src={logfacebook} alt="facebook" /></a>
                            <a href="https://www.linkedin.com/in/carlos-faluotico-55339a4b/"><img src={logtwitter} alt="twitter" /></a>
                            <a href="https://github.com/cfaluotico"><img src={loginstagram} alt="instagram" /></a>
                            <a href="https://twitter.com/CharlyFaluotico"><img src={logyoutube} alt="" /></a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
export default Location