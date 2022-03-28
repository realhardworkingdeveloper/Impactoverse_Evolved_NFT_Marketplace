import React , { useState , Fragment , useRef} from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import Countdown from "react-countdown";
import CardModal from '../CardModal';
import { Dropdown } from 'react-bootstrap';

import img1 from '../../../assets/images/box-item/image-box-47.jpg'
import imga1 from '../../../assets/img/avatar/avatar(1).jpg'
import img2 from '../../../assets/images/box-item/image-box-48.jpg'
import imga2 from '../../../assets/img/avatar/avatar(3).jpg'
import img3 from '../../../assets/images/box-item/image-box-34.jpg'
import imga3 from '../../../assets/img/avatar/avatar(7).jpg'
import img4 from '../../../assets/images/box-item/image-box-35.jpg'
import imga4 from '../../../assets/img/avatar/avatar(9).jpg'
import img5 from '../../../assets/images/box-item/image-box-36.jpg'
import imga5 from '../../../assets/img/avatar/avatar(5).jpg'
import img6 from '../../../assets/images/box-item/image-box-32.jpg'
import img7 from '../../../assets/images/box-item/image-box-33.jpg'
import img8 from '../../../assets/images/box-item/image-box-52.jpg'
import img9 from '../../../assets/images/box-item/image-box-53.jpg'
import img10 from '../../../assets/images/box-item/image-box-49.jpg'
import img11 from '../../../assets/images/box-item/image-box-54.jpg'
import img12 from '../../../assets/images/box-item/image-box-55.jpg'
import img13 from '../../../assets/images/box-item/image-box-56.jpg'
import img14 from '../../../assets/images/box-item/image-box-50.jpg'
import img15 from '../../../assets/images/box-item/image-box-51.jpg'

const ItemContent = () => {
    const [dataTab] = useState(
        [
            {
                id: 1,
                title: "Live Auctions",
            },
            {
                id: 2,
                title: "Today's Picks",
            },
            {
                id: 3,
                title: "Total",
            }
        ]
    )
    const [dataPanel] = useState(
        [
            {
                id: 1,
                dataContent: [
                    {
                        id: 1,
                        img: img1,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 2,
                        img: img2,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 3,
                        img: img3,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 4,
                        img: img4,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 5,
                        img: img5,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 6,
                        img: img6,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 7,
                        img: img7,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 8,
                        img: img8,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 9,
                        img: img9,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 10,
                        img: img10,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 11,
                        img: img11,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 12,
                        img: img12,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 13,
                        img: img13,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 14,
                        img: img14,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 15,
                        img: img15,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 16,
                        img: img1,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 17,
                        img: img2,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 18,
                        img: img3,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 19,
                        img: img4,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 20,
                        img: img5,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    
                ]
            },
            {
                id: 2,
                dataContent: [
                    {
                        id: 1,
                        img: img11,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 2,
                        img: img12,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 3,
                        img: img13,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 4,
                        img: img14,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 5,
                        img: img15,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 6,
                        img: img1,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 7,
                        img: img2,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 8,
                        img: img3,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 9,
                        img: img4,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 10,
                        img: img5,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                ]
            },
            {
                id: 3,
                dataContent: [
                    {
                        id: 1,
                        img: img1,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 2,
                        img: img2,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 3,
                        img: img3,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 4,
                        img: img4,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 5,
                        img: img5,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 6,
                        img: img6,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 7,
                        img: img7,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 8,
                        img: img8,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 9,
                        img: img9,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 10,
                        img: img10,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                ]
            }
        ]
    )

    const [visible , setVisible] = useState(15);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 5);
    }

    const [modalShow, setModalShow] = useState(false);
  return (
    <Fragment>
        <div className="flat-tabs items">
            <Tabs >
                <TabList>
                    {
                        dataTab.map(data=> (
                            <Tab key={data.id} >{data.title}</Tab>
                        ))
                    }
                </TabList>
                {
                    dataPanel.map(data =>(
                        <TabPanel key={data.id}>
                            <div className="option">
                                <h2 className="title">1,000 Items</h2>
                                <div className="view">
                                    
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic" className='btn-sort-by dropdown'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 7H21" stroke="white" strokeWidth="1.5" strokeLinecap="round"></path>
                                                <path d="M6 12H18" stroke="white" strokeWidth="1.5" strokeLinecap="round"></path>
                                                <path d="M10 17H14" stroke="white" strokeWidth="1.5" strokeLinecap="round"></path>
                                            </svg>
                                            <span>Low To High</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{ margin: 0 }}>
                                        <Dropdown.Item href="#">
                                            Top rate
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            Mid rate
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            Low rate
                                        </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    
                                </div>
                            </div>
                            
                            <div className="content-item active open">
                                {
                                    data.dataContent.slice(0,visible).map ((item,key)=>(
                                        <div key={key} className="col-item">
                                            <div className="sc-card-product menu_card style-h7">
                                                <div className="meta-info style">
                                                    <div className="author">
                                                        <div className="avatar">
                                                            <img src={item.imgAuthor} alt="Axies" />
                                                        </div>
                                                        <div className="info">
                                                            <span>Creator</span>
                                                            <h6> <Link to="/author-02">{item.nameAuthor}</Link> </h6>
                                                        </div>
                                                    </div>
                                                    <button className="wishlist-button heart"><span className="number-like"> {item.wishlist}</span></button>
                                                </div>
                                                <div className="card-media">
                                                    <Link to="/item-details-01"><img src={item.img} alt="Axies" /></Link>
                                                    <div className="featured-countdown">
                                                        <span className="slogan"></span>
                                                        <Countdown date={Date.now() + 500000000}>
                                                            <span>Ready, Go!</span>
                                                        </Countdown>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <button onClick={() => setModalShow(true)} data-toggle="modal" data-target="#popup_bid" className="sc-button style-place-bid style bag fl-button pri-3"><span>Place Bid</span></button>
                                                    </div>
                                                </div>
                                                <div className="card-title">
                                                    <h5><Link to="item-details.html">{item.title}</Link></h5>
                                                </div>
                                                <div className="meta-info">
                                                    <div className="author">
                                                        <div className="info">
                                                            <span>Current Bid</span>
                                                            <span className="pricing">{item.price}</span>
                                                        </div>
                                                    </div>
                                                    <div className="tags">{item.tags}</div>
                                                </div>
                                            </div>   
                                        </div>
                                    ))
                                }

                                {
                                    visible < data.dataContent.length && 
                                    <div className="col-md-12 wrap-inner load-more text-center btn-auction item center">
                                        <Link to="#" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                                    </div>
                                }
                            </div>
                        </TabPanel>
                    ))
                }
            </Tabs>
        </div>
        <CardModal
        show={modalShow}
        onHide={() => setModalShow(false)}
         />
        
    </Fragment>
  )
}

export default ItemContent