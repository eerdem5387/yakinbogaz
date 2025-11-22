# 🚀 cPanel'e Yükleme Rehberi

Bu rehber, YakınBoğaz Software web sitesini cPanel'e yüklemeniz için adım adım talimatlar içerir.

## 📋 Ön Hazırlık

### 1. Projeyi Build Etme

Terminal'de proje klasörüne gidin ve şu komutu çalıştırın:

```bash
npm run build
```

Bu komut:
- Projeyi statik HTML dosyalarına dönüştürür
- `out` klasöründe tüm dosyaları oluşturur
- `.htaccess` dosyasını otomatik olarak `out` klasörüne kopyalar

### 2. Build Klasörünü Kontrol Etme

Build işlemi tamamlandıktan sonra `out` klasöründe şunlar olmalı:

```
out/
├── .htaccess          ← ÖNEMLİ: Routing için gerekli
├── index.html         ← Ana sayfa
├── _next/            ← JavaScript ve CSS dosyaları (ÖNEMLİ)
├── img/              ← Görseller (yb-logo.png dahil)
├── hakkimizda/
│   └── index.html
├── dijital-cozumler/
│   └── index.html
├── urunler/
│   └── index.html
├── projelendirme/
│   └── index.html
├── iletisim/
│   └── index.html
└── gizlilik-politikasi/
    └── index.html
```

## 📤 cPanel'e Yükleme

### Yöntem 1: cPanel File Manager (Önerilen)

1. **cPanel'e Giriş Yapın**
   - cPanel hesabınıza giriş yapın
   - `https://yakinbogaz.com/cpanel` veya hosting sağlayıcınızın cPanel adresi

2. **Dosya Yöneticisini Açın**
   - cPanel ana sayfasında **"Dosya Yöneticisi"** (File Manager) bölümüne tıklayın
   - Veya **"Files"** > **"File Manager"** menüsünden erişin

3. **Hedef Klasöre Gidin**
   - Sol panelden `public_html` veya `yakinbogaz.com` klasörüne gidin
   - Eğer alt domain kullanıyorsanız ilgili klasöre gidin

4. **Mevcut Dosyaları Yedekleyin (Önemli!)**
   - Mevcut dosyaları silmeden önce yedek alın
   - Tüm dosyaları seçip ZIP olarak sıkıştırın
   - Yedek ZIP dosyasını bilgisayarınıza indirin

5. **Yeni Dosyaları Yükleyin**

   **Seçenek A: ZIP ile Yükleme (Hızlı)**
   - Bilgisayarınızda `out` klasörünün içindeki tüm dosyaları seçin
   - ZIP olarak sıkıştırın (ör: `site.zip`)
   - cPanel File Manager'da **"Yükle"** (Upload) butonuna tıklayın
   - ZIP dosyasını sürükle-bırak veya seçerek yükleyin
   - Yükleme tamamlandıktan sonra ZIP dosyasına sağ tıklayın
   - **"Çıkar"** (Extract) seçeneğini seçin
   - Çıkarılan dosyaların `public_html` veya `yakinbogaz.com` klasörünün **içinde** olduğundan emin olun

   **Seçenek B: Tek Tek Yükleme**
   - cPanel File Manager'da **"Yükle"** (Upload) butonuna tıklayın
   - `out` klasöründeki tüm dosya ve klasörleri seçin
   - Sürükle-bırak veya seçerek yükleyin
   - **ÖNEMLİ:** `_next` klasörünü mutlaka yükleyin!
   - **ÖNEMLİ:** `img` klasörünü mutlaka yükleyin!
   - **ÖNEMLİ:** `.htaccess` dosyasını mutlaka yükleyin!

6. **Dosya İzinlerini Kontrol Edin**
   - Tüm klasörler için: **755**
   - Tüm dosyalar için: **644**
   - `.htaccess` için: **644**

### Yöntem 2: FTP ile Yükleme

1. **FTP Bilgilerinizi Alın**
   - cPanel > **"FTP Hesapları"** (FTP Accounts)
   - FTP kullanıcı adı, şifre ve sunucu adresini not edin

2. **FTP İstemcisi Kullanın**
   - FileZilla, WinSCP, Cyberduck gibi bir FTP programı kullanın
   - FTP bilgilerinizle bağlanın

3. **Dosyaları Yükleyin**
   - Uzak sunucuda `public_html` veya `yakinbogaz.com` klasörüne gidin
   - Yerel bilgisayarınızda `out` klasörüne gidin
   - `out` klasöründeki **TÜM** dosya ve klasörleri seçin
   - Sunucuya yükleyin

