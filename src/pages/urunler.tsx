import React from 'react';
import Layout from '@/components/Layout';
import { motion } from "framer-motion";
import Seo from '@/components/Seo';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { FiMapPin, FiCpu } from 'react-icons/fi';

export default function Urunler() {
  const { t } = useLanguage();
  const products = [
    {
      id: "schoolroute",
      title: "SchoolRoute",
      subtitle: "Okul Servis Yönetiminde, Kontrol Sizde",
      description: "School Route, okul servis süreçlerinin daha güvenli, şeffaf ve verimli bir şekilde yönetilmesini sağlar. Günümüzde çocukların güvenli bir şekilde okula ulaşması ve eve dönüşleri, veliler ve okul yönetimleri için en önemli öncelikler arasındadır.",
      logo: "/img/scr-logo.png",
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Gerçek Zamanlı Konum Takibi",
        "Rota Optimizasyonu ve Verimlilik",
        "Anlık Bildirimler ve Uyarılar",
        "Öğrenci ve Servis Güvenliği Takibi",
        "Veri Analizi ve Raporlama Özelliği",
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
      gradient: "from-purple-500 to-purple-600",
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
      icon: "📦"
    },
    {
      title: "Sipariş Takibi",
      description: "Gerçek zamanlı sipariş yönetimi",
      icon: "📋"
    },
    {
      title: "Ödeme Sistemleri",
      description: "Güvenli ödeme entegrasyonları",
      icon: "💳"
    },
    {
      title: "Müşteri Yönetimi",
      description: "CRM ve müşteri ilişkileri",
      icon: "👥"
    },
    {
      title: "Stok Yönetimi",
      description: "Otomatik stok takip sistemi",
      icon: "📊"
    },
    {
      title: "Raporlama",
      description: "Detaylı satış ve analiz raporları",
      icon: "📈"
    }
  ];

  return (
    <Layout>
      <Seo
        title="Ürünlerimiz - YakınBoğaz Software"
        description="SchoolRoute okul yönetim sistemi, MobilDers matematik uygulaması ve e-ticaret modülleri. Eğitim teknolojileri ve dijital çözümler."
      />
      
      <main>
        {/* Hero Section */}
        <motion.section 
          className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50"
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
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                {t('products.title')}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                {t('products.subtitle')}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Navigasyon ve AI Teknolojileri */}
        <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                {t('products.navigationAiTechTitle')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">{t('products.ccnsTitle')}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{t('products.ccnsDescription')}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">{t('products.features')}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        t('products.ccnsFeature1'),
                        t('products.ccnsFeature2'),
                        t('products.ccnsFeature3'),
                        t('products.ccnsFeature4')
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
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
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">{t('products.ccaiTitle')}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{t('products.ccaiDescription')}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">{t('products.features')}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        t('products.ccaiFeature1'),
                        t('products.ccaiFeature2'),
                        t('products.ccaiFeature3'),
                        t('products.ccaiFeature4')
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
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
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                {t('products.educationTechTitle')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('products.educationTechSubtitle')}
              </p>
            </motion.div>

            <div className="space-y-16">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
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
                      <div className="mt-6">
                        <span className="text-sm opacity-75">{product.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <h3 className="text-3xl font-bold mb-4 text-gray-800">{product.title}</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-gray-800">{t('products.features')}</h4>
                        <ul className="space-y-2">
                          {product.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-700">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-gray-800">{t('products.benefits')}</h4>
                        <ul className="space-y-2">
                          {product.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-700">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      {product.appStore && (
                        <Link 
                          href={product.appStore}
                          className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center"
                        >
                          App Store
                        </Link>
                      )}
                      {product.playStore && (
                        <Link 
                          href={product.playStore}
                          className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center"
                        >
                          Google Play
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* E-Ticaret Modülleri */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                {t('products.ecommerceModulesTitle')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('products.ecommerceModulesSubtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ecommerceModules.map((module, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{module.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{module.title}</h3>
                  <p className="text-gray-600">{module.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                href="/dijital-cozumler#e-ticaret"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 inline-block"
              >
                {t('products.viewEcommerceSolutions')}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* MobilDers Özel Bölüm */}
        <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
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
                    icon: "📚"
                  },
                  {
                    title: t('products.videoSolutions'),
                    description: t('products.videoSolutionsDesc'),
                    icon: "🎥"
                  },
                  {
                    title: t('products.drawingSolution'),
                    description: t('products.drawingSolutionDesc'),
                    icon: "✏️"
                  },
                  {
                    title: t('products.progressTracking'),
                    description: t('products.progressTrackingDesc'),
                    icon: "📊"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-sm opacity-90">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="https://apps.apple.com/tr/app/mobilders-temel-matematik/id6747803131?l=tr"
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {t('products.downloadAppStore')}
                  </Link>
                  <Link 
                    href="https://play.google.com/store/apps/details?id=com.ismailkart53.ebook"
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {t('products.downloadGooglePlay')}
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {t('products.ctaTitle1')}
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  {t('products.ctaTitle2')}
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('products.ctaDescription')}
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link 
                  href="/iletisim"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  {t('products.requestDemo')}
                </Link>
                <Link 
                  href="/gizlilik-politikasi"
                  className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  Gizlilik Politikası
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
