import './globals.css'

export const metadata = {
  title: 'KOLCLUB',
  description:
    'Our mission is to build a vibrant and inclusive community that empowers individuals to thrive in the dynamic world of cryptocurrencies. By fostering connections, sharing knowledge, and providing valuable resources, we aim to equip everyone - whether beginners or experts - with the tools and confidence needed to succeed in the evolving landscape of decentralized finance.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
