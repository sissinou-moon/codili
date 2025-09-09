import type { Metadata } from "next";
import { Sora, Work_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
    variable: "--font-sora",
    subsets: ["latin"],
    display: "swap",
});

const workSans = Work_Sans({
    variable: "--font-work-sans",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Codili | Web & Mobile Development",
    description: "We craft powerful, scalable apps with React, Next.js, and React Native.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            {/* LemonSqueezy loader/checkout script */}
            <script defer src="https://assets.lemonsqueezy.com/lemon.js"></script>
        </head>
        <body className={`${sora.variable} ${workSans.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
