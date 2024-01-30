import React from 'react'
import { useState } from 'react'
import Avatar1 from "../assets/avatar1.png"
import Avatar2 from "../assets/avatar2.png"


const Testimonial = () => {
    // const [review, setReview] = useState([
    //     {   id: 1,
    //         name: "Biola Fawaz",
    //          job: "Farmer",
    //          image:  "../assets/healthicons_agriculture.png",
    //          review: "HarvestHub has truly transformed my farming experience. The sustainable practices and advanced technologies provided by the platform have significantly increased the efficiency of my operations."
    //     },
    //     {   id: 2,
    //         name: "Hon Phellar",
    //          job: "Farmer",
    //          image: "../assets/healthicons_agriculture.png",
    //          review: "I can't emphasize enough how HarvestHub has elevated my farming practices. The precision farming tools have streamlined my operations, and the sustainable solutions have allowed me to contribute to environmental conservation."
    //     }
    // ])

  return (
    <section className='testimonial'>
        <div className="container">
            <h2>What Our <span className='highlight'>Customer say</span> </h2>

                <div className="testimony" >
                        <div className="testimony-content" >
                            <p>
                            "HarvestHub has truly transformed my farming experience. The sustainable practices and advanced
                             technologies provided bythe platform have significantly increased the efficiency of my operations." 
                            </p>
                            <div className="testimony-info">

                                <img src={Avatar1}/>
                                <div className="">
                                    <p>Biola Fawas</p>
                                    <small>Farmer</small>
                                </div>

                            </div>
                        </div>

                        <div className="testimony-content" >
                            <p>
                            "I can't emphasize enough how HarvestHub has elevated my farming practices. The precision farming tools have streamlined my operations,
                             and the sustainable solutions have allowed me to contribute to environmental conservation."
                            </p>

                             <div className="testimony-info">
                             <img src={Avatar2}/>
                                <div className="">
                                    <p>Biola Fawas</p>
                                    <small>Farmer</small>

                                </div>
                            </div>
                            
                        </div>
                    
                </div>
        </div>
    </section>
  )
}

export default Testimonial