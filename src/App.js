import logo from './logo.svg';
import './App.css';
import NewNoticeForm from './noticeboard/components/adddNewNotice/addNewNotice';
import LandingPage from './noticeboard/pages/LandingPage';
import NavBar from './noticeboard/components/navBar';
import LoginPage from './noticeboard/pages/loginPage';
import React from 'react';

function App() {

  const [isLoggedIn,setIsLoggedIn] = React.useState(false);

  React.useEffect(()=>{
    const isUserLoggedIn = localStorage.getItem("isLoggedIn") == 1 ? true : false;
    setIsLoggedIn(true);
  },[])

  const logginHandler = ()=>{
    localStorage.setItem("isLoggedIn","1")
    setIsLoggedIn(true);
  }

  const logoutHandler = ()=>{
    localStorage.setItem("isLoggedIn","0")
    setIsLoggedIn(false);
  }

  return (
    <div>
      <NavBar onLogout={logoutHandler}></NavBar>
      {!isLoggedIn && <LoginPage onLoggedIn={logginHandler} />}
      {isLoggedIn && <LandingPage ></LandingPage>}

      
    </div>
  );
}

export default App;
