import React, { useRef, useState } from 'react'
import './Header.scss'
import Logo from '../../../img/logo.png'
import { Link } from 'react-router-dom'
import Shoppingimg1 from '../../../img/Shopping-cardimg1.png'
import Shoppingimg2 from '../../../img/Shopping-cardimg2.png'
function Header() {

  const [shop, setShop] = useState(false)
    // const Shop = () => {
    //     Shopref.className = ('block')
    // }
    return (
        <div className='Header'>
            {/*------------------------ Nav bar -----------------------*/}
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
                                <i onClick={() => setShop(true)} class="bi bi-cart3"></i>
                            </div>
                        </div>
                        {/*------------------------ Shop card -----------------------*/}


                        <div className={ shop == true? 'shopping-card shop-show  ': 'shopping-cardend none'}>
                            <div className="shopping-card-nav">
                                <h2>Shopping Cart</h2>
                                <i onClick={() => setShop(false)} class="bi bi-bag-x"></i>
                            </div>
                            <span className='card-line'></span>

                        {/*------------------------ Shop products -----------------------*/}

                            <div className='card_hero'>
                                <div className='card_item1'>
                                    <img src={Shoppingimg1} alt="" />
                                    <span>
                                        <h3>Asgaard sofa</h3>
                                        <span className='card-spannumber'>
                                            <p>1 X</p>
                                            <p>Rs. 250,000.00</p>
                                        </span>
                                    </span>
                                        <i class="bi bi-x-circle-fill card-x"></i>
                                </div>

                                <div className='card_item2'>
                                    <img src={Shoppingimg2} alt="" />
                                    <span>
                                        <h3>Asgaard sofa</h3>
                                        <span className='card-spannumber'>
                                            <p>1 X</p>
                                            <p>Rs. 250,000.00</p>
                                        </span>
                                    </span>
                                        <i class="bi bi-x-circle-fill card-x"></i>
                                </div>
                            </div>


                            <div  className='shopping-card-foot'>
                                <div className='card-subtotal'>
                                    <p>Subtotal</p>
                                    <p>Rs. 520,000.00</p>
                                </div>
                                <span className='card-footer-line'></span>
                                <div className='card_bottom'>
                                    <a className='card-btn' href="">Cart</a>
                                    <a className='card-btn' href="">Checkout</a>
                                    <a className='card-btn' href="">Comparison</a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="off-canvas fade show"></div> */}
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header