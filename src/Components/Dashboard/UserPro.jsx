import React from 'react'
import './User.css'
import {CiFolderOn} from 'react-icons/ci'
import {MdLocationOn} from 'react-icons/md'


const UserPro = () => {
  return (
    <div className='UserPro'>
        <div className='UserPro-wrap'>
            <div className='UserPro-img-wrap'>
                <img  className='UserPro-img' src='/profiled.png' />
            </div>
            <div className='UserPro-txt-wrap'>
                <h2>Jeremy Flames</h2>
                <button className='UserPro-doc-butt'> <CiFolderOn fontSize={20}/> Documents </button>
               <div className='UserPro-icon-wrap'> <MdLocationOn fontSize={24} color='#006edc'/>Lagos State</div>
            </div>
            <div>
                
            </div>
        </div>
        <div> 

        </div>
    </div>
  )
}

export default UserPro