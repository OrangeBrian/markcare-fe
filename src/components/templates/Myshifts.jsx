import React from 'react';
import HeaderComp from './HeaderComp';
import Shift from './shifts/shift';

const Myshifts = () => {
    
    const getMyshifts = JSON.parse(localStorage.getItem('dataMyShifts'));

    return (
        <div>
           <HeaderComp a="javascript: history.go(-1)"/>
            <hr />
            <div className="BranchContainer">
                <div className="txtlocation">
                    <h3>Mis Turnos</h3>
                </div>

                <div className="row" style={{ marginLeft: "1%" }}>
                    {
                        getMyshifts.map(function(element){
                            return(
                                <Shift 
                                    img={element.branchOffice.store.imageUrl}
                                    dateAppointment = {element.dateAppointment}
                                    street={element.branchOffice.street + " " + element.branchOffice.numberHeight }
                                    name={element.branchOffice.store.name}
                                
                                />
                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}
export default Myshifts;