import Image from 'next/image';
import HeroBackground from '@/public/hero-background.png';

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="absolute h-full -z-10">
          <div className="absolute w-full h-full bg-black/30"></div>
          <Image
            src={HeroBackground}
            alt="Background Image"
            className="object-cover h-full"
          />
        </div>
        <div className="container h-full mx-auto text-white">
          <div className="flex gap-4 flex-col justify-center h-full w-[37rem]">
            <h2 className="text-lg font-bold uppercase">
              Flexible, Improved and Accelerated Solutions
            </h2>
            <h1 className="font-bold text-white text-7xl">
              Full Sustainable Cargo Solutions!
            </h1>
            <p className="my-6 text-xl text-white">
              Representative logistics operator providing full range of services
              in the sphere of customs clearance and transportation worldwide.
            </p>
            <div className="flex gap-8">
              <button className="bg-white text-[#014458]">Services</button>
              <button>Request a Quote</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
