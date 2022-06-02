
import React from 'react'
import './HeaderRight.css'

export default function HeaderRight({
  linkServices,
  linkTariffs,
  linkHowItWorks,
  imgRightHeader,
}) {
  return (
    <div className='rightHeaderContainer'>
        <div className='topNavigationContainer'>

              <ul class="navbar-nav">
                  <li class="navItemOne"><a class="nav-link js-scroll-trigger" href={linkServices} >
                    Услуги
                  </a></li>
                  <li class="navItemTwo"><a class="nav-link js-scroll-trigger" href={linkTariffs}>
                    Тарифы
                  </a></li>
                  <li class="navItemThree"><a class="nav-link js-scroll-trigger" href={linkHowItWorks}>
                    Как это работает?
                  </a></li>
              </ul>

              <div className='btnContainer'>
                <button className='btnSignIn'>Войти</button>
                <button className='btnSignUp'>Регестрация</button>
              </div>
        </div>

        <img src={imgRightHeader} alt={imgRightHeader} />
    </div>
  )
}
