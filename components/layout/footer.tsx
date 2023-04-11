import BayberLogoSVG from '@/public/bayber-logo.svg';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

function Footer() {
  const { t } = useTranslation('common');
  return (
    <>
      <div className="w-full h-full bg-white shadow-lg shadow-black">
        <div className="container flex flex-col items-center justify-between gap-12 p-12 mx-auto lg:flex-row">
          <div className="lg:w-96">
            <h1 className="mb-2 text-[#014458]">Bayber</h1>
            <p>{t('footer.description')}</p>
          </div>
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="lg:w-[23rem]">
              <h2 className="font-bold text-[#014458]">
                {t('footer.locationLabel')}
              </h2>
              <p>{t('common.companyAddress')}</p>
            </div>
            <div className="lg:w-40">
              <h2 className="font-bold text-[#014458]">
                {t('footer.helpLabel')}
              </h2>
              <p>
                <a href={`mailto:` + t('common.companyEmail')}>
                  {t('common.companyEmail')}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-white shadow-lg shadow-black">
        <div className="container flex flex-col items-center justify-between gap-4 px-12 py-4 mx-auto text-sm font-light text-center text-gray-400 md:text-left md:flex-row">
          <Image src={BayberLogoSVG} alt="Bayber logo" width={100} />
          <span>{t('footer.copyright')}</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
