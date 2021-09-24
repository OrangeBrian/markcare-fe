/*
    Importo toda la libreria React para utilizar todas sus funciones, etc
*/
import React from 'react';


/* 
    Importamos con el nombre 'loginImg' la imagen que se encuentra 
    en la carpeta actual (./) del LOGO de Markcare.
*/


/*
    Kit de interfaz de usuario que contiene mas de 2000 
    componentes de interfaz para aplicaciones web y 
    de escritorioes una libreria del estilo boostrap 
*/
import { Menu, Dropdown } from 'antd';
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';
import FooterComp from './FooterComp';

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

const DateSelect = () => {
    return (
        <div>
            <div className="navBar2">
                <div className="row">
                    <div className="col2">
                        <a href="/" role="button" className="back" aria-pressed="true"><LeftOutlined /></a>
                    </div>
                    <div className="col2">
                        <div className="nav justify-content-end">
                            <Dropdown overlay={menu} trigger={['click']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <MenuOutlined />
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="dataSelectContainer">
                <div className="txtlocation">
                    <h3>Selecciona un turno</h3>
                </div>
                <form action="/send.php">
                    <p>Seleccionar fecha: <br /> <br />
                        <input type="date" id="fecha1" name="fecha1" min="2021-09-01" max="2021-12-31" step="1" />
                    </p>
                    <p>Seleccionar hora: <br />
                    </p>
                    <input type="number" min="8" max="20" step="1" />
                    <br /> <br />
                    <input id="boton" type="submit" value="Seleccionar" />
                </form>
            </div>
                <footer>
                <FooterComp/> 
                </footer>
            
        </div>
    )
}
export default DateSelect