import React from 'react'
import './Navbar.css';
import { MdEast } from 'react-icons/md';

const Navbar = () => {
  return (
    <div>
    <header class="header">
            <img className='logo' src={process.env.PUBLIC_URL + '/logo.png'} alt='brand-logo' />
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
            <li className=''><a href='#'>Pricing</a></li>
            <li className=''><a href='#'>About us</a></li>
            <li className=''><a href='#'>Tutorials</a></li>
            <li className=''><a href='#'>Blog</a></li>
            <li className=''><a href='#'>Resources</a></li>
            <button className='sign-in-button' type='button'>Sign In</button>
            <button className='sign-up-button' type='button'>Sign Up <MdEast /></button>
        </ul>
    </header>
  </div>
  )
}

export default Navbar;