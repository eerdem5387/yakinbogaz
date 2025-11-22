const fs = require('fs');
const path = require('path');

// .htaccess dosyasını public'den out'a kopyala
// Not: Bu script sadece static export (out klasörü) olduğunda çalışır
// Vercel gibi platformlarda out klasörü oluşmaz, bu yüzden hata vermez
const sourcePath = path.join(__dirname, '../public/.htaccess');
const destPath = path.join(__dirname, '../out/.htaccess');

try {
  // out klasörünün var olup olmadığını kontrol et
  const outDir = path.join(__dirname, '../out');
  if (!fs.existsSync(outDir)) {
    // Vercel gibi platformlarda out klasörü olmayabilir, bu normal
    console.log('ℹ️  out klasörü bulunamadı. Bu, Vercel gibi platformlarda normaldir.');
    process.exit(0); // Hata vermeden çık
  }

  // .htaccess dosyasını kopyala
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log('✅ .htaccess dosyası out klasörüne kopyalandı!');
  } else {
    console.warn('⚠️  public/.htaccess dosyası bulunamadı!');
  }
} catch (error) {
  console.error('❌ Hata:', error.message);
  // Vercel'de kritik değil, hata vermeden çık
  process.exit(0);
}


