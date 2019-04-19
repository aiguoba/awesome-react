import React from 'react'
import Parcel from '../../assets/parcel.png'
import './index.scss'

const Header = () => (
  <header>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={Parcel} alt="" />
        </a>
      </div>
    </nav>
  </header>
)

export default Header
