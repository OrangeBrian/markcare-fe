/*
    Importo toda la libreria React para utilizar todas sus funciones, etc
*/
import React from 'react';
/* 
    Importamos con el nombre 'loginImg' la imagen que se encuentra 
    en la carpeta actual (./) del LOGO de Markcare.
*/
// import logoargendev from '../images/logoArgendev.png';
// import logfacebook from "../images/fb.png";
// import logtwitter from "../images/tw.png";
// import loginstagram from "../images/ig.png";
// import logyoutube from "../images/yt.png";
import carrefour from "../images/carrefourLogo.png";
import walmart from "../images/wallmartLogo.png";
import disco from "../images/discoLogo.png";
import jumbo from "../images/jumboLogo.png";
import coto from "../images/cotoLogo.png";
import dia from "../images/diaLogo.png";
/*
    Kit de interfaz de usuario que contiene mas de 2000 
    componentes de interfaz para aplicaciones web y 
    de escritorioes una libreria del estilo boostrap 
*/
import HeaderComp from './HeaderComp';



const Myshifts = () => {
    return (
        <div>
           <HeaderComp />
            <hr />
            <div className="BranchContainer">
                <div className="txtlocation">
                    <h3>Mis Turnos</h3>
                </div>

                <div className="row" style={{ marginLeft: "1%" }}>
                    <div className="col">
                        <img src={dia} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                        <h4>Aca va el Nombre de tienda de la sucursal</h4>
                        <p>aca va la direccion de la tienda</p>
                        <p>aca va la fecha y hora del turno</p>
                    </div>
                    <div className="col">
                        <img src={carrefour} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                        <h4>Aca va el Nombre de tienda de la sucursal</h4>
                        <p>aca va la direccion de la tienda</p>
                        <p>aca va la fecha y hora del turno</p>
                    </div>
                    <div className="col">
                        <img src={coto} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                        <h4>Aca va el Nombre de tienda de la sucursal</h4>
                        <p>aca va la direccion de la tienda</p>
                        <p>aca va la fecha y hora del turno</p>
                    </div>
                </div>

                <div className="row" style={{ marginLeft: "1%" }}>
                    <div className="col">
                        <img src={walmart} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                        <h4>Aca va el Nombre de tienda de la sucursal</h4>
                        <p>aca va la direccion de la tienda</p>
                        <p>aca va la fecha y hora del turno</p>
                    </div>
                    <div className="col">
                        <img src={jumbo} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                        <h4>Aca va el Nombre de tienda de la sucursal</h4>
                        <p>aca va la direccion de la tienda</p>
                        <p>aca va la fecha y hora del turno</p>
                    </div>
                    <div className="col">
                        <img src={disco} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                        <h4>Aca va el Nombre de tienda de la sucursal</h4>
                        <p>aca va la direccion de la tienda</p>
                        <p>aca va la fecha y hora del turno</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Myshifts;