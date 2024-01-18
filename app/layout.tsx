import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/commons/theme-provider'
import NextTopLoader from 'nextjs-toploader'
const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog I Ervin Arviandi',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body className={sora.className} suppressHydrationWarning={true}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <NextTopLoader   color='#05b6d3'
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"/>
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
