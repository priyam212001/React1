import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/priyam-mishra-31843a205/' target='__blank' ><BsLinkedin/></a>
      <a href='https://github.com/priyam212001' target='__blank' ><FaGithub/></a>
      <a href='https://dribble.com' target='__blank' ><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials