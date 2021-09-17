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
import dia from "./images/diaLogo.png"
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

const Shop = () => {
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
            <div className="shopContainer">
                <div className="coltext">
                    <div className="txtlocation">
                        <h3>Selecciona la tienda que desees</h3>
                    </div>
                </div>
                <div className="shopcol">
                    <div className="col">
                        <img src={carrefour} className="imgStore" alt="Register Address" style={{ position: "relative" }} />
                        <img src={walmart} className="imgStore" alt="Current Location" style={{ position: "relative" }} />
                        <img src={disco} className="imgStore" alt="Current Location" style={{ position: "relative" }} />
                    </div>
                    <div className="col">

                        <a href="currentlocation" class="btn" role="button" aria-pressed="true">Seleccionar</a>
                        <a href="currentlocation" class="btn" role="button" aria-pressed="true">Seleccionar</a>
                        <a href="currentlocation" class="btn" role="button" aria-pressed="true">Seleccionar</a>

                    </div>
                    <div className="col">
                        <img src={jumbo} className="imgStore" alt="Register Address" style={{ position: "relative" }} />
                        <img src={coto} className="imgStore" alt="Current Location" style={{ position: "relative" }} />
                        <img src={dia} className="imgStore" alt="Current Location" style={{ position: "relative" }} />
                    </div>
                    <div className="col">

                        <a href="currentlocation" class="btn" role="button" aria-pressed="true">Seleccionar</a>
                        <a href="currentlocation" class="btn" role="button" aria-pressed="true">Seleccionar</a>
                        <a href="currentlocation" class="btn" role="button" aria-pressed="true">Seleccionar</a>

                    </div>
                </div>
            </div>
            S

        </div>
    )
}
export default Shop