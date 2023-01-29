// Generic stuff
import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

// Login and account stuff
import Login from './public-views/Login'
import Signup from "./public-views/Signup"
import ForgotPassword from './public-views/ForgotPassword'
import UpdateProfile from "./member-views/UpdateProfile";

// First page views for each of the parts of the course
import Dashboard from './member-views/Dashboard'
import Masterclass from "./member-views/MainOverview";
import Toolkit from "./member-views/Toolkit";
import AIBuilder from "./member-views/AIBuilder";
import Creative from "./member-views/CreativeLib";

// Create page functions
import CreateLesson from "./member-views/CreateLessson";
import CreateOverview from "./member-views/CreateOverview";

export default function Views() {


    
  return (
    <React.Fragment>
      <Routes>
      <Route path="/"

        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
        ></Route>            
        
        
        <Route path="/masterclass/agenda" component={Masterclass} />

              <Route 
                exact path="/masterclass/phase-1" 
                  component={() => {
                    return (
                      <>
                        <CreateOverview 
                          title="Phase 1: Products"
                        />
                      </>
                      );
                  }} 
                onClick={() => {

                  document.getElementById('loader-container').className = 'loader-container'

                }}
              />




            <Route exact path="/masterclass/phase-2" component={Masterclass} />
            <Route exact path="/masterclass/phase-3" component={Masterclass} />
            
              <Route 
                exact path="/masterclass/phase-1/lesson-1" 
                component={() => {
                  return (
                    <>
                      <CreateLesson 
                        videoId="5L4XMVlDsqM"
                        title="Lesson 1: The 3 Pillars of a Successful Product"
                      />
                    </>
                    );
                }} 
              />

              <Route 
                exact path="/masterclass/phase-1/lesson-2" 
                component={() => {
                  return (
                    <>
                      <CreateLesson 
                        videoId="MdO1AKVTkLI"
                        title="Lesson 2: How To Find A Winning Product"
                      />
                    </>
                    );
                }} 
              />
              
            
            <Route path="/update-profile" component={UpdateProfile} />
            <Route path="/toolkit" component={Toolkit} />
            <Route path="/ai" component={AIBuilder} />
            <Route path="/creative" component={Creative} />

            
            <Route path="/sign-up" component={Signup} />
            <Route exact path="/login" element={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Navigate to='/' />
          </Routes>
          </React.Fragment>
  )
}
