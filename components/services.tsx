import Image from 'next/image';
import TruckImage from '@/public/truck.jpeg';
import TrainImage from '@/public/train.jpeg';
import PlaneImage from '@/public/plane.jpeg';
import ShipImage from '@/public/ship.jpeg';

import { ChevronRightIcon } from '@heroicons/react/24/outline';

const serviceImages = [
  {
    src: TruckImage,
    verticalText: 'Transportation',
    serviceName: 'Road Freight',
  },
  {
    src: TrainImage,
    verticalText: 'Transportation',
    serviceName: 'Railway Freight',
  },
  {
    src: PlaneImage,
    verticalText: 'Transportation',
    serviceName: 'Air Freight',
  },
  {
    src: ShipImage,
    verticalText: 'Transportation',
    serviceName: 'Sea Freight',
  },
];

function Services() {
  return (
    <div className="container mx-auto">
      <div>
        <h3>Reliable Cargo Solutions!</h3>
        <h1>Digital Freight That Saves Your Time!</h1>
      </div>
      <div className="flex justify-between my-6">
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
                {serviceName} <ChevronRightIcon className="w-5" strokeWidth={2.5}/>
              </span>
              <span className="absolute text-5xl font-bold text-white top-7 right-7">0{i}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
