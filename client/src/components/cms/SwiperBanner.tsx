import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { TextBannerBg } from './TextBannerBg';
import { EffectFade } from 'swiper';
import { useState } from 'react';
import { urlFor } from '../../utils/sanity';
import { firstBannerData } from '../../typing';
import { Swiper as SwiperType } from 'swiper/types';

interface Props {
  dataBanner: [firstBannerData];
}

export const SwiperBanner = ({dataBanner}: Props) => {
  const [swiper, setSwiper] = useState<SwiperType>();
  const [currentSlide, setCurrentSlide] = useState<Number>();
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
          setCurrentSlide(swiper?.activeIndex);
        }}
      >
        {dataBanner?.map((e: firstBannerData, index: number) => {
          return (
            <SwiperSlide key={index}>
              <TextBannerBg
                textPosition={e.textPosition}
                title={e.title}
                text={e.text}
                button={e.button}
                textTheme={e.textTheme}
                background={urlFor(e.urlImg.asset).url()}
                logo={urlFor(e.urlImgLogo?.asset).url()}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="md:flex gap-8 mt-9 md:px-24 px-0 justify-center hidden">
        {dataBanner?.map((e: firstBannerData, index: number) => {
          return (
            <div
              key={index}
              className={`ps-swiper-banner--paginator rounded-2xl cursor-pointer w-fit h-fit ${
                index === swiper?.activeIndex ? 'active' : ''
              }`}
              onClick={() => {
                swiper?.slideTo(index);
                setCurrentSlide(index);
              }}
            >
              <img
                className="rounded-2xl w-52 h-28"
                src={urlFor(e.urlImgPaginator.asset).url()}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
