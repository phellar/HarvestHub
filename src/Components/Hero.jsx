import React from 'react'
import Header from './Header'

const Hero = () => {
  return (
    <section className='hero-section'>
        <div className="overlay">
            <Header/>
                <div className="container">
                    <div className="content-box">
                        <h1>Unlock the Future of Farming<br/> with <span className='highlight'> HarvestHub</span></h1>
                        <p>Explore a world where traditional farming meets cutting-edge <br/> solutions,
                         creating a synergy that propels agriculture into a brighter, <br/>
                          more efficient future.</p>
                        <a href='#' className='cta-1'>Learn More</a>
                    </div>

                </div>
        </div>
   </section>
  )
}

export default Hero