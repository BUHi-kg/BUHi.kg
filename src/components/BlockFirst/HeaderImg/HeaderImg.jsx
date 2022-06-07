import React from 'react'
import './HeaderImg.css'

export default function HeaderImg({ triggerLineImg, circleImg}) {
  return (
    <div>
        <img src={triggerLineImg} alt={triggerLineImg} className='triggerLine'/>
        <img src={circleImg} alt={circleImg} className='circleImg' />
    </div>
  )
}
