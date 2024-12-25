import { Montserrat, Inter } from 'next/font/google'
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: "MyPage",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} font-montserrat ${inter.variable} font-inter`}>
      <body className="bg-zinc-100">{children}</body>
    </html>
  );
}