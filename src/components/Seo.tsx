import Head from 'next/head';
import { useRouter } from 'next/router';

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  keywords?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  nofollow?: boolean;
}

const defaultImage = '/img/yb-logo.png';
const siteUrl = 'https://yakinbogaz.com'; // Gerçek domain ile değiştirin

export default function Seo({
  title,
  description,
  image = defaultImage,
  keywords,
  canonicalUrl,
  type = 'website',
  noindex = false,
  nofollow = false,
}: SeoProps) {
  const router = useRouter();
  const currentUrl = canonicalUrl || `${siteUrl}${router.asPath}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const fullTitle = `${title} | Yakın Boğaz E-Ticaret ve Yazılım`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Yakın Boğaz E-Ticaret ve Yazılım" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Robots */}
      {(noindex || nofollow) && (
        <meta
          name="robots"
          content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`}
        />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Yakın Boğaz E-Ticaret ve Yazılım" />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Language Alternates */}
      <link rel="alternate" hrefLang="tr" href={`${siteUrl}${router.asPath}`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en${router.asPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${router.asPath}`} />
    </Head>
  );
} 