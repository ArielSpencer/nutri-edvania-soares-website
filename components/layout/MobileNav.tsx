"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navData = [
  { name: 'Home', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Blog', path: '/blog' },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const showContactButton = pathname !== '/contato';

  return (
    <div className="relative">

      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <span
          className={`block w-6 h-0.5 bg-text-heading transition-transform duration-normal ease-emphasized ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-text-heading transition-opacity duration-normal ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-text-heading transition-transform duration-normal ease-emphasized ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-14 right-0 w-64 bg-bg-primary shadow-lg rounded-ee-lg rounded-ss-lg py-8 px-6 border border-bg-secondary z-50">
          <nav>
            <ul className="flex flex-col gap-4">
              {navData.map((item, index) => (
                <li key={index} className="border-b border-bg-secondary pb-2 last:border-0">
                  <Link
                    href={item.path}
                    className={`block py-1 hover:text-accent transition-colors ease-standard duration-normal ${
                      pathname === item.path
                        ? 'text-accent font-medium'
                        : 'text-text-body'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {showContactButton && (
                <li className="pt-2">
                  <Link
                    href="/contato"
                    className="w-full bg-btn-primary hover:bg-btn-primary-hover text-text-heading py-2 px-4 rounded-ee-md rounded-ss-md transition-all ease-standard duration-normal">
                      Entrar em contato
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;