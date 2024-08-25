import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProviderTheme from "@/provider/provider-theme";

import Header from "@/components/header";

import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import appConfig from "@/app.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: appConfig.title,
    description: appConfig.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <ProviderTheme>
                <body
                    className={
                        "relative min-h-screen font-inter flex flex-col justify-between"
                    }
                >
                    <div className={"flex-1"}>
                        <Header />
                        <main
                            className={
                                "md:mb-12 my-8 min-w-full prose md:prose-lg dark:prose-invert"
                            }
                        >
                            {children}
                        </main>
                    </div>
                    <Footer />
                    <BackToTop />
                </body>
            </ProviderTheme>
        </html>
    );
}
