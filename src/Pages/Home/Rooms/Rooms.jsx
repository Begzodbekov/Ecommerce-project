import React from 'react'
import './Rooms.scss'
import { roomsdata } from '../../../lib/products'
function Rooms() {
  return (
    <div className='Rooms'>
        <div className="rooms_inner">
          <div className="container">
            <section className='rooms_section1'>
              <div className='section_info'>
                <h2>50+ Beautiful rooms inspiration</h2>
                <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <a href="">Explore More</a>
              </div>

              <div className='rooms_img_slides'>
                <ul className='imgslide-box'>
                  {
                    roomsdata?.map((item, index)=>(
                      <li className='img_slide' key={index}>
                        <img src={item.img} alt=""/>
                      </li>
                    ))
                  }
                </ul>
                <div className='slides_info'>
                  <ul>01 <span></span> {roomsdata?.map((item)=>(
                      <li>{item.name}</li>
                  ))}</ul>
                  <h2>Inner Peace</h2>
                </div>
                  <i class="bi bi-arrow-right"></i>
              </div>
            </section>
          </div>
        </div>
    </div>
  )
}

export default Rooms