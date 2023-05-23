import React from "react";
import {
    MDBCard,
    MDBCardBody,
   
  } from 'mdb-react-ui-kit';
import "./CardMDL.css"
const CardMDL = (props) => {
    
    return (
        <div className={`${props.className}`}>
            <div className = "row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <MDBCard alignment='center'>
                <MDBCardBody>
                    {props.children}
                </MDBCardBody>
                </MDBCard>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default CardMDL;