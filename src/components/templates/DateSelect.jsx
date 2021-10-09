import React from 'react';
import FooterComp from './FooterComp';
import HeaderComp from './HeaderComp';

const DateSelect = () => {

    function handleDateSelect(e){
        
        e.preventDefault();

        let dateSelect = document.getElementById('dateSelect').value;
        let hourSelect = document.getElementById('hourSelect').value;
        
        const dateAppointment = dateSelect +' '+ hourSelect + ':00';

        localStorage.setItem('dateAppointment',dateAppointment)

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
                            min="2021-09-01" 
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