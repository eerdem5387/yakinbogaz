import React from 'react';
import Layout from '@/components/Layout';
import { motion } from "framer-motion";
import Seo from '@/components/Seo';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  FiGlobe, 
  FiStar, 
  FiShoppingCart, 
  FiCode, 
  FiSmartphone, 
  FiMonitor,
  FiCheck,
  FiFile,
  FiGrid,
  FiZap,
  FiSettings,
  FiSend
} from 'react-icons/fi';

export default function DijitalCozumler() {
  const { t } = useLanguage();
  const services = [
    {
      title: t('home.webPagesTitle'),
      description: t('home.webPagesDesc'),
      icon: <FiGlobe className="w-8 h-8" />,
      gradient: "from-blue-500 to-blue-600",
      features: [
        t('home.responsiveDesign'),
        t('home.seoOptimization'), 
        t('home.fastLoading')
      ]
    },
    {
      title: t('home.brandDesignsTitle'),
      description: t('home.brandDesignsDesc'),
      icon: <FiStar className="w-8 h-8" />,
      gradient: "from-purple-500 to-purple-600",
      features: [
        t('home.logoDesign'),
        t('home.corporateIdentity'),
        t('home.visualMaterials')
      ]
    },
    {
      title: t('home.ecommerceServicesTitle'),
      description: t('home.ecommerceServicesDesc'),
      icon: <FiShoppingCart className="w-8 h-8" />,
      gradient: "from-purple-500 to-purple-600",
      features: [
        t('home.onlineStore'),
        t('home.paymentSystems'),
        t('home.inventoryManagement')
      ]
    },
    {
      title: t('home.customSoftwareTitle'),
      description: t('home.customSoftwareDesc'),
      icon: <FiCode className="w-8 h-8" />,
      gradient: "from-blue-500 to-blue-600",
      features: [
        t('home.customDevelopment'),
        t('home.processAutomation'),
        t('home.efficiencyIncrease')
      ]
    },
    {
      title: t('home.webToMobileTitle'),
      description: t('home.webToMobileDesc'),
      icon: <FiSmartphone className="w-8 h-8" />,
      gradient: "from-purple-500 to-purple-600",
      features: [
        t('home.mobileCompatibility'),
        t('home.pwaSupport'),
        t('home.crossPlatform')
      ]
    }
  ];

  return (
    <Layout>
      <Seo
        title="Dijital Çözümler - YakınBoğaz Software"
        description="Web sayfaları, e-ticaret hizmetleri, marka tasarımları, özel yazılımlar ve mobil uygulamalar. İşletmeniz için kapsamlı dijital çözümler. CCNS ve CCAI teknolojileri."
        keywords="dijital çözümler, web tasarım, e-ticaret sitesi, mobil uygulama geliştirme, özel yazılım, iş yönetim sistemleri, CCNS, CCAI"
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
                {t('solutions.title')}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t('solutions.subtitle')}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Grid */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white`}>
                    <div className="mb-4">
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="opacity-90">{service.description}</p>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">{t('solutions.features')}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                          <FiCheck className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Link 
                        href="/iletisim"
                        className={`bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex-1 text-center`}
                      >
                        {t('solutions.getQuote')}
                      </Link>
                      <Link 
                        href={`/projelendirme#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex-1 text-center"
                      >
                        {t('solutions.details')}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                {t('solutions.processTitle')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('solutions.processSubtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Analiz & Planlama",
                  description: "İhtiyaçlarınızı analiz eder, en uygun çözümü planlarız",
                  icon: <FiFile className="w-8 h-8" />
                },
                {
                  step: "02", 
                  title: "Tasarım & Geliştirme",
                  description: "Modern tasarımlar ve güçlü teknolojilerle geliştiririz",
                  icon: <FiGrid className="w-8 h-8" />
                },
                {
                  step: "03",
                  title: "Test & Optimizasyon", 
                  description: "Kapsamlı testler ve performans optimizasyonu yaparız",
                  icon: <FiSettings className="w-8 h-8" />
                },
                {
                  step: "04",
                  title: "Yayın & Destek",
                  description: "Projenizi yayınlar ve sürekli destek sağlarız",
                  icon: <FiSend className="w-8 h-8" />
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex justify-center mb-4 text-blue-600">{process.icon}</div>
                    <div className="text-3xl font-bold text-blue-600 mb-4">{process.step}</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{process.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
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
                Kullandığımız Teknolojiler
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                En güncel ve güvenilir teknolojilerle projelerinizi geliştiriyoruz
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "React", icon: "⚛️" },
                { name: "Next.js", icon: "▲" },
                { name: "Node.js", icon: "🟢" },
                { name: "TypeScript", icon: "📘" },
                { name: "TailwindCSS", icon: "🎨" },
                { name: "MongoDB", icon: "🍃" },
                { name: "PostgreSQL", icon: "🐘" },
                { name: "Docker", icon: "🐳" },
                { name: "AWS", icon: "☁️" },
                { name: "Firebase", icon: "🔥" },
                { name: "Stripe", icon: "💳" },
                { name: "SendGrid", icon: "📧" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
