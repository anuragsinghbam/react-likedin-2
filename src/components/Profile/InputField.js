import React from 'react'

export default function InputField(props) {
  return (
    <div className='input-field'>
      <div className='main-details'>
        <img className='input-field-icon' src={props.icon} />
        <div className='input-text'>
          <h4>{props.title}</h4>
          <h6>{props.value}</h6>
        </div>
      </div>
      <img className='input-field-icon-right' src='images/right-arrow.svg' />
    </div>
  )
}
