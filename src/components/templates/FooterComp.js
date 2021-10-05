import React from "react";
import logoargendev from '../images/logoArgendev.png';
import logfacebook from "../images/fb.png"
import logtwitter from "../images/tw.png"
import loginstagram from "../images/ig.png"
import logyoutube from "../images/yt.png"



const FooterComp = _ => 
<div className="footer">
                <footer>
                    <div class="contenedor">
                        <div class="parrafo">
                            <p>© 2021 ArgenDev. <br />Todos los derechos reservados.</p>
                        </div>
                        <div className="logoArgenDevFooter">
                            <img src={logoargendev} alt="logoArgenDev" />
                        </div>
                        <div class="redes">
                            <a href="https://www.facebook.com"><img src={logfacebook} alt="facebook" /></a>
                            <a href="https://www.twitter.com"><img src={logtwitter} alt="twitter" /></a>
                            <a href="https://instagram.com"><img src={loginstagram} alt="instagram" /></a>
                            <a href="https://youtube.com"><img src={logyoutube} alt="youtube" /></a>
                        </div>
                    </div>
                </footer>
            </div>

export default FooterComp;