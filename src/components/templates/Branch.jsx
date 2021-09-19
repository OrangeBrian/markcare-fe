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
import iconoSucursal from "../images/iconoSucursal.png";
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

const Branch = () => {
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
            <div className="BranchContainer">
                <div className="txtlocation">
                    <h3>Selecciona sucursal</h3>
                </div>
                     <div className="branch">
                            <img src={iconoSucursal}  className="imgBranch" alt="Register Address" style={{ position: "relative"}}  />
                            <div className="text">
                            <h4>Nombre de tienda</h4>
                            <p>Campo de texto 1 direccion de tienda mas cercana</p>
                            </div>
                            <a href="/registeraddress" className="btnselect" class="btn" role="button" aria-pressed="true">Seleccionar</a>
                    </div> 
                    <div className="branch">
                            <img src={iconoSucursal}  className="imgBranch" alt="Register Address" style={{ position: "relative"}}  />
                            <div className="text">
                            <h4>Nombre de tienda</h4>
                            <p>Campo de texto 2 direccion de tienda mas cercana</p>
                            </div>
                            <a href="/registeraddress" className="btnselect" class="btn" role="button" aria-pressed="true">Seleccionar</a>
                    </div>

                    <div className="branch">
                            <img src={iconoSucursal}  className="imgBranch" alt="Register Address" style={{ position: "relative"}}  />
                            <div className="text">
                            <h4>Nombre de tienda</h4>
                            <p>Campo de texto 3 direccion de tienda mas cercana</p>
                            </div>
                            <a href="/registeraddress" className="btnselect" class="btn" role="button" aria-pressed="true">Seleccionar</a>
                    </div>  
                    
            </div>
            <div className="footer">
                        <footer>
                    <div class="contenedor">
                     <div class="parrafo">
                    <p>© 2021 ArgenDev. <br/>Todos los derechos reservados.</p>
                     </div> 
                     <div className="logoArgenDevFooter"> 
                     <img src={logoargendev} alt="logoArgenDev" />
                     </div>
                     <div class="redes">
                    <a href="https://www.facebook.com"><img src={logfacebook} alt="facebook" /></a>
                    <a href="https://www.linkedin.com"><img src={logtwitter} alt="twitter"/></a>
                    <a href="https://www.instagram.com"><img src={loginstagram} alt="instagram"/></a>
                    <a href="https://twitter.com"><img src={logyoutube} alt=""/></a>
                    </div>
                    </div>
                    </footer>
                    </div> 
            </div>
    )
}
export default Branch