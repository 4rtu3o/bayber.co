import Image from 'next/image';
import InterstitialImage from '@/public/interstitial.jpeg';
import { useTranslation } from 'next-i18next';

function Interstitial() {
  const { t } = useTranslation('common');
  return (
    <div className="relative w-full -z-10">
      <div className="absolute w-full h-full bg-black/30"></div>
      <Image src={InterstitialImage} alt="Interstitial Image" />
      <div className="absolute top-12 left-24 text-white w-[32rem]">
        <h3 className="mb-2 uppercase">{t('interstitial.subtitle')}</h3>
        <h1 className="leading-tight text-white">{t('interstitial.title')}</h1>
      </div>
    </div>
  );
}

export default Interstitial;
