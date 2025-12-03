import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock,
  FiLinkedin,
  FiInstagram,
  FiGlobe,
  FiCode,
  FiSmartphone,
  FiShoppingCart,
  FiBookOpen,
  FiHome,
  FiArrowUp
} from 'react-icons/fi';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '/', label: t('nav.home'), icon: FiHome },
    { href: '/hakkimizda', label: t('nav.about'), icon: FiBookOpen },
    { href: '/dijital-cozumler', label: t('nav.solutions'), icon: FiCode },
    { href: '/urunler', label: t('nav.products'), icon: FiGlobe },
    { href: '/projelendirme', label: t('nav.projects'), icon: FiSmartphone },
    { href: '/iletisim', label: t('nav.contact'), icon: FiShoppingCart },
  ];

  const services = [
    'Web Sayfaları',
    'E-Ticaret Hizmetleri',
    'Marka Tasarımları',
    'İşinize Özel Yazılımlar',
    'Web\'den Mobile',
  ];

  const products = [
    'SchoolRoute',
    'MobilDers',
    'Mentör Sistemi',
  ];

  // X (Twitter) ikonu için özel SVG komponenti
  const XIcon = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  const socialLinks: Array<{
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    color: string;
  }> = [
    { href: '#', icon: XIcon, label: 'X (Twitter)', color: 'hover:text-gray-300' },
    { href: '#', icon: FiLinkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
    { href: '#', icon: FiInstagram, label: 'Instagram', color: 'hover:text-pink-500' },
  ];

  return (
    <footer className="relative bg-gray-900 dark:bg-black text-white border-t border-gray-800">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-20 h-20 md:w-24 md:h-24">
                <Image
                  src="/img/yb-logo.png"
                  alt="YakınBoğaz Software Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 dark:text-yellow-300">
                <span className="block">Yakın Boğaz</span>
                <span className="block text-base md:text-lg">E-Ticaret ve Yazılım</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
              2020 yılından bu yana dijital çözümler sunan, eğitim teknolojileri ve 
              yazılım geliştirme alanında uzmanlaşmış şirket.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base group"
                    >
                      <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer text-sm md:text-base flex items-center group">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">{t('contact.contactInfo')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FiMail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm md:text-base">
                  <a href="mailto:info@yakinbogaz.com" className="hover:text-blue-400 transition-colors duration-300 block">
                    info@yakinbogaz.com
                  </a>
                  <a href="mailto:destek@yakinbogaz.com" className="hover:text-blue-400 transition-colors duration-300 block">
                    destek@yakinbogaz.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FiPhone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm md:text-base">
                  <a href="tel:+904642171555" className="hover:text-blue-400 transition-colors duration-300 block">
                    0464 217 15 55
                  </a>
                  <a href="tel:+905322906455" className="hover:text-blue-400 transition-colors duration-300 block">
                    0532 290 64 55
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm md:text-base">
                  KANBURSIRT FABRİKA SOK NO 24<br />
                  RİZE, TÜRKİYE
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FiClock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm md:text-base">
                  <p>{t('contact.workingHoursWeek')}</p>
                  <p>{t('contact.workingHoursSat')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
              © {currentYear} YakınBoğaz Software. {t('footer.allRightsReserved')}
            </p>
            <div className="flex items-center space-x-6">
              <Link 
                href="/gizlilik-politikasi" 
                className="text-gray-400 hover:text-blue-400 text-sm md:text-base transition-colors duration-300"
              >
                {t('footer.privacyPolicy')}
              </Link>
              <Link 
                href="/iletisim" 
                className="text-gray-400 hover:text-blue-400 text-sm md:text-base transition-colors duration-300"
              >
                {t('nav.contact')}
              </Link>
              <motion.button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll to top"
              >
                <FiArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
