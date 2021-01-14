import React from 'react';
import logo from '../image/logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav>
            <div className="wrapper">
            <div className="logo"><a href="#"><img src={logo} alt="logo" /></a></div>
      <input type="radio" name="slider" id="menu-btn"/>
      <input type="radio" name="slider" id="close-btn"/>
      <ul class="nav-links">
        <label for="close-btn" class="btn close-btn"><i classclasclassName="fas fa-times"></i></label>
        <li><a href="#">Home</a></li>
        <li><a href="#">Apps Development</a></li>
        <li>
          <a href="#" className="desktop-item">About</a>
          <input type="checkbox" id="showDrop"/>
          <label for="showDrop" className="mobile-item">Dropdown Menu</label>
          <ul className="drop-menu">
            <li><a href="#">Company Profile</a></li>
            <li><a href="#">Team</a></li>
          </ul>
        </li>
        <li>
          <a href="#" className="desktop-item">Services</a>
          <input type="checkbox" id="showMega"/>
          <label for="showMega" class="mobile-item">Services</label>
          <div className="mega-box">
            <div class="content">
                 <div className="row">
                 <div className="Domain">
                    <header>Domain & hosting</header>
                    <ul class="mega-links">
                  <li><a href="#">Domain Registation</a></li>
                  <li><a href="#">Shared Hosting</a></li>
                  <li><a href="#">Dedicated Hosting</a></li>
                  <li><a href="#">Reseller Hosting</a></li>
                </ul>
                    </div>
                 </div>
                 <div className="row">
                    <div className="Domain">
                    <header>Web site</header>
                    <ul class="mega-links">
                  <li><a href="#">Web Design & Development</a></li>
                  <li><a href="#">Wordpress  Development</a></li>
                  <li><a href="#">E Commerce Website Development</a></li>
                </ul>
                    </div>
                 </div>
                 <div className="row">
                 <div className="Domain">
                    <header>Software</header>
                    <ul class="mega-links">
                  <li><a href="#">Accounting Inventory Software </a></li>
                  <li><a href="#">Shared Hosting</a></li>
                  <li><a href="#">Dedicated Hosting </a></li>
                  <li><a href="#">Reseller Hosting</a></li>
                </ul>
                    </div>
                 </div>
                 <div className="row">
                 <div className="Domain">
                    <header>Degital Marketing</header>
                    <ul class="mega-links">
                  <li><a href="#">Domain Registation</a></li>
                  <li><a href="#">Shared Hosting</a></li>
                  <li><a href="#">Dedicated Hosting</a></li>
                  <li><a href="#">Reseller Hosting</a></li>
                </ul>
                    </div>
                 </div>
            </div>
          </div>
        </li>
        <li><a href="#">Contuct</a></li>
      </ul>
      <label for="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;