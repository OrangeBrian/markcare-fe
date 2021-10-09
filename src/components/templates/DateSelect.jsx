import React from 'react';
import FooterComp from './FooterComp';
import HeaderComp from './HeaderComp';

const DateSelect = () => {
    return (
        <div>
            <HeaderComp a="/branchconfirm"/>
            <hr />
            <div className="dataSelectContainer">

                <div className="txtlocation">
                    <h3>Selecciona un turno</h3>
                </div>

                <form action="/send.php">

                    <p>Seleccionar fecha: <br /> <br />
                        <input type="date" id="fecha1" name="fecha1" min="2021-09-01" max="2021-12-31" step="1" />
                    </p>

                    <p>Seleccionar hora: <br /> </p>

                    <input type="number" min="8" max="20" step="1" />
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