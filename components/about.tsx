import Image from 'next/image';
import AboutImage from '@/public/about.jpeg';
import PackageSVG from '@/public/package.svg';
import { useTranslation } from 'next-i18next';

function About() {
  const { t } = useTranslation('common');

  return (
    <div className="container flex mx-auto my-20" id="about">
      <div className="relative w-1/3">
        <Image src={AboutImage} alt="About image" />
        <div className="bg-[#014458] w-56 px-6 py-8 absolute bottom-8 left-8 flex flex-col items-center justify-center gap-3 text-white">
          <Image src={PackageSVG} alt="package icon" width={70} />
          <span className="mt-2 text-sm font-bold text-center uppercase">
            {t('about.moreThan')}
          </span>
          <span className="text-4xl font-bold">250</span>
          <span className="text-sm font-bold text-center uppercase">
            {t('about.successfulShipments')}
          </span>
        </div>
      </div>
      <div className="flex flex-col w-2/3 gap-4 px-8">
        <h2 className="font-bold uppercase">{t('about.subtitle')}</h2>
        <h1>{t('about.title')}</h1>
        <div className="flex flex-col gap-8 mt-5">
          <p>{t('about.paragraph1')}</p>
          <p>{t('about.paragraph2')}</p>
          <div>
            <div className="flex items-center ml-4">
              <div className="h-3 w-3 bg-[#014458] mr-4"></div>
              <h3>{t('about.listTitle1')}</h3>
            </div>
            <p className="mt-2 ml-11">{t('about.listParagraph1')}</p>
          </div>
          <div>
            <div className="flex items-center ml-4">
              <div className="h-3 w-3 bg-[#014458] mr-4"></div>
              <h3>{t('about.listTitle2')}</h3>
            </div>
            <p className="mt-2 ml-11">{t('about.listParagraph2')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
