import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // title: "Rizky Oktan Official Personal Website",
  // type: "article",
  // description: "💬 Instagram: @kaleng.konguann | 🦜Twitter: @onchainmfer",
  // images: ['https://rzoktan.tech/images/logo-new-black.png'],
  twitter: {
    card: "summary_large_image",
    title: "Rizky Oktan Official Personal Website",
    description: "💬 Instagram: @kaleng.konguann | 🦜Twitter: @onchainmfer",
    // siteId: '1467726470533754880',
    creator: "@rzoktan",
    creatorId: "456456234532364",
    images: ["https://rzoktan.tech/images/logo-new-black.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="💬 Instagram: @kaleng.konguann | 🦜Twitter: @onchainmfer"
        /> */}
        {/* <meta
          property="og:image"
          content="https://rzoktan.tech/images/logo-new-black.png"
        />
        <meta name="twitter:card" content="summary_large_image" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
