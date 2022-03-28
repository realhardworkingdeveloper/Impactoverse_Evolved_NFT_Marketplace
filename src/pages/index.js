import Home05 from "./Home05";
import DIYOption from "./DIYOption";
import CreateCollection from "./CreateCollection";
import CreateItem from "./CreateItem";
import ExploreForSales from "./ExploreForSales";
import Gallery from "./Gallery";
import Campaign from "./Campaign";
import Vote from "./Vote";
import DFYOption from "./DFYOption";

import Home01 from "./Home01";
import Home02 from "./Home02";
import Home03 from "./Home03";
import Home04 from "./Home04";
import Home06 from "./Home06";
import Home07 from "./Home07";
import Home08 from "./Home08";
import Explore01 from "./Explore01";
import Explore02 from "./Explore02";
import Login from "./Login";
import Explore03 from "./Explore03";
import Explore04 from "./Explore04";
import LiveAuctions from "./LiveAuctions";
import ItemDetails01 from "./ItemDetails01";
import ItemDetails02 from "./ItemDetails02";
import Activity01 from "./Activity01";
import Activity02 from "./Activity02";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import HelpCenter from "./HelpCenter";
import Authors01 from "./Authors01";
import Member from "./Member";
import WalletConnect from "./WalletConnect";
import EditProfile from "./EditProfile";
import Ranking from "./Ranking";
import SignUp from "./SignUp";
import NoResult from "./NoResult";
import FAQ from "./FAQ";
import Contact01 from "./Contact01";
import Contact02 from "./Contact02";


const routes = [
  { path: '/', component: <Home05 />},
  { path: '/login', component: <Login />},
  { path: '/diy', component: <DIYOption />},
  { path: '/dfy', component: <DFYOption />},
  { path: '/create_collection', component: <CreateCollection />},
  { path: '/create_item', component: <CreateItem />},
  { path: '/sales', component: <ExploreForSales />},
  { path: '/gallery', component: <Gallery />},
  { path: '/blog', component: <Blog />},
  { path: '/blog-details', component: <BlogDetails />},
  { path: '/campaign', component: <Campaign />},
  { path: '/howto', component: <FAQ />},
  { path: '/vote', component: <Vote />},
  { path: '/member', component: <Member />},
  { path: '/wallet-connect', component: <WalletConnect />},
  { path: '/item-details-01', component: <ItemDetails01 />},

  // { path: '/home-02', component: <Home02 />},
  // { path: '/home-03', component: <Home03 />},
  // { path: '/home-04', component: <Home04 />},
  // { path: '/home-05', component: <Home05 />},
  // { path: '/home-06', component: <Home06 />},
  // { path: '/home-07', component: <Home07 />},
  // { path: '/home-08', component: <Home08 />},
  // { path: '/explore-01', component: <Explore01 />},
  // { path: '/explore-02', component: <Explore02 />},
  // { path: '/explore-03', component: <Explore03 />},
  // { path: '/explore-04', component: <Explore04 />},
  // { path: '/live-auctions', component: <LiveAuctions />},
  // { path: '/item-details-01', component: <ItemDetails01 />},
  // { path: '/item-details-02', component: <ItemDetails02 />},
  { path: '/activity-01', component: <Activity01 />},
  { path: '/activity-02', component: <Activity02 />},
  // { path: '/help-center', component: <HelpCenter />},
  // { path: '/authors-01', component: <Authors01 />},
  // { path: '/authors-02', component: <Authors02 />},
  // { path: '/wallet-connect', component: <WalletConnect />},
  // { path: '/create-item', component: <CreateItem />},
  // { path: '/edit-profile', component: <EditProfile />},
  // { path: '/ranking', component: <Ranking />},
  // { path: '/sign-up', component: <SignUp />},
  // { path: '/no-result', component: <NoResult />},
  // { path: '/faq', component: <FAQ />},
  // { path: '/contact-01', component: <Contact01 />},
  // { path: '/contact-02', component: <Contact02 />},
]

export default routes;