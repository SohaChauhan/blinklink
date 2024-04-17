import "./globals.css";
import Head from "next/head";
import localFont from "next/font/local";
import NextAuthProvider from "../../context/NextAuthProvider";
import { Suspense } from "react";
const poppins = localFont({ src: "./fonts/Poppins-Regular.woff2" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body
        className={`${poppins.className} bg-neutral-100 container min-w-full h-fit overflow-x-hidden m-0 `}
      >
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
