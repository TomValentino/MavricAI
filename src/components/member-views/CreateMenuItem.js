import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainMenuItem({ url, test, id, id2, imgSrc, text, children, number }) {

  const activeLink = "active-menu-item";
  const normalLink = "nonactive";


  return (

    <NavLink to={ url } 
    // className={ () => {
    //   setTimeout(() => {
    //     if (props.url === window.location.pathname) {
    //       return activeLink
    //     } else {
    //       return normalLink
    //     }
    //   },0) 
    // }}
    //   onClick={
    //     () => {

    //       document.getElementById(props.id).className="menu-active-bg"



    //   }
    // }
    >
      <div className="" id={ id } >
        <div className="main-item-container no-select" id={ id2 }>
            <div className="menu-item-col1">
                <div className="menu-item-icon">
                    <img src={ imgSrc } alt="" />
                </div>
                <div className="menu-item-text">{ text }</div>
                { children }
            </div>
            <div className="menu-item-col2">
                    <div className="menu-item-number">
                        { 
                        
                        number }
                    </div>
                  </div>
            <div id="active-point-training"></div>
        </div>
      </div>
    </NavLink>
  )
}
