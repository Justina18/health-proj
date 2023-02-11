import React from 'react'
import './User.css'
import {CiFolderOn} from 'react-icons/ci'
import {MdLocationOn} from 'react-icons/md'
import {BsQuestionCircle} from 'react-icons/bs'


const UserPro = () => {
  return (
    <div className='UserPro'>
        <div className='UserPro-wrap'>
          <div className='UserPro-wrap-upper'>
              <div className='UserPro-img-wrap'>
                  <img  className='UserPro-img' src='/profiled.png' />
              </div>
              <div className='UserPro-txt-wrap'>
                  <h2>Jeremy Flames</h2>
                  <button className='UserPro-doc-butt'> <CiFolderOn fontSize={25}/> Documents </button>
                <div className='UserPro-icon-wrap'> <MdLocationOn fontSize={20} color='#006edc'/>Lagos State</div>
              </div>
            </div>
              <div  className='UserPro-wrap-lower-icon'>
              <h3>About </h3>  <BsQuestionCircle/>
              </div>
            <div className='UserPro-wrap-lower'>
                <div className='UserPro-wrap-lower-text-upper'>
                  <div className='UserPro-wrap-lower-text'>
                    <h4>Name:</h4>
                    <p>Jeremy Rose</p>
                  </div>

                  <div className='UserPro-wrap-lower-text'>
                    <h4>Email:</h4>
                    <p>25, Elder street, New York</p>
                  </div>

                  <div className='UserPro-wrap-lower-text'>
                    <h4>Phone:</h4>
                    <p>+234 839 202</p>
                  </div>
              </div>

              <div className='UserPro-wrap-lower-text-lower'>
                <div className='UserPro-wrap-lower-text'>
                  <h4>Gender:</h4>
                  <p>Male</p>
                </div>

                <div className='UserPro-wrap-lower-text'>
                  <h4>Birthday:</h4>
                  <p>June 5, 1992</p>
                </div>

                <div className='UserPro-wrap-lower-text'>
                  <h4>More Info:</h4>
                  <p className='info-inp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>  
            </div>  
        </div>
        <div> 

        </div>
    </div>
  )
}

export default UserPro