## ✅ Kontrol Listesi

Yükleme sonrası şunları kontrol edin:

- [ ] `index.html` dosyası yüklendi mi?
- [ ] `_next` klasörü ve içindeki dosyalar yüklendi mi?
- [ ] `img` klasörü ve `yb-logo.png` dosyası yüklendi mi?
- [ ] `.htaccess` dosyası yüklendi mi?
- [ ] Tüm sayfa klasörleri yüklendi mi? (hakkimizda, iletisim, vb.)
- [ ] Dosya izinleri doğru mu? (klasörler: 755, dosyalar: 644)

## 🧪 Siteyi Test Etme

1. Tarayıcınızda `https://yakinbogaz.com` adresine gidin
2. Şu sayfaları test edin:
   - ✅ Ana sayfa: `https://yakinbogaz.com/`
   - ✅ Hakkımızda: `https://yakinbogaz.com/hakkimizda/`
   - ✅ Dijital Çözümler: `https://yakinbogaz.com/dijital-cozumler/`
   - ✅ Ürünler: `https://yakinbogaz.com/urunler/`
   - ✅ Projelendirme: `https://yakinbogaz.com/projelendirme/`
   - ✅ İletişim: `https://yakinbogaz.com/iletisim/`
   - ✅ Gizlilik Politikası: `https://yakinbogaz.com/gizlilik-politikasi/`

3. Kontrol edin:
   - ✅ Logo görünüyor mu? (header ve footer'da)
   - ✅ Dark/Light tema geçişi çalışıyor mu?
   - ✅ Tüm görseller yükleniyor mu?
   - ✅ Menü linkleri çalışıyor mu?
   - ✅ Responsive tasarım mobilde çalışıyor mu?

## 🔧 Sorun Giderme

### Problem: Sayfalar 404 hatası veriyor

**Çözüm:**
- `.htaccess` dosyasının yüklendiğinden emin olun
- Dosya izinlerini kontrol edin (644 olmalı)
- `.htaccess` dosyasının `public_html` veya `yakinbogaz.com` klasörünün **kök dizininde** olduğundan emin olun

### Problem: Görseller görünmüyorsa

**Çözüm:**
- `img` klasörünün yüklendiğinden emin olun
- `img/yb-logo.png` dosyasının var olduğunu kontrol edin
- Dosya yollarını kontrol edin (`/img/yb-logo.png` şeklinde olmalı)

### Problem: JavaScript çalışmıyor, sayfa boş görünüyor

**Çözüm:**
- `_next` klasörünün yüklendiğinden emin olun
- `_next` klasörünün içindeki tüm dosyaların yüklendiğini kontrol edin
- Tarayıcı konsolunda (F12) hataları kontrol edin
- Dosya izinlerini kontrol edin

### Problem: CSS stilleri uygulanmıyor

**Çözüm:**
- `_next/static/css/` klasörünün yüklendiğinden emin olun
- Tarayıcı konsolunda (F12 > Network) CSS dosyalarının yüklendiğini kontrol edin

### Problem: Dark/Light tema geçişi çalışmıyor

**Çözüm:**
- JavaScript dosyalarının yüklendiğinden emin olun
- Tarayıcı konsolunda hata var mı kontrol edin
- LocalStorage'ın çalıştığından emin olun

## 📝 Önemli Notlar

1. **`out` klasörünün içindeki dosyaları yükleyin**, `out` klasörünün kendisini değil!
2. **Tüm dosyaları yükleyin** - Eksik dosya olursa site çalışmayabilir
3. **`.htaccess` dosyası kritik** - Bu dosya olmadan routing çalışmaz
4. **`_next` klasörü kritik** - JavaScript ve CSS dosyaları burada
5. **Dosya izinleri önemli** - Yanlış izinler siteyi çalıştırmayabilir

## 🎉 Başarılı Yükleme Sonrası

Yükleme başarılı olduysa:
- ✅ Site canlıda çalışıyor
- ✅ Tüm sayfalar erişilebilir
- ✅ Görseller yükleniyor
- ✅ Tema geçişi çalışıyor
- ✅ Responsive tasarım aktif

Herhangi bir sorunla karşılaşırsanız, yukarıdaki "Sorun Giderme" bölümüne bakın veya hosting sağlayıcınızın destek ekibiyle iletişime geçin.

