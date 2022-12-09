import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { TextBannerBg } from './TextBannerBg';
import { EffectFade } from 'swiper';
import { useState } from 'react';
import { urlFor } from '../../utils/sanity';

export const SwiperBanner = (props: any) => {
  const [swiper, setSwiper] = useState<any>();
  const [currentSlide, setCurrentSlide] = useState<any>();
  return (
    <div className="ps-swiper-banner">
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        modules={[EffectFade, Autoplay]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => {
          setCurrentSlide(swiper.activeIndex);
        }}
      >
        {props.dataBanner?.map((e: any) => {
          return (
            <SwiperSlide>
              <TextBannerBg
                textPosition={e.textPosition}
                title={e.title}
                text={e.text}
                button={e.button}
                textTheme={e.textTheme}
                background={urlFor(e.urlImg.asset).url()}
                logo={urlFor(e.urlImgLogo?.asset).url()}
                bannerTipe={e.bannerTipe}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex gap-8 mt-9 px-24 justify-center">
        {props.dataBanner?.map((e: any, index: number) => {
          return (
            <div
              className={`ps-swiper-banner--paginator w-96 rounded-2xl cursor-pointer ${
                index === swiper?.activeIndex ? 'active' : ''
              }`}
              onClick={() => {
                swiper.slideTo(index);
                setCurrentSlide(index);
              }}
            >
              <img
                className=" rounded-2xl"
                src={urlFor(e.urlImg.asset).url()}
                alt=""
              />
              {e.titlePaginator && (
                <p className="text-center m-4">{e.titlePaginator}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
