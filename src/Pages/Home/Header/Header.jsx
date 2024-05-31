import React, { useState } from 'react'
import './Header.scss'
import Logo from '../../../img/logo.png'
import { Link } from 'react-router-dom'
function Header() {
    // const [shopCard, setShop] = useState('test')
    // console.log(setShop);
  return (
    <div className='Header'>
        <nav className='nav'>
            <div className="container">
                <div className="nav_inner">
                    <div className='nav_items'>
                        <div className='Logo'>
                            <Link>
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                        <div className='nav_departments'>
                            <ul>
                                <li><Link>Home</Link> </li>
                                <li><Link>Shop</Link> </li>
                                <li><Link>About</Link> </li>
                                <li><Link>Contact</Link> </li>
                            </ul>
                        </div>
                        <div className='nav_icons'>
                          <i class="bi bi-person-exclamation"></i>
                          <i class="bi bi-search"></i>
                          <i class="bi bi-heart"></i>
                          <i  class="bi bi-cart3"></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header