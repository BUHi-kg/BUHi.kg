import React from 'react'
import HeaderLeft from '../HeaderLeft/HeaderLeft'
import HeaderImg from '../HeaderImg/HeaderImg'
import HeaderRight from '../HeaderRight/HeaderRight'

import LogoImg from '../../assets/Logo.png'
import HeaderImage from '../../assets/MainImg.png'
import TwoCirclesImg from '../../assets/Circles.png'
import TriggerLine from '../../assets/TriggerLine.png'
import './Header.css'


export default function () {
  return (
    <div className='headerContainer'>
       <div className='leftRightContainer'>
            <HeaderLeft
            headerLogo={LogoImg}
            />
            <HeaderRight
            imgRightHeader={HeaderImage}/>
      </div>

      <dev className='imgHeader'>
          <HeaderImg
          triggerLineImg={TriggerLine}
          circleImg={TwoCirclesImg}
          />
      </dev>
    </div>
  )
}
