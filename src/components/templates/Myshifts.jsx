/*
    Importo toda la libreria React para utilizar todas sus funciones, etc
*/
import React from 'react';
/* 
    Importamos con el nombre 'loginImg' la imagen que se encuentra 
    en la carpeta actual (./) del LOGO de Markcare.
*/
import logoargendev from '../images/logoArgendev.png';
import logfacebook from "../images/fb.png";
import logtwitter from "../images/tw.png";
import loginstagram from "../images/ig.png";
import logyoutube from "../images/yt.png";
import carrefour from "../images/carrefourLogo.png";
import walmart from "../images/wallmartLogo.png";
import disco from "../images/discoLogo.png";
import jumbo from "../images/jumboLogo.png";
import coto from "../images/cotoLogo.png";
import dia from "../images/diaLogo.png";
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

const Myshifts = () => {
    return (
        <div>
            <div className="navBar2">
                <div className="row">
                    <div className="col2">
                        <a href="/shop" role="button" className="back" aria-pressed="true"><LeftOutlined /></a>
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
            <div className="BranchContainer">
                <div className="txtlocation">
                    <h3>Mis Turnos</h3>
                </div>

                <div className="row" style={{ marginLeft: "1%" }}>
                    <div className="col">
                        <img src={dia} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                        <h4>Aca va el Nombre de tienda de la sucursal</h4>
                        <p>aca va la direccion de la tienda</p>
                        <p>aca va la fecha y hora del turno</p>
                    </div>
                    <div className="col">
                        <img src={carrefour} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                        <h4>Aca va el Nombre de tienda de la sucursal</h4>
                        <p>aca va la direccion de la tienda</p>
                        <p>aca va la fecha y hora del turno</p>
                    </div>
                    <div className="col">
                        <img src={coto} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                        <h4>Aca va el Nombre de tienda de la sucursal</h4>
                        <p>aca va la direccion de la tienda</p>
                        <p>aca va la fecha y hora del turno</p>
                    </div>
                </div>

                <div className="row" style={{ marginLeft: "1%" }}>
                    <div className="col">
                        <img src={walmart} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                        <h4>Aca va el Nombre de tienda de la sucursal</h4>
                        <p>aca va la direccion de la tienda</p>
                        <p>aca va la fecha y hora del turno</p>
                    </div>
                    <div className="col">
                        <img src={jumbo} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                        <h4>Aca va el Nombre de tienda de la sucursal</h4>
                        <p>aca va la direccion de la tienda</p>
                        <p>aca va la fecha y hora del turno</p>
                    </div>
                    <div className="col">
                        <img src={disco} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                        <h4>Aca va el Nombre de tienda de la sucursal</h4>
                        <p>aca va la direccion de la tienda</p>
                        <p>aca va la fecha y hora del turno</p>
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
export default Myshifts