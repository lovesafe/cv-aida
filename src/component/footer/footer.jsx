import React from 'react'
import './footer.css'
import {MdEmail} from 'react-icons/md'
import {FaInstagram} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'

const footer = () => { 
return (
  <footer id='footer'>
    <a href='#' className='footer__logo'>AIDA RAHMA SMKN 1 KOTA BEKASI</a>

    <div className='footer__social'>
      <a href="https://mail.google.com/" target="_blank"><MdEmail/></a>
      <a href="https://instagram.com/aidaarhmaa?igshid=YmMyMTA2M2Y=" target="_blank"><FaInstagram/></a>
      <a href="https://www.tiktok.com/@daisytush?_t=8UZDxOBFcnK_r=1" target="_blank"><FaTiktok/></a>
    </div>

    <div className='footer__kopirek'>
      <small>&copy; Aida Rahma<br/>All right reserved.</small>
    </div>
  </footer>
)
}

export default footer