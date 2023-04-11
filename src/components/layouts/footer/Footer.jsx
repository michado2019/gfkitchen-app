import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export const Footer = () => {
  return (
    <div className='footerWrapper'>
        <div className='footerContents-flex'>
            <div><Link to='/' className='headerGF-kitchen'>GFkitchen</Link></div>
            <div className='footerContents-flex_1'>
                <div className='footerContents-flex_home'><Link to='/' className='footerLinks'>Home</Link></div>
                <div className='footerContents-flex_about'><a href='#about' className='footerLinks'>About us</a></div>
                <div className='footerContents-flex_services'><a href='#services' className='footerLinks'>Services</a></div>
            </div>
            <div className='footerContents-flex_2'>
            <div className='footerContents-flex_staffs'><Link to='/admin' className='footerMd-link'>Admin</Link></div>
                <div className='footerContents-flex_staffs'><a href='#ourChefs' className='footerLinks'>Our Staffs</a></div>
                <div className='footerContents-flex_staffs'><Link to='/meetOurMD' className='footerMd-link'>Our MD</Link></div>
            </div>
            <div className='footerContents-flex_3'>
                <h2 className='footerContents-flex_need'>You need a website?</h2>
                <div className='footerContents-flex_contact'>Contact us @ <a href='mailto: adeshinaobafemi09@gmail.com' className='footerCompany'>Michado</a></div>
                <p className='footerContents-flex_rights'> All rights reserved &copy; </p>GF kitchen 2023.
            </div>
        </div>
    </div>
  )
}
