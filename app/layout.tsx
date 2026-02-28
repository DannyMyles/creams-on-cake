import type { Metadata } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-display",
});


export const metadata: Metadata = {
  title: "Creams on Cakes | Premium Custom Cakes for Every Occasion",
  description: "Creams on Cakes specializes in stunning custom cakes for birthdays, weddings, and special occasions. Elegant designs, premium quality, and delicious flavors.",
  keywords: "custom cakes, birthday cakes, wedding cakes, special occasion cakes, cake design, Kenya",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen bg-cake-light font-sans">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget phoneNumber="+254701710837" />
      </body>
    </html>
  );
}

