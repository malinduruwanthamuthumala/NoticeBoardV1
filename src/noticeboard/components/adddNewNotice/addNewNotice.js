import React, { useState } from "react";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";

import classes from "../addNewNotice.css";
import CardMDL from "../../UI/CardMDL";
const NewNoticeForm = (props) => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessages, setErrorMessage] = useState([]);

  let validEmail = true;
  let validSubject = true;
  let validMessage = true;

  const newNoticeAttachmentHandler = (event) => {
    event.preventDefault();
    setErrorMessage([]);
    triggerValidationRuleSet();
    debugger;
    if (!isNoticeDataValid()) {
      return;
    }
    props.onAddNewNotice({
      id:Math.random().toString,
      email:email,
      subject:subject,
      message:message,
    });
    resetForm();
  };

  function triggerValidationRuleSet() {
    if (subject.trim().length === 0) {
      validSubject = false;
      addErrorMessage("subject cannot be empty");
    }
    if (message.trim().length === 0) {
      validMessage = false;
      addErrorMessage("message cannot be empty");
    }
    if (email.trim().length === 0) {
      validEmail = false;
      addErrorMessage("email cannot be empty");
    }
  }

  function isNoticeDataValid() {
    return validSubject && validMessage && validEmail;
  }

  const subjectChangeHandler = (event) => {
    setSubject(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const resetForm = () => {
    setEmail("");
    setMessage("");
    setSubject("");
  };

  const addErrorMessage = (message) => {
     let id = Math.random().toString();
    setErrorMessage((prevData) => {
      return [...prevData, [id,message]];
    });
  };
  return (
    <CardMDL className="new_notice">
      <form onSubmit={newNoticeAttachmentHandler}>
        <MDBInput
          id="form4Example1"
          wrapperClass="mb-4"
          label="Subject"
          onChange={subjectChangeHandler}
          value={subject}
        />
        <MDBInput
          type="email"
          id="form4Example2"
          wrapperClass="mb-4"
          label="Email address"
          onChange={emailChangeHandler}
          value={email}
        />
        <MDBInput
          wrapperClass="mb-4"
          textarea
          id="form4Example3"
          rows={4}
          label="Message"
          onChange={messageChangeHandler}
          value={message}
        />
        <MDBBtn type="submit" className="mb-4" block>
          Attach To Board
        </MDBBtn>
      </form>
      {/* create a new component for error message section */}
      
      {errorMessages.map((error) => {
        const [id,message] = error;
        return (     
          <ul className="error_message"  key={id}>    
            <li className="error_message_point" >{message}</li> 
            </ul>       
        );       
      })
    
      }
     
    </CardMDL>
  );
};

export default NewNoticeForm;
