import React from 'react';
import './HeaderLeft.css';

export default function HeaderLeft({headerLogo}) {

  return (
    <div className='containerLeftHeader'>
        <img src={headerLogo} alt={headerLogo} className='leftHeaderImg'/>
        <div className='containerApplication'>
            <h1 className='headerOne'>УДОБНАЯ БУХГАЛТЕРИЯ ДЛЯ ВАШЕГО БИЗНЕСА</h1>
            <h4 className='headerTwo'>Выберите способ ведения бухгалтерии и освободите время для решения важных задач</h4>
            <div className='containerBTN'>
                <button className='btnApplic'>Оставить заявку</button>
                <button className='btnTariffs'>Тарифы</button>
            </div>
        </div>
    </div>
  )
}
