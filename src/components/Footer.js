import React from 'react';
import { FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import './Footer.css';
import { MdArrowRightAlt } from "react-icons/md";

const year = (new Date().getFullYear());

const Footer = () => {


  return (
    <div>
      <div className='container-fluid footer-container'>
        <div className='row'>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12'>
            <img className='footer-image' src={process.env.PUBLIC_URL + '/logo.png'} alt='brand-logo' /><br />
            <a className='brand-link' href='/'>Terms | </a> 
            <a className='brand-link' href='/'>Privacy Policy</a>
          </div>
          <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 products-col'>
            <h6 className='footer-header'>Products</h6>
            <ul>
              <li className='footer-link'>Web Studio</li>
              <li className='footer-link'>DynamicBox Flex</li>
              <li className='footer-link'>Programming Box</li>
              <li className='footer-link'>Integrations</li>
              <li className='footer-link'>Command-line</li>
            </ul>
          </div>
          <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 resources-col'>
            <h6 className='footer-header'>Resources</h6>
            <ul>
              <li className='footer-link'>Web Studio</li>
              <li className='footer-link'>DynamicBox Flex</li>
              <li className='footer-link'>Programming Box</li>
              <li className='footer-link'>Integrations</li>
              <li className='footer-link'>Command-line</li>
            </ul>
          </div>
          <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 company-col'>
            <h6 className='footer-header'>Company</h6>
            <ul>
              <li className='footer-link'>Web Studio</li>
              <li className='footer-link'>DynamicBox Flex</li>
              <li className='footer-link'>Programming Box</li>
              <li className='footer-link'>Integrations</li>
              <li className='footer-link'>Command-line</li>
            </ul>
          </div>
          <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 subscribe-col'>
            <h6 className='footer-header'>Subscribe</h6>
            <p className='subscribe-para'>Get the latest news and articles to your inbox every month.</p>
            <div className="subscribe-email">
            <input className='subscribe-input' type='text' placeholder='Your email' />
            <button className='footer-button'>
                <MdArrowRightAlt className='subscribe-arrow'  />
            </button>
            </div>
          </div>
        </div>
        <div className='row copyright-row'>
          <div className='col-xl-9 col-lg-9 col-md-6 col-sm-6 copyright-col'>&copy; {year} Landing. All rights reserved.</div>
          <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 icon-col'>
            <div className='circle'>
            <FaTwitter className='footer-icon twitter-icon' />
            </div>
            <div className='circle'>
            <FaInstagram className='footer-icon instagram-icon' />
            </div>
            <div className='circle'>
            <FaDiscord className='footer-icon discord-icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;