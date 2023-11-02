import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oktan Portfolio",
  keywords: ["Next.js", "React", "JavaScript", "Portfolio", "Personal Web"],
  twitter: {
    card: "summary_large_image",
    title: "Rizky Oktan Portfolio",
    description:
      "Official personal website, 💬 Instagram: @kaleng.konguann | 🦜Twitter: @onchainmfer",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: ["https://www.rzoktan.tech/images/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
