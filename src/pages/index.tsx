import React from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Seo from "@/components/Seo";
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
  FiDatabase
} from 'react-icons/fi';

export default function Home() {
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
                    <span>2020'den beri dijital çözümler</span>
                  </motion.div>
                  
                  <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Şirketinize Yönelik
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                      Dijital Çözümler
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    Modern teknolojilerle işletmenizi geleceğe taşıyoruz. 
                    <span className="font-semibold text-gray-800 dark:text-gray-200"> Web sayfaları</span>, 
                    <span className="font-semibold text-gray-800 dark:text-gray-200"> e-ticaret</span> ve 
                    <span className="font-semibold text-gray-800 dark:text-gray-200"> özel yazılımlar</span> ile 
                    dijital dönüşümünüzü tamamlıyoruz.
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
                      <span>Ücretsiz Danışmanlık</span>
                      <FiArrowRight className="w-5 h-5" />
                    </Link>
                    <Link 
                      href="/projelendirme"
                      className="btn-secondary flex items-center justify-center space-x-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                    >
                      <FiPlay className="w-5 h-5" />
                      <span>Projelerimizi İncele</span>
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
                            <h3 className="font-semibold text-sm md:text-base mb-1">Web Sayfaları</h3>
                            <p className="text-xs md:text-sm opacity-90">Modern tasarım</p>
                          </div>
                          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 md:p-6 rounded-2xl text-white shadow-lg card-hover">
                            <FiShoppingCart className="text-2xl md:text-3xl mb-2" />
                            <h3 className="font-semibold text-sm md:text-base mb-1">E-Ticaret</h3>
                            <p className="text-xs md:text-sm opacity-90">Güvenli alışveriş</p>
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
                            <h3 className="font-semibold text-sm md:text-base mb-1">Mobil Uygulama</h3>
                            <p className="text-xs md:text-sm opacity-90">Her platformda</p>
                          </div>
                          <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 md:p-6 rounded-2xl text-white shadow-lg card-hover">
                            <FiBookOpen className="text-2xl md:text-3xl mb-2" />
                            <h3 className="font-semibold text-sm md:text-base mb-1">Eğitim</h3>
                            <p className="text-xs md:text-sm opacity-90">MobilDers & SchoolRoute</p>
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
                Şirketinize Yönelik 
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Çözümler
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                İşletmenizin ihtiyaçlarına özel, modern ve etkili dijital çözümler sunuyoruz
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Web Sayfaları",
                  description: "Modern, responsive ve SEO uyumlu web sayfaları tasarlıyoruz. Markanızı en iyi şekilde yansıtan profesyonel tasarımlar.",
                  icon: <FiGlobe className="w-8 h-8" />,
                  gradient: "from-blue-500 to-blue-600",
                  features: ["Responsive Tasarım", "SEO Optimizasyonu", "Hızlı Yükleme"]
                },
                {
                  title: "Marka Tasarımları",
                  description: "Markanızı öne çıkaracak, unutulmaz tasarım çözümleri. Logo, kurumsal kimlik ve görsel iletişim materyalleri.",
                  icon: <FiStar className="w-8 h-8" />,
                  gradient: "from-purple-500 to-purple-600",
                  features: ["Logo Tasarımı", "Kurumsal Kimlik", "Görsel Materyaller"]
                },
                {
                  title: "E-Ticaret Hizmetleri",
                  description: "Kapsamlı e-ticaret çözümleri ile online satışlarınızı artırın. Güvenli ödeme sistemleri ve stok yönetimi.",
                  icon: <FiShoppingCart className="w-8 h-8" />,
                  gradient: "from-pink-500 to-pink-600",
                  features: ["Online Mağaza", "Ödeme Sistemleri", "Stok Yönetimi"]
                },
                {
                  title: "İşinize Özel Yazılımlar",
                  description: "İhtiyaçlarınıza özel yazılım çözümleri geliştiriyoruz. İş süreçlerinizi otomatikleştirin ve verimliliğinizi artırın.",
                  icon: <FiCode className="w-8 h-8" />,
                  gradient: "from-green-500 to-green-600",
                  features: ["Özel Geliştirme", "Süreç Otomasyonu", "Verimlilik Artışı"]
                },
                {
                  title: "Web'den Mobile",
                  description: "Web uygulamalarınızı mobil cihazlara uyarlıyoruz. Her platformda mükemmel kullanıcı deneyimi.",
                  icon: <FiSmartphone className="w-8 h-8" />,
                  gradient: "from-orange-500 to-orange-600",
                  features: ["Mobil Uyumluluk", "PWA Desteği", "Cross-Platform"]
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
                Eğitim Sektörüne Yönelik
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  İnovatif Ürünler
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                Geleceğin eğitim teknolojilerini bugünden yaşayın
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "SchoolRoute",
                  description: "Okul Servis Yönetiminde, Kontrol Sizde",
                  features: ["Gerçek Zamanlı Konum Takibi", "Rota Optimizasyonu ve Verimlilik", "Anlık Bildirimler ve Uyarılar", "Öğrenci ve Servis Güvenliği Takibi", "Veri Analizi ve Raporlama Özelliği"],
                  color: "blue",
                  logo: "/img/scr-logo.png"
                },
                {
                  title: "MobilDers",
                  description: "Mobil eğitim platformu ile her yerde öğrenin. Video çözümler, interaktif testler ve kişiselleştirilmiş öğrenme.",
                  features: ["Video Çözümler", "İnteraktif Testler", "Kişiselleştirilmiş Öğrenme"],
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
                      <span>Detayları İncele</span>
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
                { number: "10+", text: "Başarılı Proje", icon: <FiAward className="w-6 md:w-8 h-6 md:h-8" /> },
                { number: "5+", text: "Uzman Ekip", icon: <FiUsers className="w-6 md:w-8 h-6 md:h-8" /> },
                { number: "24/7", text: "Teknik Destek", icon: <FiShield className="w-6 md:w-8 h-6 md:h-8" /> },
                { number: "4+", text: "Yıllık Deneyim", icon: <FiTrendingUp className="w-6 md:w-8 h-6 md:h-8" /> }
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
                Referanslarımız
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                Güvenilir çözüm ortağınız olarak hizmet verdiğimiz kurumlar
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
              {[
                "Levent Koleji",
                "Karbonkurs Türkiye",
                "SchoolRoute",
                "MobilDers",
                "Payem Turizm",
                "Av. Abdulkadir Erdem"
              ].map((ref, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-gray-200 dark:border-gray-600"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <FiStar className="text-xl md:text-2xl mb-3 mx-auto text-blue-500" />
                  <div className="font-semibold text-gray-800 dark:text-gray-200 text-sm md:text-base">{ref}</div>
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
                Projeniz için 
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Ücretsiz Danışmanlık
                </span>
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link 
                  href="/iletisim"
                  className="btn-primary inline-flex items-center justify-center space-x-2 text-base sm:text-lg px-8 sm:px-10 py-4"
                >
                  <span>Hemen Başlayın</span>
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
