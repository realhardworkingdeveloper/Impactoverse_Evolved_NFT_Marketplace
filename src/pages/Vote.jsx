import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import img1 from '../assets/img/avatar/avatar(1).jpg'
import img2 from '../assets/img/avatar/avatar(2).jpg'
import img3 from '../assets/img/avatar/avatar(3).jpg'
import img4 from '../assets/img/avatar/avatar(4).jpg'
import img5 from '../assets/img/avatar/avatar(5).jpg'
import img6 from '../assets/img/avatar/avatar(6).jpg'

const Vote = () => {
    const [data] = useState(
        [
            {
                img: img1,
                title: "Hamlet Contemplates Yorick's Yorick's",
                nameAuthor: 'SalvadorDali',
                volume: '12,4353',
                price: '12,4353 ETH',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img2,
                title: "Hamlet Contemplates Yorick's Yorick's",
                nameAuthor: 'SalvadorDali',
                volume: '12,4353',
                price: '12,4353 ETH',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img3,
                title: "Hamlet Contemplates Yorick's Yorick's",
                nameAuthor: 'SalvadorDali',
                volume: '12,4353',
                price: '12,4353 ETH',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img4,
                title: "Hamlet Contemplates Yorick's Yorick's",
                nameAuthor: 'SalvadorDali',
                volume: '12,4353',
                price: '12,4353 ETH',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img5,
                title: "Hamlet Contemplates Yorick's Yorick's",
                nameAuthor: 'SalvadorDali',
                volume: '12,4353',
                price: '12,4353 ETH',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img6,
                title: "Hamlet Contemplates Yorick's Yorick's",
                nameAuthor: 'SalvadorDali',
                volume: '12,4353',
                price: '12,4353 ETH',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img1,
                title: "Hamlet Contemplates Yorick's Yorick's",
                nameAuthor: 'SalvadorDali',
                volume: '12,4353',
                price: '12,4353 ETH',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img2,
                title: "Hamlet Contemplates Yorick's Yorick's",
                nameAuthor: 'SalvadorDali',
                volume: '12,4353',
                price: '12,4353 ETH',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img3,
                title: "Hamlet Contemplates Yorick's Yorick's",
                nameAuthor: 'SalvadorDali',
                volume: '12,4353',
                price: '12,4353 ETH',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img4,
                title: "Hamlet Contemplates Yorick's Yorick's",
                nameAuthor: 'SalvadorDali',
                volume: '12,4353',
                price: '12,4353 ETH',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img5,
                title: "Hamlet Contemplates Yorick's Yorick's",
                nameAuthor: 'SalvadorDali',
                volume: '12,4353',
                price: '12,4353 ETH',
                owners: '3.3k',
                assets: '23k'
            },
            {
                img: img6,
                title: "Hamlet Contemplates Yorick's Yorick's",
                nameAuthor: 'SalvadorDali',
                volume: '12,4353',
                price: '12,4353 ETH',
                owners: '3.3k',
                assets: '23k'
            },
        ]
    )
    const [visible , setVisible] = useState(6);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Public Vote</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>Vote</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <section className="tf-section tf-rank">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-ranking">
                                <div className="flex th-title">
                                    <div className="column1">
                                        <h3>Impact Initiatives</h3>
                                    </div>
                                    <div className="column">
                                        <h3>Followers</h3>
                                    </div>
                                    <div className="column">
                                    <h3>Total Asset</h3>
                                    </div>
                                    <div className="column">
                                    <h3>Assets</h3>
                                    </div>
                                    <div className="column">
                                    <h3>Owners</h3>
                                    </div>
                                    <div className="column">
                                    <h3>Vote Up</h3>
                                    </div>
                                </div>
                                {
                                    data.slice(0,visible).map((item,index) => (
                                        <div key={index} className="fl-item2">
                                            <div className="item flex">
                                                <div className="infor-item flex column1">
                                                    <div className="media">
                                                        <img src={item.img} alt="Axies" />
                                                    </div>
                                                    <div className="content-collection pad-t-4">
                                                        <h5 className="title mb-15"><Link to="/item-detail">"{item.title}"</Link></h5>
                                                        <div className="ranking-author flex">
                                                            <div className="content">
                                                                <h6><Link to="/member">Detailed Info</Link></h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="column">
                                                    <span>{item.volume}</span>
                                                </div>
                                                <div className="column td4">
                                                    <span>{item.price}</span>
                                                </div>
                                                <div className="column td6">
                                                    <span>{item.assets}</span>
                                                </div>
                                                <div className="column td5">
                                                    <span>{item.owners}</span>
                                                </div>
                                                <div className="column td6 vote-up">
                                                    <span><i className='icon-fl-heart'></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                {
                                    visible < data.length && 
                                    <div className="col-md-12 wrap-inner load-more text-center"> 
                                        <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Vote;
