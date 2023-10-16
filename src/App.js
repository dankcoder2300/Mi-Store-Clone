import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import data from "./data/data.json";
import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavOptios from "./components/NavOptios";

function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
      <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} 
      fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer} />
      <Heading text={"STAR PRODUCTS"}/>
      <StarProduct starProduct={data.starProduct}/>
      <Heading text={"HOT ACCESSORIES"}/>
      <HotAccessoriesMenu/>

      <Routes>
      <Route exact path="/music" element={
        <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>
      }
      />
      <Route exact path="/smartDevice" element={
        <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>
      }
      />
      <Route exact path="/home" element={
        <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>
      }
      />
      <Route exact path="/lifestyle" element={
        <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>
      }
      />
      <Route exact path="/mobileaccessories" element={
        <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>
      }
      />

      </Routes>

      <Heading text="PRODUCT REVIEWS"/>

      <ProductReviews productReviews={data.productReviews}/>

      <Heading text={"VIDEOS"}/>

      <Videos videos={data.videos}/>

      <Heading text={"IN THE PRESS"}/>

      <Banner banner={data.banner} />

      <Footer footer={data.footer}/>

    </Router>
  );
}

export default App;
