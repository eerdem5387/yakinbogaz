import React from 'react';
import Layout from '@/components/Layout';
import { motion } from "framer-motion";
import Seo from '@/components/Seo';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Projelendirme() {
  const { t } = useLanguage();
  const services = [
    {
      id: "web-gelistirme",
      title: t('home.webPagesTitle'),
      description: t('home.webPagesDesc'),
      icon: "🌐",
      gradient: "from-blue-500 to-blue-600",
      features: [
        t('home.responsiveDesign'),
        t('home.seoOptimization'),
        t('home.fastLoading')
      ],
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js"],
      timeline: "2-6 hafta",
      price: "₺5.000 - ₺25.000"
    },
    {
      id: "mobil-uygulama",
      title: t('home.customSoftwareTitle'),
      description: t('home.customSoftwareDesc'),
      icon: "📱",
      gradient: "from-green-500 to-green-600",
      features: [
        t('home.customDevelopment'),
        t('home.processAutomation'),
        t('home.efficiencyIncrease')
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      timeline: "4-12 hafta",
      price: "₺15.000 - ₺50.000"
    },
    {
      id: "ozel-cozumler",
      title: t('home.webToMobileTitle'),
      description: t('home.webToMobileDesc'),
      icon: "💻",
      gradient: "from-orange-500 to-orange-600",
      features: [
        t('home.mobileCompatibility'),
        t('home.pwaSupport'),
        t('home.crossPlatform')
      ],
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Docker"],
      timeline: "Proje bazlı",
      price: "Proje bazlı"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "İhtiyaç Analizi",
      description: "Projenizin gereksinimlerini detaylı olarak analiz eder, hedeflerinizi belirleriz.",
      icon: "📋",
      duration: "1-2 hafta"
    },
    {
      step: "02",
      title: "Tasarım & Planlama",
      description: "Kullanıcı deneyimi ve teknik mimari tasarımını oluşturur, proje planını hazırlarız.",
      icon: "🎨",
      duration: "1-3 hafta"
    },
    {
      step: "03",
      title: "Geliştirme",
      description: "Modern teknolojilerle projenizi geliştirir, düzenli güncellemeler sağlarız.",
      icon: "⚡",
      duration: "2-8 hafta"
    },
    {
      step: "04",
      title: "Test & Optimizasyon",
      description: "Kapsamlı testler yapar, performans optimizasyonu ve güvenlik kontrollerini gerçekleştiriz.",
      icon: "🔧",
      duration: "1-2 hafta"
    },
    {
      step: "05",
      title: "Yayın & Eğitim",
      description: "Projenizi yayınlar, kullanıcı eğitimleri verir ve dokümantasyon hazırlarız.",
      icon: "🚀",
      duration: "1 hafta"
    },
    {
      step: "06",
      title: "Destek & Bakım",
      description: "Sürekli teknik destek, güncellemeler ve bakım hizmetleri sağlarız.",
      icon: "🛠️",
      duration: "Sürekli"
    }
  ];

  return (
    <Layout>
      <Seo
        title="Projelendirme - YakınBoğaz Software"
        description="İşinizi tepeden tırnağa dijitalleştirelim. Web geliştirme, mobil uygulama ve özel yazılım çözümleri ile projelerinizi hayata geçirin."
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
                {t('projects.title1')}
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  {t('projects.title2')}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                {t('projects.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/iletisim"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {t('projects.freeConsultation')}
                </Link>
                <Link 
                  href="#hizmetlerimiz"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  {t('projects.viewServices')}
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <section id="hizmetlerimiz" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                {t('projects.servicesTitle')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('projects.servicesSubtitle')}
              </p>
            </motion.div>

            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="lg:w-1/2">
                    <div className={`bg-gradient-to-r ${service.gradient} p-8 rounded-2xl text-white`}>
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                      <p className="text-lg opacity-90 mb-6">{service.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="opacity-75">{t('projects.duration')}</span>
                          <div className="font-semibold">{service.timeline}</div>
                        </div>
                        <div>
                          <span className="opacity-75">{t('projects.price')}</span>
                          <div className="font-semibold">{service.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <h3 className="text-3xl font-bold mb-4 text-gray-800">{service.title}</h3>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-3 text-gray-800">{t('projects.features')}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-3 text-gray-800">{t('projects.technologiesUsed')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link 
                      href="/iletisim"
                      className={`bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 inline-block`}
                    >
                      {t('projects.getQuote')}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                Çalışma Sürecimiz
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Projelerinizi başarıyla tamamlamak için izlediğimiz adımlar
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <div className="text-3xl font-bold text-blue-600 mb-4">{step.step}</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="text-sm text-blue-600 font-semibold">{step.duration}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
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
                Neden Bizi Seçmelisiniz?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Projelerinizi başarıyla tamamlamak için sunduğumuz avantajlar
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Deneyim",
                  description: "4+ yıllık sektör deneyimi ile güvenilir çözümler",
                  icon: "🎯",
                  color: "blue"
                },
                {
                  title: "Teknoloji",
                  description: "En güncel teknolojilerle modern çözümler",
                  icon: "⚡",
                  color: "purple"
                },
                {
                  title: "Destek",
                  description: "7/24 teknik destek ve bakım hizmetleri",
                  icon: "🛠️",
                  color: "green"
                },
                {
                  title: "Kalite",
                  description: "Yüksek kalite standartları ve test süreçleri",
                  icon: "🏆",
                  color: "orange"
                }
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`bg-gradient-to-br from-${advantage.color}-50 to-${advantage.color}-100 p-8 rounded-2xl border border-${advantage.color}-200`}>
                    <div className="text-4xl mb-4">{advantage.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Kullandığımız Teknolojiler
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                En güncel ve güvenilir teknolojilerle projelerinizi geliştiriyoruz
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "React", icon: "⚛️", category: "Frontend" },
                { name: "Next.js", icon: "▲", category: "Framework" },
                { name: "Node.js", icon: "🟢", category: "Backend" },
                { name: "TypeScript", icon: "📘", category: "Language" },
                { name: "TailwindCSS", icon: "🎨", category: "Styling" },
                { name: "MongoDB", icon: "🍃", category: "Database" },
                { name: "PostgreSQL", icon: "🐘", category: "Database" },
                { name: "Docker", icon: "🐳", category: "DevOps" },
                { name: "AWS", icon: "☁️", category: "Cloud" },
                { name: "Firebase", icon: "🔥", category: "Backend" },
                { name: "Stripe", icon: "💳", category: "Payment" },
                { name: "SendGrid", icon: "📧", category: "Email" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <span className="text-sm font-semibold text-gray-700 mb-1">{tech.name}</span>
                  <span className="text-xs text-gray-500">{tech.category}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {t('projects.ctaTitle')}
              </motion.h2>
              
              <motion.p 
                className="text-xl mb-8 opacity-90"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('projects.ctaDescription')}
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
                  className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  {t('projects.freeConsultation')}
                </Link>
                <Link 
                  href="/urunler"
                  className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  {t('projects.viewProducts')}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
