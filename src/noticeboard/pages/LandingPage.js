import React,{useState}from "react";
import NewNoticeForm from "../components/adddNewNotice/addNewNotice";
import NoticeList from "../components/noticeList/noticeList";
import ErrorModel from "../UI/errorModel";

const LandingPage = (props)=>{

    const [noticeList,setNoticeList] = useState([]);
    const [errors,setErrors] = useState([]);
    const [isModelHidden,setIsModelHidden] = useState(true);
    const onNewNoticeAdd = (notice) =>{
        setNoticeList((prevNotices)=>{
            return [...prevNotices,notice];
        }
        );
    }

    const handleFormErrors = (errors) => {
        errors.length>0 ? setIsModelHidden(true) : setIsModelHidden(false);
        setErrors(errors)
    }

    const onModelClose = () => {
        setIsModelHidden(false);
    }

    return(
        <div className="container-fluid">
            { errors.length>0 && isModelHidden && <ErrorModel title="Following Errors Found with the form submision " message="something went wrong" errors= {errors} closeModel={onModelClose}></ErrorModel>}
            <div className="row">
                <div className="col-md-2">

                </div>
                <div className="col-md-7">           
                    <NewNoticeForm onAddNewNotice={onNewNoticeAdd} whenFormContainsErrors={handleFormErrors}> </NewNoticeForm>
                    <NoticeList noticeList={noticeList}></NoticeList>
                    
                </div>
                <div className="col-md-3">

                </div>
            </div>
            
        </div>
    )
}

export default LandingPage;