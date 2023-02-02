import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from  '../../Contexts/AuthContext'

import Logo from '../../Images/Logo.svg'
import Account from '../../Images/Account.svg'


export default function MainSideBar() {

    const { currentUser, updatePassword, updateEmail } = useAuth() 

    function HideSideBar () {
        document.querySelector('.sidebar-modal-container').classList.add('hidden')
      }
      
return (
    <div className="sidebar-modal-container hidden">
    <div className="sidebar-modal-bg" onClick={HideSideBar}></div>
    <div className="sidebar-modal-slider">
        <img alt="" src={Logo} />
        <div className="sidebar-menu-container">
            <Link to="/" onClick={HideSideBar}>Dashboard</Link>
            <Link to="/projects" onClick={HideSideBar}>My Projects</Link>
        </div>
        <div className="sidebar-bottom-area-container">
            <div className="sidebar-account-container">
                <div className="sidebar-account-inner-container">
                    <img alt="" src={Account} />
                    <div>{currentUser.email}</div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
