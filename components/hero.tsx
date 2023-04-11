import Image from 'next/image';
import HeroBackground from '@/public/hero-background.png';
import { useTranslation } from 'next-i18next';

const Hero = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <div className="w-full h-screen" id="hero">
        <div className="absolute h-full -z-10">
          <div className="absolute w-full h-full bg-black/30"></div>
          <Image
            src={HeroBackground}
            alt="Background Image"
            className="object-cover h-full"
          />
        </div>
        <div className="container h-full mx-auto text-white">
          <div className="flex gap-4 flex-col justify-center h-full w-[45rem]">
            <h2 className="text-lg font-bold uppercase">
              {t('hero.subtitle')}
            </h2>
            <h1 className="font-bold text-white text-7xl">{t('hero.title')}</h1>
            <p className="my-6 text-xl text-white">{t('hero.paragraph')}</p>
            <div className="flex gap-8">
              <a href="#contact">
                <button>{t('common.requestQuoteButton')}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
