import { Header } from '../components/Header';
import { pageMenu } from '../data/homePageData';
import { SwiperBanner } from '../components/cms/SwiperBanner';
import { firstBannerText, secondBannerText } from '../data/homePageData';

export const Index = () => {
  return (
    <div>
      <Header pageMenu={pageMenu} />
      <SwiperBanner dataBanner={firstBannerText} />
    </div>
  );
};
