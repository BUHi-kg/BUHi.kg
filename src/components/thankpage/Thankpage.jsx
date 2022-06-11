import React from 'react'
import logo from '../assets/Vector(1).png'
import './thankpage.css'

export default function Thankpage() {
  return (
    <div className='thankpage'>
        <div className='container1'>
            <div className="logo1">
                <img src={logo} alt="log" />
            </div>
            <div className="text">

            <div className="text1">
                <p>Спасибо за вашу регистрацию</p>
            </div>
            <div className="text2">
                <p>Доступ будет отправлен на вашу почту после проверки модератором </p>
            </div>
            </div>
        </div>
    </div>
  )
}
