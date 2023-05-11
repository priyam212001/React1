import React from 'react'
import './about.css';
import me2 from '../../assests/me2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BiFolder} from 'react-icons/bi'

const about = () => {
  return (
    <section id='about'>
      <h5>GET TO KNOW</h5>
      <h2>ABOUT ME</h2>

      <div className="container about__container">
        <div className="about__me">
           <div className="about__me-image">
            <img src={me2} alt=' About Image' />
           </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Linkedin Connections </h5>
              <small>150+ users</small>
            </article>

            <article className='about__card'>
              <BiFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Projects</small>
            </article>
          </div>
          <p>
          Detail oriented and inquisitive individual , with efficiency in Java and algorithms and looking for
opportunities and exposure in the technological corporate world to fulfil my passion towards Coding and
Networking , and contribute to organizational growth along with personal skill development.

          </p>
         

          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default about