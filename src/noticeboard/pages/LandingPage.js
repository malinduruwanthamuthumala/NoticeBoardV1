import React,{useState}from "react";
import NewNoticeForm from "../components/adddNewNotice/addNewNotice";
import NoticeList from "../components/noticeList/noticeList";
import ErrorModel from "../UI/errorModel";

const LandingPage = (props)=>{
    let listLocal = [];
    const [noticeList,setNoticeList] = useState([]);
    const [errors,setErrors] = useState([]);
    const [isModelHidden,setIsModelHidden] = useState(true);
    const onNewNoticeAdd = (notice) =>{
        debugger
        setNoticeList((prevNotices)=>{
            return [...prevNotices,notice];
        }
        );
        const fromStorage = localStorage.getItem("noticeList");
        let listConverted = [];
        if (isJSONCompatible(fromStorage)){
            listConverted = JSON.parse(fromStorage);
        }
        listConverted.push(notice);
        localStorage.setItem("noticeList",JSON.stringify(listConverted));
   
    }
    

    const handleFormErrors = (errors) => {
        errors.length>0 ? setIsModelHidden(true) : setIsModelHidden(false);
        setErrors(errors)
    }

    const onModelClose = () => {
        setIsModelHidden(false);
    }

    React.useEffect(()=>{
        debugger
        const noticeListfromstorage = localStorage.getItem("noticeList");
        const allowIn = isJSONCompatible(noticeListfromstorage);
        const jsonConvertedList = JSON.parse(noticeListfromstorage);
        if(noticeList.length == 0 && allowIn && Array.isArray(jsonConvertedList) ){
            setNoticeList(jsonConvertedList);
        }
    },[])

    function isJSONCompatible(str) {
        try {
          JSON.parse(str);
          return true;
        } catch (error) {
          return false;
        }
      }

    return(
        <React.Fragment>
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
            
        </React.Fragment>
    )
}

export default LandingPage;