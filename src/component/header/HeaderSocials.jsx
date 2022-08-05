import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='Header__Socials'>
            <a href="https://Instagram.com" target="blank"><BsInstagram/></a>
            <a href="https://Whatsapp.com" target="blank"><BsWhatsapp/></a>
            <a href="https://gmail.com" target="blank"><SiGmail/></a>
        </div>

    )
}

export default HeaderSocials