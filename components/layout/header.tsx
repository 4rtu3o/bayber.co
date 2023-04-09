import Image from 'next/image';
import Logo from '@/public/bayber-logo-white.min.svg';
import type { Key } from 'react';
import { LanguageIcon } from '@heroicons/react/24/solid';

type navData = {
  name: string;
  href: string;
};

const data = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

function Header() {
  return (
    <header className="flex items-center w-full h-20 border-b border-gray-300 bg-black/40">
      <div className="container flex items-center justify-between mx-auto">
        {/* LOGO */}
        <Image src={Logo} width={100} alt="Bayber Logo" />

        {/* NAV */}
        <div className="flex items-center gap-4">
          {data.map(({ name, href }: navData) => (
            <nav key={name satisfies Key} className="text-white">
              <ul>
                <li>
                  <a href={href}>{name}</a>
                </li>
              </ul>
            </nav>
          ))}

          {/* CTA */}
          <button className="mx-8">Request a Quote</button>
          {/* LANGUAGE SWITCHER */}
          <button className="bg-transparent">
            <LanguageIcon width={25} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
