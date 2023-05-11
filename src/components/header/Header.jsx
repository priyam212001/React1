import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assests/me.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Priyam Mishra</h1>
        <h5 className="test-light">FULLSTACK DEVELOPER</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
        <img src={ME} alt='me' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header