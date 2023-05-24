import React from "react";
import NewNoticeForm from "../components/adddNewNotice/addNewNotice";
import NoticeList from "../components/noticeList/noticeList";

const LandingPage = (props)=>{
    return(
        <div className="containerfluid">
            
            <NewNoticeForm></NewNoticeForm>
            <NoticeList></NoticeList>
        </div>
    )
}

export default LandingPage;