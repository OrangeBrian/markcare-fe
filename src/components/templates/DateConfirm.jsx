import React from 'react';
import logo from "../images/logo.png";
import FooterComp from './FooterComp';
import HeaderComp from './HeaderComp';
import accessApi from '../apimethod/accessApi';
import { message } from 'antd';

const DateConfirm = () => {
    
    const dateAppointment = localStorage.getItem('dateAppointment');
    const hourAppointment = localStorage.getItem('hourAppointment');

    function deleteItem(){
        
        localStorage.removeItem('shopSelected');
        localStorage.removeItem('dataBranchOffice');
        localStorage.removeItem('dataBranchId');
        localStorage.removeItem('latitude');
        localStorage.removeItem('longitude');
        localStorage.removeItem('dateAppointment');
        localStorage.removeItem('datetimeAppointment');
        localStorage.removeItem('hourAppointment');
        localStorage.removeItem('sendShift');
        localStorage.removeItem('dataMyShifts');
        
    }

    function handlePostShift(e){
        
        const sendShift = JSON.parse(localStorage.getItem('sendShift'));      

        accessApi.postAppointment(sendShift)
        .then(res => {
            if (localStorage.getItem('status')==200) {
                message.success('Turno Confirmado',2);
                setTimeout((e) => {
                    window.location.href = '/shop'
                }, 500);
            }
        })

        deleteItem();
    }

    function handleNewShift(e){
        deleteItem();
        window.location.href = '/shop';
    }

    return (
        <div>
           <HeaderComp a='/dateselect'/>
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
                <a onClick={handlePostShift} className="btn" role="button" aria-pressed="true">Confirmar Turno</a>                    
                <a onClick={handleNewShift} className="btn" role="button" aria-pressed="true">Nuevo turno</a>
                <a href="/" className="btn" role="button" aria-pressed="true">Salir</a>
                </div>
            </div>
                <footer>
                <FooterComp/>
                </footer>
        </div>
    )
}
export default DateConfirm;