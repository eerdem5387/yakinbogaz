import React, { useState, useRef } from 'react';
import Layout from '@/components/Layout';
import { motion, AnimatePresence } from "framer-motion";
import Seo from '@/components/Seo';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import ReCAPTCHA from 'react-google-recaptcha';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock,
  FiLinkedin,
  FiInstagram,
  FiSend,
  FiCheckCircle,
  FiAlertCircle
} from 'react-icons/fi';

export default function Iletisim() {
  const { t } = useLanguage();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // reCAPTCHA token al
      const recaptchaToken = recaptchaRef.current?.getValue();
      
      if (!recaptchaToken && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
        setError('Lütfen reCAPTCHA doğrulamasını tamamlayın.');
        setIsSubmitting(false);
        return;
      }

      // API'ye gönder
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: recaptchaToken || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
      }

      // Başarılı
      setIsSubmitted(true);
      setShowSuccessPopup(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      
      // reCAPTCHA'yı sıfırla
      recaptchaRef.current?.reset();
      
      // Form içindeki başarı mesajını 5 saniye sonra kaldır
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
      // Pop-up'ı 4 saniye sonra kaldır
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Seo
        title="İletişim - YakınBoğaz Software"
        description="YakınBoğaz Software ile iletişime geçin. Ücretsiz danışmanlık, proje teklifi ve teknik destek için bizimle iletişime geçin."
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
                {t('contact.title')}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed px-4">
                {t('contact.subtitle')}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Form & Info */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 dark:text-white">
                  {t('contact.sendMessage')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.name')} {t('common.required')}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder={t('common.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.email')} {t('common.required')}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder={t('common.emailPlaceholder')}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.phone')}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder={t('common.phonePlaceholder')}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.company')}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder={t('common.companyPlaceholder')}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.serviceType')}
                    </label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="">{t('contact.selectService')}</option>
                      <option value="web">Web Sayfası</option>
                      <option value="ecommerce">E-Ticaret</option>
                      <option value="mobile">Mobil Uygulama</option>
                      <option value="custom">Özel Yazılım</option>
                      <option value="design">Marka Tasarımı</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.message')} {t('common.required')}
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder={t('common.messagePlaceholder')}
                    ></textarea>
                  </div>
                  
                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl"
                    >
                      <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  {/* Success Message */}
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-4 rounded-xl"
                    >
                      <FiCheckCircle className="w-5 h-5" />
                      <span>{t('contact.sent')}</span>
                    </motion.div>
                  )}

                  {/* reCAPTCHA */}
                  {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
                    <div className="flex justify-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        theme="light"
                      />
                    </div>
                  )}
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2 py-4 text-base md:text-lg"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>{t('contact.sending')}</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        <span>{t('contact.send')}</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 dark:text-white">
                  {t('contact.contactInfo')}
                </h2>
                
                <div className="space-y-6 md:space-y-8">
                  {/* Company Info */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 md:p-8 rounded-2xl border border-blue-100 dark:border-gray-600">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-white">YakınBoğaz Software</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
                      2020 yılından bu yana dijital çözümler sunan, 
                      eğitim teknolojileri ve yazılım geliştirme alanında uzmanlaşmış şirket.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm md:text-base text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        4+ yıllık deneyim
                      </div>
                      <div className="flex items-center text-sm md:text-base text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        200+ başarılı proje
                      </div>
                    </div>
                  </div>

                  {/* Contact Methods */}
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl flex-shrink-0">
                        <FiPhone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-1 text-base md:text-lg">{t('contact.phone')}</h4>
                        <a href="tel:+904642171555" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 block text-sm md:text-base">
                          0464 217 15 55
                        </a>
                        <a href="tel:+905322906455" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 block text-sm md:text-base">
                          0532 290 64 55
                        </a>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl flex-shrink-0">
                        <FiMail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-1 text-base md:text-lg">E-posta</h4>
                        <a href="mailto:info@yakinbogaz.com" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 block text-sm md:text-base">
                          info@yakinbogaz.com
                        </a>
                        <a href="mailto:destek@yakinbogaz.com" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 block text-sm md:text-base">
                          destek@yakinbogaz.com
                        </a>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl flex-shrink-0">
                        <FiMapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-1 text-base md:text-lg">{t('contact.address')}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                          KANBURSIRT FABRİKA SOK NO 24<br />
                          RİZE, TÜRKİYE
                        </p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-xl flex-shrink-0">
                        <FiClock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-1 text-base md:text-lg">{t('contact.workingHours')}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{t('contact.workingHoursWeek')}</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{t('contact.workingHoursSat')}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Social Media */}
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-4 text-base md:text-lg">{t('contact.socialMedia')}</h4>
                    <div className="flex space-x-4">
                      {[
                        { 
                          href: '#', 
                          icon: ({ className }: { className?: string }) => (
                            <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                          ), 
                          label: 'X (Twitter)', 
                          bg: 'bg-black hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700' 
                        },
                        { href: '#', icon: FiLinkedin, label: 'LinkedIn', bg: 'bg-blue-800 hover:bg-blue-900' },
                        { href: '#', icon: FiInstagram, label: 'Instagram', bg: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' },
                      ].map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${social.bg} text-white p-3 rounded-xl transition-all duration-300 flex items-center justify-center`}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={social.label}
                          >
                            <Icon className="w-5 h-5" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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
                Sık Sorulan Sorular
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                En çok sorulan sorular ve cevapları
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
              {[
                {
                  question: "Proje süreleri ne kadar?",
                  answer: "Proje süreleri projenin kapsamına göre değişmektedir. Basit web siteleri 2-4 hafta, e-ticaret projeleri 4-8 hafta, özel yazılım projeleri ise proje kapsamına göre belirlenmektedir."
                },
                {
                  question: "Teknik destek hizmeti veriyor musunuz?",
                  answer: "Evet, tüm projelerimiz için teknik destek ve bakım hizmetleri sunuyoruz. 7/24 destek hizmetimiz mevcuttur."
                },
                {
                  question: "Hangi teknolojileri kullanıyorsunuz?",
                  answer: "React, Next.js, Node.js, TypeScript, TailwindCSS, MongoDB, PostgreSQL gibi modern teknolojileri kullanıyoruz. Projenin ihtiyaçlarına göre en uygun teknoloji stack'ini belirliyoruz."
                },
                {
                  question: "Mobil uygulama geliştiriyor musunuz?",
                  answer: "Evet, iOS ve Android için native ve cross-platform mobil uygulamalar geliştiriyoruz. React Native ve Flutter teknolojilerini kullanıyoruz."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-800 dark:text-white">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Projenizi Hayata Geçirelim
              </motion.h2>
              
              <motion.p 
                className="text-lg sm:text-xl mb-8 opacity-90"
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
                  href="#contact-form"
                  className="bg-white text-blue-600 px-8 sm:px-10 py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Hemen Başlayın
                </Link>
                <Link 
                  href="/projelendirme"
                  className="border-2 border-white text-white px-8 sm:px-10 py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Hizmetlerimizi İncele
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Success Pop-up Toast */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-[100] max-w-md w-full mx-4"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 relative overflow-hidden">
              {/* Gradient Background */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"></div>
              
              {/* Content */}
              <div className="flex items-start space-x-4">
                {/* Success Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="flex-shrink-0"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <FiCheckCircle className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                
                {/* Message */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {t('contact.sent')}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t('contact.popupMessage')}
                  </p>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={() => setShowSuccessPopup(false)}
                  className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label="Kapat"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Progress Bar */}
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 4, ease: "linear" }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
