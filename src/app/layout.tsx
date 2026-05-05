
import type { Metadata } from "next";
import { Exo } from "next/font/google";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./globals.css";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";
import { Toaster } from "sonner";
import Providers from "@/ServicesUi/Providers";
import { FeaturesSection } from "@/ServicesUi/ServicesUi";

const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Best online store",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo.className} antialiased`}
      >
        <Providers>
          <Navbar/>
        <Toaster position="top-right" />
        {children}
        <FeaturesSection />
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}
