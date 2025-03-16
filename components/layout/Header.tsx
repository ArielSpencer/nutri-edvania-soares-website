import Link from 'next/link';

import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="p-8 text-text-body bg-bg-highlight/80 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="transition-colors duration-normal">
          <h1 className="text-2xl font-semibold text-accent hover:text-btn-accent ease-standard duration-normal cursor-pointer">
            Edvânia Soares
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link
            href="/contato"
            className="bg-btn-primary hover:bg-btn-primary-hover text-text-heading py-2 px-6 rounded-ee-md rounded-ss-md transition-all ease-standard duration-normal focus:ring-2 focus:ring-accent focus:outline-none cursor-pointer">
              Contato
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;