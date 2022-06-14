import React from 'react'
import "./TableAccountant.css"

export default function TableAccountant() {
  return (
    <div className='containerTable'>
        <div className='titleTable'>Заявки</div>
        <div className='fieldsTable'>
            <div className='nameTable'>Название компании</div>
            <div className='dateTable'>Дата</div>
            <div className='priceTable'>Стоймость</div>
        </div>
    </div>
  )
}
