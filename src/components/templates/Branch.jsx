import React from 'react';
import iconoSucursal from "../images/iconoSucursal.png";
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

const Branch = () => {
    
    const shopSelect = localStorage.getItem('shopSelected');

    accessApi.getBranchOffices(shopSelect);
    const branchOffices = JSON.parse(localStorage.getItem('dataBranchOffice'));

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
            <div className="BranchContainer">
                <div className="txtlocation">
                    <h3>Selecciona sucursal</h3>
                </div>
                     <div className="branch">
                            <img src={iconoSucursal}  className="imgBranch" alt="Register Address" style={{ position: "relative"}}  />
                            <div className="text">
                            <h4>Nombre de tienda</h4>
                            <p>Campo de texto 1 direccion de tienda mas cercana</p>
                            </div>
                            <a href="/branchconfirm" className="btn"  role="button" aria-pressed="true">Seleccionar</a>
                    </div> 
                    <div className="branch">
                            <img src={iconoSucursal}  className="imgBranch" alt="Register Address" style={{ position: "relative"}}  />
                            <div className="text">
                            <h4>Nombre de tienda</h4>
                            <p>Campo de texto 2 direccion de tienda mas cercana</p>
                            </div>
                            <a href="/branchconfirm" className="btn"  role="button" aria-pressed="true">Seleccionar</a>
                    </div>

                    <div className="branch">
                            <img src={iconoSucursal}  className="imgBranch" alt="Register Address" style={{ position: "relative"}}  />
                            <div className="text">
                            <h4>Nombre de tienda</h4>
                            <p>Campo de texto 3 direccion de tienda mas cercana</p>
                            </div>
                            <a href="/branchconfirm" className="btn"  role="button" aria-pressed="true">Seleccionar</a>
                    </div>  
                    
            </div>
                 <footer>
                 <FooterComp/>
                 </footer>
            
            </div>
    )
}
export default Branch;