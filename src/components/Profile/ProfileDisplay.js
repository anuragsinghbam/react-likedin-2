import React from 'react'
import ProfileInput from './ProfileInput'

export default function ProfileDisplay() {
  return (
    <div className="profile-display">
      <div className='profile'>
        <div className='user_details'>
          <h1>John Doe</h1>
          <h4 className='web-developer'>Web Developer</h4>
         
          <div className='stats'>
            <div className='stat'>
              <img src='images/views.svg' alt='views' />
              <h6>248</h6>
            </div>
            <div className='stat'>
              <img src='images/comments.svg' alt='views' />
              <h6>38</h6>
            </div>
            <div className='stat'>
              <img src='images/likes.svg' alt='views' />
              <h6>124</h6>
            </div>
          </div>
        </div>
        <div className='user-img'>
          <div className='dp'>
            <img src='images/user.png' alt='user-img' />
          </div>
          <button>Edit Profile</button>
        </div>
      </div>
      <ProfileInput />
    </div>
  )
}