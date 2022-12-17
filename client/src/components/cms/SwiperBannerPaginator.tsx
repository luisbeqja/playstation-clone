import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Autoplay } from 'swiper';
import { TextBannerImage } from './TextBannerImage';
import { EffectFade } from 'swiper';
import { useState } from 'react';
import { urlFor } from '../../utils/sanity';
import { Swiper as SwiperType } from 'swiper/types';
import { secondBannerData } from '../../typing';

interface Props {
  dataBanner: [secondBannerData];
}

export const SwiperBannerPaginator = ({ dataBanner }: Props) => {
  const [swiper, setSwiper] = useState<SwiperType>();
  const [currentSlide, setCurrentSlide] = useState<Number>();

  return (
    <div className="ps-swiper-banner">
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => {
          setCurrentSlide(swiper?.activeIndex);
        }}
      >
        {dataBanner?.map((e: secondBannerData, index: number) => {
          return (
            <SwiperSlide key={index}>
              <TextBannerImage
                title={e.title}
                text={e.text}
                button={e.button}
                image={urlFor(e.urlImg.asset).url()}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="md:flex gap-8 mt-9 md:px-24 px-0 justify-center hidden">
        {dataBanner?.map((e: secondBannerData, index: number) => {
          return (
            <div
              key={index}
              className={`ps-swiper-banner--paginator-text hover:opacity-100 rounded-2xl cursor-pointer w-fit h-fit text-center ${
                index === swiper?.activeIndex ? 'active' : ''
              }`}
              onClick={() => {
                swiper?.slideTo(index);
                setCurrentSlide(index);
              }}
            >
              <div className=" m-3 w-60 flex justify-center">
                <img
                  className="rounded-2xl h-28"
                  src={urlFor(e.urlImg.asset).url()}
                  alt=""
                />
              </div>
              {e.title && <p className="text-center m-4">{e.title}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};
