import React from 'react';
import Layout from '@/components/Layout';
import { motion } from "framer-motion";
import Seo from '@/components/Seo';
import Link from 'next/link';

export default function DijitalCozumler() {
  const services = [
    {
      title: "Web Sayfaları",
      description: "Modern, responsive ve SEO uyumlu web sayfaları tasarlıyoruz. Markanızı en iyi şekilde yansıtan profesyonel tasarımlar.",
      icon: "🌐",
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Responsive Tasarım",
        "SEO Optimizasyonu", 
        "Hızlı Yükleme",
        "Modern UI/UX",
        "Mobil Uyumluluk",
        "Güvenlik Sertifikaları"
      ],
      price: "Başlangıç: ₺5.000",
      duration: "2-4 hafta"
    },
    {
      title: "E-Ticaret Hizmetleri",
      description: "Kapsamlı e-ticaret çözümleri ile online satışlarınızı artırın. Güvenli ödeme sistemleri ve stok yönetimi.",
      icon: "🛍️",
      gradient: "from-pink-500 to-pink-600",
      features: [
        "Online Mağaza",
        "Ödeme Sistemleri",
        "Stok Yönetimi",
        "Sipariş Takibi",
        "Müşteri Yönetimi",
        "Raporlama"
      ],
      price: "Başlangıç: ₺15.000",
      duration: "4-8 hafta"
    },
    {
      title: "Marka Tasarımları",
      description: "Markanızı öne çıkaracak, unutulmaz tasarım çözümleri. Logo, kurumsal kimlik ve görsel iletişim materyalleri.",
      icon: "✨",
      gradient: "from-purple-500 to-purple-600",
      features: [
        "Logo Tasarımı",
        "Kurumsal Kimlik",
        "Görsel Materyaller",
        "Sosyal Medya Tasarımları",
        "Baskı Materyalleri",
        "Marka Rehberi"
      ],
      price: "Başlangıç: ₺3.000",
      duration: "1-2 hafta"
    },
    {
      title: "İşinize Özel Yazılımlar",
      description: "İhtiyaçlarınıza özel yazılım çözümleri geliştiriyoruz. İş süreçlerinizi otomatikleştirin ve verimliliğinizi artırın.",
      icon: "💻",
      gradient: "from-green-500 to-green-600",
      features: [
        "Özel Geliştirme",
        "Süreç Otomasyonu",
        "Veritabanı Yönetimi",
        "API Entegrasyonu",
        "Raporlama Sistemleri",
        "Teknik Destek"
      ],
      price: "Proje bazlı",
      duration: "Değişken"
    },
    {
      title: "Web'den Mobile",
      description: "Web uygulamalarınızı mobil cihazlara uyarlıyoruz. Her platformda mükemmel kullanıcı deneyimi.",
      icon: "📱",
      gradient: "from-orange-500 to-orange-600",
      features: [
        "Mobil Uyumluluk",
        "PWA Desteği",
        "Cross-Platform",
        "Native Performans",
        "Offline Çalışma",
        "Push Bildirimler"
      ],
      price: "Başlangıç: ₺8.000",
      duration: "3-6 hafta"
    }
  ];

  return (
    <Layout>
      <Seo
        title="Dijital Çözümler - YakınBoğaz Software"
        description="Web sayfaları, e-ticaret hizmetleri, marka tasarımları, özel yazılımlar ve mobil uygulamalar. İşletmeniz için kapsamlı dijital çözümler."
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
                Dijital Çözümler
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                İşletmenizin dijital dönüşümü için kapsamlı çözümler sunuyoruz. 
                Modern teknolojilerle geleceğe hazır olun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/iletisim"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Ücretsiz Danışmanlık
                </Link>
                <Link 
                  href="/projelendirme"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  Projelerimizi İncele
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Grid */}
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
                Hizmetlerimiz
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Her işletmenin ihtiyacına özel, modern ve etkili dijital çözümler
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-sm opacity-90">{service.price}</div>
                        <div className="text-xs opacity-75">{service.duration}</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="opacity-90">{service.description}</p>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Özellikler</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Link 
                        href="/iletisim"
                        className={`bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex-1 text-center`}
                      >
                        Teklif Al
                      </Link>
                      <Link 
                        href={`/projelendirme#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex-1 text-center"
                      >
                        Detaylar
                      </Link>
                    </div>
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

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Analiz & Planlama",
                  description: "İhtiyaçlarınızı analiz eder, en uygun çözümü planlarız",
                  icon: "📋"
                },
                {
                  step: "02", 
                  title: "Tasarım & Geliştirme",
                  description: "Modern tasarımlar ve güçlü teknolojilerle geliştiririz",
                  icon: "🎨"
                },
                {
                  step: "03",
                  title: "Test & Optimizasyon", 
                  description: "Kapsamlı testler ve performans optimizasyonu yaparız",
                  icon: "🔧"
                },
                {
                  step: "04",
                  title: "Yayın & Destek",
                  description: "Projenizi yayınlar ve sürekli destek sağlarız",
                  icon: "🚀"
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
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-4xl mb-4">{process.icon}</div>
                    <div className="text-3xl font-bold text-blue-600 mb-4">{process.step}</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
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
                Kullandığımız Teknolojiler
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <span className="text-sm font-semibold text-gray-700">{tech.name}</span>
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
                Projenizi Hayata Geçirelim
              </motion.h2>
              
              <motion.p 
                className="text-xl mb-8 opacity-90"
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
                  className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Ücretsiz Danışmanlık
                </Link>
                <Link 
                  href="/projelendirme"
                  className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Projelerimizi İncele
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
