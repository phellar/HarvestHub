import React from 'react'

const Footer = () => {

    const today = new Date().getFullYear()

  return (
    <section className='footer'>
        <div className="container">

            <h2>HarvestHub</h2>
                <div className="footer-menu">

                        <div className="">
                            <h4>Company</h4>
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Service</a>
                            <a href="#">Blog</a>
                        </div>
                        <div className="">
                            <h4>Socials</h4>
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                            <a href="#">LinkedIn</a>
                        </div>
                        <div className="">
                            <h4>Contact</h4>
                            <small>Hello@harvesthub</small>
                            <small>21, Kofo Abayomi, Victoria Island Lagos</small>
                        </div>
                </div>

                <p>All rights Reserved &copy;{today}   HarvestHub</p>
        </div>
    </section>
  )
}

export default Footer