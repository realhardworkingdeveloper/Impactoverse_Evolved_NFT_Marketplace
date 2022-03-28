import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import imgAuthor1 from '../assets/img/avatar/avatar(1).jpg'
import img1left from '../assets/images/box-item/collection-item-6.jpg'
import img1right1 from '../assets/images/box-item/collection-item-7.jpg'
import img1right2 from '../assets/images/box-item/collection-item-17.jpg'


const CreateCollection = () => {
    const item = {
            title: "Creative Art Collection",
            imgAuthor: imgAuthor1,
            name: "Ralph Garraway",
            imgleft: img1left,
            imgright1: img1right1,
            imgright2: img1right2,
            wishlist: "100",
        };
    
    const need = [{
            field: 'Allow to contribute',
            checked: 'checked'
        },
        {
            field: 'Urgent Support Needed',
            checked: 'checked'
        }];
    
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
                           
                            <div className="sc-card-collection style-2 home5">
                                <div className="media-images-collection">
                                    <div className="box-left">
                                        <img src={item.imgleft} alt="Axies" />
                                    </div>
                                    <div className="box-right">
                                        <div className="top-img">
                                            <img src={item.imgright1} alt="Axies" />
                                        </div>
                                        <div className="bottom-img">
                                            <img src={item.imgright2} alt="Axies" />
                                        </div>
                                    <Link to="/login" className="wishlist-button heart preview-wishlist-button"><span className="number-like">{item.wishlist}</span></Link>
                                </div>
                                </div>
                                <div className="author-avatar">
                                    <div className="image">
                                        <img src={item.imgAuthor} alt="Axies" className="avatar" />
                                        <div className="badge"><i className="ripple"></i></div>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4 className="heading">
                                        <Link to="/authors-01">{item.title}</Link>
                                    </h4>
                                    <div className="description">
                                        <span>Created by</span>
                                        <h6 className="name"><Link to="/authors-01">{item.name}</Link></h6>
                                    </div>
                                </div>
                            </div>
                         </div>
                         <div className="col-xl-9 col-lg-6 col-md-12 col-12">
                             <div className="form-create-item">
                                <h4 className="title-create-item">Upload Featured Image</h4>
                                <label className="uploadFile">
                                    <span className="filename">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</span>
                                    <input type="file" className="inputfile form-control" name="file" />
                                </label>
                                

                                <h4 className="title-create-item">Name</h4>
                                <input type="text" placeholder="Collection Name" />

                                <h4 className="title-create-item">Description</h4>
                                <textarea placeholder="e.g. “Oil Painting Collection...”"></textarea>


                                {need.map((item, index) => {
                                    return (
                                        <label className="inline-checkbox" key={index}>
                                            <span className="pst-re">
                                                <input type="checkbox" defaultChecked={item.checked} />
                                                <span className="btn-checkbox"></span>
                                            </span>
                                            <h4>{item.field}</h4>
                                        </label>
                                    )
                                })}

                                <div className="sc-btn-top mg-r-12 submit-button" >
                                    <button className="sc-button header-slider style style-1 rocket fl-button pri-1">
                                        <span>Create Collection</span>
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

export default CreateCollection;
