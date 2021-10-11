import React from 'react';
import FooterComp from './FooterComp';
import HeaderComp from './HeaderComp';
import Branchoffice from './branchoffices/branchoffice';

const Branch = () => {

    const branchOffices = JSON.parse(localStorage.getItem('dataBranchOffice'));

    return (
        <div>
            <HeaderComp a="/shop"/>
            <hr />
            <div className="BranchContainer">
                <div className="txtlocation">
                    <h3>Selecciona sucursal</h3>
                </div>
                <div className="row">
                    {branchOffices.map(function(elemento,indice,array){                 
                        return (
                            <Branchoffice
                                key={elemento.id}
                                id={elemento.id}
                                street={elemento.street + ' ' + elemento.numberHeight}
                                city={elemento.city}
                                img={elemento.store.imageUrl}
                                neighborhood={elemento.neighborhood}
                                indice={indice}
                                latitude={elemento.latitude}
                                longitude={elemento.longitude}
                            />
                            );     
                    })}
                </div>
            </div>
            <footer>
                <FooterComp />
            </footer>

        </div>
    )
}
export default Branch;