import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Slider = () => {
  return (
    <div className='mt-10 mx-10 md:mx-20'>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <div className=''>
      <SwiperSlide><img className='w-full h-[35vh]  md:h-[50vh]' src="https://i.ibb.co/LrsfZnX/s1.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-[35vh] md:h-[50vh]'  src="https://i.ibb.co/N7F5jNT/s2.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-[35vh] md:h-[50vh]' src="https://i.ibb.co/chDyNTp/s3.png" alt="" /></SwiperSlide>
      </div>
      
      
    </Swiper>
    </div>
  );
};

export default Slider;
