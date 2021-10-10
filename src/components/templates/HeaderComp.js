import React from "react";
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';


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

function HeaderComp(a) {


    return (
    <div className="navBar2" >
        <div className="back">
            <a href="javascript: history.go(-1)" role="button" className="back" aria-pressed="true"><LeftOutlined /></a>
        
        </div>
        <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <MenuOutlined />
            </a>
        </Dropdown>
    </div>
    );
}
    
export default HeaderComp;