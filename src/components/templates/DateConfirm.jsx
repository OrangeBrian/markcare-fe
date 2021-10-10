import React from 'react';
import logo from "../images/logo.png";
import FooterComp from './FooterComp';
import HeaderComp from './HeaderComp';

const DateConfirm = () => {

    const dateAppointment = localStorage.getItem('dateAppointment');
    const hourAppointment = localStorage.getItem('hourAppointment');

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
                    <h6 id="dat">{dateAppointment}</h6>
                    <h6 id="hour">{hourAppointment}</h6>
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
export default DateConfirm;