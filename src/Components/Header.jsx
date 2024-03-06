import React, { useState } from 'react'
import Logo from '../assets/healthicons_agriculture.png'

const Header = ({isToggle,setIsToggle,toggleNav}) => {

    
    



  return (
    <header>
        <div className="container">
                <nav className='navbar'>
                    
                        <div className="brand">
                            <div className="logo">
                                <img src={Logo} alt="logo"/>
                                <h1><a href='#'>HarvestHub</a></h1>
                            </div>
                                <ul>
                                    <li><a href='/'>Home</a></li>
                                    <li><a href='/'>About</a></li>
                                    <li><a href='/'>Service</a></li>
                                    <li><a href='/'>Blog</a></li>
                                </ul>
            
                        </div>

                                <div className="nav-cta">
                                    <a href='/' className='cta-1'>Contact</a>
                                </div>

                                <div className="mobile-menu" onClick={toggleNav}>
                                    {isToggle ? <div className="">
                                       
                                        <div className="menu-icon"></div>
                                        <div className="menu-icon"></div>
                                    </div>
                                        : <div className="">
                                            <div className="menu-icon"></div>
                                            <div className="menu-icon"></div>
                                            <div className="menu-icon"></div>
                                        </div>
                                    }


                                    
                                </div>
                </nav>
                                    {isToggle &&
                                            <div className="menu-item">
                        
                                                <div className="brand">
                                                    <div className="logo" id='menu-logo'>
                                                        <img src={Logo} alt="logo"/>
                                                        <h1>HarvestHub</h1>
                                                        </div>
                                                </div>
              
                                              <ul>
                                                      <li><a href='#'>Home</a></li>
                                                      <li><a href='#'>About</a></li>
                                                      <li><a href='#'>Service</a></li>
                                                      <li><a href='#'>Blog</a></li>
                                                 
                                                  </ul>
              
                                            </div>
                               
                                          
                                    }
                          


            </div>
    </header>
      )
}

export default Header