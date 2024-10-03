import React, { useRef, useState } from 'react'
import './Header.scss'
import Logo from '../../../img/logo.png'
import { Link } from 'react-router-dom'
import Shoppingimg1 from '../../../img/Shopping-cardimg1.png'
import Shoppingimg2 from '../../../img/Shopping-cardimg2.png'
function Header() {


    const [shop, setShop] = useState(false)
    const clickOff = () => {
        setShop(false)
    }

    // console.log(JSON.parse(window.localStorage.getItem('localCart')));
    const getcart = []
    const pushcart = JSON.parse(window.localStorage.getItem('localCart'))
    getcart.push(pushcart)
    console.log(getcart);
    
    const [localCard, setlocalCard] = useState(()=>{
        const caritems = window.localStorage.getItem('localCart');
        return caritems ? JSON.parse(caritems): [];
    })

    let sum = 0
    localCard.forEach((item)=>{
        sum += item.price *item.count;
    })

    function removeCart(id){
        const updatecart = localCard.map((item)=>{
            if(item.id=== id && item.count>0){
                return{...item, count: item.count -1};
            }
            return item;
        }).filter((item)=> item.count>0);
        setlocalCard(updatecart)
        window.localStorage.setItem('localCart', JSON.stringify(updatecart))
        
    }

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
                                <i onClick={() => setShop(!shop)} class="bi bi-cart3">
                                    <span>{localCard.length}</span>
                                </i>
                                
                            </div>
                        </div>
                        {/*------------------------ Shop card -----------------------*/}


                        <div className={shop == true ? 'shopping-card shop-show  ' : 'none'}>
                            <div className="shopping-card-nav">
                                <h2>Shopping Cart</h2>
                                <i onClick={() => setShop(!shop)} class="bi bi-bag-x"></i>
                            </div>
                            <span className='card-line'></span>

                            {/*------------------------ Shop products -----------------------*/}

                            <div className='card_hero'>
                                <ul className='card_item1'>
                                    {
                                       localCard?.map((item, index) => (
                                            <li className='card_list' key={item.id}>
                                                    <Link>
                                                    <img src={item.img} alt="" />
                                                    <span>
                                                        <h3>{item.name}</h3>
                                                        <span className='card-spannumber'>
                                                            <p>{item.count} <span>X</span></p>
                                                            <p>Rp{item.price* item.count}</p>
                                                        </span>
                                                    </span>
                                                    <i onClick={()=> removeCart(item.id) } class="bi bi-x-circle-fill card-x"></i>
                                                    </Link>
                                                </li>
                                        ))
                                    }
                                </ul>


                            </div>


                            <div className='shopping-card-foot'>
                                <div className='card-subtotal'>
                                    <p>Subtotal</p>
                                    <p>Rs. {sum}</p>
                                </div>
                                <span className='card-footer-line'></span>
                                <div className='card_bottom'>
                                    <a className='card-btn' href="">Cart</a>
                                    <a className='card-btn' href="">Checkout</a>
                                    <a className='card-btn' href="">Comparison</a>
                                </div>
                            </div>
                        </div>
                        <div onClick={clickOff} className={shop == true ? "off-canvas show" : 'fade'} ></div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header