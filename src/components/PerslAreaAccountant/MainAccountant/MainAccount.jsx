import React from 'react'
import MenuAccountant from '../MenuAccountant/MenuAccountant'
import TableAccountant from '../TableAccountant/TableAccountant'
import './MainAccountant.css'


export default function MainAccount() {
  return (
    <div>
        <MenuAccountant/>
        <div className='tableAccountant'>
           <TableAccountant/>
        </div>
    </div>
  )
}
