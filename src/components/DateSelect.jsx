/*
    Importo toda la libreria React para utilizar todas sus funciones, etc
*/
import React from 'react';


/* 
    Importamos con el nombre 'loginImg' la imagen que se encuentra 
    en la carpeta actual (./) del LOGO de Markcare.
*/
import logoargendev from './images/logoArgendev.png';
import logfacebook from "./images/fb.png"
import logtwitter from "./images/tw.png"
import loginstagram from "./images/ig.png"
import logyoutube from "./images/yt.png"
import carrefour from "./images/carrefourLogo.png"
import walmart from "./images/wallmartLogo.png"
import disco from "./images/discoLogo.png"
import jumbo from "./images/jumboLogo.png"
import coto from "./images/cotoLogo.png"
import iconoSucursal from "./images/iconoSucursal.png"
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
            <a href="/logout">Cerrar sesion</a>
        </Menu.Item>
    </Menu>
);

const DateSelect = () => {
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
            <div className="dataSelectContainer">
                <div className="txtlocation">
                    <h3>Selecciona un turno</h3>
                </div>
                <form action="/send.php">
                    <p>Seleccionar fecha: <br /> <br />
                        <input type="date" id="fecha1" name="fecha1" min="2021-09-01" max="2021-12-31" step="1" />
                    </p>
                    <p>Seleccionar hora: <br />
                    </p>
                    <input type="number" min="8" max="20" step="1" />
                    <br /> <br />
                    <input id="boton" type="submit" value="Seleccionar" />
                </form>
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
                            <a href="https://www.facebook.com"><img src={logfacebook} alt="facebook" /></a>
                            <a href="https://www.linkedin.com"><img src={logtwitter} alt="twitter" /></a>
                            <a href="https://www.instagram.com"><img src={loginstagram} alt="instagram" /></a>
                            <a href="https://twitter.com"><img src={logyoutube} alt="" /></a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
export default DateSelect