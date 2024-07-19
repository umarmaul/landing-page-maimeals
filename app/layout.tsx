import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
    title: "Katering Sehat dan Konsultasi Ahli Gizi - Maimeals",
    description:
        "Maimeals adalah website penyedia katering sehat dan konsultasi bersama ahli gizi. Bergabunglah dengan komunitas kami untuk membangun gaya hidup sehat yang optimal.",
    keywords: "katering sehat, konsultasi ahli gizi, komunitas hidup sehat",
};

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    display: "swap",
    variable: "--font-inter",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} scroll-smooth`}>
            <body>
                <Navbar />
                <main className="relative overflow-hidden">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
