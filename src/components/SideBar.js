import React, { useState } from "react";
import { Link } from 'react-router-dom'

import CreateMainMenuItem from "./member-views/CreateMenuItem";
import CreateSubMenuItem from "./member-views/CreateSubMenuItem";

import Logo from '../images/logo.svg'
import DashIcon from '../images/menu/DashIcon.svg'
import TrainingIcon from '../images/menu/TrainingIcon.svg'
import ToolkitIcon from "../images/menu/ToolkitIcon.svg";
import AIIcon from "../images/menu/AIIcon.svg";
import CreativeLibIcon from "../images/menu/CreativeLibIcon.svg";


import StoreImage from "../images/menu/StoreImage.svg";
import SelectorArrows from "../images/menu/SelectorArrows.svg";


import AccountImage from "../images/menu/AccountImage.svg";
import AccountDots from "../images/menu/AccountDots.svg";


import AccountModal from "./Modals/AccountModal";
import StoreModal from './Modals/StoreSelectorModal'
import CreateNewProjectModal from "./Modals/NewProjectModal";



export default function SideBar() {

    const [showPopUp, setShowPopUp] = useState(false);
    // const [showSideBar, setShowSideBar] = useState(true);
    const [accountModal, setAccountModal] = useState(false);
    const [storeModal, setStoreModal] = useState(false);
    
  
    const closeAccountModal = () => {
      setAccountModal(false)

    }

    const closeStoreModal = () => {
      setStoreModal(false)

    }

    



    
  
  return (
    <>
    {/* {showSideBar && ( */}

      

        <div className="sidebar-menu">
          <div className="side-top-area">
            <div className="logo-container">
              <Link to="/">
                <img src={Logo} alt="logo" className="logo" />
              </Link>
            </div>
            <div className="menu-items-container">
              <CreateMainMenuItem 
              url="/" 
              id = "dashboard"
              id2 = "dashboard-bg"
              imgSrc={DashIcon} 
              text="Dashboard"
            
             />
              <CreateMainMenuItem 
                url="/masterclass/agenda" 
                id = "agenda"
                id2 = "agenda-bg"
                imgSrc={TrainingIcon} 
                text="Core Training" />
              <CreateSubMenuItem 
                url="/masterclass/agenda" 
                id="agenda" 
                text="Agenda"
                number="1" 
              />
              <CreateSubMenuItem 
                url="/masterclass/phase-1" 
                id="phase-1" 
                text="Phase 1: Products" 
                number="4"
              />
              <CreateSubMenuItem 
                url="/masterclass/phase-1/lesson-1" 
                id="phase-2" 
                text="Phase 2: Store Builder" 
                number="16"
              />
              <CreateSubMenuItem 
                url="/masterclass/phase-1/lesson-2" 
                id="phase-3" 
                text="Phase 3: The Roll Out" 
                number="16"
              />
              <div className="menu-items-border"></div>
            </div>
            <div className="other-programs-container">
              <CreateMainMenuItem 
                url="/projects" 
                id = "toolkit"
                id2 = "toolkit-bg"
                imgSrc={AIIcon} 
                text="My Projects" 
                number="9">
                  <div className='menu-item-new'>New</div>
              </CreateMainMenuItem> 
            
        
            </div>
          </div>
          <div className="side-bottom-area">
            <div className="store-selector-container" 
            onClick={() => { setStoreModal(true) }}>
              <div className="flex-wrapper">
                <img className="s-selector-image" src={StoreImage} alt="" />
                <div className="s-selector-div">
                  <div className="s-selector-store-name">UGRO HQ</div>
                  <div className="s-selector-store-url">https://app.ugrohq.com</div>
                </div>
              </div>
              <div className="arrow-wrapper">
                <img className="s-selector-arrow" src={SelectorArrows} alt="" />
              </div>
            </div>

            <div className="account-wrapper" >
                  
                  <div className="account-container no-select" 
          
                  onClick={() => { setAccountModal(true) }}>
                  <div className="act-container">
                      <img className="account-image" src={AccountImage} alt="" />
                      <div className="account-text">Tom Valentino</div>
                  </div>
                  <img className="account-dots" src={AccountDots} />
                  </div>
          </div>

                
          </div>

          {/* If account modal state = true (on click), show this */}
          {accountModal && (
            <div className="popup-container">

              <AccountModal closeAccountModal={closeAccountModal} />
             
            </div>
              )
          }
              
          {/* To Render Store Selector On Click */}
          {storeModal && (
            <div className="popup-container">

              <StoreModal closeStoreModal={closeStoreModal} />
             
            </div>
              )
          }
              
  




        </div>


    {/* )} */}
    </>
  )
}
