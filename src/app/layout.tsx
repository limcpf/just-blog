import "~/styles/globals.css";

import { Nanum_Gothic_Coding } from "next/font/google";
import Link from "next/link";

const inter = Nanum_Gothic_Coding({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"
});

export const metadata = {
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  robots: ["index", "follow"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={`font-sans ${inter.variable}`}>
        <header>
          <h1><Link href="/">백엔드 개발자가 만든 개발 블로그</Link></h1>
          <nav>
            <Link href={"/t"}><strong>주제</strong></Link>
            <Link href={"/s"}><strong>시리즈</strong></Link>
            <Link href={"/p"}><strong>글</strong></Link>
            <Link href={"/i"}><strong>여긴 뭐임?</strong></Link>
          </nav>
          <hr />
        </header>
        {children}
      </body>
    </html>
  );
}
