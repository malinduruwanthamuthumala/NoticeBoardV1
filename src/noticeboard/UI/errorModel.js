import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn
  } from 'mdb-react-ui-kit';
import "./errorModel.css"
const ErrorModel = (props) => {


    const onModelClose = () => {
        props.closeModel();
    }
    return(
        <div>
        <div className="container-fluid row error_model">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <MDBCard alignment='center'>
                <MDBCardHeader>{props.title}</MDBCardHeader>
                <MDBCardBody>
                    {
                        props.errors.map((error)=>{
                          const [id,message] = error;
                          return  <MDBCardText className="error_messages_model"> * {error}</MDBCardText>
                        })
                    }
                
                <MDBBtn href='#' onClick={onModelClose}>close</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </div>
            <div className="col-md-3"></div>
        </div>
        <div className="backdrop"></div>
        
        </div>
        
    )
}

export default ErrorModel;