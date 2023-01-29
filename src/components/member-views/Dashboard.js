import React, { useState, useEffect } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { firestore } from "../../Firebase"

import Loader from "../loader.svg";


function Dashboard() {


  console.log('dashy')
  document.title = "Dashboard"

  // Code to hide the loader on page load
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },500)
  }, []);


  return (
    <>
      {loading && (

        <div id="loader-container">
          <div className="loader-bg"></div>
          <img className="loader" src={Loader} />
        </div>
        
      )}

      <div className="content-wrapper">
        <div className="reviewAppIdea">

          <h2>Dashboard</h2>
    
          <h4>Review App Idea, So Much MONEY</h4>
          <input type="text" name="reviewAppIdea" id="reviewAppIdea" />
          <button onClick={() => {

            var tom = document.getElementById('reviewAppIdea').value
            console.log(tom)

            }}>Submit</button>


        </div>
      </div>




    </>
  )

 
}

export default Dashboard;





