# cPanel'e Yükleme Talimatları

Bu dosya, Next.js projesini cPanel'e yüklemek için gerekli adımları içerir.

## Adım 1: Projeyi Build Etme

Terminal'de proje klasörüne gidin ve şu komutu çalıştırın:

```bash
npm run build
```

Bu komut `out` klasöründe statik HTML dosyalarını oluşturur.

## Adım 2: Build Klasörünü Kontrol Etme

Build işlemi tamamlandıktan sonra `out` klasöründe şu dosyalar olmalı:
- `index.html` (ana sayfa)
- `_next/` klasörü (JavaScript ve CSS dosyaları)
- `img/` klasörü (görseller)
- Tüm sayfa klasörleri (`hakkimizda/`, `iletisim/`, vb.)

## Adım 3: cPanel'e Yükleme

### Yöntem 1: cPanel File Manager ile

1. cPanel'e giriş yapın
2. **Dosya Yöneticisi** (File Manager) bölümüne gidin
3. `public_html` veya `yakinbogaz.com` klasörüne gidin
4. Mevcut dosyaları yedekleyin (gerekirse)
5. `out` klasöründeki **TÜM** dosya ve klasörleri seçin
6. ZIP olarak sıkıştırın (isteğe bağlı - daha hızlı yükleme için)
7. cPanel File Manager'da **Yükle** (Upload) butonuna tıklayın
8. ZIP dosyasını yükleyin ve çıkarın
9. VEYA doğrudan tüm dosyaları sürükle-bırak ile yükleyin

### Yöntem 2: FTP ile

1. FTP istemcinizi kullanın (FileZilla, WinSCP, vb.)
2. cPanel FTP bilgilerinizle bağlanın
3. `public_html` veya `yakinbogaz.com` klasörüne gidin
4. `out` klasöründeki **TÜM** dosya ve klasörleri FTP ile yükleyin

## Adım 4: .htaccess Dosyasını Kontrol Etme

`.htaccess` dosyası `out` klasörüne otomatik olarak kopyalanmalı. Eğer kopyalanmadıysa:

1. `public/.htaccess` dosyasını kopyalayın
2. `out/.htaccess` olarak yapıştırın
3. cPanel'e yüklerken bu dosyayı da yüklediğinizden emin olun

## Adım 5: Dosya İzinlerini Kontrol Etme

cPanel'de dosya izinlerini kontrol edin:
- Klasörler: `755`
- Dosyalar: `644`
- `.htaccess`: `644`

## Adım 6: Siteyi Test Etme

1. Tarayıcınızda `https://yakinbogaz.com` adresine gidin
2. Tüm sayfaların çalıştığını kontrol edin:
   - Ana sayfa (/)
   - Hakkımızda (/hakkimizda)
   - Dijital Çözümler (/dijital-cozumler)
   - Ürünler (/urunler)
   - Projelendirme (/projelendirme)
   - İletişim (/iletisim)
   - Gizlilik Politikası (/gizlilik-politikasi)

## Önemli Notlar

- `out` klasörünün **içindeki** dosyaları yükleyin, `out` klasörünün kendisini değil
- `_next` klasörünü mutlaka yükleyin (JavaScript ve CSS dosyaları burada)
- `img` klasörünü mutlaka yükleyin (logolar ve görseller burada)
- `.htaccess` dosyasını mutlaka yükleyin (routing için gerekli)

## Sorun Giderme

### Sayfalar 404 hatası veriyorsa:
- `.htaccess` dosyasının yüklendiğinden emin olun
- Dosya izinlerini kontrol edin

### Görseller görünmüyorsa:
- `img` klasörünün yüklendiğinden emin olun
- Dosya yollarını kontrol edin (`/img/yb-logo.png`)

### JavaScript çalışmıyorsa:
- `_next` klasörünün yüklendiğinden emin olun
- Tarayıcı konsolunda hataları kontrol edin


