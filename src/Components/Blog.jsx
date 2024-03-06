import React from 'react'
import Blog1 from "../assets/blog1.jpg"
import Blog2 from "../assets/blog2.jpg"

const Blog = () => {
  return (
    <section className='blog'>
        <div className="container">
            <h2> Blog  posts by <span className='highlight'>HarvestHub</span></h2>
            <div className="card-group">
                <div className='card-1'>
                                        <img src={Blog1} alt="mentor svg"  />
                                    <p>Sustainable Practices Workshops</p>
                                    <small>
                                    Participate in workshops and webinars to learn about the latest sustainable farming practices.
                                    Stay ahead of the curve and make a positive impact on the environment.
                                    </small>
                </div>
                <div className='card-1'>
                                        <img src={Blog2} alt="mentor svg"  />
                                    <p>Sustainable Practices Workshops</p>
                                    <small>
                                    Participate in workshops and webinars to learn about the latest sustainable farming practices.
                                    Stay ahead of the curve and make a positive impact on the environment.
                                    </small>
                </div>
        
            </div>
                      {/* <div className="sec">
                          <a href='#' className='sec-btn'>View More</a>
                      </div> */}

        </div>
    </section>
  )
}

export default Blog