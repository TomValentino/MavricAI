import React, { useState }from "react";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Dashboard from "./member-views/Dashboard";
import MyProjects from "./member-views/MyProjects";
import Builder from "./member-views/Builder";


import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Sidebar from "../components/SideBar";

import Login from "./public-views/Login";
import Signup from "./public-views/Signup";
import ForgotPassword from "./public-views/ForgotPassword";

import HelpIcon from "../images/HelpIcon.svg";

import UpdateProfile from "./member-views/UpdateProfile";






function App() {


  // const StoreSelector = () => {
  // if (CurrentPopUpContent === "store-selector") {
  //   return <CreateStoreSelectorPopup />
  // }
  // else if (CurrentPopUpContent === "my-account") {
  //   return <CreateMyAccountPopup />
  // }
  // else {

  //   return (
  //     <div>
  
  //     </div>
  //   )

  // }
  
  
  
  // }


    const [showSideBar, setShowSideBar] = useState(true);



  return (
  <>
   
   <BrowserRouter>
      <AuthProvider>

        {/* <div className="popup-container">

          <div>

          { showAccountPopUp && (<CreateMyAccountPopup/>)}


          
          {console.log(showAccountPopUp)}

          </div>


        </div> */}



  
        <img className="help-icon" src={HelpIcon} />

         {showSideBar && (
        <Sidebar />
         )}
      

        <div className="Content">


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
                  <MyProjects 
                    sidebar={() => { setShowSideBar(true) }}

                  />
                </PrivateRoute>
              }
              ></Route> 


           
            <Route path="/builder"
              element={
                <PrivateRoute>
                  <Builder
                    sidebar={() => { setShowSideBar(false) }}
                    />
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
        

            {/* <Views /> */}
            
          </div>

          {/* <div id="loader-container">
            <div className="loader-bg"></div>
            <img className="loader" src={Loader} />
          </div> */}

          
      </AuthProvider>
    </BrowserRouter>
  
  </>
  )


}

export default App;
