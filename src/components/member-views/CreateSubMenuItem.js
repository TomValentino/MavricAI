import React from 'react'
import { Link } from 'react-router-dom'

export default function SubMenuItem(props) {
  return (
    <Link to={ props.url } className="" >
    <div className="training-sub-menu no-select">
      <div className="sub-menu-container" id={ props.id }>
        <svg className="sub-menu-circle" id="active-sub-menu" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3" cy="3" r="2.6" fill="#CAD4E3" fillOpacity="0.24" stroke="#CAD4E3" strokeWidth="0.8"/>
        </svg>

        <div className="sub-menu-item">
          <div className="sub-menu-item-text">{ props.text }</div>
          <div className="menu-item-number">{ props.number }</div>
        </div>

      </div>
      <div id="active-menu-point-agenda"></div>
    </div>
  </Link>
  )
}
