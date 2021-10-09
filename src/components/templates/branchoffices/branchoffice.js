import React from "react";

const Branchoffice = (props) => {

    function clickBranch(e){
        
        e.preventDefault();
        window.localStorage.setItem('dataBranchId',props.id);
        window.localStorage.setItem('latitude',props.latitude);
        window.localStorage.setItem('longitude',props.longitude);
        window.location.href = '/branchconfirm';

    }

    return (
        <div className="col-4" style={{'marginBottom':'3%'}}>
                <img
                src={props.img}
                className="rounded"
                style={{'marginBottom':'3%'}}
                />
                <h4>{props.street}</h4>
                <h4>{props.city}</h4>
                <h4>{props.neighborhood}</h4>
                <button 
                    type="button"
                    onClick={clickBranch}
                    className="btn btn-primary"
                >
                    Seleccionar
                </button>
        </div>
    );
};

export default Branchoffice;
