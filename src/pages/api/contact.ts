import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Rate limiting için basit bir store (production'da Redis gibi bir çözüm kullanılmalı)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limiting: 5 dakikada maksimum 3 gönderim
const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 dakika
const RATE_LIMIT_MAX = 3;

function getClientIP(req: NextApiRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  const realIP = req.headers['x-real-ip'];
  
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  if (typeof realIP === 'string') {
    return realIP;
  }
  return req.socket.remoteAddress || 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    // Yeni kayıt veya süre dolmuş
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false; // Rate limit aşıldı
  }

  record.count++;
  return true;
}

// Eski kayıtları temizle (memory leak önleme)
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW);

// reCAPTCHA doğrulama
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    // reCAPTCHA key yoksa, development için true döndür
    console.warn('RECAPTCHA_SECRET_KEY not set, skipping verification');
    return true;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

// SMTP transporter oluşturma fonksiyonu
function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error('SMTP environment variables are not properly configured');
  }

  const portNumber = parseInt(port);
  const isSecure = portNumber === 465;

  // Node.js constants modülünü import et
  const constants = require('constants');

  return nodemailer.createTransport({
    host: host,
    port: portNumber,
    secure: isSecure, // Port 465 için SSL
    auth: {
      user: user,
      pass: pass,
    },
    tls: {
      rejectUnauthorized: false, // Natro için gerekli
      // Eski SSL renegotiation desteği için
      secureOptions: constants.SSL_OP_LEGACY_SERVER_CONNECT,
      minVersion: 'TLSv1', // Minimum TLS versiyonu
    },
    // Connection timeout ayarları
    socketTimeout: 10000,
    connectionTimeout: 10000,
    // Eski sunucularla uyumluluk için
    requireTLS: false,
  });
}

