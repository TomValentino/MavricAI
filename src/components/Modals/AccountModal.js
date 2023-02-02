import React, { useState } from 'react'
import { useAuth } from "../../Contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"


import Logo from '../../Images/Logo.svg'

function AccountModal({ closeAccountModal }) {

  const [accountModal, setAccountModal] = useState(false);
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useNavigate()      

   // Log out function
   async function handleLogout() {
    setError("")
    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  
  }



  // Another logout attempt

  // setTimeout(function(){

  //   const tomLogout = document.querySelector('#logout')
  // tomLogout.addEventListener('click', (e) => {
  //   e.preventDefault()
  //   auth.signOut().then(() => {
  //     console.log('user signed out')
  //   })
  // })


  // },0)







  return (

    <>

    <div className="account-modal-container">

      <div className="account-modal-bg" onClick={closeAccountModal}></div>
      <div className="account-modal-slider">


        <h1>Howdy cunt fucker</h1>


        <div>
        <div>
          <h2 className="">Profile</h2>
          {error && alert({error})}
          
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="">
            Update Profile
          </Link>
        </div>
      </div>
      <div>
        <button id="logout" onClick={handleLogout}>
          Log Out
        </button>
      </div>
        
        
      </div>  

      </div>
    
    
    </>
  
  
  
    )
   
}


export default AccountModal;