import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Programs from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Contacts from './Components/Contacts/Contacts.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Video from './Components/Video/Video.jsx'

const App = () => {
  const [playState, setPlayState] = useState (false);



  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className="container">
      <Title subTitle='Our Program' title='What we offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallary' title='Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title="Students' Quotes"/>
      <Testimonials/>
      <Title subTitle='Contact us' title="Get in touch"/>
      <Contacts/>
      <Footer/>
     </div>
     <Video playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App