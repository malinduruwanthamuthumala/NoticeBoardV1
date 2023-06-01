import React,{useState}from "react";
import NewNoticeForm from "../components/adddNewNotice/addNewNotice";
import NoticeList from "../components/noticeList/noticeList";

const LandingPage = (props)=>{

    const [noticeList,setNoticeList] = useState([]);

    const onNewNoticeAdd = (notice) =>{
        setNoticeList((prevNotices)=>{
            return [...prevNotices,notice];
        }
        );
    }

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">

                </div>
                <div className="col-md-7">           
                    <NewNoticeForm onAddNewNotice={onNewNoticeAdd}></NewNoticeForm>
                    <NoticeList noticeList={noticeList}></NoticeList>
                    
                </div>
                <div className="col-md-3">

                </div>
            </div>
            
        </div>
    )
}

export default LandingPage;