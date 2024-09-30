import React, { useState } from 'react';
import './Products.scss';
import { products } from '../../../lib/products';
import { Link } from 'react-router-dom';

function Products() {
  const [cardarr, setCardarr] = useState(() => {
    const localCart = window.localStorage.getItem('localCart');
    return localCart ? JSON.parse(localCart) : [];
  });

  // Function to add a product to the local cart
  function addlocalCart(id) {
    const productToAdd = products.find((item) => item.id === id);
    
    // Check if the product is already in the cart
    const existingProductIndex = cardarr.findIndex(item => item.id === id);
    
    if (existingProductIndex >= 0) {
      // Product exists, increment count
      const updatedCart = [...cardarr];
      updatedCart[existingProductIndex].count += 1;
      setCardarr(updatedCart);
      window.localStorage.setItem('localCart', JSON.stringify(updatedCart));
    } else {
      // Product does not exist, add it with count 1
      const newProduct = { ...productToAdd, count: 1 }; // Initialize count to 1
      const updatedCart = [...cardarr, newProduct];
      setCardarr(updatedCart);
      window.localStorage.setItem('localCart', JSON.stringify(updatedCart));
    }
  }

  return (
    <div className='Products'>
      <div className="container">
        <div className="products_inner">
          <h1 className='product-name'>Our Products</h1>
          <ul className='products_list'>
            {products?.map((item, index) => (
              <li className='product_items' key={index}>
                <div className='product-card_hover'>
                  <div className='Pcard_hover'>
                    <button
                      onClick={() => {
                        addlocalCart(item.id);
                      }}
                      className='card_btn'
                    >
                      Add to cart
                    </button>
                    <ul className='card-link_list'>
                      <li>
                        <Link>
                          <i className="bi bi-share-fill"></i>
                        </Link>
                        <Link>Share</Link>
                      </li>
                      <li>
                        <Link>
                          <i className="bi bi-arrow-left-right"></i>
                        </Link>
                        <Link>Compare</Link>
                      </li>
                      <li>
                        <Link>
                          <i className="bi bi-heart-fill"></i>
                        </Link>
                        <Link>Like</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <span className={item.discount ? 'discount' : '' || item.New ? 'new' : ''}>
                  {item.discount ? item.discount : '' || item.New ? item.New : ''}
                </span>
                <img src={item.img} alt="product" />
                <div className='product-item-about'>
                  <h2 className='product-item-name'>{item.name}</h2>
                  <p className='product-item-title'>{item.title}</p>
                  <span>
                    <p className='product-item-price'>Rp {item.price}</p>
                    <p className='product-item-oldprice'>Rp{item.oldprice}</p>
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <a className='product-btn' href="">Show more</a>
        </div>
      </div>
    </div>
  );
}

export default Products;
