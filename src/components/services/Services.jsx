import React from 'react'
import './services.css';

const Services = () => {
  return (
    <section id='services'>
      <h2>PROJECTS</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>WeSportsClub</h3>
            </div>
            
            <p>Sports Club designed for giving user full access to choose
their courses and trainers of particular sports with their schedule time. I have used Reactjs as frontend and SpringBoot as backend for database MySQL.
</p>
<div  className='buton'>
<a href='https://github.com/priyam212001/WESPORTSCLUB' className='btn ' target ='_blank'>GITHUB</a>
<a href='' className='btn btn-primary ' target ='_blank'>LIVE DEMO</a>
</div>
</article>

{/* ************************** */}
<article className='service'>
<div className='service__head'>
            <h3>STAND BLOG</h3>
            </div>
           
         <p>Working on a blogging website enabling user interactivity by
creating user interface flow, enable database and expose REST APIs for UX interaction and deploy it successfully
</p>
<div  className='buton'>
<a href='https://github.com/priyam212001' className='btn '>GITHUB</a>
<a href='' className='btn btn-primary ' target ='_blank'>LIVE DEMO</a>
</div>
</article>
{/* ****************************** */}
<article className='service'>
<div className='service__head'>
            <h3>ERP Solution for University</h3>
            </div>
           
          <p>Online Assignment module Under campus active- It is a work
between teacher and student panel to complete the whole
assignment activity in semester.Events Sheet module- It is a module in which teacher fill marks and according to that we print results.
</p>
<div  className='buton'>
<a href='https://github.com/priyam212001' className='btn'>GITHUB</a>
<a href='' className='btn btn-primary ' target ='_blank'>LIVE DEMO</a>
</div>
        </article>
      </div>
    </section>
  )
}

export default Services