/*
    Importo toda la libreria React para utilizar todas sus funciones, etc
*/
import React from 'react';


/* 
    Importamos con el nombre 'loginImg' la imagen que se encuentra 
    en la carpeta actual (./) del LOGO de Markcare.
*/


/*
    Kit de interfaz de usuario que contiene mas de 2000 
    componentes de interfaz para aplicaciones web y 
    de escritorioes una libreria del estilo boostrap 
*/
import FooterComp from './FooterComp';
import HeaderComp from './HeaderComp';



const DateSelect = () => {
    return (
        <div>
            <HeaderComp />
            <hr />
            <div className="dataSelectContainer">
                <div className="txtlocation">
                    <h3>Selecciona un turno</h3>
                </div>
                <form action="/send.php">
                    <p>Seleccionar fecha: <br /> <br />
                        <input type="date" id="fecha1" name="fecha1" min="2021-09-01" max="2021-12-31" step="1" />
                    </p>
                    <p>Seleccionar hora: <br />
                    </p>
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