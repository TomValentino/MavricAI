// Generic stuff
import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

// Login and account stuff
import Login from './Public/Login'
import Signup from "./Public/Signup"
import ForgotPassword from './Public/ForgotPassword'

// First page views for each of the parts of the course
import Dashboard from './Members/Dashboard'


// export default function Views() {


    
//   return (
//     <React.Fragment>
//       <Routes>
//         <Route path="/"

//           element={
//             <PrivateRoute>
//               <Dashboard />
//             </PrivateRoute>
//           }
//           ></Route>            
       
      
//         <Route path="/sign-up" component={Signup} />
//         <Route exact path="/login" element={Login} />
//         <Route path="/forgot-password" component={ForgotPassword} />
//         <Navigate to='/' />
//       </Routes>
//     </React.Fragment>
//   )
// }
