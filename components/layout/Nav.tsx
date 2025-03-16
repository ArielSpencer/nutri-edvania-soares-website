"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navData = [
  { name: 'Home', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Blog', path: '/blog' },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-8">
        {navData.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className={`hover:text-accent ease-standard duration-normal ${
                pathname === item.path
                  ? 'text-accent font-medium'
                  : 'text-text-body'
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;