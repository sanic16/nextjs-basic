import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  openGraph: {
    title: 'Next.js',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
