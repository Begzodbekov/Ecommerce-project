import React, { useState } from 'react'
import './Browse.scss'
import img1 from '../../../img/browse_img1.png'
import img2 from '../../../img/browse_img2.png'
import img3 from '../../../img/browse_img3.png'
import { Swiper, SwiperSlide } from "swiper/react";
function Browse() {
    const [vWidth, setVWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => {
        setVWidth(window.innerWidth)
    })
    return (
        <div className='Browse'>
            <div className="container">
                <div className="browse_inner">
                    <h1 className='browse_name'>Browse The Range</h1>
                    <p className='browse_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="browse_hero">
                        <ul className='browse_items'>
                            <>
                                <Swiper className="mySwiper browse_swiper"
                                    slidesPerView={vWidth >= 1200 ? 3 : 2 && vWidth >= 1351 ? 2 : 1}>
                                    <SwiperSlide>
                                        <li>
                                            <img src={img1} alt="" />
                                            <p>Dining</p>
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li>
                                            <img src={img2} alt="" />
                                            <p>Living</p>
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li>
                                            <img src={img3} alt="" />
                                            <p>Bedroom</p>
                                        </li>
                                    </SwiperSlide>
                                </Swiper>
                            </>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Browse