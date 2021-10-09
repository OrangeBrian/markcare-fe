import React from 'react';
import FooterComp from './FooterComp';
import accessApi from '../apimethod/accessApi';
import HeaderComp from './HeaderComp';

function filterShopSelect(objects,attributes,filter){
    return objects.filter(filter).map(o => attributes.reduce((a,p)=>{
        a[p]= o[p];
        return a;
    },{}));
}

const Branch = () => {

    const shopSelect = localStorage.getItem('shopSelected');
    const shops = JSON.parse(localStorage.getItem('dataShops'));

    accessApi.getBranchOffices(shopSelect);

    const shopSelected = filterShopSelect(shops,['name','imageUrl'],c=>c.id==shopSelect);
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
                    <div className="col">
                        <img src={shopSelected[0].imageUrl} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                        <div className="text">
                            <h4>{shopSelected[0].name}</h4>
                            <p>{branchOffices[0].city + ', ' + branchOffices[0].street + ' ' + branchOffices[0].numberHeight}</p>
                        </div>
                        <a href="/branchconfirm" className="btn" role="button" aria-pressed="true">Seleccionar</a>
                    </div>
                    <div className="col">
                        <img src={shopSelected[0].imageUrl} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                        <div className="text">
                            <h4>{shopSelected[0].name}</h4>
                            <p>{branchOffices[1].city + ', ' + branchOffices[1].street + ' ' + branchOffices[1].numberHeight}</p>
                        </div>
                        <a href="/branchconfirm" className="btn" role="button" aria-pressed="true">Seleccionar</a>
                    </div>
                    <div className="col">
                        <img src={shopSelected[0].imageUrl} className="imgBranch" alt="Register Address" style={{ position: "relative" }} />
                        <div className="text">
                            <h4>{shopSelected[0].name}</h4>
                            <p>{branchOffices[1].city + ', ' + branchOffices[1].street + ' ' + branchOffices[1].numberHeight}</p>
                        </div>
                        <a href="/branchconfirm" className="btn" role="button" aria-pressed="true">Seleccionar</a>
                    </div>                
                </div>
            </div>
            <footer>
                <FooterComp />
            </footer>

        </div>
    )
}
export default Branch;