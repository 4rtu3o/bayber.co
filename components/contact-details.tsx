import { HomeIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'next-i18next';

function ContactDetails() {
  const { t } = useTranslation('common');
  return (
    <div className="container flex flex-col gap-3 px-8 mx-auto my-20 md:items-center md:text-center md:px-0" id="contact">
      <h2 className="font-bold uppercase">{t('contactDetails.subtitle')}</h2>
      <h1>{t('contactDetails.title')}</h1>
      <p className="mt-8 md:w-3/5">{t('contactDetails.paragraph')}</p>
      <ul className="flex flex-col gap-6 my-8">
        <li className="flex flex-col items-center gap-2">
          <HomeIcon width={30} color="#014458" />
          <span className="max-w-sm text-center text-gray-600">
            {t('common.companyAddress')}
          </span>
        </li>
        <li className="flex flex-col items-center gap-2">
          <EnvelopeIcon width={30} color="#014458" />
          <span className="max-w-sm text-center text-gray-600">
            <a href={`mailto:` + t('common.companyEmail')}>
              {t('common.companyEmail')}
            </a>
          </span>
        </li>
        <li className="flex flex-col items-center gap-2">
          <PhoneIcon width={30} color="#014458" />
          <span className="max-w-sm text-center text-gray-600">
            <a href={`tel:` + t('common.companyPhone')}>
              {t('common.companyPhone')}
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ContactDetails;
