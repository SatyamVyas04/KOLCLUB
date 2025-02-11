import './globals.css'

export const metadata = {
  title: 'KOLCLUB',
  description:
    'Our mission is to build a vibrant and inclusive community that empowers individuals to thrive in the dynamic world of cryptocurrencies.',
  icons: {
    icon: '/assets/hero/favicon.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Our mission is to build a vibrant and inclusive community that empowers individuals to thrive in the dynamic world of cryptocurrencies."
        />
        <meta
          name="keywords"
          content="cryptocurrency, decentralized finance, community, blockchain, KOLCLUB"
        />
        <meta name="author" content="KOLCLUB" />

        {/* Open Graph / Facebook SEO */}
        <meta property="og:title" content="KOLCLUB" />
        <meta
          property="og:description"
          content="Our mission is to build a vibrant and inclusive community that empowers individuals to thrive in the dynamic world of cryptocurrencies."
        />
        <meta property="og:image" content="/assets/hero/OgBanner.png" />
        <meta property="og:url" content="https://kolclub.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KOLCLUB" />
        <meta
          name="twitter:description"
          content="Our mission is to build a vibrant and inclusive community that empowers individuals to thrive in the dynamic world of cryptocurrencies."
        />
        <meta name="twitter:image" content="/assets/hero/OgBanner.png" />
        <link rel="icon" href="/assets/hero/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
