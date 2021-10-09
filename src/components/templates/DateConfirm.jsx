import React from 'react';
import logo from "../images/logo.png";
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
                <a href="/shop" class="btn" role="button" aria-pressed="true">Salir</a>
                </div>
            </div>
                <footer>
                <FooterComp/>
                </footer>
        </div>
    )
}
export default DateConfirm;