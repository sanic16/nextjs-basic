import Link from "next/link"
import Navbar from "@/components/Navbar"
import { Montserrat } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Zona Chapín',
  description: 'El sitio web de los chapines en el extranjero',
  openGraph: {
    title: 'Zona Chapín',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://important-archives-jsanic16.s3.amazonaws.com/css_projects/blog/jorge-ramirez-anT-7GmycsY-unsplash.jpg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://important-archives-jsanic16.s3.amazonaws.com/css_projects/blog/ibolat-liMDSHj2URE-unsplash.jpg',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']

})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}
