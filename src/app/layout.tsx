import type { Metadata } from "next";
import "@/assets/scss/tailwind.scss";
import '@/assets/css/material.css';
import { Nunito, Work_Sans, EB_Garamond, Kaushan_Script, Alex_Brush } from 'next/font/google';
//import "./globals.scss";


const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300','400','500','600', '700'],
  display: 'swap',
})
const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['300','400','500','600', '700'],
  display: 'swap',
})
const eb_garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  weight: ['400'],
  display: 'swap',
})


const kaushan = Kaushan_Script({
  subsets: ['latin'],
  variable: '--font-kaushan',
  weight: ['400'],
  display: 'swap',
})


const alex = Alex_Brush({
  subsets: ['latin'],
  variable: '--font-alex',
  weight: ['400'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "TIR TKACH Автосервис для грузовиков | СТО грузовых авто под Одессой в селе Великий Дальник.",
  description: "TIR TKACH предлагает клиентам полный цикл работ по ремонту грузовиков под Одессой в селе Великий Дальник. Работаем со всеми марками и модификациями.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="LTR">
      <body className={`${nunito.variable} ${work_sans.variable} ${eb_garamond.variable} ${kaushan.variable} ${alex.variable} font-nunito text-base text-black dark:text-white dark:bg-slate-900`}>{children}</body>
    </html>
  );
}
