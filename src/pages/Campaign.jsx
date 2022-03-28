import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import TodayPicks from '../components/layouts/home-5/TodayPicks';
import todayPickData from '../assets/fake-data/data-today-pick';

const Campaign = () => {

    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Campaigns</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Create</Link></li>
                                    <li>Campaigns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <TodayPicks data={ todayPickData } />
            <Footer />
        </div>
    );
}

export default Campaign;
