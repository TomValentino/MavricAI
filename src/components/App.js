import React, { useState }from "react";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

import { AuthProvider } from "../Contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import { Link } from "react-router-dom";

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

import MainSideBar from "./Modals/MainSideBar";

import AccountModal from "./Modals/AccountModal";




function App() {



    const [showSideBar, setShowSideBar] = useState(true);
    const [accountModal, setAccountModal] = useState(false);
    const closeAccountModal = () => {
      setAccountModal(false)

    }





    // Function to show/hide the hamburger sidebar
    function ToggleSideBar() 
    {
      document.querySelector('.sidebar-modal-container').classList.remove('hidden')

    }

    function HideSideBar () {
      document.querySelector('.sidebar-modal-container').classList.add('hidden')
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

            <Link className="logo" to="/">
              <img alt="" src={Logo} />
            </Link>

            <div className="menu-right-container">
              <img className="settings" alt="" src={Settings} />
              <img className="account" alt="" src={Account} onClick={() => { setAccountModal(true) }}/>
            </div>

          </div>

             {/* If account modal state = true (on click), show this */}
             {accountModal && (


              <AccountModal closeAccountModal={closeAccountModal} />
             

              )
          }

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

{/* REPACKAGE INTO A MODAL COMPONENT */}

<MainSideBar />
          

        </div>

      

       

          
      </AuthProvider>
    </BrowserRouter>
  
  </>
  )


}

export default App;
