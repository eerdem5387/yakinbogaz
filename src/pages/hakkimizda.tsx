import React from 'react';
import Layout from '@/components/Layout';
import { motion } from "framer-motion";
import Seo from '@/components/Seo';
import Link from 'next/link';
import { 
  FiTarget,
  FiUsers,
  FiAward,
  FiTrendingUp,
  FiZap,
  FiShield,
  FiArrowRight,
  FiCheck
} from 'react-icons/fi';

export default function Hakkimizda() {
  const content = [
    {
      text: "2020 yılında kurulan şirketimiz, pandeminin getirdiği kriz ortamında pratik ve ekonomik yazılım çözümleriyle büyük dalgalarla boğuşan işletmelerin online alışveriş ve tanıtım sorunlarına koşmuştur.",
      highlight: false
    },
    {
      text: "İşletmelere, güçlü, kalıcı ve ulaşılabilir yazılımlar üreterek, bütçelerini ana odaklarına yönlendirmelerini sağlamıştır.",
      highlight: false
    },
    {
      text: "Toplumun jenerasyon değişimlerini yakalayacak ürünleriyle etkin ticari başarılar elde etmelerini sağlamıştır.",
      highlight: false
    },
    {
      text: "Gerçek yöntemlerle günlük sorunları aşan web sayfaları, kısa sürede ticari engelleri aşan pratik yazılımlar, şirketleri bağımlılığa sürüklemeyen ürünlerle piyasa dostu çalışma yöntemini benimsemiştir.",
      highlight: false
    },
    {
      text: "YAKINBOĞAZ GARAJ PROJESİ DEĞİLDİR.",
      highlight: true
    },
    {
      text: "Kendi işindeki engelleri teknolojiye uygulayarak aşan gerçek iş insanlarının kurduğu bir sistemdir.",
      highlight: false
    },
    {
      text: "Yatırımcıları arasında eğitimci, hukukçu, mühendis, pazarlama uzmanı alanlarından gelen kendi alanında başarılı, kriz nedir bilen uzmanlar yer alır.",
      highlight: false
    }
  ];

  const values = [
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Hedef Odaklı",
      description: "Müşteri hedeflerine ulaşmak için stratejik çözümler geliştiriyoruz."
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Hızlı Çözümler",
      description: "Pratik ve ekonomik çözümlerle hızlı sonuçlar elde ediyoruz."
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Güvenilirlik",
      description: "Kalıcı ve güvenilir yazılımlar üretiyoruz."
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Uzman Ekip",
      description: "Alanında deneyimli profesyonellerden oluşan ekibimiz."
    }
  ];

  const stats = [
    { number: "4+", label: "Yıllık Deneyim", icon: <FiTrendingUp className="w-6 h-6" /> },
    { number: "10+", label: "Başarılı Proje", icon: <FiAward className="w-6 h-6" /> },
    { number: "5+", label: "Uzman Ekip", icon: <FiUsers className="w-6 h-6" /> },
    { number: "24/7", label: "Teknik Destek", icon: <FiShield className="w-6 h-6" /> }
  ];

  return (
    <Layout>
      <Seo
        title="Hakkımızda - YakınBoğaz Software"
        description="2020 yılından bu yana dijital çözümler sunan, eğitim teknolojileri ve yazılım geliştirme alanında uzmanlaşmış şirket."
      />
      
      <main>
        {/* Hero Section */}
        <motion.section 
          className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 gradient-mesh opacity-50"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                Hakkımızda
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed px-4">
                Dijital dönüşüm yolculuğunuzda güvenilir çözüm ortağınız
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-12 md:mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                  Hikayemiz
                </h2>
              </motion.div>
              
              <div className="space-y-6 md:space-y-8">
                {content.map((paragraph, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`p-6 md:p-8 rounded-2xl ${
                      paragraph.highlight
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                        : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <p className={`text-base md:text-lg leading-relaxed ${
                      paragraph.highlight ? 'font-semibold' : ''
                    }`}>
                      {paragraph.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                Değerlerimiz
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                Çalışma prensiplerimiz ve değerlerimiz
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400">
                    {value.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
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
                  <div className="text-sm md:text-lg opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
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
                Neden Bizi Seçmelisiniz?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                Farkımızı yaratan özelliklerimiz
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                "Gerçek iş insanları tarafından kurulmuş bir sistem",
                "Kriz yönetiminde deneyimli uzman ekip",
                "Piyasa dostu ve ekonomik çözümler",
                "Bağımlılık yaratmayan bağımsız ürünler",
                "Hızlı ve pratik çözümler",
                "Güçlü ve kalıcı yazılımlar"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <FiCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{feature}</p>
                </motion.div>
              ))}
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
                Bizimle Çalışmaya Hazır mısınız?
              </motion.h2>
              
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Dijital dönüşüm yolculuğunuzda size rehberlik edelim. 
                Uzman ekibimizle projenizi değerlendirelim.
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
                  className="btn-primary inline-flex items-center justify-center space-x-2 text-base sm:text-lg px-8 sm:px-10 py-4"
                >
                  <span>İletişime Geçin</span>
                  <FiArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/dijital-cozumler"
                  className="btn-secondary inline-flex items-center justify-center space-x-2 text-base sm:text-lg px-8 sm:px-10 py-4"
                >
                  <span>Hizmetlerimizi İncele</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
