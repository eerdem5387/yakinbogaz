# Google Analytics Kurulum Rehberi

## 1. Google Analytics Hesabı Oluşturma

1. [Google Analytics](https://analytics.google.com/) sitesine gidin
2. Hesap oluşturun veya mevcut hesabınızla giriş yapın
3. "Admin" (Yönetim) bölümüne gidin
4. "Create Property" (Özellik Oluştur) butonuna tıklayın
5. Özellik adını girin: "YakınBoğaz Website"
6. Zaman dilimi ve para birimini seçin
7. "Create" butonuna tıklayın

## 2. Measurement ID'yi Alma

1. Google Analytics'te "Admin" > "Data Streams" (Veri Akışları) bölümüne gidin
2. "Web" seçeneğine tıklayın
3. Website URL'nizi girin: `https://yakinbogaz.com`
4. Stream adını girin: "YakınBoğaz Website"
5. "Create stream" butonuna tıklayın
6. Açılan sayfada **Measurement ID**'yi kopyalayın (Format: `G-XXXXXXXXXX`)

## 3. Measurement ID'yi Projeye Ekleme

### Seçenek 1: Environment Variable (Önerilen)

1. Proje kök dizininde `.env.local` dosyası oluşturun:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
   (G-XXXXXXXXXX yerine kendi Measurement ID'nizi yazın)

2. Dosyayı kaydedin ve projeyi yeniden başlatın:
   ```bash
   npm run dev
   ```

### Seçenek 2: Direkt Kod İçinde

`src/lib/gtag.ts` dosyasındaki şu satırı düzenleyin:
```typescript
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Kendi ID'nizi yazın
```

## 4. Doğrulama

1. Siteyi deploy edin veya local'de çalıştırın
2. Google Analytics'te "Realtime" (Gerçek Zamanlı) bölümüne gidin
3. Siteyi ziyaret edin
4. Birkaç saniye içinde kendinizi "Realtime" raporunda görmelisiniz

## 5. URL Inspection (Google Search Console)

Google Search Console'da önemli sayfalarınızı manuel olarak kontrol edin:

1. Google Search Console'a giriş yapın
2. Üst kısımdaki arama çubuğuna URL yazın (örn: `https://yakinbogaz.com/`)
3. "Enter" tuşuna basın veya "Inspect URL" butonuna tıklayın
4. Sayfanın durumunu kontrol edin:
   - ✅ "URL is on Google" - Sayfa indekslenmiş
   - ⚠️ "URL is not on Google" - İndekslenmemiş, "Request Indexing" butonuna tıklayın
5. Önemli sayfalarınızı kontrol edin:
   - Ana sayfa: `https://yakinbogaz.com/`
   - Hakkımızda: `https://yakinbogaz.com/hakkimizda/`
   - Dijital Çözümler: `https://yakinbogaz.com/dijital-cozumler/`
   - Ürünler: `https://yakinbogaz.com/urunler/`
   - İletişim: `https://yakinbogaz.com/iletisim/`

## 6. İndeksleme İsteği

Eğer bir sayfa indekslenmemişse:

1. URL Inspection sayfasında "Request Indexing" butonuna tıklayın
2. Google sayfayı kuyruğa alacak ve birkaç gün içinde indeksleyecek
3. İndeksleme durumunu takip edin

## Notlar

- Google Analytics verileri gerçek zamanlı olarak görünmeye başlar
- İlk veriler 24-48 saat içinde tam olarak görünür
- Google Search Console'da indeksleme birkaç gün sürebilir
- Sitemap'i gönderdiyseniz, Google otomatik olarak sayfaları keşfedecek

