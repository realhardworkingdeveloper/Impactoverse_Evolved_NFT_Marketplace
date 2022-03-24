import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import img1 from  '../../../assets/img/avatar/avatar(1).jpg';
import img2 from  '../../../assets/img/avatar/avatar(2).jpg';
import img3 from  '../../../assets/img/avatar/avatar(3).jpg';
import img4 from  '../../../assets/img/avatar/avatar(4).jpg';
import img5 from  '../../../assets/img/avatar/avatar(5).jpg';
import img6 from  '../../../assets/img/avatar/avatar(6).jpg';
import img7 from  '../../../assets/img/avatar/avatar(7).jpg';
import img8 from  '../../../assets/img/avatar/avatar(8).jpg';
import img9 from  '../../../assets/img/avatar/avatar(9).jpg';
import img10 from  '../../../assets/img/avatar/avatar(10).jpg';

const TopSeller = () => {
    const [dataTopSellerTab] = useState(
        [
            {
                title: '1 Day',
            },
            {
                title: '1 Week',
            },
            {
                title: '1 Month',
            },
        ]
    )
    const [dataTopSellerPanel] = useState(
        [
            {
                id: 1,
                dataTopSellerContent: [
                    {
                        img: img1,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img2,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img3,
                        name: 'Monica Lucas',
                        price: '214.2 ETH'
                    },
                    {
                        img: img4,
                        name: 'Monica Lucas',
                        price: '214.2 ETH'
                    },
                    {
                        img: img5,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img6,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img7,
                        name: 'Windsor Lane',
                        price: '214.2 ETH'
                    },
                    {
                        img: img8,
                        name: 'Windsor Lane',
                        price: '214.2 ETH'
                    },
                ]
            },
            {
                id: 2,
                dataTopSellerContent: [
                    {
                        img: img9,
                        name: 'Monica Lucas',
                        price: '214.2 ETH'
                    },
                    {
                        img: img10,
                        name: 'Monica Lucas',
                        price: '214.2 ETH'
                    },
                    {
                        img: img1,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img2,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img3,
                        name: 'Windsor Lane',
                        price: '214.2 ETH'
                    },
                    {
                        img: img4,
                        name: 'Windsor Lane',
                        price: '214.2 ETH'
                    },
                ]
            },
            {
                id: 3,
                dataTopSellerContent: [
                    {
                        img: img5,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img6,
                        name: 'Crispin Berry',
                        price: '214.2 ETH'
                    },
                    {
                        img: img7,
                        name: 'Windsor Lane',
                        price: '214.2 ETH'
                    },
                    {
                        img: img8,
                        name: 'Windsor Lane',
                        price: '214.2 ETH'
                    },
                ]
            },
        ]
    )
    return (
        <div>
            <section className="tf-section top-seller home5 s2 mobie-style bg-style2">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12">
                            <h2 className="tf-title style2 mb-25 text-left">Top Impact Initiatives</h2>
                            <div className="flat-tabs seller-tab tablet-30">
                            <Tabs>
                                <TabList>
                                    {
                                        dataTopSellerTab.map((item,index) =>(
                                            <Tab key={index}>{item.title}</Tab>
                                        ))
                                    }
                                </TabList>

                                <div className="content-tab">
                                {
                                    dataTopSellerPanel.map((item) =>(
                                        <TabPanel key={item.id} >
                                            {
                                                item.dataTopSellerContent.map((item,index) => (
                                                    <div className="box-item" key={index}>
                                                    <div className="sc-author-box style-3">
                                                        <div className="author-avatar">
                                                            <Link to="/authors-02">
                                                                <img src={item.img} alt="Axies" className="avatar" />
                                                            </Link>
                                                            <div className="badge"><i className="ripple"></i></div>
                                                        </div>
                                                        <div className="author-infor">
                                                            <h5><Link to="/authors-02">{item.name}</Link></h5>
                                                            <span className="price">{item.price}</span>
                                                        </div>
                                                    </div>
                                                </div> 
                                                ))
                                            }
                                        </TabPanel>
                                    ))
                                }
                                </div>

                            </Tabs>
                            </div> 
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <h2 className="tf-title style2 mb-25 text-left">Top Creators</h2>
                            <div className="flat-tabs seller-tab tablet-30">
                            <Tabs>
                                <TabList>
                                    {
                                        dataTopSellerTab.map((item,index) =>(
                                            <Tab key={index}>{item.title}</Tab>
                                        ))
                                    }
                                </TabList>

                                <div className="content-tab">
                                {
                                    dataTopSellerPanel.map((item) =>(
                                        <TabPanel key={item.id} >
                                            {
                                                item.dataTopSellerContent.map((item,index) => (
                                                    <div className="box-item" key={index}>
                                                    <div className="sc-author-box style-3">
                                                        <div className="author-avatar">
                                                            <Link to="#">
                                                                <img src={item.img} alt="Axies" className="avatar" />
                                                            </Link>
                                                            <div className="badge"><i className="ripple"></i></div>
                                                        </div>
                                                        <div className="author-infor">
                                                            <h5><Link to="#">{item.name}</Link></h5>
                                                            <span className="price">{item.price}</span>
                                                        </div>
                                                    </div>
                                                </div> 
                                                ))
                                            }
                                        </TabPanel>
                                    ))
                                }
                                </div>

                            </Tabs>
                            </div> 
                        </div>
                    </div>
                </div>     
            </section>
        </div>
    );
}

export default TopSeller;
