import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Images for Swiper
import CalikLogo from '@/public/clients/calik.jpg';
import CalikWorldLogo from '@/public/clients/clk-world-logo.jpg';
import GapInsaatLogo from '@/public/clients/gap-insaat-logo.svg';
import GapPazarlamaLogo from '@/public/clients/gap-pazarlama-logo.png';
import LinasLogo from '@/public/clients/linas-logo.svg';
import RzdLogo from '@/public/clients/rzd-logo.svg';

import 'swiper/css';
import { Autoplay, FreeMode } from 'swiper';

const clientImages = [
  {
    src: CalikLogo,
    companyName: 'Road Freight',
  },
  {
    src: CalikWorldLogo,
    companyName: 'Railway Freight',
  },
  {
    src: GapInsaatLogo,
    companyName: 'Air Freight',
  },
  {
    src: LinasLogo,
    companyName: 'Sea Freight',
  },
  {
    src: GapPazarlamaLogo,
    companyName: 'Sea Freight',
  },
  {
    src: RzdLogo,
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
      <div className="container w-4/5 mx-auto my-16 pointer-events-none select-none">
        <Swiper
          loop={true}
          modules={[Autoplay, FreeMode]}
          spaceBetween={50}
          slidesPerView={3}
          freeMode={true}
          autoplay={{ delay: 1, disableOnInteraction: true }}
          speed={4000}
        >
          {clientImages.map(({ src, companyName }, i) => {
            return (
              <SwiperSlide key={companyName} className="my-auto text-center">
                <Image
                  src={src}
                  alt={companyName}
                  className="object-contain max-h-14"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Partners;
