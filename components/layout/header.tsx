import Image from 'next/image';
// import Logo from '@/public/bayber-logo-white.min.svg';
import { Key, useEffect, useState } from 'react';
import { LanguageIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import Logo from './bayber-logo';

import { useTranslation } from 'next-i18next';

type navData = {
  name: string;
  href: string;
};

function Header() {
  const { t } = useTranslation('common');
  const [headerType, setHeaderType] = useState('header-start');
  const data = [
    { name: t('layout.home'), href: '/' },
    { name: t('layout.about'), href: '#about' },
    { name: t('layout.services'), href: '#services' },
    { name: t('layout.contact'), href: '#contact' },
  ];

  const listenScrollEvent = () => {
    if (window.scrollY > 80) {
      return setHeaderType('header-scrolled');
    } else {
      return setHeaderType('header-start');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header
      className={classNames(
        `fixed z-10 flex items-center w-full h-20 border-b-[0.3px] border-white/50 transition-colors duration-300`,
        headerType === 'header-scrolled'
          ? 'bg-white text-[#1B1A1A]'
          : 'text-white'
      )}
    >
      <div className="container flex items-center justify-between px-4 mx-auto md:px-0">
        {/* LOGO */}
        <Logo className={headerType} width={100}/>
        {/* NAV */}
        <div className="items-center hidden gap-4 lg:flex">
          {data.map(({ name, href }: navData) => (
            <nav key={name satisfies Key}>
              <ul className="mx-5">
                <li>
                  <a href={href}>{name}</a>
                </li>
              </ul>
            </nav>
          ))}

          {/* CTA */}
          <a href="#contact">
            <button className="mx-8">{t('common.requestQuoteButton')}</button>
          </a>
          {/* LANGUAGE SWITCHER */}
          <button className="bg-transparent">
            <LanguageIcon
              width={25}
              color={headerType === 'header-scrolled' ? '#1B1A1A' : 'white'}
              className="transition-colors duration-300"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
