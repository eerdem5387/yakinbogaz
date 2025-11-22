import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/img/yb-logo.png" />
        <link rel="shortcut icon" type="image/png" href="/img/yb-logo.png" />
        <link rel="apple-touch-icon" href="/img/yb-logo.png" />
        
        {/* Meta Tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
