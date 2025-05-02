import "./globals.scss";
import "../style/theme.scss";
import "../style/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Geist, Geist_Mono } from "next/font/google";
import LayoutWrapper from "./LayoutWrapper"; // client-side wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
