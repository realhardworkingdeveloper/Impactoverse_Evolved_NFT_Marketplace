import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SliderStyle2 from '../components/slider/SliderStyle2';
import heroSliderData from '../assets/fake-data/data-slider';
import BrowCategory from '../components/layouts/home-5/BrowCategory';
import LiveAuction from '../components/layouts/home-7/LiveAuction';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import TopSeller from '../components/layouts/home-5/TopSeller';
import TodayPicks from '../components/layouts/home-5/TodayPicks';
import todayPickData from '../assets/fake-data/data-today-pick';
import PopularCollection from '../components/layouts/home-5/PopularCollection';
import Create from '../components/layouts/home-2/Create';


const Home05 = () => {
    return (
        <div className='home-5'>
            <Header className="home-header" />
            <SliderStyle2 />
            <div className="section-main">
                <LiveAuction data={liveAuctionData} />
            </div>
            <TopSeller />
            <div className="section-main">
                <PopularCollection />
            </div>
            <TodayPicks data={ todayPickData } />
            <Create />
            <Footer />
        </div>
    );
}

export default Home05;
