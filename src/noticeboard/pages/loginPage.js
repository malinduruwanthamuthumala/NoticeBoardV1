import React from "react";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

const LoginPage = (props) => {
  
  const signUpHandler = ()=>{
    props.onLoggedIn();
  }

  const [entEredEmail,setEnteredEmail] = React.useState("");
  const [enteredPassword,setEnteredPassword] = React.useState("");
  const [isFormValid,setIsFormValid] = React.useState(false);

  React.useEffect(()=>{
    debugger;
    setIsFormValid(
         entEredEmail.length>0 && enteredPassword.length>0        
    )
  },[entEredEmail,enteredPassword])

  const onEmailChange = (event) =>{
    setEnteredEmail(event.target.value)
  }

  const onPasswordChange = (event) => {
    setEnteredPassword(event.target.value);
  }
  return (
    <React.Fragment>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="form1"
          type="email"
          onChange={onEmailChange}
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form2"
          type="password"
          onChange={onPasswordChange}
        />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Remember me"
          />
          <a href="!#">Forgot password?</a>
        </div>


        <MDBBtn className="mb-4" onClick={signUpHandler} disabled={!isFormValid}>Sign in</MDBBtn>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>

          <div
            className="d-flex justify-content-between mx-auto"
            style={{ width: "40%" }}
          >
            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        </div>
      </MDBContainer>
    </React.Fragment>
  );
};

export default LoginPage;
