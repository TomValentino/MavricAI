import React, { useState }from "react";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

import { AuthProvider } from "../Contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

import Login from "./Public/Login";
import Signup from "./Public/Signup";
import ForgotPassword from "./Public/ForgotPassword";

import HelpIcon from "../Images/HelpIcon.svg";
import UpdateProfile from "./Members/UpdateProfile";

import Dashboard from "./Members/Dashboard";
import MyProjects from "./Members/MyProjects";


import Logo from "../Images/Logo.svg";
import Hamburger from "../Images/Hamburger.svg";
import Account from "../Images/Account.svg";
import Settings from "../Images/Settings.svg";




function App() {



    const [showSideBar, setShowSideBar] = useState(true);




    // Function to show/hide the hamburger sidebar
    function ToggleSideBar() 
    {
      document.querySelector('.hamburger-fs-container').classList.remove('hidden')

    }

    function HideSideBar () {
      document.querySelector('.hamburger-fs-container').classList.add('hidden')
      console.log('hi')
    }






  return (
  <>
   
   <BrowserRouter>
      <AuthProvider>

  
        <img className="help-icon" src={HelpIcon} />


        <div className="stage">

          <div className="menu-bar">
            <div className="hamburger-container" onClick={ToggleSideBar} >
              <img className="hamburger" alt="" src={Hamburger} />
            </div>

            <img className="logo" alt="" src={Logo} />

            <div className="menu-right-container">
              <img className="settings" alt="" src={Settings} />
              <img className="account" alt="" src={Account} />
            </div>




          </div>

          <div className="content">


            <Routes>
              <Route exact path="/"
                element={
                  <PrivateRoute>

                    <Dashboard />
                  
                  </PrivateRoute>
                }
                ></Route>  

              <Route path="/projects"
                element={
                  <PrivateRoute>
                    <MyProjects />
                
                  </PrivateRoute>
                }
                ></Route> 


            
          

              <Route exact path="/update-profile"
                element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }
                ></Route> 

      
                
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              <Route path="*" element={<Navigate to="/" replace />} />

              
              
            </Routes>
          
              
          </div>

          <div className="hamburger-fs-container hidden">
            <div className="hamburger-fs-bg" onClick={HideSideBar}></div>
            <div className="hamburger-fs-slider"></div>
          </div>

        </div>

      

       

          
      </AuthProvider>
    </BrowserRouter>
  
  </>
  )


}

export default App;
