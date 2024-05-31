import React from 'react'
import './Hero.scss'
function Hero() {
  return (
    <div className='Hero'>
        <div className="container">
          <div className="hero_inner">
            <div className="hero_items">
              <h2>New Arrival</h2>
              <h1>Discover Our New Collection</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
              <button className='hero_purchase'>Buy Now</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero