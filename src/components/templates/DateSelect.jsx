import React from 'react';
import FooterComp from './FooterComp';
import HeaderComp from './HeaderComp';

const DateSelect = () => {

    const dataBranchId = localStorage.getItem('dataBranchId');
    const dataApiUser = JSON.parse(window.localStorage.getItem('dataUserByEmail'));

    function today(){

        var today = new Date();
        var dd = today.getUTCDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        
        if (dd < 10) {
          dd = '0' + dd;
        }
        
        if (mm < 10) {
          mm = '0' + mm;
        }
        
        today = yyyy + '-' + mm + '-' + dd;
    
    }    

    function handleDateSelect(e){
        
        e.preventDefault();

        let dateSelect = document.getElementById('dateSelect').value;
        let hourSelect = document.getElementById('hourSelect').value;
        
        const dateAppointment = dateSelect +' '+ hourSelect + ':00';

        localStorage.setItem('datetimeAppointment',dateAppointment);
        localStorage.setItem('dateAppointment',dateSelect);
        localStorage.setItem('hourAppointment',hourSelect + ':00');

        const sendShift= {
            "branchOffice": {
                "id": parseInt(dataBranchId)
            },
            "customer": {
                "id": parseInt(dataApiUser.id)
            },
            "dateAppointment": dateAppointment
        }

        localStorage.setItem('sendShift',JSON.stringify(sendShift));
        
        window.location.href='/dateconfirm'

    }

    return (
        <div>
            <HeaderComp a="/branchconfirm"/>
            <hr />
            <div className="dataSelectContainer">

                <div className="txtlocation">
                    <h3>Selecciona un turno</h3>
                </div>

                <form onSubmit={handleDateSelect}>

                    <p>Seleccionar fecha: <br /> <br />
                        <input 
                            type="date" 
                            id="dateSelect" 
                            min={today()} 
                            max="2021-12-31" 
                            step="1"
                        />
                    </p>

                    <p>Seleccionar hora: <br /> </p>

                        <input 
                            type="time" 
                            id="hourSelect"                             
                            min="08:00" 
                            max="20:00" 
                            step="3600" 
                        />

                    <br /> <br />
                    <input id="boton" type="submit" value="Seleccionar" />

                </form>
            </div>
                <footer>
                <FooterComp/> 
                </footer>
            
        </div>
    )
}
export default DateSelect;