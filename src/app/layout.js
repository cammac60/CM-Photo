import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from 'next/navigation'

import Header from './Header/page.js';
import Footer from './Footer/page.js';

const DINMittelschrift = localFont({
  src: "./fonts/DINMittelschriftStd.otf",
  variable: "--font-DIN",
  weight: "100",
});

export const metadata = {
  title: "Cameron MacRae Photography"
};

export default function RootLayout({ children }) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
