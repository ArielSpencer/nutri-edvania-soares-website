"use client";

import { SiInstagram, SiWhatsapp, SiYoutube } from "react-icons/si";
import Link from 'next/link';

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/nutriedvaniasoares/', icon: 'SiInstagram' },
  { name: 'WhatsApp', url: 'https://wa.me/5511997239915', icon: 'SiWhatsapp' },
  { name: 'YouTube', url: 'https://www.youtube.com/@NutriEdvaniaSoares', icon: 'SiYoutube' }
];

const linkGroups = [
  {
    title: 'Navegação',
    links: [
      { name: 'Home', url: '/' },
      { name: 'Sobre', url: '/sobre' },
      { name: 'Serviços', url: '/servicos' },
      { name: 'Blog', url: '/blog' },
      { name: 'Contato', url: '/contato' }
    ]
  },
  {
    title: 'Serviços',
    links: [
      { name: 'Atendimento Nutricional Personalizado', url: '/servicos/atendimento-nutricional'},
      { name: 'Palestras e Programas de Saúde para Empresas', url: '/servicos/palestras-e-programas-de-saude' },
      { name: 'Programas de Saúde e Bem-estar', url: '/servicos/saude-e-bem-estar' },
      { name: 'Mentoria para Nutricionistas', url: '/servicos/mentoria-para-nutricionistas' },
      { name: 'E-books e Materiais Educativos', url: '/servicos/e-books-e-materiais-educativos' }
    ]
  }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary pt-12 pb-6 px-8 text-text-body">
      <div className="container mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">

          <div className="lg:col-span-2 lg:pr-8">
            <Link href="/">
              <h2 className="text-xl font-semibold text-text-heading mb-4">Edvânia Soares</h2>
            </Link>
            <p className="mb-4">CEO da Estima Nutrição, uma empresa que há 15 anos se dedica a promover saúde com excelência.</p>
            <p className="mb-4">Nossa clínica já atendeu mais de 180 mil pacientes, sempre com um olhar humanizado e estratégias personalizadas para cada indivíduo.</p>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-heading hover:text-accent transition-colors duration-normal ease-standard"
                >
                  {link.icon === 'SiInstagram' && <SiInstagram className="text-xl" />}
                  {link.icon === 'SiWhatsapp' && <SiWhatsapp className="text-xl" />}
                  {link.icon === 'SiYoutube' && <SiYoutube className="text-xl" />}
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 lg:ml-2">
            <h3 className="text-text-heading font-medium mb-4">{linkGroups[0].title}</h3>
            <ul className="space-y-2">
              {linkGroups[0].links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.url}
                    className="hover:text-accent transition-colors duration-normal ease-standard"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 lg:ml-2">
            <h3 className="text-text-heading font-medium mb-4">{linkGroups[1].title}</h3>
            <ul className="space-y-2">
              {linkGroups[1].links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.url}
                    className="hover:text-accent transition-colors duration-normal ease-standard"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-text-heading font-medium mb-4">Contato</h3>
            <address className="not-italic">
              <p className="mb-2">
                <a
                  href="tel:08005505088"
                  className="hover:text-accent transition-colors duration-normal ease-standard"
                >
                  0800 550 5088
                </a>
              </p>
              <p className="mb-2">
                <a
                  href="tel:+5511997239915"
                  className="hover:text-accent transition-colors duration-normal ease-standard"
                >
                  (11) 99723 9915
                </a>
              </p>
              <p className="mb-2">
                <a 
                  href="mailto:contato@edvaniasoares.com.br"
                  className="hover:text-accent transition-colors duration-normal ease-standard"
                >
                  contato@edvaniasoares.com.br
                </a>
              </p>
            </address>

            <a
              href="/contato"
              className="inline-block mt-6 bg-btn-primary hover:bg-btn-primary-hover text-text-heading py-2 px-6 rounded-ee-md rounded-ss-md transition-all duration-normal ease-standard"
            >
              Entrar em Contato
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-bg-highlight/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              &copy; {currentYear} Edvânia Soares. Todos os direitos reservados.
            </p>
            <div className="text-sm">
              <Link href="https://arielspencer.com.br" className="hover:text-accent transition-colors duration-normal ease-standard">
                Desenvolvido por Ariel Spencer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;