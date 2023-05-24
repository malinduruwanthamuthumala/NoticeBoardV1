import React,{useState} from "react";

import CardMDL from "../../UI/CardMDL";
const NoticeList = (props) => {

    const [noticeList,setNoticeList] = useState([]);

    return (
        <CardMDL className="new_notice">
            <p>list goes here</p>
        </CardMDL>
    )

}

export default NoticeList;