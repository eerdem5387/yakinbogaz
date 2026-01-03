import React, { useState, useRef, useEffect } from 'react';
import Layout from '@/components/Layout';
import { motion } from "framer-motion";
import Seo from '@/components/Seo';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { FiArrowRight, FiCheck, FiMapPin, FiBell, FiShield, FiTrendingUp, FiBarChart, FiUsers, FiClock, FiAlertCircle, FiPlay, FiMonitor, FiUserCheck, FiNavigation, FiFileText, FiDollarSign, FiSmartphone, FiEye, FiMessageCircle, FiLock } from 'react-icons/fi';

export default function SchoolRoute() {
  const { t } = useLanguage();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shouldLoadVideo || isVideoLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoLoaded(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [shouldLoadVideo, isVideoLoaded]);

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
          className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 opacity-30 pointer-events-none"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
              backgroundSize: "200% 200%",
            }}
          />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div 
                  className="flex justify-center mb-8"
                  initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, type: "spring", stiffness: 200 }}
                >
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <Image
                      src="/img/scr-logo.png"
                      alt="SchoolRoute Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                >
                  SchoolRoute: Akıllı Personel ve Öğrenci Taşıma Yönetim Sistemi
                </motion.h1>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Visual Showcase Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/scr.png"
                    alt="SchoolRoute - Akıllı Personel ve Öğrenci Taşıma Yönetim Sistemi"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                ref={videoRef}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {!shouldLoadVideo ? (
                  <motion.div 
                    className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                    onClick={() => setShouldLoadVideo(true)}
                  >
                    <motion.div 
                      className="absolute inset-0 z-10 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div 
                        className="text-center"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-4 inline-block">
                          <FiPlay className="w-16 h-16 text-white ml-1" />
                        </div>
                        <motion.p 
                          className="text-white text-lg font-semibold"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          SchoolRoute Tanıtım Videosu
                        </motion.p>
                        <motion.p 
                          className="text-white/80 text-sm mt-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          Videoyu izlemek için tıklayın
                        </motion.p>
                      </motion.div>
                    </motion.div>
                    <Image
                      src="https://vumbnail.com/1150437070.jpg"
                      alt="SchoolRoute Tanıtım Videosu"
                      fill
                      className="object-cover"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback: Vimeo oEmbed API ile thumbnail al
                        const target = e.target as HTMLImageElement;
                        target.src = `https://i.vimeocdn.com/video/${1150437070}_1280.jpg`;
                      }}
                    />
                  </motion.div>
                ) : (
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    {isVideoLoaded ? (
                      <iframe
                        className="w-full h-full"
                        src="https://player.vimeo.com/video/1150437070?autoplay=1&title=0&byline=0&portrait=0"
                        title="SchoolRoute Tanıtım Videosu"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <div className="text-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                          <p className="text-gray-600 dark:text-gray-400">Video yükleniyor...</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                SCHOOLROUTE; YENİ NESİL ARAÇ/ÖĞRENCİ TAKİP SİSTEMİ
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                SchoolRoute, sabit rotalı taşımacılık operasyonlarında; güvenlik, izlenebilirlik ve verimliliği bir araya getiren hibrit (Mobil & Masaüstü) bir takip ve raporlama ekosistemidir. Geleneksel takip sistemlerinin aksine, donanım maliyetlerini ortadan kaldırarak yazılım tabanlı uçtan uca bir çözüm sunar.
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                SchoolRoute, mobil telefon aracılığıyla servis araçlarının ve kullanıcılarının hizmet alımı, kullanımı ve lokasyonlarını yeni nesil teknolojilerle takip eder.
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Şirket, kullanıcı ve sürücü için kolaylık ve güvenilirlik sağlar.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {[
                  { src: '/1.png', alt: 'SchoolRoute Ekran Görüntüsü 1' },
                  { src: '/2.png', alt: 'SchoolRoute Ekran Görüntüsü 2' },
                  { src: '/3.jpg', alt: 'SchoolRoute Ekran Görüntüsü 3' }
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-[2rem] overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 15 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
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
                {/* Şirket/Okul İçin */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Şirket/Okul İçin</h3>
                </motion.div>
                {[
                  {
                    icon: <FiMonitor className="w-6 h-6" />,
                    title: "Tüm Araçların Konumlarının Aynı Anda Tek Ekranda Takibi",
                    description: "Servis şirketi veya okul gibi yönetici platformları, tüm araçları aynı anda tek ekranda görebilir. Gittikleri yolu ve içindeki öğrenci/kullanıcıyı anında görebilir. Tüm seferler kontrolü altında olur.",
                    showImage: true,
                    imageSrc: "/panel-canli-takip.png",
                    imageAlt: "Tüm Araçların Konumlarının Aynı Anda Tek Ekranda Takibi - SchoolRoute Panel Görüntüsü"
                  },
                  {
                    icon: <FiUserCheck className="w-6 h-6" />,
                    title: "Sürücü Kimliklerinin Onaylanması",
                    description: "Araçların yetkisiz kişiler tarafından kullanılıp kullanılmadığını öğrenir, aksi durumlarda uygulama tarafından uyarılır. Aracı o an hangi personelin kullandığının tespiti yapılır.",
                    showImage: true,
                    imageSrc: "/suruculer.png",
                    imageAlt: "Sürücü Kimliklerinin Onaylanması - SchoolRoute Sürücü Yönetim Paneli"
                  },
                  {
                    icon: <FiNavigation className="w-6 h-6" />,
                    title: "Rota Sapmalarının Anlık Tespiti",
                    description: "Araçların belirlenen rotadan sapıp sapmadığı merkezden ve ilgili taraflardan anlık olarak izlenebilir. Rotasından çıkan aracı görür ve müdahale edebilir."
                  },
                  {
                    icon: <FiFileText className="w-6 h-6" />,
                    title: "Araç - Veli - Öğrenci Raporlamaları",
                    description: "Gün, hafta, ay, yıl periyotlu rota, süre, kullanım ve ücretlendirme raporlarını anında alabilir. Operasyonel şeffaflık ve detaylı analiz imkanı sunar.",
                    showImage: true,
                    imageSrc: "/raporlar.png",
                    imageAlt: "Araç - Veli - Öğrenci Raporlamaları - SchoolRoute Raporlama Paneli"
                  },
                  {
                    icon: <FiShield className="w-6 h-6" />,
                    title: "Ek Cihaz ve Maliyet Gerektirmeyen Güvenilir Sistem",
                    description: "SchoolRoute araçlara ek GPS modülleri ve cihazları gerektirmez. Mobil telefon tanımlamaları sayesinde sıfır cihaz maliyeti sunar. Araca özel herhangi bir GPS cihazı veya ek donanım takılmasına gerek duymaz."
                  },
                  {
                    icon: <FiUsers className="w-6 h-6" />,
                    title: "Kolay Yönetim Arayüzleri",
                    description: "Arayüzler, yönetici, sürücü ve velilerin basitçe kullanımına ve az zaman ayırarak hizmetten faydalanmasına uygun tasarlanmıştır."
                  },
                  {
                    icon: <FiDollarSign className="w-6 h-6" />,
                    title: "Gelir Getiren Ücretlendirme Sistemi",
                    description: "SchoolRoute şirket veya okul için ek maliyet getirmeyecek şekilde ücretlendirilecek şekilde uygulandığı için kazançlı tek uygulamadır. Sistem kurumlar için bir maliyet kalemi olmaktan çıkıp, katma değerli bir gelir kaynağına dönüşür."
                  },
                  {
                    icon: <FiSmartphone className="w-6 h-6" />,
                    title: "Mobil Uygulama ile Kendi Markanızı Kullanın",
                    description: "Uygulamada, kendi marka ve logonuz sağlanır, marka değerinize katkıda bulunulur. Yazılım, hizmet alan firmanın kendi logosu, renkleri ve kurumsal kimliği ile markalanır."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={`company-${index}`}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                    initial={{ opacity: 0, x: -50, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-lg flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <motion.h3 
                          className="text-xl font-bold mb-2 text-gray-900 dark:text-white"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          {feature.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          {feature.description}
                        </motion.p>
                        {feature.showImage && (
                          <motion.div
                            className="mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                          >
                            {'images' in feature && feature.images ? (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {feature.images.map((img: { src: string; alt: string }, imgIndex: number) => (
                                  <div
                                    key={imgIndex}
                                    className="rounded-xl overflow-hidden shadow-lg"
                                  >
                                    <div className="relative w-full h-auto">
                                      <Image
                                        src={img.src}
                                        alt={img.alt}
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto object-contain rounded-xl"
                                        quality={85}
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="rounded-xl overflow-hidden shadow-lg">
                                <div className="relative w-full h-auto">
                                  <Image
                                    src={'imageSrc' in feature ? feature.imageSrc : "/panel-canli-takip.png"}
                                    alt={'imageAlt' in feature ? feature.imageAlt : "SchoolRoute Panel Görüntüsü"}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-contain rounded-xl"
                                    quality={85}
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Veli İçin */}
                <motion.div
                  className="mb-8 mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Veli İçin</h3>
                </motion.div>
                {[
                  {
                    icon: <FiEye className="w-6 h-6" />,
                    title: "Araç Gelmeden, Geldiğinde ve Öğrenci Binip Okula Teslim Edildiğinde Takip Edilebilme Yetenekleri",
                    description: "Öğrencinin/yolcunun araca biniş anı, aracın mevcut konumu ve varış noktasına teslimatı; okul yönetimi, servis şirketi ve veli üçgeninde eş zamanlı paylaşılır. Öğrencinin araca ne zaman binebileceği, telefon yoluyla haritada görüneceği için, erken gönderme veya geç kalma durumlarının önüne geçilir, sürücü hataları kayıt altına alınır."
                  },
                  {
                    icon: <FiBell className="w-6 h-6" />,
                    title: "Geç Kalma Binmeme Durumlarının Anlık Haber Verilebilme",
                    description: "Öğrencinin servis kullanımında aksama olması halinde anlık bildirim alma yoluyla bildirilir. Öğrencinin konumu gelmeden inmesi halinde veliye bilgilendirme yapılır. Beklenmedik durumlarda veya rota dışı hareketlerde sistem otomatik olarak uyarı mekanizmalarını devreye sokar."
                  },
                  {
                    icon: <FiLock className="w-6 h-6" />,
                    title: "Sürücü Kimliği Güvenilirliği",
                    description: "Aracı belirli sürücü dışında başka birisinin kullanması halinde şirket ve veli bu durumu görür ve yasal delil elde eder."
                  },
                  {
                    icon: <FiSmartphone className="w-6 h-6" />,
                    title: "Mobil Uygulama Sayesinde Evden, İşten Her Yerden Takip Edebilme Kabiliyeti",
                    description: "Mobil uygulama sayesinde cep telefonuyla, evden, işten, her yerden takip edebilir. Kilit ve uygulama ekranından bildirimleri kaçırmadan görebilir. Mesajların arasında acil durumlar kaybolmaz."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={`parent-${index}`}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                    initial={{ opacity: 0, x: -50, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-lg flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <motion.h3 
                          className="text-xl font-bold mb-2 text-gray-900 dark:text-white"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          {feature.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-700 dark:text-gray-300 leading-relaxed"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          {feature.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Sürücü İçin */}
                <motion.div
                  className="mb-8 mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Sürücü İçin</h3>
                </motion.div>
                {[
                  {
                    icon: <FiShield className="w-6 h-6" />,
                    title: "Veli Öğrenci Kaynaklı Hataların Hukuksal Olarak Delillendirilmesi",
                    description: "Velilerin veya öğrencilerin kendi iradeleriyle gecikmesi, gelmemesi durumları sistem tarafından sürücünün üzerinden sorumluluğu kaldıracak şekilde delillendirilir."
                  },
                  {
                    icon: <FiMapPin className="w-6 h-6" />,
                    title: "Öğrenci Pozisyonlarının Önceden Öğrenilerek Hareket Oluşturulabilmesi",
                    description: "Veliler veya öğrencilerin, binmeden konumu, durumu veya servis kullanıp kullanmayacakları önceden harita üzerinde kendilerine bildirildiği için zaman kaybı olmaz. Sürücünün kullanıcıların gelip gelmediğini anında işaretlemesi işini kolaylaştırır.",
                    showImage: true,
                    images: [
                      {
                        src: "/gercek-surus.png",
                        alt: "Gerçek Sürüş Ekranı - SchoolRoute Sürücü Uygulaması"
                      },
                      {
                        src: "/ogrenci-listesi.png",
                        alt: "Öğrenci Listesi - SchoolRoute Sürücü Uygulaması"
                      }
                    ]
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={`driver-${index}`}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                    initial={{ opacity: 0, x: -50, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-lg flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <motion.h3 
                          className="text-xl font-bold mb-2 text-gray-900 dark:text-white"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          {feature.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          {feature.description}
                        </motion.p>
                        {feature.showImage && (
                          <motion.div
                            className="mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                          >
                            {'images' in feature && feature.images ? (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {feature.images.map((img: { src: string; alt: string }, imgIndex: number) => (
                                  <div
                                    key={imgIndex}
                                    className="rounded-xl overflow-hidden shadow-lg"
                                  >
                                    <div className="relative w-full h-auto">
                                      <Image
                                        src={img.src}
                                        alt={img.alt}
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto object-contain rounded-xl"
                                        quality={85}
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="rounded-xl overflow-hidden shadow-lg">
                                <div className="relative w-full h-auto">
                                  <Image
                                    src={'imageSrc' in feature ? feature.imageSrc : "/panel-canli-takip.png"}
                                    alt={'imageAlt' in feature ? feature.imageAlt : "SchoolRoute Panel Görüntüsü"}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-contain rounded-xl"
                                    quality={85}
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}
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
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <motion.h3 
                          className="text-lg font-semibold mb-2 text-gray-900 dark:text-white"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.2 }}
                        >
                          {item.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-700 dark:text-gray-300"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.3 }}
                        >
                          {item.description}
                        </motion.p>
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
                    initial={{ opacity: 0, x: -30, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.15 + 0.2,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        {item.number}
                      </motion.div>
                      <div>
                        <motion.h3 
                          className="text-lg font-semibold mb-2 text-gray-900 dark:text-white"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.3 }}
                        >
                          {item.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-700 dark:text-gray-300"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.4 }}
                        >
                          {item.description}
                        </motion.p>
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
                <div>
                  <Link
                    href="https://schoolroute.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      SchoolRoute Web Sayfasını Ziyaret Edin
                    </motion.span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1.5,
                        ease: "easeInOut"
                      }}
                    >
                      <FiArrowRight className="w-5 h-5" />
                    </motion.div>
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

