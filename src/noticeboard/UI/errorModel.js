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
import "./errorModel.css";
import     ReactDOM  from "react-dom";

const Backdrop = props =>{

    
    return (
        <>
        
        <div className="backdrop"></div>
        </>
    );

    
}

const Error = props => {

    const onModelClose = () => {
        debugger
        props.onClose();
    }

    return (<div className="container-fluid row error_model">
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
</div>);
}

const ErrorModel = (props) => {   
   

debugger
    return(
        
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop/>,document.getElementById('backdrop-root'))}
            {
            
            ReactDOM.createPortal(<Error onClose={props.closeModel}  errors={props.errors} title={props.title}/>,document.getElementById('overlay-root'))}
        </React.Fragment>        
    )
}

export default ErrorModel;