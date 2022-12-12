import { Header } from '../components/Header';
import { pageMenu } from '../mooks/homePageData';
import { SwiperBanner } from '../components/cms/SwiperBanner';
import { SwiperBannerPaginator } from '../components/cms/SwiperBannerPaginator';
import useFetchSanity from '../hooks/useFetchSanity';
import { PsPlussBanner } from '../components/cms/PsPlussBanner';

import BgPsPluss from '../assets/ps-plus-bg.webp';
import BgPsPlussLogo from '../assets/ps-plus-logo.webp';
import PsPlussGame from '../assets/ps-pluss-games.jpg';

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
      <br></br>
      <br></br>
      <PsPlussBanner
        background={BgPsPluss}
        logo={BgPsPlussLogo}
        text="Migliora la tua esperienza PlayStation con l'accesso a multigiocatore online, giochi mensili, sconti esclusivi e altro ancora."
        button="Espolora PlayStation Pluss"
        image={PsPlussGame}
      />
    </div>
  );
};