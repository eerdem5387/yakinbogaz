import React from 'react';
import Layout from '@/components/Layout';
import { motion } from "framer-motion";
import Seo from '@/components/Seo';

export default function GizlilikPolitikasi() {
  return (
    <Layout>
      <Seo
        title="Gizlilik Politikası - YakınBoğaz Software"
        description="YakınBoğaz Software gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi. KVKK uyumlu."
        keywords="gizlilik politikası, KVKK, kişisel veriler, veri koruma, gizlilik, YakınBoğaz gizlilik"
        image="/img/yb-logo.png"
        noindex={true}
      />
      
      <div className="container mx-auto px-6 py-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Gizlilik Politikası
            </h1>
            <p className="text-xl text-gray-600">
              MobilDers – AKER Temel Matematik Uygulaması
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <motion.div
              className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-blue-800 mb-2">Uygulama Hakkında</h2>
              <p className="text-blue-700">
                MobilDers – AKER Temel Matematik, "Mobil Eğitim Her Yerde Seninle!" sloganıyla 
                matematik öğrenmeyi kolaylaştıran bir mobil eğitim uygulamasıdır. Bu gizlilik politikası, 
                uygulamamızı kullanırken toplanan bilgilerin nasıl kullanıldığını açıklar.
              </p>
            </motion.div>

            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">1. Toplanan Bilgiler</h2>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-700">1.1 Kişisel Bilgiler</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li><strong>Hesap Bilgileri:</strong> E-posta adresi, kullanıcı adı</li>
                <li><strong>İletişim Bilgileri:</strong> E-posta adresi (teknik destek için)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-gray-700">1.2 Kullanım Verileri</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li><strong>Öğrenme Verileri:</strong> Çözülen sorular, test sonuçları, ilerleme durumu</li>
                <li><strong>Uygulama Kullanımı:</strong> Kullanım süresi, ziyaret edilen bölümler</li>
                <li><strong>Teknik Veriler:</strong> Cihaz bilgileri, işletim sistemi, uygulama versiyonu</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-gray-700">1.3 Otomatik Toplanan Veriler</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li><strong>Çerezler:</strong> Oturum yönetimi ve kullanıcı tercihleri için</li>
                <li><strong>Analitik Veriler:</strong> Uygulama performansı ve kullanım istatistikleri</li>
                <li><strong>Hata Raporları:</strong> Uygulama hatalarının tespiti ve düzeltilmesi için</li>
              </ul>
            </motion.section>

            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">2. Bilgilerin Kullanım Amacı</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Eğitim Hizmetleri</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Kişiselleştirilmiş öğrenme deneyimi</li>
                    <li>• İlerleme takibi ve raporlama</li>
                    <li>• Video çözümler ve interaktif testler</li>
                    <li>• Öğrenme performansı analizi</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Teknik Hizmetler</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Uygulama performansı optimizasyonu</li>
                    <li>• Hata tespiti ve düzeltme</li>
                    <li>• Güvenlik ve güvenilirlik</li>
                    <li>• Teknik destek hizmetleri</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">3. Bilgi Paylaşımı</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-yellow-800">Üçüncü Taraf Paylaşımı</h3>
                <p className="text-yellow-700 mb-4">
                  Kişisel verileriniz, aşağıdaki durumlar dışında üçüncü taraflarla paylaşılmaz:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-yellow-700">
                  <li>Yasal zorunluluk durumunda</li>
                  <li>Açık rızanızın bulunması durumunda</li>
                  <li>Hizmet sağlayıcılarımızla (veri işleme sözleşmesi kapsamında)</li>
                  <li>Güvenlik ve dolandırıcılık önleme amaçlı</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-700">3.1 Hizmet Sağlayıcılar</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li><strong>Bulut Hizmetleri:</strong> Veri depolama ve işleme</li>
                <li><strong>Analitik Hizmetleri:</strong> Kullanım istatistikleri</li>
                <li><strong>Ödeme Hizmetleri:</strong> Premium üyelik işlemleri</li>
                <li><strong>E-posta Hizmetleri:</strong> İletişim ve bildirimler</li>
              </ul>
            </motion.section>

            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">4. Veri Güvenliği</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-3">🔒</div>
                  <h3 className="font-semibold mb-2">Şifreleme</h3>
                  <p className="text-sm text-gray-600">Tüm veriler SSL/TLS ile şifrelenir</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-3">🛡️</div>
                  <h3 className="font-semibold mb-2">Güvenlik</h3>
                  <p className="text-sm text-gray-600">Endüstri standardı güvenlik önlemleri</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="font-semibold mb-2">İzleme</h3>
                  <p className="text-sm text-gray-600">Sürekli güvenlik izleme ve denetim</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-700">4.1 Güvenlik Önlemleri</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Veri şifreleme (AES-256)</li>
                <li>Güvenli kimlik doğrulama</li>
                <li>Düzenli güvenlik denetimleri</li>
                <li>Erişim kontrolü ve yetkilendirme</li>
                <li>Veri yedekleme ve felaket kurtarma</li>
              </ul>
            </motion.section>

            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">5. Kullanıcı Hakları</h2>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">KVKK Kapsamında Haklarınız</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-purple-700">
                    <li>• Bilgi alma hakkı</li>
                    <li>• Erişim hakkı</li>
                    <li>• Düzeltme hakkı</li>
                    <li>• Silme hakkı</li>
                  </ul>
                  <ul className="space-y-2 text-purple-700">
                    <li>• İşlemeyi sınırlama hakkı</li>
                    <li>• Veri taşınabilirliği</li>
                    <li>• İtiraz hakkı</li>
                    <li>• Zararın giderilmesi</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-700">5.1 Haklarınızı Kullanma</h3>
              <p className="text-gray-600 mb-4">
                Yukarıdaki haklarınızı kullanmak için aşağıdaki kanallardan bizimle iletişime geçebilirsiniz:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li><strong>E-posta:</strong> info@yakinbogaz.com</li>
                <li><strong>Telefon:</strong> +90 xxx xxx xx xx</li>
                <li><strong>Adres:</strong> [Şirket Adresi]</li>
              </ul>
            </motion.section>

            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">6. Çocukların Gizliliği</h2>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">13 Yaş Altı Kullanıcılar</h3>
                <p className="text-orange-700 mb-4">
                  MobilDers uygulaması 13 yaş altı kullanıcılar için tasarlanmıştır. Bu kullanıcıların 
                  verileri özel olarak korunur ve ebeveyn onayı gereklidir.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-orange-700">
                  <li>Ebeveyn onayı zorunludur</li>
                  <li>Kısıtlı veri toplama</li>
                  <li>Ebeveyn kontrolü ve izleme</li>
                  <li>Güvenli içerik filtreleme</li>
                </ul>
              </div>
            </motion.section>

            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">7. Çerezler ve İzleme</h2>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-700">7.1 Çerez Türleri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-800">Gerekli Çerezler</h4>
                  <p className="text-sm text-gray-600">Uygulamanın temel işlevleri için zorunlu</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-gray-800">Analitik Çerezler</h4>
                  <p className="text-sm text-gray-600">Kullanım istatistikleri için kullanılır</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-700">7.2 Çerez Yönetimi</h3>
              <p className="text-gray-600 mb-4">
                Tarayıcı ayarlarınızdan çerezleri yönetebilir veya devre dışı bırakabilirsiniz. 
                Ancak bu durumda uygulamanın bazı özellikleri çalışmayabilir.
              </p>
            </motion.section>

            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">8. Politika Değişiklikleri</h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-red-800">Değişiklik Bildirimi</h3>
                <p className="text-red-700">
                  Bu gizlilik politikası zaman zaman güncellenebilir. Önemli değişiklikler 
                  uygulama içi bildirim veya e-posta ile size bildirilecektir.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-700">8.1 Değişiklik Takibi</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Politika değişiklikleri bu sayfada yayınlanır</li>
                <li>Son güncelleme tarihi belirtilir</li>
                <li>Önemli değişiklikler için bildirim gönderilir</li>
                <li>Değişiklikler 30 gün önceden duyurulur</li>
              </ul>
            </motion.section>

            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">9. İletişim</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Bizimle İletişime Geçin</h3>
                <p className="text-gray-600 mb-6">
                  Gizlilik politikamız hakkında sorularınız veya endişeleriniz varsa, 
                  aşağıdaki kanallardan bizimle iletişime geçebilirsiniz:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">Veri Sorumlusu</h4>
                    <p className="text-gray-600">YakınBoğaz Software</p>
                    <p className="text-gray-600">E-posta: gizlilik@mobilders.com</p>
                    <p className="text-gray-600">Telefon: +90 xxx xxx xx xx</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">Teknik Destek</h4>
                    <p className="text-gray-600">E-posta: destek@mobilders.com</p>
                    <p className="text-gray-600">Telefon: +90 xxx xxx xx xx</p>
                    <p className="text-gray-600">Çalışma Saatleri: 09:00-18:00 (GMT+3)</p>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.div
              className="text-center mt-12 p-6 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <p className="text-gray-600">
                Bu gizlilik politikası, MobilDers uygulamasının kullanımı sırasında 
                toplanan bilgilerin nasıl kullanıldığını açıklar. Uygulamayı kullanarak 
                bu politikayı kabul etmiş sayılırsınız.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
