import React from 'react';
import loginImg from './images/logo.png';
import indexImg from './images/fondo-super.jpg';

const Inicio = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src={loginImg} width="38%" style={{ position: 'relative' }} alt="register" />
                    </div>
                    <div class="col">
                        <ul class="nav">
                            <li class="nav-item">
                                <a href="/login"class="btn btn-primary btn-sm" role="button" aria-pressed="true">Login</a>
                            </li>
                            <li class="nav-item">
                                <a href="/register" class="btn btn-primary btn-sm" role="button" aria-pressed="true">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="indexImg">
                    <img className='centerImg' src={indexImg} alt="indexImage" />
                </div>
            </div>
        </div>
    )
}

export default Inicio