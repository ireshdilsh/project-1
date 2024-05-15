import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../images/Untitled design (1) (2).png"

// import style sheet

import "../styles/components/header.css"
function Header() {
  return (
    <div>

<div className="header">
      <div className="main-content">
        <div className="untitled-design-1-2-1-parent">
          <img
            className="untitled-design-1-2-1"
            alt=""
            src={img1}
          />
          <div className="samira-hadid">SAMIRA HADID</div>
        </div>
        <div className="book-club">Book Club</div>
      </div>
      <div className="service-list-wrapper">
        <div className="service-list">
          <div className="service1">Service</div>
          <div className="service2">Service</div>
          <div className="service3">Service</div>
          <div className="service4">Service</div>
          <div className="service5">Service</div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Header