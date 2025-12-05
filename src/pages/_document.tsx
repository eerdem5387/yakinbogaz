import { Html, Head, Main, NextScript } from "next/document";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

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
        <meta name="google-site-verification" content="KEs2SiRax3UjaLfmtv1RO25J7AeEDH3-Y0CUwG6S-uk" />
        <meta name="geo.region" content="TR-53" />
        <meta name="geo.placename" content="Rize" />
        <meta name="geo.position" content="41.0201;40.5234" />
        <meta name="ICBM" content="41.0201, 40.5234" />

        {/* Google Analytics */}
        {GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX' && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
