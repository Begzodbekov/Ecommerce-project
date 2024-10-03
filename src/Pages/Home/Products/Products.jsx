import React, { useRef, useState } from 'react';
import './Products.scss';
import { products } from '../../../lib/products';
import { Link } from 'react-router-dom';

function Products() {
  const [cardarr, setCardarr] = useState(() => {
    const localCart = window.localStorage.getItem('localCart');
    return localCart ? JSON.parse(localCart) : [];
  });
  const [pwarning, setPwarning] = useState()
  // Function to add a product to the local cart
  function addlocalCart(id) {
    setTimeout(()=>{
      setPwarning('hidden')
    },3000)
    setPwarning('visible')
    const productToAdd = products.find((item) => item.id === id);

    const existingProductIndex = cardarr.findIndex(item => item.id === id);

    if (existingProductIndex >= 0) {
      const updatedCart = [...cardarr];
      updatedCart[existingProductIndex].count += 1;
      setCardarr(updatedCart);
      window.localStorage.setItem('localCart', JSON.stringify(updatedCart));
    } else {
      const newProduct = { ...productToAdd, count: 1 };
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
                    <div className={pwarning !== 'visible' ? 'product-warning' : 'product-warning visible'}>Hozirda texnik tuzatishlar bolayotkanligi sababli,
                      sahifani yangilaganingizdan keyin maqsulod savatga qo'shiladi. </div>
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
