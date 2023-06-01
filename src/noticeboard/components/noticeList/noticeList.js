import React,{useState} from "react";

import CardMDL from "../../UI/CardMDL";
import "./noticeList.css";

const NoticeList = (props) => {

    



    return (
        <CardMDL className="new_notice">
          {
            props.noticeList.map((notice)=>{
                return ( 
                <div className="container noticeCard">
                  <div className="row">
                    <div className="col-md-4 left">
                        <h6 className="subject">{notice.subject}</h6>
                    </div>
                    <hr></hr>
                    <div className="col-md-8"></div>                
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                    <p className="notice-list-left">{notice.message}</p>
                    </div>
                  </div>
                    
                  <div className="row">
                    <div className="col-md-7"></div>
                    <div className="col-md-5">
                        <p className="email-notice">{notice.email}</p>
                    </div>

                  </div>
                 
                </div>
                )
            })
          } 
        </CardMDL>
    )

}

export default NoticeList;