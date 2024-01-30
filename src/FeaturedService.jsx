import React from 'react'
import Image1 from "./assets/img1.jpg"
import Image2 from "./assets/img2.jpg"
import Image3 from "./assets/img3.jpg"

const FeaturedService = () => {
  return (
    <section className='featured-service'>
        <div className="container">
            <h2>Featured<span className="highlight"> Services</span></h2>
                <div className="card-group-1">
                    <div className='card-1'>
                                <img src={Image1} alt="mentor svg"  />
                            <p>Precision Farming Tools</p>
                            <small>Enhance productivity and reduce waste with our precision farming tools. From GPS-guided
                            tractors to sensor-based irrigation systems, 
                            we have the tools you need for efficient farming.</small>
                        </div>
                    <div className='card-1'>
                                <img src={Image2} alt="mentor svg"  />
                            <p>Sustainable Practices Workshops</p>
                            <small>
                            Participate in workshops and webinars to learn about the latest sustainable farming practices.
                             Stay ahead of the curve and make a positive impact on the environment.
                            </small>
                        </div>
                    <div className='card-1'>
                                <img src={Image3} alt="mentor svg"  />
                            <p>Crop Monitoring and Analysis </p>
                            <small>Utilize cutting-edge technology to monitor crop health, detect diseases early, and 
                            optimize irrigation schedules.
                             Our advanced analytics ensure you stay one step ahead in crop management..</small>
                        </div>
                </div>
        </div>
    </section>
  )
}

export default FeaturedService