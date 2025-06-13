// import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import BannerSec from './BannerSec'
import AboutSec from './AboutSec';
import NestedSwiper from './NestedSlider';
import MainHeader from '../../Common/MainHeader';
import NewOfferSlider from './NewOfferSlider';
import ZonesList from './ZonesList';

const HomePage = () => {
  return (
    <>

      <MainHeader></MainHeader>
      <BannerSec></BannerSec>
      <AboutSec></AboutSec>
      <NestedSwiper></NestedSwiper>
      <NewOfferSlider></NewOfferSlider>
      <ZonesList></ZonesList>



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
