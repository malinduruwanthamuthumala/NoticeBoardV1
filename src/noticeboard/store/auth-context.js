import React, { useState } from "react";


const AuthContext = React.createContext({
    isLoggedIn : false,
    onLogin: ()=>{},
    onLogout:()=>{},
});


export const AuthContextProvider = (props) => {

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const logginHandler = ()=>{
        localStorage.setItem("isLoggedIn","1")
        setIsLoggedIn(true);
      }
    
      const logoutHandler = ()=>{
        localStorage.setItem("isLoggedIn","0")
        setIsLoggedIn(false);
      }

      React.useEffect(()=>{
        const isUserLoggedIn = localStorage.getItem("isLoggedIn") == 1 ? true : false;
        setIsLoggedIn(isUserLoggedIn  );
      },[])

      return (
        <AuthContext.Provider value={
            {
                isLoggedIn:isLoggedIn,
                onLogin:logginHandler,
                onLogout:logoutHandler,
            }
        }>
            {props.children}
        </AuthContext.Provider>
      )
    
}
export default AuthContext;