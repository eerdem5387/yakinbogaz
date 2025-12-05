import { useRouter } from 'next/router';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Service' | 'Product';
  data?: Record<string, any>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const router = useRouter();
  const baseUrl = 'https://yakinbogaz.com'; // Gerçek domain ile değiştirin

  const getStructuredData = () => {
    switch (type) {
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Yakın Boğaz E-Ticaret ve Yazılım',
          alternateName: 'YakınBoğaz Software',
          url: baseUrl,
          logo: `${baseUrl}/img/yb-logo.png`,
          description: '2020 yılından bu yana dijital çözümler sunan, eğitim teknolojileri ve yazılım geliştirme alanında uzmanlaşmış şirket.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'KANBURSIRT FABRİKA SOK NO 24',
            addressLocality: 'Rize',
            addressCountry: 'TR',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+90-464-217-15-55',
            contactType: 'customer service',
            email: 'info@yakinbogaz.com',
            availableLanguage: ['Turkish', 'English'],
          },
          sameAs: [
            // Sosyal medya linklerinizi buraya ekleyin
          ],
          foundingDate: '2020',
          founders: [
            {
              '@type': 'Person',
              name: 'Emin Usta',
            },
            {
              '@type': 'Person',
              name: 'Av. Abdulkadir Erdem',
            },
          ],
        };

      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Yakın Boğaz E-Ticaret ve Yazılım',
          url: baseUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/arama?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
        };

      case 'Service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: data?.serviceType || 'Dijital Çözümler',
          provider: {
            '@type': 'Organization',
            name: 'Yakın Boğaz E-Ticaret ve Yazılım',
          },
          areaServed: {
            '@type': 'Country',
            name: 'Turkey',
          },
          ...data,
        };

      case 'Product':
        return {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: data?.name || '',
          description: data?.description || '',
          brand: {
            '@type': 'Brand',
            name: 'YakınBoğaz',
          },
          ...data,
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData || Object.keys(structuredData).length === 0) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

