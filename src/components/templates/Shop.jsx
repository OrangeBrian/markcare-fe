import React from 'react';
import FooterComp from './FooterComp';
import HeaderComp from './HeaderComp';
import accessApi from '../apimethod/accessApi';

const idUser = localStorage.getItem('idUser');
accessApi.getMyShifts(idUser);

const Shop = () => {

    const shops = JSON.parse(localStorage.getItem('dataShops'));
    

    function clickShop(e){
        e.preventDefault();
        localStorage.setItem('shopSelected',e.target.value);
        accessApi.getBranchOffices(e.target.value)
        .then(
        setTimeout((e) => {
            window.location.href= '/branch';     
        }, 1000)
        )
    }

    return (
        <div>
        <HeaderComp a="/shop"/>
            <hr />
            <div className="shopContainer">
                <div className="coltext">
                    <div className="txtlocation">
                        <h3>Selecciona la tienda que desees</h3>
                    </div>
                </div>
                    <div className="col">
                        <div className="row">
                            {shops.map(shop=>{          
                                return(
                                        <input 
                                            key={shop.id}
                                            type="image" 
                                            src={shop.imageUrl}
                                            className="imgStore"
                                            alt="Register Address" 
                                            style={{ position: "relative" }}
                                            value={shop.id}
                                            onClick={clickShop}
                                        />                                      
                                    )}
                                )
                            }
                    </div>
                </div>
            </div>
                <footer>
                   <FooterComp/>
                </footer>
        </div>
    )
}
export default Shop;