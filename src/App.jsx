import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/about'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'
import Video from './Components/Video/Video'

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