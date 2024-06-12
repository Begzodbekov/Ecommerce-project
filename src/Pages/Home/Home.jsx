import React from 'react'
import Hero from './Hero/Hero'
import Browse from './Browse/Browse'
import Products from './Products/Products'
import './Home.scss'
function Home() {
  return (
    <div className='Home'>
        {/* <span className='card-background'></span> */}
        <Hero/>
        <Browse/>
        <Products/>
    </div>
  )
}

export default Home