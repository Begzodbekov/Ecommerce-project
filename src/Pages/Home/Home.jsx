import React from 'react'
import Hero from './Hero/Hero'
import Browse from './Browse/Browse'
import Products from './Products/Products'

function Home() {
  return (
    <div className='Home'>
        <Hero/>
        <Browse/>
        <Products/>
    </div>
  )
}

export default Home