import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const headingFont = localFont({
  src: [
    {
      path: "../../public/fonts/Eighties-Comeback/OTF/EightiesComeback - Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Eighties-Comeback/OTF/EightiesComeback - Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Website Clone",
  description: "Pixel-perfect website clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} h-full`}
    >
      <body
        className={`${inter.className} ${headingFont.variable} antialiased min-h-full flex flex-col bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
