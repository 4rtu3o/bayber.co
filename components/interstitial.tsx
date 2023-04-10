import Image from 'next/image';
import InterstitialImage from '@/public/interstitial.jpeg';

function Interstitial() {
  return (
    <div className="relative w-full mb-24">
      <div className="absolute w-full h-full bg-black/30"></div>
      <Image src={InterstitialImage} alt="Interstitial Image" />
      <div className="absolute top-12 left-24 text-white w-[32rem]">
        <h3 className="mb-2 uppercase">
          Dedicated Customer Teams & An Agile Services
        </h3>
        <h1 className="leading-tight text-white">
          Global Logistics Partner To World’s Famous Brands!
        </h1>
      </div>
    </div>
  );
}

export default Interstitial;
