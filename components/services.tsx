import Image from 'next/image';
import TruckImage from '@/public/truck.jpeg';
import TrainImage from '@/public/train.jpeg';
import PlaneImage from '@/public/plane.jpeg';
import ShipImage from '@/public/ship.jpeg';

import { useTranslation } from 'next-i18next';

import { ChevronRightIcon } from '@heroicons/react/24/outline';

function Services() {
  const { t } = useTranslation('common');
  const serviceImages = [
    {
      src: TruckImage,
      verticalText: 'Transportation',
      serviceName: t('services.road'),
    },
    {
      src: TrainImage,
      verticalText: 'Transportation',
      serviceName: t('services.railway'),
    },
    {
      src: PlaneImage,
      verticalText: 'Transportation',
      serviceName: t('services.air'),
    },
    {
      src: ShipImage,
      verticalText: 'Transportation',
      serviceName: t('services.sea'),
    },
  ];
  return (
    <div className="container mx-auto" id="services">
      <div className="flex flex-col gap-3 mb-12">
        <h2 className="font-bold uppercase">{t('services.subtitle')}</h2>
        <h1>{t('services.title')}</h1>
      </div>
      <div className="flex justify-between my-6 mb-20">
        {serviceImages.map(({ src, verticalText, serviceName }, i) => {
          return (
            <div
              key={serviceName}
              className="w-72 h-[28rem] overflow-clip relative"
            >
              <Image
                src={src}
                alt={serviceName}
                className="object-cover h-full transition-all duration-700 hover:scale-125"
              />
              <div className="absolute top-0 w-full h-full pointer-events-none bg-black/30"></div>
              <span className="absolute text-sm font-semibold text-white uppercase -rotate-90 -left-7 top-20">
                {verticalText}
              </span>
              <span className="absolute flex gap-3 text-xl font-bold text-white bottom-7 left-8">
                {serviceName}{' '}
                <ChevronRightIcon className="w-5" strokeWidth={2.5} />
              </span>
              <span className="absolute text-5xl font-bold text-white top-7 right-7">
                0{i + 1}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
