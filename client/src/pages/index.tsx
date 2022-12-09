import { Header } from '../components/Header';
import { pageMenu } from '../mooks/homePageData';
import { SwiperBanner } from '../components/cms/SwiperBanner';
import useFetchSanity from '../hooks/useFetchSanity';

export const Index = () => {
  const [bannerData] = useFetchSanity(`*[_type == "firstBanner"]`);

  return (
    <div>
      <Header pageMenu={pageMenu} />
      <SwiperBanner dataBanner={bannerData} />
    </div>
  );
};
