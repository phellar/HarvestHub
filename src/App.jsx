import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import OurStory from './Components/OurStory'
import WhyChooseUs from './Components/WhyChooseUs'
import FeaturedService from './FeaturedService'
import Testimonial from './Components/Testimonial'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
import Cta from './Components/Cta'


function App() {

  const [isToggle, setIsToggle] = useState(false)

  const toggleNav = ()=>{

    setIsToggle(!isToggle)
  }

    
  

  return (
    <>
      <Hero isToggle={isToggle} setIsToggle={setIsToggle} toggleNav={toggleNav}        />
      <OurStory/>
      <WhyChooseUs/>
      <FeaturedService/>
      <Testimonial/>
      <Blog/>
      <Cta/>
      <Footer/>
    </>
  )
}

export default App
