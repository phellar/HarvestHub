import React from 'react'
import Logo from '../assets/healthicons_agriculture.png'

const Header = () => {
  return (
    <header>
        <div className="container">
                <nav className='navbar'>
                    
                        <div className="brand">
                            <div className="logo">
                                <img src={Logo} alt="logo"/>
                                <h1><a href='#'>HavestHub</a></h1>
                            </div>
                                <ul>
                                    <li><a href='/'>Home</a></li>
                                    <li><a href='/'>About</a></li>
                                    <li><a href='/'>Service</a></li>
                                    <li><a href='/'>Blog</a></li>
                                </ul>
            
                        </div>
            
                                <div className="">
                                    <a href='/' className='cta-1'>Contact</a>
                                </div>
                </nav>

            </div>
    </header>
      )
}

export default Header