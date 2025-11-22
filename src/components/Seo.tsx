import Head from 'next/head';

interface SeoProps {
  title: string;
  description: string;
  image?: string;
}

export default function Seo({ title, description, image }: SeoProps) {
  return (
    <Head>
      <title>{title} | Yakın Boğaz</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
} 