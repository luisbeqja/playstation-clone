import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Autoplay } from 'swiper';
import { TextBannerImage } from './TextBannerImage';
import { EffectFade } from 'swiper';
import { useState } from 'react';
import { urlFor } from '../../utils/sanity';

export const SwiperBannerPaginator = (props: any) => {
  const [swiper, setSwiper] = useState<any>();
  const [currentSlide, setCurrentSlide] = useState<any>();
  
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
          setCurrentSlide(swiper.activeIndex);
        }}
      >
        {props.dataBanner?.map((e: any, index: number) => {
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
        {props.dataBanner?.map((e: any, index: number) => {
          return (
            <div
              key={index}
              className={`ps-swiper-banner--paginator-text hover:opacity-100 rounded-2xl cursor-pointer w-fit h-fit text-center ${
                index === swiper?.activeIndex ? 'active' : ''
              }`}
              onClick={() => {
                swiper.slideTo(index);
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
              <p className="mb-3">{e.title}</p>

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
