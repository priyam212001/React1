import React from 'react'
import Priyam_Resume from '../../assests/Priyam_Resume.png';


const CTA = () => {
  return (
    <div className='cta'>
        <a href={Priyam_Resume} download className='btn'>DOWNLOAD  CV</a>
        <a href="#contact" className='btn btn-primary'>LET's TALK</a>
    </div>
  )
}

export default CTA