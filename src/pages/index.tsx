import React, { useRef, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Seo from "@/components/Seo";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  FiGlobe, 
  FiShoppingCart, 
  FiSmartphone, 
  FiCode, 
  FiStar,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiPlay,
  FiArrowRight,
  FiCheck,
  FiZap,
  FiShield,
  FiTarget,
  FiBookOpen,
  FiMonitor,
  FiDatabase,
  FiMapPin,
  FiCpu
} from 'react-icons/fi';

export default function Home() {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    let animationFrameId: number;
    let lastTime = performance.now();

    const autoScroll = (currentTime: number) => {
      if (!isPaused && scrollContainer) {
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;
        
        // Çok yavaş ve smooth kaydırma - tereyağı gibi akıcı
        const scrollSpeed = 0.05; // px per millisecond - çok yavaş ve smooth
        scrollPosition += scrollSpeed * deltaTime;
        
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        // Sonsuz döngü için - sona gelince başa dön
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  return (
    <Layout>
      <Seo
        title="YakınBoğaz Software - Modern Dijital Çözümler"
        description="Şirketinize yönelik dijital çözümler, e-ticaret hizmetleri, özel yazılımlar ve eğitim teknolojileri. MobilDers ve SchoolRoute ile geleceğin eğitimini bugünden yaşayın."
      />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <motion.section 
          className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                x: [0, -50, 0],
                y: [0, -30, 0]
              }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium mb-6 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <FiZap className="w-4 h-4" />
                    <span>{t('home.badge')}</span>
                  </motion.div>
                  
                  <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {t('home.heroTitle1')}
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                      {t('home.heroTitle2')}
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {t('home.heroDescription')}
                  </motion.p>
                  
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <Link 
                      href="/iletisim"
                      className="btn-primary flex items-center justify-center space-x-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                    >
                      <span>{t('home.freeConsultation')}</span>
                      <FiArrowRight className="w-5 h-5" />
                    </Link>
                    <Link 
                      href="/projelendirme"
                      className="btn-secondary flex items-center justify-center space-x-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                    >
                      <FiPlay className="w-5 h-5" />
                      <span>{t('home.viewProjects')}</span>
                    </Link>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  className="relative mt-12 lg:mt-0"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl transform scale-110"></div>
                    <div className="relative glass rounded-3xl p-6 md:p-8 shadow-2xl">
                      <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <motion.div 
                          className="space-y-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 }}
                        >
                          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 md:p-6 rounded-2xl text-white shadow-lg card-hover">
                            <FiGlobe className="text-2xl md:text-3xl mb-2" />
                            <h3 className="font-semibold text-sm md:text-base mb-1">{t('home.webPages')}</h3>
                            <p className="text-xs md:text-sm opacity-90">{t('home.modernDesign')}</p>
                          </div>
                          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 md:p-6 rounded-2xl text-white shadow-lg card-hover">
                            <FiShoppingCart className="text-2xl md:text-3xl mb-2" />
                            <h3 className="font-semibold text-sm md:text-base mb-1">{t('home.ecommerce')}</h3>
                            <p className="text-xs md:text-sm opacity-90">{t('home.secureShopping')}</p>
                          </div>
                        </motion.div>
                        <motion.div 
                          className="space-y-4 pt-8 md:pt-12"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.4 }}
                        >
                          <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-4 md:p-6 rounded-2xl text-white shadow-lg card-hover">
                            <FiSmartphone className="text-2xl md:text-3xl mb-2" />
                            <h3 className="font-semibold text-sm md:text-base mb-1">{t('home.mobileApp')}</h3>
                            <p className="text-xs md:text-sm opacity-90">{t('home.everyPlatform')}</p>
                          </div>
                          <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 md:p-6 rounded-2xl text-white shadow-lg card-hover">
                            <FiBookOpen className="text-2xl md:text-3xl mb-2" />
                            <h3 className="font-semibold text-sm md:text-base mb-1">{t('home.education')}</h3>
                            <p className="text-xs md:text-sm opacity-90">{t('home.mobildersSchoolroute')}</p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Hizmetler */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                {t('home.solutionsTitle1')} 
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  {t('home.solutionsTitle2')}
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                {t('home.solutionsSubtitle')}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: t('home.webPagesTitle'),
                  description: t('home.webPagesDesc'),
                  icon: <FiGlobe className="w-8 h-8" />,
                  gradient: "from-blue-500 to-blue-600",
                  features: [t('home.responsiveDesign'), t('home.seoOptimization'), t('home.fastLoading')]
                },
                {
                  title: t('home.brandDesignsTitle'),
                  description: t('home.brandDesignsDesc'),
                  icon: <FiStar className="w-8 h-8" />,
                  gradient: "from-purple-500 to-purple-600",
                  features: [t('home.logoDesign'), t('home.corporateIdentity'), t('home.visualMaterials')]
                },
                {
                  title: t('home.ecommerceServicesTitle'),
                  description: t('home.ecommerceServicesDesc'),
                  icon: <FiShoppingCart className="w-8 h-8" />,
                  gradient: "from-pink-500 to-pink-600",
                  features: [t('home.onlineStore'), t('home.paymentSystems'), t('home.inventoryManagement')]
                },
                {
                  title: t('home.customSoftwareTitle'),
                  description: t('home.customSoftwareDesc'),
                  icon: <FiCode className="w-8 h-8" />,
                  gradient: "from-green-500 to-green-600",
                  features: [t('home.customDevelopment'), t('home.processAutomation'), t('home.efficiencyIncrease')]
                },
                {
                  title: t('home.webToMobileTitle'),
                  description: t('home.webToMobileDesc'),
                  icon: <FiSmartphone className="w-8 h-8" />,
                  gradient: "from-orange-500 to-orange-600",
                  features: [t('home.mobileCompatibility'), t('home.pwaSupport'), t('home.crossPlatform')]
                },
                {
                  title: t('home.cmswebsite'),
                  description: t('home.cmswebsiteDesc'),
                  icon: <FiMonitor className="w-8 h-8" />,
                  gradient: "from-indigo-500 to-indigo-600",
                  features: [t('home.cmswebsiteFeature1'), t('home.cmswebsiteFeature2')]
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`bg-gradient-to-r ${service.gradient} p-6 md:p-8 rounded-t-2xl`}>
                    <div className="text-white mb-4">{service.icon}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{service.title}</h3>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                          <FiCheck className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigasyon ve AI Teknolojileri */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                {t('products.navigationAiTechTitle1')}
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  {t('products.navigationAiTechTitle2')}
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                {t('products.navigationAiTechSubtitle')}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: t('products.ccnsTitle'),
                  description: t('products.ccnsDescription'),
                  features: [t('products.ccnsFeature1'), t('products.ccnsFeature2'), t('products.ccnsFeature3'), t('products.ccnsFeature4')],
                  color: "blue",
                  icon: <FiMapPin className="w-16 h-16" />
                },
                {
                  title: t('products.ccaiTitle'),
                  description: t('products.ccaiDescription'),
                  features: [t('products.ccaiFeature1'), t('products.ccaiFeature2'), t('products.ccaiFeature3'), t('products.ccaiFeature4')],
                  color: "purple",
                  icon: <FiCpu className="w-16 h-16" />
                },
              ].map((product, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`bg-gradient-to-r from-${product.color}-500 to-${product.color}-600 p-8 text-white text-center`}>
                    <div className="flex justify-center mb-4">
                      <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                        {product.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm md:text-base">{product.description}</p>
                    <ul className="space-y-3 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                          <FiCheck className={`w-4 h-4 text-${product.color}-500 mr-3 flex-shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href="/urunler"
                      className={`bg-gradient-to-r from-${product.color}-500 to-${product.color}-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 inline-block flex items-center justify-center space-x-2 w-full`}
                    >
                      <span>{t('home.viewDetails')}</span>
                      <FiArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Eğitim Ürünleri */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                {t('home.educationProductsTitle1')}
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  {t('home.educationProductsTitle2')}
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                {t('home.educationProductsSubtitle')}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: t('home.schoolrouteTitle'),
                  description: t('home.schoolrouteDesc'),
                  features: [t('home.schoolrouteFeature1'), t('home.schoolrouteFeature2'), t('home.schoolrouteFeature3'), t('home.schoolrouteFeature4'), t('home.schoolrouteFeature5')],
                  color: "blue",
                  logo: "/img/scr-logo.png"
                },
                {
                  title: t('home.mobildersTitle'),
                  description: t('home.mobildersDesc'),
                  features: [t('home.mobildersFeature1'), t('home.mobildersFeature2'), t('home.mobildersFeature3')],
                  color: "purple",
                  logo: "/img/mobilders.jpeg"
                },
              ].map((product, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`bg-gradient-to-r from-${product.color}-500 to-${product.color}-600 p-8 text-white text-center`}>
                    <div className="flex justify-center mb-4">
                      <div className="relative w-24 h-24 md:w-32 md:h-32">
                        <Image
                          src={product.logo}
                          alt={`${product.title} Logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm md:text-base">{product.description}</p>
                    <ul className="space-y-3 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                          <FiCheck className={`w-4 h-4 text-${product.color}-500 mr-3 flex-shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={`/urunler#${product.title.toLowerCase()}`}
                      className={`bg-gradient-to-r from-${product.color}-500 to-${product.color}-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 inline-block flex items-center justify-center space-x-2 w-full`}
                    >
                      <span>{t('home.viewDetails')}</span>
                      <FiArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* İstatistikler */}
        <motion.section 
          className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { number: "10+", text: t('home.statsTitle'), icon: <FiAward className="w-6 md:w-8 h-6 md:h-8" /> },
                { number: "5+", text: t('home.statsTeam'), icon: <FiUsers className="w-6 md:w-8 h-6 md:h-8" /> },
                { number: "24/7", text: t('home.statsSupport'), icon: <FiShield className="w-6 md:w-8 h-6 md:h-8" /> },
                { number: "4+", text: t('home.statsExperience'), icon: <FiTrendingUp className="w-6 md:w-8 h-6 md:h-8" /> }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <motion.div 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm md:text-lg opacity-90">{stat.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Referanslar */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                {t('home.referencesTitle')}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                {t('home.referencesSubtitle')}
              </p>
            </motion.div>
            
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{ scrollBehavior: 'auto' }}
            >
              <div className="flex gap-4 md:gap-8 px-4 md:px-0 min-w-max pb-4">
                {[
                  {
                    name: t('home.reference1'),
                    logo: "/img/references/levent-koleji.png"
                  },
                  {
                    name: t('home.reference2'),
                    logo: "/img/references/karbonkurs-turkiye.png"
                  },
                  {
                    name: t('home.reference3'),
                    logo: "/img/references/sahinkaya-koleji-bursa.png"
                  },
                  {
                    name: t('home.reference4'),
                    logo: "/img/references/seva-insaat-bursa.png"
                  },
                  {
                    name: t('home.reference5'),
                    logo: "/img/references/hisarlar-makina-eskisehir.png"
                  },
                  {
                    name: t('home.reference6'),
                    logo: "/img/references/schoolroute.png"
                  },
                  {
                    name: t('home.reference7'),
                    logo: "/img/references/mobilders.jpeg"
                  },
                  {
                    name: t('home.reference8'),
                    logo: "/img/references/payem-turizm.png"
                  },
                  {
                    name: t('home.reference9'),
                    logo: "/img/references/abdulkadir-erdem.png"
                  }
                ].map((ref, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center min-w-[200px] md:min-w-[240px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {ref.logo ? (
                      <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3">
                        <Image
                          src={ref.logo}
                          alt={ref.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <FiStar className="text-xl md:text-2xl mb-3 mx-auto text-blue-500" />
                    )}
                    <div className="font-semibold text-gray-800 dark:text-gray-200 text-sm md:text-base">{ref.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {t('home.ctaTitle1')} 
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  {t('home.ctaTitle2')}
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('home.ctaDescription')}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link 
                  href="/iletisim"
                  className="btn-primary inline-flex items-center justify-center space-x-2 text-base sm:text-lg px-8 sm:px-10 py-4"
                >
                  <span>{t('home.getStarted')}</span>
                  <FiArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
