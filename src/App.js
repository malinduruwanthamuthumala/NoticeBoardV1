import logo from './logo.svg';
import './App.css';
import NewNoticeForm from './noticeboard/components/adddNewNotice/addNewNotice';
import LandingPage from './noticeboard/pages/LandingPage';
import NavBar from './noticeboard/components/navBar';
import LoginPage from './noticeboard/pages/loginPage';
import React from 'react';
import AuthContext from './noticeboard/store/auth-context';

function App() {

  const [isLoggedIn,setIsLoggedIn] = React.useState(false);

  React.useEffect(()=>{
    const isUserLoggedIn = localStorage.getItem("isLoggedIn") == 1 ? true : false;
    setIsLoggedIn(isUserLoggedIn  );
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
      <AuthContext.Provider value={{
      isLoggedIn : isLoggedIn,
    }}>
      <NavBar onLogout={logoutHandler}></NavBar>
      {!isLoggedIn && <LoginPage onLoggedIn={logginHandler} />}
      {isLoggedIn && <LandingPage ></LandingPage>}
      </AuthContext.Provider>
      
    </div>
  );
}

export default App;
