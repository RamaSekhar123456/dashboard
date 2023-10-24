import './heroimg.css'

import React from 'react'
import IntroImg from "../assets/intro-bg1.jpg"
import { Link} from 'react-router-dom'

const Heroimg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
     <img className='introImg' src={IntroImg} alt='introImg'/>
       </div>
       <div className='content'>
        <p>HI, I'M A FREELANCER.</p>
       <h1>React Devloper.</h1>
       <div>
        <Link to="/project" className='btn'>Project</Link>
        <Link to="/contact" className='btn btn-light'>Contact</Link>
       </div>
       </div>
    </div>
  )
}

export default Heroimg