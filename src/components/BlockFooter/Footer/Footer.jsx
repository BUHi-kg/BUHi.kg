import React, { useState } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { MdOutlineLocationOn } from 'react-icons/md'
import logoFooter from '../../assets/LogoFooter.png'
import whatsApp from '../../assets/whatsapp.png'
import instagram from '../../assets/Instagram.png'
import telegram from '../../assets/Telegram.png'
import './Footer.css'
import Modal from './../../Modal/Modal';
import FormFSC from './../../BlockFirst/FormFSC/FormFSC';



export default function Footer({linkServices, linkTariffs, linkHowItWorks, linkFAQ}) {

    const [isFormFSC, setFormFSC] = useState(false);

    const openFormFSC = () =>{
      setFormFSC(true)
    }
  
    const closeFormFSC =() =>{
      setFormFSC(false)
    }

  return (
    <div className='footerConteiner'>

        <div className= 'topOfFooter'>

            <div className='footerLogo'>
                <img src={logoFooter} alt={logoFooter} className="logoFooter"/>
                <h4 className='footerLogoh4'>Бухгалтерия - это просто, потому что есть Buhi</h4>
                <button type="button" className='footerLogoBtn'  onClick={openFormFSC}>Оставить заявку</button>
            </div>
            
            <div>
            <ul className="navbar-footer">
                    <li className="navItemOne"><a className="nav-linkF js-scroll-trigger" href={linkServices} >
                        Услуги
                    </a></li>
                    <li className="navItemTwo"><a className="nav-linkF js-scroll-trigger" href={linkTariffs}>
                        Тарифы
                    </a></li>
                    <li className="navItemThree"><a className="nav-linkF js-scroll-trigger" href={linkHowItWorks}>
                        Как это работает?
                    </a></li>
                    <li className="navItemFour"><a className="nav-linkF js-scroll-trigger" href={linkFAQ}>
                        FAQ
                    </a></li>
                </ul>
            </div>

            <div className='footerContacts'>
                <h4 className='contscts'><BsTelephone/> +996 (999) 999-999</h4>
                <h4 className='contscts'><AiOutlineMail/> buhi@gmail.com</h4>
                <h4 className='contscts'><MdOutlineLocationOn/> г. Бишкек, ул. Исанова 105/3</h4>
            </div>

        </div>

        <div className='messengersContainer'>
            <img src={whatsApp} alt={whatsApp} className='whatsApp'/>
            <img src={instagram} alt={instagram} className='instagram' />
            <img src={telegram} alt={telegram} className='telegram'/>
        </div>

        <h6 className='h6Footer'>2022 © Все права защищены</h6>

        {isFormFSC && (
        <Modal close={closeFormFSC}>
          <FormFSC/>
        </Modal>
      )}
    </div>
  )
}
