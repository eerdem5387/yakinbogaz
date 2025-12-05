import { GetServerSideProps } from 'next';

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://yakinbogaz.com'; // Gerçek domain ile değiştirin
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages = [
    {
      url: '/',
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      url: '/hakkimizda/',
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      url: '/dijital-cozumler/',
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      url: '/urunler/',
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      url: '/projelendirme/',
      changefreq: 'weekly',
      priority: '0.8',
    },
    {
      url: '/iletisim/',
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      url: '/gizlilik-politikasi/',
      changefreq: 'yearly',
      priority: '0.3',
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="${baseUrl}${page.url}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en${page.url}" />
  </url>`
  )
  .join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;

