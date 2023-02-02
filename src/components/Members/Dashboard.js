import React, { useState, useEffect } from 'react'
import Loader from '../../Images/Loader.svg'

export default function Dashboard() {

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
      <h2>Dashboard</h2>
    </div>
    </>
  )
}
