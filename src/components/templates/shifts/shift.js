import React from "react";

const Shift = (props) => {

    return (
        <div className="col-4" style={{'marginBottom':'3%'}}>
                <img
                src={props.img}
                className="rounded"
                style={{'marginBottom':'3%'}}
                />
                <p>{props.name}</p>
                <p>{props.street}</p>
                <p>{props.dateAppointment}</p>
        </div>
    );
};
export default Shift;