import { Swiper, SwiperSlide } from 'swiper/react';
import CalikLogo from '@/public/clients/calik.jpg';
import Image from 'next/image';

import 'swiper/css';
import { Autoplay, FreeMode } from 'swiper';

const clientImages = [
  {
    src: CalikLogo,
    companyName: 'Road Freight',
  },
  {
    src: CalikLogo,
    companyName: 'Railway Freight',
  },
  {
    src: CalikLogo,
    companyName: 'Air Freight',
  },
  {
    src: CalikLogo,
    companyName: 'Sea Freight',
  },
  {
    src: CalikLogo,
    companyName: 'Sea Freight',
  },
  {
    src: CalikLogo,
    companyName: 'Sea Freight',
  },
];

function Partners() {
  return (
    <div className="container flex flex-col items-center gap-3 mx-auto my-20 text-center">
      <h3>Join Us Today</h3>
      <h1>Our Partners</h1>
      <p className="w-3/5 mt-8">
        We pride ourselves on providing the best transport and shipping services
        available allover the world. Our skilled personnel, utilising the latest
        communications, tracking and combined with experience through integrated
        supply chain solutions!
      </p>
      <div className="container w-2/3 mx-auto pointer-events-none select-none">
        <Swiper
          loop={true}
          modules={[Autoplay, FreeMode]}
          spaceBetween={50}
          slidesPerView={3}
          freeMode={true}
          autoplay={{ delay: 1, disableOnInteraction: true }}
          speed={7000}
          
        >
          {clientImages.map(({ src, companyName }, i) => {
            return (
              <SwiperSlide key={companyName}>
                <Image src={src} alt={companyName} />
                <span>{companyName}</span>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Partners;
