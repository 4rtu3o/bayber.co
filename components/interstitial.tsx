import Image from 'next/image';
import InterstitialImage from '@/public/interstitial.jpeg';
import { useTranslation } from 'next-i18next';

function Interstitial() {
  const { t } = useTranslation('common');
  return (
    <div className="relative w-full -z-10">
      <div className="absolute w-full h-full md:bg-black/30"></div>
      <Image src={InterstitialImage} alt="Interstitial Image"/>
      <div className="md:absolute md:top-12 md:left-24 md:text-white md:w-[32rem] px-8 md:px-0 mt-4 md:mt-0">
        <h3 className="mb-2 uppercase">{t('interstitial.subtitle')}</h3>
        <h1 className="leading-tight md:text-white">{t('interstitial.title')}</h1>
      </div>
    </div>
  );
}

export default Interstitial;
