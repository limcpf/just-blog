import { GoogleAnalytics } from "@next/third-parties/google";
import { Nanum_Gothic_Coding } from "next/font/google";
import Head from "next/head";
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
      <head>
        <style>
          {`html{width:100vw;padding:0em1em;box-sizing:border-box;}a,a:visited,a:link{color:black;}body{max-width:1280px}section{cursor:pointer;}nav a{margin-right:2em;}img{display:block;object-fit: cover;max-width:80%;background:white;}h1{font-size:32px;}main h1{font-size:36px;}h2{font-size:24px;}pre{padding:1rem;background-color:beige;}code{white-space: break-spaces;}`}
        </style>
        <style>
          {`@media(prefers-color-scheme: dark){html{background-color:#121212;color:rgba(255,255,255, 0.6)}a,a:visited,a:link{color: rgba(255,255,255, 0.6)}img{background:gray;}pre{background-color:darkslategray;}}`}
        </style>
      </head>
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
      <GoogleAnalytics gaId={process.env.GAID ?? ""} />
    </html>
  );
}
