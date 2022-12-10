import { Header } from '../components/Header';
import { pageMenu } from '../mooks/homePageData';
import { SwiperBanner } from '../components/cms/SwiperBanner';
import { SwiperBannerPaginator } from '../components/cms/SwiperBannerPaginator';
import useFetchSanity from '../hooks/useFetchSanity';

export const Index = () => {
  const [firstBannerData] = useFetchSanity(`*[_type == "firstBanner"]`);
  const [secondBannerData] = useFetchSanity(`*[_type == "secondBanner"]`);

  return (
    <div>
      <Header pageMenu={pageMenu} />
      <SwiperBanner dataBanner={firstBannerData} />
      <br></br>
      <SwiperBannerPaginator dataBanner={secondBannerData} />
      <br></br>
    </div>
  );
};
