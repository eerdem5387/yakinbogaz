import React from 'react';
import Layout from '@/components/Layout';
import { motion } from "framer-motion";
import Seo from '@/components/Seo';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { FiMapPin, FiCpu, FiArrowRight, FiPackage, FiClipboard, FiCreditCard, FiUsers, FiDatabase, FiTrendingUp, FiBook, FiVideo, FiEdit } from 'react-icons/fi';

export default function Urunler() {
  const { t } = useLanguage();
  const products = [
    {
      id: "schoolroute",
      title: "SchoolRoute",
      subtitle: t('home.schoolrouteSubtitle'),
      description: t('home.schoolrouteDesc'),
      logo: "/img/scr-logo.png",
      gradient: "from-blue-500 to-blue-600",
      features: [
        t('home.schoolrouteFeature1'),
        t('home.schoolrouteFeature2'),
        t('home.schoolrouteFeature3'),
        t('home.schoolrouteFeature4'),
        t('home.schoolrouteFeature5'),
      ],
      featureDescriptions: [
        t('home.schoolrouteFeature1Desc'),
        t('home.schoolrouteFeature2Desc'),
        t('home.schoolrouteFeature3Desc'),
        t('home.schoolrouteFeature4Desc'),
        t('home.schoolrouteFeature5Desc'),
      ],
      benefits: [
        "Güvenliğin Artırılması",
        "Operasyonel Verimlilik",
        "Raporlama ve Veri Analizi",
        "Ebeveyn Memnuniyeti"
      ],
      price: "",
      demo: "/demo/schoolroute"
    },
    {
      id: "mobilders",
      title: "MobilDers",
      subtitle: "AKER Temel Matematik",
      description: "Matematik öğrenmeyi kolaylaştıran mobil eğitim platformu. Her soruya özel çözüm videoları, çizim ile çözüm ekranı ve ilerleme takibi özellikleriyle etkili bir öğrenme deneyimi sunar.",
      logo: "/img/mobilders.jpeg",
      gradient: "from-orange-500 to-orange-600",
      features: [
        "Temel Matematik: Hiç Matematik Bilmeyenler İçin",
        "Her Soruya Özel Çözüm Videosu",
        "Çizim ile Çözüm Ekranı",
        "Test ve Alıştırmalar",
        "İlerleme Grafiği",
        "Soruları İnceleme",
        "Klasikten Yeni Nesile Tüm Soru Tarzları",
        "Algoritmik Yapay Zeka ile Kişisel Eğitmen"
      ],
      benefits: [
        "Öğrenmeyi hızlandırır",
        "Kişiselleştirilmiş deneyim",
        "Her yerde erişim",
        "Sürekli gelişim takibi"
      ],
      price: "",
      demo: "/demo/mobilders",
      appStore: "https://apps.apple.com/tr/app/mobilders-temel-matematik/id6747803131?l=tr",
      playStore: "https://play.google.com/store/apps/details?id=com.ismailkart53.ebook"
    },
  ];

  const ecommerceModules = [
    {
      title: "Ürün Yönetimi",
      description: "Kapsamlı ürün katalog yönetimi",
      icon: FiPackage
    },
    {
      title: "Sipariş Takibi",
      description: "Gerçek zamanlı sipariş yönetimi",
      icon: FiClipboard
    },
    {
      title: "Ödeme Sistemleri",
      description: "Güvenli ödeme entegrasyonları",
      icon: FiCreditCard
    },
    {
      title: "Müşteri Yönetimi",
      description: "CRM ve müşteri ilişkileri",
      icon: FiUsers
    },
    {
      title: "Stok Yönetimi",
      description: "Otomatik stok takip sistemi",
      icon: FiDatabase
    },
    {
      title: "Raporlama",
      description: "Detaylı satış ve analiz raporları",
      icon: FiTrendingUp
    }
  ];

  return (
    <Layout>
      <Seo
        title="Ürünlerimiz - YakınBoğaz Software"
        description="SchoolRoute okul servis yönetim sistemi, MobilDers matematik uygulaması, CCNS kapalı devre navigasyon sistemi ve CCAI yapay zeka sistemi. Eğitim teknolojileri ve dijital çözümler."
        keywords="SchoolRoute, MobilDers, CCNS, CCAI, okul servis yönetimi, matematik uygulaması, navigasyon sistemi, yapay zeka, eğitim teknolojileri, mobil eğitim"
        image="/img/yb-logo.png"
      />
      
      <main>
        {/* Hero Section */}
        <motion.section 
          className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('products.title')}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t('products.subtitle')}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Navigasyon ve AI Teknolojileri */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('products.navigationAiTechTitle')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('products.navigationAiTechSubtitle')}
              </p>
            </motion.div>

            <div className="space-y-16">
              {/* CCNS */}
              <motion.div
                className="flex flex-col lg:flex-row gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-2xl text-white text-center">
                    <div className="h-32 flex items-center justify-center mb-6">
                      <FiMapPin className="w-24 h-24 text-white opacity-90" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{t('products.ccnsTitle')}</h3>
                    <p className="text-xl opacity-90">{t('products.ccnsSubtitle')}</p>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{t('products.ccnsTitle')}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{t('products.ccnsDescription')}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">{t('products.features')}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        t('products.ccnsFeature1'),
                        t('products.ccnsFeature2'),
                        t('products.ccnsFeature3'),
                        t('products.ccnsFeature4')
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CCAI */}
              <motion.div
                className="flex flex-col lg:flex-row-reverse gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-8 rounded-2xl text-white text-center">
                    <div className="h-32 flex items-center justify-center mb-6">
                      <FiCpu className="w-24 h-24 text-white opacity-90" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{t('products.ccaiTitle')}</h3>
                    <p className="text-xl opacity-90">{t('products.ccaiSubtitle')}</p>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{t('products.ccaiTitle')}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{t('products.ccaiDescription')}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">{t('products.features')}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        t('products.ccaiFeature1'),
                        t('products.ccaiFeature2'),
                        t('products.ccaiFeature3'),
                        t('products.ccaiFeature4')
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Eğitim Ürünleri */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('products.educationTechTitle')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('products.educationTechSubtitle')}
              </p>
            </motion.div>

            <div className="space-y-16">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className={`flex flex-col lg:flex-row gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                  <div className="lg:w-1/2">
                    <div className={`bg-gradient-to-r ${product.gradient} p-8 rounded-2xl text-white text-center`}>
                      <div className="h-32 relative mb-6">
                        <Image
                          src={product.logo}
                          alt={product.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{product.title}</h3>
                      <p className="text-xl opacity-90">{product.subtitle}</p>
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{product.title}</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{product.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">{t('products.features')}</h4>
                        <ul className="space-y-2">
                          {product.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                              <span className={`w-2 h-2 rounded-full mr-3 ${product.id === 'schoolroute' ? 'bg-blue-500' : product.id === 'mobilders' ? 'bg-orange-500' : 'bg-purple-500'}`}></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">{t('products.benefits')}</h4>
                        <ul className="space-y-2">
                          {product.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                              <span className={`w-2 h-2 rounded-full mr-3 ${product.id === 'schoolroute' ? 'bg-blue-500' : product.id === 'mobilders' ? 'bg-orange-500' : 'bg-purple-500'}`}></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {product.id === 'schoolroute' ? (
                      <div className="flex justify-start">
                        <Link 
                          href="/schoolroute"
                          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
                        >
                          <span>İncele</span>
                          <FiArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row gap-4">
                        {product.appStore && (
                          <Link 
                            href={product.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-xl px-5 py-4 flex items-center gap-4 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 min-w-[240px]"
                          >
                            <div className="relative w-12 h-12 flex-shrink-0 bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm">
                              <Image
                                src="/app-store.png"
                                alt="App Store"
                                fill
                                className="object-contain"
                              />
                            </div>
                            <div className="flex flex-col flex-1">
                              <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-medium">
                                {t('products.downloadOn')}
                              </span>
                              <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {t('products.downloadAppStore')}
                              </span>
                            </div>
                            <FiArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                          </Link>
                        )}
                        {product.playStore && (
                          <Link 
                            href={product.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 ${product.id === 'mobilders' ? 'hover:border-orange-500 dark:hover:border-orange-500' : 'hover:border-purple-500 dark:hover:border-purple-500'} rounded-xl px-5 py-4 flex items-center gap-4 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 min-w-[240px]`}
                          >
                            <div className="relative w-12 h-12 flex-shrink-0 bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm">
                              <Image
                                src="/google-play.png"
                                alt="Google Play"
                                fill
                                className="object-contain"
                              />
                            </div>
                            <div className="flex flex-col flex-1">
                              <span className={`text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide ${product.id === 'mobilders' ? 'group-hover:text-orange-600 dark:group-hover:text-orange-400' : 'group-hover:text-purple-600 dark:group-hover:text-purple-400'} transition-colors font-medium`}>
                                {t('products.downloadOn')}
                              </span>
                              <span className={`text-lg font-bold text-gray-900 dark:text-white ${product.id === 'mobilders' ? 'group-hover:text-orange-600 dark:group-hover:text-orange-400' : 'group-hover:text-purple-600 dark:group-hover:text-purple-400'} transition-colors`}>
                                {t('products.downloadGooglePlay')}
                              </span>
                            </div>
                            <FiArrowRight className={`w-5 h-5 text-gray-400 dark:text-gray-500 ${product.id === 'mobilders' ? 'group-hover:text-orange-600 dark:group-hover:text-orange-400' : 'group-hover:text-purple-600 dark:group-hover:text-purple-400'} group-hover:translate-x-1 transition-all flex-shrink-0`} />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* E-Ticaret Modülleri */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('products.ecommerceModulesTitle')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('products.ecommerceModulesSubtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ecommerceModules.map((module, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="mb-4">
                    <module.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{module.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{module.description}</p>
                </motion.div>
              ))}
            </div>


          </div>
        </section>

        {/* MobilDers Özel Bölüm */}
        <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  {t('products.mobildersTitle')}
                </h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  {t('products.mobildersSubtitle')}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: t('products.basicMath'),
                    description: t('products.basicMathDesc'),
                    icon: FiBook
                  },
                  {
                    title: t('products.videoSolutions'),
                    description: t('products.videoSolutionsDesc'),
                    icon: FiVideo
                  },
                  {
                    title: t('products.drawingSolution'),
                    description: t('products.drawingSolutionDesc'),
                    icon: FiEdit
                  },
                  {
                    title: t('products.progressTracking'),
                    description: t('products.progressTrackingDesc'),
                    icon: FiTrendingUp
                  }
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                        <div className="mb-4 flex justify-center">
                          <IconComponent className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-sm opacity-90">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    href="https://apps.apple.com/tr/app/mobilders-temel-matematik/id6747803131?l=tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 rounded-xl px-5 py-4 flex items-center gap-4 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 min-w-[240px]"
                  >
                    <div className="relative w-12 h-12 flex-shrink-0 bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm">
                      <Image
                        src="/app-store.png"
                        alt="App Store"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors font-medium">
                        {t('products.downloadOn')}
                      </span>
                      <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {t('products.downloadAppStore')}
                      </span>
                    </div>
                    <FiArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-orange-600 dark:group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </Link>
                  <Link 
                    href="https://play.google.com/store/apps/details?id=com.ismailkart53.ebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 rounded-xl px-5 py-4 flex items-center gap-4 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 min-w-[240px]"
                  >
                    <div className="relative w-12 h-12 flex-shrink-0 bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm">
                      <Image
                        src="/google-play.png"
                        alt="Google Play"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors font-medium">
                        {t('products.downloadOn')}
                      </span>
                      <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {t('products.downloadGooglePlay')}
                      </span>
                    </div>
                    <FiArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-orange-600 dark:group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
