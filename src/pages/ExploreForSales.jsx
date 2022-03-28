import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import ItemContent from '../components/layouts/home-8/ItemContent';
import SideBar from '../components/layouts/home-8/SideBar';

const ExploreForSales = () => {
    
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    
    const isSticky = (e) => {
        const header = document.querySelector('.js-header');
        const scrollTop = window.scrollY;
        scrollTop >= 300 ? header.classList.add('is-fixed') : header.classList.remove('is-fixed');
        scrollTop >= 400 ? header.classList.add('is-small') : header.classList.remove('is-small');
    };

    return (
        <div className='home-8'>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Explore Collections</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Explore</Link></li>
                                    <li>Collections For Sales</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <section className="tf-item tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-box-17">
                            <SideBar />
                        </div>
                        
                        <div className="col-box-83">
                            <ItemContent />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}


export default ExploreForSales;
