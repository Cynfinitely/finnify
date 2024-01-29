import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Menu from '@/components/menu'
import Logo from '@/components/logo';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Finnify',
  description: 'Easy way to learn Finnish!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className="flex min-h-screen flex-col items-center justify-between p-24">
    
    <div className='flex flex-row'>
      <Logo/>
    </div>
    <div className="flex flex-row items-center justify-between p-24 gap-52">
    <Menu/>
    <main className={inter.className}>{children}</main>
    </div>
    </body>
      
    </html>
  )
}
