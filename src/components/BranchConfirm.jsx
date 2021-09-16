/*
    Importo toda la libreria React para utilizar todas sus funciones, etc
*/
import React from 'react';
/* 
    Importamos con el nombre 'loginImg' la imagen que se encuentra 
    en la carpeta actual (./) del LOGO de Markcare.
*/
import logoargendev from './images/logoArgendev.png';
import locationStoreImg from './images/locationStore.png';
import userLocationImg from './images/userLocation.png';
import logfacebook from "./images/fb.png"
import logtwitter from "./images/tw.png"
import loginstagram from "./images/ig.png"
import logyoutube from "./images/yt.png"
import mapa from "./images/mapa.jpg"

/*
    Kit de interfaz de usuario que contiene mas de 2000 
    componentes de interfaz para aplicaciones web y 
    de escritorioes una libreria del estilo boostrap 
*/
import { Menu, Dropdown } from 'antd';
import { MenuOutlined,LeftOutlined} from '@ant-design/icons';


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

const BranchConfirm = () =>{
    return(
    <div>
        <div className="RegisterNavBar">
            <div className="row">
                <div className="col">
                        <a href="/" role="button" className="back" aria-pressed="true"><LeftOutlined /></a>
                </div>
                <div className="col">
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
        <div className="branchConfirmContainer">
                <div className="txtLocation"> 
                    <h3>Confirma la sucursal seleccionada</h3>
                </div>
                <div className="map">
                    <img src={mapa}  alt="map"/>
                    <a href="/map" class="btn btn-primary btn-sm" role="button" aria-pressed="true">Confirmar</a>
                </div>
        </div>
        <div className="footerShop">
            <div className="terms">
                <a href="http://argendev.com.ar">Nosotros</a>
                <a href="">Privacidad</a>
                <a href="">Términos y Condiciones</a>
                <a href="">ARGENDEV <span>©</span> 2020-2021</a>
            </div>
            <div className="companylogo">
                    <img className="logoCompany" src={logoargendev} alt="logoCompany" />
            </div>
            <div className="socialmedia">
                <h6 className="followtext">Seguinos en</h6>
                <div>
                        <img href="https://facebook.com/" src={logfacebook} className="socialnetworks" />
                        <img href="https://instagram.com/" src={loginstagram} className="socialnetworks" />
                        <img href="https://youtube.com/" src={logyoutube} className="socialnetworks" />
                        <img href="https://twitter.com/" src={logtwitter} className="socialnetworks" />
                </div>
            </div>
        </div>
    </div>
    )
}   
export default BranchConfirm