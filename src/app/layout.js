import localFont from "next/font/local";
import "./globals.css";

const DINMittelschrift = localFont({
  src: "./fonts/DINMittelschriftStd.otf",
  variable: "--font-DIN",
  weight: "100",
});

export const metadata = {
  title: "Cameron MacRae Photography"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${DINMittelschrift.variable}`}>
        {children}
      </body>
    </html>
  );
}
