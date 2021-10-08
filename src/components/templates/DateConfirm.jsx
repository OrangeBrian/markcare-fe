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
import FooterComp from './FooterComp';
import HeaderComp from './HeaderComp';



const DateConfirm = () => {
    return (
        <div>
           <HeaderComp />
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
                <a href="/location" class="btn" role="button" aria-pressed="true">Salir</a>
                </div>
            </div>
                <footer>
                <FooterComp/>
                </footer>
        </div>
    )
}
export default DateConfirm;