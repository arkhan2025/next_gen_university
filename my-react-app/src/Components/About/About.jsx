import React from 'react'
import './About.css'
import aboutimg from '../../assets/about.png'
import playicon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="aboutleft">
        <img src={aboutimg} alt='' className='aboutimg'/>
        <img src={playicon} alt='' className='playicon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="aboutlright">
            <h3>About University</h3>
            <h2>Preparing Tommorow's Leaders</h2>
            <p>Our university is committed to nurturing the potential of every student by providing a supportive
                 and dynamic learning environment. We focus on developing both academic skills and real-world experience.</p>
            <p>With a curriculum designed to foster critical thinking and creativity, we prepare students to tackle
                 the challenges of a rapidly changing world. Our faculty are dedicated to guiding learners toward success.</p>
            <p>We believe in empowering future leaders through innovation, collaboration, and ethical decision-making.
                 Our programs encourage students to become proactive contributors to society.</p>
            <p>Beyond academics, we emphasize personal growth and community engagement, ensuring that our graduates are
                 well-rounded individuals ready to lead with confidence and compassion.</p>

        </div>
        </div>
  )
}

export default About