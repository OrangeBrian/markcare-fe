import React from 'react';
import carrefour from "../images/carrefourLogo.png";
import walmart from "../images/wallmartLogo.png";
import disco from "../images/discoLogo.png";
import jumbo from "../images/jumboLogo.png";
import coto from "../images/cotoLogo.png";
import dia from "../images/diaLogo.png";
import { Menu, Dropdown } from 'antd';
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';
import FooterComp from './FooterComp';
import accesApi from '../apimethod/accessApi';

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
    
    accesApi.getShops();
    const shops = JSON.parse(localStorage.getItem('dataShops'));

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
                        <img src={carrefour} className="imgStore" alt="Register Address" style={{ position: "relative" }} />
                        <img src={walmart} className="imgStore" alt="Current Location" style={{ position: "relative" }} />
                        <img src={disco} className="imgStore" alt="Current Location" style={{ position: "relative" }} />
                    </div>
                    <div className="col">

                        <a href="./branch" className="btn" role="button" aria-pressed="true">Seleccionar</a>
                        <a href="./branch" className="btn" role="button" aria-pressed="true">Seleccionar</a>
                        <a href="./branch" className="btn" role="button" aria-pressed="true">Seleccionar</a>

                    </div>
                    <div className="col">
                        <img src={jumbo} className="imgStore" alt="Register Address" style={{ position: "relative" }} />
                        <img src={coto} className="imgStore" alt="Current Location" style={{ position: "relative" }} />
                        <img src={dia} className="imgStore" alt="Current Location" style={{ position: "relative" }} />
                    </div>
                    <div className="col">

                        <a href="./branch" className="btn" role="button" aria-pressed="true">Seleccionar</a>
                        <a href="./branch" className="btn" role="button" aria-pressed="true">Seleccionar</a>
                        <a href="./branch" className="btn" role="button" aria-pressed="true">Seleccionar</a>

                    </div>
                    {/* <div className="col">
                        <div>
                                {
                                    shops.map(shop=>{
                                        return(
                                                <a href="./branch" className="btn" role="button" aria-pressed="true">{shop.name}</a>
                                            )
                                        }
                                    )
                                }
                        </div>   
                    </div> */}
                </div>
            </div>
         
                <footer>
                   <FooterComp/>
                </footer>
        </div>
    )
}
export default Shop;