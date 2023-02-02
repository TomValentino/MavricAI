import React, { useState, useEffect } from 'react'
import Loader from '../../Images/Loader.svg'


export default function MyProjects() {

  // Code to hide the loader on page load
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },750)
  }, []);


  return (
    <>
    {loading && (
      <div id="loader-container">
        <div className="loader-bg"></div>
        <img className="loader" src={Loader} />
      </div>
    )}
    <div>
      <h2>My Projects</h2>
      {/* HERE, WE NEED TO ADD IN THE SLIDER, THEN ALSO ADD IN THE SKELENTON LOADING TO FETCH THE SAVED PROJECTS FROM USERS FIREBASE. IF THERE IS NO SAVED FILES, THEN WE NEED TO SHOW A 'CREATE NEW' BUTTON */}
      
    </div>
    </>
  )
}
