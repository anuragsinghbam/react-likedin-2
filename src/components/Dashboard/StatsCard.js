import React from 'react'

export default function StatsCard(props) {
  return (
    <div className='dashboard-card'>
      <div className='dashboard-card-text'>
        <p>{props.title}</p>
        <h4>{props.value}</h4>
      </div>
      <div className='dashboard-card-icon'>
        <img src={props.img} alt='' />
      </div>
    </div>
  )
}
