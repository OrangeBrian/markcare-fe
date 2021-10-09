import React from 'react';
import iconoSucursal from "../images/iconoSucursal.png";
import FooterComp from './FooterComp';
import accessApi from '../apimethod/accessApi';
import HeaderComp from './HeaderComp';


const Branch = () => {

    const shopSelect = localStorage.getItem('shopSelected');

    accessApi.getBranchOffices(shopSelect);
    const branchOffices = JSON.parse(localStorage.getItem('dataBranchOffice'));

    return (
        <div>
            <HeaderComp a="/shop"/>
            <hr />
            <div className="BranchContainer">
                <div className="txtlocation">
                    <h3>Selecciona sucursal</h3>
                </div>
                <div className="branch">
                    <img src={iconoSucursal} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                    <div className="text">
                        <h4>Nombre de tienda</h4>
                        <p>Campo de texto 1 direccion de tienda mas cercana</p>
                    </div>
                    <a href="/branchconfirm" className="btn" role="button" aria-pressed="true">Seleccionar</a>
                </div>
                <div className="branch">
                    <img src={iconoSucursal} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                    <div className="text">
                        <h4>Nombre de tienda</h4>
                        <p>Campo de texto 2 direccion de tienda mas cercana</p>
                    </div>
                    <a href="/branchconfirm" className="btn" role="button" aria-pressed="true">Seleccionar</a>
                </div>

                <div className="branch">
                    <img src={iconoSucursal} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                    <div className="text">
                        <h4>Nombre de tienda</h4>
                        <p>Campo de texto 3 direccion de tienda mas cercana</p>
                    </div>
                    <a href="/branchconfirm" className="btn" role="button" aria-pressed="true">Seleccionar</a>
                </div>

            </div>
            <footer>
                <FooterComp />
            </footer>

        </div>
    )
}
export default Branch;