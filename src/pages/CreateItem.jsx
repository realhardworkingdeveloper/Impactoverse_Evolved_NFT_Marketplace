import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import img1 from '../assets/images/box-item/image-box-6.jpg'
import avt from '../assets/img/avatar/avatar(1).jpg'

const CreateItem = () => {
    return (
        <div className='create-item'>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Create Item</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>Create Item</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <div className="tf-create-item tf-section">
                <div className="themesflat-container">
                    <div className="row">
                         <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                             <h4 className="title-create-item">Preview item</h4>
                            <div className="sc-card-product">
                                <div className="card-media">
                                    <Link to="/item-details-01"><img src={img1} alt="Axies" /></Link>
                                    <Link to="/login" className="wishlist-button heart"><span className="number-like"> 100</span></Link>
                                    <div className="featured-countdown">
                                        <span className="slogan"></span>
                                        <Countdown date={Date.now() + 500000000}>
                                            <span>Ready, Go!</span>
                                        </Countdown>
                                    </div>
                                </div>
                                <div className="card-title">
                                    <h5><Link to="/item-details-01">"Cyber Doberman #766”</Link></h5>
                                    <div className="tags">bsc</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src={avt} alt="Axies" />
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <Link to="/author-02">Freddie Carpenter</Link></h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 4.89 ETH</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <Link to="/wallet-connect" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></Link>
                                    <Link to="/activity-01" className="view-history reload">View History</Link>
                                </div>
                            </div>
                         </div>
                         <div className="col-xl-9 col-lg-6 col-md-12 col-12">
                             <div className="form-create-item">
                                <div className="inner-row-form style-2">
                                    <h4 className="title-create-item">Collection</h4>
                                    <div className="seclect-box">
                                        <div id="item-create" className="dropdown">
                                            <Link to="#" className="btn-selector nolink">Sports Photography</Link>
                                            <ul >
                                                <li><span>Oil Paintings</span></li>
                                                <li><span>Sports Photography</span></li>
                                                <li><span>Classic music</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h4 className="title-create-item">Upload file</h4>
                                <label className="uploadFile">
                                    <span className="filename">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</span>
                                    <input type="file" className="inputfile form-control" name="file" />
                                </label>

                                <h4 className="title-create-item">Name</h4>
                                <input type="text" placeholder="Item name" />

                                <h4 className="title-create-item">External link</h4>
                                <input type="text" placeholder="https://yoursite.com/item/1" />

                                <h4 className="title-create-item">Description</h4>
                                <textarea placeholder="e.g. “This is very limited item”"></textarea>

                                <h4 className="title-create-item">Royalties</h4>
                                <input type="text" placeholder="5%" />

                                <div className="sc-btn-top mg-r-12 submit-button" >
                                    <button className="sc-button header-slider style style-1 rocket fl-button pri-1">
                                        <span>Create Item</span>
                                    </button>
                                </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CreateItem;
