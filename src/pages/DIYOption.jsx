import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import img1 from '../assets/images/icon/coll-multiple.png'
import img2 from '../assets/images/icon/coll-single.png'

const DIYOption = () => {
    const [data] = useState(
        [
            {
                img: img1,
                title: 'Create New Collection',
                description: 'Impact Initiatives could create new collections to launch Campaigns.',
                link: '/create_collection'
            },
            {
                img: img2,
                title: 'Contribute to Collection',
                description: 'Creators could contribute to the campaigns which Impact Initiatives lead.',
                link: '/create_item'
            }
        ]
    )
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Do It Yourself</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Create</Link></li>
                                    <li>Do It Yourself</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <div className="tf-diy tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="sub-title ct style-1 pad-200">
                                If you don't know how to do, you can learn  <Link to="/howto" className='highlight'>here</Link>.
                            </h5>
                        </div>
                        <div className="col-8 offset-2">
                            <div className="sc-box-icon-inner style-2">
                                {
                                    data.map((item,index) => (
                                        <div key={index} className="sc-box-icon diy-option">
                                            <div className="img">
                                                <img src={item.img} alt="Axies" />
                                            </div>
                                            <h4 className="heading"><Link to={item.link}>{item.title}</Link> </h4>
                                            <p className="content">{item.description}</p>
                                         </div>
                                    ))
                                }
                            </div>  
                        </div>    
                    </div>              
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DIYOption;
