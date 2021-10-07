import React from 'react';
import { Menu, Dropdown } from 'antd';
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';
import FooterComp from './FooterComp';
import accessApi from '../apimethod/accessApi';

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="/myshifts">Mis turnos</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="/editprofile">Editar perfil</a>
        </Menu.Item>
        <Menu.Item key="2">
            <a href="/">Cerrar sesion</a>
        </Menu.Item>
    </Menu>
);

const Shop = () => {
    
    accessApi.getShops();
    const shops = JSON.parse(localStorage.getItem('dataShops'));

    function clickShop(e){
        e.preventDefault();
        console.log(e.target.value);
        localStorage.setItem('shopSelected',e.target.value);
        window.location.href= '/branch';
    }

    return (
        <div>
            <div className="navBar2">
                <div className="row">
                    <div className="col2">
                        <a href="/shop" role="button" className="back" aria-pressed="true"><LeftOutlined /></a>
                    </div>
                    <div className="col2">
                        <div className="nav justify-content-end">
                            <Dropdown overlay={menu} trigger={['click']}>
                                <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <MenuOutlined />
                                </div>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
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