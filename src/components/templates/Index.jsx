import React from 'react';
import loginImg from '../images/logo.png';
import indexImg from '../images/fondo-super.jpg';
import calendario from '../images/calendario.png';
import comercio from '../images/comercio.png';
import ubicacion from '../images/ubicacion.png';
import barbijo from '../images/barbijo.png';
import carrefour from "../images/carrefourLogo.png";
import wallmart from "../images/wallmartLogo.png";
import disco from "../images/discoLogo.png";
import jumbo from "../images/jumboLogo.png";
import coto from "../images/cotoLogo.png";
import dia from "../images/diaLogo.png";
import compras from "../images/compras.png";
import www from "../images/www.png";
import accesoLogo from "../images/accesoLogo.png";
import FooterComp from './FooterComp';
import Carrusel from './Carrusel';

const Inicio = () => {

    localStorage.clear();
    return (
        <div>
            <div className="navIndex">

                <img src={loginImg} alt="register" />

                <div className="buttons">

                    <a href="/login" className="btn" role="button" aria-pressed="true">Login</a>

                    <a href="/register" className="btn" role="button" aria-pressed="true">Register</a>

                </div>
            </div>
            <div className="carrusel">
                 <Carrusel/>
                <div class="centrado">Compra de forma segura con MarkCare <br/> ¡Una App que te cuida!</div>
            </div>
            <div className={"fondoGris1"}>
                <div className="col">
                    <img src={calendario} alt="calendario" />
                    <h6>Selecciona un turno según tu disponibilidad</h6>
                </div>
                <div className="col">
                    <img src={comercio} alt="calendario" />
                    <h6>Elegi la cadena de comercio que prefieras</h6>
                </div>
                <div className="col">
                    <img src={ubicacion} alt="calendario" />
                    <h6>Según tu ubicación elegi la secursal mas cercana</h6>
                </div>
                <div className="col">
                    <img src={barbijo} alt="calendario" />
                    <h6>Compra de forma segura con todos los protocolos</h6>
                </div>
            </div>
            <div className="tituloSeparadorIndex">
                <h1>A solo un click de tu cadena favorita</h1>
            </div>
            <div className="cadenas" alt="cadenas">
                <img src={disco} alt="disco" />
                <img src={jumbo} alt="jumbo" />
                <img src={carrefour} alt="carrefour" />
                <img src={wallmart} alt="wallmart" />
                <img src={coto} alt="coto" />
                <img src={dia} alt="dia" />
            </div>
            <div className="compras" alt="compras">
                <img src={compras} alt="compras" />
            </div>
            <div className="tituloSeparadorIndex2">
                <h2>Para Markcare lo mas importante sos vos, por eso queremos
                    cuidarte y que realices tus compras de forma segura y ordenada
                    en tu comercio mas cercano </h2>
            </div>
            <div className={"fondoGris2"}>
                <img src={accesoLogo} alt="accesoLogo" />
                <h6>Accede desde cualquier dispositivo y desde cualquier lugar</h6>
            </div>
            <div className={"fondoGris3"}>
                <img src={www} alt="wwww" />
                <h6>Sin descargarte ninguna app solo entrando en tu navegador</h6>
            </div>
            <footer>
                <FooterComp/>
           </footer>
        </div>
    )
}

export default Inicio;