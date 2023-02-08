import React from 'react'
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter,AiFillInstagram} from 'react-icons/ai'
import {RiWhatsappFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer-wrap'>
            <div className='foot-img'>
              <img  className='footer-img' src='/logo.png' />
              <hr className='foot-line'/>
              <p className='footed-p'>
                About Medical Consultation and Support <br/>
                @2023 Good Health. All right reserved.
              </p>
            </div>
            <div>
              <div>
                <MdEmail className='foot-icons' fontSize={25} color="#D9D9D9"/>
                <FaFacebook className='foot-icons' fontSize={25} color="#D9D9D9"/>
                <AiFillInstagram className='foot-icons' fontSize={25} color="#D9D9D9"/>
                <AiOutlineTwitter className='foot-icons' fontSize={25} color="#D9D9D9"/>
              </div>
              <p className='footed-p'>
                Support: Health360@gmail.com
              </p>
            </div>
        </div>
    </div>
  )
}

export default Footer