const fs = require('fs');
const path = require('path');

// .htaccess dosyasını public'den out'a kopyala
const sourcePath = path.join(__dirname, '../public/.htaccess');
const destPath = path.join(__dirname, '../out/.htaccess');

try {
  // out klasörünün var olduğundan emin ol
  const outDir = path.join(__dirname, '../out');
  if (!fs.existsSync(outDir)) {
    console.error('❌ out klasörü bulunamadı! Önce "npm run build" çalıştırın.');
    process.exit(1);
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
  process.exit(1);
}


