import React from 'react'
import './Products.scss'
import { products } from '../../../lib/products'
import { Link } from 'react-router-dom'
function Products() {
    return (
        <div className='Products'>
            <div className="container">
                <div className="products_inner">
                    <h1 className='product-name'>Our Products</h1>
                    <ul className='products_list'>
                        {
                            products?.map((item, index) => (
                                <li className='product_items' key={index}>
                                    <div className='product-card_hover'>
                                        <div className='Pcard_hover'>
                                            <button className='card_btn'>Add to cart</button>
                                            <ul className='card-link_list'>
                                                <li>
                                                    <Link><i class="bi bi-share-fill"></i></Link>
                                                    <Link>Share</Link>
                                                </li>
                                                <li>
                                                    <Link><i class="bi bi-arrow-left-right"></i></Link>
                                                    <Link>Compare</Link>
                                                </li>
                                                <li>
                                                    <Link><i class="bi bi-heart"></i></Link>
                                                    <Link>Like</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <span className={item.discount ? 'discount' : '' || item.New ? 'new' : ''}>{item.discount ? item.discount : '' || item.New ? item.New : ''}</span>
                                    <img src={item.img} alt="" />
                                    <div className='product-item-about'>

                                        <h2 className='product-item-name'>{item.name}</h2>
                                        <p className='product-item-title'>{item.title}</p>
                                        <span>
                                            <p className='product-item-price'>{item.price}</p>
                                            <p className='product-item-oldprice'>{item.oldprice}</p>
                                        </span>
                                    </div>

                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Products