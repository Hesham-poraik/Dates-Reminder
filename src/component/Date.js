import React from 'react'
import cardImg from '../pngwing.com.png'
const Date = ({info}) => {
  const newLocal = 'Card Image'
  return (
    <div className='reminderCard'>
      <img src={cardImg} alt={newLocal} width='80px' height='auto'/>
      <div className='info'>
        <h3>{info.name}</h3>
        <p>{info.date}</p>
      </div>
    </div>
  )
}

export default Date
