import React from 'react'
import Expert from "../assets/mentor.png"
import Sustainabe from "../assets/carbon_sustainability.png"
import Smart from "../assets/uil_technology.png"
import Community from "../assets/fluent_people-community-32-regular.png"
import Ad from "../assets/havesthero.jpg"

const WhyChooseUs = () => {
  return (
    <section className='why-choose-us'>
      <div className="container">
           <h2>Why Choose <span className='highlight'>HarvestHub ?</span> </h2>

           <div className="card-group">
              <div className="card">
                  <div className="card-svg">
                      <img src={Sustainabe} alt="mentor svg" />
                  </div>
                  <p>Sustainable Solutions </p>
                  <small>Embrace eco-friendly practices with our range of sustainable farming solutions.
                     From organic fertilizers to water conservation techniques, we empower farmers to 
                     cultivate responsibly.</small>
                            </div>
                                <div className="card">
                                      <div className="card-svg">
                                           <img src={Smart} alt="mentor svg" />
                                        </div>
                                        <p>Smart Farming Technologies </p>
                                        <small>
                                            Discover the power of precision agriculture with our state-of-the-art technologies. Monitor crops in 
                                            real-time, 
                                            optimize resource usage, and make data-driven decisions to maximize yields..
                                        </small>
                                  </div>
                                     
                              <div className="card">
                                  <div className="card-svg">
                                      <img src={Expert} alt="mentor svg" />
                                  </div>
                                  <p>Expert Guidance </p>
                                  <small>Access a wealth of knowledge from seasoned agronomists and industry experts. Our team is dedicated
                                     toproviding personalized advice, ensuring your farm reaches its full potential.</small>
                              </div>

                                <div className="card">
                                    <div className="card-svg">
                                        <img src={Community} alt="mentor svg" />
                                    </div>
                                    <p>Community Collaboration </p>
                                    <small>Join a thriving community of farmers, researchers, and agri-enthusiasts. Share experiences, 
                                      learn from others, and contribute to the collective growth of agriculture.</small>
                                </div>
           </div>
           
           <div className="Ad"></div>
               
      </div>
    </section>
  )
}

export default WhyChooseUs