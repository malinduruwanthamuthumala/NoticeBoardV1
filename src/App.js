import logo from './logo.svg';
import './App.css';
import NewNoticeForm from './noticeboard/components/adddNewNotice/addNewNotice';
import LandingPage from './noticeboard/pages/LandingPage';
import NavBar from './noticeboard/components/navBar';
import LoginPage from './noticeboard/pages/loginPage';
import React,{useContext}from 'react';
import AuthContext from './noticeboard/store/auth-context';

function App() {

  const auth = useContext(AuthContext);
  debugger
  return (
       <React.Fragment>
      <NavBar ></NavBar>
      {!auth.isLoggedIn &&   <LoginPage onLoggedIn={auth.onLogin} />}
      {auth.isLoggedIn && <LandingPage ></LandingPage>}
      </React.Fragment>   
  );
}

export default App;
