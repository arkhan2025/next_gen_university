import React from 'react'
import './Hero.css'
import darkarrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='herotext'>
        <h1>We Ensure Complete Education For Future World</h1>
        <p>
          We are dedicated to providing a comprehensive and forward-thinking
          education that prepares students to thrive in the challenges and
          opportunities of tomorrow’s world.
        </p>
        <button className='btn'>Explore More<img src={darkarrow} alt=""/></button>
      </div>
    </div>
  )
}

export default Hero
