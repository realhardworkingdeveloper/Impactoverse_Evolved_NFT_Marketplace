import React from 'react';
import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import img1 from '../../assets/images/box-item/carousel-1.jpg'
import img2 from '../../assets/images/box-item/carousel-2.jpg'
import img3 from '../../assets/images/box-item/carousel-3.jpg'
import img4 from '../../assets/images/box-item/carousel-4.jpg'
import img5 from '../../assets/images/box-item/carousel-5.jpg'
import img6 from '../../assets/images/box-item/carousel-6.jpg'
import img7 from '../../assets/images/box-item/carousel-7.jpg'
import img8 from '../../assets/images/box-item/carousel-8.jpg'
import img9 from '../../assets/images/box-item/carousel-9.jpg'
import shape1 from '../../assets/images/backgroup-secsion/bg-gradient1.png'
import shape2 from '../../assets/images/backgroup-secsion/bg-gradient2.png'
import shape3 from '../../assets/images/backgroup-secsion/bg-gradient3.png'


const SliderStyle2 = () => {
    const subtitle = 'NFT MARKETPLACE'
    const title = 'Discover, find Purchase extraordinary NFTs'
    const description = 'Marketplace for extrarordinary collections which famous impact initiatives lead'
    return (
        <section className="flat-title-page home5">
            <img className="bgr-gradient gradient1" src={shape1} alt="Axies" />
            <img className="bgr-gradient gradient2" src={shape2} alt="Axies" />
            <img className="bgr-gradient gradient3" src={shape3} alt="Axies" />
            <div className="overlay"></div>
            <div className="themesflat-container">
                <div className="wrap-heading flat-slider d-flex align-items-center">
                    <div className="content">
                        <h4 className="mg-bt-11"><span className="fill">{subtitle}</span></h4>
                        <h1 className="heading">{title}                                                                                      
                        </h1>	
                        <p className="sub-heading mg-t-7 mg-bt-39">{description}
                        </p>
                        {/* <div className="flat-bt-slider style2 flex">
                            <a href="/create-item" className="sc-button header-slider style style-1 rocket fl-button pri-1"><span>Create
                            </span></a>
                            <a href="/explore-01" className="sc-button header-slider style style-1 note fl-button pri-1"><span>Explore
                            </span></a>
                        </div> */}
                        <div className="flat-bt-slider flex style2">
                            <Link to="/explore-01" className="sc-button header-slider style style-1 rocket fl-button pri-1"><span>Explore
                            </span></Link>
                            <Link to="/create-item" className="sc-button header-slider style style-1 note fl-button pri-1"><span>Create
                            </span></Link>
                        </div>
                    </div>

                    <Swiper
                        modules={[ Autoplay ]}
                        direction={"vertical"}
                        spaceBetween={10}
                        slidesPerView={5}
                        loop
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed= {4000}
                    >
                        <SwiperSlide><img src={img1} className="slider-2" alt="carousel" /></SwiperSlide>
                        <SwiperSlide><img src={img2} className="slider-2" alt="carousel" /></SwiperSlide>
                        <SwiperSlide><img src={img3} className="slider-2" alt="carousel" /></SwiperSlide>
                        <SwiperSlide><img src={img4} className="slider-2" alt="carousel" /></SwiperSlide>
                        <SwiperSlide><img src={img5} className="slider-2" alt="carousel" /></SwiperSlide>

                    </Swiper>
                    <Swiper
                        modules={[ Autoplay ]}
                        direction={"vertical"}
                        spaceBetween={10}
                        slidesPerView={5}
                        loop
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed= {4100}
                    >
                        <SwiperSlide><img src={img4} className="slider-2" alt="carousel" /></SwiperSlide>
                        <SwiperSlide><img src={img5} className="slider-2" alt="carousel" /></SwiperSlide>
                        <SwiperSlide><img src={img6} className="slider-2" alt="carousel" /></SwiperSlide>
                        <SwiperSlide><img src={img7} className="slider-2" alt="carousel" /></SwiperSlide>
                        <SwiperSlide><img src={img8} className="slider-2" alt="carousel" /></SwiperSlide>

                    </Swiper>
                    <Swiper
                        modules={[ Autoplay ]}
                        direction={"vertical"}
                        spaceBetween={10}
                        slidesPerView={5}
                        loop
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed= {4200}
                    >
                        <SwiperSlide><img src={img7} className="slider-2" alt="carousel" /></SwiperSlide>
                        <SwiperSlide><img src={img8} className="slider-2" alt="carousel" /></SwiperSlide>
                        <SwiperSlide><img src={img9} className="slider-2" alt="carousel" /></SwiperSlide>
                        <SwiperSlide><img src={img1} className="slider-2" alt="carousel" /></SwiperSlide>
                        <SwiperSlide><img src={img2} className="slider-2" alt="carousel" /></SwiperSlide>

                    </Swiper>
                    <Swiper
                        modules={[ Autoplay ]}
                        direction={"vertical"}
                        spaceBetween={10}
                        slidesPerView={5}
                        loop
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed= {4300}
                        className="end"
                    >
                        <SwiperSlide><img src={img1} className="slider-2" alt="carousel" /></SwiperSlide>
                        <SwiperSlide><img src={img2} className="slider-2" alt="carousel" /></SwiperSlide>
                        <SwiperSlide><img src={img3} className="slider-2" alt="carousel" /></SwiperSlide>
                        <SwiperSlide><img src={img4} className="slider-2" alt="carousel" /></SwiperSlide>
                        <SwiperSlide><img src={img5} className="slider-2" alt="carousel" /></SwiperSlide>

                    </Swiper>
                   
                    
                </div>
            </div>                           
        </section>
    );
}



export default SliderStyle2;
