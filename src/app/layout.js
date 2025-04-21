import "./globals.css";
import localFont from "next/font/local";
import NextAuthProvider from "../../context/NextAuthProvider";
const poppins = localFont({ src: "./fonts/Poppins-Regular.woff2" });
export const metadata = {
  title: "BlinkLink - Clone of Linktree",
  icons: {
    icon: "/icon.ico",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-neutral-100 container min-w-full h-fit overflow-x-hidden m-0 `}
      >
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
