import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oktan portfolio",
  description: "This official my personal website. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/images/favicon.svg"
        type="image/svg"
        sizes="<generated>"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
