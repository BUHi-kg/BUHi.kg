import React from "react";
import "./MenuAccountant.css"
import circle from "../../assets/Circle.png"
import pngLogo from "../../assets/Logo.png"
import audio from "../../assets/audio.png"
import check from "../../assets/check.png"
import checkPen from "../../assets/checkPen.png"
import exit from "../../assets/exit.png"
import person from "../../assets/person.png"

export default function MenuAccountant({linkApplications, linkConsultations, linkGetApplic, linkProfile, linkExit}) {
  return (
    <div className="MenuAccountantContainer">

      <div className="forBlocksContainer">
          <img src={pngLogo} alt={pngLogo} className="logoMenuAc"/>

            <div className="menuFerstBlock">
                    <li className="menuItemOne"><img src={checkPen} alt={checkPen} className="linImg"/> <a className="menu-link" href={linkApplications} >
                        Заявки
                    </a></li>
                    <li className="menuItemTwo"><img src={audio} alt={audio} className="linImg"/> <a className="menu-link" href={linkConsultations}>
                        Консультации
                    </a></li>
                    <li className="menuItemThree"><img src={check} alt={check} className="linImg"/> <a className="menu-link" href={linkGetApplic}>
                        Принятые заявки
                    </a></li>
            </div>

            <div className="menuFerstBlock">
                    <li className="menuItemFour"><img src={person} alt={person} className="linImg"/> <a className="menu-link" href={linkProfile} >
                        Профиль
                    </a></li>
                    <li className="menuItemFive"><img src={exit} alt={exit} className="linImg"/> <a className="menu-link" href={linkExit}>
                        Выход
                    </a></li>
            </div>
            <img src={circle} alt={circle} className="circleMenuAc"/>

        </div>    
    </div>
  )
}
