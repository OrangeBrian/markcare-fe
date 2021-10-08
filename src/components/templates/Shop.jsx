import React from 'react';
import FooterComp from './FooterComp';
import accessApi from '../apimethod/accessApi';
import HeaderComp from './HeaderComp';


const Shop = () => {
    
    accessApi.getShops();
    const shops = JSON.parse(localStorage.getItem('dataShops'));

    function clickShop(e){
        e.preventDefault();
        localStorage.setItem('shopSelected',e.target.value);
        window.location.href= '/branch';
    }

    return (
        <div>
        <HeaderComp />
            <hr />
            <div className="shopContainer">
                <div className="coltext">
                    <div className="txtlocation">
                        <h3>Selecciona la tienda que desees</h3>
                    </div>
                </div>
                <div className="shopcol">
                    <div className="col">
                        <div className="row">
                            {shops.map(shop=>{
                                return(
                                        <input 
                                            type="image" 
                                            src={shop.imageUrl}
                                            className="imgStore"
                                            alt="Register Address" 
                                            style={{ position: "relative"}}
                                            value={shop.id}
                                            onClick={clickShop}
                                        />                                      
                                    )}
                                )
                            }
                        </div>
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