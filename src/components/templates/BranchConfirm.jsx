import React from 'react';
import FooterComp from './FooterComp';
import Maps from './Maps';
import HeaderComp from './HeaderComp';

const BranchConfirm = () => {

    const latitude = localStorage.getItem('latitude');
    const longitude =localStorage.getItem('latitude');


    return (
        <div>
            <HeaderComp a="/branch"/>
            <hr />
            <div className="branchConfirmContainer">
                <h3>Confirma la sucursal seleccionada</h3>
                <a href="/dateselect" className="btn" role="button" aria-pressed="true">Confirmar</a>
                <div className="mapCont">
                    <Maps />
                </div>
                <div className="separadorMap">
                </div>
            </div>
            <footer>
                <FooterComp />
            </footer>
        </div>
    )
}
export default BranchConfirm;