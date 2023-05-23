import React , {useState} from "react";
import {
    MDBInput,
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';

import classes from "../addNewNotice.css"
import CardMDL from "../../UI/CardMDL";
const NewNoticeForm = (props) => {

   
    const [subject,setSubject] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const newNoticeAttachmentHandler = (event) => {
        event.preventDefault();
        console.log(subject,email,message);
        resetForm();
    }

    const subjectChangeHandler = (event) => {
        setSubject(event.target.value)
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const messageChangeHandler = (event) => {
        setMessage(event.target.value)
    }

    const resetForm = () => {
        setEmail('');
        setMessage('');
        setSubject('');
    }
    return (
        
        <CardMDL className="new_notice">
            <form onSubmit={newNoticeAttachmentHandler}>
          <MDBInput id='form4Example1' wrapperClass='mb-4' label='Subject' onChange={subjectChangeHandler} value={subject} />
          <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' onChange={emailChangeHandler} value={email}/>
          <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' onChange={messageChangeHandler} value={message}/>
          <MDBBtn type='submit' className='mb-4' block>
             Attach To Board
          </MDBBtn>
        </form>
        {email + " " + subject + " " + message}
        </CardMDL>
      );
}

export default NewNoticeForm;