// XSS koruması için HTML escape
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
  recaptchaToken?: string;
};

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Sadece POST isteklerine izin ver
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Rate limiting kontrolü
    const clientIP = getClientIP(req);
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({
        success: false,
        message: 'Çok fazla istek gönderdiniz. Lütfen birkaç dakika sonra tekrar deneyin.',
      });
    }

    // Form verilerini al
    const { name, email, phone, company, service, message, recaptchaToken }: ContactFormData = req.body;

    // Validasyon
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Lütfen tüm zorunlu alanları doldurun.',
      });
    }

    // Email format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Geçerli bir email adresi giriniz.',
      });
    }

    // reCAPTCHA doğrulama
    if (recaptchaToken) {
      const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
      if (!isValidRecaptcha) {
        return res.status(400).json({
          success: false,
          message: 'reCAPTCHA doğrulaması başarısız. Lütfen tekrar deneyin.',
        });
      }
    }

    // SMTP transporter oluştur
    let transporter;
    try {
      transporter = createTransporter();
      // SMTP bağlantısını test et
      await transporter.verify();
    } catch (smtpError) {
      console.error('SMTP Connection Error:', smtpError);
      const smtpErrorMessage = smtpError instanceof Error ? smtpError.message : 'SMTP connection failed';
      console.error('SMTP Config Check:', {
        host: process.env.SMTP_HOST || 'MISSING',
        port: process.env.SMTP_PORT || 'MISSING',
        user: process.env.SMTP_USER || 'MISSING',
        pass: process.env.SMTP_PASS ? '***' : 'MISSING',
      });
      return res.status(500).json({
        success: false,
        message: 'Email servisi yapılandırma hatası. Lütfen site yöneticisi ile iletişime geçin.',
      });
    }

    // Email içeriği oluştur
    const recipientEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER || 'info@yakinbogaz.com';
    
    // Hizmet türü çevirisi
    const serviceLabels: { [key: string]: string } = {
      'web': 'Web Sayfası',
      'ecommerce': 'E-Ticaret',
      'mobile': 'Mobil Uygulama',
      'custom': 'Özel Yazılım',
      'design': 'Marka Tasarımı',
      'other': 'Diğer'
    };
    const serviceLabel = service ? (serviceLabels[service] || escapeHtml(service)) : 'Genel İletişim';
    
    // XSS koruması için input'ları temizle
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : '';
    const safeCompany = company ? escapeHtml(company) : '';
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
    
    const mailOptions = {
      from: `"YakınBoğaz Software" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `📧 Yeni İletişim Formu Mesajı - ${serviceLabel}`,
      html: `
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yeni İletişim Formu Mesajı</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f7fa;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f7fa; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header with Gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                ✉️ Yeni İletişim Mesajı
              </h1>
              <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 400;">
                ${new Date().toLocaleString('tr-TR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric', 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Contact Information Card -->
              <div style="background: linear-gradient(135deg, #f6f8fb 0%, #e9ecef 100%); border-radius: 12px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #667eea;">
                <h2 style="margin: 0 0 20px 0; color: #1a202c; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; width: 32px; height: 32px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 16px;">👤</span>
                  İletişim Bilgileri
                </h2>
                
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid rgba(0, 0, 0, 0.05);">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td width="120" style="color: #718096; font-size: 14px; font-weight: 500;">Ad Soyad:</td>
                          <td style="color: #2d3748; font-size: 15px; font-weight: 600;">${safeName}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid rgba(0, 0, 0, 0.05);">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td width="120" style="color: #718096; font-size: 14px; font-weight: 500;">Email:</td>
                          <td>
                            <a href="mailto:${safeEmail}" style="color: #667eea; font-size: 15px; font-weight: 600; text-decoration: none;">${safeEmail}</a>
                            <span style="display: inline-block; margin-left: 8px; background: #667eea; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 600;">Yanıtla</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  ${safePhone ? `
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid rgba(0, 0, 0, 0.05);">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td width="120" style="color: #718096; font-size: 14px; font-weight: 500;">Telefon:</td>
                          <td>
                            <a href="tel:${safePhone}" style="color: #2d3748; font-size: 15px; font-weight: 600; text-decoration: none;">${safePhone}</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  ` : ''}
                  ${safeCompany ? `
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid rgba(0, 0, 0, 0.05);">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td width="120" style="color: #718096; font-size: 14px; font-weight: 500;">Şirket:</td>
                          <td style="color: #2d3748; font-size: 15px; font-weight: 600;">${safeCompany}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  ` : ''}
                  ${service ? `
                  <tr>
                    <td style="padding: 12px 0;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td width="120" style="color: #718096; font-size: 14px; font-weight: 500;">Hizmet Türü:</td>
                          <td>
                            <span style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600;">${serviceLabel}</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  ` : ''}
                </table>
              </div>

              <!-- Message Card -->
              <div style="background: #ffffff; border: 2px solid #e2e8f0; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                <h2 style="margin: 0 0 20px 0; color: #1a202c; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; width: 32px; height: 32px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 16px;">💬</span>
                  Mesaj İçeriği
                </h2>
                <div style="background: #f7fafc; border-left: 4px solid #f5576c; padding: 20px; border-radius: 8px; margin-top: 15px;">
                  <p style="margin: 0; color: #2d3748; font-size: 15px; line-height: 1.8; white-space: pre-wrap; font-family: 'Georgia', serif;">${safeMessage}</p>
                </div>
              </div>

              <!-- Quick Action Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(serviceLabel)}&body=Merhaba ${encodeURIComponent(safeName)},%0D%0A%0D%0A" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);">
                      ✉️ Hemen Yanıtla
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background: #f7fafc; padding: 25px 30px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0 0 10px 0; color: #718096; font-size: 13px; line-height: 1.6;">
                Bu mesaj <strong style="color: #2d3748;">yakinbogaz.com</strong> web sitesindeki iletişim formundan gönderilmiştir.
              </p>
              <p style="margin: 0; color: #a0aec0; font-size: 12px;">
                © ${new Date().getFullYear()} YakınBoğaz Software. Tüm hakları saklıdır.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
      text: `
═══════════════════════════════════════════════════════
  ✉️ YENİ İLETİŞİM FORMU MESAJI
═══════════════════════════════════════════════════════

📅 Tarih: ${new Date().toLocaleString('tr-TR')}
📋 Hizmet: ${serviceLabel}

───────────────────────────────────────────────────────
👤 İLETİŞİM BİLGİLERİ
───────────────────────────────────────────────────────

Ad Soyad: ${name}
Email: ${email}
${phone ? `Telefon: ${phone}` : ''}
${company ? `Şirket: ${company}` : ''}
${service ? `Hizmet Türü: ${serviceLabel}` : ''}

───────────────────────────────────────────────────────
💬 MESAJ İÇERİĞİ
───────────────────────────────────────────────────────

${message}

───────────────────────────────────────────────────────

Bu mesaj yakinbogaz.com web sitesindeki iletişim formundan gönderilmiştir.

© ${new Date().getFullYear()} YakınBoğaz Software
      `,
    };

    // Email gönder
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', {
        messageId: info.messageId,
        to: recipientEmail,
        from: mailOptions.from,
      });
    } catch (sendError) {
      console.error('Email send error:', sendError);
      const sendErrorMessage = sendError instanceof Error ? sendError.message : 'Unknown send error';
      console.error('Send error details:', {
        error: sendErrorMessage,
        code: (sendError as any)?.code,
        command: (sendError as any)?.command,
        response: (sendError as any)?.response,
      });
      throw sendError;
    }

    return res.status(200).json({
      success: true,
      message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
    });
  } catch (error) {
    // Detaylı hata loglama
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    const errorCode = (error as any)?.code;
    const errorResponse = (error as any)?.response;
    
    console.error('=== Contact Form Error ===');
    console.error('Error Message:', errorMessage);
    console.error('Error Code:', errorCode);
    console.error('Error Stack:', errorStack);
    if (errorResponse) {
      console.error('Error Response:', errorResponse);
    }
    console.error('Environment Check:', {
      SMTP_HOST: process.env.SMTP_HOST ? '✓ Set' : '✗ Missing',
      SMTP_PORT: process.env.SMTP_PORT ? '✓ Set' : '✗ Missing',
      SMTP_USER: process.env.SMTP_USER ? '✓ Set' : '✗ Missing',
      SMTP_PASS: process.env.SMTP_PASS ? '✓ Set' : '✗ Missing',
      CONTACT_EMAIL: process.env.CONTACT_EMAIL ? '✓ Set' : '✗ Missing',
      RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY ? '✓ Set' : '✗ Missing',
    });
    console.error('=======================');
    
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    // SMTP hatası kontrolü
    if (
      errorMessage.includes('SMTP') || 
      errorMessage.includes('transporter') || 
      errorMessage.includes('authentication') ||
      errorMessage.includes('ECONNREFUSED') ||
      errorMessage.includes('ETIMEDOUT') ||
      errorCode === 'EAUTH' ||
      errorCode === 'ECONNECTION'
    ) {
      return res.status(500).json({
        success: false,
        message: 'Email gönderim servisi yapılandırma hatası. Lütfen site yöneticisi ile iletişime geçin.',
      });
    }
    
    // reCAPTCHA hatası
    if (errorMessage.includes('reCAPTCHA') || errorMessage.includes('recaptcha')) {
      return res.status(500).json({
        success: false,
        message: 'Güvenlik doğrulaması hatası. Lütfen tekrar deneyin.',
      });
    }
    
    return res.status(500).json({
      success: false,
      message: isDevelopment 
        ? `Bir hata oluştu: ${errorMessage}${errorCode ? ` (Code: ${errorCode})` : ''}` 
        : 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin veya doğrudan email gönderin.',
    });
  }
}

