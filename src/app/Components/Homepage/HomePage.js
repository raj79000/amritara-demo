// "use client";
// import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import dynamic from "next/dynamic";

const MainHeader = dynamic(() => import("../../Common/MainHeader"));
const BannerSec = dynamic(() => import("./BannerSec"));
const AboutSec = dynamic(() => import("./AboutSec"));
const NestedSwiper = dynamic(() => import("./NestedSlider"));
const NewOfferSlider = dynamic(() => import("./NewOfferSlider"));
const ZonesList = dynamic(() => import("./ZonesList"));
const UntoldStories = dynamic(() => import("./UntoldStories"));


// import BannerSec from './BannerSec'
// import AboutSec from './AboutSec';
// import NestedSwiper from './NestedSlider';
// import MainHeader from '../../Common/MainHeader';
// import NewOfferSlider from './NewOfferSlider';
// import ZonesList from './ZonesList';
// import UntoldStories from './UntoldStories';

const HomePage = () => {
  return (
    <>

      <MainHeader></MainHeader>
      <BannerSec></BannerSec>
      <AboutSec></AboutSec>
      <NestedSwiper></NestedSwiper>
      <UntoldStories></UntoldStories>
      <ZonesList></ZonesList>
      <NewOfferSlider></NewOfferSlider>
      
     



    {/* <Fullpage>
      <FullPageSections>

        <FullpageSection>
          <MainHeader></MainHeader>
          <BannerSec></BannerSec>
          <AboutSec></AboutSec>
        </FullpageSection>
        

        <FullpageSection>
          <h1>Section 1</h1>
        </FullpageSection>

     </FullPageSections>
    </Fullpage> */}
    </>
  )
}

export default HomePage
