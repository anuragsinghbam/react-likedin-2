import React from 'react'
import InputField from './InputField'

export default function ProfileInput() {
  return (
    <div className='profile-input'>
      <InputField
        icon='images/email.svg'
        title='Email'
        value='johndoe@gmail.com'
      />
      <InputField
        icon='images/phone.svg'
        title='Phone'
        value='+1 6709877556'
      />
      <InputField
        icon='images/linkedin.svg'
        title='LinkedIn'
        value='linkedin.com/johndoe'
      />
      <InputField
        icon='images/instagram.svg'
        title='Instagram'
        value='instagram.com/johndoe'
      />
      <InputField
        icon='images/twitter.svg'
        title='Twitter'
        value='twitter.com/johndoe'
      />
    </div>
  )
}
