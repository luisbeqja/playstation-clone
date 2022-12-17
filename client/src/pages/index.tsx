import { Header } from '../components/Header';
import { pageMenu } from '../mooks/homePageData';
import { SwiperBanner } from '../components/cms/SwiperBanner';
import { SwiperBannerPaginator } from '../components/cms/SwiperBannerPaginator';
import useFetchSanity from '../hooks/useFetchSanity';
import { PsPlussBanner } from '../components/cms/PsPlussBanner';
import { Footer } from '../components/Footer';
import { SocialBanner } from '../components/SocialBanner';

export const Index = () => {
  const [firstBannerData] = useFetchSanity(`*[_type == "firstBanner"]`);
  const [secondBannerData] = useFetchSanity(`*[_type == "secondBanner"]`);
  const [thirdBannerData] = useFetchSanity(`*[_type == "thirdBanner"]`);

  return (
    <div>
      <Header pageMenu={pageMenu} />
      <SwiperBanner dataBanner={firstBannerData} />
      <br></br>
      <SwiperBannerPaginator dataBanner={secondBannerData} />
      <br></br>
      <br></br>
      <br></br>
      <PsPlussBanner dataBanner={thirdBannerData} />
      <SocialBanner />
      <Footer />
    </div>
  );
};