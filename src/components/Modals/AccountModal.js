import React, { useState } from 'react'
import { useAuth } from "../../Contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"


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

  return (
    <>
    <div className="account-modal-container">
      <div className="account-modal-bg" onClick={closeAccountModal}></div>
      <div className="account-modal-slider">
        <h2 className="">Profile</h2>
        {error && alert({error})}
        <strong>Email:</strong> {currentUser.email}
        <Link to="/update-profile" className="">
          Update Profile
        </Link>
        <button id="logout" onClick={handleLogout}>
          Log Out
        </button>
      </div>
      
      </div>  
    </>
    )
   
}


export default AccountModal;