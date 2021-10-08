/*
    Importo toda la libreria React para utilizar todas sus funciones, etc
*/
import React from 'react';
/* 
    Importamos con el nombre 'loginImg' la imagen que se encuentra 
    en la carpeta actual (./) del LOGO de Markcare.
*/
import locationStoreImg from '../images/locationStore.png';
import userLocationImg from '../images/userLocation.png';
/*
    Kit de interfaz de usuario que contiene mas de 2000 
    componentes de interfaz para aplicaciones web y 
    de escritorioes una libreria del estilo boostrap 
*/
import FooterComp from './FooterComp';
import HeaderComp from './HeaderComp';


const Location = () => {
    return (
        <div>
           <HeaderComp />
            <hr />
            <div className="locationContainer">
                <div className="locationCol">
                    <div className="txtLocation">
                        <h3>Selecciona tu ubicación</h3>
                    </div>
                    <div className="registeraddress">
                        <img src={locationStoreImg} alt="Register Address" />
                        <a href="/shop" class="btn" role="button" aria-pressed="true">Direccion registrada</a>
                    </div>
                    <div className="currentlocation">
                        <img src={userLocationImg} alt="Current Location" />
                        <a href="/shop" class="btn" role="button" aria-pressed="true" style={{ width: "60%" }}>Ubicación actual</a>
                    </div>
                </div>
            </div>
                <footer>
                    <FooterComp/>
                </footer>
        </div>
    )
}
export default Location;