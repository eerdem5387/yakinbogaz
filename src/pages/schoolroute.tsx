import React from 'react';
import Layout from '@/components/Layout';
import { motion } from "framer-motion";
import Seo from '@/components/Seo';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { FiArrowRight, FiCheck, FiMapPin, FiBell, FiShield, FiTrendingUp, FiBarChart, FiUsers, FiClock, FiAlertCircle } from 'react-icons/fi';

export default function SchoolRoute() {
  const { t } = useLanguage();

  return (
    <Layout>
      <Seo
        title="SchoolRoute - Akıllı Personel ve Öğrenci Taşıma Yönetim Sistemi"
        description="SchoolRoute, sabit rotalı taşımacılık operasyonlarında güvenlik, izlenebilirlik ve verimliliği bir araya getiren hibrit takip ve raporlama ekosistemidir."
        keywords="SchoolRoute, okul servis yönetimi, öğrenci taşıma sistemi, personel taşıma, GPS takip, rota yönetimi, taşımacılık yazılımı"
        image="/img/scr-logo.png"
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
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex justify-center mb-8">
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <Image
                      src="/img/scr-logo.png"
                      alt="SchoolRoute Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                  SchoolRoute: Akıllı Personel ve Öğrenci Taşıma Yönetim Sistemi
                </h1>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Introduction Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.p
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                SchoolRoute, sabit rotalı taşımacılık operasyonlarında; güvenlik, izlenebilirlik ve verimliliği bir araya getiren hibrit (Mobil & Masaüstü) bir takip ve raporlama ekosistemidir. Geleneksel takip sistemlerinin aksine, donanım maliyetlerini ortadan kaldırarak yazılım tabanlı uçtan uca bir çözüm sunar.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Öne Çıkan Temel Özellikler
              </motion.h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <FiShield className="w-6 h-6" />,
                    title: "Donanımsız Takip Teknolojisi",
                    description: "Araca özel herhangi bir GPS cihazı veya ek donanım takılmasına gerek duymaz. Tamamen sürücü ve veli/yolcu mobil uygulamaları üzerinden entegre çalışır."
                  },
                  {
                    icon: <FiMapPin className="w-6 h-6" />,
                    title: "Anlık Harita ve Rota Takibi",
                    description: "Araçların belirlenen rotadan sapıp sapmadığı, hız sınırlarına uyup uymadığı merkezden ve ilgili taraflardan anlık olarak izlenebilir."
                  },
                  {
                    icon: <FiBell className="w-6 h-6" />,
                    title: "Tam Entegre Bilgilendirme",
                    description: "Öğrencinin/yolcunun araca biniş anı, aracın mevcut konumu ve varış noktasına teslimatı; okul yönetimi, servis şirketi ve veli üçgeninde eş zamanlı paylaşılır."
                  },
                  {
                    icon: <FiAlertCircle className="w-6 h-6" />,
                    title: "Acil Durum Yönetimi",
                    description: "Beklenmedik durumlarda veya rota dışı hareketlerde sistem otomatik olarak uyarı mekanizmalarını devreye sokar."
                  },
                  {
                    icon: <FiUsers className="w-6 h-6" />,
                    title: "White-Label Özelleştirme",
                    description: "Yazılım, hizmet alan firmanın kendi logosu, renkleri ve kurumsal kimliği ile markalanır. Bu sayede firmalar, müşterilerine kendi özel yazılımlarını sunuyormuş gibi prestijli bir deneyim yaşatır."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-lg flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                          {feature.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Financial Model Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Yenilikçi Finansal Model: Gider Değil, Gelir Kaynağı
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                SchoolRoute, taşımacılık sektöründeki maliyet kalemlerini değiştiren benzersiz bir gelir paylaşım modeli sunar:
              </motion.p>

              <div className="space-y-4">
                {[
                  {
                    icon: <FiTrendingUp className="w-5 h-5" />,
                    title: "Sıfır Yatırım Maliyeti",
                    description: "Okul, şirket veya taşıma firması için bir altyapı gideri oluşturmaz."
                  },
                  {
                    icon: <FiUsers className="w-5 h-5" />,
                    title: "Kullanıcı Bazlı Ücretlendirme",
                    description: "Sistem ücreti, doğrudan hizmet alan yolcu veya bağlı olduğu tüzel kişiye yansıtılır."
                  },
                  {
                    icon: <FiBarChart className="w-5 h-5" />,
                    title: "Gelir Paylaşımı",
                    description: "Yazılım şirketi ile taşıma şirketi arasında yapılan bölümleme sayesinde, sistem kurumlar için bir maliyet kalemi olmaktan çıkıp, katma değerli bir gelir kaynağına dönüşür."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-blue-50 dark:bg-gray-800 rounded-lg p-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reporting Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Operasyonel Şeffaflık ve Raporlama
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hali hazırda aktif olarak kullanılan sistemimizle yöneticiler şu verilere düzenli olarak erişebilir:
              </motion.p>

              <div className="space-y-4">
                {[
                  {
                    number: "1",
                    title: "Sürücü Kimlik Doğrulaması",
                    description: "Aracı o an hangi personelin kullandığının tespiti."
                  },
                  {
                    number: "2",
                    title: "Zaman Çizelgesi Uyumu",
                    description: "Duraklarda bekleme süreleri ve varış zamanı analizleri."
                  },
                  {
                    number: "3",
                    title: "Güvenlik Raporları",
                    description: "Rota dışına çıkma uyarıları ve geçmiş sefer dökümleri."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {item.number}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why SchoolRoute Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Neden SchoolRoute?
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                SchoolRoute sadece bir takip yazılımı değil; veli güvenini artıran, okul ve servis şirketi arasındaki iletişimi dijitalleştiren ve operasyonel hataları minimize eden bir yönetim asistanıdır. Bugün iki büyük eğitim kurumunda aktif olarak kullanılan bu sistem, taşımacılıkta dijital dönüşümün en pratik halidir.
              </motion.p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  SchoolRoute'u Keşfedin
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Daha fazla bilgi için resmi web sitesini ziyaret edin
                </p>
                <Link
                  href="https://schoolroute.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                  <span>SchoolRoute.net'e Git</span>
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

