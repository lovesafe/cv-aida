import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {IoMdBookmarks} from 'react-icons/io'
import {AiFillFile} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/'> <FaHome/> Home</Link></li>
                <li><Link to='/about'> <FaUser/> Profile</Link></li>
                <li><Link to='/experience'> <IoMdBookmarks/> Experience</Link></li>
                <li><Link to='/portfolio'> <AiFillFile/> Portfolio</Link></li>
                <li><Link to='/contact'> <BsTelephone/> Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav